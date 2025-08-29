interface CreditCardProps {
  cardNumber?: string
  cardHolder?: string
  expiryDate?: string
  cardType?: 'mastercard' | 'visa'
  className?: string
}

const CreditCard = ({
  cardNumber = "4889 9271 1937 1932",
  cardHolder = "ADRIAN TRA",
  expiryDate = "12/28",
  cardType = "mastercard",
  className = "",
}: CreditCardProps) => {
  return (
    <div
      className={`relative w-full aspect-[1.586] rounded-lg bg-gradient-to-r from-[#00359E] to-[#155EEF] border border-white shadow-lg overflow-hidden ${className}`}
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='a' patternUnits='userSpaceOnUse' width='100' height='100' patternTransform='scale(2) rotate(0)'%3e%3crect x='0' y='0' width='100%25' height='100%25' fill='hsla(0,0%25,100%25,0)'/%3e%3cpath d='M14 10a4 4 0 004 4V0a4 4 0 00-4 4z' stroke-width='0' stroke='hsla(258,59%25,59%25,1)' fill='hsla(339,82%25,51%25,1)'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100%25' height='100%25' fill='url(%23a)'/%3e%3c/svg%3e")`,
        }}
      />
      
      {/* Mastercard Logo */}
      <div className="absolute top-4 left-4 lg:top-5 lg:left-6">
        <div className="flex items-center">
          <div className="w-6 h-4 lg:w-7 lg:h-5 relative">
            <div className="absolute inset-0 bg-[#ED0006] rounded-full w-3 lg:w-3.5"></div>
            <div className="absolute right-0 top-0 bg-[#F9A000] rounded-full w-3 lg:w-3.5 h-full"></div>
            <div className="absolute left-1.5 lg:left-1.5 top-0 bg-[#FF5E00] rounded-full w-1.5 lg:w-2 h-full"></div>
          </div>
        </div>
      </div>

      {/* Card Holder Name */}
      <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
        <p className="text-white font-semibold text-sm lg:text-base tracking-wider">
          {cardHolder}
        </p>
      </div>

      {/* Decorative Circles */}
      <div className="absolute right-8 lg:right-12 top-8 lg:top-12 opacity-20">
        <div className="w-24 h-24 lg:w-32 lg:h-32 border border-white rounded-full"></div>
        <div className="w-32 h-32 lg:w-40 lg:h-40 border border-white rounded-full absolute -top-4 lg:-top-6 -right-4 lg:-right-6"></div>
      </div>
    </div>
  )
}

export default CreditCard
