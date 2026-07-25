import { type ServiceStat } from '../../utils/getServiceBySlug'

interface StatisticsSectionProps {
  statistics: ServiceStat[]
  heading: string
  description: string
}

export default function StatisticsSection({ statistics, heading, description }: StatisticsSectionProps) {
  return (
    <section className="pad" id="sv-why">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow reveal">// Why Choose Madgen</div>
            <h2 className="reveal">{heading}</h2>
          </div>
          <p className="reveal">{description}</p>
        </div>
        <div className="stats-bar glass reveal">
          {statistics.map((stat, i) => (
            <div key={i} className="stat">
              <div className="num" data-count={stat.value} data-suffix={stat.suffix} data-decimal={stat.decimal || 0}>
                {stat.value}{stat.suffix}
              </div>
              <div className="lbl">{stat.label}</div>
              <div className="sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
