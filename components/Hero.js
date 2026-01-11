function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      image: '/trickle/images/box1.jpg',
      title: 'Ahlinya Pembuatan Box Panel Listrik',
      subtitle:
        'Solusi panel maker profesional untuk kebutuhan industri dan gedung bertingkat dengan standar keamanan tinggi.',
      cta: 'Lihat Layanan Kami',
    },
    {
      image: '/trickle/images/box2.jpg',
      title: 'Teknisi Berpengalaman & Bersertifikat',
      subtitle:
        'Kami menjamin kualitas perakitan dan instalasi panel dengan tim teknisi yang handal dan presisi.',
      cta: 'Konsultasi Gratis',
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section
      id='home'
      className='relative h-[600px] md:h-[700px] flex items-center bg-slate-900 overflow-hidden'
      data-name='hero'
      data-file='components/Hero.js'
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-50' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-r from-slate-500 via-slate-500/50 to-transparent'></div>
        </div>
      ))}

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 md:px-8 max-w-7xl pt-20'>
        <div className='max-w-2xl text-white space-y-6 animate-fade-in-up'>
          {/* BAGIAN YANG DIPERBAIKI: Menggunakan bg-red-600 dan rounded-md/full */}
          <div className='inline-block px-4 py-1.5 bg-red-600 rounded-md text-xs md:text-sm font-bold tracking-wider uppercase mb-2 shadow-lg'>
            Professional Panel Maker
          </div>

          <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
            {slides[currentSlide].title}
          </h1>
          {/* ... sisa kode lainnya */}
          <p className='text-lg text-gray-300 md:text-xl'>
            {slides[currentSlide].subtitle}
          </p>
          <div className='flex flex-col sm:flex-row gap-4 pt-4'>
            <button
              onClick={() =>
                document
                  .getElementById('services')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className='btn-primary border-none'
            >
              {slides[currentSlide].cta}
              <div className='icon-arrow-right'></div>
            </button>
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className='px-6 py-3 rounded-md font-medium text-white font-semibold bg-green-500 hover:bg-green-700 hover:text-slate-900 transition-colors'
            >
              Hubungi WhatsApp
            </button>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className='absolute bottom-8 right-8 md:right-12 flex gap-2 z-20'>
        <button
          onClick={prevSlide}
          className='p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all'
        >
          <div className='icon-chevron-left text-xl'></div>
        </button>
        <button
          onClick={nextSlide}
          className='p-2 rounded-full border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all'
        >
          <div className='icon-chevron-right text-xl'></div>
        </button>
      </div>

      {/* Indicators */}
      <div className='absolute bottom-8 left-8 md:left-12 flex gap-2 z-20'>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentSlide
                ? 'w-8 bg-[var(--secondary-color)]'
                : 'w-2 bg-white/50'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
