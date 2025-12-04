"use client";
import { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import Footer from "../components/Footer";
import { FaFilePdf, FaFilePowerpoint, FaVideo, FaFileAlt, FaBook } from "react-icons/fa";

// Define your papers
type Paper = {
  title: string;
  authors: { name: string; link: string }[];
  image: string;
  pdf?: string;
  slides?: string;
  video?: string;
  abstract: string;
  journal?: string;
  year?: number;
  type?: "journal" | "conference";
};

const papers: Paper[] = [

   {
    title: "Adaptive Deep Reinforcement Learning for Dynamic Resource Allocation in Edge Computing Networks",
    authors: [
      { name: "Arman Shokrollahi", link: "https://example.com/arman" },
      { name: "David Researcher", link: "https://example.com/dresearcher" },
      { name: "Alan Pandichery", link: "https://example.com/dresearcher" }
    ],
    image: "/papers/paper3.gif",
    pdf: "/papers/paper3.pdf",
    slides: "/papers/paper3_slides.pdf",
    video: "/papers/paper3_video.mp4",
    abstract:
      "Edge computing environments face rapidly changing workloads that require efficient, autonomous resource allocation. This work proposes an adaptive deep reinforcement learning framework capable of predicting task demand, reallocating computational power, and minimizing latency in real time. Experiments show significant improvements over classical scheduling algorithms in both throughput and energy efficiency.",
    journal: "Quantum Computing Journal",
    year: 2025,
    type: "journal",
  },
  {
    title: "Exploring Quantum Algorithms for Optimization Problems",
    authors: [
      { name: "Arman Shokrollahi", link: "https://example.com/arman" },
      { name: "Dorian Yates", link: "https://example.com/dresearcher" },
    ],
    image: "/papers/paper2.webp",
    pdf: "/papers/paper2.pdf",
    abstract:
      "This paper explores the application of quantum computing techniques to classical optimization problems...",
    journal: "Quantum Computing Journal",
    year: 2023,
    type: "conference",
  },
  {
    title: "A Novel Framework for Multi-Modal Data Integration in Intelligent Systems",
    authors: [
      { name: "Arman Shokrollahi", link: "https://example.com/arman" },
      { name: "Brian Researcher", link: "https://example.com/bresearcher" },
    ],
    image: "/papers/paper1.gif",
    pdf: "/papers/paper1.pdf",
    slides: "/papers/paper1_slides.pdf",
    video: "/papers/paper1_video.mp4",
    abstract:
      "The rapid proliferation of heterogeneous data sources in modern computing environments presents both significant opportunities and challenges...",
    journal: "Journal of Imaginary Research",
    year: 2022,
    type: "journal",
  },
];

// BibTeX Generator
function generateBibTeX(paper: Paper) {
  const journal = paper.journal || "Journal Name";
  const year = paper.year || new Date().getFullYear();
  const key = paper.authors[0].name.replace(/\s+/g, "").toLowerCase() + year;

  const authorsStr = paper.authors.map(a => a.name).join(", ");

  return `@article{${key},
  title={${paper.title}},
  author={${authorsStr}},
  journal={${journal}},
  year={${year}}
}`;
}

// Author Component
function Authors({ authors }: { authors: { name: string; link: string }[] }) {
  return (
    <p className="text-gray-600 font-roboto-sc text-lg">
      {authors.map((author, idx) => (
        <span key={idx}>
          <a
            href={author.link}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-red-600"
          >
            {author.name}
          </a>
          {idx < authors.length - 1 && ", "}
        </span>
      ))}
    </p>
  );
}

export default function Publications() {
  const [abstractPaper, setAbstractPaper] = useState<Paper | null>(null);
  const [bibPaper, setBibPaper] = useState<Paper | null>(null);

  // --- FILTER STATES ---
  const [searchQuery, setSearchQuery] = useState("");
  const [filterYear, setFilterYear] = useState("all");
  const [filterType, setFilterType] = useState("all");

  // Unique year list
  const yearOptions = useMemo(() => {
  const validYears = papers
    .map((p) => p.year)
    .filter((y): y is number => typeof y === "number");

  return Array.from(new Set(validYears)).sort((a, b) => b - a);
}, []);


  // FILTERING LOGIC
  const filteredPapers = useMemo(() => {
    return papers.filter(paper => {
      const matchesSearch =
        paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        paper.authors.some(a => a.name.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesYear = filterYear === "all" || paper.year?.toString() === filterYear;
      const matchesType = filterType === "all" || paper.type === filterType;

      return matchesSearch && matchesYear && matchesType;
    });
  }, [searchQuery, filterYear, filterType]);

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-18 font-titillium">
        <h1 className="text-4xl font-bold mb-10 text-center md:text-left">Publications</h1>

        {/* FILTERS */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">

          {/* Search */}
          <input
            type="text"
            placeholder="Search by title or author..."
            className="w-full md:w-1/2 px-4 py-2 border rounded-xl shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Filter Year */}
          <select
            className="px-4 py-2 border rounded-xl shadow-sm"
            value={filterYear}
            onChange={(e) => setFilterYear(e.target.value)}
          >
            <option value="all">All Years</option>
            {yearOptions.map(y => (
              <option key={y} value={y.toString()}>
                {y}
              </option>
            ))}
          </select>

          {/* Filter Type */}
          <select
            className="px-4 py-2 border rounded-xl shadow-sm"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="journal">Journal</option>
            <option value="conference">Conference</option>
          </select>
        </div>

        {/* PAPER LIST */}
        <div className="flex flex-col gap-10">
          {filteredPapers.map((paper, idx) => (
            <div
              key={idx}
              className="relative flex flex-col md:flex-row gap-6 items-center md:items-start p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <span className="absolute top-2 left-2 bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
                {filteredPapers.length - idx}
              </span>

              <img
                src={paper.image}
                alt={paper.title}
                className="w-full md:w-32 h-32 object-cover rounded-xl"
              />

              <div className="flex-1 flex flex-col gap-3">
                <h2 className="text-[1.3em] font-jost">{paper.title}</h2>

                <Authors authors={paper.authors} />

                <p className="text-gray-700 text-sm italic">
                  {paper.journal} ({paper.year})
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-2">
                  <button
                    className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition text-sm"
                    style={{ color: "#6B21A8" }}
                    onClick={() => setAbstractPaper(paper)}
                  >
                    <FaFileAlt className="w-4 h-4" /> Abstract
                  </button>

                  <button
                    className="flex items-center gap-1 px-3 py-1 bg-gray-200 rounded-full hover:bg-gray-300 transition text-sm"
                    style={{ color: "#059669" }}
                    onClick={() => setBibPaper(paper)}
                  >
                    <FaBook className="w-4 h-4" /> BibTeX
                  </button>

                  {paper.pdf && (
                    <a
                      href={paper.pdf}
                      target="_blank"
                      className="flex items-center gap-1 px-3 py-1 bg-blue-100 rounded-full shadow-sm text-sm transition"
                      style={{ color: "#2563EB" }}
                    >
                      <FaFilePdf className="w-4 h-4" /> PDF
                    </a>
                  )}

                  {paper.slides && (
                    <a
                      href={paper.slides}
                      target="_blank"
                      className="flex items-center gap-1 px-3 py-1 bg-green-100 rounded-full shadow-sm text-sm transition"
                      style={{ color: "#C47904" }}
                    >
                      <FaFilePowerpoint className="w-4 h-4" /> Slides
                    </a>
                  )}

                  {paper.video && (
                    <a
                      href={paper.video}
                      target="_blank"
                      className="flex items-center gap-1 px-3 py-1 bg-red-100 rounded-full shadow-sm text-sm transition"
                      style={{ color: "#EF4444" }}
                    >
                      <FaVideo className="w-4 h-4" /> Video
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ABSTRACT MODAL */}
        {abstractPaper && (
          <Modal isOpen onClose={() => setAbstractPaper(null)}>
            <h2 className="text-1xl font-jost mb-3">{abstractPaper.title}</h2>
            <Authors authors={abstractPaper.authors} />
            <p className="text-gray-700 text-sm italic mb-4">
              {abstractPaper.journal} ({abstractPaper.year})
            </p>

            <h3 className="font-semibold mb-1">Abstract</h3>
            <p>{abstractPaper.abstract}</p>
          </Modal>
        )}

        {/* BIBTEX MODAL */}
        {bibPaper && (
          <Modal isOpen onClose={() => setBibPaper(null)}>
            <h2 className="text-1xl font-jost mb-3">{bibPaper.title}</h2>
            <Authors authors={bibPaper.authors} />
            <p className="text-gray-700 text-sm italic mb-4">
              {bibPaper.journal} ({bibPaper.year})
            </p>

            <h3 className="font-semibold mb-1">BibTeX</h3>
            <pre className="bg-gray-100 p-3 rounded-lg text-sm overflow-x-auto">
              {generateBibTeX(bibPaper)}
            </pre>
          </Modal>
        )}
      </main>

      <Footer />
    </>
  );
}

