

import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  FileCheck2,
  Scale,
} from "lucide-react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  const terms = [
    {
      number: "01",
      title: "Orders & Enquiries",
      content:
        "Product availability, pricing and specifications may change. An order is considered confirmed only after the required confirmation or payment has been completed.",
    },
    {
      number: "02",
      title: "Product Details",
      content:
        "We make reasonable efforts to display accurate product images, dimensions, colours and descriptions. Slight variations may occur due to materials, lighting and screen settings.",
    },
    {
      number: "03",
      title: "Payments",
      content:
        "Payments must be completed through the methods provided by Woodora. Any applicable charges, taxes or delivery fees will be communicated as part of the purchase process.",
    },
    {
      number: "04",
      title: "Delivery",
      content:
        "Delivery timelines may vary depending on product availability, location and logistics. We will make reasonable efforts to deliver orders within the communicated timeframe.",
    },
    {
      number: "05",
      title: "Returns & Issues",
      content:
        "If your product arrives damaged or has an issue, please contact us within the applicable support period with relevant order and product details so the matter can be reviewed.",
    },
    {
      number: "06",
      title: "Website Use",
      content:
        "You agree to use this website lawfully and not to misuse, copy, interfere with or attempt to gain unauthorized access to any part of the website or its services.",
    },
  ];

  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="border-b border-border bg-background">
        <div className="container mx-auto py-16 sm:py-20 lg:py-24">

          <Link
            to="/"
            className="group mb-14 inline-flex items-center gap-2 text-xs text-text-muted transition-colors hover:text-primary-700"
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
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <Scale size={13} />
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                  Terms & Conditions
                </span>
              </div>

              <h1 className="max-w-4xl font-heading text-4xl font-medium leading-[1.02] tracking-tight text-text sm:text-5xl lg:text-7xl">
                Clear terms.
                <span className="block text-primary-600">
                  Simple expectations.
                </span>
              </h1>

            </div>

            <div className="lg:col-span-4">

              <p className="border-l-2 border-primary-200 pl-5 text-sm leading-7 text-text-muted">
                These terms explain the basic conditions for using the
                Woodora website and purchasing our products.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Quick Info */}
      <section className="border-b border-border">
        <div className="container mx-auto">

          <div className="grid sm:grid-cols-3">

            <div className="flex items-center gap-4 border-b border-border py-6 sm:border-b-0 sm:border-r sm:pr-8">
              <FileCheck2
                size={19}
                className="text-primary-700"
                strokeWidth={1.5}
              />

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-text-muted">
                  Document
                </p>
                <p className="mt-1 text-sm font-medium text-text">
                  Terms of Service
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-border py-6 sm:border-b-0 sm:px-8 sm:border-r">
              <Scale
                size={19}
                className="text-primary-700"
                strokeWidth={1.5}
              />

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-text-muted">
                  Applies To
                </p>
                <p className="mt-1 text-sm font-medium text-text">
                  Website & Purchases
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 py-6 sm:pl-8">
              <Check
                size={19}
                className="text-primary-700"
                strokeWidth={1.5}
              />

              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-text-muted">
                  Updated
                </p>
                <p className="mt-1 text-sm font-medium text-text">
                  October 2026
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Terms */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto">

          <div className="mx-auto max-w-4xl">

            {terms.map((term, index) => (
              <article
                key={term.number}
                className={`grid gap-6 py-9 sm:grid-cols-[80px_1fr] sm:gap-10 ${
                  index !== 0 ? "border-t border-border" : ""
                }`}
              >

                <div>
                  <span className="inline-flex rounded-full bg-primary-50 px-3 py-1.5 text-[9px] font-semibold tracking-[0.15em] text-primary-700">
                    {term.number}
                  </span>
                </div>

                <div>

                  <h2 className="font-heading text-2xl font-medium text-text sm:text-3xl">
                    {term.title}
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-text-muted sm:text-base">
                    {term.content}
                  </p>

                </div>

              </article>
            ))}

            {/* Contact Card */}
            <div className="mt-8 overflow-hidden rounded-3xl bg-primary-900 p-7 text-white sm:p-9">

              <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-primary-300">
                    Need clarification?
                  </p>

                  <h3 className="mt-3 max-w-lg font-heading text-2xl font-medium sm:text-3xl">
                    We're happy to explain.
                  </h3>

                  <p className="mt-3 max-w-md text-xs leading-5 text-white/50">
                    If you have questions about these terms, contact our team
                    before placing an order.
                  </p>
                </div>

                <Link
                  to="/contact"
                  className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-primary-900 transition-colors hover:bg-primary-100"
                >
                  Contact Us

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100">
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:rotate-45"
                    />
                  </span>
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default TermsConditions;