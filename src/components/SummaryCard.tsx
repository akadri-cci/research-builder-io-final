interface SummaryCardProps {
  icon: React.ReactNode
  title: string
  value: string
  iconBackgroundColor?: string
  className?: string
}

const SummaryCard = ({
  icon,
  title,
  value,
  iconBackgroundColor = "#EFB2B2",
  className = "",
}: SummaryCardProps) => {
  return (
    <div className={`flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-white border border-[#E2E8F0] rounded-md shadow-sm ${className}`}>
      <div 
        className="flex items-center justify-center w-12 h-12 rounded-md flex-shrink-0"
        style={{ backgroundColor: iconBackgroundColor }}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-[#79808A] mb-1">
          {title}
        </p>
        <p className="text-lg font-semibold text-[#344055] tracking-tight">
          {value}
        </p>
      </div>
    </div>
  )
}

// Icon components for summary cards
const LifetimeIncomeIcon = () => (
  <svg width="38" height="27" viewBox="0 0 38 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.9297 2.29809C26.2829 4.21966 25.3111 5.10593 23.7978 6.05495C21.9951 7.18436 19.9848 7.89024 17.7667 8.15691C17.3587 8.21181 17.0101 8.25887 16.9952 8.27456C16.973 8.30593 20.3186 16.8628 20.3928 16.9569C20.4373 17.004 24.1464 16.4942 25.3333 16.2746C27.2918 15.9138 29.4282 15.0118 31.1196 13.851C32.3362 13.0118 33.0261 12.3844 35.0735 10.2432L37.0913 8.1177L33.2189 4.70593C31.0899 2.83142 29.2724 1.23142 29.1834 1.16083C29.0202 1.01966 29.0128 1.0275 27.9297 2.29809Z" fill="#F93939"/>
    <path d="M28.2561 5.6158L27.4846 6.43149L27.9149 6.87855L28.3377 7.33345L28.7309 6.91776L29.1315 6.50208L30.4445 7.65502L31.7575 8.8158L31.4015 9.19227L31.0454 9.56874L31.4756 10.0236L31.8985 10.4707L32.7145 9.60796L33.5305 8.74521L31.4385 6.90208C30.2887 5.89031 29.2724 4.99619 29.1908 4.92561C29.035 4.80012 29.0128 4.8158 28.2561 5.6158Z" fill="#F93939"/>
  </svg>
)

const LifetimeOutcomeIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 5V12M19 12L26 8M19 12L12 8M19 33V26M19 26L26 30M19 26L12 30M5 19H12M12 19L8 12M12 19L8 26M33 19H26M26 19L30 12M26 19L30 26" stroke="#F93939" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90 19 19)"/>
  </svg>
)

const BonusIncomeIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.7875 3.57519C15.6312 3.63144 15.4875 3.88769 14.6125 5.67519C14.0687 6.80019 13.6125 7.72519 13.6 7.73144C13.5875 7.74394 12.5625 7.90019 11.325 8.08144C9.93124 8.28769 9.03124 8.45019 8.96874 8.50019C8.79374 8.64394 8.74374 8.85644 8.83124 9.05019C8.86874 9.15019 9.61249 9.91269 10.4687 10.7502C11.4062 11.6627 12.0375 12.3252 12.05 12.4064C12.0625 12.4814 11.9125 13.4439 11.725 14.5439C11.5312 15.6439 11.375 16.6439 11.375 16.7627C11.375 17.0752 11.5562 17.2752 11.8187 17.2689C11.9687 17.2689 12.6375 16.9502 14.0187 16.2189L16 15.1752L17.7687 16.1002C18.7375 16.6064 19.6562 17.0877 19.8125 17.1689C20.2562 17.4064 20.625 17.2252 20.625 16.7752C20.625 16.6564 20.4687 15.6564 20.2812 14.5502C20.0875 13.4439 19.9375 12.4814 19.95 12.4064C19.9625 12.3252 20.6125 11.6502 21.5312 10.7502C22.3937 9.91269 23.1312 9.15019 23.1687 9.05644C23.2687 8.83769 23.1937 8.60644 22.9875 8.48144C22.9062 8.42519 21.9062 8.25644 20.6312 8.06894C19.4125 7.89394 18.4062 7.74394 18.4 7.73144C18.3875 7.72519 17.9312 6.80019 17.3875 5.68144C16.4562 3.77519 16.375 3.63769 16.1875 3.56894C16.075 3.53144 15.9812 3.50019 15.975 3.50644C15.9687 3.50644 15.8875 3.53769 15.7875 3.57519Z" fill="#6B19F1"/>
  </svg>
)

export default SummaryCard
export { LifetimeIncomeIcon, LifetimeOutcomeIcon, BonusIncomeIcon }
