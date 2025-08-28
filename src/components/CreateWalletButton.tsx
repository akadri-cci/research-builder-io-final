import { Plus } from 'lucide-react'

const CreateWalletButton = () => {
  return (
    <div className="flex flex-col items-center gap-3.5 p-6 bg-[#F7F8FD] border border-[#E2E8F0] rounded-md shadow-sm">
      <button className="w-10 h-10 bg-[#4F46E5] rounded-full flex items-center justify-center hover:bg-[#4338CA] transition-colors">
        <Plus className="w-4 h-4 text-white" />
      </button>
      <span className="text-lg font-semibold text-[#4F46E5] tracking-tight">Create New Wallet</span>
    </div>
  )
}

export default CreateWalletButton
