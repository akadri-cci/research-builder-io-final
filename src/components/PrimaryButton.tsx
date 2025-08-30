import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  loading?: boolean
  className?: string
}

const PrimaryButton = forwardRef<HTMLButtonElement, PrimaryButtonProps>(
  ({ children, loading = false, disabled, className, ...props }, ref) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        {...props}
        className={cn(
          'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#4F46E5] text-white shadow-sm transition-all duration-200',
          'text-lg font-semibold leading-6 tracking-[-0.36px]',
          'hover:bg-[#4F46E5]/90 active:bg-[#4F46E5]/95',
          'focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#4F46E5]',
          className
        )}
        aria-disabled={isDisabled}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        <span>{loading ? 'Sending...' : children}</span>
      </button>
    )
  }
)

PrimaryButton.displayName = 'PrimaryButton'

export default PrimaryButton
