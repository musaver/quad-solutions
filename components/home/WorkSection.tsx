import Link from "next/link";

export function WorkSection() {
  const projects = [
    {
      id: "heyam",
      name: "Heyam.ae",
      image: "/assets/figma-case-studies/heyam.jpg",
      tags: ["Shopify CRO", "Meta Ads", "Influencer & UGC"],
      cardClass: "card-1",
      dataWId: "4c59f5ea-8902-3ed7-f744-beb222178250",
    },
    {
      id: "mexivida",
      name: "MexiVida",
      image: "/assets/figma-case-studies/mexivida.jpg",
      tags: ["Meta Ads", "Amazon SEO", "Cultural Content"],
      cardClass: "card-2",
      dataWId: "04bc2df1-16f2-23e8-1ce0-9f38f46ad20c",
    },
    {
      id: "blends",
      name: "Blends Barbershop",
      image: "/assets/figma-case-studies/blends.jpg",
      tags: ["Hyper-Local Ads", "Booking Funnel", "Review Loops"],
      cardClass: "card-3",
      dataWId: "5daca492-060a-69d8-58c2-f7617508d084",
    },
    {
      id: "home-services",
      name: "US Home Services",
      image: "/assets/figma-case-studies/home-services.jpg",
      tags: ["Lead Funnels", "CRM Integration", "Paid Media"],
      cardClass: "card-4",
      dataWId: "f3b16a16-0c4c-a740-a426-e15765d9f019",
    },
  ];

  return (
    <section id="work" className="home-our-work-section">
      <div className="w-layout-blockcontainer container-6 w-container">
        <div className="div-block-215">
          <div className="w-layout-grid heading-div">
            <h2
              data-w-id="065964db-7d24-6ba3-4b1c-f61efb21ffaf"
              style={{ opacity: 0 }}
              className="our-work-heading"
            >
              How we drive real growth for{" "}
              <span className="span-italic-txt">ambitious brands</span>
            </h2>
          </div>
          <div className="div-block-214">
            <div className="div-block-212">
              {projects.slice(0, 2).map((project, index) => (
                <div
                  key={index}
                  data-w-id={project.dataWId}
                  style={{ opacity: 0 }}
                  className={project.cardClass}
                >
                  <div
                    data-w-id="30921add-b727-7bcb-e20b-9b819761b4c1"
                    className="small-card"
                  >
                    <div className="div-block-196">
                      <img
                        src={project.image}
                        loading="lazy"
                        alt={project.name}
                        className="avatar"
                      />
                      <Link
                        href={`/case-study-details?project=${project.id}`}
                        className="div-block-197 w-inline-block"
                      >
                        <div className="div-block-198">
                          <img
                            src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e7aa7a27b1149298a5e8ad_round-arrow-right.svg"
                            loading="lazy"
                            alt=""
                            className="image-30"
                          />
                        </div>
                      </Link>
                    </div>
                    <p className="heading-7">{project.name}</p>
                  </div>
                  <div className="chips">
                    {project.tags.map((tag, tagIndex) => (
                      <Link
                        key={tagIndex}
                        href={`/case-study-details?project=${project.id}`}
                        className="link-block-2 w-inline-block"
                      >
                        <div>{tag}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="div-block-213">
              {projects.slice(2, 4).map((project, index) => (
                <div
                  key={index}
                  data-w-id={project.dataWId}
                  style={{ opacity: 0 }}
                  className={project.cardClass}
                >
                  <div
                    data-w-id="30921add-b727-7bcb-e20b-9b819761b4c1"
                    className="small-card"
                  >
                    <div className="div-block-196">
                      <img
                        src={project.image}
                        loading="lazy"
                        alt={project.name}
                        className="avatar"
                      />
                      <Link
                        href={`/case-study-details?project=${project.id}`}
                        className="div-block-197 w-inline-block"
                      >
                        <div className="div-block-198">
                          <img
                            src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e7aa7a27b1149298a5e8ad_round-arrow-right.svg"
                            loading="lazy"
                            alt=""
                            className="image-30"
                          />
                        </div>
                      </Link>
                    </div>
                    <p className="heading-7">{project.name}</p>
                  </div>
                  <div className="chips">
                    {project.tags.map((tag, tagIndex) => (
                      <Link
                        key={tagIndex}
                        href={`/case-study-details?project=${project.id}`}
                        className="link-block-2 w-inline-block"
                      >
                        <div>{tag}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
