

import { ArrowUpRight, BadgeCheck, Quote, Star } from "lucide-react";
import { Link } from "react-router-dom";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const CustomerStories = () => {
  const stories = [
    {
      name: "Rohit Sharma",
      location: "Chandigarh",
      product: "3 Door Steel Wardrobe",
      quote:
        "The wardrobe still looks brand new after two years. The finish is excellent, the hinges are smooth, and the storage is exactly what we needed.",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Ananya Mehta",
      location: "Delhi",
      product: "Modern Storage Unit",
      quote:
        "The design feels premium without being complicated. It fits perfectly into our room and the quality is even better than we expected.",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Vikram Singh",
      location: "Jaipur",
      product: "Premium Wardrobe",
      quote:
        "From ordering to delivery, everything was smooth. The furniture feels strong, looks elegant and works beautifully for our family.",
      image:
        "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Priya Verma",
      location: "Gurugram",
      product: "Premium Almirah",
      quote:
        "The build quality is impressive and the storage is very practical. It feels like a piece of furniture that will stay in our home for years.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
    },
    {
      name: "Aman Kapoor",
      location: "Mumbai",
      product: "4 Door Wardrobe",
      quote:
        "Everything from the finish to the delivery experience felt well thought out. The wardrobe looks premium in our bedroom.",
      image:
        "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto">
        
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Customer Stories
              </span>
            </div>

            <h2 className="max-w-3xl font-heading text-4xl font-medium leading-[1.02] tracking-tight text-text sm:text-5xl lg:text-7xl">
              Made for homes.
              <span className="block text-primary-600">
                Loved for years.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-text-muted sm:text-base lg:col-span-4 lg:col-start-9">
            Real experiences from people who have made Woodora furniture
            part of their everyday spaces.
          </p>
        </div>

        
        <div className="relative mt-14 lg:mt-20">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={900}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: ".customer-pagination",
            }}
            spaceBetween={18}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 1.25,
              },
              1024: {
                slidesPerView: 1.5,
              },
              1280: {
                slidesPerView: 1.75,
              },
            }}
            className="customer-stories-slider !overflow-visible"
          >
            {stories.map((story, index) => (
              <SwiperSlide key={story.name} className="!h-auto">
                <article className="group grid h-full overflow-hidden rounded-[2rem] border border-border bg-white md:grid-cols-2">
                  
                  <div className="relative min-h-[360px] overflow-hidden md:min-h-[500px]">
                    <img
                      src={story.image}
                      alt={story.product}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    
                    <span className="absolute left-6 top-6 text-[10px] font-medium tracking-[0.25em] text-white/70">
                      0{index + 1}
                    </span>

                    
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-flex rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                        {story.product}
                      </span>
                    </div>
                  </div>

                  
                  <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-11">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1 text-primary-500">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              size={14}
                              fill="currentColor"
                              strokeWidth={0}
                            />
                          ))}
                        </div>

                        <Quote
                          size={32}
                          strokeWidth={1}
                          className="text-primary-100"
                        />
                      </div>

                      <div className="mt-12">
                        <div className="flex items-center gap-2">
                          <BadgeCheck
                            size={15}
                            className="text-primary-600"
                          />

                          <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary-700">
                            Verified Customer
                          </span>
                        </div>

                        <blockquote className="mt-5 font-heading text-2xl leading-relaxed text-text sm:text-3xl">
                          “{story.quote}”
                        </blockquote>
                      </div>
                    </div>

                    
                    <div className="mt-12">
                      <div className="h-px bg-border" />

                      <div className="mt-5 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="h-11 w-11 overflow-hidden rounded-full bg-primary-100">
                            <img
                              src={story.image}
                              alt={story.name}
                              className="h-full w-full object-cover"
                            />
                          </div>

                          <div>
                            <p className="text-sm font-medium text-text">
                              {story.name}
                            </p>

                            <p className="mt-1 text-[10px] text-text-muted">
                              {story.location}
                            </p>
                          </div>
                        </div>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-all duration-300 group-hover:border-primary-600 group-hover:bg-primary-700 group-hover:text-white">
                          <ArrowUpRight size={15} />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          
          <div className="mt-8 flex items-center justify-between">
            <div className="customer-pagination !static !flex !w-auto items-center gap-2" />

            <Link
              to="/products"
              className="group flex items-center gap-3 text-sm font-medium text-primary-700"
            >
              Explore Collection

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-200 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </Link>
          </div>
        </div>

        
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.5rem] bg-primary-900 p-7 text-white">
            <p className="text-[9px] uppercase tracking-[0.3em] text-primary-300">
              Woodora Experience
            </p>

            <p className="mt-4 font-heading text-2xl leading-tight sm:text-3xl">
              Furniture that stays with you.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border">
            <div className="bg-white p-7">
              <p className="font-heading text-3xl text-primary-700">
                5000+
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-text-muted">
                Happy Homes
              </p>
            </div>

            <div className="bg-white p-7">
              <p className="font-heading text-3xl text-primary-700">
                10+
              </p>

              <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-text-muted">
                Years of Craft
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <style>{`
        .customer-pagination .swiper-pagination-bullet {
          width: 24px;
          height: 3px;
          border-radius: 9999px;
          margin: 0 !important;
          opacity: 1;
          background: #e5e5e5;
          transition: all 0.3s ease;
        }

        .customer-pagination .swiper-pagination-bullet-active {
          width: 48px;
          background: #7c3aed;
        }
      `}</style>
    </section>
  );
};

export default CustomerStories;