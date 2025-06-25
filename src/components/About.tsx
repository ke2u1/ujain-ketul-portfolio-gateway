
import React from 'react';
import { Award, Brain, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "GATE Qualified",
      description: "Achieved qualification in GATE 2024 with Score: 302, AIR: 25281"
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Problem Solver",
      description: "Strong analytical and critical thinking skills with attention to detail"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Player",
      description: "Excellent communication and collaboration abilities"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Goal Oriented",
      description: "Passionate about crafting secure, responsive web applications"
    }
  ];

  const hobbies = ["📚 Avid Reader", "♟️ Chess Enthusiast", "🎌 Anime & Manga Fan"];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed">
              As a driven Computer Engineering undergraduate, I am passionate about crafting 
              secure, responsive, and user-friendly web applications. My expertise spans both 
              front-end (React.js, Tailwind CSS) and back-end (Node.js, MongoDB) technologies, 
              enabling me to build full-stack solutions.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I achieved qualification in the GATE examination in 2024, demonstrating my 
              strong foundation in computer science fundamentals. I am eager to grow, 
              collaborate, and contribute to innovative products that make a real impact.
            </p>
            
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-slate-800">Personal Interests</h3>
              <div className="flex flex-wrap gap-3">
                {hobbies.map((hobby, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
