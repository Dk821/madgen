import { useState } from 'react'
import { type ServiceFAQ } from '../../utils/getServiceBySlug'

interface FAQSectionProps {
  faqs: ServiceFAQ[]
}

export default function FAQSection({ faqs }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggle = (i: number) => setOpenIndex(prev => prev === i ? -1 : i)

  return (
    <section className="pad" id="sv-faq">
      <div className="wrap">
        <div className="sv-faq-layout">
          <div className="sv-faq-left reveal">
            <div className="eyebrow">// FAQ</div>
            <h2>Answers to what you're probably wondering.</h2>
            <p>Straight talk on how we work, before you ever sign anything.</p>
          </div>
          <div className="sv-faq-right reveal">
            <ul className="faq-list">
              {faqs.map((faq, i) => (
                <li key={i} className={`faq-item glass ${openIndex === i ? 'open' : ''}`}>
                  <button className="faq-q" aria-expanded={openIndex === i} onClick={() => toggle(i)}>
                    <span className="faq-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                    </span>
                    <span className="faq-q-body">
                      <span className="faq-q-top">
                        <span className="faq-q-text">{faq.question}</span>
                        <span className="faq-meta">{faq.meta}</span>
                      </span>
                    </span>
                  </button>
                  <div className="faq-a-wrap">
                    <div className="faq-a-inner">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
