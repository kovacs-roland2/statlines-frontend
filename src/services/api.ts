import { MatchesResponse } from '@/types/match';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const matchesApi = {
  async getTeamMatches(teamName: string): Promise<MatchesResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/teams/${teamName}/matches`);

      if (!response.ok) {
        throw new ApiError(
          `Failed to fetch matches: ${response.statusText}`,
          response.status
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new ApiError(
        error instanceof Error ? error.message : 'An unknown error occurred'
      );
    }
  },
};
