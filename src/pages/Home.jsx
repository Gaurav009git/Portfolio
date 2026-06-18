// import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import useSound from '../hooks/useSound';

// const Home = () => {
//   const { playHover, playClick } = useSound();
//   const [expandedCards, setExpandedCards] = useState({});
//   const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isClicking, setIsClicking] = useState(false);

//   // Optimize mouse tracking with requestAnimationFrame
//   useEffect(() => {
//     let animationFrame;
//     const handleMouseMove = (e) => {
//       animationFrame = requestAnimationFrame(() => {
//         setCursorPos({ x: e.clientX, y: e.clientY });
//       });
//     };
//     const handleMouseDown = () => setIsClicking(true);
//     const handleMouseUp = () => setIsClicking(false);

//     window.addEventListener('mousemove', handleMouseMove, { passive: true });
//     window.addEventListener('mousedown', handleMouseDown, { passive: true });
//     window.addEventListener('mouseup', handleMouseUp, { passive: true });

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mousedown', handleMouseDown);
//       window.removeEventListener('mouseup', handleMouseUp);
//       if (animationFrame) cancelAnimationFrame(animationFrame);
//     };
//   }, []);

//   const handleCardClick = useCallback((cardId) => {
//     playClick();
//     setExpandedCards(prev => ({
//       ...prev,
//       [cardId]: !prev[cardId]
//     }));
//   }, [playClick]);

//   const handleStatHover = useCallback(() => {
//     playHover();
//   }, [playHover]);

//   const handlePhotoHover = useCallback(() => {
//     playHover();
//   }, [playHover]);

//   const handleSocialClick = useCallback((url) => {
//     playClick();
//     window.open(url, '_blank');
//   }, [playClick]);

//   // Memoize static data
//   const services = useMemo(() => [
//     {
//       id: 'web-design',
//       title: 'Web Design & Development',
//       description: 'Modern, responsive websites.',
//       hoverText: 'I design and develop fast, mobile-friendly websites with clean layouts, ensuring an engaging user experience that helps your brand stand out and attract more visitors.',
//       color: '#4285F4',
//       icon: '🌐',
//       gradient: 'linear-gradient(135deg, #4285F4, #1a73e8)'
//     },
//     {
//       id: 'frontend',
//       title: 'Frontend Development',
//       description: 'Interactive user interfaces.',
//       hoverText: 'Using React and modern frameworks, I build visually appealing, high-performance frontends with smooth animations, fast loading speeds, and responsive designs across all devices.',
//       color: '#EA4335',
//       icon: '⚛️',
//       gradient: 'linear-gradient(135deg, #EA4335, #c5221f)'
//     },
//     {
//       id: 'backend',
//       title: 'Backend Development',
//       description: 'Secure and scalable systems.',
//       hoverText: 'I create reliable backend systems with Node.js and databases that handle complex data efficiently, keeping your applications secure, scalable, and always running smoothly.',
//       color: '#FBBC05',
//       icon: '⚙️',
//       gradient: 'linear-gradient(135deg, #FBBC05, #f9a825)'
//     },
//     {
//       id: 'maintenance',
//       title: 'Website Maintenance',
//       description: 'Performance and updates.',
//       hoverText: 'I continuously improve website performance, enhance security, and update content to maintain top speed, reliability, and user engagement for your digital presence.',
//       color: '#34A853',
//       icon: '🚀',
//       gradient: 'linear-gradient(135deg, #34A853, #1e8e3e)'
//     }
//   ], []);

//   const socialLinks = useMemo(() => [
//     {
//       platform: 'LinkedIn',
//       icon: '💼',
//       url: 'https://www.linkedin.com/in/gaurav-chaudhari009',
//       color: '#0077B5'
//     },
//     {
//       platform: 'GitHub',
//       icon: '💻',
//       url: 'https://github.com/Gaurav009git',
//       color: '#6e5494'
//     },
//     {
//       platform: 'Instagram',
//       icon: '📷',
//       url: 'https://instagram.com/_gaurav.009',
//       color: '#E1306C'
//     }
//   ], []);

//   const stats = useMemo(() => [
//     { number: '05', label: 'Projects Completed', color: '#4285F4', icon: '✅' },
//     { number: '06+', label: 'Months Experience', color: '#EA4335', icon: '📅' },
//     { number: '100%', label: 'Client Satisfaction', color: '#FBBC05', icon: '⭐' },
//     { number: '24/7', label: 'Learning Mindset', color: '#34A853', icon: '🧠' }
//   ], []);

//   // Optimized GoogleText component
//   const GoogleText = useCallback(({ text }) => {
//     const googleColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];
//     return (
//       <span style={{ fontWeight: '800', letterSpacing: '-0.5px', display: 'inline' }}>
//         {text.split('').map((char, index) => (
//           <span 
//             key={index}
//             style={{
//               color: char === ' ' ? 'transparent' : googleColors[index % 4],
//               marginRight: char === ' ' ? '8px' : '0',
//             }}
//           >
//             {char}
//           </span>
//         ))}
//       </span>
//     );
//   }, []);

//   // Generate background shapes only once using useMemo
//   const backgroundShapes = useMemo(() => {
//     const shapes = [];
//     const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];
    
//     for (let i = 0; i < 8; i++) { // Reduced from 15 to 8 for better performance
//       const size = Math.random() * 150 + 50;
//       const color = colors[i % 4]; // Deterministic color assignment
//       const left = (i * 12.5) % 100;
//       const top = (i * 17.3) % 100;
//       const animationDuration = 12 + (i % 5);
//       const animationDelay = i * 0.7;
      
//       shapes.push(
//         <div
//           key={i}
//           className="bg-shape"
//           style={{
//             position: 'absolute',
//             left: `${left}%`,
//             top: `${top}%`,
//             width: `${size}px`,
//             height: `${size}px`,
//             background: color,
//             borderRadius: '50%',
//             opacity: 0.06,
//             filter: 'blur(70px)',
//             animation: `float ${animationDuration}s infinite ease-in-out`,
//             animationDelay: `${animationDelay}s`,
//             willChange: 'transform',
//             transform: 'translateZ(0)',
//             pointerEvents: 'none',
//           }}
//         />
//       );
//     }
//     return shapes;
//   }, []);

//   const cursorColor = isClicking ? '#34A853' : isHovering ? '#FBBC05' : '#4285F4';

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700;800&display=swap');

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         html, body {
//           font-family: 'Google Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
//           background: #0a0a0f;
//           overflow-x: hidden;
//           cursor: none;
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//           backface-visibility: hidden;
//         }

//         a, button, input, textarea, select, [role="button"] {
//           cursor: none;
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px) scale(1) translateZ(0); }
//           50% { transform: translateY(-20px) scale(1.05) translateZ(0); }
//         }

//         @keyframes rotateBorder {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         @keyframes gradientMove {
//           0% { transform: translate(0%, 0%) rotate(0deg); }
//           50% { transform: translate(5%, -5%) rotate(3deg); }
//           100% { transform: translate(0%, 0%) rotate(0deg); }
//         }

//         .bg-shape {
//           will-change: transform;
//         }

//         @media (max-width: 768px) {
//           .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
//           .hero-text { order: 2 !important; text-align: center !important; align-items: center !important; }
//           .hero-photo { order: 1 !important; }
//           .hero-title { font-size: 2.2rem !important; text-align: center !important; }
//           .hero-desc { text-align: center !important; max-width: 100% !important; font-size: 1.1rem !important; }
//           .stats-grid { max-width: 500px !important; margin: 1rem auto 0 !important; }
//           .profile-container { width: 220px !important; height: 220px !important; }
//           .services-grid { grid-template-columns: 1fr !important; max-width: 500px !important; margin: 0 auto !important; }
//           .services-title { font-size: 2rem !important; }
//           .custom-cursor { display: none !important; }
//           html, body { cursor: auto !important; }
//           a, button, input, textarea, select, [role="button"] { cursor: pointer !important; }
//           .bg-shape { display: none !important; }
//         }

