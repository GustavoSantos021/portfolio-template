import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden bg-white">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-md px-4">
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight text-gray-900">
        AR Nordeste Certificadora
        </h1>
        <p className="mt-6 text-[17px] md:text-lg text-gray-700 max-w-xl mx-auto">
          Líder em certificação e auditoria no Nordeste, garantimos qualidade, segurança e conformidade para o seu negócio. Conheça nossos serviços e descubra como podemos ajudar a sua empresa a crescer com confiança.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base" asChild>
            <a href="#services" aria-label="Conheça nossas práticas de negócios">
              Conheça nossos serviços <CircleArrowDown className="ml-2 !h-5.5 !w-5.5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
