import { useCallback, useEffect, useRef, useState } from 'react';
import { VIDEOS } from '../config.js';
import VideoCard from './VideoCard.jsx';

function Portfolio() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const activeIndexRef = useRef(0);
  const wheelBuffer = useRef(0);
  const isPointerInside = useRef(false);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = VIDEOS.length - 1;

  const centerActiveCard = useCallback((index) => {
    const track = trackRef.current;
    const activeCard = track?.children[index];
    if (!track || !activeCard) return;

    const cardCenter = activeCard.offsetLeft + activeCard.offsetWidth / 2;
    const viewportCenter = window.innerWidth / 2;
    track.style.transform = `translate3d(${viewportCenter - cardCenter}px, 0, 0)`;
  }, []);

  const setCarouselIndex = useCallback(
    (index) => {
      const nextIndex = Math.min(lastIndex, Math.max(0, index));
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
      setProgress(lastIndex === 0 ? 1 : nextIndex / lastIndex);
      centerActiveCard(nextIndex);
    },
    [centerActiveCard, lastIndex],
  );

  useEffect(() => {
    setCarouselIndex(activeIndexRef.current);

    const onResize = () => centerActiveCard(activeIndexRef.current);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [centerActiveCard, setCarouselIndex]);

  useEffect(() => {
    const onWheel = (event) => {
      const section = sectionRef.current;
      if (!section || !isPointerInside.current) return;

      const rect = section.getBoundingClientRect();
      const sectionIsActive = rect.top < window.innerHeight * 0.65 && rect.bottom > window.innerHeight * 0.35;
      if (!sectionIsActive) return;

      const direction = event.deltaY > 0 ? 1 : -1;
      const index = activeIndexRef.current;
      const shouldCapture = (direction > 0 && index < lastIndex) || (direction < 0 && index > 0);
      if (!shouldCapture) return;

      event.preventDefault();
      event.stopPropagation();
      wheelBuffer.current += event.deltaY;

      if (Math.abs(wheelBuffer.current) < 42) return;

      setCarouselIndex(index + (wheelBuffer.current > 0 ? 1 : -1));
      wheelBuffer.current = 0;
    };

    window.addEventListener('wheel', onWheel, { passive: false, capture: true });
    return () => window.removeEventListener('wheel', onWheel, { capture: true });
  }, [lastIndex, setCarouselIndex]);

  return (
    <section
      className="portfolio"
      id="work"
      aria-labelledby="work-title"
      ref={sectionRef}
    >
      <div className="portfolio-sticky">
        <div className="section-header theatre-header">
          <p className="section-label" data-animate>
            SELECTED WORK
          </p>
          <h2 id="work-title" data-animate>
            Works
          </h2>
        </div>
        <div
          className="carousel-stage"
          onMouseEnter={() => {
            isPointerInside.current = true;
          }}
          onMouseLeave={() => {
            isPointerInside.current = false;
            wheelBuffer.current = 0;
          }}
        >
          <div className="portfolio-carousel" ref={trackRef}>
            {VIDEOS.map((video, index) => (
              <VideoCard
                video={video}
                index={index}
                isActive={index === activeIndex}
                key={`video-${index}`}
              />
            ))}
          </div>
        </div>
        <div className="reel-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
