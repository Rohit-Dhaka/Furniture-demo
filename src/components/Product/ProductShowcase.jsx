

import {
  ArrowUpRight,
  BedDouble,
  DoorOpen,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";
import { motion } from "motion/react";

const ProductShowcase = () => {
  const categories = [
    {
      number: "01",
      icon: DoorOpen,
      category: "2 Door",
      title: "2 Door Wardrobes",
      description:
        "Smart storage with an elegant design for modern bedrooms.",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=85",
      href: "/products/wardrobes",
    },
    {
      number: "02",
      icon: Layers3,
      category: "3 Door",
      title: "3 Door Wardrobes",
      description:
        "Spacious storage crafted for organized modern living.",
      image:
        "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=900&q=85",
      href: "/products/wardrobes",
    },
    {
      number: "03",
      icon: BedDouble,
      category: "4 Door",
      title: "4 Door Wardrobes",
      description:
        "Extra space and effortless organization for every room.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
      href: "/products/wardrobes",
    },
    {
      number: "04",
      icon: ShieldCheck,
      category: "Secure Storage",
      title: "Almirahs with Locker",
      description:
        "Secure everyday storage combined with a clean modern aesthetic.",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=85",
      href: "/products/wardrobes",
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto">

        

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-12 lg:items-end"
        >
          
          <motion.div
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary-600" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Premium Collection
              </span>
            </div>

            <h2 className="font-heading text-5xl font-medium leading-[0.95] tracking-tight text-text sm:text-6xl lg:text-7xl">
              Wardrobes
              <span className="block text-primary-600">
                redefined.
              </span>
            </h2>
          </motion.div>

          
          <motion.div
            variants={fadeUp}
            className="lg:col-span-4 lg:col-start-9"
          >
            <p className="max-w-md text-sm leading-7 text-text-muted sm:text-base">
              Discover thoughtfully designed wardrobes that combine
              intelligent storage, timeless aesthetics and everyday
              functionality.
            </p>

            <Link
              to="/products/wardrobes"
              className="group mt-6 inline-flex items-center gap-3 text-sm font-medium text-primary-700"
            >
              Explore Collection

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-300 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12"
        >
          
          <motion.div
            variants={cardAnimation}
            className="group relative overflow-hidden rounded-[2rem] lg:col-span-7"
          >
            <motion.img
              initial={{ scale: 1.08 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&q=85"
              alt="Premium wardrobe collection"
              className="h-[430px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[520px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.25,
              }}
              className="absolute left-7 right-7 top-7 flex items-start justify-between sm:left-9 sm:right-9 sm:top-9"
            >
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[9px] uppercase tracking-[0.25em] text-white backdrop-blur-md">
                Woodora
              </span>

              <span className="font-heading text-sm text-white/70">
                01
              </span>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9"
            >
              <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                Featured Collection
              </p>

              <h3 className="mt-3 max-w-lg font-heading text-3xl font-medium text-white sm:text-4xl">
                Storage that belongs
                <span className="text-white/60">
                  {" "}in your space.
                </span>
              </h3>
            </motion.div>
          </motion.div>

          
          <motion.div
            variants={cardAnimation}
            className="flex flex-col justify-between rounded-[2rem] bg-primary-800 p-7 text-white sm:p-9 lg:col-span-5"
          >
            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-primary-200">
                Designed Around You
              </p>

              <h3 className="mt-5 font-heading text-3xl leading-tight sm:text-4xl">
                More storage.
                <br />
                Less clutter.
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-primary-100/75">
                From compact bedrooms to spacious family homes, our wardrobe
                collection is designed to make organization feel effortless.
              </p>
            </div>

            <div className="mt-12 flex items-end justify-between">
              <div>
                <p className="font-heading text-4xl font-medium">
                  04
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-primary-200">
                  Signature Styles
                </p>
              </div>

              <Link
                to="/products/wardrobes"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-800 transition-transform duration-300 hover:rotate-45"
              >
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                variants={cardAnimation}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
              >
                <Link
                  to={item.href}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-card"
                >
                  
                  <div className="relative h-52 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      whileHover={{
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                      }}
                      className="h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    <span className="absolute left-4 top-4 text-[10px] font-medium tracking-[0.2em] text-white">
                      {item.number}
                    </span>

                    <motion.span
                      whileHover={{
                        rotate: 10,
                        scale: 1.08,
                      }}
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md"
                    >
                      <Icon size={16} />
                    </motion.span>
                  </div>

                  
                  <div className="p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-primary-600">
                      {item.category}
                    </p>

                    <h3 className="mt-2 font-heading text-lg font-semibold text-text">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-text-muted">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                      <span className="text-xs font-medium text-text">
                        View Details
                      </span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
                        <ArrowUpRight
                          size={13}
                          className="transition-transform duration-300 group-hover:rotate-45"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;