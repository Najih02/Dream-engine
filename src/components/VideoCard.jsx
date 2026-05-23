import { useEffect, useRef } from 'react';

const fallbackTitles = [
  'TOMFO WOOD',
  'VICTORIES',
  'PRIMUS',
  'Machine Desire',
  'Synthetic Light',
  'Cinema Seed',
];

function VideoCard({ video, index, isActive = false }) {
  const videoRef = useRef(null);
  const title = video.title || fallbackTitles[index];
  const category = video.category || 'Dream Engine';

  useEffect(() => {
    if (!videoRef.current) return;

    if (isActive && video.src) {
      videoRef.current.play().catch(() => {});
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }, [isActive, video.src]);

  return (
    <article
      className={`video-card${isActive ? ' is-active' : ''}`}
      data-animate
      aria-label={`${title} portfolio video`}
    >
      {video.poster ? (
        <img
          className="poster"
          src={video.poster}
          alt={title}
          loading="lazy"
          width="520"
          height="300"
        />
      ) : (
        <div className="poster poster-placeholder" role="img" aria-label={title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
        </div>
      )}
      {video.src && (
        <video ref={videoRef} src={video.src} muted loop playsInline preload="metadata" />
      )}
      <div className="card-overlay" />
      <div className="card-info">
        <span className="card-category">{category}</span>
        <h3 className="card-title">{title}</h3>
      </div>
    </article>
  );
}

export default VideoCard;
