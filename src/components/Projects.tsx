
import React from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Tomato Delivery",
      description: "A full-stack food delivery website connecting users with local restaurants. Offers diverse menus, easy online ordering, real-time order tracking, and secure payment options for a seamless dining experience at home.",
      features: [
        "Diverse menu browsing",
        "Online ordering system", 
        "Real-time order tracking",
        "Secure payment integration",
        "User-friendly interface"
      ],
      technologies: ["React.js", "JavaScript", "Node.js", "MongoDB", "Express.js"],
      gradient: "from-red-500 to-orange-500",
      emoji: "🍅"
    },
    {
      title: "Job Vault",
      description: "A comprehensive full-stack job portal facilitating connections between recruiters and job seekers. Features include recruiter job posting, secure user authentication (OTP verification), and a streamlined application process for candidates.",
      features: [
        "Job posting for recruiters",
        "Job application for candidates", 
        "User authentication with OTP",
        "Robust database management",
        "Streamlined application process"
      ],
      technologies: ["React.js", "JavaScript", "Node.js", "MongoDB", "Express.js"],
      gradient: "from-blue-500 to-purple-500",
      emoji: "💼"
    },
    {
      title: "Handwritten Digit Pattern Recognition",
      description: "An AI/ML application designed to accurately recognize handwritten digits from image input. Leverages deep learning techniques to provide reliable recognition results for practical applications.",
      features: [
        "Image input processing",
        "Accurate digit recognition", 
        "Machine learning model",
        "Deep learning techniques",
        "Reliable recognition results"
      ],
      technologies: ["Python", "TensorFlow", "NumPy"],
      gradient: "from-green-500 to-teal-500",
      emoji: "🔢"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my full-stack development skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-100 overflow-hidden group"
            >
              <div className={`h-32 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 left-4 text-4xl">{project.emoji}</div>
                <div className="absolute bottom-4 right-4">
                  <Zap className="h-6 w-6 text-white/80" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-800 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                        <span className="text-xs text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-800 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => console.log(`View ${project.title} demo`)}
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="flex-1 border-slate-300 text-slate-700 hover:bg-slate-50"
                    onClick={() => console.log(`View ${project.title} on GitHub`)}
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
