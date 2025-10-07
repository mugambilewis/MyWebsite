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
    { id: '2', src: 'https://res.cloudinary.com/dkcqakosa/image/upload/v1735662561/sc1_vpdg5r.jpg', aspectRatio: 4 / 5 },
    { id: '3', src: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1759864806/7f97f38767b55a99a9a16ad7c8581b80_jpt7u2.jpg', aspectRatio: 8 / 13 },
    { id: '4', src: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1759864805/99647ab7c05e24f1e470d273d25ee152_nqrpv0.jpg', aspectRatio: 8 / 11 },
    { id: '5', src: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1759864542/MPniLarui._dxjphl.png', aspectRatio: 2 / 3 },
    { id: '6', src: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1759864801/e11edadf3cf0989995146b047267b89d_qdwyx1.jpg', aspectRatio: 4 / 5 },
    { id: '7', src: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1759864531/final_copy_nbbzs5.png', aspectRatio: 8 / 13 },
    { id: '8', src: 'https://res.cloudinary.com/dkcqakosa/image/upload/v1735663026/3_zhxycb.jpg', aspectRatio: 8 / 11 },
    { id: '9', src: 'https://res.cloudinary.com/dkcqakosa/image/upload/v1735663277/10_a8ykxb.jpg', aspectRatio: 2 / 3 },
    { id: '10', src: 'https://res.cloudinary.com/dkcqakosa/image/upload/v1735663248/8_iv5jkt.jpg', aspectRatio: 4 / 5 },
    { id: '11', src: 'https://res.cloudinary.com/dkcqakosa/image/upload/v1735663461/5_ro5xfw.jpg', aspectRatio: 8 / 13 },
    { id: '12', src: 'https://res.cloudinary.com/dkcqakosa/image/upload/v1735626061/WhatsApp_Image_2024-09-21_at_12.16.56_a649113a_bacmrp.jpg', aspectRatio: 8 / 11 },
    { id: '11', src: 'https://res.cloudinary.com/dkcqakosa/image/upload/v1735663461/5_ro5xfw.jpg', aspectRatio: 8 / 13 },
    { id: '12', src: 'https://res.cloudinary.com/dkcqakosa/image/upload/v1735626061/WhatsApp_Image_2024-09-21_at_12.16.56_a649113a_bacmrp.jpg', aspectRatio: 8 / 11 },
    { id: '11', src: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1759865095/Our_graphic_design_services_p05jqw.jpg', aspectRatio: 8 / 13 },
    { id: '12', src: 'https://res.cloudinary.com/drq4idzdj/image/upload/v1759865094/Graphic_design_Services_p6bceh.jpg', aspectRatio: 8 / 11 },
  ];

  // Repeat to create looping effect - distributed across 5 columns

  // Create 5 columns with distributed data
  const column1 = [...posterData.slice(0, 3), ...posterData.slice(0, 3), ...posterData.slice(0, 3)];
  const column2 = [...posterData.slice(3, 5), ...posterData.slice(3, 5), ...posterData.slice(3, 5)];
  const column3 = [...posterData.slice(5, 8), ...posterData.slice(5, 8), ...posterData.slice(5, 8)];
  const column4 = [...posterData.slice(8, 10), ...posterData.slice(8, 10), ...posterData.slice(8, 10)];
  const column5 = [...posterData.slice(10, 12), ...posterData.slice(10, 12), ...posterData.slice(10, 12)];

  const columns = [column1, column2, column3, column4, column5];
  const animationDirections = [
    { y: [0, -1200, 0], delay: 0 },
    { y: [-1200, 0, -1200], delay: 2 },
    { y: [0, -1200, 0], delay: 4 },
    { y: [-1200, 0, -1200], delay: 6 },
    { y: [0, -1200, 0], delay: 8 }
  ];

  return (
    <div
      className="w-full h-screen overflow-hidden bg-background relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Navigation />
      <div className="flex h-full">
        {columns.map((columnPosters, columnIndex) => (
          <div key={columnIndex} className="flex-1 relative overflow-hidden">
            <motion.div
              className="flex flex-col space-y-4 p-2"
              animate={{ y: animationDirections[columnIndex].y }}
              transition={{
                duration: isHovered ? 15 : 30,
                repeat: Infinity,
                ease: 'linear',
                delay: animationDirections[columnIndex].delay
              }}
            >
              {columnPosters.map((poster, index) => (
                <motion.div
                  key={`col${columnIndex}-${poster.id}-${index}`}
                  className="relative rounded-lg overflow-hidden shadow-lg break-inside-avoid"
                  whileHover={{ scale: 0.95, transition: { duration: 0.2 } }}
                >
                  <img
                    src={poster.src}
                    alt={`Poster ${poster.id}`}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Optional Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background/5 via-transparent to-background/5" />
    <Footer />
    </div>
      
  );
};

export default GraphicsShowcase;