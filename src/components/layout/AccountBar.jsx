import { Clock3, Mail, Phone } from "lucide-react";
const AccountBar = () => {
  return (
    <div className="border-b border-border bg-primary-900 text-white">
      {" "}
      <div className="container mx-auto">
        {" "}
        <div className="flex min-h-10 items-center justify-between">
          {" "}
          {" "}
          <div className="flex items-center gap-5">
            {" "}
            <a
              href="tel:+918094115249"
              className="flex items-center gap-2 text-xs text-white/80 transition-colors hover:text-white"
            >
              {" "}
              <Phone size={14} className="text-primary-300" />{" "}
              <span>+91 12345 67890</span>{" "}
            </a>{" "}
            <a
              href="mailto:woodora@gmail.com"
              className="hidden items-center gap-2 text-xs text-white/80 transition-colors hover:text-white sm:flex"
            >
              {" "}
              <Mail size={14} className="text-primary-300" />{" "}
              <span>woodora@gmail.com</span>{" "}
            </a>{" "}
          </div>{" "}
          {" "}
          <div className="flex items-center gap-2 text-xs text-white/80">
            {" "}
            <Clock3 size={14} className="text-primary-300" />{" "}
            <span> Mon – Sat · 10:00 AM – 7:00 PM </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default AccountBar;
