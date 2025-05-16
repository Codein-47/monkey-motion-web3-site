
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CollectionSection from '@/components/CollectionSection';
import AboutSection from '@/components/AboutSection';
import RoadmapSection from '@/components/RoadmapSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Simulate web3 wallet detection on page load
    setTimeout(() => {
      toast({
        title: "Welcome to MonkeyNFT",
        description: "Connect your wallet to explore our exclusive NFT collection.",
        duration: 5000,
      });
    }, 2000);
    
    // Add intersection observer to handle animations
    const animatedElements = document.querySelectorAll('.appear-animation');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );
    
    animatedElements.forEach((element) => {
      observer.observe(element);
    });
    
    return () => {
      animatedElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [toast]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <CollectionSection />
      <AboutSection />
      <RoadmapSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
