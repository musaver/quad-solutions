export function TeamSection() {
  const teamMembers = [
    {
      name: "Mustafa Hassan",
      position: "Digital Marketing Specialist",
      image: "/assets/team/mustafa-hassan.png",
      dataWId: "b31a341f-0659-611a-378d-b9b299a4f9b7",
      imageWId: "56bb2451-170e-89ce-c69f-6cfb15fd42b5",
    },
    {
      name: "Yousaf Shah",
      position: "Production Manager",
      image:
        "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67adda75ce2c9d6527fac25e_profile2.png",
      dataWId: "0a28a6a2-8b8a-d8c2-5458-5994b3ad5898",
      imageWId: "fe758f9d-39d6-cb14-52e0-c9fa891a9a74",
    },
    {
      name: "Musaver Khan",
      position: "Software Engineer",
      image:
        "/assets/wf/67a5fb8bc33c7f25ab4e52d9/67adda73f2e2b31cbe6b22f6_profile3.png",
      dataWId: "cc8deff5-9c4e-5729-3784-fec553d9265b",
      imageWId: "e253adec-fdcb-52c7-f8cb-d2809643fb06",
    },
    {
      name: "Agha Moiz",
      position: "AI Automation Specialist",
      image:
        "/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e632a92c0c4f4cb49995b6_creative_img_4.webp",
      dataWId: "77300203-7d8a-ec8b-5bc9-a37f22d341c5",
      imageWId: "fee103c0-4d17-58aa-1a09-5744bd650d4c",
    },
  ];

  return (
    <section id="team" className="home-our-team-sec">
      <div className="w-layout-blockcontainer container-7 w-container">
        <div className="w-layout-grid ourteam-heading-div">
          <h2
            data-w-id="c905ff5a-ed57-ec2f-8d28-fe5633aa58e5"
            style={{ opacity: 0 }}
            className="creative-mind-heading"
          >
            Meet the creative minds behind{" "}
            <span className="text-span-14">our success</span>
          </h2>
        </div>
        <div className="w-layout-grid creative-mind-wrapper">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-w-id={member.dataWId}
              style={{ opacity: 0 }}
              className="profile-card"
            >
              <img
                data-w-id={member.imageWId}
                {...(member.image.includes("webp")
                  ? {
                      sizes: "(max-width: 600px) 100vw, 600px",
                      srcSet: `${member.image.replace(".webp", "-p-500.webp")} 500w, ${member.image} 600w`,
                    }
                  : {})}
                alt={`${member.name} profile`}
                loading="lazy"
                src={member.image}
              />
              <div className="creative-descp-block">
                <p className="creative-block-title">{member.name}</p>
                <div className="position-txt">{member.position}</div>
                <div className="social-link-div">
                  <a
                    href="https://x.com/wrappixel"
                    className="twitter-link w-inline-block"
                  >
                    <img
                      width="20"
                      height="20"
                      alt="twitter-icon"
                      src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67addc1083998f646851a971_twitter.png"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/wrappixel/"
                    className="linkedin-link w-inline-block"
                  >
                    <img
                      width="20"
                      height="20"
                      alt="linkedin-icon"
                      src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67addc10396a59bde77d300f_linkedin.png"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
