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
    <section className="bg-[var(--background)] pt-12 pb-24 px-8 md:px-24 text-[var(--foreground)] relative z-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
              The <span className="text-[var(--primary)] uppercase">Professional</span> Journey
            </h2>
            <p className="text-[var(--secondary)] font-medium">Core milestones in Geospatial Intelligence.</p>
          </div>
          <div className="h-px flex-1 bg-[var(--border)] mb-4 hidden md:block ml-8"></div>
        </div>
        
        <div className="table-container shadow-2xl">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Organization</th>
                <th>Timeline</th>
                <th>Specialization</th>
              </tr>
            </thead>
            <tbody>
              {experience.map((exp, index) => (
                <tr key={index}>
                  <td className="font-bold text-[var(--primary)] text-sm tracking-wide">
                    {exp.role}
                  </td>
                  <td className="text-[var(--foreground)] opacity-80 font-medium">{exp.company}</td>
                  <td className="">
                    <span className="px-3 py-1 rounded-md bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold border border-[var(--primary)]/20">
                      {exp.period}
                    </span>
                  </td>
                  <td className="text-[var(--secondary)] font-normal italic">
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

