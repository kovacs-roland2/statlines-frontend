'use client';

import { useEffect } from 'react';
import { useTeams } from '@/hooks/useTeams';
import { useTeamContext } from '@/context/TeamContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface TeamSelectProps {
  disabled?: boolean;
}

export default function TeamSelect({ disabled = false }: TeamSelectProps) {
  const { teams, loading, error, clearError } = useTeams();
  const { selectedTeamId, setSelectedTeamId } = useTeamContext();

  useEffect(() => {
    if (teams.length > 0 && !selectedTeamId) {
      setSelectedTeamId(teams[0].id.toString());
    }
  }, [teams, selectedTeamId, setSelectedTeamId]);

  const handleChange = (value: string) => {
    setSelectedTeamId(value);
  };

  if (error) {
    return (
      <div className="text-sm text-red-500">
        Error loading teams
        <button onClick={clearError} className="ml-2 underline">
          Retry
        </button>
      </div>
    );
  }

  if (loading) {
    return <div className="text-sm text-gray-500">Loading teams...</div>;
  }

  return (
    <Select
      value={selectedTeamId}
      onValueChange={handleChange}
      disabled={disabled}
    >
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Select a team" />
      </SelectTrigger>
      <SelectContent className="max-h-64 overflow-y-auto">
        {teams.map(team => (
          <SelectItem key={team.id} value={team.id.toString()}>
            {team.name} ({team.short_name})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
