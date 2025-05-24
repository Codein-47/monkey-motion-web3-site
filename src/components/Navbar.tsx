
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import ConnectionModal from './ConnectionModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showConnectionModal, setShowConnectionModal] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-red-500/20' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                <Zap className="text-red-500 animate-pulse-subtle" size={28} />
                <span className="text-2xl font-bold gradient-text">Disconnected</span>
              </a>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#collection" className="text-foreground/80 hover:text-red-500 transition-colors">Collection</a>
              <a href="#about" className="text-foreground/80 hover:text-red-500 transition-colors">About</a>
              <a href="#roadmap" className="text-foreground/80 hover:text-red-500 transition-colors">Roadmap</a>
              <a href="#team" className="text-foreground/80 hover:text-red-500 transition-colors">Team</a>
            </nav>
            
            <div className="hidden md:block">
              <Button 
                onClick={() => setShowConnectionModal(true)}
                className="connect-button animate-glow"
              >
                Connect
              </Button>
            </div>
            
            <button 
              className="md:hidden focus:outline-none text-red-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden glass-effect border-t border-red-500/20">
            <div className="px-4 pt-2 pb-4 space-y-4">
              <a 
                href="#collection" 
                className="block text-foreground/80 hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Collection
              </a>
              <a 
                href="#about" 
                className="block text-foreground/80 hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a 
                href="#roadmap" 
                className="block text-foreground/80 hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Roadmap
              </a>
              <a 
                href="#team" 
                className="block text-foreground/80 hover:text-red-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Team
              </a>
              <Button 
                onClick={() => {
                  setShowConnectionModal(true);
                  setIsOpen(false);
                }} 
                className="w-full connect-button"
              >
                Connect
              </Button>
            </div>
          </div>
        )}
      </header>

      <ConnectionModal 
        isOpen={showConnectionModal}
        onClose={() => setShowConnectionModal(false)}
      />
    </>
  );
};

export default Navbar;
