import {
  ArrowUpRight,
  Check,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const ContactFormSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto">

        
        <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-12 lg:items-end lg:pb-14">

          <div className="lg:col-span-7">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary-600" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Let's Talk
              </span>
            </div>

            <h2 className="max-w-4xl font-heading text-4xl font-medium leading-[1.02] tracking-tight text-text sm:text-5xl lg:text-7xl">
              Your space deserves
              <span className="block text-primary-600">
                thoughtful design.
              </span>
            </h2>

          </div>

          <div className="lg:col-span-4 lg:col-start-9">

            <p className="text-sm leading-7 text-text-muted sm:text-base">
              Tell us what you're looking for. Whether it's a wardrobe,
              storage solution or a custom requirement, we'll help you find
              the right fit for your space.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-medium uppercase tracking-[0.15em] text-primary-700">
              <span>Free Consultation</span>
              <span>•</span>
              <span>No Obligation</span>
            </div>

          </div>

        </div>

        
        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-12">

          
          <div className="flex flex-col rounded-[2rem] bg-primary-900 p-7 text-white sm:p-9 lg:col-span-5 lg:p-11">

            <div>

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-300">
                The First Step
              </span>

              <h3 className="mt-6 max-w-sm font-heading text-3xl font-medium leading-tight sm:text-4xl">
                Let's bring your
                <span className="text-primary-300">
                  {" "}vision to life.
                </span>
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                Share your requirements with us. We'll understand your needs,
                discuss the possibilities and guide you towards the right
                solution.
              </p>

            </div>

            
            <div className="mt-12 space-y-7 border-t border-white/10 pt-8">

              
              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary-300">
                  <Phone size={16} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Call Us
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    +91 12345 67890
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    Customer Support: +91 94133 61523
                  </p>
                </div>

              </div>

              
              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary-300">
                  <Mail size={16} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Email Us
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    woodora@gmail.com
                  </p>
                </div>

              </div>

              
              <div className="flex gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary-300">
                  <MapPin size={16} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                    Serving Across
                  </p>

                  <p className="mt-2 text-sm font-medium">
                    Pan India
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    Personalised guidance from start to finish
                  </p>
                </div>

              </div>

            </div>

            
            <div className="mt-auto pt-12">

              <div className="flex flex-wrap gap-2">

                {[
                  "Custom Designs",
                  "Professional Installation",
                  "Trusted Quality",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] uppercase tracking-wider text-white/50"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>

          
          <div className="rounded-[2rem] border border-border bg-white p-7 sm:p-9 lg:col-span-7 lg:p-11">

            <div className="flex items-start justify-between gap-5 border-b border-border pb-7">

              <div>
                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-600">
                  Your Details
                </span>

                <h3 className="mt-3 font-heading text-2xl font-medium text-text sm:text-3xl">
                  Tell us about your project.
                </h3>

                <p className="mt-2 max-w-md text-xs leading-5 text-text-muted">
                  A few details are all we need to start the conversation.
                </p>
              </div>

              <div className="hidden h-10 w-10 items-center justify-center rounded-full bg-primary-50 text-primary-700 sm:flex">
                <ArrowUpRight size={17} />
              </div>

            </div>

            <form className="mt-8 space-y-6">

              
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="mt-3 w-full border-b border-border bg-transparent px-0 pb-3 text-sm text-text outline-none placeholder:text-text-muted/60 focus:border-primary-600"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="mt-3 w-full border-b border-border bg-transparent px-0 pb-3 text-sm text-text outline-none placeholder:text-text-muted/60 focus:border-primary-600"
                  />
                </div>

              </div>

              
              <div className="grid gap-6 sm:grid-cols-2">

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-3 w-full border-b border-border bg-transparent px-0 pb-3 text-sm text-text outline-none placeholder:text-text-muted/60 focus:border-primary-600"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text">
                    City
                  </label>

                  <input
                    type="text"
                    placeholder="Your city"
                    className="mt-3 w-full border-b border-border bg-transparent px-0 pb-3 text-sm text-text outline-none placeholder:text-text-muted/60 focus:border-primary-600"
                  />
                </div>

              </div>

              
              <div>

                <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text">
                  What can we help you with?
                </label>

                <select
                  defaultValue=""
                  className="mt-3 w-full border-b border-border bg-transparent px-0 pb-3 text-sm text-text outline-none focus:border-primary-600"
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option>Wardrobe</option>
                  <option>Almirah</option>
                  <option>Storage Furniture</option>
                  <option>Custom Furniture</option>
                  <option>Bulk / Business Enquiry</option>
                  <option>Other</option>
                </select>

              </div>

              
              <div>

                <label className="text-[10px] font-semibold uppercase tracking-[0.15em] text-text">
                  Tell us more
                </label>

                <textarea
                  rows="4"
                  placeholder="Tell us about your space, requirements or dimensions..."
                  className="mt-3 w-full resize-none border-b border-border bg-transparent px-0 pb-3 text-sm leading-6 text-text outline-none placeholder:text-text-muted/60 focus:border-primary-600"
                />

              </div>

              
              <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-2">

                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <Check size={11} />
                  </span>

                  <span className="text-[10px] text-text-muted">
                    Your information stays private.
                  </span>

                </div>

                <button
                  type="submit"
                  className="group inline-flex w-fit items-center gap-3 rounded-full bg-primary-800 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-700"
                >
                  Start Conversation

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </span>
                </button>

              </div>

            </form>

          </div>

        </div>

        
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="font-heading text-lg text-text sm:text-xl">
            Thoughtfully designed.
            <span className="text-text-muted">
              {" "}Professionally crafted.
            </span>
          </p>

          <span className="text-[9px] uppercase tracking-[0.25em] text-text-muted">
            Woodora Furniture
          </span>

        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;