import { ChevronRight, ArrowRight, Bell, HelpCircle } from 'lucide-react'
import { CreditCard, CardInfo, HelpList } from '../components'

const Card = () => {
  const selectedCard = 'Primary Card'

  const handlePersonalizeClick = () => {
    console.log('Personalize account clicked')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Top Navbar */}
      <div className="hidden lg:flex items-center justify-between px-12 py-9 bg-white border-b border-[#E2E8F0] shadow-sm">
        <div className="flex items-center gap-6">
          <Bell className="w-8 h-8 text-[#64748B]" />
        </div>
        <HelpCircle className="w-8 h-8 text-[#64748B]" />
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden px-4 py-4 bg-white">
        <h1 className="text-lg font-bold text-[#121212]">My Wallet</h1>
        <p className="text-xs text-[#5B6776] mt-1">
          Keep track your financial plan
        </p>
      </div>

      {/* Main Content Header */}
      <div className="px-4 lg:px-12 py-6 lg:py-9 bg-white">
        <div className="max-w-2xl">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#121212] leading-tight">
            My Card
          </h1>
          <p className="text-sm text-[#5B6776] leading-5 mt-2">
            Keep track your financial plan
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 lg:px-12 pb-6 lg:pb-12">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Card Information */}
          <div className="flex-1 lg:max-w-md space-y-4">
            {/* Primary Card Selector */}
            <div className="bg-white border border-[#E2E8F0] rounded-md p-3 lg:p-4 shadow-sm">
              <button className="w-full flex items-center justify-between">
                <span className="text-sm lg:text-base font-semibold text-[#121212] tracking-tight">
                  {selectedCard}
                </span>
                <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-[#64748B]" />
              </button>
            </div>

            {/* Credit Card Section */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-4 lg:p-6 space-y-6">
              <CreditCard />
              <CardInfo />
            </div>

            {/* Personalize Account Section */}
            <div className="bg-[#F7F8FD] p-6 flex items-center justify-between">
              <div className="flex-1 pr-4">
                <p className="text-sm lg:text-base text-[#344055] leading-6 tracking-tight">
                  See how we can personalize your account:
                </p>
              </div>
              <button
                onClick={handlePersonalizeClick}
                className="w-12 h-12 lg:w-14 lg:h-14 bg-[#4F46E5] rounded-full flex items-center justify-center hover:bg-[#4338CA] transition-colors"
              >
                <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
              </button>
            </div>
          </div>

          {/* Right Column - Help Section */}
          <div className="flex-1">
            <HelpList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
