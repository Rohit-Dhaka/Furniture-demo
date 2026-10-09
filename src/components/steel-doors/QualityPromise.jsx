import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const QualityPromise = () => {
  const qualityPoints = [
    {
      number: "01",
      title: "Built for Today",
      description:
        "Thoughtful construction designed around the way furniture is used every day.",
    },
    {
      number: "02",
      title: "Ready for Years",
      description:
        "Reliable materials, strong hardware and finishes made for long-term use.",
    },
    {
      number: "03",
      title: "Details Matter",
      description:
        "From smooth doors to precise edges, every small detail has a purpose.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto">

        
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-7">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary-600" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Our Quality Promise
              </span>
            </div>

            <h2 className="max-w-3xl font-heading text-4xl font-medium leading-[0.98] tracking-tight text-text sm:text-5xl lg:text-7xl">
              Quality you can see.
              <span className="block text-primary-600">
                Reliability you can feel.
              </span>
            </h2>

          </div>

          <p className="max-w-md text-sm leading-7 text-text-muted sm:text-base lg:col-span-4 lg:col-start-9">
            Quality isn't only about how furniture looks. It's about how
            confidently it performs every single day.
          </p>

        </div>

        
        <div className="mt-14 grid gap-4 lg:mt-20 lg:grid-cols-12">

          
          <div className="group relative overflow-hidden rounded-[2rem] lg:col-span-7">

            <img
              src="https://Woodorafurnitures.in/assets/defodil_heavy_48_1-DFS8qQME.png"
              alt="Woodora quality furniture"
              className="h-[480px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[580px] lg:h-[650px]"
            />

            
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

            
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/60">
                  The Woodora Standard
                </p>

                <h3 className="mt-2 max-w-sm font-heading text-2xl leading-tight text-white sm:text-3xl">
                  Made to be
                  <span className="text-primary-300"> trusted.</span>
                </h3>
              </div>

              <div className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md sm:flex">
                <ArrowUpRight size={17} />
              </div>

            </div>

          </div>

          
          <div className="flex flex-col rounded-[2rem] border border-border bg-white p-7 sm:p-9 lg:col-span-5 lg:p-10">

            
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-2">

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                  <ShieldCheck size={15} />
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-primary-700">
                  Quality First
                </span>

              </div>

              <span className="text-[9px] tracking-[0.2em] text-text-muted">
                01 — 03
              </span>

            </div>

            
            <div className="mt-14">

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-text-muted">
                What Quality Means To Us
              </p>

              <h3 className="mt-4 font-heading text-3xl font-medium leading-tight tracking-tight text-text sm:text-4xl">

                Built for today.
                <span className="block text-primary-600">
                  Ready for years.
                </span>

              </h3>

              <p className="mt-5 text-sm leading-7 text-text-muted">
                We believe quality lives in the details — the way a door
                closes, the way a shelf holds, the way a finish feels and the
                confidence you have every time you use it.
              </p>

            </div>

            
            <div className="mt-8 border-l-2 border-primary-300 pl-5">

              <p className="font-heading text-lg italic leading-relaxed text-text">
                “Good furniture should quietly earn your trust.”
              </p>

            </div>

            
            <div className="mt-10 border-t border-border">

              {qualityPoints.map((point) => (
                <div
                  key={point.number}
                  className="group flex gap-4 border-b border-border py-5"
                >

                  <span className="pt-1 text-[9px] font-medium tracking-[0.2em] text-primary-600">
                    {point.number}
                  </span>

                  <div className="flex-1">

                    <div className="flex items-center justify-between gap-4">

                      <h4 className="font-heading text-base font-medium text-text">
                        {point.title}
                      </h4>

                      <Check
                        size={15}
                        className="shrink-0 text-primary-500 transition-transform duration-300 group-hover:scale-110"
                      />

                    </div>

                    <p className="mt-1.5 max-w-sm text-xs leading-5 text-text-muted">
                      {point.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

            
            <div className="mt-auto pt-8">

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 text-sm font-medium text-text"
              >
                Learn about our quality

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-all duration-300 group-hover:bg-primary-700 group-hover:text-white">
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </Link>

            </div>

          </div>
        </div>

        
        <div className="mt-10 grid gap-4 lg:grid-cols-12">

          <div className="rounded-[1.75rem] bg-primary-900 p-7 text-white sm:p-9 lg:col-span-8">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-300/10 text-primary-300">
                <Sparkles size={17} />
              </div>

              <div>

                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-300">
                  Beyond Appearance
                </p>

                <h3 className="mt-3 font-heading text-2xl font-medium sm:text-3xl">
                  Beauty that
                  <span className="text-primary-300"> performs.</span>
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/50">
                  From structure and hardware to the smallest finishing
                  detail, every element has a purpose. The result is furniture
                  that feels considered from the first use to years down the
                  line.
                </p>

              </div>

            </div>

          </div>

          
          <div className="flex items-center justify-between rounded-[1.75rem] border border-border bg-white p-7 sm:p-9 lg:col-span-4">

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-text-muted">
                Our Standard
              </p>

              <p className="mt-3 font-heading text-xl text-text">
                Thoughtful
                <span className="text-primary-600"> by design.</span>
              </p>

            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary-200 text-primary-700">
              <ShieldCheck size={18} strokeWidth={1.5} />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default QualityPromise;