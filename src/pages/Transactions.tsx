const Transactions = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 lg:px-12 py-9 bg-white">
        <div className="max-w-sm">
          <h1 className="text-3xl font-bold text-[#121212] leading-10">Recent Transactions</h1>
          <p className="text-sm text-[#5B6776] leading-5 mt-2">View and manage your recent transactions</p>
        </div>
      </div>
      
      <div className="px-6 lg:px-12 pb-6 lg:pb-12">
        <div className="bg-white border border-[#E2E8F0] rounded-md p-6 shadow-sm">
          <p className="text-[#79808A]">Transaction history coming soon...</p>
          <div className="mt-4 p-3 bg-[#D1493D] text-white rounded text-sm">
            You have 12 new notifications
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transactions
