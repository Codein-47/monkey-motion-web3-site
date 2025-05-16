
import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NFT_CARDS = [
  {
    id: 1,
    name: "Golden Monkey #042",
    price: "2.8 ETH",
    rarity: "Legendary",
    emoji: "🐵",
    bgColor: "from-yellow-500/20 to-amber-600/20",
    borderColor: "border-yellow-400",
  },
  {
    id: 2,
    name: "Space Monkey #189",
    price: "1.9 ETH",
    rarity: "Epic",
    emoji: "🐒",
    bgColor: "from-blue-500/20 to-indigo-600/20",
    borderColor: "border-blue-400",
  },
  {
    id: 3,
    name: "Cyber Monkey #756",
    price: "3.2 ETH",
    rarity: "Mythic",
    emoji: "🙈",
    bgColor: "from-purple-500/20 to-pink-600/20",
    borderColor: "border-purple-400",
  },
  {
    id: 4,
    name: "Jungle Monkey #103",
    price: "1.4 ETH",
    rarity: "Rare",
    emoji: "🙉",
    bgColor: "from-green-500/20 to-emerald-600/20",
    borderColor: "border-green-400",
  },
  {
    id: 5,
    name: "Party Monkey #325",
    price: "2.1 ETH",
    rarity: "Epic",
    emoji: "🙊",
    bgColor: "from-red-500/20 to-rose-600/20",
    borderColor: "border-red-400",
  },
  {
    id: 6,
    name: "Robot Monkey #932",
    price: "2.5 ETH",
    rarity: "Mythic",
    emoji: "🐵",
    bgColor: "from-gray-500/20 to-slate-600/20",
    borderColor: "border-gray-400",
  },
];

const NFTCard = ({ nft }: { nft: typeof NFT_CARDS[0] }) => {
  return (
    <Card className="overflow-hidden border-0 glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1 appear-animation">
      <CardContent className="p-0">
        <div className={`aspect-square bg-gradient-to-br ${nft.bgColor} flex items-center justify-center relative`}>
          <div className={`absolute inset-0 border-2 ${nft.borderColor} opacity-30 rounded-t-md`}></div>
          <span className="text-8xl animate-float" style={{ animationDelay: `${nft.id * 0.2}s` }}>{nft.emoji}</span>
        </div>
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-lg">{nft.name}</h3>
            <span className="text-xs px-2 py-1 bg-background/50 rounded-full border border-primary/20">{nft.rarity}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm font-medium text-foreground/70">Price</div>
            <div className="font-semibold text-accent">{nft.price}</div>
          </div>
          <Button variant="outline" size="sm" className="w-full gradient-border mt-2 bg-background/50 hover:bg-accent/20">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const CollectionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('#collection .appear-animation').forEach((el, i) => {
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
    <section id="collection" ref={sectionRef} className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-64 h-64 bg-nft-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-nft-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 appear-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured</span> Collection
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore our exclusive collection of uniquely generated monkey NFTs with varying rarities and traits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NFT_CARDS.map((nft) => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </div>
        
        <div className="mt-12 text-center appear-animation">
          <Button className="bg-gradient-to-r from-nft-blue to-nft-purple text-white hover:opacity-90 transition-opacity">
            View All Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
