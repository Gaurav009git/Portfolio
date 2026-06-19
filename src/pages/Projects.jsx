import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import useSound from '../hooks/useSound';

const Projects = () => {
  const { playHover, playClick } = useSound();
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [selectedProject]);

  // ESC key to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        setSelectedProject(null);
        playClick();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [selectedProject, playClick]);

  const projects = [
    {
      id: 1,
      title: 'Loopixs',
      description: 'A modern social media web application inspired by Instagram and Snapchat, designed for seamless content sharing and real-time engagement. Allows users to upload photos, short videos (Reels), share stories, like, comment, and interact with other users.',
      longDescription: 'Loopixs is a full-featured social media platform built with React and Node.js. It features real-time messaging, story sharing, photo/video uploads, and a sophisticated recommendation algorithm. The app supports multiple user roles and includes advanced privacy controls.',
      tech: ['React', 'Bootstrap', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3'],
      status: 'Completed',
      category: 'Full Stack',
      icon: '📱',
      color: '#4285F4',
      gradient: 'linear-gradient(135deg, #4285F4, #34A853)',
      link: '#',
      github: 'https://github.com/Gaurav009git',
      features: [
        'Real-time messaging with WebSocket',
        'Story sharing with 24-hour expiry',
        'Photo/video uploads with filters',
        'User authentication & authorization',
        'Push notifications',
        'Responsive design'
      ]
    },
    {
      id: 2,
      title: 'ProfitUp',
      description: 'An all-in-one bookkeeping solution designed to help businesses manage income, expenses, invoices, and financial records with ease. Features automated calculations and comprehensive reporting.',
      longDescription: 'ProfitUp is a comprehensive financial management platform that helps businesses track income, expenses, and generate detailed financial reports. It includes invoice generation, expense categorization, and tax calculation features.',
      tech: ['React', 'Node.js', 'MongoDB', 'Vite', 'Bootstrap', 'Chart.js'],
      status: 'Completed',
      category: 'Full Stack',
      icon: '📊',
      color: '#FBBC05',
      gradient: 'linear-gradient(135deg, #FBBC05, #EA4335)',
      link: 'https://profittrrade.vercel.app',
      github: 'https://github.com/Gaurav009git',
      features: [
        'Income & expense tracking',
        'Invoice generation',
        'Financial reporting',
        'Data visualization',
        'Multi-currency support',
        'Tax calculation'
      ]
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A personal web application showcasing skills, projects, education, and achievements. Provides a professional online presence for recruiters, clients, and employers.',
      longDescription: 'A modern portfolio website built with React and Framer Motion, featuring smooth animations, responsive design, and an integrated contact form. Showcases projects, skills, and professional experience.',
      tech: ['React', 'Framer Motion', 'EmailJS', 'Vite', 'CSS3', 'React Router'],
      status: 'Completed',
      category: 'Frontend',
      icon: '💼',
      color: '#34A853',
      gradient: 'linear-gradient(135deg, #34A853, #4285F4)',
      link: '#',
      github: 'https://github.com/Gaurav009git',
      features: [
        'Smooth animations',
        'Responsive design',
        'Contact form integration',
        'Project showcase',
        'Skills section',
        'SEO optimized'
      ]
    },
    {
      id: 4,
      title: 'Student Attendance System',
      description: 'A web-based application that automates recording and managing student attendance. Enables digital attendance marking, student record management, and report generation.',
      longDescription: 'A comprehensive attendance management system for educational institutions. Features include QR code-based attendance, real-time tracking, automated reports, and parent notifications.',
      tech: ['React', 'Node.js', 'JWT', 'MongoDB', 'Socket.io', 'Express.js', 'QR Code'],
      status: 'Completed',
      category: 'Full Stack',
      icon: '🎓',
      color: '#EA4335',
      gradient: 'linear-gradient(135deg, #EA4335, #FBBC05)',
      link: '#',
      github: 'https://github.com/Gaurav009git',
      features: [
        'QR code attendance',
        'Real-time tracking',
        'Automated reports',
        'Parent notifications',
        'Role-based access',
        'Export to Excel'
      ]
    },
    {
      id: 5,
      title: 'Blood Donation System',
      description: 'A web application connecting blood donors with recipients and healthcare organizations. Simplifies the blood donation process and ensures timely access to safe blood.',
      longDescription: 'A life-saving platform that connects blood donors with those in need. Features include donor registration, blood type matching, location-based search, and emergency request handling.',
      tech: ['React', 'Node.js', 'JWT', 'MongoDB', 'Socket.io', 'Express.js', 'Google Maps API'],
      status: 'Completed',
      category: 'Full Stack',
      icon: '🩸',
      color: '#DC143C',
      gradient: 'linear-gradient(135deg, #DC143C, #EA4335)',
      link: '#',
      github: 'https://github.com/Gaurav009git',
      features: [
        'Donor registration',
        'Blood type matching',
        'Location-based search',
        'Emergency requests',
        'Donation history',
        'Health tips'
      ]
    },
    {
      id: 6,
      title: 'Connectoo',
      description: 'A secure, real-time messaging platform with private and group chats, typing indicators, and message notifications using WebSocket communication.',
      longDescription: 'A modern messaging application supporting private chats, group conversations, file sharing, and video calls. Built with real-time WebSocket communication for instant messaging.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'WebRTC', 'Redis'],
      status: 'In Progress',
      category: 'Full Stack',
      icon: '💬',
      color: '#8AB4F8',
      gradient: 'linear-gradient(135deg, #8AB4F8, #4285F4)',
      link: '#',
      github: 'https://github.com/Gaurav009git',
      features: [
        'Private & group chats',
        'File sharing',
        'Video calls',
        'Message encryption',
        'Online status',
        'Message search'
      ]
    },
    {
      id: 7,
      title: 'TaskFlow',
      description: 'A full-featured task management web app for creating, organizing, and tracking daily activities with deadlines, priorities, and progress tracking.',
      longDescription: 'A comprehensive project management tool with Kanban boards, Gantt charts, team collaboration features, and automated workflow management.',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT Auth', 'Drag & Drop', 'Redis'],
      status: 'In Progress',
      category: 'Full Stack',
      icon: '✅',
      color: '#E1306C',
      gradient: 'linear-gradient(135deg, #E1306C, #FBBC05)',
      link: '#',
      github: 'https://github.com/Gaurav009git',
      features: [
        'Kanban boards',
        'Gantt charts',
        'Team collaboration',
        'Time tracking',
        'File attachments',
        'Email notifications'
      ]
    },
    {
      id: 8,
      title: 'RESTful API Gateway',
      description: 'A high-performance API gateway service with rate limiting, authentication, caching, and load balancing. Handles millions of requests with microservices architecture.',
      longDescription: 'A robust backend API gateway built with Node.js and Express.js that serves as a single entry point for multiple microservices. Features include JWT authentication, Redis caching, rate limiting, request validation, and comprehensive logging with Winston.',
      tech: ['Node.js', 'Express.js', 'Redis', 'JWT', 'Docker', 'Nginx', 'Winston'],
      status: 'Completed',
      category: 'Backend',
      icon: '🔌',
      color: '#FF6B35',
      gradient: 'linear-gradient(135deg, #FF6B35, #FF8C42)',
      link: '#',
      github: 'https://github.com/Gaurav009git',
      features: [
        'Rate limiting & throttling',
        'JWT authentication',
        'Redis caching layer',
        'Load balancing',
        'Request validation',
        'Comprehensive logging',
        'Docker containerization',
        'API documentation'
      ]
    },
    {
      id: 9,
      title: 'MongoDB Atlas Manager',
      description: 'A database management tool for MongoDB Atlas with automated backups, performance monitoring, and schema validation. Includes data migration and indexing optimization.',
      longDescription: 'A comprehensive database management system for MongoDB Atlas that provides automated backup scheduling, real-time performance monitoring, index optimization suggestions, and data migration tools. Features a dashboard for visualizing database metrics and query performance.',
      tech: ['MongoDB', 'Mongoose', 'Node.js', 'Express.js', 'Agenda.js', 'Grafana'],
      status: 'Completed',
      category: 'Backend',
      icon: '🗄️',
      color: '#47A248',
      gradient: 'linear-gradient(135deg, #47A248, #3F8F3F)',
      link: '#',
      github: 'https://github.com/Gaurav009git',
      features: [
        'Automated backups',
        'Performance monitoring',
        'Schema validation',
        'Data migration tools',
        'Index optimization',
        'Query analytics',
        'Dashboard visualization',
        'Alert notifications'
      ]
    },
    {
      id: 10,
      title: 'Microservices E-Commerce Backend',
      description: 'A scalable e-commerce backend built with microservices architecture. Handles product catalog, user management, order processing, and payment integration.',
      longDescription: 'A production-ready e-commerce backend system using microservices architecture. Each service is independently deployable with its own database. Includes product service, user service, order service, payment service, and notification service with RabbitMQ message broker.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'RabbitMQ', 'Docker', 'Kubernetes'],
      status: 'In Progress',
      category: 'Backend',
      icon: '🛒',
      color: '#7928CA',
      gradient: 'linear-gradient(135deg, #7928CA, #FF0080)',
      link: '#',
      github: 'https://github.com/Gaurav009git',
      features: [
        'Microservices architecture',
        'Message queuing with RabbitMQ',
        'PostgreSQL & MongoDB databases',
        'Docker containerization',
        'Kubernetes orchestration',
        'API Gateway pattern',
        'Circuit breaker pattern',
        'Distributed logging'
      ]
    },
    {
      id: 11,
      title: 'Artbook',
      description: 'A creative digital art gallery and portfolio platform for artists to showcase, share, and sell their artwork. Features a beautiful, immersive interface for discovering and collecting digital art.',
      longDescription: 'Artbook is an innovative digital art platform that connects artists with art enthusiasts and collectors. It provides a stunning gallery experience where artists can create portfolios, upload high-resolution artwork, participate in art challenges, and sell digital prints. The platform includes social features like following artists, liking artwork, and curated collections.',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS S3', 'Stripe', 'Redis', 'GraphQL'],
      status: 'Planning',
      category: 'Full Stack',
      icon: '🎨',
      color: '#FF6B9D',
      gradient: 'linear-gradient(135deg, #FF6B9D, #C084FC, #818CF8)',
      link: '#',
      github: 'https://github.com/Gaurav009git',
      features: [
        'Artist portfolio creation',
        'High-resolution image uploads',
        'Digital art marketplace',
        'Secure payment integration',
        'Social features & following',
        'Art challenges & contests',
        'Curated collections',
        'Advanced search & filters',
        'Artist analytics dashboard',
        'Mobile responsive design'
      ]
    }
  ];

  const filters = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = useMemo(() => 
    filter === 'All' 
      ? projects 
      : projects.filter(project => project.category === filter),
    [filter]
  );

  const stats = useMemo(() => ({
    completed: projects.filter(p => p.status === 'Completed').length,
    inProgress: projects.filter(p => p.status === 'In Progress').length,
    planning: projects.filter(p => p.status === 'Planning').length,
    totalTechnologies: [...new Set(projects.flatMap(p => p.tech))].length
  }), []);

  const handleProjectClick = useCallback((project) => {
    playClick();
    setSelectedProject(project);
  }, [playClick]);

  const closeModal = useCallback(() => {
    playClick();
    setSelectedProject(null);
  }, [playClick]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#34A853';
      case 'In Progress': return '#FBBC05';
      case 'Planning': return '#4285F4';
      default: return '#5F6368';
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: 10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.5
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    hover: {
      y: -15,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.97,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const statVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.8
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }),
    hover: {
      scale: 1.08,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const modalOverlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const modalContentVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.7,
      y: 100,
      rotateX: 15
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.8
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    })
  };

  const GoogleText = ({ text, className = '' }) => (
    <span className={`google-gradient-text ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span 
          key={index}
          className={
            char === ' ' ? 'space' :
            index % 4 === 0 ? 'google-blue' :
            index % 4 === 1 ? 'google-red' :
            index % 4 === 2 ? 'google-yellow' : 'google-green'
          }
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: index * 0.05,
            type: "spring",
            stiffness: 200,
            damping: 10
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );

  return (
    <div className="projects-page">
      <style>{`
        * {
          box-sizing: border-box;
        }

        .projects-page {
          --google-blue: #4285F4;
          --google-red: #EA4335;
          --google-yellow: #FBBC05;
          --google-green: #34A853;
          --bg-dark: #0F0F0F;
          --bg-darker: #0A0A0A;
          --text-primary: #E8EAED;
          --text-secondary: #9AA0A6;
          --card-bg: #1E1E1E;
          --border: #3C4043;
        }

        .projects-page {
          min-height: 100vh;
          max-width: 1400px;
          margin: 0 auto;
          padding: 6rem 2rem 3rem;
          position: relative;
          overflow: hidden;
        }

        /* Animated background gradient */
        .projects-page::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(66, 133, 244, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(234, 67, 53, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(52, 168, 83, 0.06) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
          animation: backgroundShift 20s ease-in-out infinite alternate;
        }

        @keyframes backgroundShift {
          0% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
          100% {
            opacity: 0.5;
            transform: scale(1);
          }
        }

        .projects-page > * {
          position: relative;
          z-index: 1;
        }

        /* CURSOR FIX: Ensure custom cursor is always on top */
        .custom-cursor {
          z-index: 999999 !important;
          position: fixed !important;
          pointer-events: none !important;
        }

        body.has-custom-cursor,
        body.has-custom-cursor * {
          cursor: none !important;
        }

        .modal-overlay {
          z-index: 99999 !important;
        }

        .modal-content {
          z-index: 99999 !important;
        }

        /* Header */
        .projects-header {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }

        .projects-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -1px;
          color: var(--text-primary);
          position: relative;
          display: inline-block;
        }

        .projects-header h1::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, 
            var(--google-blue), 
            var(--google-red), 
            var(--google-yellow), 
            var(--google-green)
          );
          border-radius: 2px;
          animation: underlineWidth 3s ease-in-out infinite;
        }

        @keyframes underlineWidth {
          0%, 100% { width: 100px; }
          50% { width: 200px; }
        }

        .projects-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 1.5rem auto 0;
          line-height: 1.6;
        }

        .google-gradient-text {
          font-weight: 700;
          letter-spacing: -0.5px;
          display: inline-block;
        }
        .google-blue { color: #4285F4; }
        .google-red { color: #EA4335; }
        .google-yellow { color: #FBBC05; }
        .google-green { color: #34A853; }
        .space { margin: 0 2px; }

        /* Filter */
        .filter-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .filter-button {
          padding: 0.75rem 1.5rem;
          border: 2px solid var(--border);
          border-radius: 12px;
          background: var(--card-bg);
          color: var(--text-secondary);
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          white-space: nowrap;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .filter-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(66, 133, 244, 0.1);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .filter-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .filter-button:hover {
          border-color: var(--google-blue);
          color: var(--google-blue);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(66, 133, 244, 0.2);
        }

        .filter-button.active {
          background: linear-gradient(45deg, var(--google-blue), var(--google-green));
          color: white;
          border-color: transparent;
          box-shadow: 0 5px 20px rgba(66, 133, 244, 0.3);
          animation: activePulse 2s ease-in-out infinite;
        }

        @keyframes activePulse {
          0%, 100% { box-shadow: 0 5px 20px rgba(66, 133, 244, 0.3); }
          50% { box-shadow: 0 5px 30px rgba(66, 133, 244, 0.5); }
        }

        /* Empty State */
        .empty-state {
          text-align: center;
          padding: 4rem 2rem;
          grid-column: 1 / -1;
        }

        .empty-state-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
          display: block;
        }

        .empty-state-text {
          color: var(--text-secondary);
          font-size: 1.2rem;
          font-weight: 500;
        }

        /* Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          perspective: 1000px;
        }

        /* Card */
        .project-card {
          background: var(--card-bg);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid var(--border);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          transform-style: preserve-3d;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--gradient, linear-gradient(45deg, #4285F4, #34A853));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.05),
            transparent
          );
          transition: left 0.5s;
          z-index: 0;
        }

        .project-card:hover::after {
          left: 100%;
        }

        .project-card:hover {
          border-color: var(--google-blue);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 80px rgba(66, 133, 244, 0.1);
        }

        .project-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .project-icon {
          font-size: 3rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
          filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));
        }

        .project-card:hover .project-icon {
          transform: scale(1.1) rotate(10deg);
        }

        .project-title-section {
          flex: 1;
          min-width: 0;
        }

        .project-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          background: var(--gradient, linear-gradient(45deg, #4285F4, #34A853));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          z-index: 1;
        }

        .project-status {
          display: inline-block;
          padding: 0.3rem 1rem;
          border-radius: 20px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          z-index: 1;
        }

        .project-category {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-left: 0.5rem;
          border: 1px solid;
          position: relative;
          z-index: 1;
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          position: relative;
          z-index: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .tech-tag {
          padding: 0.3rem 0.8rem;
          border: 1.5px solid;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }

        .project-card:hover .tech-tag {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .project-actions {
          display: flex;
          gap: 1rem;
          position: relative;
          z-index: 1;
        }

        .project-link {
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .live-link {
          background: linear-gradient(45deg, var(--google-blue), var(--google-green));
          color: white;
        }

        .live-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(66, 133, 244, 0.3);
        }

        .github-link {
          background: var(--bg-darker);
          color: var(--text-primary);
          border: 1px solid var(--border);
        }

        .github-link:hover {
          border-color: var(--text-primary);
          transform: translateY(-2px);
        }

        /* Stats */
        .stats-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
          perspective: 1000px;
        }

        .stat-card {
          background: var(--card-bg);
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid var(--border);
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          background: linear-gradient(135deg, 
            rgba(66, 133, 244, 0.1), 
            rgba(52, 168, 83, 0.1)
          );
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stat-card:hover::before {
          opacity: 1;
        }

        .stat-card:hover {
          border-color: var(--google-blue);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(45deg, var(--google-blue), var(--google-green));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 1;
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          z-index: 1;
        }

        .planning-pulse {
          animation: pulseBadge 2s ease-in-out infinite;
        }

        @keyframes pulseBadge {
          0%, 100% { box-shadow: 0 0 0 0 rgba(66, 133, 244, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(66, 133, 244, 0); }
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: 1rem;
          overflow-y: auto;
          perspective: 1000px;
        }

        .modal-content {
          background: #1E1E1E;
          border-radius: 24px;
          padding: 2.5rem;
          max-width: 700px;
          width: 100%;
          max-height: 80%;
          overflow-y: auto;
          position: relative;
          border: 1px solid #3C4043;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            0 0 100px rgba(66, 133, 244, 0.1);
          margin: auto;
          transform-style: preserve-3d;
        }

        .modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .modal-close-btn {
          position: sticky;
          top: 0;
          float: right;
          background: #0A0A0A;
          border: 2px solid #3C4043;
          color: #E8EAED;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          z-index: 10;
          cursor: pointer;
        }

        .modal-close-btn:hover {
          background: #EA4335;
          border-color: #EA4335;
          transform: scale(1.1) rotate(90deg);
        }

        .modal-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          text-align: center;
          animation: iconFloat 3s ease-in-out infinite;
        }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .modal-title {
          font-size: 2.2rem;
          font-weight: 800;
          margin-bottom: 1rem;
          text-align: center;
          background: var(--gradient, linear-gradient(45deg, #4285F4, #34A853));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.2;
        }

        .modal-description {
          color: #9AA0A6;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: 1rem;
          text-align: center;
        }

        .modal-features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .modal-feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          border: 1px solid #3C4043;
          transition: all 0.3s ease;
        }

        .modal-feature-item:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #4285F4;
          transform: translateX(5px);
        }

        .modal-feature-check {
          color: #34A853;
          font-size: 1.1rem;
        }

        .modal-feature-text {
          color: #9AA0A6;
          font-size: 0.85rem;
        }

        .modal-tech-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          justify-content: center;
        }

        .modal-tech-tag {
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.05);
          border: 1.5px solid;
          transition: all 0.3s ease;
        }

        .modal-tech-tag:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .modal-action-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .modal-live-btn {
          background: linear-gradient(45deg, #4285F4, #34A853);
          color: white;
        }

        .modal-live-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(66, 133, 244, 0.3);
        }

        .modal-github-btn {
          background: #0A0A0A;
          color: #E8EAED;
          border: 1px solid #3C4043;
        }

        .modal-github-btn:hover {
          border-color: #E8EAED;
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .projects-page {
            padding: 5rem 1rem 6rem;
          }
          .projects-header h1 {
            font-size: 2.5rem;
          }
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .filter-container {
            gap: 0.5rem;
          }
          .filter-button {
            padding: 0.6rem 1rem;
            font-size: 0.8rem;
          }
          .project-card {
            padding: 1.5rem;
          }
          .stats-section {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          .modal-content {
            padding: 1.5rem;
            max-height: 90%;
          }
          .modal-title {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .projects-page {
            padding: 4.5rem 0.75rem 7rem;
          }
          .projects-header h1 {
            font-size: 2rem;
          }
          .projects-subtitle {
            font-size: 0.9rem;
          }
          .project-title {
            font-size: 1.3rem;
          }
          .stats-section {
            grid-template-columns: 1fr;
          }
          .stat-number {
            font-size: 2.5rem;
          }
          .project-actions {
            flex-direction: column;
          }
          .project-link {
            justify-content: center;
          }
          .modal-content {
            padding: 1.25rem;
          }
          .modal-title {
            font-size: 1.5rem;
          }
          .modal-features-grid {
            grid-template-columns: 1fr;
          }
          .modal-actions {
            flex-direction: column;
          }
          .modal-action-btn {
            justify-content: center;
          }
        }

        @media (max-width: 360px) {
          .projects-page {
            padding: 4rem 0.5rem 7.5rem;
          }
          .project-card {
            padding: 1rem;
          }
        }
      `}</style>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        className="projects-header"
      >
        <h1>
          <GoogleText text="My Projects" />
        </h1>
        <motion.p 
          className="projects-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Exploring innovative solutions through full-stack development, creating impactful applications that solve real-world problems.
        </motion.p>
      </motion.div>

      {/* Filter */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="filter-container"
      >
        {filters.map((filterItem, index) => (
          <motion.button
            key={filterItem}
            className={`filter-button ${filter === filterItem ? 'active' : ''}`}
            onClick={() => {
              playClick();
              setFilter(filterItem);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
          >
            {filterItem}
            {filterItem !== 'All' && (
              <motion.span 
                style={{ marginLeft: '0.5rem', opacity: 0.7, fontSize: '0.8rem' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, delay: 0.5 + index * 0.1 }}
              >
                ({projects.filter(p => p.category === filterItem).length})
              </motion.span>
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div 
        layout 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover="hover"
                whileTap="tap"
                custom={index}
                className="project-card"
                style={{ '--gradient': project.gradient }}
                onMouseEnter={playHover}
                onClick={() => handleProjectClick(project)}
              >
                <div className="project-header">
                  <motion.div 
                    className="project-icon"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      repeatDelay: 2,
                      ease: "easeInOut"
                    }}
                  >
                    {project.icon}
                  </motion.div>
                  <div className="project-title-section">
                    <h3 className="project-title">{project.title}</h3>
                    <motion.span 
                      className={`project-status ${project.status === 'Planning' ? 'planning-pulse' : ''}`}
                      style={{ backgroundColor: getStatusColor(project.status) }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {project.status}
                    </motion.span>
                    <motion.span 
                      className="project-category"
                      style={{ 
                        borderColor: project.color,
                        color: project.color,
                        backgroundColor: `${project.color}15`
                      }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.slice(0, 4).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="tech-tag"
                      style={{ 
                        borderColor: project.color,
                        color: project.color
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + techIndex * 0.1, type: "spring", stiffness: 300 }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: `${project.color}20`
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.tech.length > 4 && (
                    <motion.span 
                      className="tech-tag" 
                      style={{ borderColor: '#5F6368', color: '#5F6368' }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6, type: "spring", stiffness: 300 }}
                    >
                      +{project.tech.length - 4} more
                    </motion.span>
                  )}
                </div>

                <div className="project-actions">
                  <motion.a
                    href={project.link}
                    className="project-link live-link"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    🚀 Live Demo
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="project-link github-link"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    📂 GitHub
                  </motion.a>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="empty-state"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="empty-state-icon"
                animate={{ 
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                🔍
              </motion.span>
              <p className="empty-state-text">No projects found in this category</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="stats-section"
      >
        <motion.div 
          className="stat-card" 
          variants={statVariants}
          custom={0}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="stat-number"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
          >
            {stats.completed}
          </motion.div>
          <div className="stat-label">Completed Projects</div>
        </motion.div>
        <motion.div 
          className="stat-card" 
          variants={statVariants}
          custom={1}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="stat-number"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          >
            {stats.inProgress}
          </motion.div>
          <div className="stat-label">In Progress</div>
        </motion.div>
        <motion.div 
          className="stat-card" 
          variants={statVariants}
          custom={2}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="stat-number"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
          >
            {stats.planning}
          </motion.div>
          <div className="stat-label">Planned</div>
        </motion.div>
        <motion.div 
          className="stat-card" 
          variants={statVariants}
          custom={3}
          whileHover="hover"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="stat-number"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
          >
            {stats.totalTechnologies}
          </motion.div>
          <div className="stat-label">Technologies</div>
        </motion.div>
      </motion.div>

      {/* MODAL */}
      {selectedProject && createPortal(
        <AnimatePresence>
          <motion.div
            variants={modalOverlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="modal-overlay"
            onClick={closeModal}
          >
            <motion.div
              variants={modalContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="modal-content"
              style={{ '--gradient': selectedProject.gradient }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button 
                onClick={closeModal}
                aria-label="Close modal"
                className="modal-close-btn"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>

              <motion.div 
                className="modal-icon"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {selectedProject.icon}
              </motion.div>

              <motion.h2 
                className="modal-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {selectedProject.title}
              </motion.h2>

              <motion.p 
                className="modal-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {selectedProject.longDescription}
              </motion.p>

              <div className="modal-features-grid">
                {selectedProject.features.map((feature, index) => (
                  <motion.div 
                    key={index} 
                    className="modal-feature-item"
                    variants={featureItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={index}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }}
                  >
                    <motion.span 
                      className="modal-feature-check"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                    >
                      ✓
                    </motion.span>
                    <span className="modal-feature-text">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="modal-tech-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {selectedProject.tech.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="modal-tech-tag"
                    style={{ 
                      borderColor: selectedProject.color,
                      color: selectedProject.color
                    }}
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 300
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -5,
                      backgroundColor: `${selectedProject.color}20`
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div 
                className="modal-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn modal-live-btn"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🚀 View Live Demo
                </motion.a>
                <motion.a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-action-btn modal-github-btn"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📂 View Source Code
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default Projects;