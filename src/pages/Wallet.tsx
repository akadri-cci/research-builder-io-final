import { Inbox, HelpCircle } from 'lucide-react'
import GreetingCard from '../components/GreetingCard'
import QuickActions from '../components/QuickActions'
import WalletCard from '../components/WalletCard'
import CreateWalletButton from '../components/CreateWalletButton'

const Wallet = () => {
  const walletData = [
    {
      title: "Emergency fund",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/f8ae0ffe43f534922bfbe31afa5565c2d6b6cba4?width=64",
      currentAmount: 300,
      targetAmount: 1000,
      lastPaidDate: "Last Paid on August 28, 2022",
      color: "#4F46E5"
    },
    {
      title: "Travel Plan",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/7421b9267473f756a2506928aaa177877de9b412?width=64",
      currentAmount: 10000,
      targetAmount: 20000,
      lastPaidDate: "Last Paid on June 01, 2022",
      color: "#4F46E5"
    },
    {
      title: "Education",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/f7ac1faefa1e0c30e5ecd418cb80d01a2eca5048?width=64",
      currentAmount: 7000,
      targetAmount: 10000,
      lastPaidDate: "Last Paid on May 14, 2022",
      color: "#4F46E5"
    },
    {
      title: "Foods and Groceries",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/13fad474e8b52e881bd2d186a4716146f21bccb8?width=64",
      currentAmount: 300,
      targetAmount: 1000,
      lastPaidDate: "Last Paid on August 28, 2022",
      color: "#4F46E5"
    },
    {
      title: "Repair Vehicle",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/b7d5e7d8cb52a7601882e8feea6df11bf589ea7c?width=64",
      currentAmount: 900,
      targetAmount: 1000,
      lastPaidDate: "Last Paid on August 01, 2022",
      color: "#4F46E5"
    },
    {
      title: "Donation",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/4959e40bce1eca12fba70c6332099541a02c7514?width=64",
      currentAmount: 200,
      targetAmount: 1000,
      lastPaidDate: "Last Paid on August 20, 2022",
      color: "#4F46E5"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="border-b border-[#E2E8F0] bg-white shadow-sm">
        <div className="px-6 lg:px-12 py-9 flex items-center justify-between">
          <div className="flex items-start gap-6">
            <Inbox className="w-8 h-8 text-[#64748B]" />
          </div>
          <HelpCircle className="w-8 h-8 text-[#64748B]" />
        </div>
      </div>

      {/* Main Header */}
      <div className="px-6 lg:px-12 py-9 bg-white">
        <div className="max-w-sm">
          <h1 className="text-3xl font-bold text-[#121212] leading-10">My Wallet</h1>
          <p className="text-sm text-[#5B6776] leading-5 mt-2">Keep track your financial plan</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 lg:px-12 pb-6 lg:pb-12">
        <div className="space-y-6">
          {/* Information + Actions Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GreetingCard name="Adrian" balance={124543} />
            <QuickActions />
          </div>

          {/* Wallet Cards Grid */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {walletData.map((wallet, index) => (
                <WalletCard
                  key={index}
                  title={wallet.title}
                  icon={wallet.icon}
                  currentAmount={wallet.currentAmount}
                  targetAmount={wallet.targetAmount}
                  lastPaidDate={wallet.lastPaidDate}
                  color={wallet.color}
                />
              ))}
            </div>
          </div>

          {/* Create New Wallet Button */}
          <CreateWalletButton />
        </div>
      </div>
    </div>
  )
}

export default Wallet
