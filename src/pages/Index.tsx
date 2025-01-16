import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import VisitorCounter from "@/components/VisitorCounter";
import { MemberList } from "@/components/MemberList";

const Index = () => {
  const [appId, setAppId] = useState("");
  const [logs, setLogs] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString();
    setLogs(prev => [`${timestamp} [ Information ] Finding APP ID: ${appId}`, ...prev]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-red-950 to-black p-4 overflow-hidden">
      <VisitorCounter />
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('/lovable-uploads/11a8b27f-ceb0-48bf-b56f-5c3090d7ca0c.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(4px)',
          animation: 'pulse 8s ease-in-out infinite'
        }}
      />
      
      <MemberList />
      
      <div className="glass-card p-8 max-w-2xl w-full mx-auto space-y-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 rounded-xl backdrop-blur-xl"></div>
        
        <div className="relative space-y-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-red-500 animate-text-shimmer"
              style={{
                textShadow: '0 0 30px rgba(234, 56, 76, 0.3)'
              }}>
              Manifest & Lua Generator
            </h1>
            
            <p className="text-sm text-red-300/80 font-medium">
              bug inquiries? question? jangan lupa baca informasi dibawah.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder="Enter your APP ID / URL"
                value={appId}
                onChange={(e) => setAppId(e.target.value)}
                className="flex-1 h-12 bg-black/40 border-red-500/20 focus:border-red-500/40 rounded-xl text-base placeholder:text-gray-400 transform hover:translate-y-[-2px] transition-all duration-300"
              />
              <Button 
                type="submit"
                className="h-12 px-8 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium rounded-xl transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
              >
                Submit
              </Button>
            </div>
          </form>

          <div className="relative mt-6">
            <div className="bg-black/40 rounded-xl p-5 h-[200px] overflow-y-auto custom-scrollbar border border-red-500/10">
              <pre className="text-left font-mono text-sm text-green-400/90">
                {logs.map((log, index) => (
                  <div key={index} className="py-1 px-2 rounded hover:bg-white/5 transition-all duration-200">
                    {log}
                  </div>
                ))}
              </pre>
            </div>
          </div>

          <div className="text-center text-sm">
            <span className="text-red-300/80">Need DLC? Achievement? Go check out </span>
            <a 
              href="https://vteam.store" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 underline transform hover:scale-105 transition-transform duration-300 font-medium"
            >
              VTeam Manifest App / Modded Steam
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;