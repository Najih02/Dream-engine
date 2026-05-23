import { useEffect, useRef, useState } from 'react';

function CustomCursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateTarget = (event) => {
      target.current = { x: event.clientX, y: event.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
      }
    };

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;

      if (circleRef.current) {
        circleRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    const onPointerOver = (event) => {
      if (event.target.closest('a, button, .video-card')) setIsHovering(true);
    };

    const onPointerOut = (event) => {
      if (event.target.closest('a, button, .video-card')) setIsHovering(false);
    };

    window.addEventListener('mousemove', updateTarget);
    document.addEventListener('mouseover', onPointerOver);
    document.addEventListener('mouseout', onPointerOut);
    const frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateTarget);
      document.removeEventListener('mouseover', onPointerOver);
      document.removeEventListener('mouseout', onPointerOut);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <span className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <span
        className={`cursor-circle${isHovering ? ' is-hovering' : ''}`}
        ref={circleRef}
        aria-hidden="true"
      />
    </>
  );
}

export default CustomCursor;
