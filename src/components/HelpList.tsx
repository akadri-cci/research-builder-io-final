import { MoreVertical } from 'lucide-react'
import HelpItem from './HelpItem'

interface HelpAction {
  id: string
  title: string
  color: string
  onClick?: () => void
}

interface HelpListProps {
  title?: string
  actions?: HelpAction[]
  className?: string
}

const defaultActions: HelpAction[] = [
  {
    id: '1',
    title: 'Check Your Cash Flow',
    color: '#F93939',
    onClick: () => console.log('Check Cash Flow clicked'),
  },
  {
    id: '2',
    title: 'Change Primary Card',
    color: '#ED1865',
    onClick: () => console.log('Change Card clicked'),
  },
  {
    id: '3',
    title: 'Pay Tax',
    color: '#6B19F1',
    onClick: () => console.log('Pay Tax clicked'),
  },
  {
    id: '4',
    title: 'Make Invoice',
    color: '#2236EE',
    onClick: () => console.log('Make Invoice clicked'),
  },
  {
    id: '5',
    title: 'Refer a Friend',
    color: '#0D99C5',
    onClick: () => console.log('Refer Friend clicked'),
  },
]

const HelpList = ({
  title = "See Our Help",
  actions = defaultActions,
  className = "",
}: HelpListProps) => {
  return (
    <div className={`bg-white border border-[#E2E8F0] rounded-md shadow-sm overflow-hidden ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-4">
        <div className="flex-1">
          <h2 className="text-lg lg:text-xl text-[#344055] font-normal tracking-tight">
            {title}
          </h2>
        </div>
        <button className="p-1 hover:bg-gray-100 rounded transition-colors">
          <MoreVertical className="w-6 h-6 text-[#64748B]" />
        </button>
      </div>

      {/* Actions List */}
      <div className="px-6">
        {actions.map((action) => (
          <HelpItem
            key={action.id}
            title={action.title}
            color={action.color}
            onClick={action.onClick}
          />
        ))}
      </div>

      {/* Look More Button */}
      <div className="p-6 pt-4">
        <button className="px-6 py-3 border border-[#E2E8F0] rounded-full bg-white hover:bg-gray-50 transition-colors shadow-sm">
          <span className="text-base lg:text-lg text-[#79808A] font-semibold tracking-tight">
            Look More
          </span>
        </button>
      </div>
    </div>
  )
}

export default HelpList
