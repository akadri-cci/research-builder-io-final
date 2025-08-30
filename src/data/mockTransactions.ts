export interface Transaction {
  id: string
  name: string
  date: string
  status: 'Pending' | 'Completed' | 'Failed'
  amount: number
  type: 'credit' | 'debit'
}

// Mock transaction data based on the Figma designs
export const mockTransactions: Transaction[] = [
  {
    id: '962296152',
    name: 'Sherman Blankenship',
    date: '08 Jan, 2022',
    status: 'Pending',
    amount: 217.90,
    type: 'credit'
  },
  {
    id: '829892537',
    name: 'Claudio Barrera',
    date: '06 Jan, 2022',
    status: 'Completed',
    amount: 329.90,
    type: 'credit'
  },
  {
    id: '741560657',
    name: 'Clifton Daniel',
    date: '03 Jan, 2022',
    status: 'Completed',
    amount: 549.90,
    type: 'debit'
  },
  {
    id: '529040347',
    name: 'Curt Boyer',
    date: '01 Jan, 2022',
    status: 'Completed',
    amount: 238.90,
    type: 'debit'
  },
  {
    id: '398078341',
    name: 'Jeff Proctor',
    date: '31 Dec, 2021',
    status: 'Completed',
    amount: 283.90,
    type: 'debit'
  },
  {
    id: '197401837',
    name: 'Rodger Fritz',
    date: '24 Dec, 2021',
    status: 'Completed',
    amount: 237.90,
    type: 'credit'
  },
  {
    id: '846592031',
    name: 'Marina Lopez',
    date: '22 Dec, 2021',
    status: 'Completed',
    amount: 445.20,
    type: 'credit'
  },
  {
    id: '718395274',
    name: 'Brian Mitchell',
    date: '20 Dec, 2021',
    status: 'Failed',
    amount: 156.75,
    type: 'debit'
  },
  {
    id: '592847163',
    name: 'Sarah Johnson',
    date: '18 Dec, 2021',
    status: 'Completed',
    amount: 789.45,
    type: 'credit'
  },
  {
    id: '463718295',
    name: 'Michael Brown',
    date: '15 Dec, 2021',
    status: 'Pending',
    amount: 92.30,
    type: 'credit'
  },
  {
    id: '837492516',
    name: 'Emily Davis',
    date: '12 Dec, 2021',
    status: 'Completed',
    amount: 367.80,
    type: 'debit'
  },
  {
    id: '294857361',
    name: 'David Wilson',
    date: '10 Dec, 2021',
    status: 'Completed',
    amount: 524.15,
    type: 'credit'
  },
  {
    id: '651739284',
    name: 'Jessica Taylor',
    date: '08 Dec, 2021',
    status: 'Completed',
    amount: 198.60,
    type: 'debit'
  },
  {
    id: '418375962',
    name: 'Christopher Anderson',
    date: '05 Dec, 2021',
    status: 'Pending',
    amount: 673.25,
    type: 'credit'
  },
  {
    id: '795284637',
    name: 'Amanda Martinez',
    date: '03 Dec, 2021',
    status: 'Completed',
    amount: 145.90,
    type: 'debit'
  },
  {
    id: '362951847',
    name: 'James Thompson',
    date: '01 Dec, 2021',
    status: 'Completed',
    amount: 832.40,
    type: 'credit'
  },
  {
    id: '518374629',
    name: 'Ashley Garcia',
    date: '28 Nov, 2021',
    status: 'Failed',
    amount: 267.85,
    type: 'debit'
  },
  {
    id: '947263815',
    name: 'Matthew Rodriguez',
    date: '25 Nov, 2021',
    status: 'Completed',
    amount: 456.70,
    type: 'credit'
  },
  {
    id: '183629475',
    name: 'Brittany Lewis',
    date: '22 Nov, 2021',
    status: 'Completed',
    amount: 312.55,
    type: 'debit'
  },
  {
    id: '758294163',
    name: 'Joshua Lee',
    date: '20 Nov, 2021',
    status: 'Pending',
    amount: 589.30,
    type: 'credit'
  },
  {
    id: '629483751',
    name: 'Stephanie Walker',
    date: '18 Nov, 2021',
    status: 'Completed',
    amount: 174.85,
    type: 'debit'
  },
  {
    id: '396172584',
    name: 'Daniel Hall',
    date: '15 Nov, 2021',
    status: 'Completed',
    amount: 698.25,
    type: 'credit'
  },
  {
    id: '814736529',
    name: 'Nicole Allen',
    date: '12 Nov, 2021',
    status: 'Completed',
    amount: 243.60,
    type: 'debit'
  }
]

export const getTransactionsByPage = (page: number, itemsPerPage: number): Transaction[] => {
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return mockTransactions.slice(startIndex, endIndex)
}

export const searchTransactions = (query: string): Transaction[] => {
  if (!query.trim()) return mockTransactions
  
  const lowercaseQuery = query.toLowerCase()
  return mockTransactions.filter(transaction => 
    transaction.name.toLowerCase().includes(lowercaseQuery) ||
    transaction.id.includes(query) ||
    transaction.status.toLowerCase().includes(lowercaseQuery)
  )
}

export const getTotalTransactions = (): number => mockTransactions.length

export const formatAmount = (amount: number, type: 'credit' | 'debit'): string => {
  const formattedAmount = `$${amount.toFixed(2)}`
  return type === 'debit' ? `- ${formattedAmount}` : formattedAmount
}

export const getAmountColor = (type: 'credit' | 'debit'): string => {
  return type === 'credit' ? 'text-[#2B825C]' : 'text-[#D1493D]'
}
