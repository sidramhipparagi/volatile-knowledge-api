import veLogo from "@/assets/vE_logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-white bg-black relative">
      <div className="w-full flex relative">
        <div className="pl-12 pr-32 pt-32 pb-48 relative">
          <div className="absolute right-0 top-0 bottom-0 border-r border-white"></div>
          <div className="mb-12">
            <img src={veLogo} alt="Volatile Engine Logo" className="h-12 w-auto mb-4 brightness-0 invert" />
            <h3 className="text-2xl tracking-wider mb-6 text-white font-medium" style={{ fontWeight: 500 }}>Volatile Engine</h3>
            <p className="text-sm text-white">
              Web knowledge API for developers
            </p>
          </div>
        </div>
        <div className="flex-1 pl-8 pr-12 flex flex-col pt-32 pb-48 relative">
          <div className="mx-auto" style={{ width: 'fit-content' }}>
            <div className="grid md:grid-cols-4 gap-20 mb-16">
              <div>
                <h4 className="font-normal mb-6 text-white">PRODUCT</h4>
                <ul className="space-y-3 text-sm text-white">
                  <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-normal mb-6 text-white">COMPANY</h4>
                <ul className="space-y-3 text-sm text-white">
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-normal mb-6 text-white">LEGAL</h4>
                <ul className="space-y-3 text-sm text-white">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-normal mb-6 text-white">CONTACT US</h4>
                <ul className="space-y-3 text-sm text-white">
                  <li><a href="#" className="hover:text-white transition-colors">Email</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Sales</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 pt-12 pb-12 border-t border-white" style={{ left: 0 }}>
            <div className="text-center text-sm text-white">
              © 2025 Volatile Engine. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
