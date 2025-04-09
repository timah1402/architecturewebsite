"use client";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import Footer from "../Footer/Footer";

export const OverlapWrapperByAnima = (): JSX.Element => {
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
      text: "abdouazizniang1010@gmail.com",
      alt: "Icon envelope",
    },
    {
      icon: "/---icon--alternate-phone-.png",
      text: "+221 78 372 31 90",
      alt: "Icon alternate phone",
    },
  ];

  const [nom, setNom] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nom, telephone, email, message }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message envoyé avec succès !");
        setNom("");
        setTelephone("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("❌ Une erreur est survenue.");
      }
    } catch (error) {
      setStatus("❌ Problème de connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative w-full py-12 md:py-16 bg-[#f8f8f8]">
      <div className="relative w-full min-h-[600px] md:min-h-[700px] lg:min-h-[910px]">
        <img
          className="absolute w-full h-full top-0 left-0 object-cover"
          alt="Immeuble"
          src="/immeuble2-1.png"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-black opacity-[0.68]" />

        <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
          <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-16 pt-12 md:pt-16 lg:pt-20">
            <div className="flex-1">
              <h2 className="font-bold text-2xl sm:text-3xl lg:text-[32px] text-white mb-6 md:mb-8 lg:mb-10">
                Contactez nous
              </h2>

              <div className="flex flex-col space-y-4 sm:space-y-6 lg:space-y-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <label className="font-bold text-white">Nom</label>
                    <Input
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      className="h-[40px] sm:h-[47px] rounded-[10px] bg-white"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="flex-1 space-y-2 mt-4 sm:mt-0">
                    <label className="font-bold text-white">Téléphone</label>
                    <Input
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      className="h-[40px] sm:h-[47px] rounded-[10px] bg-white"
                      placeholder="Votre téléphone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-white">Email</label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-[40px] sm:h-[47px] rounded-[10px] bg-white"
                    placeholder="Votre email"
                    type="email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-white">Message</label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="h-[120px] sm:h-[140px] lg:h-[165px] rounded-[10px] bg-white resize-none"
                    placeholder="Votre message"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="h-[45px] lg:h-[50px] bg-[#db703e] rounded-[10px] text-white font-bold text-lg sm:text-xl lg:text-2xl hover:bg-[#c5633a] transition-colors duration-300"
                >
                  {loading ? "Envoi..." : "Envoyer"}
                </Button>

                {status && (
                  <p className="text-white mt-2 italic font-semibold">
                    {status}
                  </p>
                )}
              </div>
            </div>

            <div className="flex-1 mt-12 lg:mt-0">
              <h3 className="font-bold text-xl sm:text-2xl text-white mb-6 md:mb-8 lg:mb-10">
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
                    <span className="font-medium text-white text-base sm:text-lg md:text-xl lg:text-2xl break-words">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16 lg:mt-auto mb-6 md:mb-8 lg:mb-10">
            <p className="font-semibold italic text-white text-base sm:text-lg lg:text-xl">
              NB : Après signature de contrat, les plans Architecturaux, les plans béton armé et les caméras de surveillance sont tous payés et offerts par notre Filiale EImTeC Finance — "Demandez un devis gratuit"
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
