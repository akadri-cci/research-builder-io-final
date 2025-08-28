import { MoreHorizontal } from 'lucide-react'

interface GreetingCardProps {
  name: string
  balance: number
}

const GreetingCard = ({ name, balance }: GreetingCardProps) => {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-md p-6 shadow-sm">
      <div className="space-y-6">
        {/* Header with greeting and menu */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <span className="text-3xl">👋</span>
            <h2 className="text-2xl font-bold text-[#121212]">Hi {name}!</h2>
          </div>
          <button className="p-3 hover:bg-gray-100 rounded-full transition-colors">
            <MoreHorizontal className="w-4 h-4 text-[#64748B]" />
          </button>
        </div>
        
        {/* Balance */}
        <div>
          <p className="text-3xl font-normal text-[#344055] tracking-tight">
            ${balance.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default GreetingCard
