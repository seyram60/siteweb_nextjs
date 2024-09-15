"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src="/image/image8.svg"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-48">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90  py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >
              
              Ensemble, faisons de l'innovation le moteur de votre réussite !
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
            Chaque projet est une opportunité d’apporter des solutions uniques, innovantes
            et qui répondent à vos besoins. 
            Nous plaçons la technologie à votre service pour 
              vous permettre de dépasser vos objectifs, tout en créant des expériences digitales sur mesure. 
              Développer votre application web, optimiser vos systèmes actuels ou analyser vos données, 
              nous mettons notre expertise à profit pour transformer vos idées en réalité.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button color="amber">Tous nos projets</Button>
              <Button color="gray" variant="outlined">
                voir les tarifs
              </Button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4 lg:justify-start">
            <Typography
              variant="h4"
              className="w-36 grayscale opacity-60"
            >
              Reactjs
            </Typography>
            <Typography
              variant="h4"
              className="w-36 grayscale opacity-60"
            >
              HTML/css
            </Typography>
            <Typography
              variant="h4"
              className="w-36 grayscale opacity-60"
            >
              Django
            </Typography>
            <Typography
              variant="h4"
              className="w-36 grayscale opacity-60"
            >
              Python
            </Typography>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
