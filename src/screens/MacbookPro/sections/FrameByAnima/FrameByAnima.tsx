import React from "react";

export const FrameByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-16 bg-[#f8f8f8]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              className="w-full h-auto object-cover rounded-md"
              alt="Team"
              src="/team-1.png"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-bold text-2xl mb-8">
              <span className="text-black">
                Base à Dakar Sénégal, Hann Bel Air,{" "}
              </span>
              <span className="text-[#db703e]">Groupe EImTeC</span>
              <span className="text-black">
                {" "}
                est un leader dans le domaine de la{" "}
              </span>
              <span className="text-[#0800ff]">
                construction, de la rénovation résidentielle
              </span>
              <span className="text-black">
                , ainsi que de l&apos;investissement immobilier. Grace à notre
                expertise et à notre engagement envers l&apos;excellence, nous
                avons su nous démarquer par notre capacité à concrétiser des
                projets ambitieux qui répondent aux besoins de nos clients tout
                en respectant l&apos;environnement.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-[#db703e] text-[32px] font-bold mb-4">
            Historique de l&apos;entreprise
          </h2>

          <div className="space-y-6">
            <p className="text-xl">
              <span>EImTeC Ex Groupe Saly-bati, fondée en </span>
              <span className="font-bold">2007</span>
              <span>
                , est une entreprise spécialisée dans la construction et la
                rénovation, et la promotion immobilière au service de
                particuliers, professionnels et collectivités. Depuis ses
                débuts, l&apos;entreprise s&apos;est engagée à fournir des
                prestations de haute qualité, alliant savoir-faire traditionnel
                et technologies modernes.
              </span>
            </p>

            <p className="text-xl">
              <span className="text-black">Forte de</span>
              <span className="text-[#db703e]">&nbsp;</span>
              <span className="font-bold text-[#db703e]">
                17 ans d&apos;expériences
              </span>
              <span className="text-black">
                , elle a réalisé avec succès de nombreux projets, allant des
                maisons individuelles aux bâtiments industriels, en passant par
                des infrastructures publiques. Son équipe qualifiée et
                passionnée met un point d&#39;honneur à respecter les délais,
                les budgets, et les exigences environnementales.
              </span>
            </p>

            <p className="text-xl">
              <span className="text-black">
                Aujourd&apos;hui, EImTeC continue de se développer en
                s&apos;appuyant sur ses valeurs :
              </span>
              <span className="text-[#0800ff]">
                fiabilité, innovation et satisfaction client
              </span>
              <span className="text-black">.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
