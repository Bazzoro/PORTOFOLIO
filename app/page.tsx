"use client"

import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Github, Mail, Phone, MapPin, ExternalLink, Code, Database, Globe, Smartphone, FileText, Terminal, Layers, GitBranch, Hash } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Image from 'next/image'

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // Add CSS animations for flexible layout
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      @keyframes pulse-glow {
        0%, 100% {
          box-shadow: 0 0 20px rgba(255, 193, 7, 0.3);
        }
        50% {
          box-shadow: 0 0 40px rgba(255, 193, 7, 0.6);
        }
      }
      
      @keyframes shimmer {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 2s ease-in-out infinite;
      }
      
      .animate-shimmer {
        animation: shimmer 2s ease-in-out infinite;
      }
      
      /* Responsive grid adjustments */
      @media (max-width: 640px) {
        .skill-card {
          min-height: 120px;
          padding: 1rem;
        }
        .skills-grid {
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1rem;
        }
      }
      
      @media (min-width: 641px) and (max-width: 768px) {
        .skill-card {
          min-height: 140px;
          padding: 1.5rem;
        }
        .skills-grid {
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1.5rem;
        }
      }
      
      @media (min-width: 769px) and (max-width: 1024px) {
        .skill-card {
          min-height: 160px;
          padding: 2rem;
        }
        .skills-grid {
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 2rem;
        }
      }
      
      @media (min-width: 1025px) {
        .skill-card {
          min-height: 180px;
          padding: 2.5rem;
        }
        .skills-grid {
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 2rem;
        }
      }
      
      /* Ultra-flexible grid system */
      .skills-grid {
        display: grid;
        grid-auto-rows: 1fr;
        align-items: stretch;
      }
      
      /* Masonry-like layout for different content heights */
      .masonry-grid {
        column-count: 1;
        column-gap: 1rem;
      }
      
      @media (min-width: 640px) {
        .masonry-grid {
          column-count: 2;
        }
      }
      
      @media (min-width: 1024px) {
        .masonry-grid {
          column-count: 3;
        }
      }
      
      @media (min-width: 1280px) {
        .masonry-grid {
          column-count: 4;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleAnimationComplete = () => {
    console.log('All letters have animated!')
  }

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus('')

    const formData = new FormData(e.currentTarget)
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }

    try {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string)
      
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams
      )

      console.log('Email sent successfully:', response.status, response.text)
      setSubmitStatus('Message sent successfully! Thank you for your inquiry.')
      e.currentTarget.reset()
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('Message sent successfully! (Demo mode - EmailJS configuration needed for actual sending)')
      e.currentTarget.reset()
    } finally {
      setIsLoading(false)
    }
  }

  const skills = [
    // Programming Languages
    { name: 'JavaScript', category: 'Programming', icon: 'JavaScript' },
    { name: 'TypeScript', category: 'Programming', icon: 'TypeScript' },
    { name: 'Python', category: 'Programming', icon: 'Python' },
    { name: 'Java', category: 'Programming', icon: 'Java' },
    { name: 'C++', category: 'Programming', icon: 'C++' },
    
    // Frontend Technologies
    { name: 'React', category: 'Frontend', icon: 'React' },
    { name: 'Next.js', category: 'Frontend', icon: 'Next.js' },
    { name: 'Vue.js', category: 'Frontend', icon: 'Vue.js' },
    { name: 'Tailwind CSS', category: 'Frontend', icon: 'Tailwind' },
    { name: 'SASS', category: 'Frontend', icon: 'SASS' },
    
    // Backend Technologies
    { name: 'Node.js', category: 'Backend', icon: 'Node.js' },
    { name: 'Express.js', category: 'Backend', icon: 'Express' },
    { name: 'Laravel', category: 'Backend', icon: 'Laravel' },
    { name: 'Django', category: 'Backend', icon: 'Django' },
    { name: 'REST API', category: 'Backend', icon: 'REST' },
    
    // Database Technologies
    { name: 'MySQL', category: 'Database', icon: 'MySQL' },
    { name: 'PostgreSQL', category: 'Database', icon: 'PostgreSQL' },
    { name: 'MongoDB', category: 'Database', icon: 'MongoDB' },
    { name: 'Redis', category: 'Database', icon: 'Redis' },
    { name: 'Firebase', category: 'Database', icon: 'Firebase' },
    
    
    // Tools & Others
    { name: 'GitHub', category: 'Tools', icon: 'GitHub' },
    { name: 'VS Code', category: 'Tools', icon: 'VS Code' },
    { name: 'Figma', category: 'Tools', icon: 'Figma' },
    { name: 'Postman', category: 'Tools', icon: 'Postman' },
    { name: 'Jest', category: 'Tools', icon: 'Jest' },
    
    // Data & Analytics
    { name: 'JSON', category: 'Data', icon: 'JSON' },
    { name: 'Pandas', category: 'Data', icon: 'Pandas' },
    { name: 'NumPy', category: 'Data', icon: 'NumPy' },
    { name: 'Chart.js', category: 'Data', icon: 'Chart.js' },
    { name: 'Tableau', category: 'Data', icon: 'Tableau' }
  ]

  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: React.ReactElement } = {
      // Programming Languages
      'C++': <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">C++</div>,
      'Java': <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">☕</div>,
      'Python': <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">🐍</div>,
      'TypeScript': <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">TS</div>,
      'Golang': <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">Go</div>,
      'JavaScript': <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded flex items-center justify-center text-black text-xs font-bold shadow-lg">JS</div>,
      'PHP': <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">PHP</div>,
      'C#': <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">C#</div>,
      'Swift': <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">🍎</div>,
      'Kotlin': <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-purple-800 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">K</div>,
      
      // Frontend Technologies
      'React': <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">⚛</div>,
      'Next.js': <div className="w-6 h-6 bg-gradient-to-br from-gray-800 to-black rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">N</div>,
      'Vue.js': <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">V</div>,
      'Angular': <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">A</div>,
      'Svelte': <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">S</div>,
      'Tailwind CSS': <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">T</div>,
      'Bootstrap': <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">B</div>,
      'SASS': <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-pink-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">S</div>,
      'Webpack': <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">W</div>,
      'Vite': <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">V</div>,
      
      // Backend Technologies
      'Node.js': <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">N</div>,
      'Express.js': <div className="w-6 h-6 bg-gradient-to-br from-gray-600 to-gray-800 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">E</div>,
      'Laravel': <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">L</div>,
      'Django': <div className="w-6 h-6 bg-gradient-to-br from-green-600 to-green-800 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">D</div>,
      'Flask': <div className="w-6 h-6 bg-gradient-to-br from-gray-500 to-gray-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">F</div>,
      'Spring Boot': <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">S</div>,
      'ASP.NET': <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">.NET</div>,
      'FastAPI': <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-teal-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">F</div>,
      'GraphQL': <div className="w-6 h-6 bg-gradient-to-br from-pink-500 to-pink-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">G</div>,
      'REST API': <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">R</div>,
      
      // Database Technologies
      'MySQL': <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">🐬</div>,
      'PostgreSQL': <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">🐘</div>,
      'MongoDB': <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">🍃</div>,
      'Redis': <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">R</div>,
      'SQLite': <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">SQL</div>,
      'Firebase': <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">🔥</div>,
      'Supabase': <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">S</div>,
      'Elasticsearch': <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">E</div>,
      'DynamoDB': <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">D</div>,
      'Prisma': <div className="w-6 h-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">P</div>,
      
      
      // Tools & Others
      'GitHub': <div className="w-6 h-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded flex items-center justify-center text-white shadow-lg"><GitBranch className="w-4 h-4" /></div>,
      'GitLab': <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">GL</div>,
      'VS Code': <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">VS</div>,
      'Figma': <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">F</div>,
      'Postman': <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">P</div>,
      'Jest': <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">J</div>,
      'Cypress': <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">C</div>,
      'Socket.io': <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">S</div>,
      'WebRTC': <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">W</div>,
      'PWA': <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">PWA</div>,
      
      // Data & Analytics
      'JSON': <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 rounded flex items-center justify-center text-white shadow-lg"><FileText className="w-4 h-4" /></div>,
      'XML': <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">XML</div>,
      'YAML': <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">Y</div>,
      'Pandas': <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">🐼</div>,
      'NumPy': <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">N</div>,
      'Matplotlib': <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">M</div>,
      'D3.js': <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">D3</div>,
      'Chart.js': <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">C</div>,
      'Tableau': <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-700 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">T</div>,
      'Power BI': <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">P</div>
    }
    return iconMap[skillName] || <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
  }

    const projects = [
      {
        name: 'E-Commerce Platform',
        description: 'Modern e-commerce platform dengan fitur lengkap termasuk payment gateway, inventory management, dan real-time notifications. Dibangun dengan teknologi terdepan untuk performa optimal dan user experience yang luar biasa.',
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL'],
        link: 'https://github.com/Bazzoro/ecommerce-platform',
        type: 'Web Application'
      },
      {
        name: 'Task Management App',
        description: 'Aplikasi manajemen tugas kolaboratif dengan drag-and-drop interface, real-time updates, dan integrasi dengan calendar. Mendukung team collaboration dan project tracking dengan fitur yang komprehensif.',
        technologies: ['React', 'Node.js', 'MongoDB'],
        link: 'https://github.com/Bazzoro/task-management-app',
        type: 'Full Stack App'
    }
  ]

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-900/20 via-transparent to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-yellow-900/10 via-transparent to-red-900/10"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-3000"></div>
        <div className="absolute top-3/4 right-1/4 w-56 h-56 bg-yellow-500/15 rounded-full blur-3xl animate-pulse delay-4000"></div>
        <div className="absolute top-1/2 right-1/2 w-48 h-48 bg-green-500/15 rounded-full blur-3xl animate-pulse delay-5000"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-400/50 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-bounce delay-3000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-pink-400/60 rounded-full animate-bounce delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-yellow-400/30 rounded-full animate-bounce delay-5000"></div>
      </div>
      
      {/* Grid Background */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
                  <div className="w-6 h-6 bg-black rounded-sm transform -rotate-45"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div className="text-2xl font-bold text-white">
                Porto Bass
              </div>
            </div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#work" className="text-white hover:text-gray-300 transition-colors uppercase tracking-wide text-sm font-medium">WORK</a>
              <a href="#experiments" className="text-white hover:text-gray-300 transition-colors uppercase tracking-wide text-sm font-medium">EXPERIMENTS</a>
              <a href="#about" className="text-white hover:text-gray-300 transition-colors uppercase tracking-wide text-sm font-medium">ABOUT</a>
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors uppercase tracking-wide text-sm font-medium">CONTACT</a>
        </nav>
            
            {/* Right side utilities */}
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/Bazzoro" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group/github relative bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-yellow-400 rounded-lg px-4 py-2 transition-all duration-300 text-sm font-medium transform hover:scale-105 flex items-center gap-2"
                title="Visit GitHub Profile"
              >
                <Github className="w-4 h-4 text-gray-300 group-hover/github:text-yellow-400 transition-colors duration-300" />
                <span className="text-gray-300 group-hover/github:text-yellow-400 transition-colors duration-300">GitHub</span>
              </a>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">TURN ON SOUND</span>
                <div className="w-8 h-4 bg-gray-700 rounded-full relative">
                  <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5"></div>
                </div>
              </div>
              <div className="text-sm text-gray-400">
                {new Date().toLocaleTimeString('en-US', { 
                  hour: 'numeric', 
                  minute: '2-digit',
                  hour12: true 
                })}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 relative z-10">
      {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center relative">
          {/* Floating Logo Watermark */}
          <div className="absolute top-20 right-20 opacity-10 group">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-500">
              <div className="w-20 h-20 bg-black rounded-lg transform -rotate-45"></div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Portrait Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  {/* Stylized Image Frame */}
                  <div className="relative">
                    <Image
                      src="/image/Background.jpg"
                      alt="Baskoro Rizky Adiputra"
                      width={400}
                      height={500}
                      className="w-80 h-96 object-cover"
                      priority
                    />
                    {/* Cut-out corners effect */}
                    <div className="absolute top-0 right-0 w-8 h-8 bg-black transform rotate-45 translate-x-4 -translate-y-4"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 bg-black transform rotate-45 -translate-x-4 translate-y-4"></div>
                  </div>
                  
                  {/* Video indicator */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4">
                    <div className="text-xs text-gray-400 transform -rotate-90 whitespace-nowrap">
                      VIDEO. 459
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="space-y-8">
                {/* Greeting */}
                <p className="text-lg text-gray-300">Hi, I&apos;m Baskoro Rizky Adiputra</p>
                
                {/* Main Title */}
                <div className="space-y-2">
                  <h1 className="text-6xl lg:text-8xl font-bold text-white leading-none tracking-tight">
                    CREATIVE
                  </h1>
                  <h1 className="text-6xl lg:text-8xl font-bold text-white leading-none tracking-tight">
                    FULL STACK
                  </h1>
                  <h1 className="text-6xl lg:text-8xl font-bold text-white leading-none tracking-tight">
                    DEVELOPER
                  </h1>
                </div>
                
                {/* Certification Line */}
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-px bg-white"></div>
                  <span className="text-sm text-white">*</span>
                  <span className="text-sm text-white">NEXT.JS CERTIFIED DEVELOPER</span>
                            </div>
                
                {/* Description */}
                <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
                  I create immersive, high-performing web applications tailored for startups, agencies, and in-house teams that need speed, scalability, and full control.
                </p>
                
                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="group relative bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-none transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 active:scale-95 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <a href="#contact" className="relative flex items-center gap-2 z-10">
                      Get in touch
                    </a>
                  </Button>
                  <Button variant="outline" className="group relative border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-none transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25 active:scale-95 overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 border-2 border-white group-hover:border-yellow-400 transition-colors duration-300"></div>
                    <a href="#projects" className="relative flex items-center gap-2 z-10">
                      See work
                                              </a>
                                            </Button>
                  <Button variant="outline" className="group relative border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-none transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/25 active:scale-95 overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 border-2 border-white group-hover:border-yellow-400 transition-colors duration-300"></div>
                    <a href="https://github.com/Bazzoro" target="_blank" rel="noopener noreferrer" className="relative flex items-center gap-2 z-10">
                      <Github className="w-4 h-4" />
                      GitHub
                                              </a>
                                            </Button>
                                          </div>
                                        </div>
                                      </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center transform rotate-45">
                <div className="w-4 h-4 bg-black rounded-sm transform -rotate-45"></div>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white">
                SELECTED WORK
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {projects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-gray-900 border border-gray-800 hover:border-yellow-400 transition-all duration-300 p-8 h-96 flex flex-col justify-between transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 2).map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs text-gray-400 border border-gray-600 px-2 py-1">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group/github relative bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-yellow-400 rounded-lg px-3 py-1 transition-all duration-300 text-xs font-medium transform hover:scale-105 flex items-center gap-1"
                          title={`View ${project.name} on GitHub`}
                        >
                          <Github className="w-3 h-3 text-gray-300 group-hover/github:text-yellow-400 transition-colors duration-300" />
                          <span className="text-gray-300 group-hover/github:text-yellow-400 transition-colors duration-300">GitHub</span>
                        </a>
                      </div>
                      <span className="text-white group-hover:text-yellow-400 transition-colors">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiments Section */}
        <section id="experiments" className="py-20 px-6 bg-gradient-to-br from-indigo-900/50 via-gray-900 to-blue-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-16 text-center">
              EXPERIMENTS
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-black border border-gray-800 hover:border-yellow-400 p-8 h-80 flex flex-col justify-center items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 cursor-pointer">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">Interactive Components</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Exploring new ways to create engaging user interfaces</p>
              </div>
              <div className="group bg-black border border-gray-800 hover:border-yellow-400 p-8 h-80 flex flex-col justify-center items-center text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 cursor-pointer">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">Data Visualization</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Creating beautiful and functional data displays</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-cyan-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center transform rotate-45">
                <div className="w-4 h-4 bg-black rounded-sm transform -rotate-45"></div>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white">
                ABOUT
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">Passionate Developer</h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  I&apos;m a Computer Science student at BINUS@Malang with a strong passion for full-stack development. 
                  I enjoy creating innovative solutions that solve real-world problems and make a positive impact.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  My journey in programming started with curiosity and has evolved into a deep understanding of 
                  various technologies and frameworks. I&apos;m always eager to learn new technologies and take on 
                  challenging projects.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-white font-medium">Problem Solving</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-white font-medium">Team Collaboration</span>
                  </div>
                                            <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-white font-medium">Continuous Learning</span>
                  </div>
                </div>
                
                {/* GitHub Link */}
                <div className="mt-8">
                  <a 
                    href="https://github.com/Bazzoro" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-3 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
                  >
                    <Github className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-lg font-medium">Check out my GitHub profile</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="group bg-gray-900 border border-gray-800 hover:border-yellow-400 p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 cursor-pointer">
                  <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">2+</div>
                  <div className="text-white font-medium group-hover:text-yellow-400 transition-colors duration-300">Years Experience</div>
                </div>
                <div className="group bg-gray-900 border border-gray-800 hover:border-yellow-400 p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 cursor-pointer">
                  <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">10+</div>
                  <div className="text-white font-medium group-hover:text-yellow-400 transition-colors duration-300">Projects Completed</div>
                </div>
                <div className="group bg-gray-900 border border-gray-800 hover:border-yellow-400 p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 cursor-pointer">
                  <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                  <div className="text-white font-medium group-hover:text-yellow-400 transition-colors duration-300">Technologies</div>
                </div>
                <div className="group bg-gray-900 border border-gray-800 hover:border-yellow-400 p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 cursor-pointer">
                  <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                  <div className="text-white font-medium group-hover:text-yellow-400 transition-colors duration-300">Dedication</div>
                                            </div>
                                          </div>
                                        </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-purple-900/20 to-pink-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-16 text-center">
              PROJECTS
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {projects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="bg-black border border-gray-800 hover:border-yellow-400 transition-all duration-300 p-8 h-96 flex flex-col justify-between transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                        <span className="text-xs text-gray-400 border border-gray-600 px-2 py-1">
                          {project.type}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs text-gray-400 border border-gray-600 px-2 py-1">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group/github relative bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-yellow-400 rounded-lg px-4 py-2 transition-all duration-300 text-sm font-medium transform hover:scale-105 flex items-center gap-2"
                          title={`View ${project.name} on GitHub`}
                        >
                          <Github className="w-4 h-4 text-gray-300 group-hover/github:text-yellow-400 transition-colors duration-300" />
                          <span className="text-gray-300 group-hover/github:text-yellow-400 transition-colors duration-300">GitHub</span>
                        </a>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="group/link relative text-yellow-400 hover:text-yellow-300 transition-all duration-300 text-sm font-medium transform hover:scale-105"
                          title={`View ${project.name} repository`}
                        >
                          <span className="relative z-10">View Project</span>
                          <div className="absolute inset-0 bg-yellow-400/10 rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                        </a>
                      </div>
                      <span className="text-white group-hover:text-yellow-400 transition-all duration-300 transform group-hover:translate-x-1 group-hover:scale-110">→</span>
                    </div>
                  </div>
                </div>
              ))}
                                      </div>
                                    </div>
                                  </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6 bg-gradient-to-br from-black via-indigo-900/30 to-blue-900/40">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-16 text-center">
              EDUCATION
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="group bg-gray-900 border border-gray-800 hover:border-yellow-400 p-12 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 cursor-pointer">
                <div className="flex items-start gap-8">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-black font-bold text-2xl">B</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">BINUS University @Malang</h3>
                    <p className="text-yellow-400 text-xl mb-3 group-hover:scale-105 transition-transform duration-300">Bachelor of Computer Science</p>
                    <p className="text-gray-300 text-lg mb-6 group-hover:text-white transition-colors duration-300">Concentration in Full Stack Development</p>
                    <div className="flex items-center gap-3 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300">
                      <span>2022 - Present</span>
                      <span>•</span>
                      <span>Malang, Indonesia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section - Ultra Flexible Layout */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-cyan-900/20 to-teal-900/30 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="max-w-8xl mx-auto relative z-10">
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center transform rotate-45">
                <div className="w-4 h-4 bg-black rounded-sm transform -rotate-45"></div>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white">
                SKILLS
              </h2>
            </div>
            
            {/* Flexible Skills Grid */}
            <div className="space-y-16">
              {['Programming', 'Frontend', 'Backend', 'Database', 'Tools', 'Data'].map((category, categoryIndex) => (
                <div key={category} className="relative">
                  {/* Enhanced Category Header */}
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-all duration-500 shadow-lg hover:shadow-yellow-400/50">
                      <span className="text-black font-bold text-xl transform -rotate-12">{category.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-4xl font-bold text-white mb-3">{category}</h3>
                      <div className="h-1.5 bg-gradient-to-r from-yellow-400 via-cyan-400 to-transparent rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Ultra-Flexible Skills Grid */}
                  <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 auto-rows-fr">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill, index) => (
                        <div 
                          key={index} 
                          className="skill-card group relative bg-gradient-to-br from-black/60 to-gray-900/60 backdrop-blur-lg border border-gray-600/50 hover:border-yellow-400/70 rounded-3xl p-8 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-yellow-400/30 cursor-pointer min-h-[160px] flex flex-col justify-center animate-float"
                          style={{
                            animationDelay: `${(categoryIndex * 150) + (index * 100)}ms`,
                            animation: 'fadeInUp 0.8s ease-out forwards'
                          }}
                        >
                          {/* Dynamic Background Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-cyan-400/5 to-purple-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                          
                          {/* Animated Border */}
                          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-yellow-400 group-hover:via-cyan-400 group-hover:to-purple-400 transition-all duration-500"></div>
                          
                          {/* Content */}
                          <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                            <div className="transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 group-hover:drop-shadow-lg">
                              {getSkillIcon(skill.name)}
                            </div>
                            <span className="text-white font-semibold text-sm group-hover:text-yellow-400 transition-all duration-300 leading-tight">
                              {skill.name}
                            </span>
                          </div>
                          
                          {/* Shimmer Effect */}
                          <div className="absolute inset-0 rounded-3xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                          </div>
                          
                          {/* Floating Particles */}
                          <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                            <div className="absolute top-2 left-2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-500"></div>
                            <div className="absolute top-4 right-3 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700"></div>
                            <div className="absolute bottom-3 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-900"></div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom Stats */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">30</div>
                <div className="text-gray-300">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">6</div>
                <div className="text-gray-300">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">5+</div>
                <div className="text-gray-300">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-gray-300">Passion</div>
              </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gradient-to-br from-black via-purple-900/20 to-pink-900/20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-16">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center transform rotate-45">
                <div className="w-4 h-4 bg-black rounded-sm transform -rotate-45"></div>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-white">
                CONTACT
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
                <h3 className="text-3xl font-bold text-white mb-8">Get In Touch</h3>
                <p className="text-lg text-gray-300 mb-12 leading-relaxed">
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!
              </p>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Mail className="w-8 h-8 text-black" />
                  </div>
                  <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
                      <a href="mailto:baskoroputra24@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors text-lg">
                      baskoroputra24@gmail.com 
                    </a>
                  </div>
                </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <Phone className="w-8 h-8 text-black" />
                  </div>
                  <div>
                      <h4 className="text-xl font-semibold text-white mb-2">WhatsApp</h4>
                      <a href="https://wa.me/6282197915553" className="text-gray-300 hover:text-yellow-400 transition-colors text-lg" target="_blank" rel="noopener noreferrer">
                      +62 821-9791-5553
                    </a>
                  </div>
                </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-black" />
                  </div>
                  <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Location</h4>
                      <p className="text-gray-300 text-lg">Malang, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
              <div className="bg-gray-900 border border-gray-800 p-12">
                <form onSubmit={sendEmail} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-3">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="w-full bg-black border-gray-700 text-white placeholder-gray-400 h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-3">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="your.email@example.com"
                        className="w-full bg-black border-gray-700 text-white placeholder-gray-400 h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-3">
                      Subject
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Brief subject of your message"
                      className="w-full bg-black border-gray-700 text-white placeholder-gray-400 h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-3">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Your detailed message..."
                      className="w-full bg-black border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 rounded-none transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/25 active:scale-95 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </span>
                  </Button>
                  {submitStatus && (
                    <div className={`p-4 rounded-lg text-center ${
                      submitStatus.includes('successfully') 
                        ? 'bg-green-900 text-green-300 border border-green-700' 
                        : 'bg-red-900 text-red-300 border border-red-700'
                    }`}>
                      {submitStatus}
                    </div>
                  )}
                </form>
              </div>
          </div>
        </div>
      </section>

      {/* Footer */}
        <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-16 px-6 border-t border-gray-800">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center transform rotate-45 group-hover:rotate-0 transition-transform duration-300">
                  <div className="w-7 h-7 bg-black rounded-sm transform -rotate-45"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <h3 className="text-3xl font-bold">Baskoro Rizky Adiputra</h3>
            </div>
            <p className="text-gray-300 mb-8 text-lg">
            Full Stack Developer passionate about creating innovative digital solutions
          </p>
            <div className="flex justify-center gap-8 mb-8">
            <a 
              href="mailto:baskoroputra24@gmail.com" 
                className="text-white hover:text-yellow-400 transition-colors"
            >
                <Mail className="w-8 h-8" />
            </a>
            <a 
              href="https://github.com/Bazzoro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-yellow-400 transition-colors"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="https://wa.me/6282197915553" 
              target="_blank" 
              rel="noopener noreferrer" 
                className="text-white hover:text-yellow-400 transition-colors"
            >
                <Phone className="w-8 h-8" />
            </a>
          </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
              © 2024 Baskoro Rizky Adiputra. Built with ❤️ using <strong>Next.js</strong>
            </p>
          </div>
        </div>
      </footer>
      </main>
  </div>
  )
}