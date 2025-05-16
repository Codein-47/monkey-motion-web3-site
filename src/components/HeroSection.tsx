
import { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-nft-blue/20 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-nft-orange/20 rounded-full blur-3xl animate-pulse-subtle"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-nft-purple/20 rounded-full blur-3xl animate-pulse-subtle"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight transition-all duration-1000 delay-100 appear-animation ${isVisible ? 'in-view' : ''}`}
            >
              <span className="block gradient-text">Discover Rare</span>
              <span>Monkey NFT Collection</span>
            </h1>
            
            <p 
              className={`text-lg md:text-xl text-foreground/80 max-w-lg transition-all duration-1000 delay-300 appear-animation ${isVisible ? 'in-view' : ''}`}
            >
              Exclusive digital collectibles featuring uniquely generated monkey characters with proof of ownership stored on the blockchain.
            </p>
            
            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 appear-animation ${isVisible ? 'in-view' : ''}`}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-nft-blue to-nft-purple text-white hover:opacity-90 transition-opacity"
              >
                Explore Collection
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="gradient-border bg-background/50 hover:bg-accent/20"
              >
                Learn More
              </Button>
            </div>
            
            <div className={`flex items-center space-x-6 pt-4 transition-all duration-1000 delay-700 appear-animation ${isVisible ? 'in-view' : ''}`}>
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">10K+</div>
                <div className="text-sm text-foreground/70">Total Items</div>
              </div>
              
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">8.5K+</div>
                <div className="text-sm text-foreground/70">Owners</div>
              </div>
              
              <div>
                <div className="text-2xl md:text-3xl font-bold gradient-text">3.2K</div>
                <div className="text-sm text-foreground/70">Floor Price</div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className={`relative w-64 h-64 md:w-80 md:h-80 transition-all duration-1000 appear-animation ${isVisible ? 'in-view' : ''}`}>
              {/* Circular gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-nft-blue/30 via-nft-purple/30 to-nft-orange/30 rounded-full blur-xl animate-rotate-slow"></div>
              
              {/* Main NFT Monkey */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-nft-blue via-nft-purple to-nft-orange p-1 rounded-full overflow-hidden">
                  <div className="w-full h-full rounded-full bg-nft-dark flex items-center justify-center animate-float">
                    <span className="text-7xl md:text-8xl">🐵</span>
                  </div>
                </div>
              </div>
              
              {/* Small floating monkeys */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-nft-blue/80 rounded-full flex items-center justify-center animate-bounce-subtle">
                <span className="text-2xl">🙈</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-nft-orange/80 rounded-full flex items-center justify-center animate-bounce-subtle" style={{ animationDelay: '0.5s' }}>
                <span className="text-2xl">🙉</span>
              </div>
              
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-nft-purple/80 rounded-full flex items-center justify-center animate-bounce-subtle" style={{ animationDelay: '1s' }}>
                <span className="text-xl">🙊</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
