"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Top navigation from the Awake Webflow template (shared across pages). */
export function TemplateNavbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const onServices =
    pathname === "/services" || pathname === "/service-details";
  const onCaseStudies =
    pathname === "/case-studies" || pathname === "/case-study-details";

  return (
    <div className="div-block-47">
      <div className="navbar-logo-left">
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navbar-logo-left-container shadow-three w-nav"
        >
          <div
            data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff04"
            className="navbar-wrapper-3"
          >
            <div className="div-block-2">
              <Link
                href="/"
                className={`navbar-brand-2 w-nav-brand${onHome ? " w--current" : ""}`}
                aria-current={onHome ? "page" : undefined}
              >
                <img
                  loading="lazy"
                  src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67a5fbb8c1bbd60c8bd785ca_Frame%202.png"
                  alt=""
                />
              </Link>
            </div>
            <ul role="list" className="nav-menu-two-2 w-list-unstyled">
              <li className="list-item-14">
                <Link
                  href="/#home"
                  className="nav-link-4"
                  aria-current={onHome ? "page" : undefined}
                >
                  Home
                </Link>
                <Link href="/#about-us" className="nav-link-4">
                  About us
                </Link>
                <Link
                  href="/services"
                  className="nav-link-4"
                  aria-current={onServices ? "page" : undefined}
                >
                  Services
                </Link>
                <Link
                  href="/case-studies"
                  className="nav-link-4"
                  aria-current={onCaseStudies ? "page" : undefined}
                >
                  Case studies
                </Link>
                <Link href="/#work" className="nav-link-4">
                  Work
                </Link>
                <Link href="/#team" className="nav-link-4">
                  Team
                </Link>
                <Link href="/#pricing" className="nav-link-4">
                  Pricing
                </Link>
                <Link href="/#award" className="nav-link-4">
                  Awards
                </Link>
              </li>
            </ul>
            <div className="div-block-50">
              <div
                data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff17"
                className="div-block-53"
              >
                <img
                  data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff18"
                  loading="lazy"
                  alt="menu-icon"
                  src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e4b4ad148fb73ce88066c5_menu-icon.svg"
                  className="image-28"
                />
              </div>
              <Link
                data-w-id="fd288f42-3e11-14d5-988f-4ecf39ac68a1"
                href="/contact"
                className="c2a-button w-inline-block"
              >
                <div className="text-block-5">Let&apos;s Collaborate</div>
                <div className="btn-icon">
                  <img
                    src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/67a9e2599fa438b2b5ca91b6_arrow-top-right.png"
                    loading="lazy"
                    width={8}
                    height={8}
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-menu-overlay" />
      <div className="div-block-29">
        <div className="div-block-54">
          <div className="div-block-51">
            <div className="div-block-49">
              <p className="paragraph-10">Menu</p>
              <img
                data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff21"
                loading="lazy"
                alt="close-icon"
                src="/assets/wf/67a5fb8bc33c7f25ab4e52d9/68e4b4ad148fb73ce88066c6_cross-black.svg"
                className="image-9"
              />
            </div>
            <ul role="list" className="list-6">
              <li className="list-item-11">
                <Link
                  href="/#home"
                  data-w-id="dfe9cf34-6fbd-1abd-f2e5-f3543201f30d"
                  className="link-6"
                  aria-current={onHome ? "page" : undefined}
                >
                  Home
                </Link>
              </li>
              <li className="list-item-11">
                <Link href="/#about-us" className="link-6">
                  About
                </Link>
              </li>
              <li className="list-item-12">
                <Link
                  href="/services"
                  data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff27"
                  className="link-6"
                  aria-current={onServices ? "page" : undefined}
                >
                  Services
                </Link>
              </li>
              <li className="list-item-12">
                <Link
                  href="/case-studies"
                  className="link-6"
                  aria-current={onCaseStudies ? "page" : undefined}
                >
                  Case studies
                </Link>
              </li>
              <li className="list-item-13">
                <Link
                  href="/#work"
                  data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff2a"
                  className="link-6"
                >
                  Work
                </Link>
              </li>
              <li className="list-item-10">
                <Link
                  href="/#team"
                  data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff2d"
                  className="link-6"
                >
                  Team
                </Link>
              </li>
              <li className="list-item-13">
                <Link
                  href="/#pricing"
                  data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff30"
                  className="link-6"
                >
                  Pricing
                </Link>
              </li>
              <li className="list-item-13">
                <Link
                  href="/#award"
                  data-w-id="03b7d350-5f42-547a-b4d6-be27ef8aff33"
                  className="link-6"
                >
                  Award
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
