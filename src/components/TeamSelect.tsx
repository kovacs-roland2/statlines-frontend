'use client';

import { useState } from 'react';
import { useTeams } from '@/hooks/useTeams';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function TeamSelect() {
  const { teams, loading, error, clearError } = useTeams();
  const [selectedTeam, setSelectedTeam] = useState<string>('');

  if (error) {
    return (
      <div className="text-red-500">
        Error loading teams: {error}
        <button onClick={clearError} className="ml-2 underline">
          Retry
        </button>
      </div>
    );
  }

  if (loading) {
    return <div className="text-gray-500">Loading teams...</div>;
  }

  return (
    <Select value={selectedTeam} onValueChange={setSelectedTeam}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select a team" />
      </SelectTrigger>
      <SelectContent>
        {teams.map(team => (
          <SelectItem key={team.id} value={team.id.toString()}>
            {team.name} ({team.short_name})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
