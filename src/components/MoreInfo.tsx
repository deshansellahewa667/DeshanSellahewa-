import { FileText, Award, Mail } from "lucide-react";

// Brand icons are not available in modern lucide-react, so we use custom SVGs
const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function MoreInfo() {
  const certifications = [
    "AI Professional Certificate (IIT)",
    "ArcGIS Imagery MOOC: Foundations",
    "Spatial Data Science: The New Frontier",
    "Cartography (Esri Training)",
    "Python for Beginners (UoM)",
    "Classifying Objects using Deep Learning",
  ];

  const publications = [
    {
      title: "Measure the Green Volume Using Remotely Sensed Data",
      journal: "URCFA 2024, Faculty of Arts, University of Peradeniya",
    },
    {
      title: "Southern Expressway's Influence on Settlement Patterns",
      journal: "IRSSSH 2024, Rajarata University of Sri Lanka",
    },
  ];

  return (
    <section className="bg-[var(--background)] pt-12 pb-32 px-8 md:px-24 text-[var(--foreground)] relative z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Publications */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[var(--primary)] text-white rounded-xl shadow-lg">
              <FileText size={24} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Publications</h2>
          </div>
          <div className="space-y-8">
            {publications.map((pub, i) => (
              <div key={i} className="group border-l-2 border-[var(--border)] pl-6 hover:border-[var(--primary)] transition-all">
                <h3 className="text-xl font-bold text-[var(--foreground)] group-hover:text-[var(--primary)] transition-colors leading-tight mb-2">
                  {pub.title}
                </h3>
                <p className="text-sm text-[var(--secondary)] font-medium italic">{pub.journal}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-[var(--primary)] text-white rounded-xl shadow-lg">
              <Award size={24} />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div 
                key={i} 
                className="p-4 rounded-xl border border-[var(--border)] bg-[var(--card-bg)] text-sm text-[var(--secondary)] font-bold hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all flex items-center gap-3"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></div>
                {cert}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-32 pt-12 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
           <p className="text-sm font-bold opacity-60">© 2026 DESHAN SELLAHEWA</p>
           <p className="text-[10px] text-[var(--secondary)] uppercase tracking-[0.3em]">Geospatial Intelligence Engineer</p>
        </div>
        <div className="flex gap-6">
          <a href="mailto:deshansellahewa@gmail.com" className="p-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-full text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white transition-all shadow-md">
            <Mail size={20} />
          </a>
          <a href="#" className="p-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-full text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white transition-all shadow-md">
            <LinkedinIcon size={20} />
          </a>
          <a href="#" className="p-3 bg-[var(--card-bg)] border border-[var(--border)] rounded-full text-[var(--foreground)] hover:bg-[var(--primary)] hover:text-white transition-all shadow-md">
            <GithubIcon size={20} />
          </a>
        </div>
      </footer>
    </section>
  );
}


