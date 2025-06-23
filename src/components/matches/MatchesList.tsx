import { MatchesResponse } from '@/types/match';
import { MatchCard } from './MatchCard';

interface MatchesListProps {
  matches: MatchesResponse;
}

export const MatchesList = ({ matches }: MatchesListProps) => {
  if (matches.matches.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">
          No matches found for {matches.team_name}.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-gray-50 p-4">
        <h2 className="mb-2 text-xl font-semibold">{matches.team_name}</h2>
        <p className="text-gray-600">
          Total matches found: {matches.total_matches_found}
        </p>
      </div>

      <div className="grid gap-6">
        {matches.matches.map(match => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
};
