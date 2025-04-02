import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const OverlapWrapperByAnima = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      icon: "/---icon--alternate-map-marker-.png",
      text: "Hann Capa, près de l'arrêt du TER de Hann",
      alt: "Icon alternate map",
    },
    {
      icon: "/---icon--alternate-calendar-.png",
      text: "24h/24, 7j/7",
      alt: "Icon alternate",
    },
    {
      icon: "/---icon--envelope-.png",
      text: "abdouazizniang1010@ gmail.com",
      alt: "Icon envelope",
    },
    {
      icon: "/---icon--alternate-phone-.png",
      text: "+221 78 372 31 90",
      alt: "Icon alternate phone",
    },
  ];

  return (
    <section id="contact" className="relative w-full py-12 md:py-16 bg-[#f8f8f8]">
      <div className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[910px]">
        {/* Background image with overlay */}
        <img
          className="absolute w-full h-full top-0 left-0 object-cover"
          alt="Immeuble"
          src="/immeuble2-1.png"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-[0.68]" />

        <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
          {/* Contact form section */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-16 pt-12 md:pt-16 lg:pt-20">
            {/* Left side - Contact form */}
            <div className="flex-1">
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-[32px] text-white font-['Inter',Helvetica] mb-6 md:mb-8 lg:mb-10">
                Contactez nous
              </h2>

              <div className="flex flex-col space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <label className="font-bold text-lg sm:text-xl lg:text-2xl text-white font-['Inter',Helvetica]">
                      Nom
                    </label>
                    <Input 
                      className="h-[40px] sm:h-[47px] rounded-[10px] bg-white" 
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="flex-1 space-y-2 mt-4 sm:mt-0">
                    <label className="font-bold text-lg sm:text-xl lg:text-2xl text-white font-['Inter',Helvetica]">
                      Téléphone
                    </label>
                    <Input 
                      className="h-[40px] sm:h-[47px] rounded-[10px] bg-white" 
                      placeholder="Votre téléphone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-lg sm:text-xl lg:text-2xl text-white font-['Inter',Helvetica]">
                    Email
                  </label>
                  <Input 
                    className="h-[40px] sm:h-[47px] rounded-[10px] bg-white" 
                    placeholder="Votre email"
                    type="email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-lg sm:text-xl lg:text-2xl text-white font-['Inter',Helvetica]">
                    Message
                  </label>
                  <Textarea 
                    className="h-[120px] sm:h-[140px] lg:h-[165px] rounded-[10px] bg-white resize-none" 
                    placeholder="Votre message"
                  />
                </div>

                <Button className="h-[45px] lg:h-[50px] bg-[#db703e] rounded-[10px] text-white font-bold text-lg sm:text-xl lg:text-2xl hover:bg-[#c5633a] transition-colors duration-300">
                  Envoyer
                </Button>
              </div>
            </div>

            {/* Right side - Contact information */}
            <div className="flex-1 mt-12 lg:mt-0">
              <h3 className="font-bold text-xl sm:text-2xl text-white font-['Inter',Helvetica] mb-6 md:mb-8 lg:mb-10">
                Siège
              </h3>

              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center">
                      <img
                        className="max-w-full max-h-full object-contain"
                        alt={item.alt}
                        src={item.icon}
                      />
                    </div>
                    <span className="font-medium text-base sm:text-lg md:text-xl lg:text-2xl text-white font-['Inter',Helvetica] break-words">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="mt-12 md:mt-16 lg:mt-auto mb-6 md:mb-8 lg:mb-10">
            <p className="font-semibold italic text-base sm:text-lg lg:text-xl text-white font-['Inter',Helvetica]">
              NB : Après signature de contrat les plans Architecturaux, les
              plans béton armée et les caméras de surveillance sont tous Payées
              et offert par notre Filiale EImTeC Finance &quot;Demandez un devis
              gratuit &quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};