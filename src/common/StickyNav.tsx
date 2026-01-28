"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/common/Button";
import { useState, useRef, useEffect } from "react";
import featuresData from "@/data/features.json";
import integrationsData from "@/data/integrations.json";
import blogsData from "@/data/blogs.json";
import caseStudiesData from "@/data/case-studies.json";
import { ChevronDown, Menu, X, Github, ArrowRight } from "lucide-react";
import LogoSVG from "./LogoSVG";
import { getIcon } from "@/utils/iconMap";

export default function StickyNav() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isIntegrationsOpen, setIsIntegrationsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(73);
  const featuresDropdownRef = useRef<HTMLLIElement>(null);
  const integrationsDropdownRef = useRef<HTMLLIElement>(null);
  const resourcesDropdownRef = useRef<HTMLLIElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const featuresCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const integrationsCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      
      // Don't close if clicking on a Link or button inside the mobile menu
      if (target instanceof Element) {
        const link = target.closest('a[href]');
        const button = target.closest('button');
        if (link && mobileMenuRef.current?.contains(link)) {
          return; // Let the link handle navigation
        }
        if (button && mobileMenuRef.current?.contains(button) && button.getAttribute('aria-label')?.includes('Toggle')) {
          return; // Let the toggle button handle the click
        }
      }
      
      if (featuresDropdownRef.current && !featuresDropdownRef.current.contains(target)) {
        setIsFeaturesOpen(false);
      }
      if (integrationsDropdownRef.current && !integrationsDropdownRef.current.contains(target)) {
        setIsIntegrationsOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(target)) {
        setIsResourcesOpen(false);
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

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (featuresCloseTimeoutRef.current) {
        clearTimeout(featuresCloseTimeoutRef.current);
      }
      if (integrationsCloseTimeoutRef.current) {
        clearTimeout(integrationsCloseTimeoutRef.current);
      }
      if (resourcesCloseTimeoutRef.current) {
        clearTimeout(resourcesCloseTimeoutRef.current);
      }
    };
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

      <nav ref={navRef} className="sticky top-0 z-9999 bg-[#f9f9f9] border-b border-[#e5e7eb]" aria-label="Main navigation">
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
            onMouseEnter={() => {
              if (featuresCloseTimeoutRef.current) {
                clearTimeout(featuresCloseTimeoutRef.current);
                featuresCloseTimeoutRef.current = null;
              }
              setIsFeaturesOpen(true);
            }}
            onMouseLeave={() => {
              featuresCloseTimeoutRef.current = setTimeout(() => {
                setIsFeaturesOpen(false);
              }, 100);
            }}
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
            
            {/* Invisible bridge to fill gap between menu item and dropdown */}
            {isFeaturesOpen && (
              <div
                className="fixed bg-transparent z-50 pointer-events-auto"
                style={{
                  top: `${navHeight}px`,
                  left: 0,
                  right: 0,
                  height: '8px',
                }}
                onMouseEnter={() => {
                  if (featuresCloseTimeoutRef.current) {
                    clearTimeout(featuresCloseTimeoutRef.current);
                    featuresCloseTimeoutRef.current = null;
                  }
                  setIsFeaturesOpen(true);
                }}
                aria-hidden="true"
              />
            )}
            
            {/* Mega Menu Dropdown */}
            {isFeaturesOpen && (
              <div 
                className="fixed inset-x-0 bg-[#f9f9f9] shadow-2xl border-x-0 border-b border-t-0 border-[#e5e7eb] z-50"
                style={{ top: `${navHeight}px` }}
                onMouseEnter={() => {
                  if (featuresCloseTimeoutRef.current) {
                    clearTimeout(featuresCloseTimeoutRef.current);
                    featuresCloseTimeoutRef.current = null;
                  }
                  setIsFeaturesOpen(true);
                }}
                onMouseLeave={() => {
                  setIsFeaturesOpen(false);
                }}
              >
                <div className="max-w-[1280px] mx-auto  border-x">
                  <div className="grid grid-cols-3">
                  {/* Columns 1-5: Features (3 rows each) */}
                  {[0, 1, 2, 3].map((colIndex) => {
                    const startIndex = colIndex * 3;
                    const endIndex = startIndex + 3;
                    const columnFeatures = featuresData.slice(startIndex, endIndex);
                    return (
                      <div key={colIndex} className={`${colIndex < 4 ? 'border-l -ml-px border-[#e5e7eb]' : ''}`}>
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
                                    <p className="text-xs text-[#666666] leading-relaxed line-clamp-2 text-ellipsis">
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

          <li>
            <Link
              href="/about"
              className="text-sm font-normal px-3 py-2 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0]"
            >
              About
            </Link>
          </li>

          {/* Integrations Dropdown */}
          <li 
            className="relative" 
            ref={integrationsDropdownRef}
            onMouseEnter={() => {
              if (integrationsCloseTimeoutRef.current) {
                clearTimeout(integrationsCloseTimeoutRef.current);
                integrationsCloseTimeoutRef.current = null;
              }
              setIsIntegrationsOpen(true);
            }}
            onMouseLeave={() => {
              integrationsCloseTimeoutRef.current = setTimeout(() => {
                setIsIntegrationsOpen(false);
              }, 100);
            }}
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
            
            {/* Invisible bridge to fill gap between menu item and dropdown */}
            {isIntegrationsOpen && (
              <div
                className="fixed bg-transparent z-50 pointer-events-auto"
                style={{
                  top: `${navHeight}px`,
                  left: 0,
                  right: 0,
                  height: '8px',
                }}
                onMouseEnter={() => {
                  if (integrationsCloseTimeoutRef.current) {
                    clearTimeout(integrationsCloseTimeoutRef.current);
                    integrationsCloseTimeoutRef.current = null;
                  }
                  setIsIntegrationsOpen(true);
                }}
                aria-hidden="true"
              />
            )}
            
            {/* Mega Menu Dropdown */}
            {isIntegrationsOpen && (
              <div 
                className="fixed inset-x-0 bg-[#f9f9f9] shadow-2xl border-x-0 border-b border-t-0 border-[#e5e7eb] z-50"
                style={{ top: `${navHeight}px` }}
                onMouseEnter={() => {
                  if (integrationsCloseTimeoutRef.current) {
                    clearTimeout(integrationsCloseTimeoutRef.current);
                    integrationsCloseTimeoutRef.current = null;
                  }
                  setIsIntegrationsOpen(true);
                }}
                onMouseLeave={() => {
                  setIsIntegrationsOpen(false);
                }}
              >
                <div className="max-w-[1280px] mx-auto border-x">
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
                          <li className="border-b px-8 py-5 h-full border-[#e5e7eb] hover:bg-[#f9f9f9]" role="none">
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
                                <p className="text-xs text-[#666666] leading-relaxed line-clamp-2 text-ellipsis">
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
          
          {/* Resources Dropdown */}
          <li 
            className="relative" 
            ref={resourcesDropdownRef}
            onMouseEnter={() => {
              if (resourcesCloseTimeoutRef.current) {
                clearTimeout(resourcesCloseTimeoutRef.current);
                resourcesCloseTimeoutRef.current = null;
              }
              setIsResourcesOpen(true);
            }}
            onMouseLeave={() => {
              resourcesCloseTimeoutRef.current = setTimeout(() => {
                setIsResourcesOpen(false);
              }, 100);
            }}
          >
            <button
              className="text-sm font-normal px-3 py-2 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0] flex items-center gap-1"
              aria-expanded={isResourcesOpen}
              aria-haspopup="true"
              aria-label="Resources menu"
            >
              Resources
              <ChevronDown 
                className={`w-3.5 h-3.5 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            
            {/* Invisible bridge to fill gap between menu item and dropdown */}
            {isResourcesOpen && (
              <div
                className="fixed bg-transparent z-50 pointer-events-auto"
                style={{
                  top: `${navHeight}px`,
                  left: 0,
                  right: 0,
                  height: '8px',
                }}
                onMouseEnter={() => {
                  if (resourcesCloseTimeoutRef.current) {
                    clearTimeout(resourcesCloseTimeoutRef.current);
                    resourcesCloseTimeoutRef.current = null;
                  }
                  setIsResourcesOpen(true);
                }}
                aria-hidden="true"
              />
            )}
            
            {/* Mega Menu Dropdown */}
            {isResourcesOpen && (
              <div 
                className="fixed inset-x-0 bg-[#f9f9f9] shadow-2xl border-x-0 border-b border-t-0 border-[#e5e7eb] z-50"
                style={{ top: `${navHeight}px` }}
                onMouseEnter={() => {
                  if (resourcesCloseTimeoutRef.current) {
                    clearTimeout(resourcesCloseTimeoutRef.current);
                    resourcesCloseTimeoutRef.current = null;
                  }
                  setIsResourcesOpen(true);
                }}
                onMouseLeave={() => {
                  setIsResourcesOpen(false);
                }}
              >
                <div className="max-w-[1280px] mx-auto border-x">
                  <div className="grid grid-cols-3">
                    {/* Column 1: Blog Posts */}
                    <div className="border-r border-[#e5e7eb]">
                      <div className="px-8 py-5 border-b border-[#e5e7eb]">
                        <h3 className="text-sm font-semibold text-[#262626]">Blog</h3>
                      </div>
                      <ul className="flex flex-col gap-0 list-none" role="menu" aria-label="Blog submenu">
                        {blogsData.slice(0, 4).map((blog) => (
                          <li className="border-b px-8 py-5 h-full border-[#e5e7eb] hover:bg-[#f9f9f9]" key={blog.slug} role="none">
                            <Link
                              href={`/blog/${blog.slug}`}
                              onClick={() => setIsResourcesOpen(false)}
                              className="group flex items-start gap-3 px-0 py-3 transition-colors hover:bg-transparent"
                              role="menuitem"
                            >
                              <div className="shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-[#5e48f0]/10 to-[#5e48f0]/5">
                                <Image
                                  src={`/blog-images/${blog.slug}.png`}
                                  alt={blog.title}
                                  width={48}
                                  height={48}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                                <span className="text-sm font-medium text-[#262626] group-hover:text-[#5e48f0] transition-colors line-clamp-1">
                                  {blog.title}
                                </span>
                                <p className="text-sm text-[#666666] leading-relaxed line-clamp-2 text-ellipsis">
                                  {blog.description}
                                </p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 2: Case Studies */}
                    <div className="border-r border-[#e5e7eb]">
                      <div className="px-8 py-5 border-b border-[#e5e7eb]">
                        <h3 className="text-sm font-semibold text-[#262626]">Case Studies</h3>
                      </div>
                      <ul className="flex flex-col gap-0 list-none" role="menu" aria-label="Case Studies submenu">
                        {caseStudiesData.slice(0, 4).map((caseStudy) => (
                          <li className="border-b px-8 py-5 h-full border-[#e5e7eb] hover:bg-[#f9f9f9]" key={caseStudy.slug} role="none">
                            <Link
                              href={`/case-studies/${caseStudy.slug}`}
                              onClick={() => setIsResourcesOpen(false)}
                              className="group flex items-start gap-3 px-0 py-3 transition-colors hover:bg-transparent"
                              role="menuitem"
                            >
                              <div className="shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-gradient-to-br from-[#5e48f0]/10 to-[#5e48f0]/5">
                                <Image
                                  src={`/case-studies/${caseStudy.slug}.png`}
                                  alt={caseStudy.title}
                                  width={48}
                                  height={48}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                                <span className="text-sm font-medium text-[#262626] group-hover:text-[#5e48f0] transition-colors line-clamp-1">
                                  {caseStudy.title}
                                </span>
                                <p className="text-sm text-[#666666] leading-relaxed line-clamp-2 text-ellipsis">
                                  {caseStudy.description}
                                </p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Column 3: View All Links */}
                    <div>
                      <div className="px-8 py-5 border-b border-[#e5e7eb]">
                        <h3 className="text-sm font-semibold text-[#262626]">Resources</h3>
                      </div>
                      <ul className="flex flex-col gap-0 list-none" role="menu" aria-label="Resources links">
                        <li className="border-b px-8 py-5 h-full border-[#e5e7eb] hover:bg-[#f9f9f9]" role="none">
                          <Link
                            href="/blog"
                            onClick={() => setIsResourcesOpen(false)}
                            className="group flex items-center gap-2 px-0 py-3 transition-colors hover:bg-transparent"
                            role="menuitem"
                          >
                            <div className="flex flex-col gap-0.5 flex-1">
                              <span className="text-sm font-medium text-[#262626] group-hover:text-[#5e48f0] transition-colors flex items-center gap-2">
                                View all blog posts
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </span>
                              <p className="text-sm text-[#666666] leading-relaxed">
                                Explore all articles and guides
                              </p>
                            </div>
                          </Link>
                        </li>
                        <li className="border-b px-8 py-5 h-full border-[#e5e7eb] hover:bg-[#f9f9f9]" role="none">
                          <Link
                            href="/case-studies"
                            onClick={() => setIsResourcesOpen(false)}
                            className="group flex items-center gap-2 px-0 py-3 transition-colors hover:bg-transparent"
                            role="menuitem"
                          >
                            <div className="flex flex-col gap-0.5 flex-1">
                              <span className="text-sm font-medium text-[#262626] group-hover:text-[#5e48f0] transition-colors flex items-center gap-2">
                                View all case studies
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </span>
                              <p className="text-sm text-[#666666] leading-relaxed">
                                Browse customer success stories
                              </p>
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
          Get Started
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
          className="lg:hidden fixed inset-0 top-[105px] bg-black/50 z-[45] backdrop-blur-sm" 
          aria-hidden="true" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-[62px] left-0 right-0 bg-[#f9f9f9] border-b border-[#e5e7eb] z-[60] max-h-[calc(100vh-105px)] overflow-y-auto shadow-lg transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="px-4 py-6">
          <ul className="flex flex-col gap-0 list-none">
            {/* Features Dropdown - Mobile */}
            <li className="border-b border-[#e5e7eb]">
              <div className="flex items-center">
                <Link
                  href="/features"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-[2] text-sm font-normal px-3 py-3 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0]"
                >
                  Features
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsFeaturesOpen(!isFeaturesOpen);
                  }}
                  className="flex-1 flex items-center justify-end px-3 py-3 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0]"
                  aria-expanded={isFeaturesOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Features submenu"
                >
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${isFeaturesOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
              </div>
              
              {isFeaturesOpen && (
                <div className="px-3 pb-3">
                  <ul className="flex flex-col gap-2 list-none" role="menu" aria-label="Features submenu">
                    {featuresData.map((feature) => {
                      const IconComponent = getIcon(feature.hero.category.icon);
                      return (
                        <li key={feature.slug} role="none" className="relative z-10">
                          <Link
                            href={`/features/${feature.slug}`}
                            onClick={(e) => {
                              e.stopPropagation();
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

            {/* About - Mobile */}
            <li className="border-b border-[#e5e7eb]">
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-sm font-normal px-3 py-3 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0]"
              >
                About
              </Link>
            </li>

            {/* Integrations Dropdown - Mobile */}
            <li className="border-b border-[#e5e7eb]">
              <div className="flex items-center">
                <Link
                  href="/integrations"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex-[2] text-sm font-normal px-3 py-3 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0]"
                >
                  Integrations
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsIntegrationsOpen(!isIntegrationsOpen);
                  }}
                  className="flex-1 flex items-center justify-end px-3 py-3 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0]"
                  aria-expanded={isIntegrationsOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Integrations submenu"
                >
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${isIntegrationsOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
              </div>
              
              {isIntegrationsOpen && (
                <div className="px-3 pb-3">
                  <ul className="flex flex-col gap-2 list-none" role="menu" aria-label="Integrations submenu">
                    {integrationsData.map((integration) => {
                      const IconComponent = getIcon(integration.hero.category.icon);
                      const integrationName = integration.hero.heading.highlighted 
                        ? integration.hero.heading.highlighted.replace(/ Users$/, "").replace(/ Software$/, "")
                        : integration.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                      return (
                        <li key={integration.slug} role="none" className="relative z-10">
                          <Link
                            href={`/integrations/${integration.slug}`}
                            onClick={(e) => {
                              e.stopPropagation();
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

            {/* Resources Dropdown - Mobile */}
            <li className="border-b border-[#e5e7eb]">
              <div className="flex items-center">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsResourcesOpen(!isResourcesOpen);
                  }}
                  className="flex-[2] text-sm font-normal px-3 py-3 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0] text-left"
                  aria-expanded={isResourcesOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Resources submenu"
                >
                  Resources
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsResourcesOpen(!isResourcesOpen);
                  }}
                  className="flex-1 flex items-center justify-end px-3 py-3 rounded-lg transition-colors text-[#262626] hover:text-[#5e48f0]"
                  aria-expanded={isResourcesOpen}
                  aria-haspopup="true"
                  aria-label="Toggle Resources submenu"
                >
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
              </div>
              
              {isResourcesOpen && (
                <div className="px-3 pb-3">
                  <ul className="flex flex-col gap-2 list-none" role="menu" aria-label="Resources submenu">
                    {/* Blog Section Header */}
                    <li role="none" className="pt-2">
                      <h3 className="text-xs font-semibold text-[#262626] uppercase tracking-wide px-3 mb-2">Blog</h3>
                    </li>
                    {blogsData.slice(0, 3).map((blog) => (
                      <li key={blog.slug} role="none" className="relative z-10">
                        <Link
                          href={`/blog/${blog.slug}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsResourcesOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                          className="group flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-200 hover:bg-[#f5f3ff] border border-transparent hover:border-[#e8e4ff]"
                          role="menuitem"
                        >
                          <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-[#5e48f0]/10 to-[#5e48f0]/5">
                            <Image
                              src={`/blog-images/${blog.slug}.png`}
                              alt={blog.title}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col gap-1 flex-1 min-w-0">
                            <span className="text-sm font-medium text-[#262626] group-hover:text-[#5e48f0] transition-colors line-clamp-1">
                              {blog.title}
                            </span>
                            <p className="text-xs text-[#666666] leading-relaxed line-clamp-1">
                              {blog.description}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                    <li role="none" className="relative z-10">
                      <Link
                        href="/blog"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsResourcesOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        className="group flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all duration-200 hover:bg-[#f5f3ff] border border-transparent hover:border-[#e8e4ff]"
                        role="menuitem"
                      >
                        <span className="text-sm font-medium text-[#262626] group-hover:text-[#5e48f0] transition-colors flex items-center gap-1">
                          View all blog posts
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </li>

                    {/* Case Studies Section Header */}
                    <li role="none" className="pt-4">
                      <h3 className="text-xs font-semibold text-[#262626] uppercase tracking-wide px-3 mb-2">Case Studies</h3>
                    </li>
                    {caseStudiesData.slice(0, 3).map((caseStudy) => (
                      <li key={caseStudy.slug} role="none" className="relative z-10">
                        <Link
                          href={`/case-studies/${caseStudy.slug}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsResourcesOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                          className="group flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-200 hover:bg-[#f5f3ff] border border-transparent hover:border-[#e8e4ff]"
                          role="menuitem"
                        >
                          <div className="shrink-0 w-10 h-10 rounded-lg overflow-hidden bg-gradient-to-br from-[#5e48f0]/10 to-[#5e48f0]/5">
                            <Image
                              src={`/case-studies/${caseStudy.slug}.png`}
                              alt={caseStudy.title}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex flex-col gap-1 flex-1 min-w-0">
                            <span className="text-sm font-medium text-[#262626] group-hover:text-[#5e48f0] transition-colors line-clamp-1">
                              {caseStudy.title}
                            </span>
                            <p className="text-xs text-[#666666] leading-relaxed line-clamp-1">
                              {caseStudy.description}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                    <li role="none" className="relative z-10">
                      <Link
                        href="/case-studies"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsResourcesOpen(false);
                          setIsMobileMenuOpen(false);
                        }}
                        className="group flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all duration-200 hover:bg-[#f5f3ff] border border-transparent hover:border-[#e8e4ff]"
                        role="menuitem"
                      >
                        <span className="text-sm font-medium text-[#262626] group-hover:text-[#5e48f0] transition-colors flex items-center gap-1">
                          View all case studies
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
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
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
}
