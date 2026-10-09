import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import products from "../../data/Products";

const DomesticProducts = () => {
  const domesticProducts = products.domestic;

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto">

        

        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-8">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-primary-600" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-700">
                Domestic Collection
              </span>
            </div>

            <h1 className="max-w-5xl font-heading text-5xl font-medium leading-[0.95] tracking-tight text-text sm:text-6xl lg:text-7xl">
              Furniture for
              <span className="block text-primary-600">
                everyday living.
              </span>
            </h1>

          </div>

          <div className="lg:col-span-4">

            <p className="max-w-md text-sm leading-7 text-text-muted sm:text-base">
              Thoughtfully designed steel furniture for modern homes —
              combining dependable strength, practical storage and timeless
              character.
            </p>

          </div>

        </div>

        

        <div className="mt-12 flex items-center justify-between border-y border-border py-5 lg:mt-16">

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-primary-600">
              Domestic Collection
            </p>

            <p className="mt-1 text-sm text-text-muted">
              Designed for everyday living
            </p>
          </div>

          <div className="text-right">

            <p className="font-heading text-2xl font-medium text-text">
              {domesticProducts.length}+
            </p>

            <p className="text-[9px] uppercase tracking-[0.2em] text-text-muted">
              Products
            </p>

          </div>

        </div>

        

        <div className="mx-auto mt-10 grid max-w-7xl gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">

          {domesticProducts.map((product) => (

            <Link
              key={product.id}
              to={`/products/domestic/${product.id}`}
              className="group"
            >

              

              <div className="relative overflow-hidden rounded-[1.5rem] bg-primary-50">

                <div className="aspect-[4/4.8]">

                  <img
                    src={product.images}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute bottom-5 right-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-primary-800 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />

                </span>

              </div>

              

              <div className="px-1 pt-5">

                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-primary-600">
                  {product.category}
                </p>

                <h2 className="mt-2 font-heading text-2xl font-medium tracking-tight text-text">
                  {product.name}
                </h2>

                <p className="mt-3 max-w-md text-xs leading-5 text-text-muted">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">

                  <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-text-muted transition-colors group-hover:text-primary-700">
                    View Details
                  </span>

                  <span className="h-px w-8 bg-border transition-all duration-300 group-hover:w-14 group-hover:bg-primary-600" />

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
};

export default DomesticProducts;