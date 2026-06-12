const Footer = () => {
  return (
    <footer className="bg-[#0d1b2a] border-t border-white/10 px-6 py-6 md:px-16 lg:px-28">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        <span className="text-xs font-mono tracking-[2px] uppercase text-white/25">
          © 2025 Umair Mahmood
        </span>
        <span className="text-xs font-mono tracking-[2px] uppercase text-white/25">
          Designed & Built with ✦
        </span>
      </div>
    </footer>
  );
};
 
export default Footer;