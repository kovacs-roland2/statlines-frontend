import { useState, useCallback } from 'react';
import { MatchesResponse, UseMatchesReturn } from '@/types';
import { matchesApi, ApiError } from '@/services/api';

export const useMatches = (): UseMatchesReturn => {
  const [matches, setMatches] = useState<MatchesResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMatches = useCallback(async (teamName: string) => {
    setLoading(true);
    setError(null);

    try {
      const data = await matchesApi.getTeamMatches(teamName);
      setMatches(data);
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
    matches,
    loading,
    error,
    fetchMatches,
    clearError,
  };
};
