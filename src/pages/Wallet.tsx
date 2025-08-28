import { Inbox, HelpCircle } from 'lucide-react'
import GreetingCard from '../components/GreetingCard'
import QuickActions from '../components/QuickActions'
import WalletCard from '../components/WalletCard'
import CreateWalletButton from '../components/CreateWalletButton'

const Wallet = () => {
  const walletData = [
    {
      title: 'Emergency fund',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/1a511d3d4484f5aefc0506161c6af8aa42c3eaab?width=36',
      currentAmount: 900,
      targetAmount: 1000,
      lastPaidDate: 'Last Paid on August 28, 2022',
      color: '#4F46E5',
    },
    {
      title: 'Travel Plan',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/3105025918809f8cf53b33801905305469e353c9?width=36',
      currentAmount: 10000,
      targetAmount: 20000,
      lastPaidDate: 'Last Paid on August 28, 2022',
      color: '#4F46E5',
    },
    {
      title: 'Education',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/b7bd6fc6caa62d443aab5a481dc60623609d4fa0?width=36',
      currentAmount: 7000,
      targetAmount: 10000,
      lastPaidDate: 'Last Paid on August 28, 2022',
      color: '#4F46E5',
    },
    {
      title: 'Foods and Groceries',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/0624176abafe20115ace3f34803931664ac00e8b?width=36',
      currentAmount: 300,
      targetAmount: 1000,
      lastPaidDate: 'Last Paid on August 28, 2022',
      color: '#4F46E5',
    },
    {
      title: 'Repair Vehicle',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/89c97d837d0f1e85a97be13af13c6e55a3e8ec91?width=36',
      currentAmount: 900,
      targetAmount: 1000,
      lastPaidDate: 'Last Paid on August 28, 2022',
      color: '#4F46E5',
    },
    {
      title: 'Donation',
      icon: 'https://api.builder.io/api/v1/image/assets/TEMP/aa0f4cd27b35c365b326a5d2e7da1ce88219ac2a?width=36',
      currentAmount: 200,
      targetAmount: 1000,
      lastPaidDate: 'Last Paid on August 28, 2022',
      color: '#4F46E5',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Main Header */}
      <div className="px-4 lg:px-12 py-4 lg:py-9 bg-white">
        <div className="max-w-sm lg:max-w-none">
          <h1 className="text-lg lg:text-3xl font-bold text-[#121212] leading-6 lg:leading-10">
            <span className="lg:hidden">Recent Transactions</span>
            <span className="hidden lg:block">My Wallet</span>
          </h1>
          <p className="text-xs lg:text-sm text-[#5B6776] leading-4 lg:leading-5 mt-2">
            Keep track your financial plan
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:px-12">
        {/* Mobile Background Container */}
        <div className="lg:hidden bg-[#F7F8FD] px-4 pt-18 pb-6 space-y-6">
          {/* Greeting Card */}
          <GreetingCard name="Adrian" balance={124543} />

          {/* Quick Actions */}
          <QuickActions />

          {/* Wallet Cards */}
          <div className="space-y-2">
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

          {/* Create New Wallet Button */}
          <CreateWalletButton />
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block px-0 pb-6 lg:pb-12">
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
    </div>
  )
}

export default Wallet
