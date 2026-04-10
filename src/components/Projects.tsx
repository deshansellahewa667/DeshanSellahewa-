import { ExternalLink, Database, Cpu, Map as MapIcon, Layers } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "GeoAI for Disaster Resilience",
      description: "Implemented AI and GIS-based solutions for post-disaster recovery and resilience modeling.",
      link: "#",
      tags: ["GeoAI", "Disaster Management", "ArcGIS"],
      icon: <Cpu className="text-[var(--primary)]" />
    },
    {
      title: "UAV-Based Plantation Management",
      description: "Drone image processing and automated analysis for Watawala Plantations PLC.",
      link: "#",
      tags: ["Drone2Map", "UAV", "Remote Sensing"],
      icon: <Layers className="text-[var(--primary)]" />
    },
    {
      title: "LiDAR 3D Digital Twin",
      description: "Transforming raw LiDAR data into engineering-grade 3D mesh models and point clouds.",
      link: "#",
      tags: ["LiDAR", "3D Modeling", "ArcGIS Pro"],
      icon: <Database className="text-[var(--primary)]" />
    },
    {
      title: "Green Volume Measurement",
      description: "Case study of the University Park area at Peradeniya using remotely sensed data.",
      link: "#",
      tags: ["Python API", "Image Analysis", "Research"],
      icon: <MapIcon className="text-[var(--primary)]" />
    },
  ];

  return (
    <section className="bg-[var(--background)] pt-24 pb-32 px-8 md:px-24 text-[var(--foreground)] relative z-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
            Selected <span className="text-[var(--primary)] text-stroke uppercase">Works</span>
          </h2>
          <div className="h-2 w-32 bg-[var(--primary)] rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group relative flex flex-col p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-500 shadow-lg hover:shadow-[0_20px_40px_rgba(37,99,235,0.1)]"
            >
              <div className="mb-6 p-4 bg-[var(--primary)]/10 w-fit rounded-2xl group-hover:bg-[var(--primary)]/20 transition-colors">
                {project.icon}
              </div>
              
              <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:text-[var(--primary)] transition-colors">
                {project.title}
              </h3>
              
              <p className="text-[var(--secondary)] font-medium mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[var(--background)] border border-[var(--border)] rounded-full text-[var(--secondary)] text-xs font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="p-3 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

