function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Menghindari konten tertutup header yang fixed
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Project', id: 'project' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white/80 backdrop-blur-md py-5'
      }`}
      data-name='header'
      data-file='components/Header.js'
    >
      <div className='max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center'>
        {/* Logo Area */}
        <div
          className='flex items-center gap-4 cursor-pointer group'
          onClick={() => scrollToSection('home')}
        >
          <div className='relative w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center overflow-hidden shadow-md group-hover:shadow-red-200 transition-all duration-300'>
            <img
              src='trickle/assets/cipta2.png'
              alt='Logo Cipta Panelindo'
              className='w-full h-full object-contain p-1 group-hover:scale-110 transition-transform duration-500'
            />
          </div>

          <div className='flex flex-col'>
            <span className='text-2xl font-black text-slate-900 leading-none tracking-tighter italic'>
              CIPTA
            </span>
            <span className='text-[10px] font-bold text-red-600 tracking-[0.3em] uppercase mt-1'>
              PANELINDO
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className='hidden md:flex items-center gap-10'>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className='relative text-sm font-bold text-slate-600 hover:text-red-600 transition-colors duration-300 group uppercase tracking-widest'
            >
              {item.name}
              <span className='absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full'></span>
            </button>
          ))}

          <button
            onClick={() => scrollToSection('contact')}
            className='bg-red-600 hover:bg-slate-900 text-white font-bold py-2.5 px-7 rounded-full text-xs tracking-widest uppercase shadow-lg shadow-red-200 hover:shadow-slate-200 transition-all duration-300 transform hover:-translate-y-1 active:scale-95'
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden group p-2'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label='Toggle Menu'
        >
          <div className='relative w-6 h-5 flex flex-col justify-between items-end'>
            {/* Garis Atas */}
            <span
              className={`h-[2px] bg-slate-900 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'w-6 absolute top-1/2 -rotate-45' : 'w-6'
              }`}
            ></span>
            {/* Garis Tengah */}
            <span
              className={`h-[2px] bg-red-600 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'w-4 group-hover:w-6'
              }`}
            ></span>
            {/* Garis Bawah */}
            <span
              className={`h-[2px] bg-slate-900 rounded-full transition-all duration-300 ${
                isMenuOpen
                  ? 'w-6 absolute top-1/2 rotate-45'
                  : 'w-5 group-hover:w-6'
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className='flex flex-col p-6 space-y-2'>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className='py-4 px-4 text-left font-bold text-slate-800 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-300 flex justify-between items-center group uppercase tracking-widest text-xs'
            >
              {item.name}
              <i className='fas fa-chevron-right text-[10px] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1'></i>
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className='mt-4 w-full bg-slate-900 text-white font-bold py-4 rounded-xl shadow-xl active:scale-95 transition-all duration-300 tracking-widest uppercase text-xs'
          >
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
