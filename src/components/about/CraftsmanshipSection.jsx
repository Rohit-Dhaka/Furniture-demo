

import {
  BadgeCheck,
  Hammer,
  Layers3,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const CraftsmanshipSection = () => {
  const features = [
    {
      number: "01",
      title: "Premium Materials",
      description:
        "We carefully select materials that balance strength, comfort and everyday durability.",
      icon: Layers3,
    },
    {
      number: "02",
      title: "Detailed Finishing",
      description:
        "Every surface and edge is finished with attention to detail for a refined, lasting look.",
      icon: ShieldCheck,
    },
    {
      number: "03",
      title: "Precision Craftsmanship",
      description:
        "From measurements to assembly, every detail is handled with accuracy and consistency.",
      icon: Ruler,
    },
    {
      number: "04",
      title: "Made With Care",
      description:
        "Our furniture is crafted through a careful process where quality is checked at every stage.",
      icon: Hammer,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 45,
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

  return (
    <section className="relative overflow-hidden bg-primary-900 py-20 text-white sm:py-24 lg:py-32">
      <div className="container mx-auto">

        
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-8 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                }}
                className="h-px bg-primary-300"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-300">
                Our Craftsmanship
              </span>
            </motion.div>

            <h2 className="max-w-3xl font-heading text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
              Built for the
              <span className="text-primary-300"> long run.</span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-7 text-white/55 sm:text-base lg:col-span-4 lg:col-start-9">
            Quality isn't just about how furniture looks on day one. It's
            about how it feels, performs and ages with your home.
          </p>
        </motion.div>

        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-14 border-y border-white/10 lg:mt-20"
        >
          <div className="grid lg:grid-cols-2">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.number}
                  variants={itemVariants}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.025)",
                  }}
                  className={`group relative p-7 sm:p-9 lg:p-10 ${
                    index % 2 !== 0
                      ? "lg:border-l lg:border-white/10"
                      : ""
                  } ${
                    index >= 2
                      ? "border-t border-white/10"
                      : ""
                  }`}
                >

                  
                  <div className="flex items-center justify-between">

                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.2,
                      }}
                      className="text-[10px] font-medium tracking-[0.25em] text-white/30"
                    >
                      {feature.number}
                    </motion.span>

                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 8,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-primary-300 transition-colors duration-300 group-hover:border-primary-300 group-hover:bg-primary-300 group-hover:text-primary-900"
                    >
                      <Icon size={17} strokeWidth={1.5} />
                    </motion.div>

                  </div>

                  
                  <div className="mt-12">

                    <div className="flex items-center gap-3">

                      <h3 className="font-heading text-2xl font-medium sm:text-3xl">
                        {feature.title}
                      </h3>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.35,
                        }}
                      >
                        <BadgeCheck
                          size={17}
                          className="shrink-0 text-primary-300"
                        />
                      </motion.div>

                    </div>

                    <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
                      {feature.description}
                    </p>

                  </div>

                  
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.45,
                    }}
                    className="mt-8 flex items-center gap-2"
                  >
                    <motion.span
                      animate={{
                        scale: [1, 1.35, 1],
                        opacity: [1, 0.6, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-primary-300"
                    />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-primary-300">
                      Quality Checked
                    </span>
                  </motion.div>

                  
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute bottom-0 left-0 h-px bg-primary-300"
                  />

                </motion.div>
              );
            })}

          </div>
        </motion.div>

        
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
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >

          <p className="max-w-2xl font-heading text-xl leading-relaxed text-white sm:text-2xl">
            Good furniture should age gracefully.
            <span className="text-white/35">
              {" "}Not become disposable.
            </span>
          </p>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="flex items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/35"
          >
            <span className="h-px w-8 bg-primary-300/50" />
            Crafted with intention
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default CraftsmanshipSection;