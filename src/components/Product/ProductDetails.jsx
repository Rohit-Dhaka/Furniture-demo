import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";

import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import products from "../../data/Products";

const ProductDetails = () => {
  const { category, id } = useParams();

  
  const collection = products[category];

  
  const product = collection?.find((item) => item.id === id);

  
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0]?.name || "",
  );

  
  if (!product) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center bg-background px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-600">
            Product Not Found
          </p>

          <h1 className="mt-3 font-heading text-3xl font-medium text-text">
            This product does not exist.
          </h1>

          <Link
            to={`/products/${category}`}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-800 px-6 py-3 text-sm font-medium text-white"
          >
            <ArrowLeft size={15} />
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto">
        

        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-text-muted">
          <Link
            to="/products"
            className="transition-colors hover:text-primary-700"
          >
            Products
          </Link>

          <span>/</span>

          <Link
            to={`/products/${category}`}
            className="capitalize transition-colors hover:text-primary-700"
          >
            {category}
          </Link>

          <span>/</span>

          <span className="text-text">{product.name}</span>
        </div>

        

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          

          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-primary-50">
              <div className="relative h-[380px] sm:h-[450px] lg:h-[620px]">
                <img
                  src={product.images}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>
          </div>

          

          <div className="flex flex-col lg:col-span-5 lg:py-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary-600" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                {category === "domestic"
                  ? "Domestic Collection"
                  : "Industrial Collection"}
              </span>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-text-muted">
              {product.category}
            </p>

            <h1 className="mt-3 font-heading text-4xl font-medium leading-tight tracking-tight text-text sm:text-5xl">
              {product.name}
            </h1>

            <p className="mt-3 font-heading text-lg text-primary-700">
              {product.subtitle}
            </p>

            <p className="mt-7 text-sm leading-7 text-text-muted">
              {product.description}
            </p>

            

            <div className="mt-8 border-y border-border py-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-primary-700">
                Dimensions
              </p>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-text-muted">
                    Height
                  </p>

                  <p className="mt-1 text-sm font-medium text-text">
                    {product.dimensions.height}
                  </p>
                </div>

                <div className="border-l border-border pl-4">
                  <p className="text-[9px] uppercase tracking-wider text-text-muted">
                    Width
                  </p>

                  <p className="mt-1 text-sm font-medium text-text">
                    {product.dimensions.width}
                  </p>
                </div>

                <div className="border-l border-border pl-4">
                  <p className="text-[9px] uppercase tracking-wider text-text-muted">
                    Depth
                  </p>

                  <p className="mt-1 text-sm font-medium text-text">
                    {product.dimensions.depth}
                  </p>
                </div>
              </div>
            </div>

            

            <div className="mt-7">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-primary-700">
                  Available Colours
                </p>

                {selectedColor && (
                  <span className="text-xs font-medium text-text">
                    {selectedColor}
                  </span>
                )}
              </div>

              <div className="mt-5 flex flex-wrap gap-4">
                {product.colors.map((color) => {
                  const isSelected = selectedColor === color.name;

                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColor(color.name)}
                      aria-label={`Select ${color.name}`}
                      className="group flex flex-col items-center gap-2"
                    >
                      

                      <span
                        className={`
                          relative flex h-11 w-11 items-center justify-center
                          rounded-full border-2 transition-all duration-300
                          ${
                            isSelected
                              ? "border-primary-700 scale-110"
                              : "border-transparent group-hover:scale-105"
                          }
                        `}
                      >
                        <span
                          className="h-8 w-8 rounded-full border border-black/10 shadow-sm"
                          style={{
                            backgroundColor: color.hex,
                          }}
                        />
                      </span>

                      <span
                        className={`text-[10px] transition-colors ${
                          isSelected
                            ? "font-semibold text-text"
                            : "text-text-muted"
                        }`}
                      >
                        {color.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            

            <div className="mt-8">
              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-primary-700">
                Product Features
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3 text-sm text-text"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                      <Check size={13} />
                    </span>

                    {feature}
                  </div>
                ))}
              </div>
            </div>

            

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex flex-1 items-center justify-center gap-3 rounded-full bg-primary-800 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-primary-700"
              >
                Enquire Now
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:rotate-45"
                  />
                </span>
              </Link>

              <Link
                to={`/products/${category}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium text-text transition hover:border-primary-300 hover:text-primary-700"
              >
                <ArrowLeft size={15} />
                Back
              </Link>
            </div>

            

            <div className="mt-10 grid grid-cols-3 border-t border-border pt-7">
              <div className="pr-4">
                <ShieldCheck
                  size={18}
                  strokeWidth={1.5}
                  className="text-primary-700"
                />

                <p className="mt-3 text-[10px] font-semibold text-text">
                  Quality
                </p>

                <p className="mt-1 text-[9px] leading-4 text-text-muted">
                  Checked
                </p>
              </div>

              <div className="border-l border-border px-4">
                <Truck
                  size={18}
                  strokeWidth={1.5}
                  className="text-primary-700"
                />

                <p className="mt-3 text-[10px] font-semibold text-text">
                  Delivery
                </p>

                <p className="mt-1 text-[9px] leading-4 text-text-muted">
                  Pan India
                </p>
              </div>

              <div className="border-l border-border pl-4">
                <Wrench
                  size={18}
                  strokeWidth={1.5}
                  className="text-primary-700"
                />

                <p className="mt-3 text-[10px] font-semibold text-text">
                  Support
                </p>

                <p className="mt-1 text-[9px] leading-4 text-text-muted">
                  After Sales
                </p>
              </div>
            </div>
          </div>
        </div>

        

        <div className="mt-16 border-t border-border pt-10 lg:mt-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Specifications
              </p>

              <h2 className="mt-4 font-heading text-3xl font-medium text-text sm:text-4xl">
                Everything
                <span className="text-primary-600"> you need.</span>
              </h2>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-border border-y border-border">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex items-center justify-between gap-6 py-5"
                  >
                    <span className="text-xs text-text-muted">{key}</span>

                    <span className="text-right text-sm font-medium text-text">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