//         @media (max-width: 480px) {
//           .container { padding: 1rem !important; }
//           .hero-title { font-size: 1.8rem !important; }
//           .hero-desc { font-size: 1rem !important; }
//           .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 0.8rem !important; }
//           .profile-container { width: 180px !important; height: 180px !important; }
//           .profile-frame { border-radius: 16px !important; }
//           .placeholder-icon { font-size: 3rem !important; }
//           .social-btn { width: 40px !important; height: 40px !important; }
//           .social-icon { font-size: 1.1rem !important; }
//           .service-card { padding: 1.5rem 1rem !important; }
//           .service-icon { font-size: 2.2rem !important; }
//           .service-title-text { font-size: 1.1rem !important; }
//           .services-title { font-size: 1.6rem !important; }
//           .services-subtitle { font-size: 0.9rem !important; }
//         }

//         @media (max-width: 360px) {
//           .profile-container { width: 150px !important; height: 150px !important; }
//           .stats-grid { grid-template-columns: 1fr !important; max-width: 250px !important; }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           *, *::before, *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//           .bg-shape { display: none !important; }
//         }

//         * { -webkit-tap-highlight-color: transparent; }
//       `}</style>

//       {/* Custom Cursor - GPU accelerated */}
//       <div 
//         className="custom-cursor"
//         style={{
//           position: 'fixed',
//           left: cursorPos.x,
//           top: cursorPos.y,
//           width: '14px',
//           height: '14px',
//           background: cursorColor,
//           borderRadius: '50%',
//           pointerEvents: 'none',
//           zIndex: 99999,
//           transform: 'translate(-50%, -50%) translateZ(0)',
//           mixBlendMode: 'difference',
//           boxShadow: `0 0 8px ${cursorColor}`,
//           transition: 'background 0.2s ease, box-shadow 0.2s ease',
//           willChange: 'left, top',
//         }}
//       />

//       {/* Optimized Google Color Background */}
//       <div style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         zIndex: 0,
//         pointerEvents: 'none',
//         overflow: 'hidden',
//       }}>
//         {/* Static dark background */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           background: '#0a0a0f',
//         }} />
        
//         {/* Single optimized gradient layer */}
//         <div style={{
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           background: `
//             radial-gradient(ellipse at 30% 40%, rgba(66, 133, 244, 0.08) 0%, transparent 50%),
//             radial-gradient(ellipse at 70% 60%, rgba(234, 67, 53, 0.08) 0%, transparent 50%),
//             radial-gradient(ellipse at 40% 70%, rgba(251, 188, 5, 0.08) 0%, transparent 50%),
//             radial-gradient(ellipse at 60% 30%, rgba(52, 168, 83, 0.08) 0%, transparent 50%)
//           `,
//           filter: 'blur(60px)',
//           animation: 'gradientMove 20s infinite alternate ease-in-out',
//           willChange: 'transform',
//           transform: 'translateZ(0)',
//         }} />
        
//         {/* Background shapes */}
//         {backgroundShapes}
//       </div>

//       {/* Main Content */}
//       <div className="container" style={{
//         width: '100%',
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '2rem',
//         minHeight: '100vh',
//         position: 'relative',
//         zIndex: 2,
//       }}>
        
//         {/* Hero Section */}
//         <section style={{ 
//           padding: '3rem 0', 
//           minHeight: '85vh', 
//           display: 'flex', 
//           alignItems: 'center' 
//         }}>
//           <div className="hero-grid" style={{
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '4rem',
//             alignItems: 'center',
//             width: '100%',
//           }}>
            
//             {/* Text Content */}
//             <motion.div
//               className="hero-text"
//               style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//             >
//               {/* Badge */}
//               <motion.div
//                 style={{
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   gap: '0.5rem',
//                   background: 'rgba(66, 133, 244, 0.1)',
//                   border: '1px solid rgba(66, 133, 244, 0.3)',
//                   borderRadius: '50px',
//                   padding: '0.5rem 1.2rem',
//                   fontSize: '0.85rem',
//                   color: '#4285F4',
//                   width: 'fit-content',
//                   backdropFilter: 'blur(20px)',
//                 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <span>✨</span> Available for Projects
//               </motion.div>

//               {/* Title */}
//               <h1 className="hero-title" style={{ 
//                 fontSize: '3.8rem', 
//                 fontWeight: '800', 
//                 lineHeight: '1.2', 
//                 margin: '0' 
//               }}>
//                 <GoogleText text="Creative Full-Stack Developer" />
//               </h1>
              
//               {/* Description */}
//               <p className="hero-desc" style={{ 
//                 fontSize: '1.25rem', 
//                 color: '#9AA0A6', 
//                 lineHeight: '1.8', 
//                 margin: '0', 
//                 maxWidth: '520px' 
//               }}>
//                 Crafting seamless, high-performance web solutions with modern technologies and innovative design.
//               </p>

