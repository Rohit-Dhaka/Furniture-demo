

import {
  ArrowDownRight,
  Check,
  DraftingCompass,
  PackageCheck,
  Ruler,
  Sparkles,
} from "lucide-react";

const CraftsmanshipProcess = () => {
  const steps = [
    {
      number: "01",
      label: "Design",
      title: "Plan Before We Build",
      description:
        "Every piece begins with understanding the space, dimensions, purpose, and details that make the furniture work for everyday living.",
      points: [
        "Space & size planning",
        "Design & layout",
        "Material & finish selection",
      ],
      icon: DraftingCompass,
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "02",
      label: "Craft",
      title: "Precision in Every Detail",
      description:
        "Materials are measured, shaped, assembled, and refined with attention to accuracy, structure, and long-term performance.",
      points: [
        "Accurate measurements",
        "Precision cutting & shaping",
        "Strong structural assembly",
      ],
      icon: Ruler,
      image:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "03",
      label: "Finish",
      title: "The Detail That Lasts",
      description:
        "Surfaces are carefully prepared and finished to create a refined appearance that can handle the demands of everyday use.",
      points: [
        "Surface preparation",
        "Quality finishing",
        "Detailed inspection",
      ],
      icon: Sparkles,
      image:
        "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "04",
      label: "Deliver",
      title: "Ready for Your Space",
      description:
        "Before leaving our hands, every piece is checked, carefully protected, and prepared for a smooth delivery to your home.",
      points: [
        "Final quality check",
        "Protective packaging",
        "Delivery & installation",
      ],
      icon: PackageCheck,
      image:
        "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto">
        
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                <Sparkles size={13} />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Our Craftsmanship
              </span>
            </div>

            <h2 className="max-w-4xl font-heading text-4xl font-medium leading-[1.02] tracking-tight text-text sm:text-5xl lg:text-7xl">
              From the first idea
              <span className="block text-primary-600">
                to your room.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm leading-7 text-text-muted sm:text-base">
              Great furniture is a process, not a shortcut. Every Woodora
              piece moves through carefully considered stages before it
              becomes part of your home.
            </p>
          </div>
        </div>

        
        <div className="mt-12 flex flex-col gap-5 border-y border-border py-7 sm:flex-row sm:items-center sm:justify-between lg:mt-16">
          <p className="max-w-2xl font-heading text-xl leading-relaxed text-text sm:text-2xl">
            Every product starts with one simple idea:
            <span className="text-primary-600"> build it right.</span>
          </p>

          <div className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-600" />
            4 considered stages
          </div>
        </div>

        
        <div className="mt-12 lg:mt-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={step.number}
                className={`group grid gap-8 border-b border-border py-12 first:pt-0 last:border-b-0 lg:grid-cols-12 lg:gap-12 lg:py-20`}
              >
                
                <div
                  className={`relative lg:col-span-6 ${
                    isReverse ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-[2rem] bg-primary-100">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-[360px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[460px]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                    
                    <div className="absolute left-6 top-6 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-semibold text-primary-800 shadow-sm">
                        {step.number}
                      </span>

                      <span className="rounded-full border border-white/20 bg-black/15 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                        {step.label}
                      </span>
                    </div>

                    
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                      <p className="max-w-xs font-heading text-xl leading-tight text-white sm:text-2xl">
                        {step.title}
                      </p>

                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary-800 transition-transform duration-300 group-hover:rotate-45">
                        <ArrowDownRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>

                
                <div
                  className={`flex flex-col justify-center lg:col-span-5 ${
                    isReverse
                      ? "lg:order-1 lg:col-start-1"
                      : "lg:order-2 lg:col-start-8"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="text-primary-600"
                    />

                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary-700">
                      Step {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-heading text-3xl font-medium leading-tight tracking-tight text-text sm:text-4xl">
                    {step.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-text-muted sm:text-base">
                    {step.description}
                  </p>

                  
                  <div className="mt-8 space-y-3">
                    {step.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-center gap-3"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                          <Check size={12} />
                        </span>

                        <span className="text-xs font-medium text-text">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  
                  <div className="mt-10 flex items-center gap-4">
                    <div className="h-px flex-1 bg-border">
                      <div
                        className="h-px bg-primary-600"
                        style={{
                          width: `${((index + 1) / steps.length) * 100}%`,
                        }}
                      />
                    </div>

                    <span className="text-[9px] font-medium tracking-[0.2em] text-text-muted">
                      {step.number} / 04
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        
        <div className="mt-6 overflow-hidden rounded-[2rem] bg-primary-900 p-7 text-white sm:p-10 lg:mt-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-300">
                Quality at Every Step
              </span>

              <h3 className="mt-5 max-w-2xl font-heading text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
                Details make
                <span className="text-primary-300">
                  {" "}the difference.
                </span>
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/50 lg:col-span-4 lg:col-start-9">
              From the measurements you never see to the finishing details you
              notice every day, quality is built into the process.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              "Precise dimensions",
              "Skilled craftsmanship",
              "Final quality check",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3 border-t border-white/10 pt-5"
              >
                <span className="text-[9px] text-primary-300">
                  0{index + 1}
                </span>

                <span className="text-xs font-medium text-white/80">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipProcess;