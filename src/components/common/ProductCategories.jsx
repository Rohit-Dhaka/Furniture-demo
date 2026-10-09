

import {
  ArrowRight,
  Box,
  BriefcaseBusiness,
  DoorOpen,
  Factory,
  LockKeyhole,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { Link } from "react-router-dom";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "motion/react";

import "swiper/css";

import products from "../../data/Products";

const ProductCategories = () => {
  const iconMap = {
    "2 Door Wardrobe": DoorOpen,
    "3 Door Wardrobe": DoorOpen,
    "4 Door Wardrobe": DoorOpen,
    "Steel Almirah": DoorOpen,
    "Premium Wardrobe": ShieldCheck,
    "Almirah with Locker": LockKeyhole,

    "Storage Cabinet": Factory,
    "Steel Locker": LockKeyhole,
    Workstation: Wrench,
    "Tool Storage": BriefcaseBusiness,
  };

  const domesticProducts = products.domestic.map((product, index) => ({
    ...product,
    number: String(index + 1).padStart(2, "0"),
    type: "Domestic",
    icon: iconMap[product.category] || Box,
  }));

  const industrialProducts = products.industrial.map((product, index) => ({
    ...product,
    number: String(index + 1).padStart(2, "0"),
    type: "Industrial",
    icon: iconMap[product.category] || Factory,
  }));

  const categories = [...domesticProducts, ...industrialProducts];

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >

          <div className="max-w-3xl">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="text-sm text-primary-600">✦</span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Our Collection
              </span>

              <span className="text-sm text-primary-600">✦</span>
            </motion.div>

            <h2 className="font-heading text-4xl font-medium leading-[1.02] tracking-tight text-text sm:text-5xl lg:text-6xl">
              Furniture for
              <span className="block text-primary-600">
                every way of living.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-text-muted sm:text-base">
              Explore our domestic and industrial furniture collection,
              designed for everyday use, durability and modern spaces.
            </p>

          </div>

          <Link
            to="/products"
            className="group flex w-fit items-center gap-3 text-sm font-medium text-primary-700"
          >
            View All Products

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-300 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </Link>

        </motion.div>

        {/* ================= PRODUCTS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="mt-12 sm:mt-16"
        >

          <Swiper
            modules={[Autoplay, FreeMode]}
            loop={true}
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={6500}
            allowTouchMove={true}
            grabCursor={true}
            spaceBetween={20}
            slidesPerView={1.15}
            breakpoints={{
              640: {
                slidesPerView: 2.1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.15,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 24,
              },
            }}
            className="!overflow-visible"
          >

            {categories.map((item, index) => {
              const Icon = item.icon;

              return (
                <SwiperSlide
                  key={item.id}
                  className="!h-auto"
                >

                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: Math.min(index * 0.08, 0.4),
                      ease: "easeOut",
                    }}
                    whileHover={{
                      y: -8,
                    }}
                  >

                    <Link
                      to={`/products/${item.type.toLowerCase()}/${item.id}`}
                      className="group relative block h-full overflow-hidden rounded-[2rem] border border-border bg-white p-3 transition-all duration-500 hover:border-primary-300 hover:shadow-card"
                    >

                      <div className="relative h-[440px] overflow-hidden rounded-[1.5rem]">

                        {/* ================= IMAGE ================= */}

                        <img
                          src={item.images}
                          alt={item.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                        {/* Top */}
                        <div className="absolute left-5 right-5 top-5 flex items-center justify-between">

                          <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                            {item.type}
                          </span>

                          <motion.span
                            whileHover={{
                              rotate: 45,
                              scale: 1.05,
                            }}
                            transition={{
                              duration: 0.25,
                            }}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-800 shadow-lg"
                          >
                            <ArrowRight size={16} />
                          </motion.span>

                        </div>

                        {/* Category Icon */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.2,
                          }}
                          className="absolute left-5 top-20"
                        >

                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md">
                            <Icon
                              size={17}
                              strokeWidth={1.5}
                            />
                          </div>

                        </motion.div>

                        {/* Bottom Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">

                          {/* Category */}
                          <div className="mb-4 flex items-center gap-2">

                            <span className="h-px w-7 bg-primary-300 transition-all duration-500 group-hover:w-12" />

                            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-primary-300">
                              {item.category}
                            </span>

                          </div>

                          {/* Product Name */}
                          <h3 className="font-heading text-3xl font-medium leading-none text-white sm:text-4xl">
                            {item.name}
                          </h3>

                          {/* Subtitle */}
                          <p className="mt-2 font-heading text-lg text-white/70">
                            {item.subtitle}
                          </p>

                          {/* Description */}
                          <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">

                            <div className="overflow-hidden">

                              <p className="mt-3 max-w-sm text-xs leading-5 text-white/60">
                                {item.description}
                              </p>

                            </div>

                          </div>

                          {/* Product Info */}
                          <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4">

                            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/70">
                              Explore Product
                            </span>

                            <span className="text-[10px] text-white/40">
                              {item.number}
                            </span>

                          </div>

                        </div>

                      </div>

                    </Link>

                  </motion.div>

                </SwiperSlide>
              );
            })}

          </Swiper>

        </motion.div>

        {/* ================= BOTTOM LABEL ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mt-8 flex items-center gap-3 border-t border-border pt-7"
        >

          <span className="h-px w-8 bg-primary-600" />

          <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted">
            Built for everyday living · Designed for lasting performance
          </span>

        </motion.div>

      </div>
    </section>
  );
};

export default ProductCategories;