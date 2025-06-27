
import React from 'react';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                ✨ GATE 2024 Qualified
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Ujain Ketul
              </h1>
              <h2 className="text-2xl lg:text-3xl text-blue-600 font-semibold">
                Full Stack Web Developer
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Motivated Computer Engineering undergraduate with a passion for building 
                impactful web applications. Skilled in React.js, Node.js, MongoDB, and more.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-3 text-sm">
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">GATE 2024 Qualified</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Front-end & Back-end Expertise</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full">Real-world Applications</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('#projects')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
              >
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('https://www.linkedin.com/in/ketul-ujain-9360b8252/', '_blank')}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Connect on LinkedIn
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-scale-in">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-2xl">⚡</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-xl">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
