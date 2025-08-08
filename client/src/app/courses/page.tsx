"use client";
import Link from "next/link";

export default function GridLinksPage() {
  const pages = [
    { name: "Presentations", path: "/" },
    { name: "Curriculum Modules", path: "/about_us" },
    { name: "Qur'an al-Fajr", path: "/events" },
    { name: "Make Quran Relevant for All", path: "/courses" },
    { name: "Qur'an Weekly", path: "/blog" },
    { name: "Emerging Technology", path: "/trainers" },
    { name: "Patent & Intellectual Property", path: "/aiit_models" },
    { name: "Cybersecurity Certification", path: "/contact_us" },
    { name: "Digital Detective", path: "/contact_us" },
    { name: "AI Readiness", path: "/contact_us" },
    { name: "TruthLab", path: "/contact_us" }
  ];

  return (
    <main
      style={{
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ marginBottom: "30px" }}>Courses</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: "30px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {pages.map((page) => (
          <Link
            key={page.path}
            href={page.path}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "15px",
              backgroundColor: "#0F4F7D",
              color: "white",
              borderRadius: "10px",
              fontWeight: "300",
              textDecoration: "none",
              textAlign: "center",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#1366a1")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0F4F7D")
            }
          >
            {page.name}
          </Link>
        ))}
      </div>
    </main>
  );
}