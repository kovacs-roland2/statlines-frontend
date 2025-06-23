interface LoadingButtonProps {
  onClick: () => void;
  loading: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  loadingText?: string;
  className?: string;
}

export const LoadingButton = ({
  onClick,
  loading,
  disabled = false,
  children,
  loadingText = 'Loading...',
  className = '',
}: LoadingButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={loading || disabled}
      className={`rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700 disabled:bg-blue-400 ${className}`}
    >
      {loading ? loadingText : children}
    </button>
  );
};
