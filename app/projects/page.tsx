"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Project = {
  title: string;
  image: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "AI Research Platform",
    image: "/projects/ai_platform.jpg",
    description: "A platform for large-scale AI experiments and data analysis.",
  },
  {
    title: "Quantum Simulator",
    image: "/projects/quantum_sim.jpg",
    description: "Simulation tool for testing quantum algorithms efficiently.",
  },
  {
    title: "Multi-modal Data Hub",
    image: "/projects/multi_modal.png",
    description: "Integrates various data types for advanced machine learning pipelines.",
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-18 font-titillium">
        <h1 className="text-4xl font-bold mb-10 text-center md:text-left">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-4 flex flex-col items-center text-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-barlow mb-2">{project.title}</h2>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