//               {/* Stats Grid */}
//               <div className="stats-grid" style={{ 
//                 display: 'grid', 
//                 gridTemplateColumns: 'repeat(2, 1fr)', 
//                 gap: '1rem', 
//                 marginTop: '1rem' 
//               }}>
//                 {stats.map((stat, index) => (
//                   <motion.div
//                     key={stat.label}
//                     style={{
//                       background: 'rgba(255, 255, 255, 0.02)',
//                       border: '1px solid rgba(255, 255, 255, 0.08)',
//                       borderRadius: '20px',
//                       padding: '1.8rem 1.2rem',
//                       textAlign: 'center',
//                       backdropFilter: 'blur(20px)',
//                       position: 'relative',
//                       overflow: 'hidden',
//                       willChange: 'transform',
//                     }}
//                     onMouseEnter={() => { handleStatHover(); setIsHovering(true); }}
//                     onMouseLeave={() => setIsHovering(false)}
//                     onClick={() => playClick()}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
//                     whileHover={{ 
//                       scale: 1.05, 
//                       y: -8, 
//                       borderColor: stat.color, 
//                       background: 'rgba(255,255,255,0.08)', 
//                       boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 60px ${stat.color}33` 
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <span style={{ 
//                       fontSize: '1.8rem', 
//                       display: 'block', 
//                       marginBottom: '0.5rem' 
//                     }}>
//                       {stat.icon}
//                     </span>
//                     <span style={{ 
//                       display: 'block', 
//                       fontSize: '2.4rem', 
//                       fontWeight: '800', 
//                       marginBottom: '0.3rem', 
//                       color: stat.color 
//                     }}>
//                       {stat.number}
//                     </span>
//                     <span style={{ 
//                       fontSize: '0.8rem', 
//                       color: '#9AA0A6', 
//                       textTransform: 'uppercase', 
//                       letterSpacing: '1.5px', 
//                       fontWeight: '600' 
//                     }}>
//                       {stat.label}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Profile Photo */}
//             <motion.div
//               className="hero-photo"
//               style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
//               initial={{ opacity: 0, scale: 0.7 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
//             >
//               <div 
//                 className="profile-container"
//                 style={{ position: 'relative', width: '340px', height: '340px' }}
//                 onMouseEnter={() => { handlePhotoHover(); setIsHovering(true); }}
//                 onMouseLeave={() => setIsHovering(false)}
//                 onClick={() => playClick()}
//               >
//                 {/* Decorative Border */}
//                 <div style={{
//                   position: 'absolute',
//                   top: '-15px',
//                   left: '-15px',
//                   right: '-15px',
//                   bottom: '-15px',
//                   border: '2px solid rgba(66, 133, 244, 0.15)',
//                   borderRadius: '35px',
//                   animation: 'rotateBorder 30s linear infinite',
//                 }} />
                
//                 {/* Photo Frame */}
//                 <div className="profile-frame" style={{
//                   width: '100%',
//                   height: '100%',
//                   borderRadius: '28px',
//                   overflow: 'hidden',
//                   border: '3px solid rgba(255, 255, 255, 0.1)',
//                   background: '#1a1a1a',
//                   position: 'relative',
//                   zIndex: '3',
//                   boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5)',
//                 }}>
//                   <img
//                     src="/images/profile-photo.jpg"
//                     alt="Gaurav Chaudhari"
//                     loading="lazy"
//                     style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
//                     onError={(e) => {
//                       e.target.style.display = 'none';
//                       e.target.nextSibling.style.display = 'flex';
//                     }}
//                   />
//                   <div style={{
//                     display: 'none',
//                     width: '100%',
//                     height: '100%',
//                     background: 'linear-gradient(135deg, #4285F4, #34A853)',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     position: 'absolute',
//                     top: '0',
//                     left: '0',
//                   }}>
//                     <span className="placeholder-icon" style={{ fontSize: '5rem' }}>👨‍💻</span>
//                   </div>
//                 </div>

//                 {/* Glow Effect */}
//                 <div style={{
//                   position: 'absolute',
//                   top: '-20px',
//                   left: '-20px',
//                   right: '-20px',
//                   bottom: '-20px',
//                   background: 'radial-gradient(circle, rgba(66, 133, 244, 0.15), transparent 70%)',
//                   borderRadius: '40px',
//                   zIndex: '1',
//                   filter: 'blur(25px)',
//                 }}></div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <motion.section
//           style={{ padding: '4rem 0 5rem', width: '100%' }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           {/* Section Header */}
//           <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
//             <motion.div
//               style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: '0.5rem',
//                 background: 'rgba(66, 133, 244, 0.1)',
//                 border: '1px solid rgba(66, 133, 244, 0.3)',
//                 borderRadius: '50px',
//                 padding: '0.5rem 1.5rem',
//                 fontSize: '0.85rem',
//                 color: '#4285F4',
//                 marginBottom: '1.5rem',
//                 backdropFilter: 'blur(20px)',
//               }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <span>🚀</span> What I Offer
//             </motion.div>

//             <h2 className="services-title" style={{ 
//               fontSize: '3rem', 
//               fontWeight: '800', 
//               margin: '0 0 1rem 0' 
//             }}>
//               <GoogleText text="My Services" />
//             </h2>
            
//             <p className="services-subtitle" style={{ 
//               fontSize: '1.2rem', 
//               color: '#9AA0A6', 
//               fontStyle: 'italic', 
//               margin: '0 0 2.5rem 0' 
//             }}>
//               "Turning Creativity into Powerful Digital Solutions"
//             </p>

//             {/* Social Links */}
//             <div style={{ 
//               display: 'flex', 
//               justifyContent: 'center', 
//               gap: '1.5rem', 
//               marginTop: '1.5rem', 
//               flexWrap: 'wrap' 
//             }}>
//               {socialLinks.map((social, index) => (
//                 <motion.button
//                   key={social.platform}
//                   className="social-btn"
//                   style={{
//                     width: '55px',
//                     height: '55px',
//                     borderRadius: '50%',
//                     border: `2px solid ${social.color}`,
//                     background: 'rgba(30, 30, 30, 0.8)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     padding: '0',
//                     outline: 'none',
//                     backdropFilter: 'blur(10px)',
//                   }}
//                   onMouseEnter={() => { playHover(); setIsHovering(true); }}
//                   onMouseLeave={() => setIsHovering(false)}
//                   onClick={() => handleSocialClick(social.url)}
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.4, delay: 0.6 + index * 0.1, type: "spring" }}
//                   whileHover={{ 
//                     scale: 1.2, 
//                     y: -5, 
//                     background: social.color, 
//                     boxShadow: `0 15px 35px rgba(0,0,0,0.4), 0 0 50px ${social.color}66` 
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <span className="social-icon" style={{ fontSize: '1.5rem' }}>
//                     {social.icon}
//                   </span>
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* Services Grid */}
//           <div className="services-grid" style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//             gap: '2.5rem',
//             width: '100%',
//           }}>
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.id}
//                 className="service-card"
//                 style={{
//                   background: expandedCards[service.id] 
//                     ? 'linear-gradient(145deg, #1e1e28, #2a2a35)' 
//                     : 'linear-gradient(145deg, rgba(26, 26, 35, 0.9), rgba(34, 34, 44, 0.9))',
//                   border: expandedCards[service.id] 
//                     ? `1px solid ${service.color}` 
//                     : '1px solid rgba(255, 255, 255, 0.08)',
//                   borderRadius: '24px',
//                   padding: '2.5rem 2rem',
//                   position: 'relative',
//                   overflow: 'hidden',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   gap: '1rem',
//                   textAlign: 'center',
//                   minHeight: '280px',
//                   backdropFilter: 'blur(20px)',
//                   cursor: 'pointer',
//                   boxShadow: expandedCards[service.id]
//                     ? `0 20px 50px rgba(0,0,0,0.4), 0 0 60px ${service.color}33`
//                     : 'none',
//                   willChange: 'transform',
//                 }}
//                 onMouseEnter={() => { playHover(); setIsHovering(true); }}
//                 onMouseLeave={() => setIsHovering(false)}
//                 onClick={() => handleCardClick(service.id)}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: "spring" }}
//                 whileHover={{ 
//                   y: -10, 
//                   borderColor: service.color, 
//                   boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 80px ${service.color}33` 
//                 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {/* Card Background Glow */}
//                 <div style={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   width: '100%',
//                   height: '100%',
//                   background: `radial-gradient(circle at 50% 0%, ${service.color}10, transparent 70%)`,
//                   pointerEvents: 'none',
//                 }} />

//                 {/* Service Icon */}
//                 <span className="service-icon" style={{ 
//                   fontSize: '3.5rem', 
//                   position: 'relative', 
//                   zIndex: 1,
//                   filter: `drop-shadow(0 0 15px ${service.color}44)`,
//                 }}>
//                   {service.icon}
//                 </span>
                
//                 {/* Service Title */}
//                 <h3 className="service-title-text" style={{
//                   fontSize: '1.5rem',
//                   fontWeight: '700',
//                   margin: '0',
//                   position: 'relative',
//                   zIndex: 1,
//                   background: service.gradient,
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                 }}>
//                   {service.title}
//                 </h3>
                
//                 {/* Service Description */}
//                 <p style={{ 
//                   fontSize: '1rem', 
//                   color: '#9AA0A6', 
//                   margin: '0', 
//                   lineHeight: '1.6', 
//                   position: 'relative', 
//                   zIndex: 1 
//                 }}>
//                   {service.description}
//                 </p>
                
//                 {/* Expand Arrow */}
//                 <motion.span
//                   style={{
//                     fontSize: '1.2rem',
//                     marginTop: 'auto',
//                     position: 'relative',
//                     zIndex: 1,
//                     padding: '0.5rem',
//                     borderRadius: '50%',
//                     background: expandedCards[service.id] ? `${service.color}22` : 'transparent',
//                     color: expandedCards[service.id] ? service.color : '#9AA0A6',
//                   }}
//                   animate={{ rotate: expandedCards[service.id] ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   ▼
//                 </motion.span>

//                 {/* Expandable Content */}
//                 <AnimatePresence>
//                   {expandedCards[service.id] && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3, ease: 'easeInOut' }}
//                       style={{ 
//                         overflow: 'hidden', 
//                         width: '100%', 
//                         position: 'relative', 
//                         zIndex: 1 
//                       }}
//                     >
//                       <div style={{
//                         background: 'rgba(255, 255, 255, 0.03)',
//                         borderRadius: '12px',
//                         padding: '1.2rem',
//                         marginTop: '0.8rem',
//                         border: '1px solid rgba(255, 255, 255, 0.06)',
//                       }}>
//                         <p style={{ 
//                           fontSize: '0.9rem', 
//                           color: '#c0c0c0', 
//                           lineHeight: '1.7', 
//                           margin: '0' 
//                         }}>
//                           {service.hoverText}
//                         </p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
                
//                 {/* Bottom Accent Bar */}
//                 <div style={{
//                   position: 'absolute',
//                   bottom: '0',
//                   left: '0',
//                   width: '100%',
//                   height: '4px',
//                   background: service.gradient,
//                   transform: expandedCards[service.id] ? 'scaleX(1)' : 'scaleX(0)',
//                   transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//                   borderRadius: '0 0 24px 24px',
//                 }}></div>

