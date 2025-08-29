import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PaginationProps {
  currentPage?: number
  totalPages?: number
  totalItems?: number
  itemsPerPage?: number
  itemsPerPageOptions?: number[]
  onPageChange?: (page: number) => void
  onItemsPerPageChange?: (itemsPerPage: number) => void
  className?: string
}

const Pagination = ({
  currentPage = 1,
  totalPages = 1,
  totalItems = 23,
  itemsPerPage = 10,
  itemsPerPageOptions = [10, 25, 50, 100],
  onPageChange = () => {},
  onItemsPerPageChange = () => {},
  className
}: PaginationProps) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  const canGoPrevious = currentPage > 1
  const canGoNext = currentPage < totalPages

  return (
    <div className={cn(
      "flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8 px-4 lg:px-16 py-3 lg:py-[14px] bg-[#F8FAFC] border-t border-[#E2E8F0]",
      className
    )}>
      {/* Items per page and info - Mobile: stacked, Desktop: inline */}
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 w-full lg:w-auto">
        {/* Items per page selector */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-[#344055] font-normal leading-5">
            Items per page:
          </span>
          <div className="relative">
            <select
              value={itemsPerPage}
              onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
              className="appearance-none bg-white border border-[#E2E8F0] rounded px-3 py-2 lg:py-3 pr-8 text-sm text-[#344055] shadow-sm cursor-pointer hover:border-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5] min-w-[72px]"
            >
              {itemsPerPageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
          </div>
        </div>

        {/* Page info */}
        <div className="text-sm text-[#344055] font-normal leading-5">
          {startItem}-{endItem} of {totalItems}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center gap-3 lg:gap-[18px]">
        {/* First page */}
        <button
          onClick={() => onPageChange(1)}
          disabled={!canGoPrevious}
          className={cn(
            "w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center rounded transition-colors",
            canGoPrevious 
              ? "text-[#94A3B8] hover:text-[#64748B] hover:bg-gray-100" 
              : "text-[#94A3B8] cursor-not-allowed opacity-60"
          )}
        >
          <ChevronsLeft className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>

        {/* Previous page */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!canGoPrevious}
          className={cn(
            "w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center rounded transition-colors",
            canGoPrevious 
              ? "text-[#94A3B8] hover:text-[#64748B] hover:bg-gray-100" 
              : "text-[#94A3B8] cursor-not-allowed opacity-60"
          )}
        >
          <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>

        {/* Next page */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!canGoNext}
          className={cn(
            "w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center rounded transition-colors",
            canGoNext 
              ? "text-[#64748B] hover:text-[#374151] hover:bg-gray-100" 
              : "text-[#94A3B8] cursor-not-allowed opacity-60"
          )}
        >
          <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>

        {/* Last page */}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={!canGoNext}
          className={cn(
            "w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center rounded transition-colors",
            canGoNext 
              ? "text-[#64748B] hover:text-[#374151] hover:bg-gray-100" 
              : "text-[#94A3B8] cursor-not-allowed opacity-60"
          )}
        >
          <ChevronsRight className="w-4 h-4 lg:w-5 lg:h-5" />
        </button>
      </div>
    </div>
  )
}

export default Pagination
