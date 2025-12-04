"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaFilePdf, FaGoogle, FaTwitter, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="font-titillium flex justify-center px-6 sm:px-8 lg:px-0 pt-32 pb-12">
        <div className="max-w-5xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-10">

          {/* Image + Social Icons */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="/me.jpg"
              alt="Profile"
              className="w-55 h-60 object-cover rounded-2xl shadow-lg"
            />

            <h1 className="text-4xl font-bold mt-4 text-center lg:hidden">
              Arman Shokrollahi
            </h1>

            <div className="flex justify-center gap-3 mt-2">
              {/* Original color icons using no-link-style */}
              <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" className="text-2xl no-link-style" title="Email"><FaEnvelope style={{ color: '#34D399' }} /></a>
              <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" className="text-2xl no-link-style" title="CV"><FaFilePdf style={{ color: '#EF4444' }} /></a>
              <a href="https://scholar.google.com/citations?user=YOURID" target="_blank" rel="noopener noreferrer" className="text-2xl no-link-style" title="Google Scholar"><FaGoogle style={{ color: '#4285F4' }} /></a>
              <a href="https://twitter.com/YOURHANDLE" target="_blank" rel="noopener noreferrer" className="text-2xl no-link-style" title="Twitter"><FaTwitter style={{ color: '#1DA1F2' }} /></a>
              <a href="https://instagram.com/YOURHANDLE" target="_blank" rel="noopener noreferrer" className="text-2xl no-link-style" title="Instagram"><FaInstagram style={{ color: '#E1306C' }} /></a>
              <a href="https://github.com/YOURHANDLE" target="_blank" rel="noopener noreferrer" className="text-2xl no-link-style" title="GitHub"><FaGithub style={{ color: '#181717' }} /></a>
            </div>
          </div>

          {/* Text + Research Interests */}
          <div className="flex-1 mt-6 lg:mt-0 text-left px-4 sm:px-6 md:px-0">
            <h1 className="text-5xl font-bold mb-4 hidden lg:block">Arman Shokrollahi</h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              I am currently a nonresident research scientist at Google Research, part of the Pittsburgh Google Cloud group. Prior experience at Microsoft and Johnson Controls. M.S. & Ph.D. in Computer Science from <a href="https://github.com/YOURHANDLE" target="_blank">Carnegie Mellon University</a> under Prof. Alan Friez. 
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-3">Research Interests</h2>
              <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed">
                <li>Machine Learning and Deep Neural Networks</li>
                <li>Computer Vision and Multi-Modal Learning</li>
                <li>Large-Scale Distributed Systems</li>
                <li>Optimization for AI and Scientific Computing</li>
                <li>Quantum Algorithms and Emerging Computation Models</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

