
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.appear-animation').forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('in-view');
            }, i * 100);
          });
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <>
      <section 
        id="home"
        ref={heroRef}
        className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/20 rounded-full blur-3xl animate-pulse-subtle"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-600/20 rounded-full blur-3xl animate-pulse-subtle"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-red-700/20 rounded-full blur-3xl animate-pulse-subtle"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h1 
                className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight transition-all duration-1000 delay-100 appear-animation ${isVisible ? 'in-view' : ''}`}
              >
                <span className="block gradient-text">Stay</span>
                <span>Disconnected</span>
              </h1>
              
              <p 
                className={`text-lg md:text-xl text-foreground/80 max-w-lg transition-all duration-1000 delay-300 appear-animation ${isVisible ? 'in-view' : ''}`}
              >
                In a world of constant surveillance, true freedom lies in anonymity. Join the network of the disconnected.
              </p>
              
              <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 appear-animation ${isVisible ? 'in-view' : ''}`}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-700 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Network
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="gradient-border bg-background/50 hover:bg-red-500/10 border-red-500/50"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
              
              <div className={`flex items-center space-x-6 pt-4 transition-all duration-1000 delay-700 appear-animation ${isVisible ? 'in-view' : ''}`}>
                <div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">10K+</div>
                  <div className="text-sm text-foreground/70">Anonymous Users</div>
                </div>
                
                <div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">256</div>
                  <div className="text-sm text-foreground/70">Bit Encryption</div>
                </div>
                
                <div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">24/7</div>
                  <div className="text-sm text-foreground/70">Privacy Shield</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div 
                className={`relative w-64 h-64 md:w-80 md:h-80 transition-all duration-1000 appear-animation ${isVisible ? 'in-view' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Glowing background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-red-500/30 via-red-600/30 to-red-700/30 rounded-full blur-xl transition-all duration-500 ${isHovered ? 'animate-pulse scale-110' : 'animate-rotate-slow'}`}></div>
                
                {/* Main Anonymous Hacker Figure */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`relative w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-red-500 via-red-600 to-red-700 p-1 rounded-full overflow-hidden transition-all duration-500 ${isHovered ? 'scale-105 shadow-2xl shadow-red-500/50' : 'animate-float'}`}>
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative">
                      {/* Anonymous mask effect */}
                      <div className={`text-6xl md:text-8xl transition-all duration-500 ${isHovered ? 'scale-110 text-red-400' : 'text-white'}`}>
                        🎭
                      </div>
                      
                      {/* Glitch effect overlay when hovered */}
                      {isHovered && (
                        <div className="absolute inset-0 bg-red-500/20 animate-pulse rounded-full flex items-center justify-center">
                          <div className="text-6xl md:text-8xl text-red-300 animate-bounce">
                            💀
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className={`absolute -top-4 -right-4 w-16 h-16 bg-red-500/80 rounded-full flex items-center justify-center transition-all duration-500 ${isHovered ? 'animate-spin' : 'animate-bounce-subtle'}`}>
                  <span className="text-2xl">🔒</span>
                </div>
                
                <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-red-600/80 rounded-full flex items-center justify-center transition-all duration-500 ${isHovered ? 'animate-pulse' : 'animate-bounce-subtle'}`} style={{ animationDelay: '0.5s' }}>
                  <span className="text-2xl">🌐</span>
                </div>
                
                <div className={`absolute top-1/2 -left-8 w-12 h-12 bg-red-700/80 rounded-full flex items-center justify-center transition-all duration-500 ${isHovered ? 'animate-bounce' : 'animate-bounce-subtle'}`} style={{ animationDelay: '1s' }}>
                  <span className="text-xl">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Network Features</h2>
            <p className="text-lg text-foreground/70">Stay anonymous, stay secure, stay disconnected</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="connection-item text-center p-6">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-xl font-bold mb-2 text-red-500">End-to-End Encryption</h3>
              <p className="text-foreground/70">Military-grade encryption for all communications</p>
            </div>
            
            <div className="connection-item text-center p-6">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-2 text-red-500">Anonymous Network</h3>
              <p className="text-foreground/70">Connect without revealing your identity</p>
            </div>
            
            <div className="connection-item text-center p-6">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold mb-2 text-red-500">Global Access</h3>
              <p className="text-foreground/70">Bypass restrictions and censorship worldwide</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
