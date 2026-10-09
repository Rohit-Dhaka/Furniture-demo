import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseHero = () => {
  return (
    <section className="relative overflow-hidden bg-primary-950 text-white">
      
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <img
          src="https://Woodorafurnitures.in/assets/pp3802_1-CiVcH1EE.png"
          alt="Woodora steel door craftsmanship"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
      </motion.div>

      
      <motion.div
        className="absolute inset-0 opacity-[0.06]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container relative mx-auto">
        <div className="flex min-h-[680px] flex-col justify-between py-24 sm:min-h-[760px] sm:py-28 lg:min-h-[820px] lg:py-32">

          
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                <ShieldCheck
                  size={15}
                  strokeWidth={1.5}
                  className="text-primary-300"
                />
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/70">
                Why Woodora
              </span>
            </div>

            <span className="hidden text-[9px] uppercase tracking-[0.3em] text-white/35 sm:block">
              Steel Doors · 01
            </span>
          </motion.div>

          
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">

            
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.p
                className="mb-6 text-[10px] font-medium uppercase tracking-[0.35em] text-primary-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
              >
                Strength by design
              </motion.p>

              <h1 className="max-w-5xl font-heading text-5xl font-medium leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
                Built with
                <motion.span
                  className="block text-primary-300"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.75,
                    ease: "easeOut",
                  }}
                >
                  a reason.
                </motion.span>
              </h1>

              <motion.p
                className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.95 }}
              >
                We don't believe a steel door should simply protect a space.
                It should combine strength, precision and refined design to
                perform beautifully for years.
              </motion.p>
            </motion.div>

            
            <motion.div
              className="lg:col-span-4 lg:pb-2"
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.8,
                ease: "easeOut",
              }}
            >
              <div className="border-l border-white/20 pl-6">
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                  The Woodora Standard
                </p>

                <p className="mt-4 max-w-xs font-heading text-xl leading-relaxed text-white/90 sm:text-2xl">
                  Protection you can trust.
                  <span className="text-white/40">
                    {" "}Design you'll appreciate.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          
          <motion.div
            className="flex flex-col gap-6 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.05,
              ease: "easeOut",
            }}
          >
            <div className="flex flex-wrap gap-x-8 gap-y-3">

              {[
                ["Material", "Engineered Steel"],
                ["Built For", "Everyday Protection"],
                ["Standard", "Woodora Quality"],
              ].map(([label, value], index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 1.15 + index * 0.1,
                  }}
                >
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                    {label}
                  </p>

                  <p className="mt-1 text-xs text-white/75">
                    {value}
                  </p>
                </motion.div>
              ))}

            </div>

            <Link
              to="/products/steel-doors"
              className="group flex w-fit items-center gap-3 text-xs font-medium text-white"
            >
              Explore Steel Doors

              <motion.span
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5"
                whileHover={{
                  backgroundColor: "rgb(196 181 253)",
                  color: "rgb(24 24 27)",
                  scale: 1.08,
                }}
                transition={{ duration: 0.25 }}
              >
                <motion.span
                  whileHover={{ rotate: 45 }}
                  transition={{ duration: 0.25 }}
                >
                  <ArrowUpRight size={15} />
                </motion.span>
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>

      
      <motion.div
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/30 lg:flex"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.4,
        }}
      >
        <span className="text-[8px] uppercase tracking-[0.3em]">
          Discover
        </span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseHero;