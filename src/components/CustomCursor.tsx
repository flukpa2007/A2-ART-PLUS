import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  // สถานะว่าเมาส์กำลัง Hover อยู่บนปุ่มหรือรูปหรือไม่
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    // เช็คว่าเมาส์กำลังวางอยู่บน element ที่กดได้หรือไม่ (a, button, [role=button])
    const checkHover = () => {
      const hoveredElement = document.querySelector(':hover');
      if (
        hoveredElement?.tagName === 'A' ||
        hoveredElement?.tagName === 'BUTTON' ||
        hoveredElement?.getAttribute('role') === 'button' ||
        hoveredElement?.classList.contains('group') // สำหรับการ์ดผลงาน
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', checkHover); // ตรวจสอบตอนเมาส์เคลื่อนที่ผ่าน

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', checkHover);
    };
  }, []);

  // ค่า offset เพื่อให้ Cursor อยู่ตรงกลางหัวลูกศร
  const offset = 12; // ครึ่งหนึ่งของขนาด cursor ปกติ

  return (
    // motion.div จาก Framer Motion จะทำให้ cursor วิ่งตามนุ่มมากครับ
    <motion.div
      className="fixed top-0 left-0 z-[1000] pointer-events-none rounded-full backdrop-blur-sm border-2 border-red-600 bg-red-600/10 shadow-lg shadow-red-600/20"
      animate={{
        x: mousePosition.x - offset,
        y: mousePosition.y - offset,
        // ปรับขนาดตอน Hover
        scale: isHovering ? 2 : 1, // ขยาย 2 เท่าตอน Hover
        opacity: isHovering ? 0.3 : 1, // จางลงเล็กน้อยตอน Hover
      }}
      transition={{
        type: 'tween',
        ease: 'linear',
        duration: 0
      }}
      style={{
        width: '24px', // ขนาดปกติ
        height: '24px',
        // ให้ Cursor แสดงเฉพาะในหน้าจอคอมพิวเตอร์ (ไม่โชว์ในมือถือ)
        display: typeof window !== 'undefined' && window.innerWidth > 768 ? 'block' : 'none'
      }}
    />
  );
};

export default CustomCursor;