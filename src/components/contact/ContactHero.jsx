import {
  ArrowDown,
  
  Clock3,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";


const ContactHero = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@Woodora.com",
      href: "mailto:hello@Woodora.com",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Haryana, India",
      href: "#location",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto">

        
        <div className="mb-10 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
              Contact Woodora
            </span>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.25em] text-text-muted sm:block">
            Let's talk
          </span>

        </div>

        
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

          
          <div className="lg:col-span-8">

            <h1 className="max-w-5xl font-heading text-5xl font-medium leading-[0.92] tracking-tight text-text sm:text-6xl lg:text-8xl">

              Let's create a space
              <span className="block text-primary-600">
                you'll love coming home to.
              </span>

            </h1>

          </div>

          
          <div className="lg:col-span-3 lg:col-start-10 lg:pb-2">

            <p className="text-sm leading-7 text-text-muted sm:text-base">
              Looking for the right wardrobe, steel furniture, or a solution
              designed around your space? Tell us what you have in mind.
            </p>

            <a
              href="#contact-form"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-medium text-primary-700"
            >
              Start a conversation

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
                <ArrowDown
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </span>
            </a>

          </div>

        </div>

        
        <div className="mt-14 overflow-hidden rounded-[2rem] bg-primary-900 text-white sm:mt-20">

          <div className="grid lg:grid-cols-12">

            
            <div className="relative overflow-hidden p-7 sm:p-10 lg:col-span-5 lg:p-12">

              
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-primary-300/10" />

              <div className="relative">

                <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-300">
                  We're here to help
                </span>

                <h2 className="mt-8 max-w-sm font-heading text-3xl font-medium leading-tight sm:text-4xl">
                  From choosing a piece
                  <span className="text-primary-300">
                    {" "}to bringing it home.
                  </span>
                </h2>

                <p className="mt-5 max-w-sm text-sm leading-7 text-white/50">
                  Speak with our team about products, customization, delivery,
                  installation, or anything else you need help with.
                </p>

              </div>

              
              <div className="relative mt-12 flex items-center gap-3 border-t border-white/10 pt-6">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-primary-300">
                  <Clock3 size={16} strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-xs font-medium text-white">
                    Mon — Sat
                  </p>

                  <p className="mt-0.5 text-[10px] text-white/40">
                    10:00 AM — 7:00 PM
                  </p>
                </div>

              </div>

            </div>

            
            <div
              id="contact-form"
              className="bg-white p-7 text-text sm:p-10 lg:col-span-7 lg:p-12"
            >

              <div className="flex flex-col justify-between gap-10">

                <div>

                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-600">
                    Get in touch
                  </p>

                  <h3 className="mt-3 font-heading text-2xl font-medium sm:text-3xl">
                    Tell us what you need.
                  </h3>

                </div>

                
                <div className="grid gap-3 sm:grid-cols-3">

                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="group rounded-2xl border border-border p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-soft"
                      >

                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-colors duration-300 group-hover:bg-primary-700 group-hover:text-white">
                          <Icon size={16} strokeWidth={1.5} />
                        </div>

                        <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                          {item.label}
                        </p>

                        <p className="mt-2 break-words text-xs font-medium text-text">
                          {item.value}
                        </p>

                      </a>
                    );
                  })}

                </div>

                
                <div className="flex flex-col gap-5 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">

                  <p className="max-w-sm text-xs leading-5 text-text-muted">
                    Prefer a quick conversation? Send us your requirements and
                    our team will get back to you.
                  </p>

                  
                 

                </div>

              </div>

            </div>

          </div>
        </div>

        
        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-text-muted">
            Furniture · Storage · Custom Solutions
          </p>

          <p className="font-heading text-lg text-text">
            Good spaces start with a good conversation.
          </p>

        </div>

      </div>
    </section>
  );
};

export default ContactHero;