import { Match } from '@/types/match';
import { formatDate, formatTime } from '@/utils/dateHelpers';

interface MatchCardProps {
  match: Match;
}

export const MatchCard = ({ match }: MatchCardProps) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            {match.home_team.name} vs {match.away_team.name}
          </h3>
          <p className="text-gray-600">
            {formatDate(match.match_date)} at {formatTime(match.match_time)}
          </p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">
            {match.home_score} - {match.away_score}
          </div>
          <div className="text-sm text-gray-500">Week {match.week_number}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-medium">Venue:</span>
          <p className="text-gray-600">{match.venue}</p>
        </div>
        <div>
          <span className="font-medium">Attendance:</span>
          <p className="text-gray-600">{match.attendance.toLocaleString()}</p>
        </div>
        <div>
          <span className="font-medium">Referee:</span>
          <p className="text-gray-600">{match.referee}</p>
        </div>
        <div>
          <span className="font-medium">Competition:</span>
          <p className="text-gray-600">{match.competition}</p>
        </div>
      </div>

      <div className="mt-4 border-t border-gray-100 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="font-medium">Expected Goals (xG):</span>
          </div>
          <div className="flex gap-4">
            <span className="text-sm">
              {match.home_team.short_name}: {match.home_xg}
            </span>
            <span className="text-sm">
              {match.away_team.short_name}: {match.away_xg}
            </span>
          </div>
        </div>
        {match.is_home_match ? (
          <p className="mt-2 text-sm text-green-600">Home match for Arsenal</p>
        ) : (
          <p className="mt-2 text-sm text-blue-600">Away match for Arsenal</p>
        )}
      </div>
    </div>
  );
};
