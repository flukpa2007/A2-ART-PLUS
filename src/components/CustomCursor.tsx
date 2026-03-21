import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const checkHover = () => {
      const hoveredElement = document.querySelector(':hover');
      if (
        hoveredElement?.tagName === 'A' ||
        hoveredElement?.tagName === 'BUTTON' ||
        hoveredElement?.getAttribute('role') === 'button' ||
        hoveredElement?.classList.contains('group')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', checkHover);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', checkHover);
    };
  }, []);

  const offset = 12; 

  return (
    <motion.div
      className="fixed top-0 left-0 z-[1000] pointer-events-none rounded-full backdrop-blur-sm border-2 border-red-600 bg-red-600/10 shadow-lg shadow-red-600/20"
      animate={{
        x: mousePosition.x - offset,
        y: mousePosition.y - offset,

        scale: isHovering ? 2 : 1,
        opacity: isHovering ? 0.3 : 1,
      }}
      transition={{
        type: 'tween',
        ease: 'linear',
        duration: 0
      }}
      style={{
        width: '24px',
        height: '24px',
        display: typeof window !== 'undefined' && window.innerWidth > 768 ? 'block' : 'none'
      }}
    />
  );
};

export default CustomCursor;