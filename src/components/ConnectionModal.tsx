import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, Twitter, MessagesSquare, Wallet, Check, LogOut } from "lucide-react";
import { connectWallet, WalletInfo } from '@/utils/web3Utils';
import { useToast } from "@/hooks/use-toast";

interface ConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ConnectionStatus {
  discord: {
    connected: boolean;
    user?: {
      id: string;
      username: string;
      avatar?: string;
    };
  };
  twitter: {
    connected: boolean;
    user?: {
      id: string;
      username: string;
      profile_image_url?: string;
    };
  };
  wallet: WalletInfo | null;
}

const ConnectionModal = ({ isOpen, onClose }: ConnectionModalProps) => {
  const [connections, setConnections] = useState<ConnectionStatus>({
    discord: { connected: false },
    twitter: { connected: false },
    wallet: null,
  });
  const [isConnecting, setIsConnecting] = useState<string | null>(null);
  const { toast } = useToast();

  // Load saved connections from localStorage on mount
  useEffect(() => {
    const savedConnections = localStorage.getItem('monkeynft_connections');
    if (savedConnections) {
      try {
        setConnections(JSON.parse(savedConnections));
      } catch (error) {
        console.error('Error loading saved connections:', error);
      }
    }
  }, []);

  // Save connections to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('monkeynft_connections', JSON.stringify(connections));
  }, [connections]);

  if (!isOpen) return null;

  const handleDiscordConnect = async () => {
    setIsConnecting('discord');
    try {
      // Discord OAuth URL
      const clientId = '1234567890123456789'; // Replace with your Discord app client ID
      const redirectUri = encodeURIComponent(window.location.origin);
      const scope = 'identify';
      
      const discordAuthUrl = `https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;
      
      // Open Discord OAuth in a popup
      const popup = window.open(
        discordAuthUrl,
        'discord-auth',
        'width=500,height=600,scrollbars=yes,resizable=yes'
      );

      if (!popup) {
        throw new Error('Popup blocked');
      }

      // Create a promise to handle the OAuth result
      const authResult = new Promise<boolean>((resolve) => {
        const checkClosed = setInterval(() => {
          if (popup.closed) {
            clearInterval(checkClosed);
            
            try {
              const popupUrl = popup.location.href;
              console.log('Popup URL:', popupUrl);
              
              if (popupUrl.includes(window.location.origin) && popupUrl.includes('code=')) {
                resolve(true);
              } else {
                resolve(false);
              }
            } catch (error) {
              console.log('Auth cancelled or failed');
              resolve(false);
            }
          }
        }, 1000);

        setTimeout(() => {
          if (!popup.closed) {
            popup.close();
          }
          clearInterval(checkClosed);
          resolve(false);
        }, 300000);
      });

      const success = await authResult;
      
      if (success) {
        const mockUser = {
          id: '123456789',
          username: 'User#1234',
          avatar: 'avatar_hash'
        };
        
        setConnections(prev => ({
          ...prev,
          discord: { connected: true, user: mockUser }
        }));
        
        toast({
          title: "Discord Connected!",
          description: `Successfully connected as ${mockUser.username}`,
          duration: 3000,
        });
      } else {
        toast({
          title: "Connection Cancelled",
          description: "Discord authentication was cancelled or failed.",
          variant: "destructive",
          duration: 3000,
        });
      }

    } catch (error) {
      console.error('Discord connection error:', error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to Discord. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsConnecting(null);
    }
  };

  const handleTwitterConnect = async () => {
    setIsConnecting('twitter');
    try {
      const clientId = 'your_twitter_client_id';
      const redirectUri = encodeURIComponent(window.location.origin);
      const scope = 'tweet.read%20users.read';
      const codeChallenge = 'challenge';
      
      const twitterAuthUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=state&code_challenge=${codeChallenge}&code_challenge_method=plain`;
      
      const popup = window.open(
        twitterAuthUrl,
        'twitter-auth',
        'width=500,height=600,scrollbars=yes,resizable=yes'
      );

      if (!popup) {
        throw new Error('Popup blocked');
      }

      const authResult = new Promise<boolean>((resolve) => {
        const checkClosed = setInterval(() => {
          if (popup.closed) {
            clearInterval(checkClosed);
            
            try {
              const popupUrl = popup.location.href;
              console.log('Popup URL:', popupUrl);
              
              if (popupUrl.includes(window.location.origin) && popupUrl.includes('code=')) {
                resolve(true);
              } else {
                resolve(false);
              }
            } catch (error) {
              console.log('Auth cancelled or failed');
              resolve(false);
            }
          }
        }, 1000);

        setTimeout(() => {
          if (!popup.closed) {
            popup.close();
          }
          clearInterval(checkClosed);
          resolve(false);
        }, 300000);
      });

      const success = await authResult;
      
      if (success) {
        const mockUser = {
          id: '987654321',
          username: '@nft_collector',
          profile_image_url: 'profile_image_url'
        };
        
        setConnections(prev => ({
          ...prev,
          twitter: { connected: true, user: mockUser }
        }));
        
        toast({
          title: "Twitter Connected!",
          description: `Successfully connected as ${mockUser.username}`,
          duration: 3000,
        });
      } else {
        toast({
          title: "Connection Cancelled",
          description: "Twitter authentication was cancelled or failed.",
          variant: "destructive",
          duration: 3000,
        });
      }

    } catch (error) {
      console.error('Twitter connection error:', error);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to Twitter. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsConnecting(null);
    }
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

  const handleDiscordDisconnect = () => {
    setConnections(prev => ({
      ...prev,
      discord: { connected: false }
    }));
    toast({
      title: "Discord Disconnected",
      description: "Successfully disconnected from Discord",
      duration: 3000,
    });
  };

  const handleTwitterDisconnect = () => {
    setConnections(prev => ({
      ...prev,
      twitter: { connected: false }
    }));
    toast({
      title: "Twitter Disconnected",
      description: "Successfully disconnected from Twitter",
      duration: 3000,
    });
  };

  const handleWalletDisconnect = () => {
    setConnections(prev => ({
      ...prev,
      wallet: null
    }));
    toast({
      title: "Wallet Disconnected",
      description: "Successfully disconnected wallet",
      duration: 3000,
    });
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in-0">
      <div className="bg-gray-900 border border-nft-blue/30 rounded-xl p-6 w-full max-w-md animate-slide-up">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold gradient-text">Connect to MonkeyNFT</h2>
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
                <MessagesSquare className="text-nft-blue" size={24} />
                <div>
                  <h3 className="font-semibold">Discord</h3>
                  <p className="text-sm text-gray-400">
                    {connections.discord.connected && connections.discord.user
                      ? connections.discord.user.username
                      : 'Connect your Discord account'
                    }
                  </p>
                </div>
              </div>
              {connections.discord.connected ? (
                <div className="flex items-center space-x-2">
                  <Check className="text-green-500" size={20} />
                  <Button
                    onClick={handleDiscordDisconnect}
                    variant="outline"
                    size="sm"
                    className="border-nft-blue/50 text-nft-blue hover:bg-nft-blue/10"
                  >
                    <LogOut size={16} />
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleDiscordConnect}
                  disabled={isConnecting === 'discord'}
                  variant="outline"
                  size="sm"
                  className="border-nft-blue/50 text-nft-blue hover:bg-nft-blue/10"
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
                <Twitter className="text-nft-blue" size={24} />
                <div>
                  <h3 className="font-semibold">Twitter</h3>
                  <p className="text-sm text-gray-400">
                    {connections.twitter.connected && connections.twitter.user
                      ? connections.twitter.user.username
                      : 'Connect your Twitter account'
                    }
                  </p>
                </div>
              </div>
              {connections.twitter.connected ? (
                <div className="flex items-center space-x-2">
                  <Check className="text-green-500" size={20} />
                  <Button
                    onClick={handleTwitterDisconnect}
                    variant="outline"
                    size="sm"
                    className="border-nft-blue/50 text-nft-blue hover:bg-nft-blue/10"
                  >
                    <LogOut size={16} />
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleTwitterConnect}
                  disabled={isConnecting === 'twitter'}
                  variant="outline"
                  size="sm"
                  className="border-nft-blue/50 text-nft-blue hover:bg-nft-blue/10"
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
                <Wallet className="text-nft-blue" size={24} />
                <div>
                  <h3 className="font-semibold">Web3 Wallet</h3>
                  <p className="text-sm text-gray-400">
                    {connections.wallet ? formatAddress(connections.wallet.address) : 'Connect your Web3 wallet'}
                  </p>
                </div>
              </div>
              {connections.wallet ? (
                <div className="flex items-center space-x-2">
                  <Check className="text-green-500" size={20} />
                  <Button
                    onClick={handleWalletDisconnect}
                    variant="outline"
                    size="sm"
                    className="border-nft-blue/50 text-nft-blue hover:bg-nft-blue/10"
                  >
                    <LogOut size={16} />
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={handleWalletConnect}
                  disabled={isConnecting === 'wallet'}
                  variant="outline"
                  size="sm"
                  className="border-nft-blue/50 text-nft-blue hover:bg-nft-blue/10"
                >
                  {isConnecting === 'wallet' ? 'Connecting...' : 'Connect'}
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-nft-blue/20">
          <p className="text-sm text-gray-400 text-center">
            Connect to access exclusive MonkeyNFT features and community
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConnectionModal;
