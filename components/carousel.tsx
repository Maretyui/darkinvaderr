const images = [
  '/car-black.png',
  '/red-outfit.png',
  '/garage.png',
  '/plane-fancy.png',
  '/plane-people.png',
  '/image.png',
];

function ImageCarousel() {
  const carouselImages = [...images, ...images];

  return (
    <section className="relative left-1/2 right-1/2 mb-8 mt-24 flex w-[100vw] -translate-x-1/2 justify-center overflow-hidden bg-none p-0">
      <div className="relative w-[100vw] overflow-hidden py-8 md:py-4">
        <div className="flex w-fit animate-[image-carousel-scroll_40s_linear_infinite] items-center">
          {carouselImages.map((src, idx) => (
            <div 
              key={idx} 
              className="mx-2 flex-none overflow-hidden rounded-lg bg-[#181828] shadow-[0_4px_24px_rgba(0,0,0,0.25)] md:mx-4"
            >
              <div
                role="img"
                aria-label="Staff car"
                className="h-[120px] w-[120px] bg-cover bg-center bg-no-repeat transition-transform duration-300 hover:scale-105 sm:h-[180px] sm:w-[180px] md:h-[270px] md:w-[300px]"
                style={{ backgroundImage: `url(${src})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ImageCarousel;