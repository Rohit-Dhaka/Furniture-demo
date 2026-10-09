

import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  MoveRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

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
      ease: "easeOut",
    },
  },
};

const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
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

const CraftedPurpose = () => {
  const process = [
    {
      number: "01",
      title: "Precision Fabrication",
      description:
        "Carefully controlled construction and engineered components create the foundation for long-term strength.",
    },
    {
      number: "02",
      title: "Thoughtful Finishing",
      description:
        "Surfaces are prepared and finished with attention to texture, appearance and everyday durability.",
    },
    {
      number: "03",
      title: "Final Quality Check",
      description:
        "Every finished product receives a detailed inspection before it leaves our facility.",
    },
  ];

  const principles = [
    "Purpose Driven",
    "Quality Focused",
    "Detail Oriented",
    "Built To Last",
  ];

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto">



        <motion.div
          className="grid gap-10 lg:grid-cols-12 lg:items-end"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          

          <motion.div
            variants={fadeUp}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3">

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                <span className="text-xs">✦</span>
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Behind The Product
              </span>

              <span className="text-[9px] tracking-[0.2em] text-text-muted">
                03
              </span>

            </div>

            <h2 className="mt-7 max-w-4xl font-heading text-4xl font-medium leading-[0.98] tracking-tight text-text sm:text-5xl lg:text-7xl">
              From material
              <span className="block text-primary-600">
                to masterpiece.
              </span>
            </h2>
          </motion.div>

          

          <motion.div
            variants={fadeUp}
            className="lg:col-span-4 lg:col-start-9"
          >
            <p className="text-sm leading-7 text-text-muted sm:text-base">
              Every Woodora product begins long before it reaches your room.
              It starts with the material, the construction, the finish and
              the small decisions made throughout the process.
            </p>
          </motion.div>
        </motion.div>

     

        <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-12">

          

          <motion.div
            className="group relative overflow-hidden rounded-[2rem] lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="relative h-[440px] sm:h-[560px] lg:h-[650px]">

              <motion.img
                src="https://Woodorafurnitures.in/assets/defodil_heavy_42_1-D7-RsQgq.png"
                alt="Woodora manufacturing and craftsmanship"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.25,
                }}
                viewport={{ once: true }}
                className="absolute left-6 top-6 sm:left-8 sm:top-8"
              >
                <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.25em] text-white backdrop-blur-md">
                  Crafted With Purpose
                </span>
              </motion.div>

              

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.35,
                }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8"
              >
                <div className="flex items-end justify-between gap-6">

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/50">
                      Our Approach
                    </p>

                    <h3 className="mt-3 max-w-lg font-heading text-3xl font-medium leading-tight text-white sm:text-4xl">
                      Made with
                      <span className="text-primary-300">
                        {" "}intention.
                      </span>
                    </h3>
                  </div>

                  <motion.div
                    whileHover={{
                      rotate: -45,
                      scale: 1.08,
                    }}
                    transition={{ duration: 0.3 }}
                    className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md sm:flex"
                  >
                    <ArrowDownRight
                      size={18}
                      strokeWidth={1.5}
                    />
                  </motion.div>

                </div>
              </motion.div>
            </div>
          </motion.div>

          

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col justify-between rounded-[2rem] bg-primary-900 p-7 text-white sm:p-10 lg:col-span-5 lg:p-12"
          >
            <div>

              <span className="text-[9px] uppercase tracking-[0.3em] text-primary-300">
                The Woodora Approach
              </span>

              <div className="mt-16">

                <p className="font-heading text-3xl font-medium leading-tight sm:text-4xl">
                  Every detail has
                  <span className="block text-primary-300">
                    a purpose.
                  </span>
                </p>

                <p className="mt-6 text-sm leading-7 text-white/50">
                  At Woodora, every stage is approached with the same
                  mindset — create something strong, refined and reliable
                  enough to become part of everyday life.
                </p>

              </div>
            </div>

            

            <div className="mt-16">

              <div className="flex items-center gap-3">

                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                  viewport={{ once: true }}
                  className="h-px bg-primary-300"
                />

                <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                  Material · Craft · Finish
                </span>

              </div>

              <div className="mt-8 grid grid-cols-3 gap-2">

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="h-20 rounded-xl border border-white/10 bg-white/5"
                />

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-4 h-20 rounded-xl border border-primary-300/20 bg-primary-300/10"
                />

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="h-20 rounded-xl border border-white/10 bg-white/5"
                />

              </div>
            </div>
          </motion.div>
        </div>



        <motion.div
          className="mt-20 lg:mt-28"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.15 }}
        >

          <div className="flex flex-col gap-5 border-b border-border pb-7 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                The Process
              </span>

              <h3 className="mt-3 font-heading text-3xl font-medium text-text sm:text-4xl">
                Three stages.
                <span className="text-text-muted">
                  {" "}One standard.
                </span>
              </h3>
            </div>

            <p className="max-w-sm text-xs leading-6 text-text-muted">
              From fabrication to final inspection, every stage contributes to
              the strength and character of the finished product.
            </p>

          </div>

          

          <motion.div
            className="divide-y divide-border"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >

            {process.map((item) => (

              <motion.div
                key={item.number}
                variants={fadeUp}
                className="group grid gap-6 py-8 transition-all duration-300 lg:grid-cols-12 lg:items-center lg:py-10"
              >

                

                <div className="lg:col-span-1">
                  <span className="font-heading text-sm text-primary-600">
                    {item.number}
                  </span>
                </div>

                

                <div className="lg:col-span-4">

                  <h4 className="font-heading text-2xl font-medium text-text transition-colors duration-300 group-hover:text-primary-700 sm:text-3xl">
                    {item.title}
                  </h4>

                </div>

                

                <div className="lg:col-span-5">

                  <p className="max-w-lg text-sm leading-6 text-text-muted">
                    {item.description}
                  </p>

                </div>

                

                <div className="lg:col-span-2 lg:flex lg:justify-end">

                  <motion.span
                    whileHover={{
                      x: 5,
                    }}
                    transition={{ duration: 0.25 }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-all duration-300 group-hover:border-primary-300 group-hover:bg-primary-700 group-hover:text-white"
                  >
                    <MoveRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </motion.span>

                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      

        <motion.div
          className="mt-16 grid gap-8 rounded-[2rem] bg-primary-100 p-7 sm:p-10 lg:mt-20 lg:grid-cols-12 lg:items-center lg:p-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.2 }}
        >

          

          <div className="lg:col-span-5">

            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-700">
              Crafted With Purpose
            </span>

            <h3 className="mt-4 font-heading text-3xl font-medium leading-tight text-text sm:text-4xl">
              Strong materials.
              <span className="block text-primary-700">
                Thoughtful design.
              </span>
            </h3>

            <p className="mt-5 max-w-md text-sm leading-6 text-text-muted">
              The best furniture quietly earns its place in your home. It
              works hard without demanding attention, looks refined without
              feeling fragile and stays dependable long after the first day.
            </p>

          </div>

          

          <div className="lg:col-span-7">

            <motion.div
              className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-primary-200 bg-primary-200 sm:grid-cols-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >

              {principles.map((item, index) => (

                <motion.div
                  key={item}
                  variants={fadeUp}
                  whileHover={{
                    y: -4,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="bg-primary-100 p-5 sm:p-6"
                >

                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 5,
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary-700"
                  >
                    <Check size={14} />
                  </motion.div>

                  <p className="mt-8 text-xs font-semibold text-text">
                    {item}
                  </p>

                  <p className="mt-1 text-[9px] text-text-muted">
                    0{index + 1}
                  </p>

                </motion.div>

              ))}
            </motion.div>

          </div>
        </motion.div>


        <motion.div
          className="mt-10 flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.3 }}
        >

          <div>

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-700">
              Discover Our Craft
            </p>

            <p className="mt-2 font-heading text-xl text-text sm:text-2xl">
              Built carefully.
              <span className="text-text-muted">
                {" "}Made to belong.
              </span>
            </p>

          </div>

          <Link
            to="/products"
            className="group inline-flex w-fit items-center gap-3 text-sm font-medium text-primary-700"
          >
            Explore Collection

            <motion.span
              whileHover={{
                scale: 1.08,
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-200 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white"
            >
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </motion.span>
          </Link>

        </motion.div>
      </div>
    </section>
  );
};

export default CraftedPurpose;