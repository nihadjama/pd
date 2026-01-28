import Link from "next/link";
import LogoSVG from "./LogoSVG";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: "Features", href: "/features" },
    { label: "Integrations", href: "/integrations" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Pricing", href: "/pricing" },
  ];

  const featureLinks = [
    { label: "Phones", href: "/features/phones" },
    { label: "Reminders", href: "/features/reminders" },
    { label: "Scheduling", href: "/features/scheduling" },
    { label: "Texting", href: "/features/texting" },
    { label: "Reviews", href: "/features/reviews" },
    { label: "Call Intelligence", href: "/features/call-intelligence" },
    { label: "Billing & Payments", href: "/features/billing-payments" },
    { label: "Digital Forms", href: "/features/digital-forms" },
    { label: "Email Marketing", href: "/features/email-marketing" },
    { label: "Mobile App", href: "/features/mobile-app" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-conditions" },
    // { label: "Cookie Policy", href: "/cookies" },
  ];

  const socialLinks = [
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      label: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
    },
    {
      label: "Facebook",
      href: "https://facebook.com",
      icon: Facebook,
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: Instagram,
    },
  ];

  return (
    <footer className="bg-background border-t border-border" aria-label="Footer">
      <div className="max-w-[1280px] mx-auto border-x">
        <div className="">
          {/* Main Footer Content */}
          <div className="flex flex-col">
            {/* Top Section: Logo and Social Media */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 border-b border-border">
              {/* Left: Logo */}
              <div className="flex-1">
                <Link href="/" className="flex items-center w-fit mb-4" aria-label="Home">
                  <LogoSVG />
                </Link>
              </div>

              {/* Right: Social Media Links in 2 columns */}
              {/* <div className="flex gap-8 md:gap-12">
                <div className="flex flex-col">
                  {socialLinks.slice(0, 2).map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <div key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 py-2.5 border-b border-border-subtle text-foreground hover:text-primary transition-colors"
                          aria-label={social.label}
                        >
                          <Icon className="w-4 h-4" aria-hidden="true" />
                          <span className="font-sans font-normal text-sm">{social.label}</span>
                        </a>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col">
                  {socialLinks.slice(2, 4).map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <div key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 py-2.5 border-b border-border-subtle text-foreground hover:text-primary transition-colors"
                          aria-label={social.label}
                        >
                          <Icon className="w-4 h-4" aria-hidden="true" />
                          <span className="font-sans font-normal text-sm">{social.label}</span>
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div> */}
            </div>

            {/* Middle Section: Navigation Links Grid with Boxy Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-b">
              {/* Product Column */}
              <div className="flex flex-col border-r">
                <h3 className="font-heading font-semibold text-sm text-foreground py-4 px-6 border-b">
                  Product
                </h3>
                <ul className="flex flex-col list-none">
                  {navigationLinks.map((link, index) => (
                    <li key={link.label} className={index < navigationLinks.length - 1 ? "border-b " : ""}>
                      <Link
                        href={link.href}
                        className="block py-4 px-6  font-sans font-normal text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Column */}
              <div className="flex flex-col border-r">
                <h3 className="font-heading font-semibold text-sm text-foreground py-4 px-6 border-b">
                  Company
                </h3>
                <ul className="flex flex-col list-none">
                  <li className="border-b">
                    <Link
                      href="/about"
                      className="block py-4 px-6 font-sans font-normal text-sm text-foreground hover:text-primary transition-colors"
                    >
                      About
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link
                      href="/blog"
                      className="block py-4 px-6 font-sans font-normal text-sm text-foreground hover:text-primary transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="border-b">
                    <Link
                      href="/testimonials"
                      className="block py-4 px-6 font-sans font-normal text-sm text-foreground hover:text-primary transition-colors"
                    >
                      Testimonials
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      className="block py-4 px-6 font-sans font-normal text-sm text-foreground hover:text-primary transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

 

              {/* Features Column 1 */}
              <div className="flex flex-col border-r lg:border-r">
                <h3 className="font-heading font-semibold text-sm text-foreground py-4 px-6 border-b">
                  Features
                </h3>
                <ul className="flex flex-col list-none">
                  {featureLinks.slice(0, 5).map((link, index) => (
                    <li key={link.label} className={index < 4 ? "border-b" : ""}>
                      <Link
                        href={link.href}
                        className="block py-4 px-6 font-sans font-normal text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features Column 2 */}
              <div className="flex flex-col">
                <h3 className="font-heading font-semibold text-sm text-foreground py-4 px-6 border-b">
                  &nbsp;
                </h3>
                <ul className="flex flex-col list-none">
                  {featureLinks.slice(5, 10).map((link, index) => (
                    <li key={link.label} className={index < 4 ? "border-b" : ""}>
                      <Link
                        href={link.href}
                        className="block py-4 px-6 font-sans font-normal text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Section: Copyright, Status, and Legal Links */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-6 md:pt-8 px-4 md:px-6 lg:px-8">
              {/* Left: Copyright and Status */}
              <div className="flex flex-col gap-2">
                <p className="font-sans font-normal text-sm text-muted">
                  © {currentYear} PracticeDilly. All rights reserved.
                </p>
              </div>

              {/* Right: Legal Links */}
              <div className="flex items-center gap-0">
                {legalLinks.map((link, index) => (
                  <div key={link.label} className="flex items-center">
                    <Link
                      href={link.href}
                      className="px-4 py-2 font-sans font-normal text-sm text-muted hover:text-primary transition-colors border-r border-border-subtle last:border-r-0"
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
