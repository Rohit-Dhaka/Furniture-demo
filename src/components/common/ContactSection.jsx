

import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "motion/react";

const ContactSection = () => {
  const contactDetails = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 12345 67890",
      href: "tel:+918094115249",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "woodora@gmail.com",
      href: "mailto:woodora@gmail.com",
    },
    {
      icon: Clock3,
      label: "Working Hours",
      value: "Mon - Sat · 10:00 AM - 7:00 PM",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "New Delhi, India",
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
        ease: [0.22, 1, 0.36, 1],
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
    <section className="bg-background py-20 sm:py-24 lg:py-28 overflow-hidden">
      <div className="container mx-auto">

        
        <motion.div
          className="grid gap-8 border-b border-border pb-10 lg:grid-cols-12 lg:items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={fadeLeft}
            className="lg:col-span-7"
          >
            <div className="mb-5 flex items-center gap-3">
              <motion.span
                className="h-px w-8 bg-primary-600"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Contact Woodora
              </span>
            </div>

            <h2 className="max-w-3xl font-heading text-4xl font-medium leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-6xl">
              Let's create a space
              <span className="block text-primary-600">
                you'll love coming home to.
              </span>
            </h2>
          </motion.div>

          <motion.p
            variants={fadeRight}
            className="max-w-md text-sm leading-7 text-text-muted sm:text-base lg:col-span-4 lg:col-start-9"
          >
            Have a question about our furniture or need help choosing the
            right piece? Talk to our team and we'll be happy to help.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-10 grid gap-4 lg:grid-cols-12">

          {/* Contact Details */}
          <motion.div
            className="rounded-[2rem] bg-primary-900 p-7 text-white sm:p-9 lg:col-span-5 lg:p-10"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.3em] text-primary-300">
                Get In Touch
              </span>

              <motion.span
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5"
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
                <ArrowUpRight size={15} />
              </motion.span>
            </div>

            <h3 className="mt-12 max-w-sm font-heading text-3xl font-medium leading-tight sm:text-4xl">
              We're here to
              <span className="text-primary-300"> help.</span>
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/50">
              Whether you're furnishing one room or an entire home, our team
              is ready to guide you.
            </p>

            {/* Details */}
            <motion.div
              className="mt-10 space-y-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {contactDetails.map((item) => {
                const Icon = item.icon;

                const content = (
                  <motion.div
                    variants={fadeUp}
                    whileHover={{ x: 5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="group flex items-center gap-4"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary-300 transition-colors group-hover:border-primary-300/30 group-hover:bg-primary-300 group-hover:text-primary-900">
                      <Icon size={16} strokeWidth={1.5} />
                    </span>

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                        {item.label}
                      </p>

                      <p className="mt-1 text-sm text-white/80">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Map + Quick Contact */}
          <motion.div
            className="grid gap-4 lg:col-span-7"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >

            {/* Map */}
            <motion.div
              className="group relative min-h-[360px] overflow-hidden rounded-[2rem] border border-border bg-white"
              whileHover={{ scale: 1.01 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <iframe
                title="Woodora Location"
                src="https://www.google.com/maps?q=New+Delhi,+India&output=embed"
                className="absolute inset-0 h-full w-full border-0 grayscale-[20%] transition-all duration-700 group-hover:grayscale-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map Label */}
              <motion.div
                className="absolute left-5 top-5 rounded-xl border border-white/60 bg-white/90 px-4 py-3 shadow-soft backdrop-blur-md"
                initial={{
                  opacity: 0,
                  y: -15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                }}
              >
                <div className="flex items-center gap-2">
                  <MapPin
                    size={15}
                    className="text-primary-700"
                  />

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary-700">
                      Our Location
                    </p>

                    <p className="mt-0.5 text-xs font-medium text-text">
                      New Delhi, India
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Quick Contact */}
            <div className="grid gap-3 sm:grid-cols-2">

              {/* Phone */}
              <motion.a
                href="tel:+918094115249"
                className="group flex items-center justify-between rounded-2xl border border-border bg-white p-5 transition-colors duration-300 hover:border-primary-200"
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-text-muted">
                    Prefer a call?
                  </p>

                  <p className="mt-2 text-sm font-medium text-text">
                    +91 12345 67890
                  </p>
                </div>

                <motion.span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-700 group-hover:bg-primary-700 group-hover:text-white"
                  whileHover={{
                    rotate: 10,
                  }}
                >
                  <Phone size={15} />
                </motion.span>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:woodora@gmail.com"
                className="group flex items-center justify-between rounded-2xl border border-border bg-white p-5 transition-colors duration-300 hover:border-primary-200"
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-text-muted">
                    Prefer email?
                  </p>

                  <p className="mt-2 text-sm font-medium text-text">
                    woodora@gmail.com
                  </p>
                </div>

                <motion.span
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-700 group-hover:bg-primary-700 group-hover:text-white"
                  whileHover={{
                    rotate: 10,
                  }}
                >
                  <Mail size={15} />
                </motion.span>
              </motion.a>

            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          className="mt-10 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between"
          initial={{
            opacity: 0,
            y: 20,
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
            duration: 0.6,
          }}
        >
          <p className="text-xs text-text-muted">
            Available Monday to Saturday · 10:00 AM to 7:00 PM
          </p>

          <motion.span
            className="flex items-center gap-2 text-xs font-medium text-primary-700"
            whileHover={{
              x: 4,
            }}
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-primary-600"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            We'd love to hear from you.
          </motion.span>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;