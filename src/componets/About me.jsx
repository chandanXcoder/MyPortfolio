import React, { useState, useEffect } from 'react';
import { Code, Globe, Smartphone, Database, Award, Download, MapPin, Mail, Calendar, Star, Zap } from 'lucide-react';

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  useEffect(() => {
    setIsVisible(true);
    // Animate stats numbers
    const targets = [50, 3, 20, 24];
    const duration = 2000;
    const steps = 60;
    const increment = targets.map(target => target / steps);
    
    let current = [0, 0, 0, 0];
    const timer = setInterval(() => {
      current = current.map((val, i) => Math.min(val + increment[i], targets[i]));
      setAnimatedStats([...current]);
      
      if (current.every((val, i) => val >= targets[i])) {
        clearInterval(timer);
        setAnimatedStats([50, 3, 20, 24]);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);
  const stats = [
    { number: `${Math.round(animatedStats[0])}+`, label: 'Projects Completed', icon: Code, color: 'from-blue-500 to-cyan-400' },
    { number: `${Math.round(animatedStats[1])}+`, label: 'Years Experience', icon: Calendar, color: 'from-purple-500 to-pink-400' },
    { number: `${Math.round(animatedStats[2])}+`, label: 'Happy Clients', icon: Award, color: 'from-green-500 to-emerald-400' },
    { number: animatedStats[3] >= 24 ? '24/7' : `${Math.round(animatedStats[3])}`, label: 'Support Available', icon: Globe, color: 'from-orange-500 to-red-400' }
  ];

  const skills = [
    { category: 'Frontend', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS'], icon: Globe, color: 'from-blue-600 to-purple-600' },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'RESTful APIs'], icon: Database, color: 'from-green-600 to-teal-600' },
    { category: 'Mobile', items: ['React Native', 'Flutter', 'Expo', 'Progressive Web Apps'], icon: Smartphone, color: 'from-purple-600 to-pink-600' },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'MongoDB'], icon: Code, color: 'from-orange-600 to-red-600' }
  ];

  const highlights = [
    "Passionate about creating responsive, user-friendly web applications",
    "Strong focus on clean, maintainable code and modern development practices",
    "Experience with both frontend and backend technologies",
    "Committed to staying updated with the latest web development trends"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-32 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-32 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Personal Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            {/* Profile Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-purple-500/25 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-6 animate-pulse">
                    CV
                  </div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:animate-spin">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Chandan Verma</h3>
                  <p className="text-xl text-cyan-400 font-medium flex items-center">
                    <Zap className="w-5 h-5 mr-2 animate-pulse" />
                    Full Stack Web Developer
                  </p>
                  <div className="flex items-center text-gray-300 mt-2">
                    <MapPin className="w-4 h-4 mr-2 text-pink-400" />
                    <span className="text-sm">Greater Noida, Uttar Pradesh</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                I'm a passionate web developer with over 3 years of experience creating innovative digital solutions. 
                I specialize in building modern, scalable web applications using cutting-edge technologies like React, 
                Node.js, and cloud platforms. My goal is to transform ideas into exceptional digital experiences 
                that drive business growth and user engagement.
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-4">
                <a 
                  href="mailto:chandan@example.com" 
                  className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
                <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </button>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose Me</h4>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column - Skills & Stats */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Technical Expertise</h4>
              <div className="grid gap-6">
                {skills.map((skillGroup, index) => {
                  const IconComponent = skillGroup.icon;
                  return (
                    <div key={index} className="border-l-4 border-gradient-to-b from-blue-600 to-purple-600 pl-4">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <h5 className="font-semibold text-gray-900">{skillGroup.category}</h5>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 mr-3" />
                <h4 className="text-xl font-bold">Certified Developer</h4>
              </div>
              <p className="text-blue-100">
                Committed to excellence in web development with a focus on delivering high-quality, 
                scalable solutions that exceed client expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;