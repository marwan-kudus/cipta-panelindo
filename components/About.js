function About() {
  return (
    <section
      id='about'
      className='py-20 bg-slate-50'
      data-name='about'
      data-file='components/About.js'
    >
      <div className='container mx-auto px-4 max-w-7xl'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Kolom Kiri: Konten Teks */}
          <div className='space-y-8'>
            <div className='space-y-4'>
              <div className='flex items-center gap-3 text-red-600 font-bold uppercase tracking-widest text-sm'>
                <div className='w-10 h-[2px] bg-red-600'></div>
                Tentang Kami
              </div>
              <h2 className='text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight'>
                Mitra Terpercaya untuk Solusi Elektrikal Industri
              </h2>
              <div className='space-y-4 text-gray-600 leading-relaxed'>
                <p>
                  <span className='font-bold text-slate-800'>
                    Cipta Panelindo
                  </span>{' '}
                  adalah perusahaan yang bergerak di bidang spesialis pembuatan
                  Box Panel (Panel Maker) dan kontraktor elektrikal. Kami
                  berdedikasi untuk memberikan solusi kelistrikan terbaik dengan
                  standar keamanan dan kualitas yang tinggi.
                </p>
                <p>
                  Dengan pengalaman bertahun-tahun, kami telah melayani berbagai
                  sektor industri, perkantoran, hingga residensial. Komitmen
                  kami adalah kepuasan pelanggan melalui pengerjaan yang
                  presisi, tepat waktu, dan layanan purna jual yang responsif.
                </p>
              </div>
            </div>

            {/* Bagian Visi Misi dengan Card */}
            <div className='pt-6 space-y-6'>
              <div className='flex items-center gap-3 text-red-600 font-bold uppercase tracking-widest text-sm'>
                <div className='w-10 h-[2px] bg-red-600'></div>
                Visi & Misi
              </div>
              <p className='text-gray-600 italic border-l-4 border-slate-200 pl-4'>
                Posisi dan peran Cipta Panelindo dalam konteks pengelolaan
                industri Switchboard, Mechanical dan Electrical dituangkan dalam
                Visi dan Misi Perusahaan sebagai berikut :
              </p>

              <div className='grid sm:grid-cols-2 gap-4'>
                <div className='bg-white p-6 rounded-xl shadow-md border-t-4 border-red-600'>
                  <h3 className='text-xl font-bold text-slate-900 mb-3'>
                    Visi
                  </h3>
                  <p className='text-sm text-gray-600 leading-relaxed'>
                    Menjadi perusahaan penyedia serta pemelihara Switchboard dan
                    pengembang infrastruktur Mechanical dan Electrical terkemuka
                    di Indonesia dengan kemampuan bersaing secara Global.
                  </p>
                </div>
                <div className='bg-white p-6 rounded-xl shadow-md border-t-4 border-slate-800'>
                  <h3 className='text-xl font-bold text-slate-900 mb-3'>
                    Misi
                  </h3>
                  <p className='text-sm text-gray-600 leading-relaxed'>
                    Memberikan dan menyediakan jasa yang diperlukan oleh
                    pelanggan secara maksimal dan optimal melalui penguasaan
                    teknologi serta peningkatan kualitas barang dan jasa.
                    Memberikan manfaat sebesar-besarnya bagi pelanggan, pemegang
                    saham dan karyawan melalui pengelolaan usaha yang efektif
                    dan efisien.
                  </p>
                </div>
              </div>
            </div>

            {/* Statistik */}
            <div className='grid grid-cols-2 gap-8 pt-6'>
              <div className='border-l-4 border-red-600 pl-4'>
                <div className='text-4xl font-black text-slate-900'>10+</div>
                <div className='text-xs uppercase tracking-tighter font-bold text-gray-500'>
                  Tahun Pengalaman
                </div>
              </div>
              <div className='border-l-4 border-red-600 pl-4'>
                <div className='text-4xl font-black text-slate-900'>200+</div>
                <div className='text-xs uppercase tracking-tighter font-bold text-gray-500'>
                  Proyek Selesai
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Gambar & Dekorasi */}
          <div className='relative group'>
            <div className='absolute -top-6 -right-6 w-32 h-32 bg-red-100 rounded-full -z-10 group-hover:scale-110 transition-transform'></div>
            <div className='absolute -bottom-6 -left-6 w-24 h-24 bg-slate-200 rounded-lg -z-10'></div>

            <div className='relative overflow-hidden rounded-2xl shadow-2xl'>
              <img
                src='https://plus.unsplash.com/premium_photo-1682928136660-8cbeaf4941b2?w=800&auto=format&fit=crop&q=80'
                alt='Electrical Engineer Working'
                className='w-full h-[600px] object-cover'
              />

              {/* Floating Card */}
              <div className='absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-xl border-l-4 border-red-600 transition-transform hover:translate-y-[-5px]'>
                <div className='flex items-center gap-3 mb-1'>
                  <div className='w-8 h-8 bg-red-600 rounded-full flex items-center justify-center'>
                    <span className='text-white text-sm'>✓</span>
                  </div>
                  <span className='font-bold text-slate-800 uppercase text-xs tracking-wider'>
                    Terverifikasi
                  </span>
                </div>
                <p className='text-[11px] text-gray-600 leading-snug'>
                  Standar ISO & SNI untuk keamanan kelistrikan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
