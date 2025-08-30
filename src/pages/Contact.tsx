import { Bell, HelpCircle } from 'lucide-react'
import {
  InputField,
  SelectDropdown,
  TextArea,
  PrimaryButton,
  US_STATES,
} from '../components'
import { useContactForm, type ContactFormData } from '../hooks/useContactForm'

const Contact = () => {
  // Form state and validation
  const {
    formData,
    errors,
    isLoading,
    isSubmitted,
    handleInputChange,
    handleSubmit,
    resetForm,
  } = useContactForm(async (data: ContactFormData) => {
    // Here you would integrate with your API
    console.log('Submitting contact form:', data)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // You could integrate with Builder.io or other services here
    alert(`Thank you ${data.name}! Your message has been sent successfully.`)
  })

  // Success state
  if (isSubmitted) {
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

        {/* Success Message */}
        <div className="px-4 lg:px-12 py-8 lg:py-16">
          <div className="max-w-md">
            <h1 className="text-2xl lg:text-3xl font-bold text-[#121212] leading-8 lg:leading-10 mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-sm lg:text-base text-[#5B6776] leading-5 lg:leading-6 mb-6">
              Thank you for contacting us. We'll get back to you soon.
            </p>
            <PrimaryButton onClick={resetForm} className="w-full lg:w-auto">
              Send Another Message
            </PrimaryButton>
          </div>
        </div>
      </div>
    )
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
        <h1 className="text-2xl lg:text-3xl font-bold text-[#121212] leading-8 lg:leading-10">
          Contact Form
        </h1>
      </div>

      {/* Contact Form */}
      <div className="px-4 lg:px-12 pb-8 lg:pb-12">
        <div className="max-w-lg lg:max-w-[483px]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 lg:gap-[41px]"
            noValidate
          >
            {/* Name Field */}
            <InputField
              id="name"
              label="Name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name')(e.target.value)}
              placeholder="John Smith"
              error={errors.name}
              required
              aria-label="Full name"
            />

            {/* Email Field */}
            <InputField
              id="email"
              label="Email address"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email')(e.target.value)}
              placeholder="e.g. john@gmail.com"
              error={errors.email}
              required
              aria-label="Email address"
            />

            {/* State Dropdown */}
            <SelectDropdown
              id="state"
              label="State"
              options={US_STATES}
              value={formData.state}
              onChange={(e) => handleInputChange('state')(e.target.value)}
              placeholder="Select a state"
              error={errors.state}
              required
              aria-label="Select your state"
            />

            {/* Comment Field */}
            <TextArea
              id="comment"
              label="Comment"
              value={formData.comment}
              onChange={(e) => handleInputChange('comment')(e.target.value)}
              placeholder="Please share your message or inquiry..."
              error={errors.comment}
              required
              rows={4}
              aria-label="Your message or comment"
            />

            {/* Submit Button */}
            <PrimaryButton
              type="submit"
              loading={isLoading}
              disabled={isLoading}
              className="w-full lg:w-auto lg:self-start"
            >
              Send
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
