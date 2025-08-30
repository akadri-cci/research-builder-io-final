/**
 * Builder.io CMS Integration Configuration for Contact Form
 *
 * This file contains configuration and helpers for integrating
 * the contact form components with Builder.io CMS.
 */

// CMS-editable content structure for the Contact Form page
export interface ContactFormContent {
  pageTitle: string
  pageSubtitle?: string
  formFields: {
    name: {
      label: string
      placeholder: string
      errorRequired: string
    }
    email: {
      label: string
      placeholder: string
      errorRequired: string
      errorInvalid: string
    }
    state: {
      label: string
      placeholder: string
      errorRequired: string
    }
    comment: {
      label: string
      placeholder: string
      errorRequired: string
    }
  }
  submitButton: {
    text: string
    loadingText: string
  }
  successPage: {
    title: string
    message: string
    buttonText: string
  }
  validation: {
    emailInvalidMessage: string
  }
}

// Default content that can be overridden by Builder.io CMS
export const defaultContactFormContent: ContactFormContent = {
  pageTitle: 'Contact Form',
  pageSubtitle: 'Get in touch with our support team',
  formFields: {
    name: {
      label: 'Name',
      placeholder: 'John Smith',
      errorRequired: 'Name is required',
    },
    email: {
      label: 'Email address',
      placeholder: 'e.g. john@gmail.com',
      errorRequired: 'Email is required',
      errorInvalid: 'Please enter a valid email address',
    },
    state: {
      label: 'State',
      placeholder: 'Select a state',
      errorRequired: 'Please select a state',
    },
    comment: {
      label: 'Comment',
      placeholder: 'Please share your message or inquiry...',
      errorRequired: 'Required',
    },
  },
  submitButton: {
    text: 'Send',
    loadingText: 'Sending...',
  },
  successPage: {
    title: 'Message Sent Successfully!',
    message: "Thank you for contacting us. We'll get back to you soon.",
    buttonText: 'Send Another Message',
  },
  validation: {
    emailInvalidMessage: 'Please enter a valid email address',
  },
}

// Helper function to merge CMS content with defaults
export const mergeWithContactFormCMS = (
  cmsContent?: Partial<ContactFormContent>
): ContactFormContent => {
  return {
    ...defaultContactFormContent,
    ...cmsContent,
    formFields: {
      ...defaultContactFormContent.formFields,
      ...(cmsContent?.formFields && {
        name: {
          ...defaultContactFormContent.formFields.name,
          ...cmsContent.formFields.name,
        },
        email: {
          ...defaultContactFormContent.formFields.email,
          ...cmsContent.formFields.email,
        },
        state: {
          ...defaultContactFormContent.formFields.state,
          ...cmsContent.formFields.state,
        },
        comment: {
          ...defaultContactFormContent.formFields.comment,
          ...cmsContent.formFields.comment,
        },
      }),
    },
    submitButton: {
      ...defaultContactFormContent.submitButton,
      ...cmsContent?.submitButton,
    },
    successPage: {
      ...defaultContactFormContent.successPage,
      ...cmsContent?.successPage,
    },
    validation: {
      ...defaultContactFormContent.validation,
      ...cmsContent?.validation,
    },
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
 * const content = mergeWithContactFormCMS(props.cmsContent)
 * <InputField label={content.formFields.name.label} placeholder={content.formFields.name.placeholder} />
 */

// Builder.io model schema suggestion for the Contact Form page
export const builderIOContactFormSchema = {
  name: 'ContactFormPage',
  fields: [
    {
      name: 'pageTitle',
      type: 'string',
      defaultValue: 'Contact Form',
      helperText: 'Main page heading',
    },
    {
      name: 'pageSubtitle',
      type: 'string',
      defaultValue: 'Get in touch with our support team',
      helperText: 'Optional subtitle text below the main heading',
    },
    {
      name: 'formFields',
      type: 'object',
      subFields: [
        {
          name: 'name',
          type: 'object',
          subFields: [
            { name: 'label', type: 'string', defaultValue: 'Name' },
            { name: 'placeholder', type: 'string', defaultValue: 'John Smith' },
            {
              name: 'errorRequired',
              type: 'string',
              defaultValue: 'Name is required',
            },
          ],
        },
        {
          name: 'email',
          type: 'object',
          subFields: [
            { name: 'label', type: 'string', defaultValue: 'Email address' },
            {
              name: 'placeholder',
              type: 'string',
              defaultValue: 'e.g. john@gmail.com',
            },
            {
              name: 'errorRequired',
              type: 'string',
              defaultValue: 'Email is required',
            },
            {
              name: 'errorInvalid',
              type: 'string',
              defaultValue: 'Please enter a valid email address',
            },
          ],
        },
        {
          name: 'state',
          type: 'object',
          subFields: [
            { name: 'label', type: 'string', defaultValue: 'State' },
            {
              name: 'placeholder',
              type: 'string',
              defaultValue: 'Select a state',
            },
            {
              name: 'errorRequired',
              type: 'string',
              defaultValue: 'Please select a state',
            },
          ],
        },
        {
          name: 'comment',
          type: 'object',
          subFields: [
            { name: 'label', type: 'string', defaultValue: 'Comment' },
            {
              name: 'placeholder',
              type: 'string',
              defaultValue: 'Please share your message or inquiry...',
            },
            { name: 'errorRequired', type: 'string', defaultValue: 'Required' },
          ],
        },
      ],
    },
    {
      name: 'submitButton',
      type: 'object',
      subFields: [
        { name: 'text', type: 'string', defaultValue: 'Send' },
        { name: 'loadingText', type: 'string', defaultValue: 'Sending...' },
      ],
    },
    {
      name: 'successPage',
      type: 'object',
      subFields: [
        {
          name: 'title',
          type: 'string',
          defaultValue: 'Message Sent Successfully!',
        },
        {
          name: 'message',
          type: 'string',
          defaultValue:
            "Thank you for contacting us. We'll get back to you soon.",
        },
        {
          name: 'buttonText',
          type: 'string',
          defaultValue: 'Send Another Message',
        },
      ],
    },
  ],
}

// Accessibility labels that can also be made editable
export interface ContactFormA11yContent {
  nameAriaLabel: string
  emailAriaLabel: string
  stateAriaLabel: string
  commentAriaLabel: string
}

export const defaultA11yContent: ContactFormA11yContent = {
  nameAriaLabel: 'Full name',
  emailAriaLabel: 'Email address',
  stateAriaLabel: 'Select your state',
  commentAriaLabel: 'Your message or comment',
}
