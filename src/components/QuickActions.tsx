const QuickActions = () => {
  return (
    <div className="bg-white border border-[#E2E8F0] rounded-md p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 h-full">
        {/* Send Payment */}
        <div className="flex flex-col items-center gap-2.5 flex-1">
          <div className="w-16 h-16 bg-[#F8FAFC] rounded-full flex items-center justify-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/737e6339813a030a58a423c4fc4b765eab0fec94?width=128" 
              alt="Send Payment" 
              className="w-16 h-16 rounded-full"
            />
          </div>
          <span className="text-sm font-semibold text-[#344055] text-center">Send a payment</span>
        </div>

        {/* Divider - only show on larger screens */}
        <div className="hidden sm:block w-px h-20 bg-[#E3E8EF]"></div>
        
        {/* Request Payment */}
        <div className="flex flex-col items-center gap-2.5 flex-1">
          <div className="w-16 h-16 bg-[#F8FAFC] rounded-full flex items-center justify-center">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/4b5941be9f1d8bba3a8e9a38d18b39b16df31f93?width=128" 
              alt="Request Payment" 
              className="w-16 h-16 rounded-full"
            />
          </div>
          <span className="text-sm font-semibold text-[#344055] text-center">Request a payment</span>
        </div>
      </div>
    </div>
  )
}

export default QuickActions
