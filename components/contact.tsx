"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Map } from "lucide-react";

const ContactSection = () => {
  const email = "comercial2@rbcertificadora.com.br";
  const mapsUrl =
    "https://www.google.com/maps/place/Copy+Work+-+PB/@-7.1194738,-34.866783,17z/data=!3m1!4b1!4m6!3m5!1s0x7acdd29b7b30d29:0x69fcdfa11f7be8f9!8m2!3d-7.1194791!4d-34.8619121!16s%2Fg%2F11fr3kwjsl?entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-12">
        
        {/* Coluna de Contato */}
        <div className="flex-1 bg-white rounded-lg p-8 text-center shadow border transition-all duration-300 hover:border-black">
          <h2 className="text-4xl font-bold mb-6">Entre em Contato</h2>
          <p className="mb-6 text-lg text-gray-700">
            Para mais informações, entre em contato conosco pelo email abaixo:
          </p>
          <a href={`mailto:${email}`} aria-label={`Enviar email para ${email}`}>
            <Button size="lg" className="rounded-full inline-flex items-center gap-2 cursor-pointer">
              <Mail /> {email}
            </Button>
          </a>
        </div>

        {/* Coluna de Endereço */}
        <div className="flex-1 bg-white rounded-lg p-8 text-center shadow border transition-all duration-300 hover:border-black">
          <h2 className="text-4xl font-bold mb-6">Endereço</h2>
          <p className="mb-4 text-lg text-gray-700 flex items-center justify-center gap-2">
            <MapPin className="text-primary" />
            Copy work - Av. Pres. Epitácio Pessoa, 955 - Estados
          </p>
          <p className="text-lg text-gray-700 mb-6">João Pessoa - PB, 58030-000</p>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full cursor-pointer"> <Map /> Ver no mapa</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
