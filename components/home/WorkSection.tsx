export function WorkSection() {
  const projects = [
    {
      name: "FlowBank",
      image:
        "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67adb22b6801ba1be2c8816a_flowbank.jpg",
      tags: ["UX Research", "Interface Design"],
      cardClass: "card-1",
      dataWId: "4c59f5ea-8902-3ed7-f744-beb222178250",
    },
    {
      name: "Academy.co",
      image:
        "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67adb22bbb6dbd85f5b9fc07_academy.jpg",
      tags: ["Product Design", "Interaction Design"],
      cardClass: "card-2",
      dataWId: "04bc2df1-16f2-23e8-1ce0-9f38f46ad20c",
    },
    {
      name: "Genome",
      image:
        "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67adb22b8be398062d992b05_genome.jpg",
      tags: ["Brand identity design", "UX Research"],
      cardClass: "card-3",
      dataWId: "5daca492-060a-69d8-58c2-f7617508d084",
    },
    {
      name: "Hotto",
      image:
        "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67adb22cde7bb305cec8b740_hotto.jpg",
      tags: ["Visual Story telling", "Web & Mobile Design"],
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
              How we transformed a small business&apos;s{" "}
              <span className="span-italic-txt">online presence</span>
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
                        alt=""
                        sizes="(max-width: 624px) 100vw, 624px"
                        srcSet={`${project.image.replace(".jpg", "-p-500.jpg")} 500w, ${project.image} 624w`}
                        className="avatar"
                      />
                      <a
                        href="https://www.wrappixel.com/"
                        target="_blank"
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
                      </a>
                    </div>
                    <p className="heading-7">{project.name}</p>
                  </div>
                  <div className="chips">
                    {project.tags.map((tag, tagIndex) => (
                      <a
                        key={tagIndex}
                        href="#"
                        className="link-block-2 w-inline-block"
                      >
                        <div>{tag}</div>
                      </a>
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
                        alt=""
                        sizes="(max-width: 624px) 100vw, 624px"
                        srcSet={`${project.image.replace(".jpg", "-p-500.jpg")} 500w, ${project.image} 624w`}
                        className="avatar"
                      />
                      <a
                        href="https://www.wrappixel.com/"
                        target="_blank"
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
                      </a>
                    </div>
                    <p className="heading-7">{project.name}</p>
                  </div>
                  <div className="chips">
                    {project.tags.map((tag, tagIndex) => (
                      <a
                        key={tagIndex}
                        href="#"
                        className="link-block-2 w-inline-block"
                      >
                        <div>{tag}</div>
                      </a>
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
