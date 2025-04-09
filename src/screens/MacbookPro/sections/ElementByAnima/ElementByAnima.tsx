"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export const ElementByAnima = ()  => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("accueil"); // Default active item

  const navItems = [
    { text: "Accueil", href: "#accueil", id: "accueil" },
    { text: "Projets", href: "#projets", id: "projets" },
    { text: "Nos services", href: "#services", id: "services" },
    { text: "A propos", href: "#a-propos", id: "a-propos" },
    { text: "Contact", href: "#contact", id: "contact" },
  ];

  // Handle scroll detection to update active menu item
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Check each section's position
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      })).filter(item => item.element);
      
      // Find the current section in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, element } = sections[i];
        if (element && scrollPosition >= element.offsetTop) {
          setActiveItem(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      // Get the header height to offset scrolling
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;
      
      // Calculate the target position with offset
      const targetPosition = element.getBoundingClientRect().top + window.scrollY - headerHeight;
      
      // Smooth scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
      
      setActiveItem(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <section className="relative w-full">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70">
        <div className="flex items-center justify-between max-w-[1512px] mx-auto py-4 px-4 md:px-8">
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                className="w-[80px] h-auto md:w-[119px] md:h-[74px] md:ml-0 lg:ml-[153px] object-cover"
                alt="Logo"
                src="/logo-1.png"
              />
            </Link>
          </div>

          <button 
            className="md:hidden text-white p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <NavigationMenu className="hidden md:block ml-auto">
            <NavigationMenuList className="flex gap-x-4 lg:gap-x-10">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    className={`font-bold text-lg lg:text-2xl ${
                      activeItem === item.id ? "text-[#db703e]" : "text-white"
                    } relative pb-2 ${
                      activeItem === item.id
                        ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#db703e]"
                        : "hover:text-[#db703e] transition-colors"
                    }`}
                  >
                    {item.text}
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-90 w-full">
            <nav className="flex flex-col py-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`py-3 px-6 font-bold text-lg ${
                    activeItem === item.id ? "text-[#db703e]" : "text-white"
                  } ${activeItem === item.id ? "border-l-4 border-[#db703e]" : ""}`}
                >
                  {item.text}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Hero section */}
      <div className="relative h-screen bg-[#cfcfcf]">
        <img
          className="w-full h-full object-cover absolute inset-0"
          alt="Background"
          src="/tof-1.png"
        />
        <div className="absolute inset-0 bg-black opacity-[0.52]" />

        <div id="accueil" className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4 max-w-[1347px] mt-16">
            <h1 className="font-bold text-4xl md:text-[64px] text-[#db703e] mb-8 md:mb-16">
              EImTeC Groupe
            </h1>

            <p className="font-bold text-xl md:text-4xl mb-16 md:mb-32">
              <span className="text-[#0800ff]">EImTeC</span>
              <span className="text-white"> s'engage à </span>
              <span className="text-[#db703e]">
                construire de manière plus intelligente
              </span>
              <span className="text-white">
                {" "}
                . Nous sommes des leaders du secteur en matière de conception et
                de construction intelligente et{" "}
              </span>
              <span className="text-[#db703e]">durable</span>
            </p>

            <div className="mt-8">
              <p className="font-bold text-base md:text-xl text-neutral-100 text-center">
                Votre projet immobilier, optimisé par la technologie
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};