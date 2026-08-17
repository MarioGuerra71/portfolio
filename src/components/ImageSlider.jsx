import { useState } from "react";

export default function ImageSlider({ images, alt }) {
  const [index, setIndex] = useState(0);
  if (!images || images.length === 0) return null;

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="mt-8">
      <div className="relative rounded-xl overflow-hidden border border-border bg-bg">
        <img
          src={images[index]}
          alt={`${alt} - captura ${index + 1}`}
          className="w-full max-h-[520px] object-contain"
        />
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-border flex items-center justify-center text-ink hover:text-accent shadow-sm"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Siguiente"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-border flex items-center justify-center text-ink hover:text-accent shadow-sm"
            >
              ›
            </button>
            <span className="absolute bottom-2 right-3 font-mono text-[11px] bg-black/60 text-white px-2 py-0.5 rounded-full">
              {index + 1} / {images.length}
            </span>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setIndex(i)}
              className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 ${
                i === index ? "border-accent" : "border-border"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}