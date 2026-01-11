function Footer() {
  return (
    <footer
      className='bg-slate-900 text-gray-300 py-12 border-t border-slate-800'
      data-name='footer'
      data-file='components/Footer.js'
    >
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        <div className='grid md:grid-cols-4 gap-8 mb-8'>
          <div className='col-span-1 md:col-span-2'>
            <div className='flex items-center gap-2 mb-4 text-white'>
              <div className='w-8 h-8 bg-[var(--secondary-color)] rounded flex items-center justify-center'>
                <div className='icon-zap text-lg'></div>
              </div>
              <span className='text-xl font-bold tracking-tight'>
                CIPTA PANELINDO
              </span>
            </div>
            <p className='text-sm text-gray-400 max-w-xs mb-6'>
              Partner terpercaya dalam pembuatan box panel dan sistem
              kelistrikan industri. Kualitas, keamanan, dan kepuasan pelanggan
              adalah prioritas kami.
            </p>
            <div className='flex gap-4'>
              <a
                href='#'
                className='w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors text-white'
              >
                <div className='icon-facebook text-sm'></div>
              </a>
              <a
                href='#'
                className='w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors text-white'
              >
                <div className='icon-instagram text-sm'></div>
              </a>
              <a
                href='#'
                className='w-8 h-8 rounded bg-slate-800 flex items-center justify-center hover:bg-[var(--secondary-color)] transition-colors text-white'
              >
                <div className='icon-linkedin text-sm'></div>
              </a>
            </div>
          </div>

          <div>
            <h4 className='text-white font-bold mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#home'
                  className='hover:text-[var(--secondary-color)] transition-colors'
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href='#about'
                  className='hover:text-[var(--secondary-color)] transition-colors'
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href='#services'
                  className='hover:text-[var(--secondary-color)] transition-colors'
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href='#project'
                  className='hover:text-[var(--secondary-color)] transition-colors'
                >
                  Proyek
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='text-white font-bold mb-4'>Layanan</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a
                  href='#'
                  className='hover:text-[var(--secondary-color)] transition-colors'
                >
                  Konsultasi dan Desain
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-[var(--secondary-color)] transition-colors'
                >
                  Fabrikasi dan Perakitan
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-[var(--secondary-color)] transition-colors'
                >
                  Pengujian dan Jaminan Kualitas
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='hover:text-[var(--secondary-color)] transition-colors'
                >
                  Instalasi dan Purna Jual
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500'>
          <p>&copy; 2026 Cipta Panelindo. All rights reserved.</p>
          <div className='flex gap-6'>
            <a href='#' className='hover:text-white'>
              Privacy Policy
            </a>
            <a href='#' className='hover:text-white'>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
