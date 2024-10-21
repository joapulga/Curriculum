import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-12 text-white bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 sm:px-6 lg:px-8">
      <header className="w-full mb-16 text-center max-w-7xl">
        <h1 className="text-5xl font-extrabold text-blue-500 animate-bounce">Joaquin Ibañez Aro</h1>
        <p className="mt-2 text-2xl text-gray-300 animate-fade-in-up">Full Stack Developer</p>
      </header>

      <section className="w-full mb-12 max-w-7xl animate-fade-in-up">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt />
            <p>Argentina, Mendoza</p>
            <FaPhoneAlt />
            <p>Telefono: 2613907834</p>
          </div>
          <div className="flex space-x-4">
            <a href="mailto:joaquinpulga2004@gmail.com" className="flex items-center underline transition duration-300 hover:text-blue-400">
              <FaEnvelope className="mr-1" /> joaquinpulga2004@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/joaquin-ibañez-851379225" className="flex items-center underline transition duration-300 hover:text-blue-400">
              <FaLinkedin className="mr-1" /> LinkedIn
            </a>
            <a href="https://github.com/joapulga" className="flex items-center underline transition duration-300 hover:text-blue-400">
              <FaGithub className="mr-1" /> GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="w-full p-8 mb-12 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-700 max-w-7xl animate-fade-in-up">
        <h2 className="mb-4 text-3xl font-bold text-blue-500">Resumen</h2>
        <p className="text-gray-300">
          Full Stack Developer con estudios realizados en “SoyHenry”. Especializado en Front-end con conocimientos en metodologías ágiles, GIT, estructura de datos, algoritmos, React, Next.js, Tailwind, Axios, Redux, Node.js, Express, PostgreSQL.
        </p>
      </section>

      <section className="w-full p-8 mb-12 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-700 max-w-7xl animate-slide-up">
        <h2 className="mb-4 text-3xl font-bold text-blue-500">Proyectos</h2>
        <div className="mb-6">
          <h3 className="mb-2 text-2xl font-semibold text-gray-300">Full Stack Web Developer - WebAdminISP</h3>
          <p className="mb-4 text-sm text-gray-400">jul. 2024 - ago. 2024 | Henry Bootcamp</p>
          <p className="mb-4 text-gray-300">
            WebAdminISP es una aplicación destinada a la administración de servicios de Internet, ofreciendo funcionalidades como gestión de usuarios, relevamientos técnicos, asistencias técnicas, gestión de equipos, pasarela de pagos, envío de facturas y recibos de pago, entre otros.
          </p>
          <p className="text-gray-300"><strong>Front:</strong> React, Next.js, Tailwind</p>
          <p className="text-gray-300"><strong>Back:</strong> Nest.js, TypeOrm</p>
          <p className="text-gray-300"><strong>Base de datos:</strong> PostgreSQL</p>
          <a href="https://github.com/WebAdminISP" target="blanck" className="block mt-2 text-blue-400 underline transition duration-300 hover:text-blue-500">
            Link al repo: WebAdminISP
          </a>
        </div>
        
        <div className="mb-6">
          <h3 className="mb-2 text-2xl font-semibold text-gray-300">Full Stack Web Developer - Sistema de Finanzas</h3>
          <p className="mb-4 text-sm text-gray-400">ago. 2024 - oct. 2024 | Henry Bootcamp</p>
          <p className="mb-4 text-gray-300">
            Sistema de Finanzas es una aplicación web que permite la gestión de finanzas personales y empresariales. A través de la plataforma, los usuarios pueden registrar ingresos, egresos, generar reportes y visualizar gráficamente su situación financiera. 
          </p>
          <p className="text-gray-300"><strong>Front:</strong> React, Tailwind CSS</p>
          <p className="text-gray-300"><strong>Back:</strong> Node.js, Express</p>
          <p className="text-gray-300"><strong>Base de datos:</strong> MongoDB</p>
          <a href="https://github.com/joapulga/Proyecto-Final-Henry" target="blanck" className="block mt-2 text-blue-400 underline transition duration-300 hover:text-blue-500">
            Link al repo: Sistema de Finanzas
          </a>
        </div>
      </section>

      <section className="w-full p-8 mb-12 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-700 max-w-7xl animate-fade-in-up">
        <h2 className="mb-4 text-3xl font-bold text-blue-500">Tecnologías</h2>
        <ul className="text-gray-300 list-disc list-inside">
          <li>JavaScript, TypeScript, SQL (PostgreSQL).</li>
          <li>JavaScript, TypeScript, React, Next.js, Tailwind CSS, Node.js, Express.</li>
          <li>PostgreSQL, MongoDB.</li>
          <li>Git, Slack, Trello.</li>
        </ul>
      </section>

      <section className="w-full p-8 mb-12 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-700 max-w-7xl animate-slide-up">
        <h2 className="mb-4 text-3xl font-bold text-blue-500">Educación Profesional</h2>
        <p className="text-gray-300">
          Full Stack Web Developer - Henry Bootcamp
          En 2024, completé el intensivo Bootcamp de Henry, donde adquirí una formación sólida en desarrollo web Full Stack, que incluyó más de 800 horas de aprendizaje teórico-práctico. 
          Durante el curso, me especialicé en el desarrollo de aplicaciones web tanto en el frontend como en el backend, utilizando tecnologías como React, Next.js, Node.js, Express, y PostgreSQL. 
        </p>
      </section>

      <section className="w-full p-8 mb-12 rounded-lg shadow-lg bg-gradient-to-r from-gray-800 to-gray-700 max-w-7xl animate-fade-in-up">
        <h2 className="mb-4 text-3xl font-bold text-blue-500">Idiomas</h2>
        <p className="text-gray-300">
          Nivel de Inglés: B2 Intermedio
          Poseo un nivel de inglés B2 Intermedio, lo que me permite manejarme con confianza en situaciones cotidianas y en contextos profesionales básicos. 
        </p>
      </section>
    </div>
  );
};

export default Resume;
