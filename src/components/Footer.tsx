import veLogo from "@/assets/vE_logo.png";
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-white bg-black relative">
      <div className="w-full flex relative">
        <div className="pl-16 pr-32 pt-32 pb-64 relative">
          <div className="mb-12">
            <img src={veLogo} alt="Volatile Engine Logo" className="h-12 w-auto mb-4 brightness-0 invert" />
            <h3 className="text-2xl mb-6 text-white font-medium" style={{ fontFamily: "'Helvetica Now Display', system-ui, sans-serif", fontWeight: 500 }}>Volatile Engine</h3>
          </div>
        </div>
        <div className="flex-1 pl-8 pr-4 flex flex-col pt-48 pb-48 relative">
          <div className="ml-auto" style={{ width: 'fit-content' }}>
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div>
                <h4 className="font-normal mb-6 text-white">PRODUCT</h4>
                <ul className="space-y-3 text-sm text-white">
                  <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                  <li><Link to="/doc" className="hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link to="/get-started" className="hover:text-white transition-colors">API Reference</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-normal mb-6 text-white">COMPANY</h4>
                <ul className="space-y-3 text-sm text-white">
                  <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
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
              <div className="-ml-4 pr-8">
                <h4 className="font-normal mb-6 text-white">CONTACT US</h4>
                <ul className="space-y-3 text-sm text-white">
                  <li>
                    <a href="mailto:contact@volatileengine.com" className="hover:text-white hover:underline transition-colors inline-flex items-center gap-2">
                      <span>contact@volatileengine.com</span>
                      <MoveUpRight className="h-3 w-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 pt-12 pb-12">
          <div className="text-center text-xs text-white">
            © 2025 Volatile Engine. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
