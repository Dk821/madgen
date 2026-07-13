const steps = [
  { num: '01', title: 'Discover', meta: 'Week 1', desc: 'We map the problem, the users and the constraints before opening a single design tool.' },
  { num: '02', title: 'Design', meta: 'Week 2–3', desc: 'Wireframes to high-fidelity screens, reviewed together in short async loops — not one big reveal.' },
  { num: '03', title: 'Build', meta: 'Week 3–8', desc: 'Engineering in weekly increments you can see and test, with staging links from day one.' },
  { num: '04', title: 'Launch', meta: 'Week 9', desc: 'QA, performance passes and a staged rollout — launch day should be uneventful by design.' },
  { num: '05', title: 'Grow', meta: 'Ongoing', desc: 'Post-launch retainer covering iteration, campaigns and the automations that keep compounding.' },
]

export default function Process() {
  return (
    <section className="sec-pad" id="process">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow reveal">// OUR PROCESS</div>
          <h2 className="reveal">Five steps, start to launch.</h2>
          <p className="reveal">The same sequence for a landing page or a full product build — depth changes, order doesn&apos;t.</p>
        </div>
        <div className="process-list">
          {steps.map((step) => (
            <div className="process-row reveal" key={step.num}>
              <div className="process-num">{step.num}</div>
              <div className="process-title">
                <h3>{step.title}</h3>
                <span>{step.meta}</span>
              </div>
              <div className="process-desc"><p>{step.desc}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
