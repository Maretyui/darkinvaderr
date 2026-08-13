const images = [
  { src: '/car-black.png', alt: 'Black car' },
  { src: '/red-outfit.png', alt: 'Custom character outfit' },
  { src: '/garage.png', alt: 'Community garage' },
  { src: '/car-fancy.png', alt: 'Modified car' },
  { src: '/plane-people.png', alt: 'Members flying together' },
  { src: '/image.png', alt: 'Community showcase' },
];

function CarouselTile({
  src,
  alt,
  decorative,
}: {
  src: string;
  alt: string;
  decorative?: boolean;
}) {
  return (
    <div
      className="mx-2 flex-none overflow-hidden rounded-lg bg-[#181828] shadow-[0_4px_24px_rgba(0,0,0,0.25)] md:mx-4"
      aria-hidden={decorative || undefined}
    >
      <div
        role={decorative ? undefined : "img"}
        aria-label={decorative ? undefined : alt}
        className="h-[120px] w-[120px] bg-cover bg-center bg-no-repeat transition-transform duration-300 hover:scale-105 sm:h-[180px] sm:w-[180px] md:h-[270px] md:w-[300px]"
        style={{ backgroundImage: `url(${src})` }}
      />
    </div>
  );
}

function ImageCarousel() {
  return (
    <section className="relative left-1/2 right-1/2 mb-8 mt-24 flex w-[100vw] -translate-x-1/2 justify-center overflow-hidden bg-none p-0">
      <div className="relative w-[100vw] overflow-hidden py-8 md:py-4">
        <div className="flex w-fit animate-[image-carousel-scroll_40s_linear_infinite] items-center">
          {images.map(({ src, alt }, idx) => (
            <CarouselTile key={`original-${idx}`} src={src} alt={alt} />
          ))}
          {/* Duplicate set purely to make the scroll loop seamless - hidden
              from assistive tech so images aren't announced twice. */}
          {images.map(({ src, alt }, idx) => (
            <CarouselTile key={`duplicate-${idx}`} src={src} alt={alt} decorative />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageCarousel;