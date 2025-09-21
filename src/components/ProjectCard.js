// src/components/ProjectCard.js
import Link from "next/link";

export default function ProjectCard({ title, tech, desc, link }) {
  return (
    <div className="p-6 bg-card rounded-lg border border-accent/8 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted mt-2">{desc}</p>
      <p className="mt-3 text-xs text-accent">{tech}</p>
      <div className="mt-4">
        <Link
          href={link}
          className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
        >
          View project →
        </Link>
      </div>
    </div>
  );
}