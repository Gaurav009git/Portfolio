import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from '../hooks/useSound';
import profilePhoto from "../assets/images/profile-photo.jpg";

const Home = () => {
  const { playHover, playClick } = useSound();
  const [expandedCards, setExpandedCards] = useState({});
  const [clickedStats, setClickedStats] = useState({});

  const handleCardClick = useCallback((cardId) => {
    playClick();
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  }, [playClick]);

  const handleStatClick = useCallback((statLabel) => {
    playClick();
    setClickedStats(prev => ({
      ...prev,
      [statLabel]: true
    }));
    
    setTimeout(() => {
      setClickedStats(prev => ({
        ...prev,
        [statLabel]: false
      }));
    }, 600);
  }, [playClick]);

  const handleSocialClick = useCallback((url) => {
    playClick();
    window.open(url, '_blank');
  }, [playClick]);

  const services = useMemo(() => [
    {
      id: 'web-design',
      title: 'Web Design & Development',
      description: 'Modern, responsive websites.',
      hoverText: 'I design and develop fast, mobile-friendly websites with clean layouts, ensuring an engaging user experience that helps your brand stand out and attract more visitors.',
      color: '#4285F4',
      icon: '🌐',
      gradient: 'linear-gradient(135deg, #4285F4, #1a73e8)'
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      description: 'Interactive user interfaces.',
      hoverText: 'Using React and modern frameworks, I build visually appealing, high-performance frontends with smooth animations, fast loading speeds, and responsive designs across all devices.',
      color: '#EA4335',
      icon: '⚛️',
      gradient: 'linear-gradient(135deg, #EA4335, #c5221f)'
    },
    {
      id: 'backend',
      title: 'Backend Development',
      description: 'Secure and scalable systems.',
      hoverText: 'I create reliable backend systems with Node.js and databases that handle complex data efficiently, keeping your applications secure, scalable, and always running smoothly.',
      color: '#FBBC05',
      icon: '⚙️',
      gradient: 'linear-gradient(135deg, #FBBC05, #f9a825)'
    },
    {
      id: 'maintenance',
      title: 'Website Maintenance',
      description: 'Performance and updates.',
      hoverText: 'I continuously improve website performance, enhance security, and update content to maintain top speed, reliability, and user engagement for your digital presence.',
      color: '#34A853',
      icon: '🚀',
      gradient: 'linear-gradient(135deg, #34A853, #1e8e3e)'
    }
  ], []);

  const socialLinks = useMemo(() => [
    {
      platform: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/gaurav-chaudhari009',
      color: '#0077B5'
    },
    {
      platform: 'GitHub',
      icon: '💻',
      url: 'https://github.com/Gaurav009git',
      color: '#6e5494'
    },
    {
      platform: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com/_gaurav.009',
      color: '#E1306C'
    }
  ], []);

  const stats = useMemo(() => [
    { number: '07', label: 'Projects Completed', color: '#4285F4', icon: '✅' },
    { number: '1.5+', label: 'Years Experience', color: '#EA4335', icon: '📅' },
    { number: '100%', label: 'Client Satisfaction', color: '#FBBC05', icon: '⭐' },
    { number: '24/7', label: 'Learning Mindset', color: '#34A853', icon: '🧠' }
  ], []);

  const GoogleText = useCallback(({ text }) => {
    const googleColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];
    return (
      <span style={{ fontWeight: '800', letterSpacing: '-0.5px', display: 'inline' }}>
        {text.split('').map((char, index) => (
          <span 
            key={index}
            style={{
              color: char === ' ' ? 'transparent' : googleColors[index % 4],
              marginRight: char === ' ' ? '8px' : '0',
            }}
          >
            {char}
          </span>
        ))}
      </span>
    );
  }, []);

  const backgroundShapes = useMemo(() => {
    const shapes = [];
    const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];
    
    for (let i = 0; i < 8; i++) {
      const size = Math.random() * 150 + 50;
      const color = colors[i % 4];
      const left = (i * 12.5) % 100;
      const top = (i * 17.3) % 100;
      const animationDuration = 12 + (i % 5);
      const animationDelay = i * 0.7;
      
      shapes.push(
        <div
          key={i}
          className="bg-shape"
          style={{
            position: 'absolute',
            left: `${left}%`,
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            background: color,
            borderRadius: '50%',
            opacity: 0.06,
            filter: 'blur(70px)',
            animation: `float ${animationDuration}s infinite ease-in-out`,
            animationDelay: `${animationDelay}s`,
            willChange: 'transform',
            transform: 'translate3d(0, 0, 0)',
            pointerEvents: 'none',
          }}
        />
      );
    }
    return shapes;
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          font-family: 'Google Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #0a0a0f;
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          cursor: none !important;
        }

        * {
          cursor: none !important;
        }

        @keyframes float {
          0%, 100% { transform: translate3d(0, 0px, 0) scale(1); }
          50% { transform: translate3d(0, -20px, 0) scale(1.05); }
        }

        @keyframes gradientMove {
          0% { transform: translate3d(0%, 0%, 0) rotate(0deg); }
          50% { transform: translate3d(5%, -5%, 0) rotate(3deg); }
          100% { transform: translate3d(0%, 0%, 0) rotate(0deg); }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(66, 133, 244, 0.3); }
          50% { box-shadow: 0 0 40px rgba(66, 133, 244, 0.8); }
        }

        @keyframes rotateBorder {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes rotateBorderReverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        @keyframes morphBorder {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }

        .profile-wrapper {
          position: relative;
        }

        .profile-wrapper::before {
          content: '';
          position: absolute;
          top: -4px;
          left: -4px;
          right: -4px;
          bottom: -4px;
          background: linear-gradient(45deg, #4285F4, #EA4335, #FBBC05, #34A853, #4285F4);
          border-radius: 32px;
          z-index: 1;
          animation: rotateBorder 4s linear infinite;
          background-size: 300% 300%;
          filter: blur(8px);
          opacity: 0.7;
        }

        .profile-wrapper::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #4285F4, #EA4335, #FBBC05, #34A853, #4285F4);
          border-radius: 30px;
          z-index: 2;
          animation: rotateBorder 4s linear infinite reverse;
          background-size: 300% 300%;
          opacity: 0.5;
        }

        .profile-inner {
          position: relative;
          z-index: 3;
          border-radius: 28px;
          overflow: hidden;
          border: 3px solid rgba(255, 255, 255, 0.2);
          box-shadow: 
            0 0 30px rgba(66, 133, 244, 0.3),
            0 0 60px rgba(234, 67, 53, 0.2),
            0 0 90px rgba(251, 188, 5, 0.1),
            inset 0 0 30px rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .profile-inner:hover {
          box-shadow: 
            0 0 40px rgba(66, 133, 244, 0.5),
            0 0 80px rgba(234, 67, 53, 0.4),
            0 0 120px rgba(251, 188, 5, 0.3),
            0 0 160px rgba(52, 168, 83, 0.2);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .profile-shimmer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          z-index: 5;
          pointer-events: none;
          animation: shimmer 3s infinite;
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(20px);
          opacity: 0.6;
          pointer-events: none;
          z-index: 0;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 1024px) {
          .hero-grid { 
            grid-template-columns: 1fr !important; 
            gap: 2rem !important; 
          }
          .hero-text { 
            order: 2 !important; 
            text-align: center !important; 
            align-items: center !important;
            padding: 0 1rem !important;
          }
          .hero-photo { 
            order: 1 !important; 
            margin-bottom: 1rem !important;
          }
          .hero-title { 
            font-size: 2.8rem !important; 
            text-align: center !important; 
          }
          .hero-desc { 
            text-align: center !important; 
            max-width: 100% !important;
            padding: 0 1rem !important;
          }
          .stats-grid { 
            max-width: 600px !important; 
            margin: 1.5rem auto 0 !important;
            gap: 1rem !important;
          }
          .profile-wrapper {
            width: 280px !important;
            height: 280px !important;
            margin: 0 auto !important;
          }
          .profile-wrapper::before {
            border-radius: 28px !important;
          }
          .profile-wrapper::after {
            border-radius: 26px !important;
          }
          .profile-inner {
            border-radius: 24px !important;
          }
          .services-grid { 
            grid-template-columns: repeat(2, 1fr) !important; 
            max-width: 700px !important; 
            margin: 0 auto !important;
            gap: 1.5rem !important;
          }
          .hero-section {
            padding: 2rem 0 !important;
            min-height: auto !important;
          }
        }

        @media (max-width: 768px) {
          .container { 
            padding: 1rem !important; 
          }
          .hero-section {
            padding: 1.5rem 0 !important;
          }
          .hero-grid {
            gap: 1.5rem !important;
          }
          .hero-title { 
            font-size: 2.2rem !important; 
            padding: 0 0.5rem !important;
          }
          .hero-desc { 
            font-size: 1.1rem !important; 
            padding: 0 0.5rem !important;
          }
          .hero-text {
            gap: 1rem !important;
          }
          .stats-grid { 
            grid-template-columns: 1fr 1fr !important; 
            gap: 0.8rem !important;
            padding: 0 0.5rem !important;
          }
          .profile-wrapper {
            width: 220px !important;
            height: 220px !important;
          }
          .profile-wrapper::before {
            border-radius: 24px !important;
            filter: blur(6px) !important;
          }
          .profile-wrapper::after {
            border-radius: 22px !important;
          }
          .profile-inner {
            border-radius: 20px !important;
          }
          .services-grid { 
            grid-template-columns: 1fr !important; 
            max-width: 450px !important;
            gap: 1.5rem !important;
          }
          .services-title { 
            font-size: 2rem !important; 
          }
          .services-subtitle { 
            font-size: 1rem !important;
            padding: 0 1rem !important;
          }
          .services-section {
            padding: 2rem 0 3rem !important;
          }
          .section-header {
            margin-bottom: 2.5rem !important;
          }
          .social-btn { 
            width: 48px !important; 
            height: 48px !important; 
          }
          .social-links {
            gap: 1rem !important;
            margin-top: 1rem !important;
          }
          .service-card { 
            padding: 1.8rem 1.5rem !important; 
            min-height: 240px !important;
          }
          .bg-shape { 
            display: none !important; 
          }
          
          html, body {
            cursor: auto !important;
          }
          * {
            cursor: auto !important;
          }
        }

        @media (max-width: 480px) {
          .container { 
            padding: 0.8rem !important; 
          }
          .hero-section {
            padding: 1rem 0 !important;
          }
          .hero-grid {
            gap: 1rem !important;
          }
          .hero-title { 
            font-size: 1.7rem !important; 
          }
          .hero-desc { 
            font-size: 0.95rem !important; 
          }
          .hero-text {
            gap: 0.8rem !important;
          }
          .stats-grid { 
            grid-template-columns: 1fr 1fr !important; 
            gap: 0.6rem !important;
            padding: 0 !important;
          }
          .profile-wrapper {
            width: 180px !important;
            height: 180px !important;
          }
          .profile-wrapper::before {
            border-radius: 20px !important;
            filter: blur(4px) !important;
            top: -3px !important;
            left: -3px !important;
            right: -3px !important;
            bottom: -3px !important;
          }
          .profile-wrapper::after {
            border-radius: 18px !important;
            top: -2px !important;
            left: -2px !important;
            right: -2px !important;
            bottom: -2px !important;
          }
          .profile-inner {
            border-radius: 16px !important;
            border-width: 2px !important;
          }
          .social-btn { 
            width: 42px !important; 
            height: 42px !important; 
          }
          .social-icon { 
            font-size: 1.1rem !important; 
          }
          .social-links {
            gap: 0.8rem !important;
          }
          .service-card { 
            padding: 1.5rem 1rem !important; 
            min-height: 220px !important;
            border-radius: 20px !important;
          }
          .service-icon { 
            font-size: 2.2rem !important; 
          }
          .service-title-text { 
            font-size: 1.1rem !important; 
          }
          .services-title { 
            font-size: 1.6rem !important; 
          }
          .services-subtitle { 
            font-size: 0.9rem !important; 
          }
          .section-header {
            margin-bottom: 2rem !important;
          }
          .services-section {
            padding: 1.5rem 0 2.5rem !important;
          }
          .stat-number {
            font-size: 1.8rem !important;
          }
          .badge {
            font-size: 0.75rem !important;
            padding: 0.4rem 1rem !important;
          }
        }

        @media (max-width: 360px) {
          .container {
            padding: 0.5rem !important;
          }
          .hero-section {
            padding: 0.8rem 0 !important;
          }
          .profile-wrapper {
            width: 150px !important;
            height: 150px !important;
          }
          .profile-wrapper::before {
            border-radius: 18px !important;
            filter: blur(3px) !important;
            top: -2px !important;
            left: -2px !important;
            right: -2px !important;
            bottom: -2px !important;
          }
          .profile-wrapper::after {
            border-radius: 16px !important;
          }
          .profile-inner {
            border-radius: 14px !important;
          }
          .hero-title {
            font-size: 1.4rem !important;
          }
          .hero-desc {
            font-size: 0.85rem !important;
          }
          .stats-grid {
            grid-template-columns: 1fr !important;
            max-width: 250px !important;
            gap: 0.5rem !important;
          }
          .service-card {
            padding: 1.2rem 0.8rem !important;
            min-height: 200px !important;
          }
          .services-grid {
            gap: 1rem !important;
          }
          .social-btn {
            width: 38px !important;
            height: 38px !important;
          }
          .social-links {
            gap: 0.6rem !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          .bg-shape { 
            display: none !important; 
          }
        }

        * { 
          -webkit-tap-highlight-color: transparent; 
        }
      `}</style>

      {/* Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '#0a0a0f',
        }} />
        
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(ellipse at 30% 40%, rgba(66, 133, 244, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 60%, rgba(234, 67, 53, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 70%, rgba(251, 188, 5, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 60% 30%, rgba(52, 168, 83, 0.08) 0%, transparent 50%)
          `,
          filter: 'blur(60px)',
          animation: 'gradientMove 20s infinite alternate ease-in-out',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }} />
        
        {backgroundShapes}
      </div>

      {/* Main Content */}
      <div className="container" style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 2,
      }}>
        
        {/* Hero Section */}
        <section className="hero-section" style={{ 
          padding: '3rem 0', 
          minHeight: '85vh', 
          display: 'flex', 
          alignItems: 'center' 
        }}>
          <div className="hero-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            width: '100%',
          }}>
            
            {/* Text Content */}
            <motion.div
              className="hero-text"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                className="badge"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(66, 133, 244, 0.1)',
                  border: '1px solid rgba(66, 133, 244, 0.3)',
                  borderRadius: '50px',
                  padding: '0.5rem 1.2rem',
                  fontSize: '0.85rem',
                  color: '#4285F4',
                  width: 'fit-content',
                  backdropFilter: 'blur(20px)',
                }}
                whileHover={{ scale: 1.05 }}
                onClick={() => playClick()}
              >
                <span>✨</span> Available for Projects
              </motion.div>

              {/* Title */}
              <h1 className="hero-title" style={{ 
                fontSize: '3.8rem', 
                fontWeight: '800', 
                lineHeight: '1.2', 
                margin: '0',
              }}>
                <GoogleText text="Creative Full-Stack Developer" />
              </h1>
              
              {/* Description */}
              <p className="hero-desc" style={{ 
                fontSize: '1.25rem', 
                color: '#9AA0A6', 
                lineHeight: '1.8', 
                margin: '0', 
                maxWidth: '520px',
              }}>
                Crafting seamless, high-performance web solutions with modern technologies and innovative design.
              </p>

              {/* Stats Grid */}
              <div className="stats-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '1rem', 
                marginTop: '1rem' 
              }}>
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    style={{
                      background: clickedStats[stat.label] 
                        ? `rgba(${stat.color === '#4285F4' ? '66, 133, 244' : stat.color === '#EA4335' ? '234, 67, 53' : stat.color === '#FBBC05' ? '251, 188, 5' : '52, 168, 83'}, 0.15)`
                        : 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${clickedStats[stat.label] ? stat.color : 'rgba(255, 255, 255, 0.08)'}`,
                      borderRadius: '20px',
                      padding: '1.8rem 1.2rem',
                      textAlign: 'center',
                      backdropFilter: 'blur(20px)',
                      position: 'relative',
                      overflow: 'hidden',
                      willChange: 'transform',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={() => playHover()}
                    onClick={() => handleStatClick(stat.label)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      scale: clickedStats[stat.label] ? [1, 1.15, 1] : 1
                    }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.2 + index * 0.1,
                      scale: { duration: 0.3 }
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -8, 
                      borderColor: stat.color, 
                      background: 'rgba(255,255,255,0.08)', 
                      boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 60px ${stat.color}33` 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span 
                      style={{ 
                        fontSize: '1.8rem', 
                        display: 'block', 
                        marginBottom: '0.5rem' 
                      }}
                      animate={clickedStats[stat.label] ? {
                        scale: [1, 1.3, 1],
                        rotate: [0, 15, -15, 0],
                      } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      {stat.icon}
                    </motion.span>
                    <motion.span 
                      className="stat-number" 
                      style={{ 
                        display: 'block', 
                        fontSize: '2.4rem', 
                        fontWeight: '800', 
                        marginBottom: '0.3rem', 
                        color: stat.color 
                      }}
                      animate={clickedStats[stat.label] ? {
                        scale: [1, 1.2, 1],
                      } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      {stat.number}
                    </motion.span>
                    <span style={{ 
                      fontSize: '0.8rem', 
                      color: '#9AA0A6', 
                      textTransform: 'uppercase', 
                      letterSpacing: '1.5px', 
                      fontWeight: '600' 
                    }}>
                      {stat.label}
                    </span>
                    
                    {clickedStats[stat.label] && (
                      <motion.div
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 3, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '50px',
                          height: '50px',
                          background: stat.color,
                          borderRadius: '50%',
                          transform: 'translate(-50%, -50%)',
                          opacity: 0.3,
                          pointerEvents: 'none',
                        }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Profile Photo with WOW Effect */}
            <motion.div
              className="hero-photo"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <div 
                className="profile-wrapper"
                style={{ 
                  position: 'relative', 
                  width: '340px', 
                  height: '340px',
                }}
                onClick={() => playClick()}
              >
                {/* Floating orbs for extra wow effect */}
                <div className="floating-orb" style={{
                  width: '60px',
                  height: '60px',
                  background: '#4285F4',
                  top: '-10px',
                  right: '-10px',
                  animation: 'float 4s infinite ease-in-out',
                }} />
                <div className="floating-orb" style={{
                  width: '40px',
                  height: '40px',
                  background: '#EA4335',
                  bottom: '10px',
                  left: '-15px',
                  animation: 'float 3s infinite ease-in-out 1s',
                }} />
                <div className="floating-orb" style={{
                  width: '50px',
                  height: '50px',
                  background: '#FBBC05',
                  bottom: '-10px',
                  right: '20px',
                  animation: 'float 5s infinite ease-in-out 2s',
                }} />
                <div className="floating-orb" style={{
                  width: '30px',
                  height: '30px',
                  background: '#34A853',
                  top: '20px',
                  left: '-10px',
                  animation: 'float 3.5s infinite ease-in-out 0.5s',
                }} />

                {/* Main profile image with stunning effects */}
                <div className="profile-inner" style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                }}>
                  <img
                    src={profilePhoto}
                    alt="Gaurav Chaudhari"
                    loading="lazy"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      display: 'block',
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  <div style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #4285F4, #34A853)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                  }}>
                    <span style={{ fontSize: '5rem' }}>👨‍💻</span>
                  </div>
                  
                  {/* Shimmer overlay effect */}
                  <div className="profile-shimmer" />
                </div>

                {/* Extra glow ring */}
                <div style={{
                  position: 'absolute',
                  top: '-25px',
                  left: '-25px',
                  right: '-25px',
                  bottom: '-25px',
                  background: 'radial-gradient(circle, rgba(66, 133, 244, 0.2), rgba(234, 67, 53, 0.1), transparent 70%)',
                  borderRadius: '45px',
                  zIndex: '0',
                  filter: 'blur(30px)',
                  animation: 'pulse 3s infinite ease-in-out',
                }} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <motion.section
          className="services-section"
          style={{ padding: '4rem 0 5rem', width: '100%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.div
              className="badge"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(66, 133, 244, 0.1)',
                border: '1px solid rgba(66, 133, 244, 0.3)',
                borderRadius: '50px',
                padding: '0.5rem 1.5rem',
                fontSize: '0.85rem',
                color: '#4285F4',
                marginBottom: '1.5rem',
                backdropFilter: 'blur(20px)',
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => playClick()}
            >
              <span>🚀</span> What I Offer
            </motion.div>

            <h2 className="services-title" style={{ 
              fontSize: '3rem', 
              fontWeight: '800', 
              margin: '0 0 1rem 0',
            }}>
              <GoogleText text="My Services" />
            </h2>
            
            <p className="services-subtitle" style={{ 
              fontSize: '1.2rem', 
              color: '#9AA0A6', 
              fontStyle: 'italic', 
              margin: '0 0 2.5rem 0',
            }}>
              "Turning Creativity into Powerful Digital Solutions"
            </p>

            <div className="social-links" style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1.5rem', 
              marginTop: '1.5rem', 
              flexWrap: 'wrap' 
            }}>
              {socialLinks.map((social, index) => (
                <motion.button
                  key={social.platform}
                  className="social-btn"
                  style={{
                    width: '55px',
                    height: '55px',
                    borderRadius: '50%',
                    border: `2px solid ${social.color}`,
                    background: 'rgba(30, 30, 30, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0',
                    outline: 'none',
                    backdropFilter: 'blur(10px)',
                  }}
                  onMouseEnter={() => playHover()}
                  onClick={() => handleSocialClick(social.url)}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1, type: "spring" }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5, 
                    background: social.color, 
                    boxShadow: `0 15px 35px rgba(0,0,0,0.4), 0 0 50px ${social.color}66` 
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="social-icon" style={{ fontSize: '1.5rem' }}>
                    {social.icon}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="services-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem',
            width: '100%',
          }}>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card"
                style={{
                  background: expandedCards[service.id] 
                    ? 'linear-gradient(145deg, #1e1e28, #2a2a35)' 
                    : 'linear-gradient(145deg, rgba(26, 26, 35, 0.9), rgba(34, 34, 44, 0.9))',
                  border: expandedCards[service.id] 
                    ? `1px solid ${service.color}` 
                    : '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '24px',
                  padding: '2.5rem 2rem',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  textAlign: 'center',
                  minHeight: '280px',
                  backdropFilter: 'blur(20px)',
                  boxShadow: expandedCards[service.id]
                    ? `0 20px 50px rgba(0,0,0,0.4), 0 0 60px ${service.color}33`
                    : 'none',
                  willChange: 'transform',
                }}
                onMouseEnter={() => playHover()}
                onClick={() => handleCardClick(service.id)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: "spring" }}
                whileHover={{ 
                  y: -10, 
                  borderColor: service.color, 
                  boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 80px ${service.color}33` 
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: `radial-gradient(circle at 50% 0%, ${service.color}10, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                <motion.span 
                  className="service-icon" 
                  style={{ 
                    fontSize: '3.5rem', 
                    position: 'relative', 
                    zIndex: 1,
                    filter: `drop-shadow(0 0 15px ${service.color}44)`,
                  }}
                  animate={expandedCards[service.id] ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.span>
                
                <h3 className="service-title-text" style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  margin: '0',
                  position: 'relative',
                  zIndex: 1,
                  background: service.gradient,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {service.title}
                </h3>
                
                <p style={{ 
                  fontSize: '1rem', 
                  color: '#9AA0A6', 
                  margin: '0', 
                  lineHeight: '1.6', 
                  position: 'relative', 
                  zIndex: 1 
                }}>
                  {service.description}
                </p>
                
                <motion.span
                  style={{
                    fontSize: '1.2rem',
                    marginTop: 'auto',
                    position: 'relative',
                    zIndex: 1,
                    padding: '0.5rem',
                    borderRadius: '50%',
                    background: expandedCards[service.id] ? `${service.color}22` : 'transparent',
                    color: expandedCards[service.id] ? service.color : '#9AA0A6',
                  }}
                  animate={{ rotate: expandedCards[service.id] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>

                <AnimatePresence>
                  {expandedCards[service.id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ 
                        overflow: 'hidden', 
                        width: '100%', 
                        position: 'relative', 
                        zIndex: 1 
                      }}
                    >
                      <div style={{
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '12px',
                        padding: '1.2rem',
                        marginTop: '0.8rem',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                      }}>
                        <p style={{ 
                          fontSize: '0.9rem', 
                          color: '#c0c0c0', 
                          lineHeight: '1.7', 
                          margin: '0' 
                        }}>
                          {service.hoverText}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  height: '4px',
                  background: service.gradient,
                  transform: expandedCards[service.id] ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  borderRadius: '0 0 24px 24px',
                }}></div>

                <div style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '20px',
                  height: '20px',
                  borderTop: `2px solid ${service.color}33`,
                  borderRight: `2px solid ${service.color}33`,
                  borderRadius: '0 8px 0 0',
                  pointerEvents: 'none',
                }} />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Home;