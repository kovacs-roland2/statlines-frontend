'use client';

import { useEffect } from 'react';
import { useMatches } from '@/hooks/useMatches';
import { useTeamContext } from '@/context/TeamContext';
import { useTeams } from '@/hooks/useTeams';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { MatchesHeader } from '@/components/matches/MatchesHeader';
import { MatchesList } from '@/components/matches/MatchesList';

export default function MatchesPage() {
  const { matches, loading, error, fetchMatches, clearError } = useMatches();
  const { selectedTeamId } = useTeamContext();
  const { teams } = useTeams();

  useEffect(() => {
    if (selectedTeamId) {
      const team = teams.find(t => t.id.toString() === selectedTeamId);
      if (team) {
        fetchMatches(team.name);
      }
    }
  }, [selectedTeamId, teams, fetchMatches]);

  return (
    <div className="container mx-auto max-w-6xl">
      <MatchesHeader loading={loading} />

      {error && <ErrorMessage message={error} onDismiss={clearError} />}

      {matches && <MatchesList matches={matches} />}
    </div>
  );
}
