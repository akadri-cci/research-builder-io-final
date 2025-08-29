import { Download } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DownloadButtonProps {
  text?: string
  fileName?: string
  onDownload?: () => void
  disabled?: boolean
  className?: string
}

const DownloadButton = ({
  text = 'Download the Excel File',
  fileName = 'transactions.xlsx',
  onDownload = () => {},
  disabled = false,
  className
}: DownloadButtonProps) => {
  const handleDownload = () => {
    if (disabled) return
    
    // Call the provided onDownload handler
    onDownload()
    
    // Here you would typically trigger the actual file download
    // For now, we'll just log it
    console.log('Downloading Excel file:', fileName)
  }

  return (
    <button
      onClick={handleDownload}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#4F46E5] text-white text-lg font-semibold leading-6 tracking-[-0.36px] rounded-full shadow-sm transition-all duration-200",
        "hover:bg-[#4F46E5]/90 active:bg-[#4F46E5]/95",
        "focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2",
        disabled && "opacity-50 cursor-not-allowed hover:bg-[#4F46E5]",
        "min-w-[247px] h-12",
        className
      )}
    >
      <Download className="w-5 h-5" />
      <span>{text}</span>
    </button>
  )
}

export default DownloadButton
