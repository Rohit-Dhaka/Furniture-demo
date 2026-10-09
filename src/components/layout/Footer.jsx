import {
  ArrowUpRight,
  
  
  
  Mail,
  MapPin,
  Phone,
  
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">

      
      <div className="container mx-auto">

        <div className="grid gap-12 border-b border-white/10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          
          <div className="lg:col-span-1">

            <Link to="/" className="inline-block">
              <div className="flex flex-col">
                <span className="font-heading text-2xl font-semibold tracking-tight">
                  Woodora
                </span>

                <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-primary-300">
                  Furniture
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
              Thoughtfully crafted furniture designed to bring comfort,
              character, and timeless beauty to your space.
            </p>

            
            <div className="mt-6 flex items-center gap-3">

             

            
             

         

            </div>
          </div>

          
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  to="/"
                  className="text-sm text-white/60 transition-colors hover:text-primary-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-white/60 transition-colors hover:text-primary-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="text-sm text-white/60 transition-colors hover:text-primary-300"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/why-choose-us"
                  className="text-sm text-white/60 transition-colors hover:text-primary-300"
                >
                  Why Choose Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-white/60 transition-colors hover:text-primary-300"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">
              Collections
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <Link
                  to="/products/sofas"
                  className="text-sm text-white/60 transition-colors hover:text-primary-300"
                >
                  Sofas
                </Link>
              </li>

              <li>
                <Link
                  to="/products/chairs"
                  className="text-sm text-white/60 transition-colors hover:text-primary-300"
                >
                  Chairs
                </Link>
              </li>

              <li>
                <Link
                  to="/products/beds"
                  className="text-sm text-white/60 transition-colors hover:text-primary-300"
                >
                  Beds
                </Link>
              </li>

              <li>
                <Link
                  to="/products/tables"
                  className="text-sm text-white/60 transition-colors hover:text-primary-300"
                >
                  Tables
                </Link>
              </li>

              <li>
                <Link
                  to="/products/wardrobes"
                  className="text-sm text-white/60 transition-colors hover:text-primary-300"
                >
                  Wardrobes
                </Link>
              </li>

            </ul>
          </div>

          
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-5">

              
              <a
                href="tel:+918094115249"
                className="group flex items-start gap-3"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-primary-300"
                />

                <div>
                  <span className="block text-xs text-white/40">
                    Phone
                  </span>

                  <span className="mt-1 block text-sm text-white/70 transition-colors group-hover:text-primary-300">
                    +91 12345 67890
                  </span>
                </div>
              </a>

              
              <a
                href="mailto:woodora@gmail.com"
                className="group flex items-start gap-3"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-primary-300"
                />

                <div>
                  <span className="block text-xs text-white/40">
                    Email
                  </span>

                  <span className="mt-1 block break-all text-sm text-white/70 transition-colors group-hover:text-primary-300">
                    woodora@gmail.com
                  </span>
                </div>
              </a>

              
              <div className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-primary-300"
                />

                <div>
                  <span className="block text-xs text-white/40">
                    Showroom
                  </span>

                  <span className="mt-1 block text-sm leading-5 text-white/70">
                    Your showroom address
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        
        <div className="flex flex-col gap-6 border-b border-white/10 py-8 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="font-heading text-lg font-medium">
              Looking for something unique?
            </p>

            <p className="mt-1 text-sm text-white/50">
              Let's create the perfect piece for your space.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-primary-900 transition-colors hover:bg-primary-100"
          >
            Start a Conversation

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

        </div>

        
        <div className="flex flex-col gap-4 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {currentYear} Woodora Furniture. All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <Link
              to="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition-colors hover:text-white"
            >
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;