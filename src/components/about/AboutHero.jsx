

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const AboutHero = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 35,
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

 

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
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

  return (
    <section className="relative overflow-hidden bg-background">
      
      <motion.div
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary-100/50 blur-3xl"
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-primary-100/60 blur-3xl"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto">

        <div className="grid min-h-[680px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-24">

          
          <motion.div
            className="relative z-10 lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >

            
            <motion.div
              variants={fadeUp}
              className="mb-7 flex items-center gap-3"
            >
              <motion.span
                className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700"
                whileHover={{
                  rotate: 45,
                  scale: 1.1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
              >
                <span className="text-xs">✦</span>
              </motion.span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                About Woodora
              </span>
            </motion.div>

            
            <motion.h1
              variants={fadeUp}
              className="max-w-4xl font-heading text-5xl font-medium leading-[0.98] tracking-tight text-text sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Furniture with
              <span className="block text-primary-600">
                a reason to belong.
              </span>
            </motion.h1>

            
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-sm leading-7 text-text-muted sm:text-base"
            >
              We create furniture that brings together thoughtful design,
              dependable craftsmanship and the everyday comfort of a
              well-made home.
            </motion.p>

          
            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 rounded-full bg-primary-800 px-5 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-primary-700"
              >
                Explore Collection

                <motion.span
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10"
                  whileHover={{
                    rotate: 45,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  <ArrowUpRight size={14} />
                </motion.span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-border px-5 py-3 text-sm font-medium text-text transition-all duration-300 hover:border-primary-300 hover:text-primary-700"
              >
                Talk to Us
              </Link>
            </motion.div>

            
            <motion.div
              variants={fadeUp}
              className="mt-14 grid max-w-lg grid-cols-3 border-y border-border py-5"
            >
              
              <motion.div
                whileHover={{ y: -3 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <p className="font-heading text-2xl font-medium text-text">
                  10+
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-text-muted">
                  Years
                </p>
              </motion.div>

              
              <motion.div
                className="border-l border-border pl-5"
                whileHover={{ y: -3 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <p className="font-heading text-2xl font-medium text-text">
                  5K+
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-text-muted">
                  Customers
                </p>
              </motion.div>

              
              <motion.div
                className="border-l border-border pl-5"
                whileHover={{ y: -3 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <p className="font-heading text-2xl font-medium text-text">
                  100+
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-text-muted">
                  Designs
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          
          <motion.div
            className="relative lg:col-span-5"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
          >

            
            <motion.div
              className="group relative overflow-hidden rounded-[2rem] bg-primary-100"
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
                alt="Woodora furniture interior"
                className="h-[500px] w-full object-cover sm:h-[580px]"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.04,
                }}
              />

              
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

              
              <motion.div
                className="absolute bottom-6 left-6 right-6 flex items-end justify-between"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                }}
              >
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                    Our Philosophy
                  </p>

                  <p className="mt-2 max-w-xs font-heading text-xl leading-tight text-white sm:text-2xl">
                    Simple spaces.
                    <br />
                    Meaningful living.
                  </p>
                </div>

                <motion.span
                  className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md sm:flex"
                  whileHover={{
                    rotate: 45,
                    scale: 1.1,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                  }}
                >
                  <ArrowUpRight size={16} />
                </motion.span>
              </motion.div>
            </motion.div>

            
            <motion.div
              className="absolute -bottom-7 -left-4 rounded-2xl border border-border bg-white p-5 shadow-card sm:-left-7 sm:p-6"
              initial={{
                opacity: 0,
                y: 30,
                x: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
                x: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
              }}
            >
              <div className="flex items-baseline gap-1">
                <span className="font-heading text-4xl font-medium text-primary-700">
                  10
                </span>

                <span className="text-xl font-medium text-primary-700">
                  +
                </span>
              </div>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-text-muted">
                Years of craftsmanship
              </p>
            </motion.div>

            
            <motion.div
              className="absolute -right-3 top-10 hidden lg:block"
              initial={{
                opacity: 0,
                x: 15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 1,
              }}
            >
              <span className="writing-mode-vertical rotate-180 text-[9px] font-medium uppercase tracking-[0.3em] text-text-muted">
                Designed · Crafted · Delivered
              </span>
            </motion.div>
          </motion.div>
        </div>

        
        <motion.div
          className="flex items-center justify-center border-t border-border py-6"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 1.1,
          }}
        >
          <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-text-muted">
            <span>Discover our story</span>

            <motion.span
              className="flex h-7 w-7 items-center justify-center rounded-full border border-border"
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={13} />
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;