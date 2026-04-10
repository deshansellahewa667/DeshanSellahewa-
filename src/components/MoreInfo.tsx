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
    <section className="bg-[#121212] pt-12 pb-32 px-8 md:px-24 text-white relative z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Publications */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-4">
            Publications
            <span className="h-px flex-1 bg-white/10"></span>
          </h2>
          <div className="space-y-6">
            {publications.map((pub, i) => (
              <div key={i} className="group">
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-amber-400 transition-colors leading-snug mb-2">
                  {pub.title}
                </h3>
                <p className="text-sm text-gray-500 italic">{pub.journal}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-8 flex items-center gap-4">
            Certifications
            <span className="h-px flex-1 bg-white/10"></span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <div 
                key={i} 
                className="p-4 rounded-xl border border-white/5 bg-white/[0.02] text-sm text-gray-400 hover:border-amber-500/30 transition-colors"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Basic Footer */}
      <footer className="max-w-6xl mx-auto mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-50">
        <p className="text-sm font-light">© 2026 Pasindu Deshan. All rights reserved.</p>
        <div className="flex gap-8 text-sm uppercase tracking-widest font-medium">
          <a href="mailto:deshansellahewa@gmail.com" className="hover:text-amber-500 transition-colors">Email</a>
          <a href="#" className="hover:text-amber-500 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-amber-500 transition-colors">GitHub</a>
        </div>
      </footer>
    </section>
  );
}
