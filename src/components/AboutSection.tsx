
import { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('#about .appear-animation').forEach((el, i) => {
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-nft-orange/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="appear-animation">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-nft-blue via-nft-purple to-nft-orange opacity-20 rounded-2xl blur-xl"></div>
              <div className="relative glass-effect rounded-2xl p-6 md:p-8 overflow-hidden">
                <div className="flex justify-center items-center aspect-square">
                  <div className="relative w-48 h-48 md:w-64 md:h-64">
                    {/* Animated monkey group */}
                    <div className="absolute inset-0 flex items-center justify-center animate-float">
                      <span className="text-8xl md:text-9xl">🐵</span>
                    </div>
                    
                    <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center animate-bounce-subtle">
                      <span className="text-2xl">🙈</span>
                    </div>
                    
                    <div className="absolute bottom-0 right-0 w-12 h-12 flex items-center justify-center animate-bounce-subtle" style={{ animationDelay: '0.7s' }}>
                      <span className="text-2xl">🙉</span>
                    </div>
                    
                    <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center animate-bounce-subtle" style={{ animationDelay: '0.4s' }}>
                      <span className="text-2xl">🙊</span>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-12 h-12 flex items-center justify-center animate-bounce-subtle" style={{ animationDelay: '1s' }}>
                      <span className="text-2xl">🐒</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 appear-animation">
              About <span className="gradient-text">MonkeyNFT</span> Collection
            </h2>
            
            <div className="space-y-4">
              <p className="text-foreground/80 appear-animation">
                MonkeyNFT is a collection of 10,000 uniquely generated monkey characters with proof of ownership stored on the blockchain.
              </p>
              
              <p className="text-foreground/80 appear-animation">
                Each Monkey NFT is algorithmically generated from over 150 traits, including expression, headwear, clothing, and more. All monkeys are unique, but some are rarer than others.
              </p>
              
              <p className="text-foreground/80 appear-animation">
                When you purchase a MonkeyNFT, you're not just buying a piece of art. You're gaining membership access to a club with benefits and utilities that will increase over time. Your Monkey can serve as your digital identity and open digital doors.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 appear-animation">
              <div className="glass-effect p-4 rounded-lg">
                <div className="text-3xl font-bold gradient-text">150+</div>
                <div className="text-sm text-foreground/70">Unique Traits</div>
              </div>
              
              <div className="glass-effect p-4 rounded-lg">
                <div className="text-3xl font-bold gradient-text">10K</div>
                <div className="text-sm text-foreground/70">Total Supply</div>
              </div>
              
              <div className="glass-effect p-4 rounded-lg">
                <div className="text-3xl font-bold gradient-text">Ethereum</div>
                <div className="text-sm text-foreground/70">Blockchain</div>
              </div>
              
              <div className="glass-effect p-4 rounded-lg">
                <div className="text-3xl font-bold gradient-text">ERC-721</div>
                <div className="text-sm text-foreground/70">Token Standard</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
