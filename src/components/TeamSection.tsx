
import { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Github, Linkedin } from "lucide-react";

const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Founder & Artist",
    emoji: "🐵",
    color: "from-nft-blue to-nft-purple",
  },
  {
    id: 2,
    name: "Sam Williams",
    role: "Lead Developer",
    emoji: "🐒",
    color: "from-nft-purple to-nft-orange",
  },
  {
    id: 3,
    name: "Jamie Chen",
    role: "Marketing Director",
    emoji: "🙈",
    color: "from-nft-orange to-yellow-500",
  },
  {
    id: 4,
    name: "Taylor Swift",
    role: "Community Manager",
    emoji: "🙉",
    color: "from-yellow-500 to-nft-blue",
  },
];

const TeamMemberCard = ({ member }: { member: typeof TEAM_MEMBERS[0] }) => {
  return (
    <Card className="overflow-hidden border-0 glass-effect hover:shadow-lg transition-all duration-300 hover:-translate-y-1 appear-animation">
      <CardContent className="p-0">
        <div className={`h-32 bg-gradient-to-r ${member.color} flex items-center justify-center relative`}>
          <span className="text-6xl animate-bounce-subtle" style={{ animationDelay: `${member.id * 0.2}s` }}>{member.emoji}</span>
        </div>
        <div className="p-6 text-center">
          <h3 className="font-semibold text-lg">{member.name}</h3>
          <p className="text-foreground/70 mb-4">{member.role}</p>
          
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              <Github size={18} />
            </a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.querySelectorAll('#team .appear-animation').forEach((el, i) => {
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
    <section id="team" ref={sectionRef} className="py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-nft-blue/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 appear-animation">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            The creative minds behind the MonkeyNFT collection.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