//                 {/* Corner Decoration */}
//                 <div style={{
//                   position: 'absolute',
//                   top: '10px',
//                   right: '10px',
//                   width: '20px',
//                   height: '20px',
//                   borderTop: `2px solid ${service.color}33`,
//                   borderRight: `2px solid ${service.color}33`,
//                   borderRadius: '0 8px 0 0',
//                   pointerEvents: 'none',
//                 }} />
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>
//       </div>
//     </>
//   );
// };

// export default Home;


































// import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import useSound from '../hooks/useSound';

// const Home = () => {
//   const { playHover, playClick } = useSound();
//   const [expandedCards, setExpandedCards] = useState({});
//   const [isHovering, setIsHovering] = useState(false);
//   const [isClicking, setIsClicking] = useState(false);
  
//   // Use refs for cursor position to avoid re-renders
//   const cursorRef = useRef(null);
//   const cursorPosRef = useRef({ x: -100, y: -100 });
//   const rafRef = useRef(null);
//   const isHoveringRef = useRef(false);
//   const isClickingRef = useRef(false);

//   // Optimized cursor with direct DOM manipulation
//   useEffect(() => {
//     const cursor = cursorRef.current;
//     if (!cursor) return;

//     const updateCursorPosition = (e) => {
//       cursorPosRef.current = { x: e.clientX, y: e.clientY };
      
//       if (!rafRef.current) {
//         rafRef.current = requestAnimationFrame(() => {
//           if (cursor) {
//             cursor.style.transform = `translate3d(${cursorPosRef.current.x}px, ${cursorPosRef.current.y}px, 0) translate(-50%, -50%)`;
//           }
//           rafRef.current = null;
//         });
//       }
//     };

//     const handleMouseDown = () => {
//       isClickingRef.current = true;
//       setIsClicking(true);
//       if (cursor) {
//         cursor.style.transform = cursor.style.transform.replace('scale(1)', 'scale(0.7)');
//         cursor.style.background = '#34A853';
//         cursor.style.boxShadow = '0 0 20px #34A853';
//       }
//     };

//     const handleMouseUp = () => {
//       isClickingRef.current = false;
//       setIsClicking(false);
//       if (cursor) {
//         cursor.style.transform = cursor.style.transform.replace('scale(0.7)', 'scale(1)');
        
//         if (isHoveringRef.current) {
//           cursor.style.background = '#FBBC05';
//           cursor.style.boxShadow = '0 0 20px #FBBC05';
//         } else {
//           cursor.style.background = '#4285F4';
//           cursor.style.boxShadow = '0 0 20px #4285F4';
//         }
//       }
//     };

//     // Throttled mouse move for performance
//     let lastMoveTime = 0;
//     const handleMouseMove = (e) => {
//       const now = Date.now();
//       if (now - lastMoveTime < 16) { // ~60fps
//         updateCursorPosition(e);
//         lastMoveTime = now;
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove, { passive: true });
//     window.addEventListener('mousedown', handleMouseDown, { passive: true });
//     window.addEventListener('mouseup', handleMouseUp, { passive: true });

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mousedown', handleMouseDown);
//       window.removeEventListener('mouseup', handleMouseUp);
//       if (rafRef.current) {
//         cancelAnimationFrame(rafRef.current);
//       }
//     };
//   }, []);

//   const handleCardClick = useCallback((cardId) => {
//     playClick();
//     setExpandedCards(prev => ({
//       ...prev,
//       [cardId]: !prev[cardId]
//     }));
//   }, [playClick]);

//   const handleHoverStart = useCallback((color = '#FBBC05') => {
//     playHover();
//     isHoveringRef.current = true;
//     setIsHovering(true);
//     if (cursorRef.current) {
//       cursorRef.current.style.transform = cursorRef.current.style.transform.replace('scale(1)', 'scale(1.5)');
//       cursorRef.current.style.background = color;
//       cursorRef.current.style.boxShadow = `0 0 20px ${color}`;
//       cursorRef.current.style.mixBlendMode = 'normal';
//       cursorRef.current.style.opacity = '0.8';
//     }
//   }, [playHover]);

//   const handleHoverEnd = useCallback(() => {
//     isHoveringRef.current = false;
//     setIsHovering(false);
//     if (cursorRef.current) {
//       cursorRef.current.style.transform = cursorRef.current.style.transform.replace('scale(1.5)', 'scale(1)');
      
//       if (isClickingRef.current) {
//         cursorRef.current.style.background = '#34A853';
//         cursorRef.current.style.boxShadow = '0 0 20px #34A853';
//       } else {
//         cursorRef.current.style.background = '#4285F4';
//         cursorRef.current.style.boxShadow = '0 0 20px #4285F4';
//       }
      
//       cursorRef.current.style.mixBlendMode = 'difference';
//       cursorRef.current.style.opacity = '1';
//     }
//   }, []);

//   const handleSocialClick = useCallback((url) => {
//     playClick();
//     window.open(url, '_blank');
//   }, [playClick]);

//   // Memoize static data
//   const services = useMemo(() => [
//     {
//       id: 'web-design',
//       title: 'Web Design & Development',
//       description: 'Modern, responsive websites.',
//       hoverText: 'I design and develop fast, mobile-friendly websites with clean layouts, ensuring an engaging user experience that helps your brand stand out and attract more visitors.',
//       color: '#4285F4',
//       icon: '🌐',
//       gradient: 'linear-gradient(135deg, #4285F4, #1a73e8)'
//     },
//     {
//       id: 'frontend',
//       title: 'Frontend Development',
//       description: 'Interactive user interfaces.',
//       hoverText: 'Using React and modern frameworks, I build visually appealing, high-performance frontends with smooth animations, fast loading speeds, and responsive designs across all devices.',
//       color: '#EA4335',
//       icon: '⚛️',
//       gradient: 'linear-gradient(135deg, #EA4335, #c5221f)'
//     },
//     {
//       id: 'backend',
//       title: 'Backend Development',
//       description: 'Secure and scalable systems.',
//       hoverText: 'I create reliable backend systems with Node.js and databases that handle complex data efficiently, keeping your applications secure, scalable, and always running smoothly.',
//       color: '#FBBC05',
//       icon: '⚙️',
//       gradient: 'linear-gradient(135deg, #FBBC05, #f9a825)'
//     },
//     {
//       id: 'maintenance',
//       title: 'Website Maintenance',
//       description: 'Performance and updates.',
//       hoverText: 'I continuously improve website performance, enhance security, and update content to maintain top speed, reliability, and user engagement for your digital presence.',
//       color: '#34A853',
//       icon: '🚀',
//       gradient: 'linear-gradient(135deg, #34A853, #1e8e3e)'
//     }
//   ], []);

//   const socialLinks = useMemo(() => [
//     {
//       platform: 'LinkedIn',
//       icon: '💼',
//       url: 'https://www.linkedin.com/in/gaurav-chaudhari009',
//       color: '#0077B5'
//     },
//     {
//       platform: 'GitHub',
//       icon: '💻',
//       url: 'https://github.com/Gaurav009git',
//       color: '#6e5494'
//     },
//     {
//       platform: 'Instagram',
//       icon: '📷',
//       url: 'https://instagram.com/_gaurav.009',
//       color: '#E1306C'
//     }
//   ], []);

//   const stats = useMemo(() => [
//     { number: '07', label: 'Projects Completed', color: '#4285F4', icon: '✅' },
//     { number: '1.5+', label: 'Years Experience', color: '#EA4335', icon: '📅' },
//     { number: '100%', label: 'Client Satisfaction', color: '#FBBC05', icon: '⭐' },
//     { number: '24/7', label: 'Learning Mindset', color: '#34A853', icon: '🧠' }
//   ], []);

//   // Optimized GoogleText component
//   const GoogleText = useCallback(({ text }) => {
//     const googleColors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];
//     return (
//       <span style={{ fontWeight: '800', letterSpacing: '-0.5px', display: 'inline' }}>
//         {text.split('').map((char, index) => (
//           <span 
//             key={index}
//             style={{
//               color: char === ' ' ? 'transparent' : googleColors[index % 4],
//               marginRight: char === ' ' ? '8px' : '0',
//             }}
//           >
//             {char}
//           </span>
//         ))}
//       </span>
//     );
//   }, []);

