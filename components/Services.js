function Services() {
  const services = [
    {
      icon: 'https://plus.unsplash.com/premium_photo-1723489242223-865b4a8cf7b8?w=600&auto=format&fit=crop&q=60',
      title: 'Konsultasi dan Desain ',
      description:
        'Analisis Kebutuhan, Desain Skematik dan Tata Letak (CAD), Pemilihan Komponen dan Material, Perhitungan Teknis.',
    },
    {
      icon: 'https://images.unsplash.com/photo-1709804250377-27ce2d57209e?w=600&auto=format&fit=crop&q=60',
      title: 'Fabrikasi dan Perakitan',
      description:
        'Pembuatan Box Panel Kustom, Pengadaan Material, Perakitan dan Pengkabelan (Wiring).',
    },
    {
      icon: 'https://plus.unsplash.com/premium_photo-1683141455361-f1420cc02b8a?w=600&auto=format&fit=crop&q=60',
      title: 'Pengujian dan Jaminan Kualitas',
      description:
        'Pengujian Mutu (Quality Assurance), Factory Acceptance Test (FAT), Sertifikasi.',
    },
    {
      icon: 'https://plus.unsplash.com/premium_photo-1678766818924-1c15a95c77be?w=600&auto=format&fit=crop&q=60',
      title: 'Instalasi dan Purna Jual',
      description:
        'Pengiriman dan Logistik, Instalasi di Lokasi, Komisioning dan Startup, Layanan Purna Jual dan Garansi, Pemeliharaan Terjadwal.',
    },
  ];

  return (
    <section
      id='services'
      className='py-24 bg-slate-50'
      data-name='services'
      data-file='components/Services.js'
    >
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {/* Header Section */}
        <div className='text-center max-w-3xl mx-auto mb-20'>
          <div className='inline-block px-4 py-1.5 mb-4 text-red-600 bg-red-50 rounded-full text-sm font-bold uppercase tracking-[0.2em]'>
            Layanan Kami
          </div>
          <h2 className='text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight'>
            Solusi Panel Listrik Komprehensif
          </h2>
          <div className='w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full'></div>
          <p className='text-gray-600 text-lg leading-relaxed'>
            Kami menyediakan jasa pembuatan (panel maker) dan instalasi dengan
            komponen berkualitas tinggi dari brand terkemuka.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100 flex flex-col h-full'
            >
              {/* Image Container dengan Overlay */}
              <div className='relative h-48 overflow-hidden'>
                <img
                  src={service.icon}
                  alt={service.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent'></div>
                <div className='absolute bottom-4 left-4'>
                  <div className='w-10 h-1 bg-red-600 rounded-full transition-all duration-500 group-hover:w-20'></div>
                </div>
              </div>

              {/* Content Container */}
              <div className='p-6 flex-grow flex flex-col'>
                <h3 className='text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300'>
                  {service.title}
                </h3>
                <p className='text-gray-500 text-sm leading-relaxed mb-6'>
                  {service.description}
                </p>

                {/* Decorative Bottom Link (Optional Visual) */}
                <div className='mt-auto pt-4 border-t border-slate-50 flex items-center text-red-600 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  Info Selengkapnya <span className='ml-2'>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
