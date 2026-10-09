

import { ArrowUpRight, ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What's the standard delivery timeline?",
      answer:
        "Most in-stock wardrobes and almirahs ship within 5–7 business days. Customized pieces typically take 10–14 days depending on size and finish. Once your order is confirmed, our team will share the expected delivery date with you.",
    },
    {
      question: "Do you offer installation?",
      answer:
        "Yes. Installation support is available for selected products and locations. Our team will confirm the installation details when your order is finalized.",
    },
    {
      question: "What warranty comes with the furniture?",
      answer:
        "Our furniture is designed for long-term everyday use. Warranty coverage depends on the product and its components. The applicable warranty details are shared with you before your purchase.",
    },
    {
      question: "Can I customize the colour, size or add a locker?",
      answer:
        "Yes. Selected wardrobes and steel furniture can be customized based on size, colour, storage requirements and additional features such as lockers.",
    },
    {
      question: "Do you deliver outside Punjab and Haryana?",
      answer:
        "Yes. We offer delivery across India. Delivery availability, charges and timelines may vary depending on your location and the selected product.",
    },
    {
      question: "Is there a way to see the furniture before ordering?",
      answer:
        "Yes. You can contact our team to check showroom or product-viewing availability in your area before placing an order.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto">

        
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-7">

            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                <MessageCircle size={13} />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Need Help?
              </span>
            </div>

            <h2 className="max-w-3xl font-heading text-4xl font-medium leading-[1.02] tracking-tight text-text sm:text-5xl lg:text-7xl">
              We've got
              <span className="text-primary-600"> answers.</span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-7 text-text-muted sm:text-base lg:col-span-4 lg:col-start-9">
            From delivery and installation to customization and warranty,
            find answers to the questions customers ask most.
          </p>

        </div>

        
        <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-12">

          
          <div className="relative overflow-hidden rounded-[2rem] bg-primary-900 p-7 text-white sm:p-9 lg:col-span-4 lg:p-10">

            
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-primary-300/10" />

            <div className="relative flex h-full flex-col">

              <div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-300">
                  Woodora Information
                </span>

                <h3 className="mt-10 max-w-xs font-heading text-3xl font-medium leading-tight sm:text-4xl">
                  Everything you need
                  <span className="text-primary-300"> to know.</span>
                </h3>

                <p className="mt-5 max-w-sm text-sm leading-6 text-white/50">
                  Simple answers before you choose the right furniture for
                  your home.
                </p>
              </div>

              <div className="mt-auto pt-16">

                <div className="flex items-end gap-3">

                  <span className="font-heading text-5xl font-medium text-primary-300">
                    5000+
                  </span>

                  <span className="mb-1 text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Happy Homes
                  </span>

                </div>

                <div className="mt-7 h-px bg-white/10" />

                <p className="mt-5 text-[9px] uppercase tracking-[0.25em] text-white/35">
                  Trusted furniture · Thoughtful service
                </p>

              </div>

            </div>
          </div>

          
          <div className="lg:col-span-8">

            <div className="overflow-hidden rounded-[2rem] border border-border bg-white">

              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={faq.question}
                    className={`border-b border-border last:border-b-0 ${
                      isOpen ? "bg-primary-50/50" : "bg-white"
                    }`}
                  >

                    
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : index)
                      }
                      className="flex w-full items-center gap-5 px-6 py-6 text-left sm:px-8 sm:py-7"
                      aria-expanded={isOpen}
                    >

                      <span
                        className={`shrink-0 text-[9px] font-medium tracking-[0.2em] transition-colors ${
                          isOpen
                            ? "text-primary-600"
                            : "text-text-muted"
                        }`}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className={`flex-1 font-heading text-base font-medium sm:text-lg ${
                          isOpen
                            ? "text-primary-800"
                            : "text-text"
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 border-primary-600 bg-primary-700 text-white"
                            : "border-border text-text-muted"
                        }`}
                      >
                        <ChevronDown size={16} />
                      </span>

                    </button>

                    
                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 pb-7 pl-[4.25rem] pr-8 sm:px-8 sm:pb-8 sm:pl-[5.5rem]">

                          <p className="max-w-2xl text-sm leading-7 text-text-muted">
                            {faq.answer}
                          </p>

                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>

          </div>
        </div>

        
        <div className="mt-10 flex flex-col gap-6 rounded-[2rem] border border-border bg-white p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between lg:p-10">

          <div>

            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-600">
              Still have questions?
            </p>

            <h3 className="mt-3 font-heading text-2xl font-medium text-text sm:text-3xl">
              Talk to our furniture experts.
            </h3>

            <p className="mt-2 text-sm text-text-muted">
              Get help choosing the right furniture for your space.
            </p>

          </div>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-primary-800 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-700"
          >
            Contact Us

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default FaqSection;