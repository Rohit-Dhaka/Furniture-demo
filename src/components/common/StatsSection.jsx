

import {
  ArrowUpRight,
  Award,
  Boxes,
  MapPinned,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const StatsSection = () => {
  const stats = [
    {
      number: "5000+",
      title: "Happy Customers",
      description: "Homes furnished with confidence.",
      icon: UsersRound,
    },
    {
      number: "10+",
      title: "Years of Experience",
      description: "A decade of thoughtful craftsmanship.",
      icon: Award,
    },
    {
      number: "100+",
      title: "Product Variants",
      description: "Designed for different lifestyles.",
      icon: Boxes,
    },
    {
      number: "Pan India",
      title: "Delivery Available",
      description: "Our furniture, wherever you are.",
      icon: MapPinned,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-primary-900 py-20 text-white sm:py-24 lg:py-32">

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-primary-300/10"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.15 }}
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full border border-primary-300/10"
      />

      <div className="container relative mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-10 lg:grid-cols-12 lg:items-end"
        >

          <div className="lg:col-span-7">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary-300/20 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-300" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary-200">
                Trusted By Thousands
              </span>
            </div>

            <h2 className="max-w-3xl font-heading text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Numbers that tell
              <span className="block text-primary-300">
                our story.
              </span>
            </h2>

          </div>

          <div className="lg:col-span-4 lg:col-start-9">

            <p className="text-sm leading-7 text-primary-100/65 sm:text-base">
              More than numbers — each milestone represents a home,
              a customer and a piece of furniture made with care.
            </p>

          </div>

        </motion.div>

        {/* Stats Grid */}
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:border-primary-300/30 hover:bg-white/[0.07] sm:p-7"
              >

                {/* Number */}
                <div className="flex items-start justify-between">

                  <span className="font-heading text-[11px] tracking-[0.2em] text-white/25">
                    0{index + 1}
                  </span>

                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-primary-200 transition-all duration-500 group-hover:border-primary-300/50 group-hover:bg-primary-300 group-hover:text-primary-900"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.6}
                    />
                  </motion.div>

                </div>

                {/* Main Number */}
                <div className="mt-12">

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12 + 0.25,
                    }}
                    className="font-heading text-4xl font-medium tracking-tight sm:text-5xl"
                  >
                    {stat.number}
                  </motion.p>

                  <h3 className="mt-3 text-sm font-semibold text-white">
                    {stat.title}
                  </h3>

                  <p className="mt-2 max-w-[220px] text-xs leading-5 text-white/40">
                    {stat.description}
                  </p>

                </div>

                {/* Bottom Arrow */}
                <div className="mt-8 flex items-center justify-between">

                  <span className="h-px w-10 bg-primary-300/30 transition-all duration-500 group-hover:w-20 group-hover:bg-primary-300" />

                  <motion.div
                    whileHover={{
                      x: 4,
                      y: -4,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    <ArrowUpRight
                      size={16}
                      className="text-white/20 transition-colors duration-500 group-hover:text-primary-300"
                    />
                  </motion.div>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            delay: 0.2,
          }}
          className="mt-14 border-t border-white/10 pt-8 lg:mt-16"
        >

          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-primary-300">
                The Woodora Difference
              </p>

              <h3 className="mt-3 max-w-2xl font-heading text-2xl font-medium leading-tight sm:text-3xl">
                Built on experience.
                <span className="text-white/40">
                  {" "}Defined by trust.
                </span>
              </h3>

            </div>

            <Link
              to="/products"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-primary-300 hover:bg-primary-300 hover:text-primary-900"
            >
              Explore Collection

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-primary-900 group-hover:text-white">

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />

              </span>

            </Link>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default StatsSection;