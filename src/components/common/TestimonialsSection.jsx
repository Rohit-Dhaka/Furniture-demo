

import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Aarav Sharma",
      location: "New Delhi",
      role: "Homeowner",
      text: "The quality is genuinely impressive. The wardrobe looks elegant, feels solid and fits perfectly into our bedroom.",
    },
    {
      name: "Neha Kapoor",
      location: "Gurugram",
      role: "Homeowner",
      text: "I loved how simple the entire experience was. The design feels premium and the finishing is exactly what we wanted.",
    },
    {
      name: "Rohan Mehta",
      location: "Jaipur",
      role: "Customer",
      text: "The furniture feels much better in person. Clean design, good finishing and very practical for everyday use.",
    },
    {
      name: "Priya Verma",
      location: "Chandigarh",
      role: "Homeowner",
      text: "We purchased furniture for our new home and everything felt thoughtfully designed. Very happy with the overall experience.",
    },
    {
      name: "Kunal Arora",
      location: "Mumbai",
      role: "Customer",
      text: "The quality, design and attention to detail stood out immediately. It feels like furniture made to stay for years.",
    },
    {
      name: "Simran Kaur",
      location: "Ambala",
      role: "Homeowner",
      text: "Beautiful furniture with a very modern feel. The pieces look elegant without making the room feel crowded.",
    },
  ];

  return (
    <section className="overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-5 flex items-center gap-3">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="h-px bg-primary-600"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Testimonials
              </span>
            </div>

            <h2 className="max-w-2xl font-heading text-4xl font-medium leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-6xl">
              Loved by people.
              <span className="block text-primary-600">
                Made for their homes.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-text-muted sm:text-base lg:pb-1">
            Real experiences from customers who chose Woodora for their
            everyday spaces.
          </p>
        </motion.div>

        
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          allowTouchMove={true}
          grabCursor={true}
          speed={7000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={16}
          slidesPerView={1.1}
          breakpoints={{
            640: {
              slidesPerView: 1.8,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2.3,
              spaceBetween: 18,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3.2,
              spaceBetween: 20,
            },
          }}
          className="!overflow-visible"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={`${testimonial.name}-${index}`}
              className="!h-auto"
            >
              <motion.article
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group flex h-full min-h-[310px] flex-col rounded-[1.75rem] border border-border bg-white p-6 transition-colors duration-500 hover:border-primary-200 hover:shadow-soft sm:p-7"
              >
                {/* Top */}
                <div className="flex items-start justify-between">

                  {/* Stars */}
                  <div className="flex gap-1 text-primary-600">
                    {[1, 2, 3, 4, 5].map((star, starIndex) => (
                      <motion.div
                        key={star}
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: 0.2 + starIndex * 0.06,
                        }}
                      >
                        <Star
                          size={13}
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <motion.span
                    whileHover={{
                      rotate: -8,
                      scale: 1.08,
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-colors duration-300 group-hover:bg-primary-700 group-hover:text-white"
                  >
                    <Quote size={15} />
                  </motion.span>
                </div>

                {/* Quote */}
                <blockquote className="mt-8 font-heading text-lg leading-relaxed text-text sm:text-xl">
                  “{testimonial.text}”
                </blockquote>

                {/* Customer */}
                <div className="mt-auto flex items-center gap-3 border-t border-border pt-6">

                  {/* Avatar */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 font-heading text-sm font-medium text-primary-800"
                  >
                    {testimonial.name.charAt(0)}
                  </motion.div>

                  <div>
                    <h3 className="text-sm font-semibold text-text">
                      {testimonial.name}
                    </h3>

                    <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-text-muted">
                      {testimonial.role} · {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom */}
        <motion.div
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
            delay: 0.2,
          }}
          className="mt-10 flex items-center justify-between border-t border-border pt-6"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-text-muted">
            Trusted by homeowners across India
          </p>

          <div className="hidden items-center gap-2 sm:flex">
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1.5 rounded-full bg-primary-600"
            />

            <span className="text-xs text-text-muted">
              Swipe to explore
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsSection;