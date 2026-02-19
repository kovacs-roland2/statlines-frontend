import { ErrorMessageProps } from '@/types';

export const ErrorMessage = ({ message, onDismiss }: ErrorMessageProps) => {
  return (
    <div className="mb-6 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
      <div className="flex items-center justify-between">
        <div>
          <strong>Error:</strong> {message}
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="ml-4 text-red-500 hover:text-red-700"
            aria-label="Dismiss error"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};
