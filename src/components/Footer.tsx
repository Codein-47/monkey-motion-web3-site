
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Twitter, Instagram, MessagesSquare, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-12 border-t border-red-500/20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Disconnected</h3>
            <p className="text-foreground/70">
              Stay anonymous. Stay secure. Stay disconnected from the surveillance state.
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
            <h4 className="font-semibold mb-4 text-red-500">Network</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground/70 hover:text-red-500 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-foreground/70 hover:text-red-500 transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">Privacy</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">Security</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-red-500">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">Tor Network</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">VPN Guide</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-red-500 transition-colors">Encryption Tools</a>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold mb-4 text-red-500">Stay Anonymous</h4>
            <p className="text-foreground/70">
              Get encrypted updates about network security.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Encrypted email" className="bg-gray-800 border-red-500/30 focus:border-red-500" />
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-red-500/20 text-center text-foreground/50 text-sm">
          <p>© 2025 Disconnected. Privacy is a right, not a privilege.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
