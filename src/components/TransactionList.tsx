import { cn } from '@/lib/utils'
import { Transaction, formatAmount, getAmountColor } from '../data/mockTransactions'

interface TransactionListProps {
  transactions: Transaction[]
  className?: string
}

const TransactionList = ({ transactions, className }: TransactionListProps) => {
  if (transactions.length === 0) {
    return (
      <div className="lg:hidden">
        <div className="bg-white">
          <div className="p-8 text-center text-[#79808A]">
            No transactions found
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("lg:hidden", className)}>
      {/* Table Header - Mobile */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] shadow-sm px-4 py-3">
        <div className="grid grid-cols-12 gap-1 text-xs font-semibold text-[#121212] leading-4">
          <div className="col-span-7">
            <span>Status</span>
          </div>
          <div className="col-span-2 text-center">
            <span>Status</span>
          </div>
          <div className="col-span-3 text-right">
            <span>Amount</span>
          </div>
        </div>
      </div>

      {/* Transaction List */}
      <div className="bg-white">
        {transactions.map((transaction, index) => (
          <div key={transaction.id}>
            <div className="px-4 py-3">
              <div className="grid grid-cols-12 gap-1 items-center">
                {/* ID + Name and Date */}
                <div className="col-span-7 flex gap-1">
                  {/* Transaction ID */}
                  <div className="w-13 flex-shrink-0">
                    <span className="text-[#344055] font-semibold text-xs leading-4">
                      {transaction.id}
                    </span>
                  </div>
                  
                  {/* Name and Date */}
                  <div className="flex-1 min-w-0">
                    <div className="text-[#344055] font-normal text-xs leading-4 truncate">
                      {transaction.name}
                    </div>
                    <div className="text-[#79808A] font-normal text-xs leading-[14px] mt-0.5">
                      {transaction.date}
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="col-span-2 flex justify-center">
                  <span className={cn(
                    "text-xs font-normal leading-4",
                    transaction.status === 'Pending' && "text-[#F59E0B]",
                    transaction.status === 'Completed' && "text-[#344055]",
                    transaction.status === 'Failed' && "text-[#D1493D]"
                  )}>
                    {transaction.status}
                  </span>
                </div>

                {/* Amount */}
                <div className="col-span-3 flex justify-end">
                  <span className={cn(
                    "text-xs font-normal leading-4",
                    getAmountColor(transaction.type)
                  )}>
                    {formatAmount(transaction.amount, transaction.type)}
                  </span>
                </div>
              </div>
            </div>

            {/* Divider */}
            {index !== transactions.length - 1 && (
              <div className="h-px bg-[#E3E8EF]" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TransactionList
