import { motion } from "motion/react";
import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

const WhyChoose = () => {
  const features = [
    {
      number: "01",
      title: "Engineered Strength",
      description:
        "Every product begins with a strong structure designed for everyday pressure, movement and long-term use.",
      icon: ShieldCheck,
    },
    {
      number: "02",
      title: "Made to Last",
      description:
        "From the main body to the smallest hardware detail, every component is selected for dependable performance.",
      icon: Wrench,
    },
    {
      number: "03",
      title: "Quality at Every Step",
      description:
        "Fabrication, finishing and inspection are treated as equally important parts of the final product.",
      icon: Check,
    },
    {
      number: "04",
      title: "Made With Care",
      description:
        "Practical storage meets refined detailing so every piece feels functional, comfortable and considered.",
      icon: Sparkles,
    },
  ];

  const craftDetails = [
    {
      number: "01",
      label: "Craft",
      title: "Built with intention.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
    },
    {
      number: "02",
      label: "Detail",
      title: "Details you can feel.",
      image:
        "https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=1000&q=85",
    },
    {
      number: "03",
      label: "Finish",
      title: "Made to age beautifully.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    },
  ];

  const viewport = {
    once: true,
    amount: 0.15,
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto">

        
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid gap-8 lg:grid-cols-12 lg:items-end"
        >
          <div className="lg:col-span-7">

            <div className="mb-5 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="h-px bg-primary-600"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Why Choose Woodora
              </span>
            </div>

            <h2 className="max-w-4xl font-heading text-4xl font-medium leading-[1.02] tracking-tight text-text sm:text-5xl lg:text-6xl">
              The difference is in
              <span className="text-primary-600"> every detail.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-7 text-text-muted sm:text-base">
              From the strength of the steel to the smoothness of every
              finish, we build furniture to look beautiful today and perform
              beautifully for years.
            </p>
          </div>
        </motion.div>

        
        <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-12">

          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[2rem] bg-primary-900 p-7 text-white sm:p-10 lg:col-span-4 lg:min-h-[620px] lg:p-11"
          >
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-primary-300/10"
            />

            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-primary-300/10" />

            <div className="relative flex h-full flex-col">

              <span className="text-[9px] uppercase tracking-[0.3em] text-primary-300">
                The Woodora Difference
              </span>

              <div className="mt-20">

                <p className="font-heading text-4xl font-medium leading-tight sm:text-5xl">
                  Strong enough
                  <span className="block text-primary-300">
                    for real life.
                  </span>
                </p>

                <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
                  We don't design furniture simply to look impressive in a
                  showroom. We think about what happens after it reaches your
                  home — everyday use, changing seasons, heavy storage and
                  years of living.
                </p>
              </div>

              
              <div className="mt-auto pt-16">

                <div className="flex items-end gap-3">

                  <motion.span
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewport}
                    transition={{
                      duration: 0.6,
                      delay: 0.3,
                    }}
                    className="font-heading text-6xl font-medium leading-none text-primary-300"
                  >
                    10+
                  </motion.span>

                  <span className="mb-1 text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Years of craftsmanship
                  </span>
                </div>

                <div className="mt-7 h-px bg-white/10" />

                <p className="mt-4 text-[9px] uppercase tracking-[0.25em] text-white/30">
                  Purpose · Precision · Durability
                </p>
              </div>
            </div>
          </motion.div>

          
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-8">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-white p-6 transition-all duration-500 hover:border-primary-200 hover:shadow-soft sm:p-7"
                >

                  
                  <div className="flex items-start justify-between">

                    <span className="text-[9px] font-medium tracking-[0.25em] text-text-muted">
                      {feature.number}
                    </span>

                    <motion.div
                      whileHover={{
                        scale: 1.1,
                        rotate: 8,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-all duration-500 group-hover:bg-primary-700 group-hover:text-white"
                    >
                      <Icon size={17} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  
                  <div className="mt-12">

                    <h3 className="font-heading text-xl font-medium text-text">
                      {feature.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-xs leading-6 text-text-muted">
                      {feature.description}
                    </p>
                  </div>

                  
                  <div className="mt-10 flex items-center justify-between">

                    <motion.span
                      initial={{ width: 32 }}
                      whileHover={{ width: 64 }}
                      className="h-px bg-primary-300 transition-colors duration-500 group-hover:bg-primary-600"
                    />

                    <ArrowUpRight
                      size={16}
                      className="text-text-muted transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary-700"
                    />
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
          className="mt-20 border-t border-border pt-16 lg:mt-28 lg:pt-20"
        >

          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-7">

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Inside The Craft
              </span>

              <h3 className="mt-5 font-heading text-3xl font-medium leading-tight text-text sm:text-4xl lg:text-5xl">
                Designed with
                <span className="text-primary-600"> purpose.</span>
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-text-muted lg:col-span-4 lg:col-start-9">
              Good furniture isn't only about what you see. It's about what
              you feel every time you open a door, use a shelf or reach for
              something you've stored away.
            </p>
          </div>

          
          <div className="mt-10 grid gap-4 md:grid-cols-3">

            {craftDetails.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={viewport}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-[1.75rem] bg-primary-900"
              >

                <div className="relative h-[380px] overflow-hidden">

                  <motion.img
                    src={item.image}
                    alt={item.title}
                    whileHover={{ scale: 1.06 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="h-full w-full object-cover opacity-80"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  
                  <span className="absolute left-5 top-5 text-[9px] tracking-[0.25em] text-white/50">
                    {item.number}
                  </span>

                  
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.15,
                    }}
                    className="absolute bottom-0 left-0 right-0 p-6"
                  >
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-primary-300">
                      {item.label}
                    </p>

                    <h4 className="mt-2 font-heading text-2xl text-white">
                      {item.title}
                    </h4>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
          className="mt-14 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"
        >

          <div>

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-700">
              Our Standard
            </p>

            <p className="mt-2 font-heading text-xl text-text sm:text-2xl">
              Strong materials.
              <span className="text-text-muted">
                {" "}Thoughtful design.
              </span>
            </p>
          </div>

          <Link
            to="/products"
            className="group flex w-fit items-center gap-3 text-sm font-medium text-primary-700"
          >
            Explore Collection

            <motion.span
              whileHover={{
                rotate: 45,
                scale: 1.05,
              }}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-200 transition-colors duration-300 group-hover:bg-primary-700 group-hover:text-white"
            >
              <ArrowUpRight size={14} />
            </motion.span>
          </Link>

        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;