//   // Generate background shapes only once
//   const backgroundShapes = useMemo(() => {
//     const shapes = [];
//     const colors = ['#4285F4', '#EA4335', '#FBBC05', '#34A853'];
    
//     for (let i = 0; i < 8; i++) {
//       const size = Math.random() * 150 + 50;
//       const color = colors[i % 4];
//       const left = (i * 12.5) % 100;
//       const top = (i * 17.3) % 100;
//       const animationDuration = 12 + (i % 5);
//       const animationDelay = i * 0.7;
      
//       shapes.push(
//         <div
//           key={i}
//           className="bg-shape"
//           style={{
//             position: 'absolute',
//             left: `${left}%`,
//             top: `${top}%`,
//             width: `${size}px`,
//             height: `${size}px`,
//             background: color,
//             borderRadius: '50%',
//             opacity: 0.06,
//             filter: 'blur(70px)',
//             animation: `float ${animationDuration}s infinite ease-in-out`,
//             animationDelay: `${animationDelay}s`,
//             willChange: 'transform',
//             transform: 'translate3d(0, 0, 0)',
//             pointerEvents: 'none',
//           }}
//         />
//       );
//     }
//     return shapes;
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700;800&display=swap');

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         html, body {
//           font-family: 'Google Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
//           background: #0a0a0f;
//           overflow-x: hidden;
//           cursor: none;
//           -webkit-font-smoothing: antialiased;
//           -moz-osx-font-smoothing: grayscale;
//         }

//         a, button, input, textarea, select, [role="button"] {
//           cursor: none !important;
//         }

//         @keyframes float {
//           0%, 100% { transform: translate3d(0, 0px, 0) scale(1); }
//           50% { transform: translate3d(0, -20px, 0) scale(1.05); }
//         }

//         @keyframes rotateBorder {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         @keyframes gradientMove {
//           0% { transform: translate3d(0%, 0%, 0) rotate(0deg); }
//           50% { transform: translate3d(5%, -5%, 0) rotate(3deg); }
//           100% { transform: translate3d(0%, 0%, 0) rotate(0deg); }
//         }

//         .custom-cursor {
//           will-change: transform;
//           backface-visibility: hidden;
//           transition: width 0.2s ease, height 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
//         }

//         @media (max-width: 768px) {
//           .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
//           .hero-text { order: 2 !important; text-align: center !important; align-items: center !important; }
//           .hero-photo { order: 1 !important; }
//           .hero-title { font-size: 2.2rem !important; text-align: center !important; }
//           .hero-desc { text-align: center !important; max-width: 100% !important; font-size: 1.1rem !important; }
//           .stats-grid { max-width: 500px !important; margin: 1rem auto 0 !important; }
//           .profile-container { width: 220px !important; height: 220px !important; }
//           .services-grid { grid-template-columns: 1fr !important; max-width: 500px !important; margin: 0 auto !important; }
//           .services-title { font-size: 2rem !important; }
//           .custom-cursor { display: none !important; }
//           html, body { cursor: auto !important; }
//           a, button, input, textarea, select, [role="button"] { cursor: pointer !important; }
//           .bg-shape { display: none !important; }
//         }

//         @media (max-width: 480px) {
//           .container { padding: 1rem !important; }
//           .hero-title { font-size: 1.8rem !important; }
//           .hero-desc { font-size: 1rem !important; }
//           .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 0.8rem !important; }
//           .profile-container { width: 180px !important; height: 180px !important; }
//           .profile-frame { border-radius: 16px !important; }
//           .placeholder-icon { font-size: 3rem !important; }
//           .social-btn { width: 40px !important; height: 40px !important; }
//           .social-icon { font-size: 1.1rem !important; }
//           .service-card { padding: 1.5rem 1rem !important; }
//           .service-icon { font-size: 2.2rem !important; }
//           .service-title-text { font-size: 1.1rem !important; }
//           .services-title { font-size: 1.6rem !important; }
//           .services-subtitle { font-size: 0.9rem !important; }
//         }

//         @media (max-width: 360px) {
//           .profile-container { width: 150px !important; height: 150px !important; }
//           .stats-grid { grid-template-columns: 1fr !important; max-width: 250px !important; }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           *, *::before, *::after {
//             animation-duration: 0.01ms !important;
//             animation-iteration-count: 1 !important;
//             transition-duration: 0.01ms !important;
//           }
//           .bg-shape { display: none !important; }
//           .custom-cursor { display: none !important; }
//         }

//         * { -webkit-tap-highlight-color: transparent; }
//       `}</style>

//       {/* Optimized Custom Cursor with direct DOM manipulation */}
//       <div 
//         ref={cursorRef}
//         className="custom-cursor"
//         style={{
//           position: 'fixed',
//           left: '0',
//           top: '0',
//           width: '14px',
//           height: '14px',
//           background: '#4285F4',
//           borderRadius: '50%',
//           pointerEvents: 'none',
//           zIndex: 99999,
//           mixBlendMode: 'difference',
//           boxShadow: '0 0 20px #4285F4',
//           willChange: 'transform',
//           transform: 'translate3d(-100px, -100px, 0)',
//           backfaceVisibility: 'hidden',
//           perspective: '1000px',
//         }}
//       />

//       {/* Background */}
//       <div style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '100%',
//         height: '100%',
//         zIndex: 0,
//         pointerEvents: 'none',
//         overflow: 'hidden',
//       }}>
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           background: '#0a0a0f',
//         }} />
        
//         <div style={{
//           position: 'absolute',
//           width: '100%',
//           height: '100%',
//           background: `
//             radial-gradient(ellipse at 30% 40%, rgba(66, 133, 244, 0.08) 0%, transparent 50%),
//             radial-gradient(ellipse at 70% 60%, rgba(234, 67, 53, 0.08) 0%, transparent 50%),
//             radial-gradient(ellipse at 40% 70%, rgba(251, 188, 5, 0.08) 0%, transparent 50%),
//             radial-gradient(ellipse at 60% 30%, rgba(52, 168, 83, 0.08) 0%, transparent 50%)
//           `,
//           filter: 'blur(60px)',
//           animation: 'gradientMove 20s infinite alternate ease-in-out',
//           willChange: 'transform',
//           transform: 'translate3d(0, 0, 0)',
//         }} />
        
//         {backgroundShapes}
//       </div>

//       {/* Main Content */}
//       <div className="container" style={{
//         width: '100%',
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '2rem',
//         minHeight: '100vh',
//         position: 'relative',
//         zIndex: 2,
//       }}>
        
//         {/* Hero Section */}
//         <section style={{ 
//           padding: '3rem 0', 
//           minHeight: '85vh', 
//           display: 'flex', 
//           alignItems: 'center' 
//         }}>
//           <div className="hero-grid" style={{
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '4rem',
//             alignItems: 'center',
//             width: '100%',
//           }}>
            
//             {/* Text Content */}
//             <motion.div
//               className="hero-text"
//               style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//             >
//               {/* Badge */}
//               <motion.div
//                 style={{
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   gap: '0.5rem',
//                   background: 'rgba(66, 133, 244, 0.1)',
//                   border: '1px solid rgba(66, 133, 244, 0.3)',
//                   borderRadius: '50px',
//                   padding: '0.5rem 1.2rem',
//                   fontSize: '0.85rem',
//                   color: '#4285F4',
//                   width: 'fit-content',
//                   backdropFilter: 'blur(20px)',
//                 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <span>✨</span> Available for Projects
//               </motion.div>

//               {/* Title */}
//               <h1 className="hero-title" style={{ 
//                 fontSize: '3.8rem', 
//                 fontWeight: '800', 
//                 lineHeight: '1.2', 
//                 margin: '0' 
//               }}>
//                 <GoogleText text="Creative Full-Stack Developer" />
//               </h1>
              
//               {/* Description */}
//               <p className="hero-desc" style={{ 
//                 fontSize: '1.25rem', 
//                 color: '#9AA0A6', 
//                 lineHeight: '1.8', 
//                 margin: '0', 
//                 maxWidth: '520px' 
//               }}>
//                 Crafting seamless, high-performance web solutions with modern technologies and innovative design.
//               </p>

//               {/* Stats Grid */}
//               <div className="stats-grid" style={{ 
//                 display: 'grid', 
//                 gridTemplateColumns: 'repeat(2, 1fr)', 
//                 gap: '1rem', 
//                 marginTop: '1rem' 
//               }}>
//                 {stats.map((stat, index) => (
//                   <motion.div
//                     key={stat.label}
//                     style={{
//                       background: 'rgba(255, 255, 255, 0.02)',
//                       border: '1px solid rgba(255, 255, 255, 0.08)',
//                       borderRadius: '20px',
//                       padding: '1.8rem 1.2rem',
//                       textAlign: 'center',
//                       backdropFilter: 'blur(20px)',
//                       position: 'relative',
//                       overflow: 'hidden',
//                       willChange: 'transform',
//                     }}
//                     onMouseEnter={() => handleHoverStart(stat.color)}
//                     onMouseLeave={handleHoverEnd}
//                     onClick={() => playClick()}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
//                     whileHover={{ 
//                       scale: 1.05, 
//                       y: -8, 
//                       borderColor: stat.color, 
//                       background: 'rgba(255,255,255,0.08)', 
//                       boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 60px ${stat.color}33` 
//                     }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <span style={{ 
//                       fontSize: '1.8rem', 
//                       display: 'block', 
//                       marginBottom: '0.5rem' 
//                     }}>
//                       {stat.icon}
//                     </span>
//                     <span style={{ 
//                       display: 'block', 
//                       fontSize: '2.4rem', 
//                       fontWeight: '800', 
//                       marginBottom: '0.3rem', 
//                       color: stat.color 
//                     }}>
//                       {stat.number}
//                     </span>
//                     <span style={{ 
//                       fontSize: '0.8rem', 
//                       color: '#9AA0A6', 
//                       textTransform: 'uppercase', 
//                       letterSpacing: '1.5px', 
//                       fontWeight: '600' 
//                     }}>
//                       {stat.label}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Profile Photo */}
//             <motion.div
//               className="hero-photo"
//               style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
//               initial={{ opacity: 0, scale: 0.7 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
//             >
//               <div 
//                 className="profile-container"
//                 style={{ position: 'relative', width: '340px', height: '340px' }}
//                 onMouseEnter={() => handleHoverStart('#4285F4')}
//                 onMouseLeave={handleHoverEnd}
//                 onClick={() => playClick()}
//               >
//                 {/* Decorative Border */}
//                 <div style={{
//                   position: 'absolute',
//                   top: '-15px',
//                   left: '-15px',
//                   right: '-15px',
//                   bottom: '-15px',
//                   border: '2px solid rgba(66, 133, 244, 0.15)',
//                   borderRadius: '35px',
//                   animation: 'rotateBorder 30s linear infinite',
//                 }} />
                
//                 {/* Photo Frame */}
//                 <div className="profile-frame" style={{
//                   width: '100%',
//                   height: '100%',
//                   borderRadius: '28px',
//                   overflow: 'hidden',
//                   border: '3px solid rgba(255, 255, 255, 0.1)',
//                   background: '#1a1a1a',
//                   position: 'relative',
//                   zIndex: '3',
//                   boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5)',
//                 }}>
//                   <img
//                     src="/images/profile-photo.jpg"
//                     alt="Gaurav Chaudhari"
//                     loading="lazy"
//                     style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
//                     onError={(e) => {
//                       e.target.style.display = 'none';
//                       e.target.nextSibling.style.display = 'flex';
//                     }}
//                   />
//                   <div style={{
//                     display: 'none',
//                     width: '100%',
//                     height: '100%',
//                     background: 'linear-gradient(135deg, #4285F4, #34A853)',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     position: 'absolute',
//                     top: '0',
//                     left: '0',
//                   }}>
//                     <span className="placeholder-icon" style={{ fontSize: '5rem' }}>👨‍💻</span>
//                   </div>
//                 </div>

//                 {/* Glow Effect */}
//                 <div style={{
//                   position: 'absolute',
//                   top: '-20px',
//                   left: '-20px',
//                   right: '-20px',
//                   bottom: '-20px',
//                   background: 'radial-gradient(circle, rgba(66, 133, 244, 0.15), transparent 70%)',
//                   borderRadius: '40px',
//                   zIndex: '1',
//                   filter: 'blur(25px)',
//                 }}></div>
//               </div>
//             </motion.div>
//           </div>
//         </section>

//         {/* Services Section */}
//         <motion.section
//           style={{ padding: '4rem 0 5rem', width: '100%' }}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           {/* Section Header */}
//           <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
//             <motion.div
//               style={{
//                 display: 'inline-flex',
//                 alignItems: 'center',
//                 gap: '0.5rem',
//                 background: 'rgba(66, 133, 244, 0.1)',
//                 border: '1px solid rgba(66, 133, 244, 0.3)',
//                 borderRadius: '50px',
//                 padding: '0.5rem 1.5rem',
//                 fontSize: '0.85rem',
//                 color: '#4285F4',
//                 marginBottom: '1.5rem',
//                 backdropFilter: 'blur(20px)',
//               }}
//               whileHover={{ scale: 1.05 }}
//             >
//               <span>🚀</span> What I Offer
//             </motion.div>

//             <h2 className="services-title" style={{ 
//               fontSize: '3rem', 
//               fontWeight: '800', 
//               margin: '0 0 1rem 0' 
//             }}>
//               <GoogleText text="My Services" />
//             </h2>
            
//             <p className="services-subtitle" style={{ 
//               fontSize: '1.2rem', 
//               color: '#9AA0A6', 
//               fontStyle: 'italic', 
//               margin: '0 0 2.5rem 0' 
//             }}>
//               "Turning Creativity into Powerful Digital Solutions"
//             </p>

//             {/* Social Links */}
//             <div style={{ 
//               display: 'flex', 
//               justifyContent: 'center', 
//               gap: '1.5rem', 
//               marginTop: '1.5rem', 
//               flexWrap: 'wrap' 
//             }}>
//               {socialLinks.map((social, index) => (
//                 <motion.button
//                   key={social.platform}
//                   className="social-btn"
//                   style={{
//                     width: '55px',
//                     height: '55px',
//                     borderRadius: '50%',
//                     border: `2px solid ${social.color}`,
//                     background: 'rgba(30, 30, 30, 0.8)',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     padding: '0',
//                     outline: 'none',
//                     backdropFilter: 'blur(10px)',
//                   }}
//                   onMouseEnter={() => handleHoverStart(social.color)}
//                   onMouseLeave={handleHoverEnd}
//                   onClick={() => handleSocialClick(social.url)}
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.4, delay: 0.6 + index * 0.1, type: "spring" }}
//                   whileHover={{ 
//                     scale: 1.2, 
//                     y: -5, 
//                     background: social.color, 
//                     boxShadow: `0 15px 35px rgba(0,0,0,0.4), 0 0 50px ${social.color}66` 
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                 >
//                   <span className="social-icon" style={{ fontSize: '1.5rem' }}>
//                     {social.icon}
//                   </span>
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* Services Grid */}
//           <div className="services-grid" style={{
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//             gap: '2.5rem',
//             width: '100%',
//           }}>
//             {services.map((service, index) => (
//               <motion.div
//                 key={service.id}
//                 className="service-card"
//                 style={{
//                   background: expandedCards[service.id] 
//                     ? 'linear-gradient(145deg, #1e1e28, #2a2a35)' 
//                     : 'linear-gradient(145deg, rgba(26, 26, 35, 0.9), rgba(34, 34, 44, 0.9))',
//                   border: expandedCards[service.id] 
//                     ? `1px solid ${service.color}` 
//                     : '1px solid rgba(255, 255, 255, 0.08)',
//                   borderRadius: '24px',
//                   padding: '2.5rem 2rem',
//                   position: 'relative',
//                   overflow: 'hidden',
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                   gap: '1rem',
//                   textAlign: 'center',
//                   minHeight: '280px',
//                   backdropFilter: 'blur(20px)',
//                   cursor: 'pointer',
//                   boxShadow: expandedCards[service.id]
//                     ? `0 20px 50px rgba(0,0,0,0.4), 0 0 60px ${service.color}33`
//                     : 'none',
//                   willChange: 'transform',
//                 }}
//                 onMouseEnter={() => handleHoverStart(service.color)}
//                 onMouseLeave={handleHoverEnd}
//                 onClick={() => handleCardClick(service.id)}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 0.8 + index * 0.1, type: "spring" }}
//                 whileHover={{ 
//                   y: -10, 
//                   borderColor: service.color, 
//                   boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 80px ${service.color}33` 
//                 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 {/* Card Background Glow */}
//                 <div style={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   width: '100%',
//                   height: '100%',
//                   background: `radial-gradient(circle at 50% 0%, ${service.color}10, transparent 70%)`,
//                   pointerEvents: 'none',
//                 }} />

