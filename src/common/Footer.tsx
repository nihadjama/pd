import Link from "next/link";
import LogoSVG from "./LogoSVG";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Features", href: "/features" },
    { label: "Integrations", href: "/integrations" },
    { label: "Resources", href: "#resources" },
    { label: "Pricing", href: "/pricing" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-conditions" },
    { label: "Cookie Policy", href: "/cookies" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://facebook.com",
      icon: Facebook,
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: Instagram,
    },
  ];

  return (
    <footer className="bg-[#f9f9f9] border-t border-[#e5e7eb]" aria-label="Footer">
      <div className="max-w-7xl mx-auto border-x">
        <div className="px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
          {/* Main Footer Content */}
          <div className="flex flex-col gap-8 md:gap-12 lg:gap-16">
            {/* Top Section: Logo and Description */}
            <div className="flex flex-col gap-4 md:gap-6">
              <Link href="/" className="flex items-center w-fit" aria-label="Home">
                <LogoSVG />
              </Link>
              <p className="font-sans font-normal text-sm md:text-base leading-6 text-[#606060] max-w-md">
                AI-powered patient communication platform for dental and healthcare practices. 
                Trusted by 500+ practices.
              </p>
            </div>

            {/* Middle Section: Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {/* Navigation Links */}
              <div className="flex flex-col gap-3">
                <h3 className="font-heading font-semibold text-sm text-[#262626] mb-1">
                  Product
                </h3>
                <ul className="flex flex-col gap-2.5 list-none">
                  {navigationLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-sans font-normal text-sm text-[#606060] hover:text-[#5e48f0] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Links */}
              <div className="flex flex-col gap-3">
                <h3 className="font-heading font-semibold text-sm text-[#262626] mb-1">
                  Company
                </h3>
                <ul className="flex flex-col gap-2.5 list-none">
                  <li>
                    <Link
                      href="/about"
                      className="font-sans font-normal text-sm text-[#606060] hover:text-[#5e48f0] transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="font-sans font-normal text-sm text-[#606060] hover:text-[#5e48f0] transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/careers"
                      className="font-sans font-normal text-sm text-[#606060] hover:text-[#5e48f0] transition-colors"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="font-sans font-normal text-sm text-[#606060] hover:text-[#5e48f0] transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support Links */}
              <div className="flex flex-col gap-3">
                <h3 className="font-heading font-semibold text-sm text-[#262626] mb-1">
                  Support
                </h3>
                <ul className="flex flex-col gap-2.5 list-none">
                  <li>
                    <Link
                      href="/help"
                      className="font-sans font-normal text-sm text-[#606060] hover:text-[#5e48f0] transition-colors"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/documentation"
                      className="font-sans font-normal text-sm text-[#606060] hover:text-[#5e48f0] transition-colors"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/api"
                      className="font-sans font-normal text-sm text-[#606060] hover:text-[#5e48f0] transition-colors"
                    >
                      API
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/status"
                      className="font-sans font-normal text-sm text-[#606060] hover:text-[#5e48f0] transition-colors"
                    >
                      Status
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Links */}
              <div className="flex flex-col gap-3">
                <h3 className="font-heading font-semibold text-sm text-[#262626] mb-1">
                  Legal
                </h3>
                <ul className="flex flex-col gap-2.5 list-none">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="font-sans font-normal text-sm text-[#606060] hover:text-[#5e48f0] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section: Social Links and Copyright */}
            <div className="flex flex-col gap-6 pt-6 md:pt-8 border-t border-[#e5e7eb]">
              {/* Social Media Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-[10px] text-[#606060] hover:text-[#5e48f0] hover:bg-[#f5f3ff] transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </a>
                  );
                })}
              </div>

              {/* Copyright */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="font-sans font-normal text-sm text-[#606060]">
                  © {currentYear} PracticeDilly. All rights reserved.
                </p>
                <p className="font-sans font-normal text-sm text-[#606060]">
                  HIPAA Compliant • Trusted by 500+ Practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
