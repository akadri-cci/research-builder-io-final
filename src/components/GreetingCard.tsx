import { MoreHorizontal } from 'lucide-react'

interface GreetingCardProps {
  name: string
  balance: number
}

const GreetingCard = ({ name, balance }: GreetingCardProps) => {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-md shadow-sm">
      <div className="p-4 lg:p-6">
        <div className="flex items-start justify-between mb-1 lg:mb-6">
          <div className="flex items-center gap-3">
            <span className="text-lg lg:text-3xl">👋</span>
            <h2 className="text-base lg:text-2xl font-semibold lg:font-bold text-[#121212] tracking-tight">
              Hi {name}!
            </h2>
          </div>
          <button className="p-2 lg:p-3 hover:bg-gray-100 rounded-full transition-colors">
            <MoreHorizontal className="w-4 h-4 lg:w-4 lg:h-4 text-[#64748B]" />
          </button>
        </div>

        <div>
          <p className="text-lg lg:text-3xl font-normal text-[#121212] lg:text-[#344055] tracking-tight">
            ${balance.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default GreetingCard