//                 {/* Service Icon */}
//                 <span className="service-icon" style={{ 
//                   fontSize: '3.5rem', 
//                   position: 'relative', 
//                   zIndex: 1,
//                   filter: `drop-shadow(0 0 15px ${service.color}44)`,
//                 }}>
//                   {service.icon}
//                 </span>
                
//                 {/* Service Title */}
//                 <h3 className="service-title-text" style={{
//                   fontSize: '1.5rem',
//                   fontWeight: '700',
//                   margin: '0',
//                   position: 'relative',
//                   zIndex: 1,
//                   background: service.gradient,
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   backgroundClip: 'text',
//                 }}>
//                   {service.title}
//                 </h3>
                
//                 {/* Service Description */}
//                 <p style={{ 
//                   fontSize: '1rem', 
//                   color: '#9AA0A6', 
//                   margin: '0', 
//                   lineHeight: '1.6', 
//                   position: 'relative', 
//                   zIndex: 1 
//                 }}>
//                   {service.description}
//                 </p>
                
//                 {/* Expand Arrow */}
//                 <motion.span
//                   style={{
//                     fontSize: '1.2rem',
//                     marginTop: 'auto',
//                     position: 'relative',
//                     zIndex: 1,
//                     padding: '0.5rem',
//                     borderRadius: '50%',
//                     background: expandedCards[service.id] ? `${service.color}22` : 'transparent',
//                     color: expandedCards[service.id] ? service.color : '#9AA0A6',
//                   }}
//                   animate={{ rotate: expandedCards[service.id] ? 180 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   ▼
//                 </motion.span>

