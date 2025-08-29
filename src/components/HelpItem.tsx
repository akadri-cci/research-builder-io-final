import { ChevronRight } from 'lucide-react'

interface HelpItemProps {
  title: string
  color: string
  onClick?: () => void
  className?: string
}

const HelpItem = ({ title, color, onClick, className = "" }: HelpItemProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Colored Left Border */}
      <div
        className="absolute left-0 top-3 w-1 h-12 rounded-r"
        style={{ backgroundColor: color }}
      />
      
      {/* Content */}
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-3 pl-6 pr-4 border-b border-[#E2E8F0] hover:bg-gray-50 transition-colors group"
      >
        <span className="text-sm lg:text-base text-[#344055] font-medium group-hover:text-[#121212] transition-colors">
          {title}
        </span>
        <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-[#64748B] group-hover:text-[#344055] transition-colors" />
      </button>
    </div>
  )
}

export default HelpItem
