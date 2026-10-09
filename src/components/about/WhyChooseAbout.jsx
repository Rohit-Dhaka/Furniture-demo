

import {
  ArrowUpRight,
  BadgeCheck,
  Gem,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseAbout = () => {
  const reasons = [
    {
      number: "01",
      title: "Thoughtful Design",
      description:
        "Clean, practical designs created to complement modern spaces.",
      icon: Gem,
    },
    {
      number: "02",
      title: "Quality Craftsmanship",
      description:
        "Carefully selected materials and attention to every finishing detail.",
      icon: BadgeCheck,
    },
    {
      number: "03",
      title: "Built for Everyday",
      description:
        "Furniture designed for real homes, daily use and lasting comfort.",
      icon: ShieldCheck,
    },
    {
      number: "04",
      title: "Pan India Delivery",
      description:
        "A dependable delivery experience that brings our collection closer to you.",
      icon: Truck,
    },
  ];

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
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

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto">

        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 border-b border-border pb-10 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-primary-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Why Choose Us
              </span>
            </motion.div>

            <h2 className="max-w-3xl font-heading text-4xl font-medium leading-[1.02] tracking-tight text-text sm:text-5xl lg:text-6xl">
              Good furniture is
              <span className="block text-primary-600">
                more than good looks.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-text-muted sm:text-base lg:col-span-4 lg:col-start-9">
            Every Woodora piece is considered around design, durability,
            comfort and the way people actually live.
          </p>
        </motion.div>

        
        <div className="mt-10 grid gap-3 lg:grid-cols-12">

          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -4,
            }}
            className="relative overflow-hidden rounded-[2rem] bg-primary-900 p-7 text-white sm:p-9 lg:col-span-5 lg:min-h-[500px] lg:p-11"
          >

            <div className="relative z-10 flex h-full flex-col">

              <span className="text-[9px] uppercase tracking-[0.3em] text-primary-300">
                The Woodora Difference
              </span>

              <h3 className="mt-14 max-w-sm font-heading text-3xl font-medium leading-tight sm:text-4xl">
                Made to look good.
                <span className="block text-primary-300">
                  Made to live with.
                </span>
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                We focus on the details that matter after the first impression
                — comfort, functionality, quality and longevity.
              </p>

              <div className="mt-auto pt-12">

                <div className="flex items-end gap-3">
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                    }}
                    className="font-heading text-5xl font-medium text-primary-300"
                  >
                    10+
                  </motion.span>

                  <span className="mb-1 text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Years of experience
                  </span>
                </div>

                <div className="mt-7 h-px w-full bg-white/10" />

                <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-white/30">
                  Design · Quality · Comfort
                </p>

              </div>

            </div>

            
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full border border-primary-300/10"
            />

            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full border border-primary-300/10"
            />

          </motion.div>

          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid gap-3 sm:grid-cols-2 lg:col-span-7"
          >

            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.number}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                  className="group relative rounded-[1.5rem] border border-border bg-white p-6 transition-all duration-300 hover:border-primary-200 hover:shadow-soft sm:p-7"
                >

                  
                  <div className="flex items-center justify-between">

                    <span className="text-[9px] font-medium tracking-[0.2em] text-text-muted">
                      {reason.number}
                    </span>

                    <motion.span
                      whileHover={{
                        rotate: 8,
                        scale: 1.08,
                      }}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white"
                    >
                      <Icon size={16} strokeWidth={1.6} />
                    </motion.span>

                  </div>

                  
                  <div className="mt-12">

                    <h3 className="font-heading text-xl font-medium text-text">
                      {reason.title}
                    </h3>

                    <p className="mt-3 max-w-xs text-xs leading-5 text-text-muted">
                      {reason.description}
                    </p>

                  </div>

                  
                  <div className="mt-8 flex items-center justify-between">

                    <motion.span
                      initial={{ width: 28 }}
                      whileHover={{ width: 48 }}
                      className="h-px bg-primary-300"
                    />

                    <motion.div
                      whileHover={{
                        x: 4,
                        y: -4,
                      }}
                      className="text-text-muted group-hover:text-primary-700"
                    >
                      <ArrowUpRight size={15} />
                    </motion.div>

                  </div>

                </motion.div>
              );
            })}

          </motion.div>

        </div>

        
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-10 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between"
        >

          <p className="font-heading text-lg text-text sm:text-xl">
            Furniture should feel right from day one.
          </p>

          <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-primary-700">
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="h-1.5 w-1.5 rounded-full bg-primary-600"
            />

            Crafted with intention
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseAbout;