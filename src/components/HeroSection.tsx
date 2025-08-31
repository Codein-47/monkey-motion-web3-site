
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
          <div className="absolute top-20 left-10 w-32 h-32 bg-nft-blue/20 rounded-full blur-3xl animate-pulse-subtle"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-nft-purple/20 rounded-full blur-3xl animate-pulse-subtle"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-nft-orange/20 rounded-full blur-3xl animate-pulse-subtle"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h1 
                className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight transition-all duration-1000 delay-100 appear-animation ${isVisible ? 'in-view' : ''}`}
              >
                <span className="block gradient-text">Monkey</span>
                <span>NFT Collection</span>
              </h1>
              
              <p 
                className={`text-lg md:text-xl text-foreground/80 max-w-lg transition-all duration-1000 delay-300 appear-animation ${isVisible ? 'in-view' : ''}`}
              >
                Join the most exclusive collection of 10,000 unique digital monkeys living on the blockchain. Each NFT is crafted with love and creativity.
              </p>
              
              <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-500 appear-animation ${isVisible ? 'in-view' : ''}`}>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-nft-blue to-nft-purple text-white hover:from-nft-purple hover:to-nft-orange transition-all duration-300 transform hover:scale-105"
                  onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Collection
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="gradient-border bg-background/50 hover:bg-nft-blue/10 border-nft-blue/50"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
              
              <div className={`flex items-center space-x-6 pt-4 transition-all duration-1000 delay-700 appear-animation ${isVisible ? 'in-view' : ''}`}>
                <div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">10K</div>
                  <div className="text-sm text-foreground/70">Unique NFTs</div>
                </div>
                
                <div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">5.2K</div>
                  <div className="text-sm text-foreground/70">Owners</div>
                </div>
                
                <div>
                  <div className="text-2xl md:text-3xl font-bold gradient-text">2.5Ξ</div>
                  <div className="text-sm text-foreground/70">Floor Price</div>
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
                <div className={`absolute inset-0 bg-gradient-to-br from-nft-blue/30 via-nft-purple/30 to-nft-orange/30 rounded-full blur-xl transition-all duration-500 ${isHovered ? 'animate-pulse scale-110' : 'animate-rotate-slow'}`}></div>
                
                {/* Main Monkey NFT */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`relative w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-nft-blue via-nft-purple to-nft-orange p-1 rounded-full overflow-hidden transition-all duration-500 ${isHovered ? 'scale-105 shadow-2xl shadow-nft-blue/50' : 'animate-float'}`}>
                    <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative">
                      {/* Main monkey emoji */}
                      <div className={`text-6xl md:text-8xl transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
                        🐵
                      </div>
                      
                      {/* Overlay effect when hovered */}
                      {isHovered && (
                        <div className="absolute inset-0 bg-nft-purple/20 animate-pulse rounded-full flex items-center justify-center">
                          <div className="text-6xl md:text-8xl animate-bounce">
                            🚀
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className={`absolute -top-4 -right-4 w-16 h-16 bg-nft-blue/80 rounded-full flex items-center justify-center transition-all duration-500 ${isHovered ? 'animate-spin' : 'animate-bounce-subtle'}`}>
                  <span className="text-2xl">💎</span>
                </div>
                
                <div className={`absolute -bottom-4 -left-4 w-16 h-16 bg-nft-purple/80 rounded-full flex items-center justify-center transition-all duration-500 ${isHovered ? 'animate-pulse' : 'animate-bounce-subtle'}`} style={{ animationDelay: '0.5s' }}>
                  <span className="text-2xl">🎨</span>
                </div>
                
                <div className={`absolute top-1/2 -left-8 w-12 h-12 bg-nft-orange/80 rounded-full flex items-center justify-center transition-all duration-500 ${isHovered ? 'animate-bounce' : 'animate-bounce-subtle'}`} style={{ animationDelay: '1s' }}>
                  <span className="text-xl">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Preview Section */}
      <section id="collection" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Featured Monkeys</h2>
            <p className="text-lg text-foreground/70">Discover some of our most popular NFTs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4">🐵</div>
              <h3 className="text-xl font-bold mb-2 text-nft-blue">Cyber Monkey #001</h3>
              <p className="text-foreground/70">Rare • 2.5 ETH</p>
            </div>
            
            <div className="glass-effect rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4">🐒</div>
              <h3 className="text-xl font-bold mb-2 text-nft-purple">Space Monkey #042</h3>
              <p className="text-foreground/70">Epic • 5.1 ETH</p>
            </div>
            
            <div className="glass-effect rounded-lg p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4">🙈</div>
              <h3 className="text-xl font-bold mb-2 text-nft-orange">Ninja Monkey #777</h3>
              <p className="text-foreground/70">Legendary • 10.3 ETH</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">About MonkeyNFT</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              MonkeyNFT is more than just a collection - it's a community of digital art enthusiasts and blockchain pioneers. 
              Each monkey is uniquely generated with over 200 traits, ensuring no two are exactly alike.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Roadmap</h2>
            <p className="text-lg text-foreground/70">Our journey to the moon</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-nft-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Phase 1</h3>
              <p className="text-foreground/70">Launch Collection</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-nft-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎮</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Phase 2</h3>
              <p className="text-foreground/70">Monkey Games</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-nft-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Phase 3</h3>
              <p className="text-foreground/70">Metaverse</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Phase 4</h3>
              <p className="text-foreground/70">DAO Governance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Meet Our Team</h2>
            <p className="text-lg text-foreground/70">The creative minds behind MonkeyNFT</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-6xl mb-4">🐵</div>
              <h3 className="text-xl font-bold mb-2">Alex Johnson</h3>
              <p className="text-foreground/70">Founder & Artist</p>
            </div>
            
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-6xl mb-4">🐒</div>
              <h3 className="text-xl font-bold mb-2">Sam Williams</h3>
              <p className="text-foreground/70">Lead Developer</p>
            </div>
            
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-6xl mb-4">🙈</div>
              <h3 className="text-xl font-bold mb-2">Jamie Chen</h3>
              <p className="text-foreground/70">Marketing Director</p>
            </div>
            
            <div className="glass-effect rounded-lg p-6 text-center">
              <div className="text-6xl mb-4">🙉</div>
              <h3 className="text-xl font-bold mb-2">Taylor Swift</h3>
              <p className="text-foreground/70">Community Manager</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
