
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Instagram, MessagesSquare, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-red-500/20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Disconnected</h3>
            <p className="text-foreground/70">
              A collection of unique NFTs living on the edge of digital disconnection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">
                <Twitter />
              </a>
              <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">
                <MessagesSquare />
              </a>
              <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">
                <Youtube />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-red-500">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#collection" className="text-foreground/70 hover:text-red-500 transition-colors">Collection</a>
              </li>
              <li>
                <a href="#roadmap" className="text-foreground/70 hover:text-red-500 transition-colors">Roadmap</a>
              </li>
              <li>
                <a href="#team" className="text-foreground/70 hover:text-red-500 transition-colors">Team</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-red-500">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">OpenSea</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">Discord</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">Medium</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">Whitepaper</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">Smart Contract</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold mb-4 text-red-500">Subscribe</h4>
            <p className="text-foreground/70">
              Get the latest updates about Disconnected.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" className="bg-gray-800 border-red-500/30 focus:border-red-500" />
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-red-500/20 text-center text-foreground/50 text-sm">
          <p>© 2025 Disconnected. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
