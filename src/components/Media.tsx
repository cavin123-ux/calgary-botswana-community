import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, X, ChevronLeft, ChevronRight, Film, Sparkles, Eye } from 'lucide-react';
import { MEDIA_VIDEOS, VideoItem } from '../data';

export const Media: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [inlinePlayingId, setInlinePlayingId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  
  // Theater modal player state
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isModalPlaying, setIsModalPlaying] = useState(false);
  const [modalMuted, setModalMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const categories = ['All', 'Celebration', 'Traditional Songs', 'Anthem & Choral', 'Performance', 'Festival'];

  const filteredVideos = activeCategory === 'All'
    ? MEDIA_VIDEOS
    : MEDIA_VIDEOS.filter(v => v.category === activeCategory);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle modal video playback when selectedVideo changes
  useEffect(() => {
    if (selectedVideo && modalVideoRef.current) {
      modalVideoRef.current.currentTime = 0;
      // Start paused per guidelines: "Do not automatically play videos with sound."
      setIsModalPlaying(false);
      setCurrentTime(0);
    }
  }, [selectedVideo]);

  const handleOpenTheater = (video: VideoItem) => {
    // Pause any inline playing video first
    setInlinePlayingId(null);
    setSelectedVideo(video);
  };

  const handleCloseTheater = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setSelectedVideo(null);
    setIsModalPlaying(false);
  };

  const handleNextVideo = () => {
    if (!selectedVideo) return;
    const currentIndex = filteredVideos.findIndex(v => v.id === selectedVideo.id);
    const nextIndex = (currentIndex + 1) % filteredVideos.length;
    setSelectedVideo(filteredVideos[nextIndex]);
  };

  const handlePrevVideo = () => {
    if (!selectedVideo) return;
    const currentIndex = filteredVideos.findIndex(v => v.id === selectedVideo.id);
    const prevIndex = (currentIndex - 1 + filteredVideos.length) % filteredVideos.length;
    setSelectedVideo(filteredVideos[prevIndex]);
  };

  const toggleModalPlay = () => {
    if (!modalVideoRef.current) return;
    if (modalVideoRef.current.paused) {
      modalVideoRef.current.play();
      setIsModalPlaying(true);
    } else {
      modalVideoRef.current.pause();
      setIsModalPlaying(false);
    }
  };

  const toggleModalMute = () => {
    if (!modalVideoRef.current) return;
    modalVideoRef.current.muted = !modalVideoRef.current.muted;
    setModalMuted(modalVideoRef.current.muted);
  };

  const handleModalTimeUpdate = () => {
    if (modalVideoRef.current) {
      setCurrentTime(modalVideoRef.current.currentTime);
      setDuration(modalVideoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (modalVideoRef.current) {
      modalVideoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatSeconds = (sec: number) => {
    if (isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section id="media" aria-labelledby="media-title" className="relative bg-brand py-20 text-cream md:py-28 border-t border-cream/15">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              <Film className="size-3.5" />
              <span>Watch & Listen · Community in Motion</span>
            </div>
            <h2 id="media-title" className="mt-4 font-display text-4xl font-bold md:text-5xl text-cream">
              Video & Cultural Media
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-cream/70">
            Browse genuine moments of song, traditional ululations, Boipuso circle dances, and celebratory line dances from Calgary Botswana Community Association events.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-cream/10 pb-5" role="tablist" aria-label="Filter media by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gold text-brand font-semibold shadow-md'
                  : 'bg-cream/5 text-cream/75 hover:bg-cream/15 hover:text-cream'
              }`}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => {
            const isPlayingInline = inlinePlayingId === video.id;

            return (
              <article
                key={video.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-cream/15 bg-cream/[0.03] transition-all hover:border-gold/40 hover:bg-cream/[0.06] hover:shadow-xl"
              >
                {/* Media Container / Player */}
                <div className="relative aspect-[9/14] w-full overflow-hidden bg-black/60 sm:aspect-[4/5] md:aspect-[3/4]">
                  {isPlayingInline ? (
                    <div className="relative size-full">
                      <video
                        src={video.videoUrl}
                        poster={video.thumbnailUrl}
                        controls
                        autoPlay
                        playsInline
                        muted={isMuted}
                        className="size-full object-contain bg-black"
                        onEnded={() => setInlinePlayingId(null)}
                      />
                      <button
                        type="button"
                        onClick={() => setInlinePlayingId(null)}
                        className="absolute right-3 top-3 z-10 rounded-full bg-brand/80 p-1.5 text-cream/80 backdrop-blur-sm hover:text-white"
                        aria-label="Close inline video"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="relative size-full">
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/30 to-transparent" />
                      
                      {/* Duration & Tag Badges */}
                      <div className="absolute left-3 top-3 flex items-center gap-2">
                        <span className="rounded-md bg-brand/85 px-2 py-0.5 text-[11px] font-semibold text-gold backdrop-blur-sm">
                          {video.tag}
                        </span>
                      </div>
                      <div className="absolute right-3 top-3">
                        <span className="rounded-md bg-black/70 px-2 py-0.5 text-[11px] font-mono text-cream backdrop-blur-sm">
                          {video.duration}
                        </span>
                      </div>

                      {/* Centered Play Trigger */}
                      <div className="absolute inset-0 flex items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => {
                            setInlinePlayingId(video.id);
                          }}
                          className="flex size-14 items-center justify-center rounded-full bg-gold/90 text-brand shadow-lg transition-transform hover:scale-110 active:scale-95"
                          aria-label={`Play ${video.title} directly`}
                        >
                          <Play className="size-6 translate-x-0.5 fill-current" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleOpenTheater(video)}
                          className="flex size-11 items-center justify-center rounded-full bg-cream/20 text-cream backdrop-blur-md transition-transform hover:bg-cream/30 hover:scale-105"
                          title="Open in Theater Mode"
                          aria-label={`Open ${video.title} in theater mode`}
                        >
                          <Maximize className="size-4" />
                        </button>
                      </div>

                      {/* Category Label at bottom of preview */}
                      <div className="absolute bottom-3 left-3 text-xs font-semibold text-gold/90">
                        {video.category}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Content & Captions */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold text-cream group-hover:text-gold transition-colors">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-cream/70 line-clamp-3">
                      {video.caption}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-cream/10 pt-3">
                    <span className="text-[11px] text-cream/50">
                      {video.date}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleOpenTheater(video)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:underline"
                    >
                      <span>Theater View</span>
                      <Maximize className="size-3" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Feature Banner: Cultural Note */}
        <div className="mt-14 rounded-2xl border border-cream/15 bg-cream/[0.02] p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Sparkles className="size-5" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-cream">
                  Sharing the Spirit of Botswana in Calgary
                </h4>
                <p className="mt-1 text-xs text-cream/70 leading-relaxed max-w-2xl">
                  These recordings reflect community members gathering to celebrate Boipuso (Botswana Independence), AfriFest Calgary performances, and cultural heritage song traditions. If you have videos or archival recordings to contribute, we welcome your stories!
                </p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-gold/40 px-5 py-2.5 text-xs font-semibold text-gold transition-colors hover:bg-gold hover:text-brand"
            >
              Share Your Media
            </a>
          </div>
        </div>
      </div>

      {/* Theater Mode Modal Viewer */}
      {selectedVideo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-video-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md"
        >
          <div className="relative flex max-h-[95vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-cream/20 bg-brand/95 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-cream/15 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="rounded bg-gold/20 px-2 py-0.5 text-[11px] font-semibold text-gold">
                  {selectedVideo.category}
                </span>
                <h3 id="modal-video-title" className="font-display text-sm sm:text-base font-semibold text-cream truncate max-w-xs sm:max-w-md">
                  {selectedVideo.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleCloseTheater}
                className="rounded-full p-2 text-cream/70 transition-colors hover:bg-cream/15 hover:text-cream"
                aria-label="Close theater mode"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Video Player Display */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[320px] max-h-[60vh]">
              <video
                ref={modalVideoRef}
                src={selectedVideo.videoUrl}
                poster={selectedVideo.thumbnailUrl}
                playsInline
                muted={modalMuted}
                onTimeUpdate={handleModalTimeUpdate}
                onEnded={() => setIsModalPlaying(false)}
                className="max-h-[60vh] w-auto max-w-full object-contain mx-auto"
              />

              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={handlePrevVideo}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-brand/70 p-2 text-cream/80 backdrop-blur-sm transition-all hover:bg-brand hover:text-gold"
                aria-label="Previous video"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={handleNextVideo}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-brand/70 p-2 text-cream/80 backdrop-blur-sm transition-all hover:bg-brand hover:text-gold"
                aria-label="Next video"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>

            {/* Video Controls Bar */}
            <div className="border-t border-cream/15 bg-brand px-5 py-4">
              {/* Progress Slider */}
              <div className="mb-3 flex items-center gap-3">
                <span className="text-[11px] font-mono text-cream/60 min-w-9">
                  {formatSeconds(currentTime)}
                </span>
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  className="h-1.5 flex-1 cursor-pointer appearance-none rounded-lg bg-cream/20 accent-gold"
                  aria-label="Video timeline scrubber"
                />
                <span className="text-[11px] font-mono text-cream/60 min-w-9">
                  {formatSeconds(duration)}
                </span>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Play / Mute Controls */}
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={toggleModalPlay}
                    className="flex size-10 items-center justify-center rounded-full bg-gold text-brand font-bold transition-transform hover:scale-105 active:scale-95"
                    aria-label={isModalPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isModalPlaying ? <Pause className="size-5 fill-current" /> : <Play className="size-5 translate-x-0.5 fill-current" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleModalMute}
                    className="flex size-9 items-center justify-center rounded-full bg-cream/10 text-cream/80 transition-colors hover:bg-cream/20 hover:text-cream"
                    aria-label={modalMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {modalMuted ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
                  </button>
                  <span className="hidden sm:inline text-xs text-cream/60">
                    {selectedVideo.date}
                  </span>
                </div>

                {/* Caption & Navigation Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrevVideo}
                    className="rounded-lg border border-cream/20 px-3 py-1.5 text-xs text-cream/80 hover:border-gold hover:text-gold"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNextVideo}
                    className="rounded-lg border border-cream/20 px-3 py-1.5 text-xs text-cream/80 hover:border-gold hover:text-gold"
                  >
                    Next
                  </button>
                </div>
              </div>

              {/* Caption */}
              <p className="mt-3 text-xs leading-relaxed text-cream/70 border-t border-cream/10 pt-3">
                {selectedVideo.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
