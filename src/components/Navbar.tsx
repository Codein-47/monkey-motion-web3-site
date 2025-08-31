
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ConnectionModal from './ConnectionModal';
import { initNavbarAnimations } from '@/utils/gsapAnimations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showConnectionModal, setShowConnectionModal] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initialize GSAP animations
    setTimeout(() => {
      initNavbarAnimations();
    }, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };
  
  return (
    <>
      <header className={`navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect border-b border-nft-blue/20' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <a href="#" className="flex items-center space-x-2">
                <span className="navbar-logo text-4xl">🐵</span>
                <span className="text-2xl font-bold gradient-text">MonkeyNFT</span>
              </a>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground/80 hover:text-nft-blue transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('collection')}
                className="text-foreground/80 hover:text-nft-blue transition-colors"
              >
                Collection
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground/80 hover:text-nft-blue transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('roadmap')}
                className="text-foreground/80 hover:text-nft-blue transition-colors"
              >
                Roadmap
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-foreground/80 hover:text-nft-blue transition-colors"
              >
                Team
              </button>
            </nav>
            
            <div className="hidden md:block">
              <Button 
                onClick={() => setShowConnectionModal(true)}
                className="gsap-button rgb-glow bg-gradient-to-r from-nft-blue to-nft-purple hover:from-nft-purple hover:to-nft-orange text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
              >
                Connect Wallet
              </Button>
            </div>
            
            <button 
              className="md:hidden focus:outline-none text-nft-blue"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden glass-effect border-t border-nft-blue/20">
            <div className="px-4 pt-2 pb-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-foreground/80 hover:text-nft-blue transition-colors w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('collection')}
                className="block text-foreground/80 hover:text-nft-blue transition-colors w-full text-left"
              >
                Collection
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-foreground/80 hover:text-nft-blue transition-colors w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('roadmap')}
                className="block text-foreground/80 hover:text-nft-blue transition-colors w-full text-left"
              >
                Roadmap
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="block text-foreground/80 hover:text-nft-blue transition-colors w-full text-left"
              >
                Team
              </button>
              <Button 
                onClick={() => {
                  setShowConnectionModal(true);
                  setIsOpen(false);
                }} 
                className="w-full bg-gradient-to-r from-nft-blue to-nft-purple hover:from-nft-purple hover:to-nft-orange"
              >
                Connect Wallet
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
