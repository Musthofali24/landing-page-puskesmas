const Navbar = () => {
  return (
    <div className="w-full bg-teal-800 sticky top-0 z-50">
      <div className="max-w-7xl px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <ul className="flex items-center gap-8">
            <li>
              <a href="" className="text-white font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="" className="text-white font-semibold">
                Integrasi Layanan Primer
              </a>
            </li>
            <li>
              <a href="" className="text-white font-semibold">
                Inovasi Kami
              </a>
            </li>
            <li>
              <a href="" className="text-white font-semibold">
                Tentang Kami
              </a>
            </li>
            <li>
              <a href="" className="text-white font-semibold">
                FAQ
              </a>
            </li>
            <li>
              <a href="" className="text-white font-semibold">
                Pengaduan
              </a>
            </li>
            <li>
              <a href="" className="text-white font-semibold">
                Standar Pelayanan Garuda
              </a>
            </li>
            <li>
              <a href="" className="text-white font-semibold">
                SKM
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
