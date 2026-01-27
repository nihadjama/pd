"use client";

import Link from "next/link";
import Button from "@/common/Button";
import { useState, useRef, useEffect } from "react";
import featuresData from "@/data/features.json";
import integrationsData from "@/data/integrations.json";
import { ChevronDown, Menu, X } from "lucide-react";
import LogoSVG from "./LogoSVG";
import { getIcon } from "@/utils/iconMap";

export default function StickyNav() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isIntegrationsOpen, setIsIntegrationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const featuresDropdownRef = useRef<HTMLLIElement>(null);
  const integrationsDropdownRef = useRef<HTMLLIElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      
      if (featuresDropdownRef.current && !featuresDropdownRef.current.contains(target)) {
        setIsFeaturesOpen(false);
      }
      if (integrationsDropdownRef.current && !integrationsDropdownRef.current.contains(target)) {
        setIsIntegrationsOpen(false);
      }
      // Only close mobile menu if clicking outside both the menu and the hamburger button
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(target) &&
        !(target instanceof Element && target.closest('button[aria-label="Toggle mobile menu"]'))
      ) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-[#f9f9f9] border-y border-[#e5e7eb]" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between border-x">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Home">
          <LogoSVG />
        </Link>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-[10px] text-[#262626] hover:bg-[#f0f0f0] transition-colors"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex justify-center items-center gap-2.5 w-full flex-1 list-none">
          {/* Features Dropdown */}
          <li 
            className="relative" 
            ref={featuresDropdownRef}
            onMouseEnter={() => setIsFeaturesOpen(true)}
            onMouseLeave={() => setIsFeaturesOpen(false)}
          >
            <Link
              href="/features"
              className="text-sm font-normal px-2.5 py-2.5 rounded-[10px] transition-colors text-[#262626] hover:text-[#5e48f0] flex items-center gap-1"
              aria-expanded={isFeaturesOpen}
              aria-haspopup="true"
              aria-label="Features menu"
            >
              Features
              <ChevronDown 
                className={`w-4 h-4 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </Link>
            
            {/* Invisible bridge to cover gap for smooth hover transition */}
            {isFeaturesOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 w-full h-2"
                onMouseEnter={() => setIsFeaturesOpen(true)}
                onMouseLeave={() => setIsFeaturesOpen(false)}
              />
            )}
            
            {/* Outer border-radius: 10px (inner) + 8px (mx-2 margin) = 18px */}
            {isFeaturesOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-[18px] shadow-lg border border-[#e5e7eb] py-2 z-50 max-w-[90vw]"
                onMouseEnter={() => setIsFeaturesOpen(true)}
                onMouseLeave={() => setIsFeaturesOpen(false)}
              >
                <ul 
                  className="grid grid-cols-3 gap-0 list-none w-[800px] max-w-full"
                  role="menu"
                  aria-label="Features submenu"
                >
                  {featuresData.map((feature) => {
                    const IconComponent = getIcon(feature.hero.category.icon);
                    return (
                      <li key={feature.slug} role="none">
                        <Link
                          href={`/features/${feature.slug}`}
                          onClick={() => setIsFeaturesOpen(false)}
                          className="group flex flex-col gap-1.5 px-4 py-3 mx-2 rounded-[10px] transition-all duration-200 hover:bg-[#f5f3ff] border border-transparent hover:border-[#e8e4ff]"
                          role="menuitem"
                        >
                          <div className="flex items-center gap-2.5">
                            {IconComponent && (
                              <div className="shrink-0 w-5 h-5 text-[#5e48f0] group-hover:scale-110 transition-transform">
                                <IconComponent className="w-full h-full" />
                              </div>
                            )}
                            <span className="text-sm font-medium text-[#262626] group-hover:text-[#5e48f0] transition-colors">
                              {feature.hero.category.text}
                            </span>
                          </div>
                          <p className="text-xs text-[#666666] leading-relaxed group-hover:text-[#4a4a4a] transition-colors overflow-hidden line-clamp-2">
                            {feature.hero.description}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </li>

          <li>
            <Button variant="link" href="/testimonials"  className="px-2.5">
              Testimonials
            </Button>
          </li>

          {/* Integrations Dropdown */}
          <li 
            className="relative" 
            ref={integrationsDropdownRef}
            onMouseEnter={() => setIsIntegrationsOpen(true)}
            onMouseLeave={() => setIsIntegrationsOpen(false)}
          >
            <Link
              href="/integrations"
              className="text-sm font-normal px-2.5 py-2.5 rounded-[10px] transition-colors text-[#262626] hover:text-[#5e48f0] flex items-center gap-1"
              aria-expanded={isIntegrationsOpen}
              aria-haspopup="true"
              aria-label="Integrations menu"
            >
              Integrations
              <ChevronDown 
                className={`w-4 h-4 transition-transform ${isIntegrationsOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </Link>
            
            {/* Invisible bridge to cover gap for smooth hover transition */}
            {isIntegrationsOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 w-full h-2"
                onMouseEnter={() => setIsIntegrationsOpen(true)}
                onMouseLeave={() => setIsIntegrationsOpen(false)}
              />
            )}
            
            {/* Outer border-radius: 10px (inner) + 8px (mx-2 margin) = 18px */}
            {isIntegrationsOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-[18px] shadow-lg border border-[#e5e7eb] py-2 z-50 max-w-[90vw]"
                onMouseEnter={() => setIsIntegrationsOpen(true)}
                onMouseLeave={() => setIsIntegrationsOpen(false)}
              >
                <ul 
                  className="grid grid-cols-3 gap-0 list-none w-[800px] max-w-full"
                  role="menu"
                  aria-label="Integrations submenu"
                >
                  {integrationsData.map((integration) => {
                    const IconComponent = getIcon(integration.hero.category.icon);
                    // Format integration name: use highlighted text, or fallback to slug formatted
                    const integrationName = integration.hero.heading.highlighted 
                      ? integration.hero.heading.highlighted.replace(/ Users$/, "").replace(/ Software$/, "")
                      : integration.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                    return (
                      <li key={integration.slug} role="none">
                        <Link
                          href={`/integrations/${integration.slug}`}
                          onClick={() => setIsIntegrationsOpen(false)}
                          className="group flex flex-col gap-1.5 px-4 py-3 mx-2 rounded-[10px] transition-all duration-200 hover:bg-[#f5f3ff] border border-transparent hover:border-[#e8e4ff]"
                          role="menuitem"
                        >
                          <div className="flex items-center gap-2.5">
                            {IconComponent && (
                              <div className="shrink-0 w-5 h-5 text-[#5e48f0] group-hover:scale-110 transition-transform">
                                <IconComponent className="w-full h-full" />
                              </div>
                            )}
                            <span className="text-sm font-medium text-[#262626] group-hover:text-[#5e48f0] transition-colors">
                              {integrationName}
                            </span>
                          </div>
                          <p className="text-xs text-[#666666] leading-relaxed group-hover:text-[#4a4a4a] transition-colors overflow-hidden line-clamp-2">
                            {integration.hero.description}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </li>
          <li>
            <Button href="/blog" variant="link" className="px-2.5">
              Blog
            </Button>
          </li>
          <li>
            <Button href="#resources" variant="link" className="px-2.5">
              Resources
            </Button>
          </li>
          <li>
            <Button href="/pricing" variant="link" className="px-2.5">
              Pricing
            </Button>
          </li>
        </ul>

        {/* Get Started Button - Desktop Only */}
        <div className="hidden lg:block">
          <Button href="#get-started" variant="primary">
            Get Started
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-black/50 z-40" aria-hidden="true" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#e5e7eb] z-50 max-h-[calc(100vh-73px)] overflow-y-auto shadow-lg"
        >
        <div className="px-6 py-4">
          <ul className="flex flex-col gap-0 list-none">
            {/* Features Dropdown - Mobile */}
            <li className="border-b border-[#f0f0f0]">
              <button
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                className="w-full text-left text-sm font-normal px-2.5 py-3 rounded-[10px] transition-colors text-[#262626] hover:text-[#5e48f0] flex items-center justify-between"
                aria-expanded={isFeaturesOpen}
                aria-haspopup="true"
                aria-label="Features menu"
              >
                Features
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              
              {isFeaturesOpen && (
                <div className="px-2.5 pb-3">
                  <ul className="flex flex-col gap-2 list-none" role="menu" aria-label="Features submenu">
                    {featuresData.map((feature) => {
                      const IconComponent = getIcon(feature.hero.category.icon);
                      return (
                        <li key={feature.slug} role="none">
                          <Link
                            href={`/features/${feature.slug}`}
                            onClick={() => {
                              setIsFeaturesOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                            className="group flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] transition-all duration-200 hover:bg-[#f5f3ff] border border-transparent hover:border-[#e8e4ff]"
                            role="menuitem"
                          >
                            {IconComponent && (
                              <div className="shrink-0 w-5 h-5 text-[#5e48f0]">
                                <IconComponent className="w-full h-full" />
                              </div>
                            )}
                            <div className="flex flex-col gap-1">
                              <span className="text-sm font-medium text-[#262626] group-hover:text-[#5e48f0] transition-colors">
                                {feature.hero.category.text}
                              </span>
                              <p className="text-xs text-[#666666] leading-relaxed line-clamp-1">
                                {feature.hero.description}
                              </p>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>

            {/* Testimonials - Mobile */}
            <li className="border-b border-[#f0f0f0]">
              <Link
                href="/testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-normal px-2.5 py-3 rounded-[10px] transition-colors text-[#262626] hover:text-[#5e48f0]"
              >
                Testimonials
              </Link>
            </li>

            {/* Integrations Dropdown - Mobile */}
            <li className="border-b border-[#f0f0f0]">
              <button
                onClick={() => setIsIntegrationsOpen(!isIntegrationsOpen)}
                className="w-full text-left text-sm font-normal px-2.5 py-3 rounded-[10px] transition-colors text-[#262626] hover:text-[#5e48f0] flex items-center justify-between"
                aria-expanded={isIntegrationsOpen}
                aria-haspopup="true"
                aria-label="Integrations menu"
              >
                Integrations
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${isIntegrationsOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              
              {isIntegrationsOpen && (
                <div className="px-2.5 pb-3">
                  <ul className="flex flex-col gap-2 list-none" role="menu" aria-label="Integrations submenu">
                    {integrationsData.map((integration) => {
                      const IconComponent = getIcon(integration.hero.category.icon);
                      const integrationName = integration.hero.heading.highlighted 
                        ? integration.hero.heading.highlighted.replace(/ Users$/, "").replace(/ Software$/, "")
                        : integration.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                      return (
                        <li key={integration.slug} role="none">
                          <Link
                            href={`/integrations/${integration.slug}`}
                            onClick={() => {
                              setIsIntegrationsOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                            className="group flex items-center gap-2.5 px-3 py-2.5 rounded-[10px] transition-all duration-200 hover:bg-[#f5f3ff] border border-transparent hover:border-[#e8e4ff]"
                            role="menuitem"
                          >
                            {IconComponent && (
                              <div className="shrink-0 w-5 h-5 text-[#5e48f0]">
                                <IconComponent className="w-full h-full" />
                              </div>
                            )}
                            <div className="flex flex-col gap-1">
                              <span className="text-sm font-medium text-[#262626] group-hover:text-[#5e48f0] transition-colors">
                                {integrationName}
                              </span>
                              <p className="text-xs text-[#666666] leading-relaxed line-clamp-1">
                                {integration.hero.description}
                              </p>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </li>

            {/* Blog - Mobile */}
            <li className="border-b border-[#f0f0f0]">
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-normal px-2.5 py-3 rounded-[10px] transition-colors text-[#262626] hover:text-[#5e48f0]"
              >
                Blog
              </Link>
            </li>

            {/* Resources - Mobile */}
            <li className="border-b border-[#f0f0f0]">
              <Link
                href="#resources"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-normal px-2.5 py-3 rounded-[10px] transition-colors text-[#262626] hover:text-[#5e48f0]"
              >
                Resources
              </Link>
            </li>

            {/* Pricing - Mobile */}
            <li className="border-b border-[#f0f0f0]">
              <Link
                href="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-normal px-2.5 py-3 rounded-[10px] transition-colors text-[#262626] hover:text-[#5e48f0]"
              >
                Pricing
              </Link>
            </li>

            {/* Get Started Button - Mobile */}
            <li className="pt-4">
              <Button href="#get-started" variant="primary" className="w-full">
                Get Started
              </Button>
            </li>
          </ul>
        </div>
        </div>
      )}
    </nav>
  );
}
