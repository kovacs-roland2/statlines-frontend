'use client';

import { useMatches } from '@/hooks/useMatches';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { MatchesHeader } from '@/components/matches/MatchesHeader';
import { MatchesList } from '@/components/matches/MatchesList';

export default function MatchesPage() {
  const { matches, loading, error, fetchMatches, clearError } = useMatches();

  const handleFetchMatches = () => {
    fetchMatches('Arsenal');
  };

  return (
    <div className="container mx-auto max-w-6xl p-8">
      <MatchesHeader onFetchMatches={handleFetchMatches} loading={loading} />

      {error && <ErrorMessage message={error} onDismiss={clearError} />}

      {matches && <MatchesList matches={matches} />}
    </div>
  );
}
