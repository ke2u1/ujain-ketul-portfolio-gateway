
import React from 'react';
import { Code, Database, Globe, GitBranch, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C++", "C", "Java"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Frontend & UI/UX",
      skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Next.js"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend & Databases",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "Firebase"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "Version Control",
      skills: ["Git", "GitHub"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  const certifications = [
    "Full Stack Developer - GeeksforGeeks (Nov 2024)",
    "Data Structures & Algorithms - Coding Ninjas (Nov 2024)",
    "Python - GeeksforGeeks (Aug 2024)",
    "CSS - HackerRank (May 2024)",
    "Database Management System - NPTEL (Mar 2025)",
    "Python for Data Science - NPTEL (Mar 2025)",
    "C Language - Coding Ninjas (Aug 2024)",
    "C++ - Coding Ninjas (Aug 2024)",
    "Java - Coding Ninjas (Aug 2024)",
    "Problem Solving - HackerRank (Aug 2024)"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 text-center mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm text-center font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <Award className="h-8 w-8 text-yellow-600 mr-3" />
            <h3 className="text-2xl font-semibold text-slate-800">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200 hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-slate-700 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
