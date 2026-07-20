import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_REGEX = /^[+\d][\d\s\-().]{6,20}$/
const NAME_REGEX = /^[a-zA-Z\s'-]{2,80}$/
const BUSINESS_REGEX = /^[a-zA-Z0-9\s&.,'-]{2,100}$/
const LOCATION_REGEX = /^[a-zA-Z\s,.-]{2,100}$/
const SUBJECT_REGEX = /^.{3,200}$/

type FieldErrors = Partial<Record<'from_name' | 'business_name' | 'contact_number' | 'location' | 'reply_to' | 'subject', string>>

function sanitize(input: string): string {
  return input
    .replace(/<[^>]*>/g, '')
    .replace(/[<>]/g, '')
    .trim()
}

function validateField(name: string, value: string): string | null {
  const trimmed = value.trim()
  if (!trimmed) return 'This field is required.'

  switch (name) {
    case 'from_name':
      if (!NAME_REGEX.test(trimmed)) return 'Enter a valid name (letters, spaces, hyphens).'
      break
    case 'business_name':
      if (!BUSINESS_REGEX.test(trimmed)) return 'Enter a valid business name.'
      break
    case 'contact_number':
      if (!PHONE_REGEX.test(trimmed)) return 'Enter a valid phone number.'
      break
    case 'location':
      if (!LOCATION_REGEX.test(trimmed)) return 'Enter a valid location.'
      break
    case 'reply_to':
      if (!EMAIL_REGEX.test(trimmed)) return 'Enter a valid email address.'
      break
    case 'subject':
      if (!SUBJECT_REGEX.test(trimmed)) return 'Subject must be between 3 and 200 characters.'
      break
  }
  return null
}

export default function CTA() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!formRef.current) return

    const form = formRef.current
    const formData = new FormData(form)
    const errors: FieldErrors = {}
    let hasError = false

    for (const field of ['from_name', 'business_name', 'contact_number', 'location', 'reply_to', 'subject'] as const) {
      const raw = (formData.get(field) as string) || ''
      const error = validateField(field, raw)
      if (error) {
        errors[field] = error
        hasError = true
      }
    }

    const honeypot = (formData.get('hp_field') as string) || ''
    if (honeypot) {
      setStatus('error')
      setMessage('Submission rejected.')
      return
    }

    if (hasError) {
      setFieldErrors(errors)
      setStatus('error')
      setMessage('Please fix the highlighted fields above.')
      return
    }

    setFieldErrors({})

    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      setStatus('error')
      setMessage('Email service is not configured yet.')
      return
    }

    const safeData = {
      from_name: sanitize(formData.get('from_name') as string),
      business_name: sanitize(formData.get('business_name') as string),
      contact_number: sanitize(formData.get('contact_number') as string),
      location: sanitize(formData.get('location') as string),
      reply_to: sanitize(formData.get('reply_to') as string),
      subject: sanitize(formData.get('subject') as string),
    }

    setStatus('sending')
    setMessage('')

    try {
      await emailjs.send(emailjsServiceId, emailjsTemplateId, safeData, {
        publicKey: emailjsPublicKey,
      })

      form.reset()
      setStatus('sent')
      setMessage('Message sent. We will get back to you soon.')
    } catch (err) {
      console.error('EmailJS error:', JSON.stringify(err, Object.getOwnPropertyNames(err)))
      setStatus('error')
      setMessage('Message could not be sent. Please try again.')
    }
  }

  return (
    <section className="cta-section" id="cta">
      <div className="wrap cta-wrap">
        <div className="cta-copy reveal">
          <div className="eyebrow">// GET IN TOUCH</div>
          <h2>Tell us what you&apos;re building &mdash; we&apos;ll take it from there.</h2>
          <p>
            Share a few details below and a senior member of the team replies
            within one business day. No sales deck, just next steps.
          </p>

          <ul className="cta-benefits" aria-label="Contact benefits">
            <li>Senior hands reply &mdash; never a relay of account managers</li>
            <li>Fixed-scope quote back within 48 hours</li>
            <li>No spam, ever &mdash; just your project</li>
          </ul>
        </div>

        <form ref={formRef} className="contact-panel reveal" onSubmit={handleSubmit} noValidate>
          <div className="contact-panel-title">
            <span className="contact-spark" aria-hidden="true">
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>
            <h3>Start a conversation</h3>
          </div>

          <div className="contact-grid">
            <label className={fieldErrors.from_name ? 'field-error' : ''}>
              <span>Name</span>
              <input type="text" name="from_name" placeholder="Your full name" autoComplete="name" maxLength={80} required />
              {fieldErrors.from_name ? <span className="field-error-msg">{fieldErrors.from_name}</span> : null}
            </label>

            <label className={fieldErrors.business_name ? 'field-error' : ''}>
              <span>Name of the business</span>
              <input type="text" name="business_name" placeholder="Your company" autoComplete="organization" maxLength={100} required />
              {fieldErrors.business_name ? <span className="field-error-msg">{fieldErrors.business_name}</span> : null}
            </label>

            <label className={fieldErrors.contact_number ? 'field-error' : ''}>
              <span>Contact number</span>
              <input type="tel" name="contact_number" placeholder="Enter your contact number" autoComplete="tel" maxLength={20} required />
              {fieldErrors.contact_number ? <span className="field-error-msg">{fieldErrors.contact_number}</span> : null}
            </label>

            <label className={fieldErrors.location ? 'field-error' : ''}>
              <span>Location</span>
              <input type="text" name="location" placeholder="City, country" autoComplete="address-level2" maxLength={100} required />
              {fieldErrors.location ? <span className="field-error-msg">{fieldErrors.location}</span> : null}
            </label>

            <label className={`contact-wide${fieldErrors.reply_to ? ' field-error' : ''}`}>
              <span>Email</span>
              <input type="email" name="reply_to" placeholder="you@email.com" autoComplete="email" maxLength={254} required />
              {fieldErrors.reply_to ? <span className="field-error-msg">{fieldErrors.reply_to}</span> : null}
            </label>

            <label className={`contact-wide${fieldErrors.subject ? ' field-error' : ''}`}>
              <span>Subject</span>
              <input type="text" name="subject" placeholder="What are you building?" maxLength={200} required />
              {fieldErrors.subject ? <span className="field-error-msg">{fieldErrors.subject}</span> : null}
            </label>
          </div>

          <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
            <input type="text" name="hp_field" tabIndex={-1} autoComplete="off" />
          </div>

          <button type="submit" className="contact-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          {message ? <p className={`contact-status ${status === 'sent' ? 'sent' : 'error'}`}>{message}</p> : null}
          <p className="contact-note">We&apos;ll never share your details. Unsubscribe anytime.</p>
        </form>
      </div>
    </section>
  )
}
