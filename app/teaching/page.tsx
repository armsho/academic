"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ------------------ TYPES ------------------
type TA = {
  name: string;
  email: string;
};

type Course = {
  id: string;
  title: string;
  semester: string;
  type: string;
  instructor: string;
  tas: TA[];
  books: string[];
  homeworks: string[];
  rules: string[];
};

// ------------------ COURSES DATA ------------------
const courses: Course[] = [
  {
    id: "ml",
    title: "Machine Learning",
    semester: "Fall 2025",
    type: "Undergraduate",
    instructor: "Prof. Arman Shokrollahi",
    tas: [
      { name: "Alice Smith", email: "alice@example.com" },
      { name: "Bob Johnson", email: "bob@example.com" }
    ],
    books: ["Pattern Recognition – Bishop", "Deep Learning – Goodfellow"],
    homeworks: ["HW1", "HW2"],
    rules: ["Attend 80% of lectures"]
  },

  {
    id: "ai",
    title: "Advanced AI",
    semester: "Spring 2025",
    type: "Graduate",
    instructor: "Prof. Arman Shokrollahi",
    tas: [{ name: "Charlie Lee", email: "charlie@example.com" }],
    books: ["Artificial Intelligence – Russell & Norvig"],
    homeworks: ["HW1", "HW2"],
    rules: ["Participate in class discussions"]
  },

  {
    id: "cv",
    title: "Computer Vision",
    semester: "Fall 2024",
    type: "Graduate",
    instructor: "Prof. Arman Shokrollahi",
    tas: [{ name: "Dana White", email: "dana@example.com" }],
    books: ["Multiple View Geometry – Hartley"],
    homeworks: ["HW1", "HW2"],
    rules: ["Attendance mandatory"]
  },

  {
    id: "qc",
    title: "Quantum Computing",
    semester: "Spring 2024",
    type: "Graduate",
    instructor: "Prof. Arman Shokrollahi",
    tas: [{ name: "Eve Adams", email: "eve@example.com" }],
    books: ["Quantum Computation – Nielsen & Chuang"],
    homeworks: ["HW1", "HW2"],
    rules: ["Read papers before each class"]
  }
];

// ------------------ TEACHING PAGE ------------------
export default function Teaching() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [passwords, setPasswords] = useState<Record<string, string>>({});
  const [verified, setVerified] = useState<Record<string, boolean>>({});

  // Load previously verified courses
  useEffect(() => {
    const saved = localStorage.getItem("verifiedCourses");
    if (saved) setVerified(JSON.parse(saved));
  }, []);

  // Save verified courses
  useEffect(() => {
    localStorage.setItem("verifiedCourses", JSON.stringify(verified));
  }, [verified]);

  const toggleCourse = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handlePassword = async (courseId: string) => {
    const pw = passwords[courseId];
    if (!pw) return alert("Please enter password");

    try {
      const res = await fetch("/api/check-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId, password: pw })
      });

      const data = await res.json();

      if (data.allowed) {
        setVerified((prev) => ({ ...prev, [courseId]: true }));
        alert("Access granted!");
      } else {
        alert("Wrong password.");
      }
    } catch (e) {
      console.error(e);
      alert("Error verifying password.");
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    courseId: string
  ) => {
    if (e.key === "Enter") handlePassword(courseId);
  };

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-20 font-titillium">
        <h1 className="text-4xl font-bold mb-10 text-center md:text-left">
          Teaching
        </h1>

        <p className="text-gray-700 mb-6 text-sm md:text-base">
          Please ask your instructor for the password to access course details.
        </p>

        <div className="flex flex-col gap-4">
          {courses.map((course, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
              >
                {/* HEADER */}
                <button
                  onClick={() => toggleCourse(idx)}
                  className="w-full flex justify-between items-center p-4"
                >
                  <span
                    className={`text-lg ${
                      isOpen ? "font-roboto-sc" : "font-barlow"
                    }`}
                  >
                    {course.title}
                  </span>

                  <span className="text-gray-600 text-sm">
                    {course.semester} • {course.type}
                  </span>
                </button>

                {/* CONTENT */}
                {isOpen && (
                  <div className="px-4 pb-4 text-gray-700 space-y-3">
                    {!verified[course.id] ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="password"
                          placeholder="Enter password"
                          className="border rounded px-2 py-1 text-sm w-40"
                          value={passwords[course.id] || ""}
                          onChange={(e) =>
                            setPasswords((prev) => ({
                              ...prev,
                              [course.id]: e.target.value
                            }))
                          }
                          onKeyDown={(e) => handleKeyDown(e, course.id)}
                        />

                        <button
                          className="bg-blue-600 text-white px-3 py-1 text-sm rounded"
                          onClick={() => handlePassword(course.id)}
                        >
                          Unlock
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p>
                          <strong>Instructor:</strong> {course.instructor}
                        </p>

                        <p>
                          <strong>Teaching Assistant(s): </strong>
                          {course.tas.map((ta, i) => (
                            <span key={i}>
                              <a
                                href={`mailto:${ta.email}`}
                                className="text-blue-600 hover:underline"
                              >
                                {ta.name}
                              </a>
                              {i < course.tas.length - 1 ? ", " : ""}
                            </span>
                          ))}
                        </p>

                        <p>
                          <strong>Books:</strong> {course.books.join(", ")}
                        </p>

                        <p>
                          <strong>Homework:</strong>
                        </p>
                        <ul className="list-disc pl-6">
                          {course.homeworks.map((hw, i) => (
                            <li key={i}>{hw}</li>
                          ))}
                        </ul>

                        <p>
                          <strong>Class Rules:</strong>
                        </p>
                        <ul className="list-disc pl-6">
                          {course.rules.map((rule, i) => (
                            <li key={i}>{rule}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>

      <Footer />
    </>
  );
}
