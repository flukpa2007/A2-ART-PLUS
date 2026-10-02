import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = cursor.current;
    if (!element) return;
    const media = window.matchMedia('(min-width: 769px) and (pointer: fine)');
    let frame = 0, x = 0, y = 0;
    const draw = () => {
      frame = 0;
      element.style.transform = `translate3d(${x - 12}px, ${y - 12}px, 0)`;
    };
    const move = (event: MouseEvent) => {
      if (!media.matches) return;
      x = event.clientX; y = event.clientY;
      element.dataset.visible = 'true';
      element.dataset.hover = String(event.target instanceof Element && Boolean(event.target.closest('a, button, [role="button"], canvas')));
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const hide = () => { element.dataset.visible = 'false'; };
    window.addEventListener('mousemove', move, { passive: true });
    document.documentElement.addEventListener('mouseleave', hide);
    window.addEventListener('blur', hide);
    media.addEventListener('change', hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', move);
      document.documentElement.removeEventListener('mouseleave', hide);
      window.removeEventListener('blur', hide);
      media.removeEventListener('change', hide);
    };
  }, []);
  return <div ref={cursor} className="a2-cursor" aria-hidden="true"><span /></div>;
}
