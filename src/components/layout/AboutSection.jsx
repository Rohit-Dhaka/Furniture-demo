

import {
  Archive,
  ArrowUpRight,
  Check,
  Handshake,
  Palette,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Premium Quality",
      description:
        "High-quality materials and careful craftsmanship built for everyday use.",
    },
    {
      icon: Sparkles,
      title: "Modern & Elegant Designs",
      description:
        "Contemporary designs that bring a refined and elegant feel to every space.",
    },
    {
      icon: Check,
      title: "Durable Construction",
      description:
        "Strong construction and durable finishes made for years of comfortable use.",
    },
    {
      icon: Archive,
      title: "Smart Storage Solutions",
      description:
        "Practical furniture designed to make the most of your space and storage.",
    },
    {
      icon: Palette,
      title: "Custom Sizes & Colours",
      description:
        "Choose sizes, finishes and details that work naturally with your space.",
    },
    {
      icon: Handshake,
      title: "Trusted Manufacturing",
      description:
        "Reliable workmanship with attention to detail from design to final finish.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto">

      
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-800 text-white">
                <ShieldCheck size={20} strokeWidth={1.8} />
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-700">
                Why Choose Woodora?
              </span>
            </div>

            <h2 className="max-w-3xl font-heading text-4xl font-medium leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-6xl">
              Quality you can see.
              <span className="block text-primary-600">
                Craftsmanship you can trust.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-text-muted sm:text-base">
            Every piece is thoughtfully designed and carefully crafted to
            bring comfort, durability and character into your space.
          </p>

        </div>

        
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">

          
          <div className="relative lg:col-span-5">

            <div className="group relative h-full min-h-[520px] overflow-hidden rounded-[2rem]">

              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
                alt="Modern Woodora furniture interior"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              
              <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9">

                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-white/60" />

                  <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-white/70">
                    The Woodora Standard
                  </span>
                </div>

                <h3 className="max-w-sm font-heading text-2xl leading-tight text-white sm:text-3xl">
                  Designed beautifully.
                  <span className="block text-white/60">
                    Built for everyday life.
                  </span>
                </h3>

                <div className="mt-6 flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary-800">
                    <ArrowUpRight size={17} />
                  </div>

                  <span className="text-xs text-white/70">
                    Explore our craftsmanship
                  </span>

                </div>

              </div>

            </div>

            
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-border bg-white px-6 py-5 shadow-card sm:-right-5">

              <div className="flex items-end gap-1">
                <span className="font-heading text-4xl font-semibold leading-none text-primary-700">
                  10
                </span>

                <span className="mb-0.5 text-xl font-medium text-primary-700">
                  +
                </span>
              </div>

              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-text-muted">
                Years of Excellence
              </p>

            </div>

          </div>

          
          <div className="lg:col-span-7">

            <div className="grid h-full gap-x-8 gap-y-10 sm:grid-cols-2 lg:gap-x-10 lg:gap-y-12">

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group relative"
                  >

                    
                    <span className="absolute right-0 top-0 text-[10px] font-medium tracking-[0.2em] text-text-muted/40">
                      0{index + 1}
                    </span>

                    
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary-400 text-primary-700 transition-all duration-300 group-hover:border-primary-800 group-hover:bg-primary-800 group-hover:text-white">
                      <Icon
                        size={25}
                        strokeWidth={1.6}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    
                    <h3 className="mt-5 pr-8 font-heading text-lg font-semibold leading-snug text-text">
                      {feature.title}
                    </h3>

                    <p className="mt-2.5 max-w-sm text-sm leading-6 text-text-muted">
                      {feature.description}
                    </p>

                    
                    <div className="mt-5 h-px w-10 bg-primary-300 transition-all duration-300 group-hover:w-16 group-hover:bg-primary-700" />

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        
        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-20">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary-600">
              Our Promise
            </p>

            <p className="mt-2 max-w-2xl font-heading text-xl leading-relaxed text-text sm:text-2xl">
              Furniture made to look good,
              <span className="text-text-muted">
                {" "}feel good and last.
              </span>
            </p>
          </div>

          <Link
            to="/about"
            className="group flex w-fit shrink-0 items-center gap-3 rounded-full border border-primary-300 px-5 py-2.5 text-sm font-medium text-primary-700 transition-all duration-300 hover:border-primary-800 hover:bg-primary-800 hover:text-white"
          >
            Discover Our Story

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 transition-all duration-300 group-hover:bg-white group-hover:text-primary-800">
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;