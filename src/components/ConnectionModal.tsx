
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, Twitter, MessagesSquare, Wallet, Check } from "lucide-react";
import { connectWallet, WalletInfo } from '@/utils/web3Utils';
import { useToast } from "@/hooks/use-toast";

interface ConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ConnectionStatus {
  discord: boolean;
  twitter: boolean;
  wallet: WalletInfo | null;
}

const ConnectionModal = ({ isOpen, onClose }: ConnectionModalProps) => {
  const [connections, setConnections] = useState<ConnectionStatus>({
    discord: false,
    twitter: false,
    wallet: null,
  });
  const [isConnecting, setIsConnecting] = useState<string | null>(null);
  const { toast } = useToast();

  // Load saved connections from localStorage on mount
  useEffect(() => {
    const savedConnections = localStorage.getItem('disconnected_connections');
    if (savedConnections) {
      setConnections(JSON.parse(savedConnections));
    }
  }, []);

  // Save connections to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('disconnected_connections', JSON.stringify(connections));
  }, [connections]);

  if (!isOpen) return null;

  const handleDiscordConnect = async () => {
    setIsConnecting('discord');
    // Simulate Discord connection
    setTimeout(() => {
      setConnections(prev => ({ ...prev, discord: true }));
      setIsConnecting(null);
      toast({
        title: "Discord Connected!",
        description: "Successfully connected to Discord network",
        duration: 3000,
      });
    }, 1500);
  };

  const handleTwitterConnect = async () => {
    setIsConnecting('twitter');
    // Simulate Twitter connection
    setTimeout(() => {
      setConnections(prev => ({ ...prev, twitter: true }));
      setIsConnecting(null);
      toast({
        title: "Twitter Connected!",
        description: "Successfully connected to Twitter network",
        duration: 3000,
      });
    }, 1500);
  };

  const handleWalletConnect = async () => {
    setIsConnecting('wallet');
    try {
      const wallet = await connectWallet();
      if (wallet) {
        setConnections(prev => ({ ...prev, wallet }));
        toast({
          title: "Wallet Connected!",
          description: `Connected to ${wallet.address.slice(0, 6)}...${wallet.address.slice(-4)}`,
          duration: 3000,
        });
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
      setIsConnecting(null);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in-0">
      <div className="bg-gray-900 border border-red-500/30 rounded-xl p-6 w-full max-w-md animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold gradient-text">Join the Network</h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white"
          >
            <X size={20} />
          </Button>
        </div>

        <div className="space-y-4">
          {/* Discord Connection */}
          <div className="connection-item">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <MessagesSquare className="text-red-500" size={24} />
                <div>
                  <h3 className="font-semibold">Discord</h3>
                  <p className="text-sm text-gray-400">Connect your Discord account</p>
                </div>
              </div>
              {connections.discord ? (
                <Check className="text-green-500" size={20} />
              ) : (
                <Button
                  onClick={handleDiscordConnect}
                  disabled={isConnecting === 'discord'}
                  variant="outline"
                  size="sm"
                  className="border-red-500/50 text-red-500 hover:bg-red-500/10"
                >
                  {isConnecting === 'discord' ? 'Connecting...' : 'Connect'}
                </Button>
              )}
            </div>
          </div>

          {/* Twitter Connection */}
          <div className="connection-item">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Twitter className="text-red-500" size={24} />
                <div>
                  <h3 className="font-semibold">Twitter</h3>
                  <p className="text-sm text-gray-400">Connect your Twitter account</p>
                </div>
              </div>
              {connections.twitter ? (
                <Check className="text-green-500" size={20} />
              ) : (
                <Button
                  onClick={handleTwitterConnect}
                  disabled={isConnecting === 'twitter'}
                  variant="outline"
                  size="sm"
                  className="border-red-500/50 text-red-500 hover:bg-red-500/10"
                >
                  {isConnecting === 'twitter' ? 'Connecting...' : 'Connect'}
                </Button>
              )}
            </div>
          </div>

          {/* Wallet Connection */}
          <div className="connection-item">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Wallet className="text-red-500" size={24} />
                <div>
                  <h3 className="font-semibold">Web3 Wallet</h3>
                  <p className="text-sm text-gray-400">
                    {connections.wallet ? formatAddress(connections.wallet.address) : 'Connect your Web3 wallet'}
                  </p>
                </div>
              </div>
              {connections.wallet ? (
                <Check className="text-green-500" size={20} />
              ) : (
                <Button
                  onClick={handleWalletConnect}
                  disabled={isConnecting === 'wallet'}
                  variant="outline"
                  size="sm"
                  className="border-red-500/50 text-red-500 hover:bg-red-500/10"
                >
                  {isConnecting === 'wallet' ? 'Connecting...' : 'Connect'}
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-red-500/20">
          <p className="text-sm text-gray-400 text-center">
            Connect all services to unlock the full Disconnected experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectionModal;
