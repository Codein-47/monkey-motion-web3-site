
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    // Welcome message for MonkeyNFT
    setTimeout(() => {
      toast({
        title: "Welcome to MonkeyNFT",
        description: "Discover the most exclusive monkey collection!",
        duration: 5000,
      });
    }, 2000);
    
    // Add intersection observer for animations
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
      <Footer />
    </div>
  );
};

export default Index;
