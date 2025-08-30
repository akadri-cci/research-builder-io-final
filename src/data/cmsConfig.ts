/**
 * Builder.io CMS Integration Configuration
 * 
 * This file contains configuration and helpers for integrating
 * the transaction components with Builder.io CMS.
 */

// CMS-editable content structure for the Recent Transactions page
export interface TransactionPageContent {
  pageTitle: string
  searchPlaceholder: string
  downloadButtonText: string
  tableHeaders: {
    transactionId: string
    name: string
    date: string
    status: string
    amount: string
  }
  noResultsMessage: string
  itemsPerPageLabel: string
}

// Default content that can be overridden by Builder.io CMS
export const defaultTransactionPageContent: TransactionPageContent = {
  pageTitle: 'Recent Transactions',
  searchPlaceholder: 'Search',
  downloadButtonText: 'Download the Excel File',
  tableHeaders: {
    transactionId: 'Transactions ID',
    name: 'Name',
    date: 'Date',
    status: 'Status',
    amount: 'Amount'
  },
  noResultsMessage: 'No transactions found',
  itemsPerPageLabel: 'Items per page:'
}

// Helper function to merge CMS content with defaults
export const mergeWithCMSContent = (cmsContent?: Partial<TransactionPageContent>): TransactionPageContent => {
  return {
    ...defaultTransactionPageContent,
    ...cmsContent,
    tableHeaders: {
      ...defaultTransactionPageContent.tableHeaders,
      ...(cmsContent?.tableHeaders || {})
    }
  }
}

/**
 * Usage in components:
 * 
 * 1. Import the content configuration
 * 2. Pass CMS content as props or use React Context
 * 3. Components will use the CMS content instead of hardcoded strings
 * 
 * Example:
 * const content = mergeWithCMSContent(props.cmsContent)
 * <h1>{content.pageTitle}</h1>
 */

// Builder.io model schema suggestion for the Recent Transactions page
export const builderIOModelSchema = {
  name: 'RecentTransactionsPage',
  fields: [
    {
      name: 'pageTitle',
      type: 'string',
      defaultValue: 'Recent Transactions',
      helperText: 'Main page heading'
    },
    {
      name: 'searchPlaceholder',
      type: 'string',
      defaultValue: 'Search',
      helperText: 'Placeholder text for search input'
    },
    {
      name: 'downloadButtonText',
      type: 'string',
      defaultValue: 'Download the Excel File',
      helperText: 'Text displayed on the download button'
    },
    {
      name: 'tableHeaders',
      type: 'object',
      subFields: [
        { name: 'transactionId', type: 'string', defaultValue: 'Transactions ID' },
        { name: 'name', type: 'string', defaultValue: 'Name' },
        { name: 'date', type: 'string', defaultValue: 'Date' },
        { name: 'status', type: 'string', defaultValue: 'Status' },
        { name: 'amount', type: 'string', defaultValue: 'Amount' }
      ]
    },
    {
      name: 'noResultsMessage',
      type: 'string',
      defaultValue: 'No transactions found',
      helperText: 'Message shown when no transactions match search criteria'
    },
    {
      name: 'itemsPerPageLabel',
      type: 'string',
      defaultValue: 'Items per page:',
      helperText: 'Label for the pagination items per page selector'
    }
  ]
}
