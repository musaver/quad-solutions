"use client";

export function FAQSection() {
  const faqs = [
    {
      question: "What services does QUAD Solutions offer?",
      answer:
        "We operate across four specialized divisions: Growth Marketing (Paid & Organic), Creative Production (Visuals & Video), Digital Products (Web & App Development), and AI & Automation (Chatbots & Workflows).",
      dataWId: "69f3e81b-e3ab-9564-a29d-1592c3d0da66",
    },
    {
      question: 'How does your "Specialized Umbrella" model work?',
      answer:
        "Instead of a generalist team trying to do everything, we assign dedicated specialists to your specific needs. However, you only ever deal with one unified project manager, ensuring seamless integration across all services without the headache of managing multiple agencies.",
      dataWId: "69f3e81b-e3ab-9564-a29d-1592c3d0da70",
    },
    {
      question: "Do you work with specific industries?",
      answer:
        "Yes, we have deep niche expertise. We have dedicated teams that specialize in E-commerce, Real Estate, Healthcare/Aesthetics, SaaS, and Local Service businesses.",
      dataWId: "69f3e81b-e3ab-9564-a29d-1592c3d0da7a",
    },
    {
      question: "How do you measure success?",
      answer:
        "We are fiercely ROI-focused. Whether it's tracking Cost Per Acquisition (CPA) for ad campaigns, conversion rates for e-commerce stores, or operational hours saved through AI automation, we define clear KPIs before any project begins.",
      dataWId: "69f3e81b-e3ab-9564-a29d-1592c3d0da84",
    },
    {
      question: "How do I get started?",
      answer:
        "It starts with a 45-minute Discovery Call. We'll discuss your current bottlenecks and determine which of our specialist teams are required to build your custom growth strategy.",
      dataWId: "69f3e81b-e3ab-9564-a29d-1592c3d0da8e",
    },
  ];

  return (
    <section className="section-8">
      <div className="w-layout-blockcontainer container-10 w-container">
        <div className="w-layout-grid grid-16">
          <h2
            data-w-id="69f3e81b-e3ab-9564-a29d-1592c3d0da5f"
            className="heading-20"
          >
            Got questions?
            <br />
            We&apos;ve got <span className="text-span-9">answers</span>
          </h2>
        </div>
        <div className="div-block-41">
          {faqs.map((faq, index) => (
            <div
              key={index}
              data-hover="false"
              data-delay="0"
              data-w-id={faq.dataWId}
              className="accordian-item w-dropdown"
            >
              <div className="accordion-toggle w-dropdown-toggle">
                <div className="accordian-icon w-icon-dropdown-toggle"></div>
                <div className="text-block-30">{faq.question}</div>
              </div>
              <nav className="dropdown-list w-dropdown-list">
                <div className="text-block-34">
                  {faq.answer.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < faq.answer.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </div>
              </nav>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
