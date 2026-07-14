import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import emailjs from '@emailjs/browser'

const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function CTA() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!formRef.current) return

    if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
      setStatus('error')
      setMessage('Email service is not configured yet.')
      return
    }

    setStatus('sending')
    setMessage('')

    try {
      await emailjs.sendForm(emailjsServiceId, emailjsTemplateId, formRef.current, {
        publicKey: emailjsPublicKey,
      })

      formRef.current.reset()
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

        <form ref={formRef} className="contact-panel reveal" onSubmit={handleSubmit}>
          <div className="contact-panel-title">
            <span className="contact-spark" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 3l1.8 6.2L20 12l-6.2 1.8L12 20l-1.8-6.2L4 12l6.2-2.8L12 3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              </svg>
            </span>
            <h3>Start a conversation</h3>
          </div>

          <div className="contact-grid">
            <label>
              <span>Name</span>
              <input type="text" name="from_name" placeholder="Your full name" autoComplete="name" required />
            </label>

            <label>
              <span>Name of the business</span>
              <input type="text" name="business_name" placeholder="Your company" autoComplete="organization" required />
            </label>

            <label>
              <span>Contact number</span>
              <input type="tel" name="contact_number" placeholder="+91 98765 43210" autoComplete="tel" required />
            </label>

            <label>
              <span>Location</span>
              <input type="text" name="location" placeholder="City, country" autoComplete="address-level2" required />
            </label>

            <label className="contact-wide">
              <span>Email</span>
              <input type="email" name="reply_to" placeholder="you@email.com" autoComplete="email" required />
            </label>

            <label className="contact-wide">
              <span>Subject</span>
              <input type="text" name="subject" placeholder="What are you building?" required />
            </label>
          </div>

          <button type="submit" className="contact-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
          {message ? <p className={`contact-status ${status}`}>{message}</p> : null}
          <p className="contact-note">We&apos;ll never share your details. Unsubscribe anytime.</p>
        </form>
      </div>
    </section>
  )
}
