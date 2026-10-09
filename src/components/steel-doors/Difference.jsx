import { motion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";

const Difference = () => {
  const points = [
    {
      number: "01",
      title: "Purpose",
      text: "Every detail begins with how the furniture will actually be used.",
    },
    {
      number: "02",
      title: "Precision",
      text: "Thoughtful construction, accurate dimensions and dependable hardware.",
    },
    {
      number: "03",
      title: "Durability",
      text: "Built to handle everyday use without compromising its character.",
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
        ease: "easeOut",
      },
    },
  };

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeRight = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const viewport = {
    once: true,
    amount: 0.2,
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto">

        
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid gap-10 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">

            <div className="mb-5 flex items-center gap-3">
              <motion.span
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 40, opacity: 1 }}
                viewport={viewport}
                transition={{ duration: 0.6 }}
                className="h-px bg-primary-600"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Why Woodora
              </span>
            </div>

            <h2 className="max-w-4xl font-heading text-4xl font-medium leading-[0.98] tracking-tight text-text sm:text-5xl lg:text-7xl">
              More than steel.
              <span className="block text-primary-600">
                It's peace of mind.
              </span>
            </h2>

          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-7 text-text-muted sm:text-base">
              Furniture shouldn't simply occupy a room. It should make the
              room feel organised, dependable and complete.
            </p>
          </div>
        </motion.div>

        
        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12">

          
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="relative overflow-hidden rounded-[2rem] lg:col-span-7"
          >
            <img
              src="https://Woodorafurnitures.in/assets/chotti_rani_2-D4b5HlO5.png"
              alt="Woodora furniture"
              className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[620px]"
            />

            
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute bottom-7 left-7 right-7 sm:bottom-9 sm:left-9 sm:right-9"
            >
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-300">
                Designed for everyday life
              </span>

              <h3 className="mt-3 max-w-md font-heading text-3xl font-medium leading-tight text-white sm:text-4xl">
                Strength with
                <span className="text-primary-300"> character.</span>
              </h3>
            </motion.div>

            
            <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/10 text-[10px] text-white backdrop-blur-md">
              01
            </div>
          </motion.div>

          
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-col rounded-[2rem] border border-border bg-white p-7 sm:p-9 lg:col-span-5 lg:p-11"
          >

            <div className="flex items-start justify-between">

              <div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-600">
                  The Woodora Difference
                </span>

                <h3 className="mt-6 font-heading text-3xl font-medium leading-tight text-text sm:text-4xl">
                  Strong enough for
                  <span className="text-primary-600">
                    {" "}real life.
                  </span>
                </h3>
              </div>

              <motion.div
                whileHover={{
                  rotate: 45,
                  scale: 1.08,
                }}
                transition={{ duration: 0.3 }}
                className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700 sm:flex"
              >
                <ArrowUpRight size={17} />
              </motion.div>

            </div>

            <p className="mt-6 text-sm leading-7 text-text-muted">
              We don't design furniture simply to look impressive in a
              showroom. We think about what happens after it reaches your
              home — daily opening and closing, changing seasons, heavy
              storage, moving rooms and years of everyday use.
            </p>

            
            <div className="mt-10 divide-y divide-border border-y border-border">

              {points.map((point, index) => (
                <motion.div
                  key={point.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="group flex gap-5 py-5"
                >

                  <span className="pt-1 text-[9px] font-medium tracking-[0.2em] text-text-muted">
                    {point.number}
                  </span>

                  <div className="flex-1">

                    <div className="flex items-center justify-between gap-4">

                      <h4 className="font-heading text-lg font-medium text-text">
                        {point.title}
                      </h4>

                      <motion.span
                        whileHover={{
                          scale: 1.12,
                          rotate: 8,
                        }}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white"
                      >
                        <Check size={12} />
                      </motion.span>

                    </div>

                    <p className="mt-2 max-w-sm text-xs leading-5 text-text-muted">
                      {point.text}
                    </p>

                  </div>

                </motion.div>
              ))}

            </div>

            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-auto pt-10"
            >
              <div className="rounded-2xl bg-primary-50 p-5">

                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-primary-700">
                  Our Approach
                </p>

                <p className="mt-3 font-heading text-lg leading-relaxed text-text">
                  Built to work beautifully.
                  <span className="text-text-muted">
                    {" "}Made to stay dependable.
                  </span>
                </p>

              </div>
            </motion.div>

          </motion.div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
          className="mt-12 flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between lg:mt-16"
        >

          <p className="max-w-2xl font-heading text-xl leading-relaxed text-text sm:text-2xl">
            Good furniture doesn't ask for attention.
            <span className="text-text-muted">
              {" "}It earns your trust.
            </span>
          </p>

          <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-primary-700">
            <motion.span
              animate={{
                scale: [1, 1.25, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-primary-600"
            />

            Woodora Standard
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Difference;