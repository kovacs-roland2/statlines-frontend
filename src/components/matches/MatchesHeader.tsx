'use client';

interface MatchesHeaderProps {
  loading: boolean;
}

export function MatchesHeader({ loading }: MatchesHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div className="text-sm text-gray-500">
        {loading && 'Loading matches...'}
      </div>
    </div>
  );
}
