import { Copy, EyeOff } from 'lucide-react'

interface CardInfoProps {
  cardNumber?: string
  expiryDate?: string
  cvv?: string
  className?: string
}

const CardInfo = ({
  cardNumber = "4889 9271 1937 1932",
  expiryDate = "12/28",
  cvv = "***",
  className = "",
}: CardInfoProps) => {
  const handleCopyCardNumber = () => {
    navigator.clipboard.writeText(cardNumber.replace(/\s/g, ''))
  }

  const toggleCVVVisibility = () => {
    // This would toggle CVV visibility in a real implementation
    console.log('Toggle CVV visibility')
  }

  return (
    <div className={`space-y-3 lg:space-y-4 ${className}`}>
      <h3 className="text-base lg:text-lg font-semibold text-[#121212] tracking-tight">
        Card Information
      </h3>
      
      <div className="space-y-3">
        {/* Card Number */}
        <div className="flex items-center justify-between">
          <span className="text-sm lg:text-base text-[#344055] tracking-tight">
            Card No.
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCardNumber}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <Copy className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#64748B]" />
            </button>
            <span className="text-sm lg:text-base text-[#344055] tracking-tight font-mono">
              {cardNumber}
            </span>
          </div>
        </div>

        {/* Expiry Date */}
        <div className="flex items-center justify-between">
          <span className="text-sm lg:text-base text-[#344055] tracking-tight">
            Expiry date
          </span>
          <span className="text-sm lg:text-base text-[#344055] tracking-tight">
            {expiryDate}
          </span>
        </div>

        {/* CVV */}
        <div className="flex items-center justify-between">
          <span className="text-sm lg:text-base text-[#344055] tracking-tight">
            CVV (3-digit security code)
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleCVVVisibility}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
            >
              <EyeOff className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-[#64748B]" />
            </button>
            <span className="text-sm lg:text-base text-black tracking-tight font-mono">
              {cvv}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardInfo
