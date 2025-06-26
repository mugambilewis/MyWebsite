// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

const GraphicsShowcase = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Dummy poster data with varied aspect ratios
  const posterData = [
    { id: '1', src: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1750898359/malawi_pukkit_coim2k.png', aspectRatio: 2 / 3 },
    { id: '2', src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=500&fit=crop', aspectRatio: 4 / 5 },
    { id: '3', src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=650&fit=crop', aspectRatio: 8 / 13 },
    { id: '4', src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=550&fit=crop', aspectRatio: 8 / 11 },
    { id: '5', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop', aspectRatio: 2 / 3 },
    { id: '6', src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=500&fit=crop', aspectRatio: 4 / 5 },
    { id: '7', src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=650&fit=crop', aspectRatio: 8 / 13 },
    { id: '8', src: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1750898298/2_ougb4y.png', aspectRatio: 8 / 11 },
    { id: '9', src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=600&fit=crop', aspectRatio: 2 / 3 },
    { id: '10', src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=500&fit=crop', aspectRatio: 4 / 5 },
    { id: '11', src: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&h=650&fit=crop', aspectRatio: 8 / 13 },
    { id: '12', src: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1750898279/madaraka.._o8ykkj.png', aspectRatio: 8 / 11 },
  ];

  // Repeat to create looping effect
  const leftColumnPosters = [...posterData.slice(0, 4), ...posterData.slice(0, 4), ...posterData.slice(0, 4)];
  const centerColumnPosters = [...posterData.slice(4, 8), ...posterData.slice(4, 8), ...posterData.slice(4, 8)];
  const rightColumnPosters = [...posterData.slice(8, 12), ...posterData.slice(8, 12), ...posterData.slice(8, 12)];

  return (
    <div
      className="w-full h-screen overflow-hidden bg-background relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Navigation />
      <div className="flex h-full">
        {/* Left Column - Scroll Down */}
        <div className="flex-1 relative overflow-hidden">
          <motion.div
            className="flex flex-col space-y-4 p-4"
            animate={{ y: [0, -1200, 0] }}
            transition={{
              duration: isHovered ? 15 : 30,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {leftColumnPosters.map((poster, index) => (
              <motion.div
                key={`left-${poster.id}-${index}`}
                className="relative rounded-lg overflow-hidden shadow-lg"
                style={{
                  aspectRatio: poster.aspectRatio,
                  minHeight: '200px'
                }}
                whileHover={{ scale: 0.95, transition: { duration: 0.2 } }}
              >
                <img
                  src={poster.src}
                  alt={`Poster ${poster.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Center Column - Scroll Up */}
        <div className="flex-1 relative overflow-hidden">
          <motion.div
            className="flex flex-col space-y-4 p-4"
            animate={{ y: [-1200, 0, -1200] }}
            transition={{
              duration: isHovered ? 15 : 30,
              repeat: Infinity,
              ease: 'linear'
            }}
          >
            {centerColumnPosters.map((poster, index) => (
              <motion.div
                key={`center-${poster.id}-${index}`}
                className="relative rounded-lg overflow-hidden shadow-lg"
                style={{
                  aspectRatio: poster.aspectRatio,
                  minHeight: '200px'
                }}
                whileHover={{ scale: 0.95, transition: { duration: 0.2 } }}
              >
                <img
                  src={poster.src}
                  alt={`Poster ${poster.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Scroll Down */}
        <div className="flex-1 relative overflow-hidden">
          <motion.div
            className="flex flex-col space-y-4 p-4"
            animate={{ y: [0, -1200, 0] }}
            transition={{
              duration: isHovered ? 15 : 30,
              repeat: Infinity,
              ease: 'linear',
              delay: 5
            }}
          >
            {rightColumnPosters.map((poster, index) => (
              <motion.div
                key={`right-${poster.id}-${index}`}
                className="relative rounded-lg overflow-hidden shadow-lg"
                style={{
                  aspectRatio: poster.aspectRatio,
                  minHeight: '200px'
                }}
                whileHover={{ scale: 0.95, transition: { duration: 0.2 } }}
              >
                <img
                  src={poster.src}
                  alt={`Poster ${poster.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/5 via-transparent to-background/5" />
      <Footer />
    </div>
  );
};

export default GraphicsShowcase;
