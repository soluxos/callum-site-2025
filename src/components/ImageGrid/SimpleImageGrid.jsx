"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const ImageGrid = ({ images = [], className = "" }) => {
  const [imageErrors, setImageErrors] = useState(new Set());

  // Fallback colors for when images fail
  const fallbackColors = [
    "#191E16",
    "#2E312C",
    "#1D211B",
    "#1D241A",
    "#262A21",
    "#1A1F17",
    "#333833",
    "#242821",
    "#1F2419",
  ];

  // Handle image load errors
  const handleImageError = index => {
    setImageErrors(prev => new Set([...prev, index]));
  };

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  // Create 9 grid items
  const gridItems = Array(9)
    .fill(null)
    .map((_, index) => {
      // Use provided images first, then fallback colors for remaining slots
      const imageObj = images[index] || null;
      const hasError = imageErrors.has(index);
      const fallbackColor = fallbackColors[index];

      return {
        index,
        image: imageObj,
        hasError,
        fallbackColor,
        shouldShowImage: imageObj && imageObj.src && !hasError,
      };
    });

  return (
    <div className={`grid grid-cols-3 grid-rows-3 w-full aspect-square ${className}`}>
      {gridItems.map(({ index, image, hasError, fallbackColor, shouldShowImage }) => (
        <motion.div
          key={index}
          custom={index}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className="relative overflow-hidden cursor-pointer"
        >
          {shouldShowImage ? (
            <Image
              src={image.src}
              alt={image.alt || `Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="33vw"
              quality={90}
              onError={() => handleImageError(index)}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: fallbackColor }}
            ></div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;
