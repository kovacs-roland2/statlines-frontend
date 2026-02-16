import { useState, useEffect } from 'react';
import { teamsApi, ApiError } from '@/services/api';

interface Team {
  id: number;
  name: string;
  short_name: string;
}

interface UseTeamsReturn {
  teams: Team[];
  loading: boolean;
  error: string | null;
  clearError: () => void;
}

export const useTeams = (): UseTeamsReturn => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await teamsApi.getTeams();
        setTeams(data.teams);
      } catch (err) {
        if (err instanceof ApiError) {
          setError(err.message);
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  const clearError = () => {
    setError(null);
  };

  return {
    teams,
    loading,
    error,
    clearError,
  };
};
