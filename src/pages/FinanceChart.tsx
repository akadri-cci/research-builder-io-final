import { useState } from 'react'
import { Bell, HelpCircle } from 'lucide-react'
import {
  InfoBanner,
  FilterDropdown,
  SummaryCard,
  FinanceChartGraph
} from '../components'
import {
  LifetimeIncomeIcon,
  LifetimeOutcomeIcon,
  BonusIncomeIcon
} from '../components/SummaryCard'
import { defaultChartData } from '../components/FinanceChartGraph'
import type { FilterOption } from '../components/FilterDropdown'
import type { ChartDataPoint } from '../components/FinanceChartGraph'

const FinanceChart = () => {
  // State for filters
  const [chartType, setChartType] = useState<'income' | 'expense'>('income')
  const [dateRange, setDateRange] = useState('this-year')

  // Filter options
  const chartTypeOptions: FilterOption[] = [
    { value: 'income', label: 'Income Chart' },
    { value: 'expense', label: 'Expense Chart' },
  ]

  const dateRangeOptions: FilterOption[] = [
    { value: 'this-year', label: 'This Year' },
    { value: 'this-month', label: 'This Month' },
    { value: 'last-month', label: 'Last Month' },
    { value: 'last-3-months', label: 'Last 3 Months' },
    { value: 'last-6-months', label: 'Last 6 Months' },
  ]

  // Chart data (this would typically come from an API or Builder.io CMS)
  const [chartData] = useState<ChartDataPoint[]>(defaultChartData)

  // Summary data (Builder.io CMS editable)
  const summaryData = [
    {
      icon: <LifetimeIncomeIcon />,
      title: 'Lifetime Income',
      value: '$40,728',
      iconBackgroundColor: '#EFB2B2',
    },
    {
      icon: <LifetimeOutcomeIcon />,
      title: 'Lifetime Outcome',
      value: '$30,239',
      iconBackgroundColor: '#ECA6BF',
    },
    {
      icon: <BonusIncomeIcon />,
      title: 'Bonus Income',
      value: '$2,490',
      iconBackgroundColor: '#C7A1EC',
    },
  ]

  const handleInfoBannerDismiss = () => {
    console.log('Info banner dismissed')
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
      <div className="hidden lg:block px-4 lg:px-12 py-6 lg:py-9 bg-white">
        <div className="max-w-2xl">
          <h1 className="text-2xl lg:text-3xl font-bold text-[#121212] leading-tight">
            Finance Chart
          </h1>
          <p className="text-sm text-[#5B6776] leading-5 mt-2">
            Keep track your financial plan
          </p>
        </div>
      </div>

      {/* Info Banner - Mobile at bottom, Desktop at top */}
      <div className="hidden lg:block px-4 lg:px-12 mb-6">
        <InfoBanner
          message="Please remember to fill that data that required for your debit card"
          buttonText="Got it"
          onButtonClick={handleInfoBannerDismiss}
        />
      </div>

      {/* Chart Section */}
      <div className="px-4 lg:px-12 mb-4 lg:mb-6">
        {/* Chart Header with Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 lg:mb-6 gap-2 lg:gap-4">
          <h2 className="text-sm lg:text-2xl font-semibold text-[#121212] tracking-tight">
            Statistic
          </h2>
          
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-3">
            <FilterDropdown
              options={chartTypeOptions}
              value={chartType}
              onChange={(value) => setChartType(value as 'income' | 'expense')}
              width="w-full sm:w-36"
            />
            <FilterDropdown
              options={dateRangeOptions}
              value={dateRange}
              onChange={setDateRange}
              width="w-full sm:w-32"
            />
          </div>
        </div>

        {/* Chart */}
        <FinanceChartGraph
          data={chartData}
          chartType={chartType}
          dateRange={dateRangeOptions.find(option => option.value === dateRange)?.label || 'This Year'}
        />
      </div>

      {/* Summary Cards */}
      <div className="px-4 lg:px-12 pb-4 lg:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6">
          {summaryData.map((item, index) => (
            <SummaryCard
              key={index}
              icon={item.icon}
              title={item.title}
              value={item.value}
              iconBackgroundColor={item.iconBackgroundColor}
            />
          ))}
        </div>
      </div>

      {/* Mobile Info Banner - Positioned at bottom like in Figma */}
      <div className="lg:hidden px-4 pb-6">
        <InfoBanner
          message="Please remember to fill that data that required for your debit card"
          buttonText="Got it"
          onButtonClick={handleInfoBannerDismiss}
        />
      </div>
    </div>
  )
}

export default FinanceChart
