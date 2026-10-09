import {
  ArrowUpRight,
  Clock3,
  Mail,
  MapPin,
  Navigation,
  Phone,
} from "lucide-react";

const ContactDetails = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto">

        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-7">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary-500" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Get In Touch
              </span>
            </div>

            <h2 className="max-w-3xl font-heading text-4xl font-medium leading-[0.95] tracking-tight text-text sm:text-5xl lg:text-7xl">
              Let's create something
              <span className="block text-primary-600">
                beautiful.
              </span>
            </h2>

          </div>

          <div className="lg:col-span-4 lg:col-start-9">

            <p className="text-sm leading-7 text-text-muted sm:text-base">
              Whether you're planning a new wardrobe, looking for customised
              storage, or simply exploring our collection, we'd love to hear
              from you.
            </p>

          </div>

        </div>

        {/* Main Contact Layout */}
        <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-12">

          {/* LEFT — Contact Information */}
          <div className="rounded-[2rem] bg-primary-900 p-7 text-white sm:p-9 lg:col-span-4 lg:p-10">

            <div className="flex h-full flex-col">

              <div>

                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-300">
                  Woodora
                </span>

                <h3 className="mt-5 max-w-xs font-heading text-3xl font-medium leading-tight sm:text-4xl">
                  Come visit.
                  <span className="block text-primary-300">
                    Let's talk.
                  </span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/50">
                  Visit our location, speak with our team and explore our
                  furniture and storage solutions in person.
                </p>

              </div>

              {/* Contact Items */}
              <div className="mt-10 space-y-6">

                {/* Location */}
                <div className="flex gap-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary-300">
                    <MapPin size={16} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                      Our Location
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/75">
                      Woodora Folding Furniture Pvt Ltd
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/45">
                      RIICO Industrial Area, Plot No. F-8,
                      Taranagar, Rajasthan - 331304
                    </p>
                  </div>

                </div>

                {/* Phone */}
                <div className="flex gap-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary-300">
                    <Phone size={16} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                      Call Us
                    </p>

                    <a
                      href="tel:+918094115249"
                      className="mt-2 block text-xs font-medium text-white hover:text-primary-300"
                    >
                      +91 12345 67890
                    </a>

                    <p className="mt-1 text-[10px] text-white/40">
                      Customer Support: +91 94133 61523
                    </p>
                  </div>

                </div>

                {/* Email */}
                <div className="flex gap-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-primary-300">
                    <Mail size={16} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                      Email Us
                    </p>

                    <a
                      href="mailto:woodora@gmail.com"
                      className="mt-2 block text-xs font-medium text-white hover:text-primary-300"
                    >
                      woodora@gmail.com
                    </a>
                  </div>

                </div>

              </div>

              {/* Hours */}
              <div className="mt-auto border-t border-white/10 pt-6">

                <div className="flex items-center gap-3">

                  <Clock3
                    size={16}
                    strokeWidth={1.5}
                    className="text-primary-300"
                  />

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.2em] text-white/40">
                      Opening Hours
                    </p>

                    <p className="mt-1 text-xs text-white/75">
                      Mon – Sat · 10:00 AM – 7:00 PM
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* RIGHT — MAP */}
          <div
            id="location"
            className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-border bg-white lg:col-span-8"
          >

            {/* Map */}
            <iframe
              title="Woodora Folding Furniture Pvt Ltd Location"
              src="https://www.google.com/maps?q=28.66424,75.0560896&z=17&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale-[15%]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Soft Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

            {/* Floating Location Card */}
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-7 sm:right-auto sm:w-[350px]">

              <div className="rounded-2xl border border-white/50 bg-white/95 p-5 shadow-2xl backdrop-blur-md">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <div className="flex items-center gap-2">

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                        <MapPin size={15} />
                      </span>

                      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-primary-700">
                        Find Us
                      </span>

                    </div>

                    <h3 className="mt-4 font-heading text-xl font-medium text-text">
                      Woodora Furniture
                    </h3>

                    <p className="mt-1 max-w-xs text-xs leading-5 text-text-muted">
                      RIICO Industrial Area, Plot No. F-8,
                      Taranagar, Rajasthan - 331304
                    </p>

                  </div>

                  <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-800 text-white sm:flex">
                    <Navigation size={15} />
                  </div>

                </div>

                {/* Map Button */}
                <a
                  href="https://www.google.com/maps/place/Woodora+Folding+Furniture+Pvt+Ltd/@28.66424,75.0535147,17z"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-5 flex items-center justify-between border-t border-border pt-4 text-xs font-medium text-primary-700"
                >
                  Open in Google Maps

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </span>
                </a>

              </div>

            </div>

            {/* Top Map Badge */}
            <div className="absolute right-5 top-5 hidden rounded-full border border-white/50 bg-white/90 px-4 py-2 shadow-lg backdrop-blur-md sm:block">

              <div className="flex items-center gap-2">

                <span className="h-2 w-2 rounded-full bg-green-500" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-text">
                  Visit Our Showroom
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Benefits */}
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

          {[
            "Personalised Consultation",
            "Custom Designs",
            "Professional Installation",
            "Trusted Quality",
          ].map((item, index) => (
            <div
              key={item}
              className="group flex items-center justify-between rounded-2xl border border-border bg-white px-5 py-4 transition-all duration-300 hover:border-primary-200 hover:shadow-soft"
            >

              <div className="flex items-center gap-3">

                <span className="text-[9px] font-medium tracking-[0.2em] text-primary-500">
                  0{index + 1}
                </span>

                <span className="text-xs font-medium text-text">
                  {item}
                </span>

              </div>

              <ArrowUpRight
                size={14}
                className="text-text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary-700"
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ContactDetails;