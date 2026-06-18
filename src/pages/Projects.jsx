// import React from 'react';
// import { motion } from 'framer-motion';
// import useSound from '../hooks/useSound';

// const Projects = () => {
//   const { playHover, playClick } = useSound();

//   const projects = [
//     {
//       title: 'Loopixs',
//       description: 'Loopixs is a modern social media web application inspired by Instagram and Snapchat, designed for seamless content sharing and real-time engagement. It allows users to upload photos, short videos (Reels), share stories, like, comment, and interact with other users in a dynamic and visually appealing interface.',
//       tech: ['React', 'Bootstrap', 'Node.js', 'MongoDB', 'GitHub'],
//       status: 'Completed',
//       icon: 'ᦠ',
//       color: '#4285F4',
//       link: '#'
//     },
//     {
//       title: 'Profitup',
//       description: 'your all-in-one bookkeeping solution designed to help businesses manage income, expenses, invoices, and financial records with ease.',
//       tech: ['React', 'Node.js', 'MongoDB', 'vite', 'Bootstrap', 'GitHub'],
//       status: 'Completed',
//       icon: '📕',
//       color: '#FBBC05',
//       link: '#'
//     },
//     {
//       title: 'Portfolio Website',
//       description: 'Portfolio Website is a personal web application that showcases an individuals skills, projects, education, and achievements. It provides a professional online presence, allowing recruiters, clients, and employers to explore the users work and easily get in touch.',
//       tech: ['React', 'Framer Motion', 'Emailjs', 'vite', 'GitHub'],
//       status: 'Completed',
//       icon: '💼',
//       color: '#34A853',
//       link: '#'
//     },
//     {
//       title: 'Student Attendance System',
//       description: 'Student Attendance System is a web-based application that automates the process of recording and managing student attendance. It enables teachers to mark attendance digitally, allows administrators to manage student records and generate reports, and helps students track their attendance. The system improves accuracy, saves time, and eliminates the need for manual attendance registers.',
//       tech: ['React', 'Node.js', 'JSON Web Token (JWT)', 'MongoDB', 'Socket.io','Express.js', 'Bootstrap', 'GitHub'],
//       status: 'completed',
//       icon: '👨‍⚖️',
//       color: '#EA4335',
//       link: '#'
//     },
//     {
//       title: 'Blood Donation System',
//       description: 'Blood Donation System is a web-based application that connects blood donors with recipients and healthcare organizations. It allows users to register as donors, search for blood by type and location, manage donation records, and request blood during emergencies. The system simplifies the blood donation process, improves communication, and helps ensure timely access to safe blood for those in need.',
//       tech: ['React', 'Node.js', 'JSON Web Token (JWT)', 'MongoDB', 'Socket.io','Express.js', 'Bootstrap', 'GitHub'],
//       status: 'planning',
//       icon: '🩸',
//       color: '#EA4335',
//       link: '#'
//     },
//     {
//       title: 'Connectoo',
//       description: 'A secure, real-time messaging platform with private and group chats, typing indicators, and message notifications using WebSocket communication.',
//       tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Bootstrap', 'GitHub'],
//       status: 'In Progress',
//       icon: '💬',
//       color: '#8AB4F8',
//       link: '#'
//     },
//     {
//       title: 'TaskFlow',
//       description: 'A full-featured task management web app that lets users create, organize, and track daily activities with deadlines, priorities, and progress tracking. Includes authentication and real-time updates.',
//       tech: ['React', 'Node.js', 'MongoDB', 'Bootstrap', 'JWT Auth', 'GitHub'],
//       status: 'In Progress',
//       icon: '💼',
//       color: '#E1306C',
//       link: '#'
//     }
//   ];

//   const GoogleText = ({ text }) => (
//     <span className="google-gradient-text">
//       {text.split('').map((char, index) => (
//         <span 
//           key={index} 
//           className={
//             char === ' ' ? 'space' :
//             index % 4 === 0 ? 'google-blue' :
//             index % 4 === 1 ? 'google-red' :
//             index % 4 === 2 ? 'google-yellow' : 'google-green'
//           }
//         >
//           {char}
//         </span>
//       ))}
//     </span>
//   );

//   const handleProjectClick = (project) => {
//     playClick();
//     if (project.link && project.link !== '#') {
//       window.open(project.link, '_blank');
//     }
//   };

//   const handleStatClick = () => {
//     playClick();
//   };

//   const handleStatHover = () => {
//     playHover();
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Completed': return '#34A853';
//       case 'In Progress': return '#FBBC05';
//       case 'Planning': return '#4285F4';
//       default: return '#5F6368';
//     }
//   };

//   return (
//     <div className="page projects-section">
//       {/* Header Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="projects-header"
//       >
//         <h1 className="google-gradient-text">
//           <GoogleText text="My Projects" />
//         </h1>
//         <p className="projects-subtitle">
//           A Showcase of My Recent Work
//         </p>
//       </motion.div>

//       {/* Projects Grid */}
//       <div className="projects-container">
//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               className="project-card"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               onMouseEnter={playHover}
//               onClick={() => handleProjectClick(project)}
//               whileHover={{ 
//                 y: -8,
//                 transition: { duration: 0.3 }
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               {/* Project Header */}
//               <div className="project-header">
//                 <div className="project-icon" style={{ color: project.color }}>
//                   {project.icon}
//                 </div>
//                 <div className="project-title-section">
//                   <h3 className="project-title">{project.title}</h3>
//                   <div 
//                     className="project-status"
//                     style={{ backgroundColor: getStatusColor(project.status) }}
//                   >
//                     {project.status}
//                   </div>
//                 </div>
//               </div>

//               {/* Project Description */}
//               <p className="project-description">
//                 {project.description}
//               </p>

//               {/* Tech Stack */}
//               <div className="project-tech">
//                 {project.tech.map(tech => (
//                   <span
//                     key={tech}
//                     className="tech-tag"
//                     style={{ 
//                       borderColor: project.color,
//                       color: project.color
//                     }}
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Hover Effect */}
//               <div 
//                 className="project-glow"
//                 style={{ 
//                   background: `radial-gradient(circle, ${project.color}20 0%, transparent 70%)`
//                 }}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Stats Section */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.8 }}
//         className="projects-stats"
//       >
//         <motion.div 
//           className="stat-item"
//           onMouseEnter={handleStatHover}
//           onClick={handleStatClick}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <div className="stat-number">
//             {projects.filter(p => p.status === 'Completed').length}+
//           </div>
//           <div className="stat-label">Projects Completed</div>
//         </motion.div>
//         <motion.div 
//           className="stat-item"
//           onMouseEnter={handleStatHover}
//           onClick={handleStatClick}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <div className="stat-number">
//             {projects.filter(p => p.status === 'In Progress').length}
//           </div>
//           <div className="stat-label">In Progress</div>
//         </motion.div>
//         <motion.div 
//           className="stat-item"
//           onMouseEnter={handleStatHover}
//           onClick={handleStatClick}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <div className="stat-number">
//             {projects.reduce((acc, project) => acc + project.tech.length, 0)}+
//           </div>
//           <div className="stat-label">Technologies Used</div>
//         </motion.div>
//       </motion.div>

