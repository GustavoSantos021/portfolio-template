import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { HTMLAttributes } from "react";

const Services = () => {
  return (
    <section id="services" className="relative py-20 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center mt-12">
          Nossos Serviços de Atendimento
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          <ServiceCard
            title="Atendimento por Videoconferência"
            description="Emita seu certificado digital com total praticidade e segurança, sem sair de casa, através de videoconferência."
            src="/videoconferencia.jpg"
            alt="Ícone de videoconferência"
            buttonText="Saiba mais"
            buttonHref="#contact"
          />

          <ServiceCard
            title="Atendimento Presencial"
            description="Realize a emissão do seu certificado digital presencialmente em nossa unidade, com suporte especializado."
            src="/atendimentopresencial.jpg"
            alt="Ícone de atendimento presencial"
            buttonText="Saiba mais"
            buttonHref="#contact"
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  src: string;
  alt: string;
  buttonText: string;
  buttonHref: string;
}

const ServiceCard = ({
  title,
  description,
  src,
  alt,
  buttonText,
  buttonHref,
  className,
  ...props
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "group flex flex-col items-center text-center md:text-left md:items-start border rounded-xl p-6 shadow-sm flex-1 transition-all duration-300 hover:border-black",
        className
      )}
      {...props}
    >
      <div className="relative w-full h-60 mb-6 overflow-hidden rounded-md">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      <Button asChild variant="default" className="rounded-full px-6">
        <a href={buttonHref}>{buttonText}</a>
      </Button>
    </div>
  );
};

export default Services;