//                 {/* Expandable Content */}
//                 <AnimatePresence>
//                   {expandedCards[service.id] && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: 'auto' }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3, ease: 'easeInOut' }}
//                       style={{ 
//                         overflow: 'hidden', 
//                         width: '100%', 
//                         position: 'relative', 
//                         zIndex: 1 
//                       }}
//                     >
//                       <div style={{
//                         background: 'rgba(255, 255, 255, 0.03)',
//                         borderRadius: '12px',
//                         padding: '1.2rem',
//                         marginTop: '0.8rem',
//                         border: '1px solid rgba(255, 255, 255, 0.06)',
//                       }}>
//                         <p style={{ 
//                           fontSize: '0.9rem', 
//                           color: '#c0c0c0', 
//                           lineHeight: '1.7', 
//                           margin: '0' 
//                         }}>
//                           {service.hoverText}
//                         </p>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
                
//                 {/* Bottom Accent Bar */}
//                 <div style={{
//                   position: 'absolute',
//                   bottom: '0',
//                   left: '0',
//                   width: '100%',
//                   height: '4px',
//                   background: service.gradient,
//                   transform: expandedCards[service.id] ? 'scaleX(1)' : 'scaleX(0)',
//                   transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
//                   borderRadius: '0 0 24px 24px',
//                 }}></div>

//                 {/* Corner Decoration */}
//                 <div style={{
//                   position: 'absolute',
//                   top: '10px',
//                   right: '10px',
//                   width: '20px',
//                   height: '20px',
//                   borderTop: `2px solid ${service.color}33`,
//                   borderRight: `2px solid ${service.color}33`,
//                   borderRadius: '0 8px 0 0',
//                   pointerEvents: 'none',
//                 }} />
//               </motion.div>
//             ))}
//           </div>
//         </motion.section>
//       </div>
//     </>
//   );
// };

// export default Home;































