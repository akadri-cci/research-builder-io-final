import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FilterOption {
  value: string
  label: string
}

interface FilterDropdownProps {
  options: FilterOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  width?: string
}

const FilterDropdown = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
  className = "",
  width = "w-auto",
}: FilterDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const selectedOption = options.find(option => option.value === value)

  const handleSelect = (selectedValue: string) => {
    onChange(selectedValue)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${width} ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm text-[#344055] bg-white border border-[#E2E8F0] rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-transparent"
      >
        <span className="truncate">
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-[#424242] transition-transform ml-2 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute z-20 w-full mt-1 bg-white border border-[#E2E8F0] rounded-md shadow-lg">
            <div className="py-1">
              {options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  className={`w-full px-3 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${
                    value === option.value
                      ? 'text-[#4F46E5] bg-[#F7F8FD]'
                      : 'text-[#344055]'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default FilterDropdown
export type { FilterOption }
