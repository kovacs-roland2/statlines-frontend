import { useState, useCallback } from 'react';
import { factsApi, ApiError } from '@/services/api';

interface Fact {
  stat: string;
  value: number;
  rank: number;
  total: number;
}

interface FactsResponse {
  team_name: string;
  season: string;
  top_5_highest: Fact[];
  top_5_lowest: Fact[];
}

interface UseFactsReturn {
  facts: FactsResponse | null;
  loading: boolean;
  error: string | null;
  fetchFacts: (teamName: string) => Promise<void>;
  clearError: () => void;
}

export const useFacts = (): UseFactsReturn => {
  const [facts, setFacts] = useState<FactsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchFacts = useCallback(async (teamName: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await factsApi.getTeamFacts(teamName);
      setFacts(data);
    } catch (err) {
      if (err instanceof ApiError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    facts,
    loading,
    error,
    fetchFacts,
    clearError,
  };
};
