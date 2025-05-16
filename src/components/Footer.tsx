
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Instagram, Discord, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">MonkeyNFT</h3>
            <p className="text-foreground/70">
              A collection of 10,000 unique NFTs on the Ethereum blockchain.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                <Discord />
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">
                <Youtube />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Home</a>
              </li>
              <li>
                <a href="#collection" className="text-foreground/70 hover:text-foreground transition-colors">Collection</a>
              </li>
              <li>
                <a href="#roadmap" className="text-foreground/70 hover:text-foreground transition-colors">Roadmap</a>
              </li>
              <li>
                <a href="#team" className="text-foreground/70 hover:text-foreground transition-colors">Team</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">OpenSea</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Discord</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Medium</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Whitepaper</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Smart Contract</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold mb-4">Subscribe</h4>
            <p className="text-foreground/70">
              Get the latest updates and news about MonkeyNFT.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" className="bg-background/50" />
              <Button variant="default" className="bg-nft-purple hover:bg-nft-purple/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-foreground/50 text-sm">
          <p>© 2025 MonkeyNFT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
