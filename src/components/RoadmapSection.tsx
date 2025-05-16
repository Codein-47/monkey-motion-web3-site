
import { useEffect, useRef } from 'react';
import { CheckCircle2 } from "lucide-react";

const ROADMAP_ITEMS = [
  {
    phase: "Phase 1",
    title: "Launch & Community Building",
    description: "Initial NFT collection release and community building through social media and Discord.",
    items: ["Website Launch", "Social Media Setup", "Community Building", "Discord Launch", "Whitelist Creation"],
    status: "completed",
  },
  {
    phase: "Phase 2",
    title: "Primary Sale & Marketplace",
    description: "Public mint of 10,000 MonkeyNFTs and listing on major marketplaces.",
    items: ["Pre-sale for Whitelist", "Public Sale", "Secondary Marketplace Listing", "Rarity Tools Integration"],
    status: "in-progress",
  },
  {
    phase: "Phase 3",
    title: "Utility & Expansion",
    description: "Expanding the MonkeyNFT ecosystem with additional benefits and utility for holders.",
    items: ["Staking Mechanism", "Token Launch", "Exclusive Merchandise", "Community Vault"],
    status: "upcoming",
  },
  {
    phase: "Phase 4",
    title: "Metaverse Integration",
    description: "Integration with metaverse platforms and expanded digital experiences.",
    items: ["3D Avatar Creation", "Metaverse Land Purchase", "Virtual Events", "Partnerships"],
    status: "upcoming",
  },
];

const RoadmapCard = ({ item, index }: { item: typeof ROADMAP_ITEMS[0], index: number }) => {
  const isCompleted = item.status === "completed";
  const isInProgress = item.status === "in-progress";
  
  return (
    <div className="glass-effect rounded-xl p-6 appear-animation">
      <div className="flex items-center space-x-2 mb-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
          isCompleted ? 'bg-green-500/20 text-green-400' : 
          isInProgress ? 'bg-blue-500/20 text-blue-400' : 
          'bg-foreground/10 text-foreground/70'
        }`}>
          {index + 1}
        </div>
        <h3 className="text-xl font-bold">{item.phase}</h3>
        <div className={`text-xs px-2 py-1 rounded-full ${
          isCompleted ? 'bg-green-500/20 text-green-400' : 
          isInProgress ? 'bg-blue-500/20 text-blue-400' : 
          'bg-foreground/10 text-foreground/70'
        }`}>
          {isCompleted ? 'Completed' : isInProgress ? 'In Progress' : 'Upcoming'}
        </div>
      </div>
      
      <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
      <p className="text-foreground/70 mb-4">{item.description}</p>
      
      <ul className="space-y-2">
        {item.items.map((task, i) => (
          <li key={i} className="flex items-center space-x-2">
            <CheckCircle2 className={`w-4 h-4 ${
              isCompleted || (isInProgress && i < 2) ? 'text-green-400' : 'text-foreground/30'
            }`} />
            <span className={`${
              isCompleted || (isInProgress && i < 2) ? 'text-foreground' : 'text-foreground/50'
            }`}>
              {task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const RoadmapSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('#roadmap .appear-animation').forEach((el, i) => {
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
    <section id="roadmap" ref={sectionRef} className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-nft-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-60 h-60 bg-nft-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 appear-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Our vision for the future of MonkeyNFT and the milestones we plan to achieve.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ROADMAP_ITEMS.map((item, index) => (
            <RoadmapCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
