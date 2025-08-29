import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
}

const SearchBar = ({ 
  value = '', 
  onChange = () => {}, 
  placeholder = 'Search',
  className 
}: SearchBarProps) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* Search Input Field */}
      <div className="flex items-center gap-2 flex-1 lg:w-[342px] lg:flex-none px-4 lg:px-6 py-2 lg:py-3 border border-[#E2E8F0] rounded-full bg-white shadow-sm">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 text-sm lg:text-lg text-[#79808A] bg-transparent outline-none placeholder:text-[#79808A] font-normal leading-5 lg:leading-6 tracking-tight lg:tracking-[-0.36px]"
        />
      </div>
      
      {/* Search Button */}
      <button
        type="button"
        className="flex items-center justify-center w-10 h-10 bg-[#4F46E5] rounded-full shadow-sm hover:bg-[#4F46E5]/90 transition-colors"
        onClick={() => {
          // Handle search action
          console.log('Search clicked:', value)
        }}
      >
        <Search className="w-4 lg:w-[18px] h-4 lg:h-[18px] text-white" />
      </button>
    </div>
  )
}

export default SearchBar
