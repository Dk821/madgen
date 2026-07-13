const reasons = [
  { title: 'Senior hands only', desc: 'You work directly with the people doing the work — no account-manager relay race.', icon: [<path key="a" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />, <circle key="b" cx="9" cy="7" r="4" />, <path key="c" d="M22 21v-2a4 4 0 0 0-3-3.87" />, <path key="d" d="M16 3.13a4 4 0 0 1 0 7.75" />] },
  { title: 'One connected system', desc: 'Your site, app, automations and marketing are built to share data, not fight each other.', icon: [<path key="a" d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />, <path key="b" d="M6 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />, <path key="c" d="M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />, <path key="d" d="M8.6 10.1 15.4 6.9" />, <path key="e" d="M15.4 17.1 8.6 13.9" />] },
  { title: 'Fixed-scope pricing', desc: 'You know the number before we start. No surprise invoices, no scope creep tax.', icon: [<path key="a" d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />] },
  { title: 'We stay after launch', desc: 'Retainers built for iteration, not just handoff-and-disappear support tickets.', icon: [<path key="a" d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />, <path key="b" d="M3 3v5h5" />] },
]

export default function WhyChooseUs() {
  return (
    <section className="sec-pad" id="why">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow reveal">// WHY CHOOSE US</div>
          <h2 className="reveal">Built for businesses that plan to stick around.</h2>
        </div>
        <div className="why-grid reveal">
          {reasons.map((r, i) => (
            <div className="why-cell" key={i}>
              <div className="why-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  {r.icon.map((node: React.ReactNode) => node)}
                </svg>
              </div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
