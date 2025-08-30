import { ChevronRight } from 'lucide-react'

interface HelpItemProps {
  title: string
  color: string
  onClick?: () => void
  className?: string
}

const HelpItem = ({ title, color, onClick, className = '' }: HelpItemProps) => {
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
        <span className="text-sm lg:text-base text-[#344055] font-semibold tracking-tight group-hover:text-[#121212] transition-colors">
          {title}
        </span>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[#E2E8F0] bg-white group-hover:bg-gray-50">
          <ChevronRight className="w-4 h-4 text-[#64748B] group-hover:text-[#344055] transition-colors" />
        </span>
      </button>
    </div>
  )
}

export default HelpItem
