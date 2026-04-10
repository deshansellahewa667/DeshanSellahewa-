import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "GeoAI for Disaster Resilience",
      description: "Implemented AI and GIS-based solutions for post-disaster recovery and resilience modeling.",
      link: "#",
      tags: ["GeoAI", "Disaster Management", "ArcGIS"],
    },
    {
      title: "UAV-Based Plantation Management",
      description: "Drone image processing and automated analysis for Watawala Plantations PLC.",
      link: "#",
      tags: ["Drone2Map", "UAV", "Remote Sensing"],
    },
    {
      title: "LiDAR 3D Digital Twin",
      description: "Transforming raw LiDAR data into engineering-grade 3D mesh models and point clouds.",
      link: "#",
      tags: ["LiDAR", "3D Modeling", "ArcGIS Pro"],
    },
    {
      title: "Green Volume Measurement",
      description: "Case study of the University Park area at Peradeniya using remotely sensed data.",
      link: "#",
      tags: ["Python API", "Image Analysis", "Research"],
    },
  ];

  return (
    <section className="min-h-screen bg-[#121212] pt-24 pb-32 px-8 md:px-24 text-white relative z-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">
          Selected Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl rounded-2xl"></div>
              
              <div className="relative h-full bg-[#161616]/80 backdrop-blur-md rounded-2xl p-8 flex flex-col justify-between border border-white/5 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight mb-3 group-hover:text-amber-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-light mb-8 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-2 text-sm">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-gray-300 font-medium tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a href={project.link} className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-white">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
