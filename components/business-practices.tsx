import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface DocumentCardProps {
  title: string;
  description: string;
  image: string;
  pdfUrl: string;
}

const DocumentCard = ({ title, description, image, pdfUrl }: DocumentCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50 shadow-sm">
      {/* Imagem */}
      <div className="relative h-64 overflow-hidden bg-accent rounded-t-xl">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          priority={true}
        />
      </div>

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-6">{description}</p>

        {/* Botão baixar PDF */}
        <div className="mt-auto">
          <Button variant="default" className="rounded-full" asChild>
            <a
              href={pdfUrl}
              download
              aria-label={`Baixar ${title}`}
              className="inline-flex items-center"
            >
              <ExternalLink className="mr-1 h-4 w-4" />
              Baixar
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const BusinessPractices = () => {
  const documents = [
    {
      title: "Declaração de Práticas de Negócios - AR Nordeste Safeweb RFB",
      description: "Documento referente à RFB.",
      image: "/practices1.jpg", // troque para a imagem que quiser
      pdfUrl:
        "/DECLARA%C3%87%C3%83O%20DE%20PR%C3%81TICAS%20DE%20NEG%C3%93CIOS%20-%20AR%20NORDESTE%20CERTIFICADORA%20-%20SAFEWEB%20RFB.pdf",
    },
    {
      title: "Declaração de Práticas de Negócios - AR Nordeste Safeweb CD",
      description: "Documento referente ao certificado digital.",
      image: "/practices2.jpg",
      pdfUrl:
        "/DECLARA%C3%87%C3%83O%20DE%20PR%C3%81TICAS%20DE%20NEG%C3%93CIOS%20-%20AR%20NORDESTE%20CERTIFICADORA%20-%20SAFEWEB%20CD.pdf",
    },
  ];

  return (
    <section id="practices" className="relative py-20 px-6 bg-white">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mt-12">
            Declaração de Práticas de Negócios
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg max-w-xl mx-auto">
            Conheça os documentos oficiais que demonstram nosso compromisso com a ética, qualidade e transparência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {documents.map((doc, index) => (
            <DocumentCard key={index} {...doc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessPractices;
