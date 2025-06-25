
import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Trophy } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* GATE Qualification */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200 shadow-lg">
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full p-4">
                <Trophy className="h-12 w-12 text-white" />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">GATE 2024 Qualified</h3>
                <p className="text-slate-600 mb-4">
                  Achieved qualification in the Graduate Aptitude Test in Engineering (GATE) 2024, 
                  demonstrating strong fundamentals in Computer Science and Engineering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <div className="bg-white px-4 py-2 rounded-lg shadow">
                    <span className="text-sm text-slate-600">GATE Score</span>
                    <div className="text-xl font-bold text-slate-800">302</div>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow">
                    <span className="text-sm text-slate-600">All India Rank</span>
                    <div className="text-xl font-bold text-slate-800">25,281</div>
                  </div>
                  <div className="bg-white px-4 py-2 rounded-lg shadow">
                    <span className="text-sm text-slate-600">Year</span>
                    <div className="text-xl font-bold text-slate-800">2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bachelor's Degree */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200 hover:shadow-xl transition-shadow">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
                  <GraduationCap className="h-12 w-12 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Bachelor of Engineering</h3>
                  <p className="text-blue-100">Computer Engineering</p>
                </div>
              </div>

              <div className="lg:w-2/3 space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-800">
                    LDRP Institute of Technology and Research
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-4 mt-3 text-slate-600">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Gandhinagar, Gujarat</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>June 2021 - June 2025</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-800 mb-2">Program Highlights</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">Comprehensive curriculum in Computer Science and Engineering</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">Strong foundation in programming, algorithms, and system design</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">Hands-on experience with modern web technologies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-600">Project-based learning and industry exposure</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
