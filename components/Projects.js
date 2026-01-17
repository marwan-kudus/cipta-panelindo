function Projects() {
  const projects = [
    {
      image: '/trickle/images/panel listrik mdp.jpg',
      title: 'Main Distribution Panel - MDP',
      category: 'Electrical Power Distribution',
      client: 'PT Manufaktur Maju Jaya',
    },
    {
      image: '/trickle/images/panel listrik mcc.jpg',
      title: 'Panel MCC',
      category: 'Industrial Motor Control',
      client: 'PT Solo Tekstil Manufaktur',
    },
    {
      image: '/trickle/images/automatic transfer switch.jpg',
      title: 'Automatic Transfer Switch',
      category: 'Electrical Power Management',
      client: 'Building Management System (BMS) PT Graha Indah',
    },
  ];

  return (
    <section id='project' className='py-24 bg-slate-50' data-name='project'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
          <div className='max-w-2xl'>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-10 h-[2px] bg-red-600'></div>
              <span className='text-red-600 font-bold uppercase tracking-[0.2em] text-xs'>
                Portofolio
              </span>
            </div>
            <h2 className='text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight'>
              Proyek Unggulan Kami
            </h2>
          </div>
          <button className='group text-slate-600 font-bold flex items-center gap-3 hover:text-red-600 transition-all'>
            Lihat Semua Proyek
            <i className='fas fa-arrow-right transition-transform group-hover:translate-x-2'></i>
          </button>
        </div>

        {/* Project Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-white aspect-[3/4]'
            >
              {/* Image Layer - Dibuat Lebih Terang */}
              <div className='absolute inset-0 bg-slate-200'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover opacity-100 transition-all duration-700 group-hover:scale-105'
                />
              </div>

              {/* Gradient Overlay - Dibuat lebih transparan agar gambar asli terlihat */}
              <div className='absolute inset-0 z-10 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500'></div>

              {/* Category Badge */}
              <div className='absolute top-5 left-5 z-20'>
                <span className='px-4 py-1.5 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg shadow-lg'>
                  {project.category}
                </span>
              </div>

              {/* Content Overlay */}
              <div className='absolute inset-0 z-20 flex flex-col justify-end p-8'>
                <div className='transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                  <h3 className='text-white text-2xl font-bold mb-3 leading-tight'>
                    {project.title}
                  </h3>

                  {/* Expandable Info */}
                  <div className='max-h-0 opacity-0 overflow-hidden group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500'>
                    <div className='w-12 h-1 bg-red-500 mb-4 rounded-full'></div>
                    <p className='text-slate-200 text-sm leading-relaxed'>
                      <span className='text-slate-400 block text-[10px] uppercase tracking-wider mb-1'>
                        Klien:
                      </span>
                      {project.client}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Icon */}
              <div className='absolute top-5 right-5 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0'>
                <div className='w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white'>
                  <i className='fas fa-plus text-sm'></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Dibuat Lebih Clean */}
        <div className='mt-20 relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl'>
          <div className='absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full -mr-32 -mt-32'></div>

          <div className='relative z-10 px-8 py-12 md:px-16 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-10'>
            <div className='text-center lg:text-left space-y-4 max-w-xl'>
              <h3 className='text-3xl md:text-4xl font-bold text-slate-900'>
                Butuh Penawaran Harga?
              </h3>
              <p className='text-slate-600 text-lg'>
                Konsultasikan kebutuhan spesifikasi panel Anda, kami berikan
                penawaran terbaik yang efisien dan aman.
              </p>
            </div>
            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }
              className='group relative bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-red-200 hover:-translate-y-1 active:scale-95'
            >
              Minta Penawaran Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
