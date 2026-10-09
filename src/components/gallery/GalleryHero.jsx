

import {
  ArrowDown,
  ArrowUpRight,
  Images,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const GalleryHero = () => {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto">

        
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">

          
          <div className="relative z-10 lg:col-span-5 lg:pb-12">

            
            <div className="mb-6 flex items-center gap-3">

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                <Images size={14} strokeWidth={1.7} />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Woodora Gallery
              </span>

            </div>

            
            <h1 className="max-w-xl font-heading text-5xl font-medium leading-[0.94] tracking-tight text-text sm:text-6xl lg:text-7xl xl:text-[5.75rem]">
              Spaces
              <span className="block text-primary-600">
                worth living in.
              </span>
            </h1>

            
            <p className="mt-7 max-w-md text-sm leading-7 text-text-muted sm:text-base">
              Explore real interiors, thoughtful details and furniture
              designed to bring comfort, character and function together.
            </p>

            
            <div className="mt-9 flex flex-wrap items-center gap-5">

              <Link
                to="/products"
                className="group inline-flex items-center gap-3 rounded-full bg-primary-800 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-700"
              >
                Explore Collection

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </Link>

              <a
                href="#gallery"
                className="group inline-flex items-center gap-2 text-sm font-medium text-text"
              >
                View Gallery

                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-primary-600 group-hover:bg-primary-50">
                  <ArrowDown
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-y-0.5"
                  />
                </span>
              </a>

            </div>

            
            <div className="mt-12 grid max-w-md grid-cols-3 border-y border-border py-5">

              <div>
                <p className="font-heading text-2xl font-medium text-text">
                  100+
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-text-muted">
                  Designs
                </p>
              </div>

              <div className="border-l border-border pl-5">
                <p className="font-heading text-2xl font-medium text-text">
                  5K+
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-text-muted">
                  Homes
                </p>
              </div>

              <div className="border-l border-border pl-5">
                <p className="font-heading text-2xl font-medium text-text">
                  10+
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-text-muted">
                  Years
                </p>
              </div>

            </div>

          </div>

          
          <div className="relative lg:col-span-7">

            
            <div className="group relative overflow-hidden rounded-[2rem] bg-primary-100">

              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=90"
                alt="Modern Woodora furniture interior"
                className="h-[480px] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.025] sm:h-[580px] lg:h-[650px]"
              />

              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-black/10" />

              
              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-3 py-2 backdrop-blur-md sm:left-8 sm:top-8">

                <span className="h-1.5 w-1.5 rounded-full bg-primary-300" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/80">
                  Interior Collection
                </span>

              </div>

              
              <div className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9">

                <div className="flex items-end justify-between gap-6">

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/55">
                      Featured Space
                    </p>

                    <h2 className="mt-2 max-w-lg font-heading text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
                      Designed for
                      <span className="text-primary-300">
                        {" "}everyday living.
                      </span>
                    </h2>
                  </div>

                  <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-transform duration-300 group-hover:rotate-45 sm:flex">
                    <ArrowUpRight size={17} />
                  </span>

                </div>

              </div>

            </div>

            
            <div className="absolute -bottom-8 -left-4 hidden w-40 overflow-hidden rounded-2xl border-4 border-background bg-white shadow-card sm:block lg:-left-8 lg:w-48">

              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=600&q=85"
                  alt="Modern wardrobe collection"
                  className="h-40 w-full object-cover transition-transform duration-500 hover:scale-105 lg:h-48"
                />

                <div className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-primary-700 backdrop-blur-sm">
                  <Sparkles size={12} />
                </div>
              </div>

              <div className="bg-white px-4 py-3.5">

                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary-600">
                  Collection
                </p>

                <p className="mt-1 text-xs font-medium leading-5 text-text">
                  Storage & Wardrobes
                </p>

              </div>

            </div>

            
            <div className="absolute -right-3 top-8 flex h-20 w-20 flex-col items-center justify-center rounded-full bg-primary-800 text-white shadow-lg sm:-right-5 sm:h-24 sm:w-24">

              <span className="font-heading text-2xl font-medium">
                01
              </span>

              <span className="mt-0.5 text-[8px] uppercase tracking-[0.2em] text-primary-200">
                Gallery
              </span>

            </div>

            
            <div className="absolute -right-5 bottom-28 hidden lg:block">
              <span className="writing-mode-vertical rotate-180 text-[9px] font-medium uppercase tracking-[0.3em] text-text-muted">
                Spaces · Details · Living
              </span>
            </div>

          </div>

        </div>

        
        <div className="mt-16 border-y border-border py-5 lg:mt-20">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-3">

              <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-text-muted">
                Explore the details
              </p>

            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-text-muted">

              <span className="transition-colors hover:text-primary-700">
                Living Spaces
              </span>

              <span className="text-primary-400">•</span>

              <span className="transition-colors hover:text-primary-700">
                Bedrooms
              </span>

              <span className="text-primary-400">•</span>

              <span className="transition-colors hover:text-primary-700">
                Storage
              </span>

              <span className="text-primary-400">•</span>

              <span className="transition-colors hover:text-primary-700">
                Steel Furniture
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GalleryHero;