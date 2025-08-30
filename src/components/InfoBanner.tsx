import { Info } from 'lucide-react'

interface InfoBannerProps {
  message?: string
  buttonText?: string
  onButtonClick?: () => void
  className?: string
}

const InfoBanner = ({
  message = "Please remember to fill that data that required for your debit card",
  buttonText = "Got it",
  onButtonClick,
  className = "",
}: InfoBannerProps) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick()
    } else {
      console.log('Info banner button clicked')
    }
  }

  return (
    <div className={`flex items-center gap-3 lg:gap-4 p-3 lg:p-6 border border-[#4F46E5] bg-[#F7F8FD] rounded-md shadow-sm ${className}`}>
      <div className="flex items-start gap-3 lg:gap-4 flex-1">
        <Info className="w-5 h-5 lg:w-6 lg:h-6 text-[#4F46E5] flex-shrink-0 mt-0.5" />
        <p className="text-xs lg:text-sm text-[#4F46E5] leading-4 lg:leading-5 flex-1">
          {message}
        </p>
      </div>
      <button
        onClick={handleButtonClick}
        className="px-3 lg:px-4 py-2 text-xs lg:text-sm font-semibold text-[#79808A] bg-white border border-[#E2E8F0] rounded-full hover:bg-gray-50 transition-colors shadow-sm flex-shrink-0"
      >
        {buttonText}
      </button>
    </div>
  )
}

export default InfoBanner
