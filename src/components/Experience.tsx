
import React from 'react';
import { Calendar, MapPin, Award, CheckCircle } from 'lucide-react';

const Experience = () => {
  const achievements = [
    "Built dynamic website with integrated front-end and back-end functionalities",
    "Successfully showcased products and facilitated transactions",
    "Completed all assigned tasks within deadline",
    "Earned Letter of Recommendation (LOR) for outstanding contributions",
    "Received certificate of completion"
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Web Development Intern</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">Prodigy Infotech</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">August 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Role Description</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Learned and applied web development skills by building a dynamic website. 
                    Integrated front-end and back-end functionalities to showcase products and 
                    facilitate transactions. Successfully completed tasks, earning recognition 
                    through a Letter of Recommendation and completion certificate.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-4">Key Achievements</h4>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full">
                    <Award className="h-4 w-4 mr-2" />
                    <span className="text-sm font-semibold">LOR Recipient</span>
                  </div>
                  <div className="flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
                    <Award className="h-4 w-4 mr-2" />
                    <span className="text-sm font-semibold">Certified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
