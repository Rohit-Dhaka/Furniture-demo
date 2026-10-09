import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary-50">
      
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-primary-100/70 blur-3xl" />

      <div className="container mx-auto">
        <div className="relative grid min-h-[calc(100vh-124px)] items-center py-10 lg:grid-cols-12 lg:gap-6 lg:py-14">

          
          <div className="relative z-10 lg:col-span-6">

            
            <div className="mb-8 flex items-center gap-4">
              <span className="font-heading text-sm font-medium text-primary-600">
                01
              </span>

              <span className="h-px w-12 bg-primary-300" />

              <span className="text-xs uppercase tracking-[0.3em] text-text-muted">
                Furniture Studio
              </span>
            </div>

            
            <h1 className="max-w-3xl font-heading text-[3.5rem] font-medium leading-[0.95] tracking-[-0.04em] text-text sm:text-6xl md:text-7xl xl:text-[6.5rem]">

              Spaces

              <span className="block pl-8 text-primary-600 sm:pl-12">
                deserve
              </span>

              <span className="block">
                beautiful
              </span>

              <span className="block pl-16 text-text/80 sm:pl-24">
                things.
              </span>

            </h1>

            
            <div className="mt-8 max-w-lg border-l-2 border-primary-300 pl-5">
              <p className="text-sm leading-6 text-text-muted sm:text-base">
                Furniture made with intention — combining honest materials,
                thoughtful design, and craftsmanship that belongs in your
                everyday life.
              </p>
            </div>

            
            <div className="mt-8 flex flex-wrap items-center gap-5">

              <Link
                to="/products"
                className="group flex items-center gap-4 rounded-full bg-primary-700 py-2 pl-6 pr-2 text-sm font-medium text-white transition-all hover:bg-primary-800"
              >
                <span>Explore Furniture</span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-700 transition-transform group-hover:rotate-45">
                  <ArrowUpRight size={17} />
                </span>
              </Link>

              <Link
                to="/about"
                className="group flex items-center gap-2 text-sm font-medium text-text"
              >
                <span className="border-b border-text pb-1">
                  Our Story
                </span>

                <MoveUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

            </div>

            
            <div className="mt-12 flex items-center gap-7 sm:gap-10">

              <div>
                <p className="font-heading text-2xl font-semibold text-text">
                  10+
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-text-muted">
                  Years
                </p>
              </div>

              <div className="h-10 w-px bg-primary-200" />

              <div>
                <p className="font-heading text-2xl font-semibold text-text">
                  500+
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-text-muted">
                  Homes
                </p>
              </div>

              <div className="h-10 w-px bg-primary-200" />

              <div>
                <p className="font-heading text-2xl font-semibold text-text">
                  100%
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wider text-text-muted">
                  Crafted
                </p>
              </div>

            </div>
          </div>

          
          <div className="relative mt-12 lg:col-span-6 lg:mt-0">

            
            <div className="relative ml-auto h-[480px] sm:w-[92%] overflow-hidden rounded-[10rem_1.5rem_1.5rem_1.5rem] sm:h-[600px] lg:h-[680px] lg:w-[88%]">

              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=90"
                alt="Elegant modern furniture"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                         
            </div>

            
            <div className="absolute -bottom-8 left-0 hidden w-44 overflow-hidden rounded-2xl border-4 border-primary-50 shadow-card sm:block lg:left-2">

              <img
                src="https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=400&q=85"
                alt="Wooden furniture"
                className="h-52 w-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black/45 px-3 py-2 backdrop-blur-sm">
                <p className="text-[10px] uppercase tracking-wider text-white/70">
                  Crafted Detail
                </p>
              </div>

            </div>

            
            <div className="absolute -right-5 top-1/2 hidden -translate-y-1/2 rotate-90 xl:block">
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary-700/60">
                Furniture • Craft • Living
              </span>
            </div>

            
            <div className="absolute -left-5 top-12 hidden h-20 w-20 items-center justify-center rounded-full border border-primary-300 bg-primary-50 sm:flex lg:-left-8">

              <div className="text-center">
                <p className="font-heading text-lg font-semibold text-primary-700">
                  10+
                </p>

                <p className="text-[8px] uppercase tracking-wider text-text-muted">
                  Years
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

      
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-3 lg:flex">
        <span className="h-8 w-px bg-primary-300" />

        <span className="text-[9px] uppercase tracking-[0.3em] text-text-muted">
          Scroll to explore
        </span>
      </div>
    </section>
  );
};

export default Hero;