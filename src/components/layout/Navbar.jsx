import {
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);


  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);



  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Products",
      type: "dropdown",
      items: [
        {
          name: "Domestic Products",
          path: "/products/domestic",
        },
        {
          name: "Industrial Products",
          path: "/products/industrial",
        },
      ],
    },
    {
      name: "Why Steel Doors",
      path: "/why-choose-us",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
  ];


  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `relative py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 ${
      isActive
        ? "text-primary-700"
        : "text-text/75 hover:text-primary-700"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `group flex items-center justify-between border-b border-border py-4 font-heading text-xl transition-colors ${
      isActive
        ? "text-primary-700"
        : "text-text hover:text-primary-700"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto">
        <div className="relative flex h-[76px] items-center justify-between">
    
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
          >
            
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-primary-300 bg-primary-100 transition-transform duration-300 group-hover:rotate-6">
              <span className="font-heading text-lg font-semibold text-primary-700">
                W
              </span>

              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary-600" />
            </div>

            
            <div className="flex flex-col leading-none">
              <span className="font-heading text-xl font-semibold tracking-tight text-primary-900">
                Woodora
              </span>

              <span className="mt-1 text-[8px] font-medium uppercase tracking-[0.35em] text-text-muted">
                Furniture
              </span>
            </div>
          </Link>
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 lg:flex">
            {navLinks.map((link) => {
              if (link.type === "dropdown") {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >

                    <button
                      type="button"
                      onClick={() =>
                        setIsProductsOpen((prev) => !prev)
                      }
                      className={`group flex items-center gap-1.5 py-2 text-[13px] font-medium tracking-wide transition-colors duration-200 ${
                        isProductsOpen
                          ? "text-primary-700"
                          : "text-text/75 hover:text-primary-700"
                      }`}
                    >
                      <span>Products</span>

                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          isProductsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    
                    {isProductsOpen && (
                      <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-4">

                        <div className="overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-card">

                          <div className="mb-1 rounded-xl bg-primary-50 px-4 py-3">

                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary-600">
                              Collection
                            </p>

                            <p className="mt-1 font-heading text-sm font-medium text-text">
                              Explore our products
                            </p>

                          </div>

                          {link.items.map((item) => (
                            <Link
                              key={item.path}
                              to={item.path}
                              onClick={() => setIsProductsOpen(false)}
                              className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-text transition-colors duration-200 hover:bg-primary-50 hover:text-primary-700"
                            >
                              <span>{item.name}</span>

                              <ArrowUpRight
                                size={14}
                                className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                              />
                            </Link>
                          ))}

                        </div>
                      </div>
                    )}

                  </div>
                );
              }

              

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={navLinkClass}
                >
                  {link.name}
                </NavLink>
              );
            })}

          </nav>

          

          <Link
            to="/contact"
            className="group hidden items-center gap-3 rounded-full bg-primary-800 py-2 pl-5 pr-2 text-xs font-medium text-white transition-all duration-300 hover:bg-primary-900 lg:flex"
          >
            <span>Get a Quote</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary-800 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={14} />
            </span>
          </Link>


          <button
            type="button"
            onClick={() => {
              setIsMenuOpen((prev) => !prev);
              setIsProductsOpen(false);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-text transition-all duration-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>

        </div>


        {isMenuOpen && (
          <div className="fixed inset-x-0 top-[76px] z-40 h-[calc(100dvh-76px)] overflow-y-auto border-t border-border bg-background lg:hidden">

            <nav className="flex min-h-full flex-col px-5 py-7 sm:px-8">

              <div className="flex flex-col">

                {navLinks.map((link) => {

        

                  if (link.type === "dropdown") {
                    return (
                      <div
                        key={link.name}
                        className="border-b border-border"
                      >

                        <button
                          type="button"
                          onClick={() =>
                            setIsProductsOpen((prev) => !prev)
                          }
                          className={`flex w-full items-center justify-between py-4 text-left font-heading text-xl transition-colors ${
                            isProductsOpen
                              ? "text-primary-700"
                              : "text-text"
                          }`}
                        >
                          <span>Products</span>

                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${
                              isProductsOpen
                                ? "rotate-180 text-primary-700"
                                : ""
                            }`}
                          />
                        </button>

                        

                        {isProductsOpen && (
                          <div className="mb-4 ml-1 border-l border-primary-200 pl-5">

                            {link.items.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                onClick={closeMenu}
                                className="group flex items-center justify-between py-2.5 text-sm text-text-muted transition-colors hover:text-primary-700"
                              >
                                <span>{item.name}</span>

                                <ArrowUpRight
                                  size={14}
                                  className="opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                                />
                              </Link>
                            ))}

                          </div>
                        )}

                      </div>
                    );
                  }

       

                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={closeMenu}
                      className={mobileNavLinkClass}
                    >
                      <span>{link.name}</span>

                      <ArrowUpRight
                        size={18}
                        className="opacity-40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </NavLink>
                  );
                })}

              </div>

        

              <div className="mt-auto pt-8">

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="group flex items-center justify-between rounded-2xl bg-primary-800 p-3 text-white"
                >

                  <div className="px-3">

                    <p className="text-[9px] uppercase tracking-[0.2em] text-primary-200">
                      Have a project?
                    </p>

                    <p className="mt-1 font-heading text-base">
                      Let's create something beautiful.
                    </p>

                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary-800 transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={18} />
                  </span>                                                                                 

                </Link>

                <p className="mt-5 text-center text-[9px] uppercase tracking-[0.25em] text-text-muted">
                  Crafted for living · Designed to last
                </p>

              </div>

            </nav>
          </div>
        )}

      </div>
    </header>
  );
};
export default Navbar;