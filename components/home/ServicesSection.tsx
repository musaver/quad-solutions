export function ServicesSection() {
  const services = [
    {
      icon: "/assets/wf/67b2f932468e3acae7e236f3/68e623e24b10e2e4e2969b30_digitalmarketing.svg",
      title: "Growth Marketing",
      bgColor: "hsla(211.04895104895104, 100.00%, 71.96%, 0.20)",
    },
    {
      icon: "/assets/wf/67b2f932468e3acae7e236f3/68e6018a556df7bc3330d227_brand.svg",
      title: "Creative Production",
      bgColor: "hsla(271.3761467889908, 76.22%, 71.96%, 0.20)",
    },
    {
      icon: "/assets/wf/67b2f932468e3acae7e236f3/68e621c968fd23ebcbec7320_webdevp.svg",
      title: "Digital Products",
      bgColor: "hsla(350, 83.08%, 74.51%, 0.20)",
    },
    {
      icon: "/assets/wf/67b2f932468e3acae7e236f3/68e623fa72bd543218e41cb8_uiux.svg",
      title: "AI & Automation",
      bgColor: "hsla(28.211920529801322, 100.00%, 70.39%, 0.20)",
    },
  ];

  return (
    <section id="services" className="home-innovation-section">
      <div className="w-layout-blockcontainer container-5 w-container">
        <div className="w-layout-grid innovation-heading-div">
          <h2
            data-w-id="1b8cac0d-7086-e805-d91f-f4ae9cc65344"
            style={{ opacity: 0 }}
            className="home-heading-h2"
          >
            Where innovation meets <span className="span-txt">aesthetics</span>
          </h2>
        </div>
        <div className="innovation-wrapper w-dyn-list">
          <div role="list" className="innovation-grid w-dyn-items">
            {services.map((service, index) => (
              <div
                key={index}
                id="w-node-_9d05b4dd-2469-26fc-511a-30d212818f48-ab4e52e0"
                data-w-id="9d05b4dd-2469-26fc-511a-30d212818f48"
                style={{ backgroundColor: service.bgColor, opacity: 0 }}
                role="listitem"
                className="innovation-item w-dyn-item"
              >
                <img
                  src={service.icon}
                  loading="lazy"
                  width="40"
                  height="40"
                  alt=""
                />
                <p className="heading-25">{service.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div
          data-w-id="515745fa-8925-8639-84db-e1751e217fc7"
          style={{ opacity: 0 }}
          className="call-to-action"
        >
          <div className="collabrator-wrapper">
            <div className="collabrator-txt">
              <p className="title-1">See Our Work in Action. </p>
              <p className="title-2">
                Start Your Creative Journey with Us!
              </p>
            </div>
            <div className="collabrator-btn-div">
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
              <a
                data-w-id="ba61e6f9-ec92-0fde-16a2-618e7c8fb591"
                href="/contact"
                className="back-to-home-btn w-inline-block"
              >
                <div
                  data-w-id="9a859795-0b70-286e-8ac3-11632759e770"
                  className="view-portfolio-txt"
                >
                  View Portfolio
                </div>
                <div className="div-block-23">
                  <img
                    src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67a9e2599fa438b2b5ca91b6_arrow-top-right.png"
                    loading="lazy"
                    alt="arrow-icon"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
