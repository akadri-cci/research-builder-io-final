import { MoreHorizontal } from 'lucide-react'

interface WalletCardProps {
  title: string
  icon: string
  currentAmount: number
  targetAmount: number
  lastPaidDate: string
  color?: string
}

const WalletCard = ({ 
  title, 
  icon, 
  currentAmount, 
  targetAmount, 
  lastPaidDate,
  color = "#4F46E5" 
}: WalletCardProps) => {
  const percentage = Math.round((currentAmount / targetAmount) * 100)
  const progressWidth = (currentAmount / targetAmount) * 100

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-md p-6 shadow-sm">
      <div className="space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <img src={icon} alt={title} className="w-8 h-8" />
            <h3 className="text-lg font-semibold text-[#344055] tracking-tight">{title}</h3>
          </div>
          <p className="text-xs text-[#79808A]">{lastPaidDate}</p>
        </div>

        {/* Progress */}
        <div className="space-y-1">
          <div className="flex items-end justify-between">
            <div className="space-x-1">
              <span className="text-lg font-normal" style={{ color }}>
                ${currentAmount.toLocaleString()}
              </span>
              <span className="text-xs text-[#B8B6F7]">
                / ${targetAmount.toLocaleString()}
              </span>
            </div>
            <span className="text-sm text-[#5B6776]">{percentage}%</span>
          </div>
          
          <div className="w-full h-2.5 bg-[#F7F8FD] rounded-md overflow-hidden">
            <div 
              className="h-full rounded-md transition-all duration-300"
              style={{ 
                backgroundColor: color,
                width: `${Math.min(progressWidth, 100)}%` 
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletCard
