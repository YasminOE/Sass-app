const benefits = [
  { title: "One low price",
    description: "Our prices are very competitive and we offer a wide range of products at one low cost.",
  },
  { title: "No limits",
    description: "Get complete access to everything on the site.",
  },
  { title: "Cancel anytime",
    description: "Pause your subscription, whenever you like.",
  },
]

export default function Benefits() {
  return (
    <div className="bg-black">
      <div className="column-padding">
        <div className="content-grid xl">
          {benefits.map(benefit => (
                <div key={benefit.title} className="spacing-base">
                <h3>
                  {benefit.title}
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
