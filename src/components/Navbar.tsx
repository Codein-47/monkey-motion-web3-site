
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { connectWallet, WalletInfo } from '@/utils/web3Utils';
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleConnectWallet = async () => {
    setIsConnecting(true);
    console.log("Attempting wallet connection...");
    
    try {
      const wallet = await connectWallet();
      if (wallet) {
        setWalletInfo(wallet);
        toast({
          title: "Wallet Connected!",
          description: `Connected to ${wallet.address.slice(0, 6)}...${wallet.address.slice(-4)}`,
          duration: 3000,
        });
        console.log("Wallet connected successfully:", wallet);
      } else {
        toast({
          title: "Connection Failed",
          description: "Please make sure MetaMask is installed and try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Wallet connection error:", error);
      toast({
        title: "Connection Error",
        description: "An error occurred while connecting to your wallet.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsConnecting(false);
    }
  };
  
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">MonkeyNFT</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#collection" className="text-foreground/80 hover:text-foreground transition-colors">Collection</a>
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
            <a href="#roadmap" className="text-foreground/80 hover:text-foreground transition-colors">Roadmap</a>
            <a href="#team" className="text-foreground/80 hover:text-foreground transition-colors">Team</a>
          </nav>
          
          <div className="hidden md:block">
            <Button 
              onClick={handleConnectWallet} 
              variant="outline"
              disabled={isConnecting}
              className={`gradient-border ${walletInfo ? 'bg-green-500/20' : 'bg-background/50'} hover:bg-accent/20`}
            >
              {isConnecting ? 'Connecting...' : walletInfo ? formatAddress(walletInfo.address) : 'Connect Wallet'}
            </Button>
          </div>
          
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-effect">
          <div className="px-4 pt-2 pb-4 space-y-4">
            <a 
              href="#collection" 
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Collection
            </a>
            <a 
              href="#about" 
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a 
              href="#roadmap" 
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Roadmap
            </a>
            <a 
              href="#team" 
              className="block text-foreground/80 hover:text-foreground transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Team
            </a>
            <Button 
              onClick={() => {
                handleConnectWallet();
                setIsOpen(false);
              }} 
              variant="outline"
              disabled={isConnecting}
              className={`w-full gradient-border ${walletInfo ? 'bg-green-500/20' : 'bg-background/50'} hover:bg-accent/20`}
            >
              {isConnecting ? 'Connecting...' : walletInfo ? formatAddress(walletInfo.address) : 'Connect Wallet'}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
