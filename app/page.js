"use client";
import React, { useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaReact, FaNodeJs, FaDatabase, FaEye } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb, SiGit, SiSlack, SiTrello, SiExpress } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import fotoFinanzas from "./assets/fotoFinanzas.jpg";
import webAdmin from "./assets/imagenWebAdmin.png";
import pm4 from "./assets/foto-bien-PM4.png"

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen text-gray-300 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      
      <header className="flex flex-col items-center justify-center h-screen mb-16 text-center max-w-7xl">
        <h1 className="text-6xl font-extrabold text-yellow-500 animate-fade-in animate-bounce"><span className="mt-4 text-4xl text-gray-400 animate-fade-in-up">Hola, soy</span> Joaquin Ibañez Aro</h1>
        <p className="mt-4 text-2xl text-gray-400 animate-fade-in-up">Full Stack Developer</p>
      </header>

      <section className="w-full p-8 mb-12 bg-gray-800 rounded-lg shadow-md max-w-7xl text-gray-300" data-aos="fade-up">
        <h2 className="mb-4 text-4xl font-bold text-yellow-500 text-center">Perfil Profesional</h2>

        <div className="mb-8 text-center">
          <p className="text-lg">
            Soy Joaquin Ibañez Aro, tengo 20 años y soy un Desarrollador Full Stack con una formación sólida y continua. Inicié mi carrera en programación con el curso de Platzi en 2023, donde adquirí conocimientos en <strong>HTML, CSS</strong> y <strong>JavaScript</strong>. Finalicé el cursado en Henry, desarrollando habilidades en <strong>React, Next.js, Tailwind, Node.js</strong> y <strong>Express</strong>. Me apasiona colaborar en proyectos de alto rendimiento, destacando en comunicación, trabajo en equipo, paciencia, puntualidad y organización. Aspiro a trabajar en grandes empresas, aportando mis conocimientos para soluciones tecnológicas de impacto.
          </p>
        </div>

        <div className="text-sm text-gray-400">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4 text-center">Contacto</h3>
          <div className="flex flex-col md:flex-row justify-around items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-yellow-500" />
              <p>Argentina, Mendoza</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-yellow-500" />
              <p>2613907834</p>
            </div>
            <a href="mailto:joaquinpulga2004@gmail.com" className="flex items-center hover:text-yellow-400 transition duration-300">
              <FaEnvelope className="mr-1" /> joaquinpulga2004@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/joaquin-ibañez-851379225" className="flex items-center hover:text-yellow-400 transition duration-300" target="_blank">
              <FaLinkedin className="mr-1" /> LinkedIn
            </a>
            <a href="https://github.com/joapulga" className="flex items-center hover:text-yellow-400 transition duration-300" target="_blank">
              <FaGithub className="mr-1" /> GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="w-full p-8 mb-12 bg-gray-800 rounded-lg shadow-md max-w-7xl" data-aos="fade-up">
        <h2 className="mb-4 text-3xl font-bold text-yellow-500">Proyectos</h2>
        {[
          {
            title: "WebAdminISP",
            date: "jul. 2024 - ago. 2024",
            description: "Aplicación para administrar servicios de Internet, con funcionalidades como gestión de usuarios, relevamientos técnicos, asistencias técnicas, entre otros.",
            front: "React, Next.js, Tailwind",
            back: "Nest.js, TypeOrm",
            db: "PostgreSQL",
            repoLink: "https://github.com/WebAdminISP",
            image: webAdmin,
          },
          {
            title: "Sistema de Finanzas",
            date: "ago. 2024 - oct. 2024",
            description: "Sistema para gestión de finanzas personales y empresariales, permitiendo registrar ingresos, egresos y visualizar gráficamente la situación financiera.",
            front: "React, Tailwind CSS",
            back: "Node.js, Express",
            db: "MongoDB",
            repoLink: "https://github.com/joapulga/Proyecto-Final-Henry",
            image: fotoFinanzas,
          },
          {
            title: "Eccomerce",
            date: "jun. 2024 - jul. 2024",
            description: "Este proyecto de e-commerce es una plataforma de compras en línea diseñada para brindar una experiencia de usuario fluida y eficiente. Permite a los usuarios explorar productos, agregarlos y finalizar la compra de manera sencilla.",
            front: "React, Tailwind CSS",
            back: "Node.js, Express",
            db: "MongoDB",
            repoLink: "https://github.com/joapulga/demo-clonePM4",
            image: pm4,
          }
        ].map((project, index) => (
          <div key={index} className="flex flex-col mb-6 overflow-hidden bg-gray-900 rounded-lg shadow-lg transition-transform transform hover:scale-105 md:flex-row">
            <Image src={project.image} alt={project.title} className="object-cover w-full h-48 md:w-1/3 md:h-auto" />
            <div className="flex flex-col justify-between p-6 md:w-2/3">
              <div>
                <h3 className="mb-2 text-2xl font-semibold text-gray-100">{project.title}</h3>
                <p className="mb-2 text-sm text-gray-500">{project.date} | Henry Bootcamp</p>
                <p className="mb-4 text-gray-400">{project.description}</p>
              </div>
              <div className="flex items-center mt-4 space-x-4 text-gray-400">
                <FaReact className="text-blue-500" />
                <span><strong>Front:</strong> {project.front}</span>
                <FaNodeJs className="text-green-500" />
                <span><strong>Back:</strong> {project.back}</span>
                <FaDatabase className="text-purple-500" />
                <span><strong>Base de datos:</strong> {project.db}</span>
              </div>
              <div className="flex mt-4 space-x-4">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 transition duration-300 hover:text-yellow-500 no-underline"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="w-full p-8 mb-12 bg-gray-800 rounded-lg shadow-md max-w-7xl" data-aos="fade-up">
        <h2 className="mb-4 text-3xl font-bold text-yellow-500">Tecnologías</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex items-center space-x-2"><SiJavascript className="text-yellow-500" /> <span>JavaScript</span></div>
          <div className="flex items-center space-x-2"><SiTypescript className="text-blue-500" /> <span>TypeScript</span></div>
          <div className="flex items-center space-x-2"><FaReact className="text-blue-500" /> <span>React</span></div>
          <div className="flex items-center space-x-2"><SiNextdotjs className="text-gray-300" /> <span>Next.js</span></div>
          <div className="flex items-center space-x-2"><SiTailwindcss className="text-teal-400" /> <span>Tailwind CSS</span></div>
          <div className="flex items-center space-x-2"><FaNodeJs className="text-green-500" /> <span>Node.js</span></div>
          <div className="flex items-center space-x-2"><SiExpress className="text-gray-300" /> <span>Express</span></div>
          <div className="flex items-center space-x-2"><SiPostgresql className="text-blue-600" /> <span>PostgreSQL</span></div>
          <div className="flex items-center space-x-2"><SiMongodb className="text-green-500" /> <span>MongoDB</span></div>
          <div className="flex items-center space-x-2"><SiGit className="text-red-500" /> <span>Git</span></div>
          <div className="flex items-center space-x-2"><SiSlack className="text-purple-500" /> <span>Slack</span></div>
          <div className="flex items-center space-x-2"><SiTrello className="text-blue-500" /> <span>Trello</span></div>
        </div>
      </section>

    </div>
  );
};

export default Resume;
