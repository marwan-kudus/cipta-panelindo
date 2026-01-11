function Projects() {
  const projects = [
    {
      image: '/trickle/images/box1.jpg',
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
      image: '/trickle/images/box7.jpg',
      title: 'Automatic Transfer Switch',
      category: 'Electrical Power Management',
      client: 'Building Management System (BMS) PT Graha Indah',
    },
  ];

  return (
    <section
      id='project'
      className='py-24 bg-white'
      data-name='project'
      data-file='components/Projects.js'
    >
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
          <button className='group text-red-600 font-bold flex items-center gap-3 hover:text-red-700 transition-all border-b-2 border-transparent hover:border-red-600 pb-1'>
            Lihat Semua Proyek
            <i className='fas fa-arrow-right transition-transform group-hover:translate-x-2'></i>
          </button>
        </div>

        {/* Project Grid */}
        <div className='grid md:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-2xl shadow-lg bg-slate-900 aspect-[3/4]'
            >
              {/* Image Layer */}
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-40'
              />

              {/* Category Badge - Always Visible */}
              <div className='absolute top-4 left-4 z-20'>
                <span className='px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-full'>
                  {project.category}
                </span>
              </div>

              {/* Content Overlay */}
              <div className='absolute inset-0 z-10 flex flex-col justify-end p-8 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                <h3 className='text-white text-2xl font-bold mb-3 leading-tight opacity-90 group-hover:opacity-100 transition-opacity'>
                  {project.title}
                </h3>

                {/* Expandable Info on Hover */}
                <div className='max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500'>
                  <div className='w-12 h-1 bg-red-600 mb-4 rounded-full'></div>
                  <p className='text-slate-300 text-sm font-medium'>
                    <span className='text-slate-500 mr-2 uppercase text-[10px] tracking-tighter'>
                      Klien:
                    </span>
                    {project.client}
                  </p>
                </div>
              </div>

              {/* Decorative Corner Icon */}
              <div className='absolute top-6 right-6 text-white/0 group-hover:text-white/100 transition-all duration-500 translate-x-4 group-hover:translate-x-0'>
                <i className='fas fa-external-link-alt text-xl'></i>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='mt-20 relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl'>
          {/* Animated Background Elements */}
          <div className='absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[100px] -mr-48 -mt-48'></div>
          <div className='absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] -ml-32 -mb-32'></div>

          <div className='relative z-10 px-8 py-12 md:px-16 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-10 border border-white/5'>
            <div className='text-center lg:text-left space-y-4 max-w-xl'>
              <h3 className='text-3xl md:text-4xl font-bold text-white'>
                Butuh Penawaran Harga?
              </h3>
              <p className='text-slate-400 text-lg'>
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
              className='relative group bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-red-900/20 active:scale-95 whitespace-nowrap'
            >
              <span className='relative z-10'>Minta Penawaran Sekarang</span>
              <div className='absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-xl'></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
