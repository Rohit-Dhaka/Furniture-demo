

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const sections = [
    {
      number: "01",
      title: "Information We Collect",
      content:
        "When you interact with Woodora, we may collect information such as your name, phone number, email address, delivery details and information you provide when making an enquiry or purchase.",
    },
    {
      number: "02",
      title: "How We Use Information",
      content:
        "We use your information to process enquiries and orders, arrange deliveries, provide customer support and improve our products and services.",
    },
    {
      number: "03",
      title: "Information Protection",
      content:
        "We take reasonable measures to protect the information shared with us and limit access to information to people who need it for legitimate business purposes.",
    },
    {
      number: "04",
      title: "Third-Party Services",
      content:
        "Some services such as payment processing, delivery and website analytics may be provided by trusted third parties. These services may process information according to their own privacy policies.",
    },
    {
      number: "05",
      title: "Your Choices",
      content:
        "You may contact us if you want to update your personal information, ask questions about how it is used or request clarification regarding your data.",
    },
  ];

  return (
    <main className="bg-background">

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-900 text-white">
        <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/10" />

        <div className="container mx-auto py-20 sm:py-24 lg:py-28">

          <Link
            to="/"
            className="group mb-12 inline-flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-white"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to Woodora
          </Link>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

            <div className="lg:col-span-8">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-primary-300" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-primary-300">
                  Your Privacy
                </span>
              </div>

              <h1 className="max-w-4xl font-heading text-4xl font-medium leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">
                Privacy that is
                <span className="text-primary-300"> simple & clear.</span>
              </h1>

            </div>

            <div className="lg:col-span-4">

              <div className="flex items-center gap-4 border-t border-white/10 pt-5">
                <LockKeyhole
                  size={20}
                  className="text-primary-300"
                  strokeWidth={1.5}
                />

                <p className="text-sm leading-6 text-white/50">
                  We respect your information and aim to be transparent about
                  how it is collected and used.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto">

          <div className="grid gap-10 lg:grid-cols-12">

            {/* Side */}
            <aside className="lg:col-span-3">

              <div className="sticky top-28">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <ShieldCheck size={21} strokeWidth={1.5} />
                </div>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary-700">
                  Privacy Policy
                </p>

                <p className="mt-3 text-xs leading-5 text-text-muted">
                  Last updated: October 2026
                </p>

              </div>

            </aside>

            {/* Sections */}
            <div className="lg:col-span-8 lg:col-start-5">

              <div className="space-y-0">

                {sections.map((section) => (
                  <article
                    key={section.number}
                    className="group border-t border-border py-8 sm:py-10"
                  >

                    <div className="grid gap-5 sm:grid-cols-[60px_1fr]">

                      <span className="text-[10px] font-medium tracking-[0.2em] text-text-muted">
                        {section.number}
                      </span>

                      <div>

                        <h2 className="font-heading text-2xl font-medium text-text sm:text-3xl">
                          {section.title}
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
                          {section.content}
                        </p>

                      </div>

                    </div>

                  </article>
                ))}

              </div>

              {/* Note */}
              <div className="mt-6 rounded-2xl bg-primary-50 p-6 sm:p-7">

                <div className="flex gap-4">

                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-primary-700"
                  />

                  <div>
                    <h3 className="text-sm font-semibold text-text">
                      Questions about your privacy?
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-text-muted">
                      If you have any questions about this policy or your
                      information, please contact our team.
                    </p>

                    <Link
                      to="/contact"
                      className="group mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary-700"
                    >
                      Contact Woodora
                      <ArrowUpRight
                        size={13}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default PrivacyPolicy;