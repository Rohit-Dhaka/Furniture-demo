

import {
  ArrowUpRight,
  BadgeCheck,
  Gem,
  Headphones,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const WhyChooseSection = () => {
  const reasons = [
    {
      number: "01",
      title: "Timeless Design",
      description: "Simple designs that stay beautiful beyond trends.",
      icon: Gem,
    },
    {
      number: "02",
      title: "Built to Last",
      description: "Quality materials made for everyday living.",
      icon: ShieldCheck,
    },
    {
      number: "03",
      title: "10+ Years",
      description: "A decade of experience in furniture craftsmanship.",
      icon: BadgeCheck,
    },
    {
      number: "04",
      title: "Pan India",
      description: "Reliable delivery across cities and homes.",
      icon: Truck,
    },
    {
      number: "05",
      title: "Personal Support",
      description: "Helpful guidance before and after your purchase.",
      icon: Headphones,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
    <section className="bg-white py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-6 border-b border-border pb-10 lg:grid-cols-2 lg:items-end"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h-px bg-primary-600"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Why Woodora
              </span>
            </div>

            <h2 className="max-w-xl font-heading text-4xl font-medium leading-[1.05] tracking-tight text-text sm:text-5xl">
              The details that make
              <span className="text-primary-600"> the difference.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-text-muted lg:ml-auto">
            From thoughtful design to dependable service, every part of the
            Woodora experience is built around better living.
          </p>
        </motion.div>

        {/* Reasons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group relative flex min-h-[270px] flex-col bg-white p-6 transition-colors duration-300 hover:bg-primary-900 hover:text-white sm:p-7"
              >
                {/* Top */}
                <div className="flex items-center justify-between">
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-[10px] font-medium tracking-[0.2em] text-text-muted transition-colors group-hover:text-white/40"
                  >
                    {reason.number}
                  </motion.span>

                  <motion.span
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-primary-700 transition-all duration-300 group-hover:border-primary-300/30 group-hover:bg-primary-300 group-hover:text-primary-900"
                  >
                    <Icon size={16} strokeWidth={1.5} />
                  </motion.span>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className="font-heading text-xl font-medium">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-text-muted transition-colors group-hover:text-white/55">
                    {reason.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="mt-7 flex items-center justify-between">
                  <motion.span
                    initial={{ width: 24 }}
                    whileHover={{ width: 40 }}
                    className="h-px bg-primary-300"
                  />

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
                      size={15}
                      className="text-text-muted transition-colors duration-300 group-hover:text-primary-300"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-primary-600">
              Our Commitment
            </p>

            <p className="mt-2 font-heading text-xl text-text">
              Made to look good. Made to live with.
            </p>
          </div>

          <Link
            to="/about"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-primary-700"
          >
            Discover our story

            <motion.span
              whileHover={{
                rotate: 45,
              }}
              transition={{
                duration: 0.25,
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-200 transition-colors duration-300 group-hover:border-primary-700 group-hover:bg-primary-700 group-hover:text-white"
            >
              <ArrowUpRight size={14} />
            </motion.span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseSection;