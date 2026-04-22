"use client";

export function FAQSection() {
  const faqs = [
    {
      question: "What services does Awake Agency offer?",
      answer:
        "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
      dataWId: "69f3e81b-e3ab-9564-a29d-1592c3d0da66",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
      dataWId: "69f3e81b-e3ab-9564-a29d-1592c3d0da70",
    },
    {
      question: "How is pricing structured at Awake Agency?",
      answer:
        "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
      dataWId: "69f3e81b-e3ab-9564-a29d-1592c3d0da7a",
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer:
        "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
      dataWId: "69f3e81b-e3ab-9564-a29d-1592c3d0da84",
    },
    {
      question: "How often will I receive updates on my project?",
      answer:
        "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
      dataWId: "69f3e81b-e3ab-9564-a29d-1592c3d0da8e",
    },
    {
      question: "How do I get started with Awake Agency?",
      answer:
        "Yes, we provide post-launch support to ensure smooth implementation and offer ongoing maintenance packages for clients needing regular updates or technical assistance.",
      dataWId: "69f3e81b-e3ab-9564-a29d-1592c3d0da98",
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
