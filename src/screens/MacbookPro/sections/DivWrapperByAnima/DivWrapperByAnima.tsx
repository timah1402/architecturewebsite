"use client";

import React from "react";
import { motion } from "framer-motion";
import { CldImage } from "next-cloudinary";

export const DivWrapperByAnima = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#db703e] to-[#0800ff] bg-clip-text text-transparent">
              À Propos
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <CldImage
                src="team-1"
                alt="Team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              <span className="text-gray-800">
                Basé à Dakar Sénégal, Hann Bel Air,{" "}
              </span>
              <span className="text-[#db703e] font-bold">Groupe EImTeC</span>
              <span className="text-gray-800">
                {" "}
                est un leader dans le domaine de la{" "}
              </span>
              <span className="text-[#0800ff] font-semibold">
                construction, de la rénovation résidentielle
              </span>
              <span className="text-gray-800">
                , ainsi que de l&apos;investissement immobilier. Grâce à notre
                expertise et à notre engagement envers l&apos;excellence, nous
                avons su nous démarquer par notre capacité à concrétiser des
                projets ambitieux qui répondent aux besoins de nos clients tout
                en respectant l&apos;environnement.
              </span>
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#db703e] to-[#0800ff] bg-clip-text text-transparent">
            Historique de l&apos;entreprise
          </h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border-l-4 border-[#db703e] pl-6"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <span>EImTeC Ex Groupe Saly-bati, fondée en </span>
                <span className="font-bold text-[#db703e] text-2xl">2007</span>
                <span>
                  , est une entreprise spécialisée dans la construction et la
                  rénovation, et la promotion immobilière au service de
                  particuliers, professionnels et collectivités. Depuis ses
                  débuts, l&apos;entreprise s&apos;est engagée à fournir des
                  prestations de haute qualité, alliant savoir-faire traditionnel
                  et technologies modernes.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="border-l-4 border-[#0800ff] pl-6"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <span>Forte de </span>
                <span className="font-bold text-[#db703e] text-2xl">
                  17 ans d&apos;expérience
                </span>
                <span>
                  , elle a réalisé avec succès de nombreux projets, allant des
                  maisons individuelles aux bâtiments industriels, en passant par
                  des infrastructures publiques. Son équipe qualifiée et
                  passionnée met un point d&apos;honneur à respecter les délais,
                  les budgets, et les exigences environnementales.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="border-l-4 border-[#ffae00] pl-6"
            >
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                <span>
                  Aujourd&apos;hui, EImTeC continue de se développer en
                  s&apos;appuyant sur ses valeurs :{" "}
                </span>
                <span className="text-[#0800ff] font-bold text-xl">
                  fiabilité, innovation et satisfaction client
                </span>
                <span>.</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
