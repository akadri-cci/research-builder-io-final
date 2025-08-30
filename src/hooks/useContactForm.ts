import { useState, useCallback } from 'react'

export interface ContactFormData {
  name: string
  email: string
  state: string
  comment: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  state?: string
  comment?: string
}

export interface UseContactFormReturn {
  formData: ContactFormData
  errors: ContactFormErrors
  isLoading: boolean
  isSubmitted: boolean
  handleInputChange: (field: keyof ContactFormData) => (value: string) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  resetForm: () => void
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  state: '',
  comment: ''
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateForm = (data: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {}

  // Name validation
  if (!data.name.trim()) {
    errors.name = 'Name is required'
  }

  // Email validation
  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  // State validation
  if (!data.state) {
    errors.state = 'Please select a state'
  }

  // Comment validation
  if (!data.comment.trim()) {
    errors.comment = 'Required'
  }

  return errors
}

export const useContactForm = (
  onSubmit?: (data: ContactFormData) => Promise<void>
): UseContactFormReturn => {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = useCallback(
    (field: keyof ContactFormData) => (value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }))
      
      // Clear error for this field when user starts typing
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }))
      }
    },
    [errors]
  )

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      
      // Validate form
      const formErrors = validateForm(formData)
      setErrors(formErrors)

      // If there are errors, don't submit
      if (Object.keys(formErrors).length > 0) {
        return
      }

      setIsLoading(true)
      
      try {
        if (onSubmit) {
          await onSubmit(formData)
        } else {
          // Default submission behavior - simulate API call
          await new Promise(resolve => setTimeout(resolve, 1500))
          console.log('Form submitted:', formData)
        }
        
        setIsSubmitted(true)
        // Could reset form here if desired
        // resetForm()
      } catch (error) {
        console.error('Form submission error:', error)
        // Handle submission error here
      } finally {
        setIsLoading(false)
      }
    },
    [formData, onSubmit]
  )

  const resetForm = useCallback(() => {
    setFormData(initialFormData)
    setErrors({})
    setIsLoading(false)
    setIsSubmitted(false)
  }, [])

  return {
    formData,
    errors,
    isLoading,
    isSubmitted,
    handleInputChange,
    handleSubmit,
    resetForm
  }
}
