const benefits = [
  {
    title: "One Low Price",
    description: "Explore a variety of interesting topics without straining your budget. Embrace knowledge at your fingertips.",
    feature: "",
  },
  {
    title: "Unlimited Access",
    description: "Dive into a world of knowledge with complete access to everything. No limits, just endless discovery!",
    feature: "",
  },
  {
    title: "Cancel Anytime",
    description: "Life happens, and we get it. pause your subscription anytime, giving you control over when and how you enjoy our monthly newsletter delights.",
    feature: <span className="pill feature">coming soon</span>,
  },
];

export default function Benefits() {
  return (
    <div className="bg-black">
      <div className="column-padding">
        <div className="content-grid xl">
          {benefits.map(benefit => (
                <div key={benefit.title} className="spacing-base">
                <h3>
                  {benefit.title}
                  {benefit.feature && ' '}
                {benefit.feature}
                 
                  <br />
                </h3>
                <div>{benefit.description}</div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}
