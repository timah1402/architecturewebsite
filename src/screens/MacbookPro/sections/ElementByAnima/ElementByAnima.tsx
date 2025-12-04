"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Menu, X, ArrowDown } from "lucide-react";

export const ElementByAnima = () => {
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
      const sections = navItems
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter((item) => item.element);

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      // Get the header height to offset scrolling
      const headerHeight = document.querySelector("header")?.offsetHeight || 0;

      // Calculate the target position with offset
      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY - headerHeight;

      // Smooth scroll to the target position
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      setActiveItem(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <section className="relative w-full">
      {/* Fixed Header with Glassmorphism */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50 glass-dark backdrop-blur-xl shadow-lg"
      >
        <div className="flex items-center justify-between max-w-[1512px] mx-auto py-4 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Link href="/">
              <img
                className="w-[80px] h-auto md:w-[119px] md:h-[74px] md:ml-0 lg:ml-[153px] object-cover transition-transform duration-300 hover:scale-105"
                alt="Logo"
                src="/logo-1.png"
              />
            </Link>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>

          <NavigationMenu className="hidden md:block ml-auto">
            <NavigationMenuList className="flex gap-x-4 lg:gap-x-10">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <motion.a
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    className={`font-bold text-lg lg:text-xl ${
                      activeItem === item.id ? "text-[#db703e]" : "text-white"
                    } relative pb-2 transition-all duration-300 ${
                      activeItem === item.id
                        ? "after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-[#db703e] after:to-[#ffae00]"
                        : "hover:text-[#db703e] hover:scale-105"
                    }`}
                  >
                    {item.text}
                  </motion.a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/90 w-full backdrop-blur-lg"
          >
            <nav className="flex flex-col py-4">
              {navItems.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`py-3 px-6 font-bold text-lg transition-all duration-300 ${
                    activeItem === item.id
                      ? "text-[#db703e] bg-white/5"
                      : "text-white hover:bg-white/5"
                  } ${
                    activeItem === item.id ? "border-l-4 border-[#db703e]" : ""
                  }`}
                >
                  {item.text}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* Hero section with Parallax & Animations */}
      <div className="relative h-screen bg-[#cfcfcf] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full object-cover absolute inset-0"
          alt="Background"
          src="/tof-1.png"
          onError={(e) => {
            console.error("Image failed to load");
            e.currentTarget.style.display = "none";
          }}
          onLoad={() => console.log("Image loaded successfully")}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        s{" "}
        <div
          id="accueil"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center px-4 max-w-[1347px] mt-16">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-bold text-5xl md:text-7xl lg:text-8xl mb-8 md:mb-12 bg-gradient-to-r from-[#db703e] via-[#ffae00] to-[#db703e] bg-clip-text text-transparent animate-gradient"
            >
              EImTeC Groupe
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-semibold text-lg md:text-3xl lg:text-4xl mb-12 md:mb-16 leading-relaxed"
            >
              <span className="text-[#0800ff] font-bold">EImTeC</span>
              <span className="text-white"> s'engage à </span>
              <span className="text-[#db703e] font-bold">
                construire de manière plus intelligente
              </span>
              <span className="text-white">
                . Nous sommes des leaders du secteur en matière de conception et
                de construction intelligente et{" "}
              </span>
              <span className="text-[#db703e] font-bold">durable</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8"
            >
              <p className="font-bold text-xl md:text-2xl text-neutral-100 text-center mb-8 tracking-wide">
                Votre projet immobilier, optimisé par la technologie
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById("projets");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 px-8 py-4 bg-gradient-to-r from-[#db703e] to-[#ffae00] text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-[#db703e]/50 transition-all duration-300"
              >
                Découvrir nos projets
              </motion.button>
            </motion.div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-white w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
};
