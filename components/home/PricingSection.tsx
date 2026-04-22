"use client";

export function PricingSection() {
  const starterFeatures = [
    "Design Updates Every 2 Days",
    "Mid-level Designer",
    "SEO optimization",
    "Monthly analytics",
    "2x Calls Per Month",
    "License free assets",
  ];

  const proFeatures = [
    "Design Updates Daily",
    "Senior-level Designer",
    "AI Advisory Framework",
    "Full-service Creative Team",
    "4x Calls Per Month",
    "License free assets",
  ];

  return (
    <section id="pricing" className="section-7">
      <div className="w-layout-blockcontainer container-main w-container">
        <div className="w-layout-grid grid-12">
          <h2 className="pricing-heading-h2">
            Pick the plan that fits your{" "}
            <span className="text-span-6">start-up</span>
          </h2>
        </div>
        <div className="w-layout-grid pricing-grid">
          <div
            data-w-id="1669cd86-8bd6-82a8-f5ef-dd6aecda9ed8"
            className="plan-1"
          >
            <div className="w-layout-grid plan-wrapper">
              <div className="div-block-36">
                <div className="plan-bedge">
                  <div className="badge">
                    <div>Starter</div>
                  </div>
                </div>
                <div className="plan-descp">
                  For companies who need design
                  <br />
                  support. One request at a time
                </div>
                <h3 className="pricing">
                  $2500<span className="pricing-validity">/month</span>
                </h3>
                <div>
                  <a
                    data-w-id="fea7c85d-5095-e3c7-f855-32beb147eb20"
                    href="/contact"
                    className="let-s-collaborate w-inline-block"
                  >
                    <div className="text-block-13">Let&apos;s Collaborate</div>
                    <div className="div-block-21">
                      <img
                        src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67ad96109507c7c5269baed1_arrow-top-right-dark.svg"
                        loading="lazy"
                        width="10"
                        alt="arrow-icon"
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="feature-sec">
                <div className="feature-txt">Features</div>
                <ul role="list" className="feature-list w-list-unstyled">
                  {starterFeatures.map((feature, index) => (
                    <li key={index} className="list-item-8">
                      <img
                        src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67aedee1f65012f386f8ba7a_checked.svg"
                        loading="lazy"
                        alt=""
                        className="image-4"
                      />
                      <div className="text-block-28">{feature}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            data-w-id="6cd966a7-b9fb-ce9d-e067-0ef5ced882b0"
            className="div-block-34"
          >
            <div className="w-layout-grid grid-15">
              <div className="div-block-37">
                <div>
                  <div className="badge">
                    <div>Pro</div>
                  </div>
                </div>
                <div className="text-block-25">
                  2x the speed. Great for an MVP, Web App or complex problem
                </div>
                <h3 className="heading-19">
                  $3500<span className="pricing-validaity">/month</span>
                </h3>
                <div>
                  <a
                    data-w-id="fea7c85d-5095-e3c7-f855-32beb147eb20"
                    href="/contact"
                    className="let-s-collaborate w-inline-block"
                  >
                    <div className="text-block-13">Let&apos;s Collaborate</div>
                    <div className="div-block-21">
                      <img
                        src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67ad96109507c7c5269baed1_arrow-top-right-dark.svg"
                        loading="lazy"
                        width="10"
                        alt="arrow-icon"
                      />
                    </div>
                  </a>
                </div>
              </div>
              <div className="div-block-38">
                <div className="text-block-26">Features</div>
                <div className="points">
                  <ul role="list" className="list-3 w-list-unstyled">
                    {proFeatures.map((feature, index) => (
                      <li key={index} className="list-item-7">
                        <img
                          src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67aeec609b71f5eab8b61221_light-checked.svg"
                          loading="lazy"
                          alt=""
                        />
                        <div className="text-block-27">{feature}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
