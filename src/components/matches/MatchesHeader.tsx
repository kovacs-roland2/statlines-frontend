import { LoadingButton } from '@/components/ui/LoadingButton';

interface MatchesHeaderProps {
  onFetchMatches: () => void;
  loading: boolean;
}

export const MatchesHeader = ({
  onFetchMatches,
  loading,
}: MatchesHeaderProps) => {
  return (
    <div className="mb-8">
      <h1 className="mb-4 text-3xl font-bold">Arsenal Matches</h1>
      <p className="mb-6 text-gray-600">
        Click the button below to fetch Arsenal's latest matches from the
        backend API.
      </p>

      <LoadingButton onClick={onFetchMatches} loading={loading}>
        Fetch Arsenal Matches
      </LoadingButton>
    </div>
  );
};
