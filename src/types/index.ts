// Team types
export interface Team {
  id: number;
  name: string;
  short_name: string;
}

export interface TeamsResponse {
  teams: Team[];
  total_teams: number;
}

export interface UseTeamsReturn {
  teams: Team[];
  loading: boolean;
  error: string | null;
  clearError: () => void;
}

export interface TeamContextType {
  selectedTeamId: string;
  setSelectedTeamId: (teamId: string) => void;
}

export interface TeamSelectProps {
  disabled?: boolean;
}

// Fact types
export interface Fact {
  stat: string;
  value: number;
  rank: number;
  total: number;
}

export interface FactsResponse {
  team_name: string;
  season: string;
  top_5_highest: Fact[];
  top_5_lowest: Fact[];
}

export interface UseFactsReturn {
  facts: FactsResponse | null;
  loading: boolean;
  error: string | null;
  fetchFacts: (teamName: string) => Promise<void>;
  clearError: () => void;
}

// Match types
export interface Match {
  id: number;
  match_date: string;
  match_time: string;
  week_number: number;
  home_team: Team;
  away_team: Team;
  home_score: number;
  away_score: number;
  home_xg: number;
  away_xg: number;
  venue: string;
  attendance: number;
  referee: string;
  competition: string;
  is_home_match: boolean;
}

export interface MatchesResponse {
  team_name: string;
  matches: Match[];
  total_matches_found: number;
}

export interface MatchesListProps {
  matches: MatchesResponse;
}

export interface MatchCardProps {
  match: Match;
}

export interface MatchesHeaderProps {
  loading: boolean;
}

export interface UseMatchesReturn {
  matches: MatchesResponse | null;
  loading: boolean;
  error: string | null;
  fetchMatches: (teamName: string) => Promise<void>;
  clearError: () => void;
}

// UI component types
export interface ErrorMessageProps {
  message: string;
  onDismiss?: () => void;
}

export interface LoadingButtonProps {
  onClick: () => void;
  loading: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  loadingText?: string;
  className?: string;
}
