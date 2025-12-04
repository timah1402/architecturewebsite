"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import Footer from "../Footer/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const OverlapWrapperByAnima = ()=> {
  const contactInfo = [
    {
      icon: MapPin,
      text: "Hann Capa, près de l'arrêt du TER de Hann",
      label: "Adresse",
    },
    {
      icon: Clock,
      text: "24h/24, 7j/7",
      label: "Horaires",
    },
    {
      icon: Mail,
      text: "abdouazizniang1010@gmail.com",
      label: "Email",
    },
    {
      icon: Phone,
      text: "+221 78 372 31 90",
      label: "Téléphone",
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
    <section id="contact" className="relative w-full py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-[#db703e] to-[#0800ff] bg-clip-text text-transparent">
            Contactez-nous
          </span>
        </h2>
        <p className="text-xl text-gray-600">Transformons ensemble votre vision en réalité</p>
      </motion.div>

      <div className="relative w-full min-h-[700px] md:min-h-[800px] rounded-3xl overflow-hidden mx-auto max-w-[1440px] px-4">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute w-full h-full top-0 left-0 object-cover rounded-3xl"
          alt="Immeuble"
          src="/immeuble2-1.png"
        />
        <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-black/80 via-black/70 to-black/85 rounded-3xl" />

        <div className="relative z-10 h-full px-4 sm:px-6 lg:px-12 py-12 flex flex-col">
          <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 glass-dark p-8 rounded-2xl shadow-2xl"
            >
              <h3 className="font-bold text-3xl text-white mb-8">
                Envoyez-nous un message
              </h3>

              <div className="flex flex-col space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <label className="font-semibold text-white text-sm">Nom</label>
                    <Input
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      className="h-12 rounded-xl bg-white/90 border-0 focus:bg-white transition-all"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <label className="font-semibold text-white text-sm">Téléphone</label>
                    <Input
                      value={telephone}
                      onChange={(e) => setTelephone(e.target.value)}
                      className="h-12 rounded-xl bg-white/90 border-0 focus:bg-white transition-all"
                      placeholder="Votre numéro"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-semibold text-white text-sm">Email</label>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 rounded-xl bg-white/90 border-0 focus:bg-white transition-all"
                    placeholder="votre.email@exemple.com"
                    type="email"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-semibold text-white text-sm">Message</label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="h-32 rounded-xl bg-white/90 border-0 focus:bg-white resize-none transition-all"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full h-14 bg-gradient-to-r from-[#db703e] to-[#ffae00] rounded-xl text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-[#db703e]/50 transition-all duration-300"
                  >
                    {loading ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </motion.div>

                {status && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-white text-center mt-2 p-4 rounded-xl bg-white/10 backdrop-blur-sm font-semibold"
                  >
                    {status}
                  </motion.p>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 glass-dark p-8 rounded-2xl shadow-2xl"
            >
              <h3 className="font-bold text-3xl text-white mb-8">
                Informations
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * index }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-[#db703e] to-[#ffae00] rounded-lg">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#ffae00] text-sm mb-1">
                          {item.label}
                        </p>
                        <p className="text-white text-lg break-words">
                          {item.text}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 glass-dark p-6 rounded-2xl"
          >
            <p className="font-medium text-white text-base sm:text-lg leading-relaxed">
              <span className="text-[#ffae00] font-bold">Note importante :</span> Après signature de contrat, les plans Architecturaux, les plans béton armé et les caméras de surveillance sont tous payés et offerts par notre Filiale EImTeC Finance — <span className="text-[#db703e] font-semibold">"Demandez un devis gratuit"</span>
            </p>
          </motion.div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