//       {/* Complete Global CSS Styles */}
//       <style>{`
//         /* ===== GLOBAL STYLES - COMPLETE FIXED VERSION ===== */

//         /* Reset & Variables */
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         :root {
//           --google-blue: #4285F4;
//           --google-red: #EA4335;
//           --google-yellow: #FBBC05;
//           --google-green: #34A853;
//           --google-gray: #5F6368;
//           --bg-dark: #0F0F0F;
//           --bg-darker: #0A0A0A;
//           --text-primary: #E8EAED;
//           --text-secondary: #9AA0A6;
//           --accent: #8AB4F8;
//           --card-bg: #1E1E1E;
//           --border: #3C4043;
//           --google-blue-dark: #3367D6;
//         }

//         /* Base Styles */
//         body {
//           font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           background: var(--bg-dark);
//           color: var(--text-primary);
//           overflow-x: hidden;
//           cursor: none;
//         }

//         .app {
//           min-height: 100vh;
//           position: relative;
//           width: 100%;
//           overflow-x: hidden;
//         }

//         .main-content {
//           padding: 2rem;
//           min-height: calc(100vh - 80px);
//           overflow-x: hidden;
//           width: 100%;
//           padding-top: 100px;
//         }

//         /* ===== SNAKE CURSOR STYLES ===== */
//         .cursor-segment {
//           position: fixed;
//           pointer-events: none;
//           z-index: 9999;
//           border-radius: 50%;
//           transform: translate(-50%, -50%);
//           transition: all 0.1s ease-out;
//           will-change: transform;
//           backface-visibility: hidden;
//           perspective: 1000px;
//         }

//         .cursor-head {
//           width: 16px;
//           height: 16px;
//           background: var(--google-blue);
//           border: 2px solid var(--google-blue);
//           box-shadow: 
//             0 0 10px var(--google-blue),
//             0 0 20px var(--google-blue);
//           z-index: 9999;
//         }

//         .cursor-tail-1 {
//           width: 12px;
//           height: 12px;
//           background: #34A853;
//           border: 1px solid #34A853;
//           opacity: 0.8;
//           z-index: 9998;
//         }

//         .cursor-tail-2 {
//           width: 10px;
//           height: 10px;
//           background: #FBBC05;
//           border: 1px solid #FBBC05;
//           opacity: 0.6;
//           z-index: 9997;
//         }

//         .cursor-tail-3 {
//           width: 8px;
//           height: 8px;
//           background: #EA4335;
//           border: 1px solid #EA4335;
//           opacity: 0.4;
//           z-index: 9996;
//         }

//         .cursor-tail-4 {
//           width: 6px;
//           height: 6px;
//           background: #8AB4F8;
//           border: 1px solid #8AB4F8;
//           opacity: 0.3;
//           z-index: 9995;
//         }

//         .cursor-hidden {
//           opacity: 0 !important;
//         }

//         .cursor-click .cursor-head {
//           transform: translate(-50%, -50%) scale(0.8);
//           background: var(--google-green);
//           border-color: var(--google-green);
//           box-shadow: 
//             0 0 15px var(--google-green),
//             0 0 30px var(--google-green);
//         }

//         .cursor-hover .cursor-head {
//           transform: translate(-50%, -50%) scale(1.3);
//           background: var(--google-yellow);
//           border-color: var(--google-yellow);
//           box-shadow: 
//             0 0 15px var(--google-yellow),
//             0 0 30px var(--google-yellow);
//         }

//         .cursor-hover ~ .cursor-tail-1,
//         .cursor-hover ~ .cursor-tail-2,
//         .cursor-hover ~ .cursor-tail-3,
//         .cursor-hover ~ .cursor-tail-4 {
//           background: var(--google-yellow) !important;
//           border-color: var(--google-yellow) !important;
//         }

//         .cursor-segment {
//           transition: 
//             left 0.15s linear,
//             top 0.15s linear,
//             transform 0.2s ease,
//             background 0.3s ease,
//             border-color 0.3s ease !important;
//         }

//         /* ===== HEADER WITH SUFFICIENT SPACE ===== */
//         .header {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           background: rgba(15, 15, 15, 0.98);
//           backdrop-filter: blur(20px);
//           border-bottom: 1px solid var(--border);
//           z-index: 1000;
//           padding: 1.5rem 2rem;
//           height: 80px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .nav {
//           display: flex;
//           justify-content: center;
//           gap: 3rem;
//           align-items: center;
//         }

//         .nav-item {
//           color: var(--text-secondary);
//           text-decoration: none;
//           font-weight: 500;
//           padding: 0.75rem 1.5rem;
//           border-radius: 12px;
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//           cursor: none;
//           background: none;
//           border: none;
//           font: inherit;
//           font-size: 1.1rem;
//         }

//         .nav-item:hover {
//           color: var(--text-primary);
//           background: rgba(66, 133, 244, 0.15);
//           transform: translateY(-2px);
//         }

//         .nav-item.active {
//           color: var(--google-blue);
//           background: rgba(66, 133, 244, 0.1);
//         }

//         .nav-item::before {
//           content: '';
//           position: absolute;
//           bottom: 0;
//           left: 50%;
//           width: 0;
//           height: 2px;
//           background: var(--google-blue);
//           transition: all 0.3s ease;
//           transform: translateX(-50%);
//         }

//         .nav-item:hover::before,
//         .nav-item.active::before {
//           width: 80%;
//         }

//         /* ===== INSTAGRAM-LIKE MOBILE NAVBAR ===== */
//         .mobile-nav {
//           position: fixed;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           background: rgba(15, 15, 15, 0.98);
//           backdrop-filter: blur(30px);
//           border-top: 1px solid var(--border);
//           display: flex;
//           justify-content: space-around;
//           align-items: center;
//           padding: 0.8rem 0.5rem;
//           z-index: 1000;
//           height: 70px;
//           box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
//         }

//         .mobile-nav-item {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           color: var(--text-secondary);
//           text-decoration: none;
//           font-size: 0.65rem;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           padding: 0.4rem 0.6rem;
//           border-radius: 16px;
//           cursor: pointer;
//           border: none;
//           background: transparent;
//           min-width: 55px;
//           position: relative;
//           overflow: hidden;
//         }

//         .mobile-nav-item::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(45deg, var(--google-blue), var(--google-green));
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           border-radius: 16px;
//           z-index: -1;
//         }

//         .mobile-nav-item:hover::before,
//         .mobile-nav-item.active::before {
//           opacity: 0.1;
//         }

//         .mobile-nav-item:hover,
//         .mobile-nav-item.active {
//           color: var(--google-blue);
//           transform: translateY(-5px);
//           background: rgba(66, 133, 244, 0.15);
//         }

//         .mobile-nav-item.active {
//           color: var(--google-blue);
//           font-weight: 600;
//         }

//         .mobile-nav-item.active::after {
//           content: '';
//           position: absolute;
//           bottom: 2px;
//           width: 4px;
//           height: 4px;
//           background: var(--google-blue);
//           border-radius: 50%;
//           transition: all 0.3s ease;
//         }

//         .mobile-nav-icon {
//           font-size: 1.4rem;
//           margin-bottom: 0.2rem;
//           transition: all 0.3s ease;
//           filter: grayscale(0.7);
//         }

//         .mobile-nav-item:hover .mobile-nav-icon,
//         .mobile-nav-item.active .mobile-nav-icon {
//           filter: grayscale(0);
//           transform: scale(1.1);
//         }

//         .mobile-nav-item:nth-child(1):hover .mobile-nav-icon,
//         .mobile-nav-item:nth-child(1).active .mobile-nav-icon {
//           color: var(--google-blue);
//           transform: scale(1.15);
//         }

//         .mobile-nav-item:nth-child(2):hover .mobile-nav-icon,
//         .mobile-nav-item:nth-child(2).active .mobile-nav-icon {
//           color: var(--google-green);
//           transform: scale(1.15);
//         }

//         .mobile-nav-item:nth-child(3):hover .mobile-nav-icon,
//         .mobile-nav-item:nth-child(3).active .mobile-nav-icon {
//           color: var(--google-yellow);
//           transform: scale(1.15);
//         }

//         .mobile-nav-item:nth-child(4):hover .mobile-nav-icon,
//         .mobile-nav-item:nth-child(4).active .mobile-nav-icon {
//           color: var(--google-red);
//           transform: scale(1.15);
//         }

//         @keyframes navPulse {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.1);
//           }
//         }

//         .mobile-nav-item.active .mobile-nav-icon {
//           animation: navPulse 2s ease-in-out infinite;
//         }

//         /* Mobile Nav Responsive Adjustments */
//         @media (max-width: 480px) {
//           .mobile-nav {
//             height: 65px;
//             padding: 0.7rem 0.3rem;
//           }
          
//           .mobile-nav-item {
//             min-width: 50px;
//             padding: 0.3rem 0.5rem;
//             font-size: 0.6rem;
//           }
          
//           .mobile-nav-icon {
//             font-size: 1.3rem;
//             margin-bottom: 0.15rem;
//           }
//         }

//         @media (max-width: 360px) {
//           .mobile-nav {
//             height: 60px;
//             padding: 0.6rem 0.2rem;
//           }
          
//           .mobile-nav-item {
//             min-width: 45px;
//             padding: 0.25rem 0.4rem;
//             font-size: 0.55rem;
//           }
          
//           .mobile-nav-icon {
//             font-size: 1.2rem;
//             margin-bottom: 0.1rem;
//           }
//         }

//         /* Ensure content doesn't get hidden behind navbar */
//         @media (max-width: 768px) {
//           .main-content {
//             padding-bottom: 80px !important;
//           }
          
//           .page {
//             padding-bottom: 2rem !important;
//           }
//         }

//         .mobile-nav {
//           transition: all 0.3s ease;
//         }

//         .mobile-nav-item {
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         @media (hover: hover) {
//           .mobile-nav-item:hover {
//             transform: translateY(-3px);
//           }
//         }

//         /* ===== PAGE LAYOUT WITH HEADER SPACE ===== */
//         .page {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 2rem;
//           min-height: calc(100vh - 180px);
//           width: 100%;
//           overflow-x: hidden;
//           padding-top: 2rem;
//         }

//         /* ===== CARDS ===== */
//         .card-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
//           gap: 2rem;
//           margin-top: 3rem;
//           width: 100%;
//         }

//         .card {
//           background: var(--card-bg);
//           border-radius: 20px;
//           padding: 2.5rem;
//           border: 1px solid var(--border);
//           transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//           position: relative;
//           overflow: hidden;
//           cursor: none;
//           transform: translateZ(0);
//           width: 100%;
//         }

//         .card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(66, 133, 244, 0.1), transparent);
//           transition: left 0.6s ease;
//         }

//         .card:hover::before {
//           left: 100%;
//         }

//         .card:hover {
//           transform: translateY(-8px) scale(1.02);
//           border-color: var(--google-blue);
//           box-shadow: 
//             0 20px 40px rgba(0, 0, 0, 0.3),
//             0 0 80px rgba(66, 133, 244, 0.1);
//         }

//         .card-icon {
//           font-size: 3.5rem;
//           margin-bottom: 1.5rem;
//           display: block;
//         }

//         /* Micro-interactions */
//         .hover-reveal {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: all 0.4s ease;
//         }

//         .card:hover .hover-reveal {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         /* ===== BUTTONS ===== */
//         .cta-button {
//           background: linear-gradient(45deg, var(--google-blue), var(--google-green));
//           color: white;
//           border: none;
//           padding: 1.2rem 2.5rem;
//           border-radius: 30px;
//           font-size: 1.1rem;
//           font-weight: 600;
//           cursor: none;
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//           width: auto;
//           display: inline-block;
//           box-shadow: 0 5px 15px rgba(66, 133, 244, 0.3);
//         }

//         .cta-button:hover {
//           transform: translateY(-3px);
//           box-shadow: 
//             0 10px 25px rgba(66, 133, 244, 0.4),
//             0 0 30px rgba(66, 133, 244, 0.2);
//         }

//         .cta-button:active {
//           transform: translateY(-1px);
//         }

//         /* ===== CONTACT SECTION ===== */
//         .contact-container {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 3rem;
//           margin-top: 3rem;
//           width: 100%;
//           min-height: 500px;
//         }

//         .contact-info {
//           padding: 2.5rem;
//           width: 100%;
//           display: flex;
//           flex-direction: column;
//           gap: 1.5rem;
//           background: var(--card-bg);
//           border-radius: 20px;
//           border: 1px solid var(--border);
//         }

//         .contact-form {
//           background: var(--card-bg);
//           border-radius: 20px;
//           padding: 2.5rem;
//           border: 1px solid var(--border);
//           display: flex;
//           flex-direction: column;
//           width: 100%;
//           min-height: 500px;
//         }

//         .form-group {
//           margin-bottom: 2rem;
//           width: 100%;
//         }

//         .form-label {
//           display: block;
//           margin-bottom: 0.75rem;
//           font-weight: 600;
//           color: var(--text-primary);
//           width: 100%;
//           font-size: 1.1rem;
//         }

//         .form-input,
//         .form-textarea {
//           width: 100%;
//           padding: 1rem;
//           background: var(--bg-darker) !important;
//           border: 1px solid var(--border) !important;
//           border-radius: 12px;
//           color: var(--text-primary) !important;
//           font-size: 1rem;
//           transition: all 0.3s ease;
//           font-family: inherit;
//           -webkit-appearance: none;
//           appearance: none;
//           resize: vertical;
//           cursor: text !important;
//           pointer-events: auto !important;
//           user-select: text !important;
//           -webkit-user-select: text !important;
//           -moz-user-select: text !important;
//           -ms-user-select: text !important;
//           opacity: 1 !important;
//           background-color: var(--bg-darker) !important;
//         }

//         .form-input:focus,
//         .form-textarea:focus {
//           outline: none !important;
//           border-color: var(--google-blue) !important;
//           box-shadow: 0 0 0 3px rgba(66, 133, 244, 0.2) !important;
//           transform: translateY(-2px);
//           background: var(--bg-darker) !important;
//         }

//         .form-input:hover,
//         .form-textarea:hover {
//           border-color: var(--google-blue) !important;
//           background: var(--bg-darker) !important;
//         }

//         .form-input::placeholder,
//         .form-textarea::placeholder {
//           color: var(--text-secondary);
//           opacity: 0.7;
//         }

//         .form-textarea {
//           min-height: 140px;
//           font-family: inherit;
//           width: 100%;
//         }

//         .contact-cards {
//           display: flex;
//           flex-direction: column;
//           gap: 1.5rem;
//           width: 100%;
//         }

//         .contact-card {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           padding: 1.5rem;
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 16px;
//           border: 1px solid var(--border);
//           text-decoration: none;
//           color: var(--text-primary);
//           transition: all 0.3s ease;
//           cursor: pointer;
//           width: 100%;
//         }

//         .contact-card:hover {
//           transform: translateY(-5px);
//           border-color: var(--google-blue);
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
//           background: rgba(66, 133, 244, 0.1);
//         }

//         .contact-icon {
//           font-size: 1.8rem;
//           flex-shrink: 0;
//           width: 40px;
//           text-align: center;
//         }

//         .contact-content {
//           flex: 1;
//           min-width: 0;
//         }

//         .contact-title {
//           margin: 0;
//           color: var(--text-primary);
//           font-size: 1.1rem;
//           font-weight: 600;
//           margin-bottom: 0.3rem;
//         }

//         .contact-detail {
//           margin: 0;
//           color: var(--text-secondary);
//           font-size: 0.9rem;
//           overflow: hidden;
//           text-overflow: ellipsis;
//           white-space: nowrap;
//         }

//         .contact-action {
//           font-size: 0.8rem;
//           font-weight: 600;
//           flex-shrink: 0;
//           color: var(--google-blue);
//         }

//         .quick-connect {
//           padding: 1.5rem;
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 12px;
//           border: 1px solid var(--border);
//           width: 100%;
//           margin-top: 1rem;
//         }

//         .quick-connect-title {
//           color: var(--google-blue);
//           margin-bottom: 1rem;
//           font-size: 1.2rem;
//         }

//         .quick-connect-details {
//           display: flex;
//           flex-direction: column;
//           gap: 0.5rem;
//         }

//         .quick-connect-details p {
//           margin: 0;
//           font-size: 0.9rem;
//           color: var(--text-secondary);
//           line-height: 1.4;
//         }

//         .status-message {
//           padding: 1rem;
//           border-radius: 12px;
//           margin-bottom: 1rem;
//           text-align: center;
//           font-weight: 500;
//           width: 100%;
//           border: 1px solid;
//         }

//         .status-message.success {
//           background: var(--google-green);
//           color: white;
//           border-color: var(--google-green);
//         }

//         .status-message.error {
//           background: var(--google-red);
//           color: white;
//           border-color: var(--google-red);
//         }

//         .loading-spinner {
//           display: inline-block;
//           width: 20px;
//           height: 20px;
//           border: 2px solid transparent;
//           border-top: 2px solid white;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//           margin-right: 10px;
//         }

//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         .form-input:disabled,
//         .form-textarea:disabled {
//           opacity: 0.6;
//           cursor: not-allowed !important;
//           background: var(--bg-dark) !important;
//         }

//         .cta-button:disabled {
//           opacity: 0.7;
//           cursor: not-allowed !important;
//           transform: none !important;
//         }

//         input[type="text"],
//         input[type="email"],
//         textarea {
//           cursor: text !important;
//           pointer-events: auto !important;
//           user-select: text !important;
//           -webkit-user-select: text !important;
//           -moz-user-select: text !important;
//           -ms-user-select: text !important;
//           background: var(--bg-darker) !important;
//           color: var(--text-primary) !important;
//           border: 1px solid var(--border) !important;
//         }

//         /* ===== PARALLAX BACKGROUND ===== */
//         .parallax-bg {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           z-index: -1;
//           overflow: hidden;
//         }

//         .parallax-layer {
//           position: absolute;
//           width: 120%;
//           height: 120%;
//           top: -10%;
//           left: -10%;
//         }

//         .layer-1 {
//           background: radial-gradient(circle at 20% 80%, rgba(66, 133, 244, 0.15) 0%, transparent 50%),
//                       radial-gradient(circle at 80% 20%, rgba(234, 67, 53, 0.15) 0%, transparent 50%);
//           transform: translateZ(-100px) scale(2);
//         }

//         .layer-2 {
//           background: radial-gradient(circle at 40% 40%, rgba(251, 188, 5, 0.1) 0%, transparent 50%),
//                       radial-gradient(circle at 60% 60%, rgba(52, 168, 83, 0.1) 0%, transparent 50%);
//           transform: translateZ(-50px) scale(1.5);
//         }

//         /* ===== 404 PAGE ===== */
//         .not-found {
//           text-align: center;
//           padding: 8rem 2rem;
//           min-height: 80vh;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           width: 100%;
//         }

//         .not-found h1 {
//           font-size: 8rem;
//           color: var(--google-red);
//           margin-bottom: 1rem;
//         }

//         .not-found h2 {
//           font-size: 2rem;
//           margin-bottom: 1rem;
//         }

//         .not-found p {
//           font-size: 1.2rem;
//           color: var(--text-secondary);
//           margin-bottom: 2rem;
//         }

//         /* ===== ANIMATIONS ===== */
//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           33% { transform: translateY(-15px) rotate(2deg); }
//           66% { transform: translateY(-8px) rotate(-1deg); }
//         }

//         @keyframes rotate {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }

//         @keyframes pulse-glow {
//           0%, 100% { opacity: 0.5; transform: scale(1); }
//           50% { opacity: 0.8; transform: scale(1.05); }
//         }

//         @keyframes slideInLeft {
//           from {
//             transform: translateX(-100px);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         @keyframes slideInRight {
//           from {
//             transform: translateX(100px);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         /* ===== SCROLLBAR ===== */
//         ::-webkit-scrollbar {
//           width: 10px;
//         }

//         ::-webkit-scrollbar-track {
//           background: var(--bg-darker);
//         }

//         ::-webkit-scrollbar-thumb {
//           background: linear-gradient(45deg, var(--google-blue), var(--google-green));
//           border-radius: 5px;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(45deg, var(--google-green), var(--google-blue));
//         }

//         /* ===== ACCESSIBILITY ===== */
//         ::selection {
//           background: var(--google-blue);
//           color: white;
//         }

//         ::-moz-selection {
//           background: var(--google-blue);
//           color: white;
//         }

//         button:focus,
//         .nav-item:focus,
//         .cta-button:focus,
//         .form-input:focus,
//         .form-textarea:focus {
//           outline: 2px solid var(--google-blue);
//           outline-offset: 3px;
//         }

//         /* ===== INSTAGRAM GRADIENT ===== */
//         .instagram-gradient {
//           background: linear-gradient(
//             45deg,
//             #405DE6,
//             #5851DB,
//             #833AB4,
//             #C13584,
//             #E1306C,
//             #FD1D1D,
//             #F56040,
//             #F77737,
//             #FCAF45,
//             #FFDC80
//           ) !important;
//           background-size: 400% 400% !important;
//           animation: instagramGradient 3s ease infinite !important;
//         }

//         @keyframes instagramGradient {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }

//         /* ===== RESPONSIVE DESIGN ===== */
//         @media (min-width: 1201px) {
//           .page {
//             max-width: 1400px;
//           }
          
//           .hero-text h1 {
//             font-size: 4rem;
//           }
//         }

//         @media (min-width: 1025px) {
//           .contact-container {
//             grid-template-columns: 1fr 1fr;
//           }
//         }

//         @media (max-width: 1024px) and (min-width: 769px) {
//           .hero-content {
//             grid-template-columns: 1fr 1fr;
//             gap: 3rem;
//           }
          
//           .contact-container {
//             grid-template-columns: 1fr 1fr;
//             gap: 2rem;
//           }
          
//           .hero-text h1 {
//             font-size: 3rem;
//           }
          
//           .profile-photo-container {
//             width: 280px;
//             height: 280px;
//           }
//         }

//         @media (max-width: 768px) {
//           body {
//             cursor: auto !important;
//           }
          
//           .cursor-segment {
//             display: none !important;
//           }
          
//           .main-content {
//             padding: 1rem;
//             padding-bottom: 80px;
//             padding-top: 90px;
//           }
          
//           .header {
//             padding: 1rem 1.5rem;
//             height: 70px;
//           }
          
//           .nav {
//             gap: 1.5rem;
//           }
          
//           .nav-item {
//             padding: 0.6rem 1.2rem;
//             font-size: 1rem;
//           }

//           .hero-image-mobile {
//             display: flex;
//             margin-bottom: 2rem;
//           }
          
//           .hero-image-desktop {
//             display: none;
//           }

//           .hero-content {
//             grid-template-columns: 1fr;
//             gap: 2rem;
//             min-height: auto;
//           }

//           .hero-text h1 {
//             font-size: 2.5rem;
//             text-align: center;
//           }

//           .hero-text p {
//             font-size: 1.2rem;
//             text-align: center;
//           }

//           .hero-stats {
//             flex-direction: row;
//             gap: 1rem;
//             justify-content: center;
//             flex-wrap: wrap;
//           }
          
//           .stat-item {
//             flex: 1;
//             min-width: 120px;
//             padding: 0.8rem;
//           }
          
//           .stat-number {
//             font-size: 1.5rem;
//           }
          
//           .stat-label {
//             font-size: 0.75rem;
//           }

//           .page {
//             padding: 1rem;
//             min-height: calc(100vh - 160px);
//           }
          
//           .card-grid {
//             grid-template-columns: 1fr;
//             gap: 1.5rem;
//           }
          
//           .card {
//             padding: 2rem;
//           }
          
//           .contact-container {
//             grid-template-columns: 1fr;
//             gap: 2rem;
//             margin-top: 2rem;
//             width: 100%;
//             display: flex;
//             flex-direction: column;
//           }
          
//           .contact-info,
//           .contact-form {
//             padding: 1.5rem;
//             width: 100%;
//             min-height: auto;
//           }
          
//           .contact-info {
//             order: 2;
//           }
          
//           .contact-form {
//             order: 1;
//           }
          
//           .contact-card {
//             padding: 1.2rem;
//             gap: 0.8rem;
//           }
          
//           .contact-icon {
//             font-size: 1.5rem;
//             width: 35px;
//           }
          
//           .contact-title {
//             font-size: 1rem;
//           }
          
//           .contact-detail {
//             font-size: 0.85rem;
//           }
          
//           .quick-connect {
//             padding: 1.2rem;
//           }
          
//           .not-found {
//             padding: 4rem 1rem;
//           }
          
//           .not-found h1 {
//             font-size: 5rem;
//           }
          
//           .not-found h2 {
//             font-size: 1.5rem;
//           }

//           a, button, .nav-item, .cta-button, .card, .mobile-nav-item,
//           .form-input, .form-textarea, .stat-item, .profile-photo {
//             cursor: pointer !important;
//           }
//         }

//         @media (max-width: 480px) {
//           .hero-text h1 {
//             font-size: 2rem;
//           }

//           .hero-text p {
//             font-size: 1rem;
//           }

//           .hero-stats {
//             flex-direction: column;
//             gap: 0.8rem;
//           }
          
//           .stat-item {
//             width: 100%;
//             max-width: 200px;
//             margin: 0 auto;
//           }
          
//           .stat-number {
//             font-size: 1.3rem;
//           }
          
//           .page {
//             padding: 0.5rem;
//           }
          
//           .card {
//             padding: 1.5rem;
//           }
          
//           .card-grid {
//             gap: 1rem;
//           }
          
//           .contact-container {
//             gap: 1.5rem;
//             margin-top: 1.5rem;
//           }
          
//           .contact-info,
//           .contact-form {
//             padding: 1rem;
//             border-radius: 16px;
//           }
          
//           .contact-form {
//             padding: 1.2rem;
//           }
          
//           .form-group {
//             margin-bottom: 1.5rem;
//           }
          
//           .form-input,
//           .form-textarea {
//             padding: 0.8rem;
//             font-size: 0.9rem;
//           }
          
//           .contact-card {
//             padding: 1rem;
//           }
          
//           .contact-icon {
//             font-size: 1.3rem;
//             width: 30px;
//           }
          
//           .mobile-nav {
//             padding: 0.75rem;
//             height: 65px;
//           }
          
//           .mobile-nav-item {
//             font-size: 0.7rem;
//             padding: 0.5rem;
//             min-width: 50px;
//           }
          
//           .mobile-nav-icon {
//             font-size: 1.2rem;
//           }
//         }

//         @media (max-width: 360px) {
//           .hero-text h1 {
//             font-size: 1.8rem;
//           }

//           .hero-text p {
//             font-size: 0.9rem;
//           }
          
//           .page {
//             padding: 0.25rem;
//           }
          
//           .contact-info,
//           .contact-form {
//             padding: 0.75rem;
//           }
          
//           .contact-form {
//             padding: 1rem;
//           }
          
//           .card {
//             padding: 1rem;
//           }
          
//           .header {
//             padding: 0.8rem 1rem;
//           }
          
//           .nav {
//             gap: 1rem;
//           }
          
//           .nav-item {
//             padding: 0.5rem 1rem;
//             font-size: 0.9rem;
//           }
          
//           .contact-card {
//             padding: 0.8rem;
//             gap: 0.6rem;
//           }
          
//           .contact-icon {
//             font-size: 1.2rem;
//             width: 25px;
//           }
          
//           .contact-title {
//             font-size: 0.9rem;
//           }
          
//           .contact-detail {
//             font-size: 0.8rem;
//           }
//         }

//         /* ===== CURSOR FIXES ===== */
//         @media (min-width: 769px) {
//           body {
//             cursor: none !important;
//           }
          
//           a, button, .nav-item, .cta-button, .card, .mobile-nav-item,
//           .form-input, .form-textarea, .stat-item, .profile-photo {
//             cursor: none !important;
//           }
//         }

//         input:focus, textarea:focus {
//           cursor: text !important;
//         }

//         @media (max-width: 768px) {
//           body {
//             -webkit-overflow-scrolling: touch;
//           }
          
//           .main-content {
//             overflow-y: auto;
//           }
//         }

//         /* GitHub Specific Styles */
//         .github-hover:hover {
//           border-color: var(--text-primary) !important;
//           box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1) !important;
//         }

//         .social-github {
//           background: var(--bg-darker) !important;
//           border: 1px solid var(--border) !important;
//           color: var(--text-primary) !important;
//           transition: all 0.3s ease !important;
//         }

//         .social-github:hover {
//           background: var(--card-bg) !important;
//           border-color: var(--text-primary) !important;
//         }

//         /* Ensure no horizontal scroll on any device */
//         html, body {
//           max-width: 100%;
//           overflow-x: hidden;
//         }

//         * {
//           box-sizing: border-box;
//         }

//         /* Force contact section to be visible */
//         .contact-section {
//           width: 100% !important;
//           visibility: visible !important;
//           opacity: 1 !important;
//           display: block !important;
//         }

//         /* ULTRA FIX: Force form inputs to be always editable */
//         input.form-input, textarea.form-textarea {
//           -webkit-user-select: text !important;
//           -moz-user-select: text !important;
//           -ms-user-select: text !important;
//           user-select: text !important;
//           pointer-events: auto !important;
//           cursor: text !important;
//           background: var(--bg-darker) !important;
//           color: var(--text-primary) !important;
//           border: 1px solid var(--border) !important;
//         }

//         /* ===== SOCIAL LINKS SECTION ===== */
//         .social-links-section {
//           margin-top: 2rem;
//           padding-top: 2rem;
//           border-top: 1px solid var(--border);
//         }

//         .social-divider {
//           text-align: center;
//           margin-bottom: 1.5rem;
//           position: relative;
//         }

//         .social-divider span {
//           background: var(--card-bg);
//           padding: 0 1rem;
//           color: var(--text-secondary);
//           font-size: 0.9rem;
//           position: relative;
//           z-index: 2;
//         }

//         .social-divider::before {
//           content: '';
//           position: absolute;
//           top: 50%;
//           left: 0;
//           right: 0;
//           height: 1px;
//           background: var(--border);
//           z-index: 1;
//         }

//         .social-links-grid {
//           display: grid;
//           grid-template-columns: repeat(2, 1fr);
//           gap: 1rem;
//         }

//         .social-link {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           padding: 1rem;
//           background: rgba(255, 255, 255, 0.05);
//           border: 1px solid var(--border);
//           border-radius: 12px;
//           text-decoration: none;
//           color: var(--text-primary);
//           transition: all 0.3s ease;
//           cursor: pointer;
//           min-height: 80px;
//         }

//         .social-link:hover {
//           background: rgba(255, 255, 255, 0.1);
//           border-color: var(--social-color);
//           transform: translateY(-2px);
//           box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
//         }

//         .social-icon {
//           font-size: 1.8rem;
//           margin-bottom: 0.5rem;
//           transition: transform 0.3s ease;
//         }

//         .social-link:hover .social-icon {
//           transform: scale(1.2);
//         }

//         .social-label {
//           font-size: 0.8rem;
//           font-weight: 600;
//           color: var(--text-secondary);
//           transition: color 0.3s ease;
//         }

//         .social-link:hover .social-label {
//           color: var(--social-color);
//         }

//         /* Google Logo Color Styles */
//         .google-gradient-text {
//           font-weight: 700;
//           letter-spacing: -0.5px;
//         }

//         .google-blue { color: #4285F4 !important; }
//         .google-red { color: #EA4335 !important; }
//         .google-yellow { color: #FBBC05 !important; }
//         .google-green { color: #34A853 !important; }

//         .google-gradient-bg {
//           background: linear-gradient(45deg, #4285F4, #EA4335, #FBBC05, #34A853) !important;
//           background-size: 300% 300% !important;
//           animation: googleGradient 3s ease infinite !important;
//           border: none !important;
//           color: white !important;
//           font-weight: 600 !important;
//         }

//         .google-gradient-bg:hover {
//           transform: translateY(-3px);
//           box-shadow: 
//             0 10px 25px rgba(66, 133, 244, 0.4),
//             0 0 30px rgba(234, 67, 53, 0.3),
//             0 0 40px rgba(251, 188, 5, 0.2),
//             0 0 50px rgba(52, 168, 83, 0.1) !important;
//         }

//         @keyframes googleGradient {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }

//         /* Custom Cursor Styles */
//         .custom-cursor {
//           position: fixed;
//           top: 0;
//           left: 0;
//           width: 16px;
//           height: 16px;
//           background: #4285F4;
//           border-radius: 50%;
//           pointer-events: none;
//           z-index: 9999;
//           mix-blend-mode: difference;
//           transition: background-color 0.2s ease;
//         }

//         /* Force cursor on all interactive elements */
//         button, a, .nav-item, .cta-button, .card, 
//         .mobile-nav-item, .form-input, .form-textarea, 
//         .stat-item, .contact-card, input, textarea,
//         [role="button"], .social-link {
//           cursor: none !important;
//         }

//         .space { margin: 0 2px; }

//         .google-gradient-text {
//           font-weight: 700;
//           letter-spacing: -0.5px;
//           display: inline-block;
//         }

//         /* ===== PROJECTS PAGE SPECIFIC STYLES ===== */
//         .projects-section {
//           padding-bottom: 2rem;
//         }

//         .projects-header {
//           text-align: center;
//           margin-bottom: 3rem;
//         }

//         .projects-header h1 {
//           font-size: 3.5rem;
//           margin-bottom: 1rem;
//         }

//         .projects-subtitle {
//           font-size: 1.3rem;
//           color: var(--text-secondary);
//           margin-top: 1rem;
//           line-height: 1.6;
//         }

//         .projects-container {
//           width: 100%;
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .projects-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
//           gap: 2rem;
//           margin-bottom: 3rem;
//         }

//         .project-card {
//           background: var(--card-bg);
//           border-radius: 20px;
//           padding: 2.5rem;
//           border: 1px solid var(--border);
//           transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//           position: relative;
//           overflow: hidden;
//           transform: translateZ(0);
//           cursor: none;
//         }

//         .project-card:hover {
//           transform: translateY(-8px) scale(1.02);
//           border-color: var(--google-blue);
//           box-shadow: 
//             0 20px 40px rgba(0, 0, 0, 0.3),
//             0 0 80px rgba(66, 133, 244, 0.1);
//         }

//         .project-header {
//           display: flex;
//           align-items: flex-start;
//           gap: 1rem;
//           margin-bottom: 1.5rem;
//         }

//         .project-icon {
//           font-size: 2.5rem;
//           flex-shrink: 0;
//           transition: transform 0.3s ease;
//         }

//         .project-card:hover .project-icon {
//           transform: scale(1.1) rotate(5deg);
//         }

//         .project-title-section {
//           flex: 1;
//           min-width: 0;
//         }

//         .project-title {
//           font-size: 1.4rem;
//           font-weight: 700;
//           margin-bottom: 0.5rem;
//           background: linear-gradient(45deg, var(--google-blue), var(--google-green));
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//           line-height: 1.3;
//         }

//         .project-status {
//           display: inline-block;
//           padding: 0.3rem 1rem;
//           border-radius: 20px;
//           color: white;
//           font-size: 0.8rem;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         .project-description {
//           color: var(--text-secondary);
//           line-height: 1.6;
//           margin-bottom: 1.5rem;
//           font-size: 1rem;
//         }

//         .project-tech {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 0.5rem;
//         }

//         .tech-tag {
//           padding: 0.4rem 1rem;
//           border: 1.5px solid;
//           border-radius: 12px;
//           font-size: 0.8rem;
//           font-weight: 600;
//           background: rgba(255, 255, 255, 0.05);
//           transition: all 0.3s ease;
//         }

//         .project-card:hover .tech-tag {
//           background: rgba(255, 255, 255, 0.1);
//           transform: translateY(-2px);
//         }

//         .project-glow {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//           pointer-events: none;
//           z-index: -1;
//         }

//         .project-card:hover .project-glow {
//           opacity: 1;
//         }

//         .projects-stats {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 2rem;
//           margin-top: 3rem;
//           padding: 2rem;
//           background: var(--card-bg);
//           border-radius: 20px;
//           border: 1px solid var(--border);
//         }

//         .projects-stats .stat-item {
//           text-align: center;
//           padding: 1.5rem;
//           border-radius: 16px;
//           border: 1px solid var(--border);
//           transition: all 0.3s ease;
//           cursor: none;
//         }

//         .projects-stats .stat-item:hover {
//           transform: translateY(-5px);
//           border-color: var(--google-blue);
//           box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
//         }

//         .projects-stats .stat-number {
//           font-size: 2.5rem;
//           font-weight: 700;
//           margin-bottom: 0.5rem;
//           background: linear-gradient(45deg, var(--google-blue), var(--google-green));
//           -webkit-background-clip: text;
//           background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .projects-stats .stat-label {
//           color: var(--text-secondary);
//           font-size: 0.9rem;
//           font-weight: 600;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//         }

//         /* Projects Page Mobile Responsive */
//         @media (max-width: 768px) {
//           .projects-grid {
//             grid-template-columns: 1fr;
//             gap: 1.5rem;
//           }

//           .project-card {
//             padding: 2rem;
//           }

//           .project-header {
//             flex-direction: column;
//             text-align: center;
//             gap: 0.5rem;
//           }

//           .project-icon {
//             align-self: center;
//           }

//           .projects-stats {
//             grid-template-columns: 1fr;
//             gap: 1.5rem;
//             padding: 1.5rem;
//           }

//           .projects-subtitle {
//             font-size: 1.1rem;
//           }

//           .projects-header h1 {
//             font-size: 2.5rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .project-card {
//             padding: 1.5rem;
//           }

//           .projects-grid {
//             grid-template-columns: 1fr;
//           }

//           .project-title {
//             font-size: 1.2rem;
//           }

//           .project-description {
//             font-size: 0.9rem;
//           }

//           .tech-tag {
//             font-size: 0.75rem;
//             padding: 0.3rem 0.8rem;
//           }

//           .projects-stats .stat-item {
//             padding: 1rem;
//           }

//           .projects-stats .stat-number {
//             font-size: 2rem;
//           }

//           .projects-header h1 {
//             font-size: 2rem;
//           }
//         }

//         /* Social Links Mobile Responsive */
//         @media (max-width: 768px) {
//           .social-links-grid {
//             grid-template-columns: repeat(4, 1fr);
//             gap: 0.5rem;
//           }

//           .social-link {
//             padding: 0.8rem 0.5rem;
//             min-height: 70px;
//           }

//           .social-icon {
//             font-size: 1.5rem;
//             margin-bottom: 0.3rem;
//           }

//           .social-label {
//             font-size: 0.7rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .social-links-grid {
//             grid-template-columns: repeat(2, 1fr);
//             gap: 0.8rem;
//           }

//           .social-link {
//             padding: 1rem;
//             min-height: 75px;
//           }

//           .social-icon {
//             font-size: 1.6rem;
//           }

//           .social-label {
//             font-size: 0.75rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Projects;





























import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from '../hooks/useSound';

const Projects = () => {
  const { playHover, playClick } = useSound();
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

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
      link: '#',
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

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const stats = {
    completed: projects.filter(p => p.status === 'Completed').length,
    inProgress: projects.filter(p => p.status === 'In Progress').length,
    planning: projects.filter(p => p.status === 'Planning').length,
    totalTechnologies: [...new Set(projects.flatMap(p => p.tech))].length
  };

  const handleProjectClick = (project) => {
    playClick();
    setSelectedProject(project);
  };

  const handleProjectHover = () => {
    playHover();
  };

  const closeModal = () => {
    playClick();
    setSelectedProject(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return '#34A853';
      case 'In Progress': return '#FBBC05';
      case 'Planning': return '#4285F4';
      default: return '#5F6368';
    }
  };

  const GoogleText = ({ text, className = '' }) => (
    <span className={`google-gradient-text ${className}`}>
      {text.split('').map((char, index) => (
        <span 
          key={index}
          className={
            char === ' ' ? 'space' :
            index % 4 === 0 ? 'google-blue' :
            index % 4 === 1 ? 'google-red' :
            index % 4 === 2 ? 'google-yellow' : 'google-green'
          }
        >
          {char}
        </span>
      ))}
    </span>
  );

  return (
    <div className="projects-page">
      <style>{`
        /* ===== COMPLETE PROJECTS PAGE STYLES ===== */
        
        :root {
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
          padding: 2rem;
          max-width: 1400px;
          margin: 0 auto;
          padding-top: 100px;
        }

        /* Header Styles */
        .projects-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .projects-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          letter-spacing: -1px;
        }

        .projects-subtitle {
          font-size: 1.2rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Google Gradient Text */
        .google-gradient-text {
          font-weight: 700;
          letter-spacing: -0.5px;
          display: inline-block;
        }

        .google-blue { color: #4285F4 !important; }
        .google-red { color: #EA4335 !important; }
        .google-yellow { color: #FBBC05 !important; }
        .google-green { color: #34A853 !important; }
        .space { margin: 0 2px; }

        /* Filter Buttons */
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
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          white-space: nowrap;
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

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .project-card {
          background: var(--card-bg);
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid var(--border);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          cursor: pointer;
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
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: var(--google-blue);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        .project-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .project-icon {
          font-size: 3rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
          filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
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
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
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
        }

        .project-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          padding: 0.3rem 0.8rem;
          border: 1.5px solid;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .project-card:hover .tech-tag {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .project-actions {
          display: flex;
          gap: 1rem;
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

        /* Stats Section */
        .stats-section {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .stat-card {
          background: var(--card-bg);
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid var(--border);
          text-align: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .stat-card:hover {
          transform: translateY(-5px);
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
        }

        .stat-label {
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* ===== FIXED MODAL STYLES - NO OVERLAP ===== */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          padding: 100px 2rem 2rem 2rem;
          overflow-y: auto;
        }

        .modal-content {
          background: var(--card-bg);
          border-radius: 24px;
          padding: 3rem;
          max-width: 800px;
          width: 100%;
          max-height: calc(100vh - 120px);
          overflow-y: auto;
          position: relative;
          border: 1px solid var(--border);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          margin: auto;
        }

        .modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: var(--bg-darker);
          border-radius: 4px;
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: var(--google-blue);
          border-radius: 4px;
        }

        .modal-close {
          position: sticky;
          top: 0;
          float: right;
          background: var(--bg-darker);
          border: 2px solid var(--border);
          color: var(--text-primary);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .modal-close:hover {
          background: var(--google-red);
          border-color: var(--google-red);
          transform: rotate(90deg);
        }

        .modal-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          display: block;
          text-align: center;
        }

        .modal-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
          text-align: center;
          background: var(--gradient, linear-gradient(45deg, #4285F4, #34A853));
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .modal-description {
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
          font-size: 1.1rem;
          text-align: center;
        }

        .modal-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          border: 1px solid var(--border);
        }

        .feature-icon {
          color: var(--google-green);
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .feature-text {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .modal-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
          justify-content: center;
        }

        .modal-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .modal-button {
          padding: 0.75rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .modal-button-primary {
          background: linear-gradient(45deg, var(--google-blue), var(--google-green));
          color: white;
        }

        .modal-button-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(66, 133, 244, 0.4);
        }

        .modal-button-secondary {
          background: var(--bg-darker);
          color: var(--text-primary);
          border: 1px solid var(--border);
        }

        .modal-button-secondary:hover {
          border-color: var(--text-primary);
          transform: translateY(-2px);
        }

        /* Planning badge pulse animation */
        .planning-pulse {
          animation: pulseBadge 2s ease-in-out infinite;
        }

        @keyframes pulseBadge {
          0%, 100% { box-shadow: 0 0 0 0 rgba(66, 133, 244, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(66, 133, 244, 0); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .projects-page {
            padding: 1rem;
            padding-top: 90px;
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

          .modal-overlay {
            padding: 80px 1rem 1rem 1rem;
          }

          .modal-content {
            padding: 2rem;
            max-height: calc(100vh - 100px);
          }

          .modal-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .projects-header h1 {
            font-size: 2rem;
          }

          .projects-subtitle {
            font-size: 1rem;
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

          .modal-actions {
            flex-direction: column;
          }

          .modal-content {
            padding: 1.5rem;
          }

          .modal-features {
            grid-template-columns: 1fr;
          }

          .modal-overlay {
            padding: 70px 0.5rem 0.5rem 0.5rem;
          }
        }

        @media (max-width: 360px) {
          .projects-page {
            padding: 0.5rem;
            padding-top: 80px;
          }

          .modal-content {
            padding: 1rem;
          }

          .modal-title {
            font-size: 1.5rem;
          }

          .modal-description {
            font-size: 0.9rem;
          }

          .modal-button {
            padding: 0.6rem 1.5rem;
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="projects-header"
      >
        <h1>
          <GoogleText text="My Projects" />
        </h1>
        <p className="projects-subtitle">
          Exploring innovative solutions through full-stack development, creating impactful applications that solve real-world problems.
        </p>
      </motion.div>

      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="filter-container"
      >
        {filters.map((filterItem) => (
          <motion.button
            key={filterItem}
            className={`filter-button ${filter === filterItem ? 'active' : ''}`}
            onClick={() => {
              playClick();
              setFilter(filterItem);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {filterItem}
            {filterItem !== 'All' && (
              <span style={{ marginLeft: '0.5rem', opacity: 0.7, fontSize: '0.8rem' }}>
                ({projects.filter(p => p.category === filterItem).length})
              </span>
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="projects-grid">
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="project-card"
                style={{ '--gradient': project.gradient }}
                onMouseEnter={handleProjectHover}
                onClick={() => handleProjectClick(project)}
                whileHover={{ y: -10 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="project-header">
                  <motion.div 
                    className="project-icon"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    {project.icon}
                  </motion.div>
                  <div className="project-title-section">
                    <h3 className="project-title">{project.title}</h3>
                    <span 
                      className={`project-status ${project.status === 'Planning' ? 'planning-pulse' : ''}`}
                      style={{ backgroundColor: getStatusColor(project.status) }}
                    >
                      {project.status}
                    </span>
                    <span 
                      className="project-category"
                      style={{ 
                        borderColor: project.color,
                        color: project.color,
                        backgroundColor: `${project.color}15`
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="tech-tag"
                      style={{ 
                        borderColor: project.color,
                        color: project.color
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="tech-tag" style={{ borderColor: '#5F6368', color: '#5F6368' }}>
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                <div className="project-actions">
                  <a
                    href={project.link}
                    className="project-link live-link"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🚀 Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="project-link github-link"
                    onClick={(e) => e.stopPropagation()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📂 GitHub
                  </a>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <span className="empty-state-icon">🔍</span>
              <p className="empty-state-text">No projects found in this category</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="stats-section"
      >
        <motion.div 
          className="stat-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="stat-number">{stats.completed}</div>
          <div className="stat-label">Completed Projects</div>
        </motion.div>

        <motion.div 
          className="stat-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="stat-number">{stats.inProgress}</div>
          <div className="stat-label">In Progress</div>
        </motion.div>

        <motion.div 
          className="stat-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="stat-number">{stats.planning}</div>
          <div className="stat-label">Planned</div>
        </motion.div>

        <motion.div 
          className="stat-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="stat-number">{stats.totalTechnologies}</div>
          <div className="stat-label">Technologies</div>
        </motion.div>
      </motion.div>

      {/* ===== FIXED PROJECT DETAIL MODAL ===== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="modal-overlay"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, type: "spring", damping: 25 }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ✕
              </button>

              <span className="modal-icon">{selectedProject.icon}</span>
              <h2 className="modal-title" style={{ '--gradient': selectedProject.gradient }}>
                {selectedProject.title}
              </h2>
              
              <p className="modal-description">{selectedProject.longDescription}</p>

              <div className="modal-features">
                {selectedProject.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <span className="feature-icon">✓</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="modal-tech-stack">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="tech-tag"
                    style={{ 
                      borderColor: selectedProject.color,
                      color: selectedProject.color,
                      padding: '0.5rem 1rem',
                      fontSize: '0.85rem'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="modal-actions">
                <a
                  href={selectedProject.link}
                  className="modal-button modal-button-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🚀 View Live Demo
                </a>
                <a
                  href={selectedProject.github}
                  className="modal-button modal-button-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📂 View Source Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;

