"use client";

import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";


function TESTIMONIAL() {
  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <Card color="transparent" shadow={false} className="">
          <CardBody className="col-span-full gap-10 place-items-center overflow-visible grid grid-cols-1">
            
            <div className="col-span-2 w-full">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold text-center"
              >
                À propos de nous
              </Typography>
              <Typography className="mb-1 w-full font-normal !text-gray text-justify">
                Nous sommes une startup dynamique spécialisée dans la création de solutions digitales sur mesure pour répondre aux besoins variés de nos clients. 
                Avec une expertise combinée en développement web, applications bureau, analyse de données, design graphique, et développement de produits, 
                nous transformons des idées en projets concrets et innovants. Notre approche repose sur l'utilisation des dernières technologies et des pratiques
                 modernes pour garantir des résultats performants, esthétiques et durables.
                Que vous ayez besoin d'une vitrine en ligne captivante, d'une application intuitive, 
                ou d'analyses de données précises pour éclairer vos décisions, nous sommes là pour vous accompagner à chaque étape. 
              </Typography>
              <div className="grid mb-4">
                <div className="flex items-center gap-2">
                  <Typography className="w-full font-normal !text-gray pt-10">
                  Grâce à notre équipe passionnée et créative, nous nous engageons à fournir des solutions qui maximisent votre potentiel et 
                  contribuent à la réussite de vos projets dans un monde en constante évolution.
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  
                  <Typography variant="h4"  className="w-full font-normal text-center pt-10">
                  Ensemble, construisons l’avenir digital qui vous ressemble.
                  </Typography>
                </div>
              </div>
              
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TESTIMONIAL;
