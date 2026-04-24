export function LogoMarqueeSection() {
  const logos = [
    "/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e4f1b2e90a76715c1a1806_brand-icon-2.svg",
    "/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e4f1b2e90a76715c1a1809_brand-icon-5.svg",
    "/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e4f1b2e90a76715c1a1808_brand-icon-3.svg",
    "/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e4f1b2e90a76715c1a1807_brand-icon-1.svg",
    "/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e4f1b2e90a76715c1a1805_brand-icon-4.svg",
  ];

  return (
    <section className="home-logo-section">
      <div className="w-layout-blockcontainer logo-sec-container w-container">
        <div className="brand-txt">
          <div className="left-divider"></div>
          <p className="divider-with-text">
            Loved by 100,00+ big and small brands around the worlds
          </p>
          <div className="right-divider"></div>
        </div>
        <div className="logo-section">
          <div className="marquee_wrap qs-marquee-animate">
            <div className="static-marquee_logos">
              {[...logos, ...logos.slice(0, 3)].map((logo, index) => (
                <img
                  key={`logo-1-${index}`}
                  width="260"
                  loading="eager"
                  alt="logo"
                  src={logo}
                  className="logo-2"
                />
              ))}
            </div>
            <div className="static-marquee_logos">
              {[...logos, ...logos.slice(0, 3)].map((logo, index) => (
                <img
                  key={`logo-2-${index}`}
                  width="260"
                  loading="eager"
                  alt="logo"
                  src={logo}
                  className="logo-2"
                />
              ))}
            </div>
          </div>
          <div className="left-overlay-div"></div>
          <div className="right-overlay-div"></div>
        </div>
      </div>
    </section>
  );
}
