import { TEAM_MEMBERS } from "@/lib/team";

export function TeamSection() {
  return (
    <section id="team" className="home-our-team-sec">
      <div className="w-layout-blockcontainer container-7 w-container">
        <div className="w-layout-grid ourteam-heading-div">
          <h2
            data-w-id="c905ff5a-ed57-ec2f-8d28-fe5633aa58e5"
            style={{ opacity: 0 }}
            className="creative-mind-heading"
          >
            Meet the specialist leaders behind{" "}
            <span className="text-span-14">your growth</span>
          </h2>
        </div>
        <div className="w-layout-grid creative-mind-wrapper">
          {TEAM_MEMBERS.map((member, index) => (
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
                    href="https://x.com/quadsolutions"
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
                    href="https://www.linkedin.com/company/quadsolutions"
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
