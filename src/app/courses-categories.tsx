"use client";

import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

import {
  GlobeEuropeAfricaIcon,
  MicrophoneIcon,
  PuzzlePieceIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";


const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: GlobeEuropeAfricaIcon,
    title: "Application web",
    desc: "Java, Spring Boot, Maven, python, django,HTML, CSS & Javascript",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "API Restfull ",
    desc: "python, django, mysql, postegresql",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: GlobeEuropeAfricaIcon,
    title: "Machine Learning",
    desc: "ML.net, c#, python, tensorflow, scikit-learn, numpy",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: GlobeEuropeAfricaIcon,
    title: "Chatbot",
    desc: "Rasa, IBM Watson",
  },
];

export function CoursesCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center pt-40">
        <Typography variant="h2" color="blue-gray" className="my-3">
          Nos services
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12">
        Nous collaborons avec passion et expertise pour transformer des idées en réalisations concrètes et impactantes.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography color="white" className="text-xs font-bold opacity-50">
              SeyramCreations
            </Typography>
            <Typography variant="h4" className="mt-9" color="white">
              Sites web, applications desktop, web, chatbots, api, analyse de données, etc......
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Parcours, expériences et réalisations personnelles!
            </Typography>
            <Button size="sm" color="white">
              Visiter
            </Button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6 center">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesCategories;