'use client';

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
