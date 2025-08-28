import { Plus } from 'lucide-react'

const CreateWalletButton = () => {
  return (
    <div className="bg-[#F7F8FD] border border-[#4F46E5] lg:border-[#E2E8F0] rounded-md shadow-sm lg:shadow-sm">
      <div className="flex flex-row lg:flex-col items-center justify-center lg:justify-center gap-3 lg:gap-3.5 p-3 lg:p-6">
        <button className="w-10 h-10 bg-[#4F46E5] rounded-full flex items-center justify-center hover:bg-[#4338CA] transition-colors">
          <Plus className="w-4 h-4 text-white" />
        </button>
        <span className="text-xs lg:text-lg font-semibold lg:font-semibold text-[#4F46E5] tracking-tight">
          Create New Wallet
        </span>
      </div>
    </div>
  )
}

export default CreateWalletButton
