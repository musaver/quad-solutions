"use client";

export function AwardsSection() {
  const awards = [
    {
      icon: "/assets/wf/67a5fb8bc33c7f25ab4e52d9/69030f2cac395abeb9c932df_lineicons--webflow.svg",
      title: "Webflow Awards",
      description:
        "Celebrated for cutting-edge interaction design and seamless user experiences.",
      year: "2025",
    },
    {
      icon: "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67af23d542aa17b59f75e9f2_icon-dribbble.svg",
      title: "Dribbble Awards",
      description:
        "Recognized for creative excellence and innovative design solutions",
      year: "2024",
    },
    {
      icon: "/assets/wf/67a5fb8bc33c7f25ab4e52d9/69031081709697ee143941dc_logos--dailydev-icon.svg",
      title: "awwwards Awards",
      description:
        "Honored with the Best Website Design for creativity, usability, and innovation.",
      year: "2023",
    },
  ];

  return (
    <section id="award" className="home-achievement-sec">
      <div className="w-layout-blockcontainer container-11 w-container">
        <div className="w-layout-grid grid-17">
          <h2 className="achevement-heading-h2">
            Accolades and achievements celebration our{" "}
            <span className="text-span-16">design excellence</span>
          </h2>
        </div>
        <div className="w-layout-grid grid-18">
          {awards.map((award, index) => (
            <div
              key={index}
              data-w-id="ede10618-346c-063d-fc9d-91e231c7b6ff"
              className="excellence"
            >
              <img
                src={award.icon}
                loading="lazy"
                width="32"
                height="32"
                alt=""
              />
              <div>
                <div className="text-block-31">{award.title}</div>
                <p className="heading-24">{award.description}</p>
              </div>
              <div className="text-block-31">{award.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
