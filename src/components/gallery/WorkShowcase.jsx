

import { ArrowUpRight, Images } from "lucide-react";
import { Link } from "react-router-dom";

const WorkShowcase = () => {
  const galleryItems = [
    {
      number: "01",
      title: "Chotti Rani",
      category: "Bedroom Storage",
      description: "Elegant storage designed for everyday living.",
      image:
        "https://Woodorafurnitures.in/assets/chotti_rani_1-FJDOO-pW.png",
    },
    {
      number: "02",
      title: "Chotti Rani",
      category: "Wardrobe Detail",
      description: "Thoughtful details, refined finish.",
      image:
        "https://Woodorafurnitures.in/assets/chotti_rani_2-D4b5HlO5.png",
    },
    {
      number: "03",
      title: "Maharani Light",
      category: "Premium Storage",
      description: "Designed around modern spaces.",
      image:
        "https://Woodorafurnitures.in/assets/mharani_light_1-DJCjJZV5.png",
    },
    {
      number: "04",
      title: "Maharani Light",
      category: "Interior Collection",
      description: "Function and character in balance.",
      image:
        "https://Woodorafurnitures.in/assets/mharani_light_2-DYzs0CoL.png",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto">

        
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-7">

            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                <Images size={13} strokeWidth={1.7} />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Our Work
              </span>
            </div>

            <h2 className="max-w-4xl font-heading text-5xl font-medium leading-[0.95] tracking-tight text-text sm:text-6xl lg:text-7xl">
              Crafted for spaces.
              <span className="block text-primary-600">
                Designed to belong.
              </span>
            </h2>

          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-7 text-text-muted sm:text-base">
              Explore a selection of Woodora furniture — thoughtfully
              designed, carefully crafted and made for the spaces where
              everyday life happens.
            </p>
          </div>

        </div>

        
        <div className="mt-12 flex flex-col gap-6 border-y border-border py-6 sm:flex-row sm:items-center sm:justify-between lg:mt-16">

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-text-muted">
              A glimpse into our collection
            </p>

            <p className="mt-2 text-xs text-text-muted">
              Furniture made with purpose and attention to detail.
            </p>
          </div>

          <div className="flex items-center gap-8">

            <div>
              <p className="font-heading text-2xl font-medium text-primary-800">
                5000+
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-text-muted">
                Homes
              </p>
            </div>

            <div className="h-9 w-px bg-border" />

            <div>
              <p className="font-heading text-2xl font-medium text-primary-800">
                10+
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-text-muted">
                Years
              </p>
            </div>

            <div className="hidden h-9 w-px bg-border sm:block" />

            <div className="hidden sm:block">
              <p className="font-heading text-2xl font-medium text-primary-800">
                Pan India
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-text-muted">
                Delivery
              </p>
            </div>

          </div>

        </div>

        
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12">

          
          <Link
            to="/gallery"
            className="group relative overflow-hidden rounded-[2rem] sm:col-span-2 lg:col-span-7"
          >
            <div className="relative h-[500px] overflow-hidden sm:h-[620px]">

              <img
                src={galleryItems[0].image}
                alt={galleryItems[0].title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              
              <span className="absolute left-6 top-6 text-[10px] font-medium tracking-[0.25em] text-white/60">
                {galleryItems[0].number}
              </span>

              
              <span className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-primary-800">
                <ArrowUpRight size={16} />
              </span>

              
              <div className="absolute bottom-7 left-7 right-7">

                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-primary-300">
                  {galleryItems[0].category}
                </p>

                <h3 className="mt-2 font-heading text-3xl font-medium text-white sm:text-4xl">
                  {galleryItems[0].title}
                </h3>

                <p className="mt-3 max-w-sm text-xs leading-5 text-white/60">
                  {galleryItems[0].description}
                </p>

                <div className="mt-5 h-px w-full bg-white/15" />

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Featured Collection
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-white/50">
                    View Project
                  </span>
                </div>

              </div>

            </div>
          </Link>

          
          <div className="grid gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-5">

            {galleryItems.slice(1).map((item) => (
              <Link
                key={item.number}
                to="/gallery"
                className="group relative overflow-hidden rounded-[1.75rem]"
              >
                <div className="relative h-[300px] sm:h-[340px] lg:h-[300px]">

                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  
                  <span className="absolute left-5 top-5 text-[9px] font-medium tracking-[0.25em] text-white/60">
                    {item.number}
                  </span>

                  
                  <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-primary-800">
                    <ArrowUpRight size={14} />
                  </span>

                  
                  <div className="absolute bottom-5 left-5 right-5">

                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-primary-300">
                      {item.category}
                    </p>

                    <h3 className="mt-1 font-heading text-xl font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[10px] leading-4 text-white/55">
                      {item.description}
                    </p>

                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>

        
        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between lg:mt-16">

          <div>
            <p className="font-heading text-xl text-text sm:text-2xl">
              The details are what make it yours.
            </p>

            <p className="mt-2 text-xs text-text-muted">
              Discover more furniture, finishes and completed spaces.
            </p>
          </div>

          <Link
            to="/gallery"
            className="group inline-flex w-fit items-center gap-3 text-sm font-medium text-primary-700"
          >
            View Full Gallery

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-200 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
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

export default WorkShowcase;