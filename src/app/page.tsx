'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, Code, Database, Palette, Globe, Smartphone, Cloud, Mail, User, MessageSquare, Sparkles, Zap, Shield, Terminal, Rocket, Star, Heart, Cpu, Layers, ZapOff, Coffee, X, ExternalLink, Github, Code2, Bug, Lightbulb, Target, Wrench, Atom, Settings, Command, GitBranch, Package, Monitor } from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const photos = [
    'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1504639725590-78a6a1757440?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop'
  ];

  const skills = [
    { 
      id: 'frontend', 
      name: 'Frontend', 
      icon: <Terminal className="w-6 h-6" />, 
      color: 'from-purple-500 to-pink-500',
      details: 'React, Next.js, TypeScript, Tailwind CSS',
      fullDescription: 'Expert in modern frontend technologies including React 18+, Next.js 15, TypeScript 5, and Tailwind CSS. I create responsive, performant, and accessible user interfaces with the latest web standards and best practices.',
      experience: '5+ years',
      projects: '50+ projects',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Webpack', 'Vite']
    },
    { 
      id: 'backend', 
      name: 'Backend', 
      icon: <Database className="w-6 h-6" />, 
      color: 'from-blue-500 to-cyan-500',
      details: 'Node.js, Python, PostgreSQL, MongoDB',
      fullDescription: 'Proficient in building scalable backend services using Node.js, Python, and various database systems. Experienced in RESTful APIs, GraphQL, microservices architecture, and cloud deployment strategies.',
      experience: '4+ years',
      projects: '30+ projects',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express.js', 'FastAPI', 'Django', 'GraphQL', 'Redis', 'Docker', 'AWS', 'Azure']
    },
    { 
      id: 'design', 
      name: 'Design', 
      icon: <Palette className="w-6 h-6" />, 
      color: 'from-pink-500 to-rose-500',
      details: 'Figma, Adobe XD, UI/UX, Branding',
      fullDescription: 'Creative designer with a strong focus on user experience and interface design. Proficient in Figma, Adobe XD, and creating comprehensive design systems that bridge the gap between design and development.',
      experience: '3+ years',
      projects: '40+ designs',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'UI/UX Design', 'Design Systems', 'Prototyping', 'User Research', 'Branding']
    },
    { 
      id: 'mobile', 
      name: 'Mobile', 
      icon: <Smartphone className="w-6 h-6" />, 
      color: 'from-green-500 to-emerald-500',
      details: 'React Native, Flutter, iOS, Android',
      fullDescription: 'Skilled in cross-platform mobile development using React Native and Flutter. Experience with native iOS and Android development, ensuring optimal performance and native user experience.',
      experience: '3+ years',
      projects: '15+ apps',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'iOS Development', 'Android Development', 'React Navigation', 'Firebase', 'Push Notifications', 'App Store Deployment']
    },
    { 
      id: 'cloud', 
      name: 'Cloud', 
      icon: <Cloud className="w-6 h-6" />, 
      color: 'from-indigo-500 to-purple-500',
      details: 'AWS, Vercel, Docker, CI/CD',
      fullDescription: 'Cloud architecture specialist with extensive experience in AWS, Vercel, and containerization. Expert in setting up CI/CD pipelines, managing infrastructure as code, and ensuring high availability and scalability.',
      experience: '4+ years',
      projects: '25+ deployments',
      technologies: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Terraform', 'Serverless', 'Microservices', 'Load Balancing']
    },
    { 
      id: 'performance', 
      name: 'Performance', 
      icon: <Zap className="w-6 h-6" />, 
      color: 'from-yellow-500 to-orange-500',
      details: 'Optimization, Caching, Monitoring',
      fullDescription: 'Performance optimization expert focused on making applications fast, efficient, and scalable. Experienced in implementing caching strategies, monitoring solutions, and performance tuning for both frontend and backend systems.',
      experience: '5+ years',
      projects: '100+ optimizations',
      technologies: ['Performance Monitoring', 'Caching Strategies', 'CDN', 'Lazy Loading', 'Code Splitting', 'Database Optimization', 'Load Testing', 'A/B Testing', 'Analytics']
    }
  ];

  const projects = [
    { 
      title: 'E-Commerce Platform', 
      description: 'Modern shopping experience', 
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      fullDescription: 'A full-featured e-commerce platform built with Next.js and Node.js. Features include user authentication, payment processing, inventory management, and real-time order tracking. The platform handles 10,000+ daily transactions with 99.9% uptime.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
      features: ['User Authentication', 'Payment Gateway', 'Inventory Management', 'Real-time Tracking', 'Admin Dashboard', 'Mobile Responsive'],
      link: 'https://example.com',
      github: 'https://github.com/example'
    },
    { 
      title: 'AI Dashboard', 
      description: 'Analytics with ML insights', 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      fullDescription: 'An advanced analytics dashboard powered by machine learning algorithms. Provides real-time data visualization, predictive analytics, and automated insights for business intelligence. Processes millions of data points daily.',
      technologies: ['React', 'Python', 'TensorFlow', 'PostgreSQL', 'D3.js', 'WebSocket'],
      features: ['Real-time Analytics', 'ML Predictions', 'Custom Reports', 'Data Visualization', 'API Integration', 'Export Functions'],
      link: 'https://example.com',
      github: 'https://github.com/example'
    },
    { 
      title: 'Social Network', 
      description: 'Connect communities', 
      image: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=600&h=400&fit=crop',
      fullDescription: 'A modern social networking platform that connects communities worldwide. Features include real-time messaging, content sharing, community management, and advanced privacy controls. Built with scalability and user engagement in mind.',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'AWS', 'GraphQL'],
      features: ['Real-time Messaging', 'Content Sharing', 'Community Groups', 'Privacy Controls', 'Push Notifications', 'Video Calls'],
      link: 'https://example.com',
      github: 'https://github.com/example'
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % photos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'f0366bc1-6d1c-4483-bbbc-99c5b8743549',
          ...formData
        })
      });
      
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-float-slow delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-float-slowest delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              {/* Logo placeholder - you can replace this with your actual logo */}
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Ardin</span>
            </div>
            <div className="flex gap-6">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-white font-bold hover:text-purple-400 transition-all duration-300 hover:scale-110 flex items-center gap-2"
              >
                <Star className="w-4 h-4" />
                Home
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="text-white font-bold hover:text-purple-400 transition-all duration-300 hover:scale-110 flex items-center gap-2"
              >
                <Cpu className="w-4 h-4" />
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white font-bold hover:text-purple-400 transition-all duration-300 hover:scale-110 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center z-10">
        <div className="text-center px-6 max-w-4xl mx-auto mt-20">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-8"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          >
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient font-bold">
              Ardin
            </span>
          </h1>
          
          <div className="mb-12 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-bold">
            <p className="mb-4">
              Full-stack developer crafting beautiful digital experiences with clean code and creative solutions.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 py-1 font-bold">
                <Coffee className="w-3 h-3 mr-1" />
                Coffee Powered
              </Badge>
              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 py-1 font-bold">
                <Layers className="w-3 h-3 mr-1" />
                Full Stack
              </Badge>
            </div>
          </div>

          {/* Photo Slider */}
          <div className="relative max-w-2xl mx-auto mb-12">
            <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src={photos[currentSlide]} 
                alt="Showcase" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black/30 to-transparent z-20"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/30 to-transparent z-20"></div>
            </div>
            
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110 z-30 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110 z-30 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:text-purple-400 transition-colors" />
            </button>
            
            <div className="flex justify-center gap-2 mt-4">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-purple-400' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative min-h-screen py-20 z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient font-bold">
              Skills & Expertise
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skills.map((skill) => (
              <Card 
                key={skill.id}
                className="bg-white/5 backdrop-blur-md border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer group"
                onClick={() => setSelectedSkill(skill)}
              >
                <CardContent className="p-0">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white font-bold">{skill.name}</h3>
                  <p className="text-gray-200 font-bold">{skill.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative min-h-screen py-20 z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient font-bold">
              Latest Projects
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-white/5 backdrop-blur-md border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white font-bold">{project.title}</h3>
                  <p className="text-gray-200 font-bold">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mystery Section */}
      <section className="relative min-h-screen py-20 z-10 flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <div className="mb-8">
            <Sparkles className="w-16 h-16 mx-auto text-purple-400 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient font-bold">
              More things are coming soon
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-bold">
            Exciting projects and innovative solutions are on the way. 
            Stay tuned for what's next in the digital universe.
          </p>
          <div className="mt-12 flex justify-center gap-4">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm font-bold">
              <Zap className="w-4 h-4 mr-2" />
              Coming Soon
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2 text-sm font-bold">
              <Heart className="w-4 h-4 mr-2" />
              Made with Love
            </Badge>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen py-20 z-10 flex items-center justify-center">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient font-bold">
              Contact Me
            </span>
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-md border-white/10 rounded-3xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-200 font-bold">
                    <User className="w-4 h-4 inline mr-2" />
                    Name
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 transition-colors font-bold"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-200 font-bold">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/10 border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 transition-colors font-bold"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-200 font-bold">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/10 border-white/20 rounded-xl text-white placeholder-gray-400 min-h-[120px] focus:border-purple-400 transition-colors font-bold"
                    placeholder="Your message..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-xl transition-all duration-500 disabled:opacity-50 hover:scale-105"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Skill Detail Modal */}
      <Dialog open={!!selectedSkill} onOpenChange={() => setSelectedSkill(null)}>
        <DialogContent className="bg-black/90 backdrop-blur-md border-white/20 text-white max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedSkill && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedSkill.color} flex items-center justify-center`}>
                    {selectedSkill.icon}
                  </div>
                  <DialogTitle className="text-2xl font-bold text-white">
                    {selectedSkill.name}
                  </DialogTitle>
                </div>
              </DialogHeader>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold mb-2 text-purple-400 font-jsx-custom">About</h4>
                  <p className="text-gray-200 font-jsx-custom font-bold">{selectedSkill.fullDescription}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-purple-400 font-jsx-custom">Experience</h4>
                    <p className="text-gray-200 font-jsx-custom font-bold">{selectedSkill.experience}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 text-purple-400 font-jsx-custom">Projects</h4>
                    <p className="text-gray-200 font-jsx-custom font-bold">{selectedSkill.projects}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2 text-purple-400 font-jsx-custom">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.technologies.map((tech: string, index: number) => (
                      <Badge key={index} className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-bold">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-black/90 backdrop-blur-md border-white/20 text-white max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold font-jsx-custom text-white mb-4">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                <div className="h-64 rounded-2xl overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2 text-purple-400 font-jsx-custom">Description</h4>
                  <p className="text-gray-200 font-jsx-custom font-bold">{selectedProject.fullDescription}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2 text-purple-400 font-jsx-custom">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-gray-200 font-jsx-custom font-bold">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold mb-2 text-purple-400 font-jsx-custom">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <Badge key={index} className="bg-blue-500/20 text-blue-300 border-blue-500/30 font-bold">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-bold flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Floating Icons */}
      <div className="float-icon-1 text-purple-400">
        <Code2 className="w-8 h-8" />
      </div>
      
      <div className="float-icon-2 text-blue-400">
        <Atom className="w-6 h-6" />
      </div>
      
      <div className="float-icon-3 text-pink-400">
        <Lightbulb className="w-7 h-7" />
      </div>
      
      <div className="float-icon-4 text-cyan-400">
        <Target className="w-6 h-6" />
      </div>
      
      <div className="float-icon-5 text-yellow-400">
        <Wrench className="w-8 h-8" />
      </div>
      
      <div className="float-icon-6 text-green-400">
        <Settings className="w-7 h-7" />
      </div>
      
      <div className="float-icon-7 text-orange-400">
        <GitBranch className="w-6 h-6" />
      </div>
      
      <div className="float-icon-8 text-indigo-400">
        <Package className="w-8 h-8" />
      </div>
    </div>
  );
}