import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from '../hooks/useSound';
const profilePhoto = "/images/Profile-photo.jpg";
const Home = () => {
  const { playHover, playClick } = useSound();
  const [expandedCards, setExpandedCards] = useState({});
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  // Use refs for cursor position to avoid re-renders
  const cursorRef = useRef(null);
  const cursorPosRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);
  const isHoveringRef = useRef(false);
  const isClickingRef = useRef(false);

  // Optimized cursor with direct DOM manipulation
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const updateCursorPosition = (e) => {
      cursorPosRef.current = { x: e.clientX, y: e.clientY };
      
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          if (cursor) {
            cursor.style.transform = `translate3d(${cursorPosRef.current.x}px, ${cursorPosRef.current.y}px, 0) translate(-50%, -50%)`;
          }
          rafRef.current = null;
        });
      }
    };

    const handleMouseDown = () => {
      isClickingRef.current = true;
      setIsClicking(true);
      if (cursor) {
        cursor.style.transform = cursor.style.transform.replace('scale(1)', 'scale(0.7)');
        cursor.style.background = '#34A853';
        cursor.style.boxShadow = '0 0 20px #34A853';
      }
    };

    const handleMouseUp = () => {
      isClickingRef.current = false;
      setIsClicking(false);
      if (cursor) {
        cursor.style.transform = cursor.style.transform.replace('scale(0.7)', 'scale(1)');
        
        if (isHoveringRef.current) {
          cursor.style.background = '#FBBC05';
          cursor.style.boxShadow = '0 0 20px #FBBC05';
        } else {
          cursor.style.background = '#4285F4';
          cursor.style.boxShadow = '0 0 20px #4285F4';
        }
      }
    };

    // Throttled mouse move for performance
    let lastMoveTime = 0;
    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastMoveTime < 16) { // ~60fps
        updateCursorPosition(e);
        lastMoveTime = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handleCardClick = useCallback((cardId) => {
    playClick();
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  }, [playClick]);

  const handleHoverStart = useCallback((color = '#FBBC05') => {
    playHover();
    isHoveringRef.current = true;
    setIsHovering(true);
    if (cursorRef.current) {
      cursorRef.current.style.transform = cursorRef.current.style.transform.replace('scale(1)', 'scale(1.5)');
      cursorRef.current.style.background = color;
      cursorRef.current.style.boxShadow = `0 0 20px ${color}`;
      cursorRef.current.style.mixBlendMode = 'normal';
      cursorRef.current.style.opacity = '0.8';
    }
  }, [playHover]);

  const handleHoverEnd = useCallback(() => {
    isHoveringRef.current = false;
    setIsHovering(false);
    if (cursorRef.current) {
      cursorRef.current.style.transform = cursorRef.current.style.transform.replace('scale(1.5)', 'scale(1)');
      
      if (isClickingRef.current) {
        cursorRef.current.style.background = '#34A853';
        cursorRef.current.style.boxShadow = '0 0 20px #34A853';
      } else {
        cursorRef.current.style.background = '#4285F4';
        cursorRef.current.style.boxShadow = '0 0 20px #4285F4';
      }
      
      cursorRef.current.style.mixBlendMode = 'difference';
      cursorRef.current.style.opacity = '1';
    }
  }, []);

  const handleSocialClick = useCallback((url) => {
    playClick();
    window.open(url, '_blank');
  }, [playClick]);

  // Memoize static data
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

  // Optimized GoogleText component
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

  // Generate background shapes only once
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
          cursor: none;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        a, button, input, textarea, select, [role="button"] {
          cursor: none !important;
        }

        @keyframes float {
          0%, 100% { transform: translate3d(0, 0px, 0) scale(1); }
          50% { transform: translate3d(0, -20px, 0) scale(1.05); }
        }

        @keyframes rotateBorder {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes gradientMove {
          0% { transform: translate3d(0%, 0%, 0) rotate(0deg); }
          50% { transform: translate3d(5%, -5%, 0) rotate(3deg); }
          100% { transform: translate3d(0%, 0%, 0) rotate(0deg); }
        }

        .custom-cursor {
          will-change: transform;
          backface-visibility: hidden;
          transition: width 0.2s ease, height 0.2s ease, background 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
        }

        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .hero-text { order: 2 !important; text-align: center !important; align-items: center !important; }
          .hero-photo { order: 1 !important; }
          .hero-title { font-size: 2.2rem !important; text-align: center !important; }
          .hero-desc { text-align: center !important; max-width: 100% !important; font-size: 1.1rem !important; }
          .stats-grid { max-width: 500px !important; margin: 1rem auto 0 !important; }
          .profile-container { width: 220px !important; height: 220px !important; }
          .services-grid { grid-template-columns: 1fr !important; max-width: 500px !important; margin: 0 auto !important; }
          .services-title { font-size: 2rem !important; }
          .custom-cursor { display: none !important; }
          html, body { cursor: auto !important; }
          a, button, input, textarea, select, [role="button"] { cursor: pointer !important; }
          .bg-shape { display: none !important; }
        }

        @media (max-width: 480px) {
          .container { padding: 1rem !important; }
          .hero-title { font-size: 1.8rem !important; }
          .hero-desc { font-size: 1rem !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 0.8rem !important; }
          .profile-container { width: 180px !important; height: 180px !important; }
          .profile-frame { border-radius: 16px !important; }
          .placeholder-icon { font-size: 3rem !important; }
          .social-btn { width: 40px !important; height: 40px !important; }
          .social-icon { font-size: 1.1rem !important; }
          .service-card { padding: 1.5rem 1rem !important; }
          .service-icon { font-size: 2.2rem !important; }
          .service-title-text { font-size: 1.1rem !important; }
          .services-title { font-size: 1.6rem !important; }
          .services-subtitle { font-size: 0.9rem !important; }
        }

        @media (max-width: 360px) {
          .profile-container { width: 150px !important; height: 150px !important; }
          .stats-grid { grid-template-columns: 1fr !important; max-width: 250px !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          .bg-shape { display: none !important; }
          .custom-cursor { display: none !important; }
        }

        * { -webkit-tap-highlight-color: transparent; }
      `}</style>

      {/* Optimized Custom Cursor with direct DOM manipulation */}
      <div 
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          left: '0',
          top: '0',
          width: '14px',
          height: '14px',
          background: '#4285F4',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference',
          boxShadow: '0 0 20px #4285F4',
          willChange: 'transform',
          transform: 'translate3d(-100px, -100px, 0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
        }}
      />

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
        <section style={{ 
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
              >
                <span>✨</span> Available for Projects
              </motion.div>

              {/* Title */}
              <h1 className="hero-title" style={{ 
                fontSize: '3.8rem', 
                fontWeight: '800', 
                lineHeight: '1.2', 
                margin: '0' 
              }}>
                <GoogleText text="Creative Full-Stack Developer" />
              </h1>
              
              {/* Description */}
              <p className="hero-desc" style={{ 
                fontSize: '1.25rem', 
                color: '#9AA0A6', 
                lineHeight: '1.8', 
                margin: '0', 
                maxWidth: '520px' 
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
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '20px',
                      padding: '1.8rem 1.2rem',
                      textAlign: 'center',
                      backdropFilter: 'blur(20px)',
                      position: 'relative',
                      overflow: 'hidden',
                      willChange: 'transform',
                    }}
                    onMouseEnter={() => handleHoverStart(stat.color)}
                    onMouseLeave={handleHoverEnd}
                    onClick={() => playClick()}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -8, 
                      borderColor: stat.color, 
                      background: 'rgba(255,255,255,0.08)', 
                      boxShadow: `0 20px 40px rgba(0,0,0,0.4), 0 0 60px ${stat.color}33` 
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span style={{ 
                      fontSize: '1.8rem', 
                      display: 'block', 
                      marginBottom: '0.5rem' 
                    }}>
                      {stat.icon}
                    </span>
                    <span style={{ 
                      display: 'block', 
                      fontSize: '2.4rem', 
                      fontWeight: '800', 
                      marginBottom: '0.3rem', 
                      color: stat.color 
                    }}>
                      {stat.number}
                    </span>
                    <span style={{ 
                      fontSize: '0.8rem', 
                      color: '#9AA0A6', 
                      textTransform: 'uppercase', 
                      letterSpacing: '1.5px', 
                      fontWeight: '600' 
                    }}>
                      {stat.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Profile Photo */}
            <motion.div
              className="hero-photo"
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <div 
                className="profile-container"
                style={{ position: 'relative', width: '340px', height: '340px' }}
                onMouseEnter={() => handleHoverStart('#4285F4')}
                onMouseLeave={handleHoverEnd}
                onClick={() => playClick()}
              >
                {/* Decorative Border */}
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-15px',
                  right: '-15px',
                  bottom: '-15px',
                  border: '2px solid rgba(66, 133, 244, 0.15)',
                  borderRadius: '35px',
                  animation: 'rotateBorder 30s linear infinite',
                }} />
                
                {/* Photo Frame */}
                <div className="profile-frame" style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  border: '3px solid rgba(255, 255, 255, 0.1)',
                  background: '#1a1a1a',
                  position: 'relative',
                  zIndex: '3',
                  boxShadow: '0 30px 80px rgba(0, 0, 0, 0.5)',
                }}>
                  <img
  src={profilePhoto}
  alt="Gaurav Chaudhari"
  loading="lazy"
  style={{ 
    width: '100%', 
    height: '100%', 
    objectFit: 'cover', 
    display: 'block' 
  }}
  onError={(e) => {
    e.target.style.display = 'none';
    if (e.target.nextSibling) {
      e.target.nextSibling.style.display = 'flex';
    }
  }}
/>
                  {/* Fallback if image fails to load */}
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
                    <span className="placeholder-icon" style={{ fontSize: '5rem' }}>👨‍💻</span>
                  </div>
                </div>

                {/* Glow Effect */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px',
                  right: '-20px',
                  bottom: '-20px',
                  background: 'radial-gradient(circle, rgba(66, 133, 244, 0.15), transparent 70%)',
                  borderRadius: '40px',
                  zIndex: '1',
                  filter: 'blur(25px)',
                }}></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <motion.section
          style={{ padding: '4rem 0 5rem', width: '100%' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.div
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
            >
              <span>🚀</span> What I Offer
            </motion.div>

            <h2 className="services-title" style={{ 
              fontSize: '3rem', 
              fontWeight: '800', 
              margin: '0 0 1rem 0' 
            }}>
              <GoogleText text="My Services" />
            </h2>
            
            <p className="services-subtitle" style={{ 
              fontSize: '1.2rem', 
              color: '#9AA0A6', 
              fontStyle: 'italic', 
              margin: '0 0 2.5rem 0' 
            }}>
              "Turning Creativity into Powerful Digital Solutions"
            </p>

            {/* Social Links */}
            <div style={{ 
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
                  onMouseEnter={() => handleHoverStart(social.color)}
                  onMouseLeave={handleHoverEnd}
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

          {/* Services Grid */}
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
                  cursor: 'pointer',
                  boxShadow: expandedCards[service.id]
                    ? `0 20px 50px rgba(0,0,0,0.4), 0 0 60px ${service.color}33`
                    : 'none',
                  willChange: 'transform',
                }}
                onMouseEnter={() => handleHoverStart(service.color)}
                onMouseLeave={handleHoverEnd}
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
                {/* Card Background Glow */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: `radial-gradient(circle at 50% 0%, ${service.color}10, transparent 70%)`,
                  pointerEvents: 'none',
                }} />

                {/* Service Icon */}
                <span className="service-icon" style={{ 
                  fontSize: '3.5rem', 
                  position: 'relative', 
                  zIndex: 1,
                  filter: `drop-shadow(0 0 15px ${service.color}44)`,
                }}>
                  {service.icon}
                </span>
                
                {/* Service Title */}
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
                
                {/* Service Description */}
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
                
                {/* Expand Arrow */}
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

                {/* Expandable Content */}
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
                
                {/* Bottom Accent Bar */}
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

                {/* Corner Decoration */}
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

