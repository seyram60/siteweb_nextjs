"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const COURSES = [
  {
    img: "/image/web1.svg",
    tag: "PROJETS • Application web • Java, Spring boot, maven, mysql",
    title: "Application web de reservation",
    label: "Voir plus",
    desc: "Développée avec Spring Boot en Java, cette solution permet aux utilisateurs de consulter la disponibilité des chambres, d'effectuer des réservations, et de gérer leur compte. Le backend utilise MySQL pour stocker les informations sur les chambres, les réservations, et les utilisateurs, assurant une gestion efficace des données.Concu avec une interface fluide et sécurisée, elle permet une expérience utilisateur optimale pour la réservation en ligne.",
  },
  {
    img: "/image/web2.svg",
    tag: "PROJETS • API RESTfull • Python, Django",
    title: "API Restfull pour gestion de produits",
    label: "Voir plus",
    desc: "Une API RESTful de gestion de produits développée avec Python, Django, et MySQL, permet de gérer un inventaire de produits via des requêtes HTTP standard. Utilisant Django REST Framework (DRF), cette API propose des endpoints pour créer, lire, mettre à jour et supprimer (CRUD) des produits. Les réponses JSON permettent l'intégration fluide avec des applications front-end ou d'autres services.",
  },
  {
    img: "/image/web3.svg",
    tag: "PROJETS • Site web • Html/css & Bootstrap, material ui",
    title: "Portfolio d'un graphiste",
    label: "Voir plus",
    desc: "Un site web portfolio d'un graphiste réalisé avec HTML, CSS, Bootstrap et Material UI combine élégance et simplicité. La page d'accueil présente une image de couverture saisissante. Un carrousel Bootstrap met en valeur les réalisations graphiques dans un style moderne, avec des cartes de projets utilisant des composants Material UI pour une présentation soignée et interactives.",
  },
  {
    img: "/image/web4.gif",
    tag: "PROJETS • Application web • ML.NET, C#",
    title: "Moteur de recommandation de prix de maisons",
    label: "Voir plus",
    desc: "Cette application web de recommandation de prix de maisons utilise l’apprentissage automatique pour prédire les prix des propriétés en fonction de divers critères tels que la localisation, la taille, et d'autres caractéristiques. L’interface utilisateur est réactive et conviviale, permettant aux utilisateurs de soumettre des données spécifiques et de recevoir des estimations précises en temps réel. Grâce à l'intégration de modèles prédictifs, l'application offre des recommandations fiables pour guider les acheteurs et les vendeurs dans leurs décisions immobilières.",
  },
  {
    img: "/image/web5.svg",
    tag: "PROJETS • Chatbot • Rasa",
    title: "Chatbot expérience utisateur",
    label: "Voir plus",
    desc: "L'expérience utilisateur d'un chatbot développé avec Rasa se distingue par son interactivité personnalisée et intelligente. Grâce à des modèles de traitement du langage naturel, il comprend les intentions de l'utilisateur, s'adapte au contexte de la conversation et offre des réponses pertinentes en temps réel. Le chatbot évolue avec les interactions, apprenant des conversations précédentes pour affiner ses réponses. Facile à intégrer dans diverses plateformes (web, mobile, etc.), il permet une assistance fluide, tout en offrant une expérience conversationnelle humaine et engageante.",
  },
  {
    img: "/image/web6.svg",
    tag: "PROJETS • Site web • Html/css, bootstrap, js",
    title: "Site vitrine pour une résidence",
    label: "Voir plus",
    desc: "Un site web vitrine pour une résidence qui offre une interface moderne et responsive. Il inclurait une page d'accueil élégante avec une bannière visuelle de la résidence, des sections pour les services offerts, des galeries d'images interactives, et des informations sur les commodités. Le design serait clair et épuré, avec une navigation fluide facilitée par Bootstrap, des animations subtiles en JavaScript pour enrichir l'expérience utilisateur, et un formulaire de contact intégré. Le tout serait optimisé pour différents appareils grâce à la flexibilité de Bootstrap.",
  },
];

export function ExploreCourses() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          Projets et réalisations
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Venez à la rencontre des idées, de leur conceptions à leurs réalisations
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default ExploreCourses;
