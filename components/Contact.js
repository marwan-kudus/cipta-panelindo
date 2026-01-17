function Contact() {
  // WhatsApp number placeholder - in real app should be actual number
  const waNumber = '6281282827477';
  const waMessage =
    'Halo Cipta Panelindo, saya ingin konsultasi mengenai pembuatan panel.';
  const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
    waMessage
  )}`;

  return (
    <section
      id='contact'
      className='py-16 bg-gray-50 border-t border-gray-200'
      data-name='contact'
      data-file='components/Contact.js'
    >
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        <div className='grid md:grid-cols-2 gap-12'>
          <div>
            <span className='text-[var(--secondary-color)] font-semibold uppercase tracking-wider text-lg mb-2 block'>
              Hubungi Kami
            </span>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6'>
              Siap Membantu Kebutuhan Panel Anda
            </h2>
            <p className='text-gray-600 mb-8'>
              Jangan ragu untuk menghubungi kami. Tim marketing dan teknis kami
              siap memberikan konsultasi gratis untuk proyek Anda.
            </p>

            <div className='space-y-6'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-[var(--secondary-color)] shrink-0'>
                  <div className='icon-map-pin text-xl'></div>
                </div>
                <div>
                  <h4 className='font-bold text-slate-900'>Alamat Workshop</h4>
                  <p className='text-gray-600 text-sm'>
                    Jl. Raya Kyai H. Abdul Hamid KM.5 Ds. Gn. Menyan Kec.
                    Pamijahan Kab. Bogor
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-[var(--secondary-color)] shrink-0'>
                  <div className='icon-mail text-xl'></div>
                </div>
                <div>
                  <h4 className='font-bold text-slate-900'>Email</h4>
                  <p className='text-gray-600 text-sm'>
                    ciptapanelindo@gmail.com
                  </p>
                  <p className='text-gray-600 text-sm'>
                    marwankudus38@gmail.com
                  </p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-[var(--secondary-color)] shrink-0'>
                  <div className='icon-clock text-xl'></div>
                </div>
                <div>
                  <h4 className='font-bold text-slate-900'>Jam Operasional</h4>
                  <p className='text-gray-600 text-sm'>
                    Senin - Minggu: 08.00 - 17.00 WIB
                  </p>
                  <p className='text-gray-600 text-sm'>Jum'at: Libur</p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-center items-center text-center'>
            <div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-pulse'>
              <div className='icon-message-circle text-4xl text-green-600'></div>
            </div>
            <h3 className='text-2xl font-bold text-slate-900 mb-2'>
              Chat via WhatsApp
            </h3>
            <p className='text-gray-600 mb-8 max-w-sm'>
              Respon cepat untuk konsultasi harga, spesifikasi teknis, dan
              pemesanan.
            </p>
            <a
              href={waLink}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-green-500/30'
            >
              <div className='icon-phone text-xl'></div>
              Hubungi Sekarang
            </a>
            <p className='mt-4 text-md text-gray-400'>
              Kami akan membalas pesan Anda secepatnya pada jam kerja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
