export interface Team {
  id: number;
  name: string;
  short_name: string;
}

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
