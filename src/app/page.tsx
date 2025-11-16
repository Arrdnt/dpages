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
  const [isMobile, setIsMobile] = useState(false);

  const photos = [
    '/images/img1.jpg',
    '/images/img2.jpg', 
    '/images/img3.jpg',
    '/images/img4.jpg',
  ];

  const skills = [
    { 
      id: 'webdev', 
      name: 'Web Development', 
      icon: <Code className="w-6 h-6" />, 
      color: 'from-purple-500 to-pink-500',
      details: 'React, Next.js, TypeScript, Tailwind CSS',
      fullDescription: 'Expert in modern web development technologies including React 18+, Next.js 15, TypeScript 5, and Tailwind CSS. I create responsive, performant, and accessible user interfaces with the latest web standards and best practices.',
      experience: '3+ years',
      projects: '25+ projects',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'GraphQL']
    },
    { 
      id: 'cloud', 
      name: 'Cloud Computing', 
      icon: <Cloud className="w-6 h-6" />, 
      color: 'from-blue-500 to-cyan-500',
      details: 'AWS, Vercel, Docker, CI/CD',
      fullDescription: 'Proficient in cloud architecture and deployment strategies. Experienced with AWS services, serverless computing, containerization, and automated CI/CD pipelines for scalable applications.',
      experience: '2+ years',
      projects: '15+ deployments',
      technologies: ['AWS', 'Vercel', 'Docker', 'Kubernetes', 'CI/CD', 'Serverless', 'Microservices', 'Load Balancing', 'CDN', 'Monitoring']
    },
    { 
      id: 'llm', 
      name: 'Large Language Models', 
      icon: <Cpu className="w-6 h-6" />, 
      color: 'from-pink-500 to-rose-500',
      details: 'OpenAI, Claude, Gemini, Llama',
      fullDescription: 'Deep understanding of LLM architectures and fine-tuning techniques. Experience with prompt engineering, RAG systems, and building AI-powered applications for various use cases.',
      experience: '2+ years',
      projects: '10+ AI projects',
      technologies: ['OpenAI API', 'Anthropic Claude', 'Google Gemini', 'Llama', 'Prompt Engineering', 'RAG', 'Fine-tuning', 'Vector Databases', 'LangChain']
    },
    { 
      id: 'design', 
      name: 'Design', 
      icon: <Palette className="w-6 h-6" />, 
      color: 'from-green-500 to-emerald-500',
      details: 'Figma, Adobe XD, UI/UX, Branding',
      fullDescription: 'Creative designer with a strong focus on user experience and interface design. Proficient in Figma, Adobe XD, and creating comprehensive design systems.',
      experience: '3+ years',
      projects: '40+ designs',
      technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'UI/UX Design', 'Design Systems', 'Prototyping', 'User Research', 'Branding', 'Typography']
    },
    { 
      id: 'space', 
      name: 'Space Exploration', 
      icon: <Rocket className="w-6 h-6" />, 
      color: 'from-indigo-500 to-purple-500',
      details: 'Space Tech, Satellite Data, Astronomy',
      fullDescription: 'Passionate about space exploration technology and satellite data analysis. Interested in aerospace engineering, satellite communications, and astronomical data processing.',
      experience: '1+ year',
      projects: '5+ space projects',
      technologies: ['Satellite Data', 'Astronomy', 'Space Tech', 'Orbital Mechanics', 'Telemetry', 'Space Communications', 'NASA APIs', 'GPS Systems', 'Remote Sensing']
    }
  ];

  const projects = [
    { 
      title: 'Bot Mail to WhatsApp Forwarder', 
      description: 'Automated message forwarding system', 
      image: 'https://images.unsplash.com/photo-1611222597188-04cafd4c520b?w=600&h=400&fit=crop',
      fullDescription: 'An intelligent bot that automatically forwards emails to WhatsApp messages. Built with Node.js and WhatsApp Business API, this system helps users stay connected by converting email communications into instant messages. Features include message filtering, scheduled forwarding, and delivery confirmation.',
      technologies: ['Node.js', 'WhatsApp API', 'Email Processing', 'Message Queue', 'MongoDB', 'Express.js'],
      features: ['Email to WhatsApp', 'Message Filtering', 'Scheduled Forwarding', 'Delivery Confirmation', 'Multi-account Support', 'Message History'],
      link: 'https://github.com/example/whatsapp-forwarder',
      github: 'https://github.com/example/whatsapp-forwarder'
    },
    { 
      title: 'Personal Dashboard', 
      description: 'Comprehensive life management hub', 
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      fullDescription: 'A powerful personal dashboard that consolidates all aspects of life management. Integrates calendar, tasks, finances, health tracking, and personal goals into one unified interface. Built with React and real-time data synchronization.',
      technologies: ['React', 'TypeScript', 'Real-time Sync', 'Chart.js', 'Firebase', 'Tailwind CSS', 'REST APIs'],
      features: ['Task Management', 'Calendar Integration', 'Financial Tracking', 'Health Monitoring', 'Goal Setting', 'Data Analytics', 'Mobile Responsive'],
      link: 'https://github.com/example/personal-dashboard',
      github: 'https://github.com/example/personal-dashboard'
    },
    { 
      title: 'Agentic Tracker Tools', 
      description: 'AI-powered productivity analytics', 
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      fullDescription: 'Advanced productivity tracking system powered by AI agents. Automatically categorizes activities, predicts productivity patterns, and provides intelligent insights for optimization. Uses machine learning to understand work habits and suggest improvements.',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL', 'Machine Learning', 'Data Visualization'],
      features: ['AI-Powered Analytics', 'Activity Tracking', 'Productivity Prediction', 'Habit Analysis', 'Smart Notifications', 'Performance Metrics', 'Custom Agents'],
      link: 'https://github.com/example/agentic-tracker',
      github: 'https://github.com/example/agentic-tracker'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      setScrollY(scrollValue);
      
      // Dynamic gradient background with multiple colors
      const scrollPercent = Math.min(scrollValue / window.innerHeight, 1);
      const hue1 = 250 + (scrollPercent * 60); // Purple to blue
      const hue2 = 280 + (scrollPercent * 80); // Pink to purple
      const hue3 = 200 + (scrollPercent * 100); // Blue to green
      
      // Create animated gradient background
      document.body.style.background = `linear-gradient(135deg, 
        hsl(${hue1}, 70%, 50%) 0%, 
        hsl(${hue2}, 60%, 45%) 25%, 
        hsl(${hue3}, 50%, 40%) 50%, 
        hsl(${(hue1 + 180) % 360}, 30%, 35%) 75%, 
        hsl(${(hue2 + 180) % 360}, 40%, 30%) 100%)`;
      document.body.style.backgroundSize = '400% 400%';
      document.body.style.backgroundAttachment = 'fixed';
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Auto-slide functionality
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4 seconds
    
    // Detect mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
      clearInterval(slideInterval);
      // Reset background on unmount
      document.body.style.background = '';
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

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
      {/* Background Effects with Moving Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-animated"></div>
        
        {/* Moving particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-float-slow"></div>
        <div className="absolute bottom-30 left-15 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-float-medium"></div>
        <div className="absolute top-60 left-1/2 w-4 h-4 bg-green-400 rounded-full opacity-30 animate-float-fast"></div>
        
        {/* Moving gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-r from-pink-600/20 to-orange-600/20 rounded-full blur-xl animate-float-medium"></div>
        <div className="absolute top-1/3 right-1/5 w-28 h-28 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-full blur-2xl animate-float-slowest"></div>
        
        {/* Static background elements */}
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 md:w-96 md:h-96 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-float-slow delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 md:w-96 md:h-96 bg-pink-600 rounded-full filter blur-3xl opacity-10 animate-float-slowest delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-6 h-6 sm:w-8 sm:h-10 lg:w-10 lg:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                <Rocket className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-sm sm:text-base lg:text-xl font-bold text-white">Ardin</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-white font-bold hover:text-purple-400 transition-all duration-300 hover:scale-105 flex items-center gap-1 lg:gap-2 text-xs sm:text-sm lg:text-base"
              >
                <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Home</span>
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="text-white font-bold hover:text-purple-400 transition-all duration-300 hover:scale-105 flex items-center gap-1 lg:gap-2 text-xs sm:text-sm lg:text-base"
              >
                <Cpu className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Skills</span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-white font-bold hover:text-purple-400 transition-all duration-300 hover:scale-105 flex items-center gap-1 lg:gap-2 text-xs sm:text-sm lg:text-base"
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Contact</span>
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300">
              <div className="w-5 h-0.5 bg-white mb-1 transition-all"></div>
              <div className="w-5 h-0.5 bg-white mb-1 transition-all"></div>
              <div className="w-5 h-0.5 bg-white transition-all"></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center z-10 pt-14 sm:pt-16">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-6 sm:gap-8 lg:gap-12 xl:grid-cols-2 items-center min-h-[calc(100vh-4rem)]">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1 space-y-4 sm:space-y-6 lg:space-y-8">
              <h1 className="text-[clamp(1.5rem,4vw,3rem)] sm:text-[clamp(2rem,5vw,3.5rem)] font-bold mb-4 sm:mb-6 leading-tight">
                Hello, I'm{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient font-bold">
                  Ardin
                </span>
              </h1>
              
              <div className="text-[clamp(0.875rem,1.5vw,1.125rem)] sm:text-[clamp(1rem,2vw,1.25rem)] text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-bold space-y-3 sm:space-y-4">
                <p>
                  Economics student at Gadjah Mada University, crafting and exploring any tech and finance fields.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-2 sm:px-3 py-1 sm:py-1.5 font-bold text-xs sm:text-sm">
                    <Coffee className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Explorer
                  </Badge>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-2 sm:px-3 py-1 sm:py-1.5 font-bold text-xs sm:text-sm">
                    <Layers className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                    Full Stack
                  </Badge>
                </div>
              </div>
            </div>

            {/* Image Slider */}
            <div className="relative order-1 lg:order-2 w-full max-w-md sm:max-w-lg lg:max-w-xl xl:max-w-none mx-auto">
              <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[400px] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-black/10 backdrop-blur-sm">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                ))}
                
                {/* Navigation Arrows */}
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === 0 ? photos.length - 1 : prev - 1))}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-1.5 sm:p-2 lg:p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110 min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center"
                >
                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white" />
                </button>
                <button
                  onClick={() => setCurrentSlide((prev) => (prev === photos.length - 1 ? 0 : prev + 1))}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md rounded-full p-1.5 sm:p-2 lg:p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110 min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center"
                >
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-white" />
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white w-4 sm:w-6 lg:w-8' 
                          : 'bg-white/50 hover:bg-white/70 w-1.5 sm:w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>

      {/* Skills Section */}
      <section id="skills" className="relative py-16 sm:py-20 lg:py-24 z-10">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] sm:text-[clamp(2.5rem,4vw,4rem)] font-bold text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient font-bold">
              Interest
            </span>
          </h2>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {skills.map((skill) => (
              <Card 
                key={skill.id}
                className="bg-white/5 backdrop-blur-md border-white/10 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-6 hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer group min-h-[180px] sm:min-h-[200px] lg:min-h-[250px] flex flex-col"
                onClick={() => setSelectedSkill(skill)}
              >
                <CardContent className="p-0 flex-1 flex flex-col">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-white font-bold line-clamp-1">{skill.name}</h3>
                  <p className="text-gray-200 font-bold text-sm sm:text-base line-clamp-2">{skill.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 z-10">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] sm:text-[clamp(2.5rem,4vw,4rem)] font-bold text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient font-bold">
              Latest Projects
            </span>
          </h2>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-white/5 backdrop-blur-md border-white/10 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:scale-105 cursor-pointer group min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-32 sm:h-40 lg:h-48 overflow-hidden relative flex-shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-3 sm:p-4 lg:p-6 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2 text-white font-bold line-clamp-2">{project.title}</h3>
                  <p className="text-gray-200 font-bold text-sm sm:text-base line-clamp-3">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mystery Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 z-10 flex items-center justify-center">
        <div className="text-center px-3 sm:px-6 max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 mx-auto text-purple-400 animate-pulse" />
          </div>
          <h2 className="text-[clamp(1.5rem,3.5vw,2.5rem)] sm:text-[clamp(2rem,3.5vw,3rem)] font-bold mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient font-bold">
              More things are coming soon
            </span>
          </h2>
          <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] sm:text-[clamp(1rem,1.5vw,1.25rem)] text-gray-200 leading-relaxed font-bold mb-8 sm:mb-12">
            Exciting projects and innovative solutions are on the way. 
            Stay tuned for what's next in the digital universe.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Coming Soon
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Made with Love
            </Badge>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-16 sm:py-20 lg:py-24 z-10 flex items-center justify-center">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-[clamp(2rem,4vw,3rem)] sm:text-[clamp(2.5rem,4vw,4rem)] font-bold text-center mb-8 sm:mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient font-bold">
              Contact Me
            </span>
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/5 backdrop-blur-md border-white/10 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-200 font-bold">
                    <User className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                    Name
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 transition-colors font-bold min-h-[44px] text-sm sm:text-base"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-200 font-bold">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/10 border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 transition-colors font-bold min-h-[44px] text-sm sm:text-base"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-200 font-bold">
                    <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 inline mr-2" />
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/10 border-white/20 rounded-xl text-white placeholder-gray-400 min-h-[120px] focus:border-purple-400 transition-colors font-bold resize-none text-sm sm:text-base"
                    placeholder="Your message..."
                    rows={4}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 rounded-xl transition-all duration-500 disabled:opacity-50 hover:scale-105 min-h-[44px] text-sm sm:text-base"
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
        <DialogContent className="bg-black/90 backdrop-blur-md border-white/20 text-white max-w-xl sm:max-w-2xl lg:max-w-3xl max-h-[80vh] overflow-y-auto mx-4 sm:mx-auto">
          {selectedSkill && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-r ${selectedSkill.color} flex items-center justify-center flex-shrink-0`}>
                    {selectedSkill.icon}
                  </div>
                  <DialogTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-white line-clamp-2">
                    {selectedSkill.name}
                  </DialogTitle>
                </div>
              </DialogHeader>
              
              <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-2 text-purple-400">About</h4>
                  <p className="text-gray-200 text-xs sm:text-sm lg:text-base line-clamp-6">{selectedSkill.fullDescription}</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-2 text-purple-400">Experience</h4>
                    <p className="text-gray-200 text-xs sm:text-sm lg:text-base">{selectedSkill.experience}</p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-2 text-purple-400">Projects</h4>
                    <p className="text-gray-200 text-xs sm:text-sm lg:text-base">{selectedSkill.projects}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm sm:text-base lg:text-lg font-bold mb-2 text-purple-400">Technologies</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedSkill.technologies.map((tech: string, index: number) => (
                      <Badge key={index} className="bg-purple-500/20 text-purple-300 border-purple-500/30 font-bold text-xs sm:text-sm">
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
        <DialogContent className="bg-black/90 backdrop-blur-md border-white/20 text-white max-w-3xl sm:max-w-4xl max-h-[80vh] overflow-y-auto mx-4 sm:mx-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 line-clamp-2">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="h-48 sm:h-64 rounded-2xl overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div>
                  <h4 className="text-base sm:text-lg font-bold mb-2 text-purple-400">Description</h4>
                  <p className="text-gray-200 text-sm sm:text-base line-clamp-8">{selectedProject.fullDescription}</p>
                </div>
                
                <div>
                  <h4 className="text-base sm:text-lg font-bold mb-2 text-purple-400">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-gray-200 text-sm sm:text-base">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="line-clamp-2">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-base sm:text-lg font-bold mb-2 text-purple-400">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.technologies.map((tech: string, index: number) => (
                      <Badge key={index} className="bg-blue-500/20 text-blue-300 border-blue-500/30 font-bold text-xs sm:text-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 font-bold flex items-center gap-2 min-h-[44px]">
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

    </div>
  );
}
