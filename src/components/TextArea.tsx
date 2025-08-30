import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  required?: boolean
  className?: string
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, required, className, rows = 4, ...props }, ref) => {
    const hasError = !!error

    return (
      <div className={cn('flex flex-col gap-1', className)}>
        {/* Label */}
        <label
          htmlFor={props.id}
          className="text-[#121212] font-semibold text-sm leading-5"
        >
          {label}
          {required && <span className="text-[#D1493D] ml-1">*</span>}
        </label>

        {/* TextArea Field */}
        <textarea
          ref={ref}
          rows={rows}
          {...props}
          className={cn(
            'flex w-full px-3 py-3 border rounded-md bg-white shadow-sm transition-colors resize-y',
            'text-lg leading-6 tracking-[-0.36px] placeholder:text-[#79808A]',
            'focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'min-h-[120px]', // Ensure minimum height for better UX
            hasError
              ? 'border-[#B83F18] text-[#080325] focus:ring-[#B83F18] focus:border-[#B83F18]'
              : 'border-[#E2E8F0] text-[#080325] hover:border-[#CBCFD5]'
          )}
          aria-invalid={hasError}
          aria-describedby={error ? `${props.id}-error` : undefined}
          aria-required={required}
        />

        {/* Error Message */}
        {error && (
          <span
            id={`${props.id}-error`}
            className="text-[#B83F18] text-sm leading-5 font-normal"
            role="alert"
            aria-live="polite"
          >
            {error}
          </span>
        )}
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'

export default TextArea
