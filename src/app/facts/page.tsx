'use client';

import { useEffect } from 'react';
import { useFacts } from '@/hooks/useFacts';
import { useTeamContext } from '@/context/TeamContext';
import { useTeams } from '@/hooks/useTeams';
import { ErrorMessage } from '@/components/ui/ErrorMessage';

export default function FactsPage() {
  const { facts, loading, error, fetchFacts, clearError } = useFacts();
  const { selectedTeamId } = useTeamContext();
  const { teams } = useTeams();

  useEffect(() => {
    if (selectedTeamId) {
      const team = teams.find(t => t.id.toString() === selectedTeamId);
      if (team) {
        fetchFacts(team.name);
      }
    }
  }, [selectedTeamId, teams, fetchFacts]);

  return (
    <div className="container mx-auto max-w-6xl">
      <h1 className="mb-8 text-3xl font-semibold">Facts</h1>

      {error && <ErrorMessage message={error} onDismiss={clearError} />}

      {loading && <div className="text-gray-500">Loading facts...</div>}

      {facts && (
        <div className="space-y-8">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="mb-4 text-2xl font-semibold">
              {facts.team_name} - {facts.season}
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-lg font-semibold text-green-600">
                  Top 5 Highest Stats
                </h3>
                <ul className="space-y-3">
                  {facts.top_5_highest.map((stat, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between rounded bg-gray-50 p-3"
                    >
                      <span className="capitalize">
                        {stat.stat.replace(/_/g, ' ')}
                      </span>
                      <div className="text-right">
                        <div className="font-semibold">{stat.value}</div>
                        <div className="text-sm text-gray-500">
                          Rank {stat.rank}/{stat.total}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold text-red-600">
                  Top 5 Lowest Stats
                </h3>
                <ul className="space-y-3">
                  {facts.top_5_lowest.map((stat, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between rounded bg-gray-50 p-3"
                    >
                      <span className="capitalize">
                        {stat.stat.replace(/_/g, ' ')}
                      </span>
                      <div className="text-right">
                        <div className="font-semibold">{stat.value}</div>
                        <div className="text-sm text-gray-500">
                          Rank {stat.rank}/{stat.total}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
