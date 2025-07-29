import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const footerLinks = [
  {
    title: "Serviços",
    href: "#services",
  },
  {
    title: "Práticas de Negócio",
    href: "#practices",
  },
  {
    title: "Contato",
    href: "#contact",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          {/* Logo */}
                      <img
      src="./arnordestecertificadora-logo.png"
      alt="Logo"
      className="h-8 w-auto mb-2" // ajuste o tamanho conforme quiser
    />

          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
&copy; {new Date().getFullYear()} AR Nordeste Certificadora. Todos os direitos reservados.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
