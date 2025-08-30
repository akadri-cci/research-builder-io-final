import { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SelectOption {
  value: string
  label: string
}

interface SelectDropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: SelectOption[]
  placeholder?: string
  error?: string
  required?: boolean
  className?: string
}

// US States options
export const US_STATES: SelectOption[] = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' }
]

const SelectDropdown = forwardRef<HTMLSelectElement, SelectDropdownProps>(
  ({ label, options, placeholder = "Select an option", error, required, className, ...props }, ref) => {
    const hasError = !!error

    return (
      <div className={cn("flex flex-col gap-1", className)}>
        {/* Label */}
        <label 
          htmlFor={props.id}
          className="text-[#121212] font-semibold text-sm leading-5"
        >
          {label}
          {required && <span className="text-[#D1493D] ml-1">*</span>}
        </label>
        
        {/* Select Container */}
        <div className="relative">
          <select
            ref={ref}
            {...props}
            className={cn(
              "flex w-full px-3 py-3 border rounded-md bg-white shadow-sm transition-colors appearance-none cursor-pointer",
              "text-lg leading-6 tracking-[-0.36px]",
              "focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]",
              "disabled:cursor-not-allowed disabled:opacity-50",
              hasError 
                ? "border-[#B83F18] focus:ring-[#B83F18] focus:border-[#B83F18]" 
                : "border-[#E2E8F0] hover:border-[#CBCFD5]",
              // Style for placeholder and selected values
              props.value ? "text-[#080325]" : "text-[#79808A]"
            )}
            aria-invalid={hasError}
            aria-describedby={error ? `${props.id}-error` : undefined}
            aria-required={required}
          >
            {/* Placeholder option */}
            <option value="" disabled className="text-[#79808A]">
              {placeholder}
            </option>
            
            {/* Options */}
            {options.map((option) => (
              <option 
                key={option.value} 
                value={option.value}
                className="text-[#080325]"
              >
                {option.label}
              </option>
            ))}
          </select>
          
          {/* Dropdown Arrow */}
          <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
            <ChevronDown className="h-6 w-6 text-[#64748B]" />
          </div>
        </div>
        
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

SelectDropdown.displayName = "SelectDropdown"

export default SelectDropdown
