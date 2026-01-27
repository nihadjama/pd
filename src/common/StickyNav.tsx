"use client";

import Link from "next/link";
import Button from "@/common/Button";
import { useState, useRef, useEffect } from "react";
import featuresData from "@/data/features.json";
import integrationsData from "@/data/integrations.json";
import { ChevronDown, Menu, X, Github, ArrowRight } from "lucide-react";
import LogoSVG from "./LogoSVG";
import { getIcon } from "@/utils/iconMap";

export default function StickyNav() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isIntegrationsOpen, setIsIntegrationsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(73);
  const featuresDropdownRef = useRef<HTMLLIElement>(null);
  const integrationsDropdownRef = useRef<HTMLLIElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

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

  // Calculate nav height for dropdown positioning
  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };
    
    updateNavHeight();
    window.addEventListener('resize', updateNavHeight);
    return () => window.removeEventListener('resize', updateNavHeight);
  }, []);

  return (
    <>
      {/* Top Announcement Banner */}
      {/* <div className="sticky top-0 z-50 bg-[#5e48f0] text-white text-sm font-normal py-2.5 px-4 text-center">
        <div className="max-w-[1112px] mx-auto flex items-center justify-center gap-2">
          <span>Introducing Spark 1 Pro and Spark 1 Mini models in /agent.</span>
          <Link 
            href="/agent" 
            className="flex items-center gap-1 hover:underline font-medium"
          >
            Try it now
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div> */}

      <nav ref={navRef} className="sticky top-0 z-40 bg-white border-b border-[#e5e7eb]" aria-label="Main navigation">
        <div className="max-w-[1280px] px-4 sm:px-6 lg:px-8 border border-b-0 w-full mx-auto py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label="Home">
          <LogoSVG />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex justify-center items-center gap-0.5 w-full flex-1 list-none ml-8">
          {/* Features Dropdown */}
          <li 
            className="relative" 
            ref={featuresDropdownRef}
            onMouseEnter={() => setIsFeaturesOpen(true)}
          >
            <Link
              href="/features"
              className="text-sm font-normal px-3 py-2 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0] flex items-center gap-1"
              aria-expanded={isFeaturesOpen}
              aria-haspopup="true"
              aria-label="Features menu"
            >
              Features
              <ChevronDown 
                className={`w-3.5 h-3.5 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </Link>
            
            {/* Mega Menu Dropdown */}
            {isFeaturesOpen && (
              <div 
                className="fixed inset-x-0 bg-white shadow-2xl border-x-0 border-b border-t-0 border-[#e5e7eb] z-50"
                style={{ top: `${navHeight}px` }}
                onMouseEnter={() => setIsFeaturesOpen(true)}
                onMouseLeave={() => setIsFeaturesOpen(false)}
              >
                <div className="max-w-[1280px] mx-auto border-l">
                  <div className="grid grid-cols-3">
                  {/* Columns 1-5: Features (3 rows each) */}
                  {[0, 1, 2, 3].map((colIndex) => {
                    const startIndex = colIndex * 3;
                    const endIndex = startIndex + 3;
                    const columnFeatures = featuresData.slice(startIndex, endIndex);
                    return (
                      <div key={colIndex} className={`${colIndex < 4 ? 'border-r border-[#e5e7eb]' : ''}`}>
                        <ul className="flex flex-col gap-0 list-none" role="menu" aria-label="Features submenu">
                          {columnFeatures.map((feature) => {
                            const IconComponent = getIcon(feature.hero.category.icon);
                            return (
                              <li className="border-b px-8 py-5 h-full border-[#e5e7eb] hover:bg-[#f9f9f9]" key={feature.slug} role="none">
                                <Link
                                  href={`/features/${feature.slug}`}
                                  onClick={() => setIsFeaturesOpen(false)}
                                  className="group flex items-start gap-3 px-0 py-3 transition-colors hover:bg-transparent"
                                  role="menuitem"
                                >
                                  {IconComponent && (
                                    <div className="shrink-0 w-5 h-5 text-[#5e48f0] mt-0.5">
                                      <IconComponent className="w-full h-full" />
                                    </div>
                                  )}
                                  <div className="flex flex-col gap-0.5">
                                    <span className="text-sm font-medium text-[#262626] group-hover:text-[#5e48f0] transition-colors">
                                      {feature.hero.category.text}
                                    </span>
                                    <p className="text-sm text-[#666666] leading-relaxed line-clamp-1 text-ellipsis">
                                      {feature.hero.description}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            );
                          })}
                  
                        </ul>
                      </div>
                    );
                  })}
                </div>
                </div>
              </div>
            )}
          </li>

          <li>
            <Link
              href="/testimonials"
              className="text-sm font-normal px-3 py-2 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0]"
            >
              Testimonials
            </Link>
          </li>

          {/* Integrations Dropdown */}
          <li 
            className="relative" 
            ref={integrationsDropdownRef}
            onMouseEnter={() => setIsIntegrationsOpen(true)}
          >
            <Link
              href="/integrations"
              className="text-sm font-normal px-3 py-2 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0] flex items-center gap-1"
              aria-expanded={isIntegrationsOpen}
              aria-haspopup="true"
              aria-label="Integrations menu"
            >
              Integrations
              <ChevronDown 
                className={`w-3.5 h-3.5 transition-transform ${isIntegrationsOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </Link>
            
            {/* Mega Menu Dropdown */}
            {isIntegrationsOpen && (
              <div 
                className="fixed inset-x-0 bg-white shadow-2xl border-x-0 border-b border-t-0 border-[#e5e7eb] z-50"
                style={{ top: `${navHeight}px` }}
                onMouseEnter={() => setIsIntegrationsOpen(true)}
                onMouseLeave={() => setIsIntegrationsOpen(false)}
              >
                <div className="max-w-[1280px] mx-auto border-l">
                  <div className="grid grid-cols-4">
                  {/* Columns 1-4: Integrations (1 row each) */}
                  {[0, 1, 2, 3].map((colIndex) => {
                    const integration = integrationsData[colIndex];
                    if (!integration) return null;
                    const IconComponent = getIcon(integration.hero.category.icon);
                    const integrationName = integration.hero.heading.highlighted 
                      ? integration.hero.heading.highlighted.replace(/ Users$/, "").replace(/ Software$/, "")
                      : integration.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                    return (
                      <div key={colIndex} className={`${colIndex < 3 ? 'border-r border-[#e5e7eb]' : ''}`}>
                        <ul className="flex flex-col gap-0 list-none" role="menu" aria-label="Integrations submenu">
                          <li className="border-b px-8 py-5 h-full border-[#e5e7eb]" role="none">
                            <Link
                              href={`/integrations/${integration.slug}`}
                              onClick={() => setIsIntegrationsOpen(false)}
                              className="group flex items-start gap-3 px-0 py-3 transition-colors hover:bg-transparent"
                              role="menuitem"
                            >
                              {IconComponent && (
                                <div className="shrink-0 w-5 h-5 text-[#5e48f0] mt-0.5">
                                  <IconComponent className="w-full h-full" />
                                </div>
                              )}
                              <div className="flex flex-col gap-0.5">
                                <span className="text-sm font-medium text-[#262626] group-hover:text-[#5e48f0] transition-colors">
                                  {integrationName}
                                </span>
                                <p className="text-sm text-[#666666] leading-relaxed line-clamp-1 text-ellipsis">
                                  {integration.hero.description}
                                </p>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    );
                  })}
                </div>
                </div>
              </div>
            )}
          </li>
          
          <li>
            <Link
              href="/blog"
              className="text-sm font-normal px-3 py-2 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0]"
            >
              Blog
            </Link>
          </li>
          
          <li>
            <Link
              href="#resources"
              className="text-sm font-normal px-3 py-2 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0] flex items-center gap-1"
            >
              Resources
              <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </li>
          
          <li>
            <Link
              href="/pricing"
              className="text-sm font-normal px-3 py-2 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0]"
            >
              Pricing
            </Link>
          </li>
        </ul>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Button href="#get-started" variant="primary" className="px-4 bg-[#5e48f0] hover:bg-[#4d3ad0] text-white">
            Sign up
          </Button>
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#262626] hover:bg-[#f0f0f0] transition-colors"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-[105px] bg-black/50 z-40 backdrop-blur-sm" 
          aria-hidden="true" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-[105px] left-0 right-0 bg-white border-b border-[#e5e7eb] z-50 max-h-[calc(100vh-105px)] overflow-y-auto shadow-lg transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="px-4 py-6">
          <ul className="flex flex-col gap-0 list-none">
            {/* Features Dropdown - Mobile */}
            <li className="border-b border-[#e5e7eb]">
              <button
                onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                className="w-full text-left text-sm font-normal px-3 py-3 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0] flex items-center justify-between"
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
                <div className="px-3 pb-3">
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
                            className="group flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-200 hover:bg-[#f5f3ff] border border-transparent hover:border-[#e8e4ff]"
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
            <li className="border-b border-[#e5e7eb]">
              <Link
                href="/testimonials"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-normal px-3 py-3 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0]"
              >
                Testimonials
              </Link>
            </li>

            {/* Integrations Dropdown - Mobile */}
            <li className="border-b border-[#e5e7eb]">
              <button
                onClick={() => setIsIntegrationsOpen(!isIntegrationsOpen)}
                className="w-full text-left text-sm font-normal px-3 py-3 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0] flex items-center justify-between"
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
                <div className="px-3 pb-3">
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
                            className="group flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-200 hover:bg-[#f5f3ff] border border-transparent hover:border-[#e8e4ff]"
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
            <li className="border-b border-[#e5e7eb]">
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-normal px-3 py-3 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0]"
              >
                Blog
              </Link>
            </li>

            {/* Resources - Mobile */}
            <li className="border-b border-[#e5e7eb]">
              <Link
                href="#resources"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-normal px-3 py-3 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0]"
              >
                Resources
              </Link>
            </li>

            {/* Pricing - Mobile */}
            <li className="border-b border-[#e5e7eb]">
              <Link
                href="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-normal px-3 py-3 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0]"
              >
                Pricing
              </Link>
            </li>

            {/* Sign up Button - Mobile */}
            <li className="pt-4">
              <Button href="#get-started" variant="primary" className="w-full">
                Sign up
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}
