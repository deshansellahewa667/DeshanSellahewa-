export default function ExperienceTable() {
  const experience = [
    {
      role: "Geospatial Data Analyst",
      company: "GIS Solutions (Pvt.) Ltd",
      period: "Present",
      focus: "GeoAI, 3D mapping, Cartography, UAV & LiDAR processing",
    },
    {
      role: "Associate GIS Analyst",
      company: "GIS Solutions (Pvt.) Ltd",
      period: "2025",
      focus: "UAV image processing, AI/ML Analysis, GIS Trainer",
    },
    {
      role: "GIS Analyst Intern",
      company: "GIS Solutions (Pvt.) Ltd",
      period: "2024",
      focus: "R&D, Remote Sensing, 3D base visualization",
    },
  ];

  return (
    <section className="bg-[#121212] pt-12 pb-24 px-8 md:px-24 text-white relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 flex items-center gap-4">
          Professional Journey
          <span className="h-px flex-1 bg-white/10"></span>
        </h2>
        
        <div className="overflow-x-auto rounded-2xl border border-white/5 bg-[#161616]/50 backdrop-blur-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="py-6 px-8 font-semibold text-amber-500 uppercase tracking-wider text-sm">Role</th>
                <th className="py-6 px-8 font-semibold text-amber-500 uppercase tracking-wider text-sm">Company</th>
                <th className="py-6 px-8 font-semibold text-amber-500 uppercase tracking-wider text-sm">Period</th>
                <th className="py-6 px-8 font-semibold text-amber-500 uppercase tracking-wider text-sm">Specialization</th>
              </tr>
            </thead>
            <tbody>
              {experience.map((exp, index) => (
                <tr 
                  key={index} 
                  className="group border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-6 px-8 font-medium text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight">
                    {exp.role}
                  </td>
                  <td className="py-6 px-8 text-gray-400">{exp.company}</td>
                  <td className="py-6 px-8">
                    <span className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-gray-300">
                      {exp.period}
                    </span>
                  </td>
                  <td className="py-6 px-8 text-gray-400 font-light leading-relaxed">
                    {exp.focus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
