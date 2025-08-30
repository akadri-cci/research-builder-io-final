import { cn } from '@/lib/utils'
import { Transaction, formatAmount, getAmountColor } from '../data/mockTransactions'

interface TransactionTableProps {
  transactions: Transaction[]
  className?: string
}

const TransactionTable = ({ transactions, className }: TransactionTableProps) => {
  if (transactions.length === 0) {
    return (
      <div className="hidden lg:block">
        <div className="bg-white border border-[#E2E8F0] rounded-lg shadow-sm overflow-hidden">
          <div className="p-8 text-center text-[#79808A]">
            No transactions found
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("hidden lg:block", className)}>
      <div className="bg-white border border-[#E2E8F0] rounded-lg shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] shadow-sm">
          <div className="grid grid-cols-12 gap-4 px-12">
            <div className="col-span-3 py-4">
              <h3 className="text-[#121212] font-semibold text-base leading-6 tracking-[-0.16px]">
                Transactions ID
              </h3>
            </div>
            <div className="col-span-3 py-4">
              <h3 className="text-[#121212] font-semibold text-base leading-6 tracking-[-0.16px]">
                Name
              </h3>
            </div>
            <div className="col-span-2 py-4">
              <h3 className="text-[#121212] font-semibold text-base leading-6 tracking-[-0.16px]">
                Date
              </h3>
            </div>
            <div className="col-span-2 py-4">
              <h3 className="text-[#121212] font-semibold text-base leading-6 tracking-[-0.16px]">
                Status
              </h3>
            </div>
            <div className="col-span-2 py-4">
              <h3 className="text-[#121212] font-semibold text-base leading-6 tracking-[-0.16px]">
                Amount
              </h3>
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div>
          {transactions.map((transaction, index) => (
            <div 
              key={transaction.id}
              className={cn(
                "grid grid-cols-12 gap-4 px-12 hover:bg-[#F8FAFC] transition-colors",
                index !== transactions.length - 1 && "border-b border-[#E2E8F0]"
              )}
            >
              {/* Transaction ID */}
              <div className="col-span-3 py-5">
                <span className="text-[#344055] font-normal text-base leading-6 tracking-[-0.16px]">
                  {transaction.id}
                </span>
              </div>

              {/* Name */}
              <div className="col-span-3 py-5">
                <span className="text-[#344055] font-normal text-base leading-6 tracking-[-0.16px]">
                  {transaction.name}
                </span>
              </div>

              {/* Date */}
              <div className="col-span-2 py-5">
                <span className="text-[#344055] font-normal text-base leading-6 tracking-[-0.16px]">
                  {transaction.date}
                </span>
              </div>

              {/* Status */}
              <div className="col-span-2 py-5">
                <span className={cn(
                  "text-[#344055] font-normal text-base leading-6 tracking-[-0.16px]",
                  transaction.status === 'Pending' && "text-[#F59E0B]",
                  transaction.status === 'Failed' && "text-[#D1493D]"
                )}>
                  {transaction.status}
                </span>
              </div>

              {/* Amount */}
              <div className="col-span-2 py-5">
                <span className={cn(
                  "font-normal text-base leading-6 tracking-[-0.16px]",
                  getAmountColor(transaction.type)
                )}>
                  {formatAmount(transaction.amount, transaction.type)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TransactionTable
