# Contact Form Accessibility & Testing Guide

## Accessibility Features Implemented

### 📋 Form Labels and Structure
- **Semantic Labels**: All form fields have proper `<label>` elements associated with inputs via `htmlFor` and `id` attributes
- **Required Field Indicators**: Visual asterisks (*) and `aria-required="true"` for mandatory fields
- **Label Hierarchy**: Clear visual hierarchy with consistent typography and spacing

### 🎯 ARIA Attributes
- **aria-invalid**: Set to `true` when fields have validation errors
- **aria-describedby**: Links error messages to their corresponding form fields
- **aria-required**: Indicates which fields are mandatory
- **aria-label**: Provides accessible names for form controls
- **aria-live="polite"**: Error messages announce changes without interrupting user flow
- **role="alert"**: Error messages are properly announced to screen readers

### ⌨️ Keyboard Navigation
- **Tab Order**: Logical tab sequence through all interactive elements
- **Focus Management**: Visible focus indicators on all interactive elements
- **Enter Key**: Submit button can be activated with Enter key
- **Escape Key**: Focus management for dropdown selections

### 🎨 Visual Accessibility
- **Color Contrast**: Error states use sufficient contrast ratios
- **Error States**: Both color AND text indicators for errors (not relying on color alone)
- **Focus Indicators**: Clear visual focus rings with proper contrast
- **Responsive Text**: Font sizes scale appropriately across devices

### 🔍 Error Handling
- **Real-time Validation**: Errors clear as users correct them
- **Clear Error Messages**: Descriptive, actionable error text
- **Error Announcement**: Screen readers announce validation errors
- **Error Prevention**: Client-side validation prevents common mistakes

## Testing Checklist

### Manual Testing
- [ ] **Tab Navigation**: Can navigate entire form using only Tab/Shift+Tab
- [ ] **Error States**: All validation errors display clearly with both visual and text indicators
- [ ] **Screen Reader**: Test with screen reader (NVDA, JAWS, VoiceOver) for proper announcements
- [ ] **Keyboard Only**: Complete form submission using only keyboard
- [ ] **Mobile Touch**: Test form interaction on mobile devices
- [ ] **Zoom Test**: Form remains usable at 200% zoom level

### Automated Testing
```bash
# Install accessibility testing tools
npm install --save-dev @axe-core/react
npm install --save-dev jest-axe

# Run accessibility tests
npm run test:a11y
```

### Form Validation Testing
- [ ] **Required Fields**: All required fields show errors when empty
- [ ] **Email Validation**: Invalid email formats are caught and reported
- [ ] **State Selection**: Dropdown requires a selection
- [ ] **Comment Length**: Textarea validates for required content
- [ ] **Success State**: Form shows success message after submission
- [ ] **Loading State**: Submit button shows loading state during submission

### Responsive Design Testing
- [ ] **Mobile (320px-768px)**: Form layout adapts properly
- [ ] **Tablet (768px-1024px)**: Components scale appropriately  
- [ ] **Desktop (1024px+)**: Matches Figma design specifications
- [ ] **Touch Targets**: All interactive elements meet 44px minimum size on mobile

## Browser Compatibility

### Supported Browsers
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Accessibility Tools Compatibility
- ✅ NVDA (Windows)
- ✅ JAWS (Windows) 
- ✅ VoiceOver (macOS/iOS)
- ✅ TalkBack (Android)

## Performance Considerations

### Form Performance
- **Debounced Validation**: Prevents excessive validation calls during typing
- **Optimized Re-renders**: Form state changes only trigger necessary updates
- **Lazy Loading**: Components load efficiently without blocking

### Bundle Size Impact
- InputField: ~2KB
- SelectDropdown: ~4KB (includes US states data)
- TextArea: ~2KB  
- PrimaryButton: ~1KB
- Form Hook: ~3KB
- **Total Addition**: ~12KB (gzipped)

## Builder.io CMS Integration

### Editable Content
All text content is configurable through Builder.io:
- Form labels and placeholders
- Error messages
- Success page content
- Button text
- Accessibility labels

### CMS Model Setup
```typescript
// Import the schema
import { builderIOContactFormSchema } from '../data/contactFormCmsConfig'

// Register with Builder.io
Builder.registerModel(builderIOContactFormSchema)
```

### Content Updates
Content managers can update:
1. **Field Labels**: Change "Name" to "Full Name", etc.
2. **Placeholders**: Customize example text
3. **Error Messages**: Adjust validation messages for brand voice
4. **Success Content**: Modify thank you page messaging
5. **Accessibility Labels**: Update screen reader text

## Security Considerations

### Client-Side Validation
- ✅ Email format validation
- ✅ Required field checking  
- ✅ Input sanitization
- ⚠️ **Note**: Always validate server-side as well

### Data Handling
- Form data is not stored client-side
- Sensitive information should use HTTPS
- Consider GDPR compliance for email collection

## Maintenance

### Regular Checks
- [ ] Test form with latest screen reader versions
- [ ] Verify accessibility with browser updates
- [ ] Check color contrast ratios annually
- [ ] Update email validation regex as needed
- [ ] Test responsive breakpoints with new devices

### Updates Required
- **Adding New Fields**: Follow established patterns for accessibility
- **Styling Changes**: Maintain color contrast requirements
- **Functionality Changes**: Re-test accessibility features
- **Browser Support**: Update testing matrix as needed
