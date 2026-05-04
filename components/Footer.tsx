import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="w-layout-blockcontainer container-14 w-container">
        <div className="w-layout-hflex grid-19">
          <div className="footer-column-1">
            <Link
              href="/"
              className="footer-brand"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0,
                textDecoration: "none",
                marginBottom: "16px",
              }}
            >
              <img
                loading="lazy"
                src="/assets/logo/quad-solutions-logo.jpg"
                alt="QUAD Solutions"
                style={{
                  height: "44px",
                  width: "auto",
                  display: "block",
                  marginRight: "8px",
                  mixBlendMode: "multiply",
                }}
              />
              <span
                style={{
                  display: "inline-flex",
                  flexDirection: "column",
                  lineHeight: 1,
                  color: "var(--black-100)",
                }}
              >
                <span style={{ fontSize: 23, lineHeight: 1, fontWeight: 500 }}>
                  QUAD
                </span>
                <span
                  className="italic-span"
                  style={{
                    fontSize: 18.5,
                    lineHeight: 1,
                    letterSpacing: 0,
                    fontWeight: 400,
                  }}
                >
                  Solutions
                </span>
              </span>
            </Link>
            <div className="text-block-32">
              Empowering businesses with innovative AI and digital solutions.
              Let&apos;s create something amazing together.
            </div>
            <div className="div-block-42">
              <a
                href="https://x.com/quadsolutions"
                className="footer-social-icon w-inline-block"
                aria-label="Twitter / X"
              >
                <img
                  src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67b02255b31413b811c048ab_si-twitter.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <a
                href="https://www.linkedin.com/company/quadsolutions"
                className="footer-social-icon w-inline-block"
                aria-label="LinkedIn"
              >
                <img
                  src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67b02256c742c6b7cb28f718_si-linkedin.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <a
                href="https://www.instagram.com/quadsolutions"
                className="footer-social-icon w-inline-block"
                aria-label="Instagram"
              >
                <img
                  src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67b02256f67a8cad36930a39_si-insta.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <a
                href="https://dribbble.com/quadsolutions"
                className="footer-social-icon w-inline-block"
                aria-label="Dribbble"
              >
                <img
                  src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67b02255fd7da562e4e9dd7a_si-dribbble.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="w-layout-hflex flex-block-2">
            <div className="footer-column-2">
              <div className="title">Sitemap</div>
              <ul role="list" className="list-5 w-list-unstyled">
                <li className="list-item-9">
                  <Link
                    href="/"
                    className="navigation-link for-footer w-inline-block"
                  >
                    <div className="nav-text first">Home</div>
                    <div className="nav-text second">Home</div>
                  </Link>
                </li>
                <li className="list-item-9">
                  <Link
                    href="/services"
                    className="navigation-link for-footer w-inline-block"
                  >
                    <div className="nav-text first">Services</div>
                    <div className="nav-text second">Services</div>
                  </Link>
                </li>
                <li className="list-item-9">
                  <Link
                    href="/case-studies"
                    className="navigation-link for-footer w-inline-block"
                  >
                    <div className="nav-text first">Case Studies</div>
                    <div className="nav-text second">Case Studies</div>
                  </Link>
                </li>
                <li className="list-item-9">
                  <Link
                    href="/specialists"
                    className="navigation-link for-footer w-inline-block"
                  >
                    <div className="nav-text first">Specialists</div>
                    <div className="nav-text second">Specialists</div>
                  </Link>
                </li>
                <li className="list-item-9">
                  <Link
                    href="/about-us"
                    className="navigation-link for-footer w-inline-block"
                  >
                    <div className="nav-text first">About Us</div>
                    <div className="nav-text second">About Us</div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-column-3">
              <div className="title">Company</div>
              <ul role="list" className="list-5 w-list-unstyled">
                <li className="list-item-9">
                  <Link
                    href="/contact"
                    className="navigation-link for-footer w-inline-block"
                  >
                    <div className="nav-text first">Contact Us</div>
                    <div className="nav-text second">Contact Us</div>
                  </Link>
                </li>
                <li className="list-item-9">
                  <Link
                    href="/privacy-policy"
                    className="navigation-link for-footer w-inline-block"
                  >
                    <div className="nav-text first">Privacy Policy</div>
                    <div className="nav-text second">Privacy Policy</div>
                  </Link>
                </li>
                <li className="list-item-9">
                  <Link
                    href="/terms"
                    className="navigation-link for-footer w-inline-block"
                  >
                    <div className="nav-text first">Terms of Service</div>
                    <div className="nav-text second">Terms of Service</div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-column-4">
              <div className="title">Contact Details</div>
              <ul role="list" className="list-5 w-list-unstyled">
                <li className="list-item-9">
                  <div className="text-block-32">
                    30 N Gould St Ste R, Sheridan, WY 82801
                  </div>
                </li>
                <li className="list-item-9">
                  <a
                    href="mailto:hello@quadsolutions.ai"
                    className="navigation-link for-footer w-inline-block"
                  >
                    <div className="nav-text first">hello@quadsolutions.ai</div>
                    <div className="nav-text second">hello@quadsolutions.ai</div>
                  </a>
                </li>
                <li className="list-item-9">
                  <a
                    href="tel:+13074272883"
                    className="navigation-link for-footer w-inline-block"
                  >
                    <div className="nav-text first">+1 (307) 427-2883</div>
                    <div className="nav-text second">+1 (307) 427-2883</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="div-block-43">
          <div className="w-layout-blockcontainer container-15 w-container">
            <div className="div-block-209">
              <div className="text-block-33">
                © {new Date().getFullYear()} QUAD Solutions. All Rights Reserved.
              </div>
              <div className="div-block-210">
                <Link
                  href="/privacy-policy"
                  className="navigation-link for-footer w-inline-block"
                >
                  <div className="nav-text first">Privacy Policy</div>
                  <div className="nav-text second">Privacy Policy</div>
                </Link>
                <Link
                  href="/terms"
                  className="navigation-link for-footer w-inline-block"
                >
                  <div className="nav-text first">Terms</div>
                  <div className="nav-text second">Terms</div>
                </Link>
                <Link
                  href="/contact"
                  className="navigation-link for-footer w-inline-block"
                >
                  <div className="nav-text first">Contact</div>
                  <div className="nav-text second">Contact</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
