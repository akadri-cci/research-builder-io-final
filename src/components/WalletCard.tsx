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
    <div className="bg-white border border-[#E2E8F0] rounded-md shadow-sm">
      <div className="p-4 lg:p-6 space-y-2 lg:space-y-4">
        {/* Header */}
        <div className="space-y-0.5 lg:space-y-2">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <div className="w-8 h-8 bg-[#F8FAFC] rounded-full"></div>
              <img 
                src={icon} 
                alt={title} 
                className="absolute inset-0 w-4 h-4 m-auto" 
              />
            </div>
            <h3 className="text-sm lg:text-lg font-semibold text-[#344055] tracking-tight leading-5">{title}</h3>
          </div>
          <p className="text-[10px] lg:text-xs text-[#79808A] leading-4">{lastPaidDate}</p>
        </div>

        {/* Progress */}
        <div className="space-y-1">
          <div className="flex items-end justify-between">
            <div className="space-x-0.5">
              <span className="text-sm lg:text-lg font-normal" style={{ color }}>
                ${currentAmount.toLocaleString()}
              </span>
              <span className="text-[10px] lg:text-xs text-[#B8B6F7]">
                / ${targetAmount.toLocaleString()}
              </span>
            </div>
            <span className="text-xs lg:text-sm text-[#5B6776]">{percentage}%</span>
          </div>
          
          <div className="w-full h-2 lg:h-2.5 bg-[#F7F8FD] rounded-md overflow-hidden">
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
