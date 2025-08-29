import { useState, useMemo } from 'react'
import { Bell, HelpCircle } from 'lucide-react'
import {
  SearchBar,
  Pagination,
  DownloadButton,
  TransactionTable,
  TransactionList
} from '../components'
import {
  mockTransactions,
  searchTransactions,
  getTransactionsByPage,
  getTotalTransactions,
  type Transaction
} from '../data/mockTransactions'

const RecentTransactions = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  // Computed values
  const filteredTransactions = useMemo(() => {
    return searchTransactions(searchQuery)
  }, [searchQuery])

  const totalFilteredItems = filteredTransactions.length
  const totalPages = Math.ceil(totalFilteredItems / itemsPerPage)

  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return filteredTransactions.slice(startIndex, endIndex)
  }, [filteredTransactions, currentPage, itemsPerPage])

  // Reset to page 1 when search changes
  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  // Reset to page 1 when items per page changes
  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage)
    setCurrentPage(1)
  }

  // Download functionality
  const handleDownload = () => {
    // In a real application, this would generate and download an Excel file
    // For now, we'll simulate the download process
    console.log('Downloading Excel file with', totalFilteredItems, 'transactions')
    
    // You could integrate with a library like SheetJS to generate actual Excel files
    // const wb = XLSX.utils.book_new()
    // const ws = XLSX.utils.json_to_sheet(filteredTransactions)
    // XLSX.utils.book_append_sheet(wb, ws, 'Transactions')
    // XLSX.writeFile(wb, 'transactions.xlsx')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation Bar */}
      <div className="hidden lg:flex justify-between items-center px-12 py-9 border-b border-[#E2E8F0] bg-white shadow-sm">
        <div className="flex items-center gap-6">
          <Bell className="w-8 h-8 text-[#64748B]" />
        </div>
        <HelpCircle className="w-8 h-8 text-[#64748B]" />
      </div>

      {/* Mobile Top Navigation Bar */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3 border-b border-[#E3E8EF] bg-white">
        <div className="flex items-center gap-2 px-3 py-1">
          <div className="w-[13px] h-[15px] bg-[#4F46E5] rounded-sm"></div>
          <span className="text-[#4F46E5] text-xs font-normal italic tracking-[-0.48px]">
            Ringku
          </span>
        </div>
        <button className="p-1">
          <div className="w-5 h-5 flex flex-col justify-center space-y-1">
            <div className="h-0.5 w-5 bg-[#64748B] rounded"></div>
            <div className="h-0.5 w-5 bg-[#64748B] rounded"></div>
            <div className="h-0.5 w-3 bg-[#64748B] rounded ml-2"></div>
          </div>
        </button>
      </div>

      {/* Main Header */}
      <div className="px-4 lg:px-12 py-6 lg:py-8 bg-white">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0">
          {/* Page Title */}
          <h1 className="text-lg lg:text-3xl font-bold text-[#121212] leading-6 lg:leading-10">
            Recent Transactions
          </h1>

          {/* Search Bar */}
          <SearchBar
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search"
            className="w-full lg:w-auto"
          />
        </div>
      </div>

      {/* Transactions Content */}
      <div className="relative">
        {/* Desktop Table View */}
        <TransactionTable 
          transactions={paginatedTransactions}
          className="px-12"
        />

        {/* Mobile List View */}
        <TransactionList 
          transactions={paginatedTransactions}
        />

        {/* Download Button - Desktop Only */}
        <div className="hidden lg:block px-12 py-6">
          <DownloadButton
            text="Download the Excel File"
            fileName={`transactions-${new Date().toISOString().split('T')[0]}.xlsx`}
            onDownload={handleDownload}
            disabled={totalFilteredItems === 0}
          />
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalFilteredItems}
        itemsPerPage={itemsPerPage}
        itemsPerPageOptions={[10, 25, 50, 100]}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  )
}

export default RecentTransactions
