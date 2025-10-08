import { useState, useRef, useEffect } from "react";
import { X, Bot, Send, Sparkles, MessageSquare, Settings, BarChart3, ArrowRight, Copy, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface AIDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartJourney: () => void;
}

type Message = {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  isTyping?: boolean;
};

type DemoType = 'chat' | 'automation' | 'analytics' | null;

const AIDemoModal = ({ isOpen, onClose, onStartJourney }: AIDemoModalProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [currentDemo, setCurrentDemo] = useState<DemoType>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const demos = [
    {
      id: 'chat' as DemoType,
      title: 'Chat Agent Demo',
      description: 'Experience intelligent conversation',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'automation' as DemoType,
      title: 'Automation Example',
      description: 'See workflow automation in action',
      icon: Settings,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'analytics' as DemoType,
      title: 'AI Analytics Example',
      description: 'Explore data insights',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const presetQuestions = [
    "How can AI help my business?",
    "What automation tools do you offer?",
    "Show me analytics capabilities",
    "How does WhatsApp integration work?"
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        type: 'ai',
        content: "Hi! I'm your Onesane AI Assistant. Ask me anything or try one of our demos below.",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const simulateAIResponse = (userMessage: string): string => {
    const responses = {
      'business': "I can help transform your business with AI automation, intelligent chat agents, and data analytics. Our solutions typically increase efficiency by 40-60% and reduce response times to under 2 hours.",
      'automation': "Our automation tools can streamline workflows, process data automatically, and integrate with your existing systems. For example, we can automate customer inquiries, data entry, and report generation.",
      'analytics': "Our AI analytics provide real-time insights, predictive modeling, and custom dashboards. We can analyze customer behavior, sales trends, and operational efficiency to help you make data-driven decisions.",
      'whatsapp': "WhatsApp integration allows you to deploy AI agents directly in WhatsApp Business. Customers can interact naturally while getting instant, intelligent responses 24/7.",
      'default': "That's a great question! Our AI solutions are designed to be flexible and can be customized for your specific needs. Would you like to explore our chat agents, automation tools, or analytics dashboard?"
    };

    const message = userMessage.toLowerCase();
    if (message.includes('business') || message.includes('help')) return responses.business;
    if (message.includes('automation') || message.includes('workflow')) return responses.automation;
    if (message.includes('analytics') || message.includes('data') || message.includes('insight')) return responses.analytics;
    if (message.includes('whatsapp') || message.includes('telegram') || message.includes('integration')) return responses.whatsapp;

    return responses.default;
  };

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: simulateAIResponse(inputValue),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const startDemo = (demoType: DemoType) => {
    setCurrentDemo(demoType);

    const demoMessages = {
      chat: "🤖 Chat Agent Demo activated! This is how I'd help your customers with intelligent, natural conversations. Try asking about your services, pricing, or support!",
      automation: "⚙️ Automation Demo: I can show you how to automate customer onboarding, data processing, and workflow management. What process would you like to automate?",
      analytics: "📊 Analytics Demo: I'm analyzing your demo data... Here are some insights: 📈 Customer engagement up 45%, ⚡ Response time improved by 60%, 💡 3 optimization opportunities identified."
    };

    const demoMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      content: demoMessages[demoType] || demoMessages.chat,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, demoMessage]);
  };

  const handleClose = () => {
    setMessages([]);
    setCurrentDemo(null);
    setInputValue('');
    onClose();
  };

  const copyConversation = () => {
    const conversation = messages.map(msg => `${msg.type === 'user' ? 'You' : 'AI'}: ${msg.content}`).join('\n\n');
    navigator.clipboard.writeText(conversation);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-4 px-1">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-4xl h-[92vh] glass border border-glass-border rounded-3xl glow-subtle flex flex-col" style={{ overflowY: 'auto', }}>
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-glass-border/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center glow-primary">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-bold gradient-text">AI Demo Experience</h2>
              {currentDemo && (
                <Badge variant="outline" className="mt-1">
                  {demos.find(d => d.id === currentDemo)?.title}
                </Badge>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={copyConversation}
              className="hover:bg-accent/20"
            >
              <Copy className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleClose}
              className="hover:bg-accent/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Demo Selection */}
        {!currentDemo && (
          <div className="px-3 border-b border-glass-border/30">
            <div className="grid md:grid-cols-3 gap-4">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => startDemo(demo.id)}
                  className="glass border border-glass-border rounded-xl p-4 hover:border-accent transition-all duration-300 text-left group"
                >
                  
                  <div className={`w-10 h-10 bg-gradient-to-r ${demo.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <demo.icon className="w-5 h-5 text-white" />
                  </div><h3 className="font-semibold text-foreground">{demo.title}</h3>
                  <p className="text-sm text-muted-foreground">{demo.description}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${message.type === 'user'
                    ? 'bg-gradient-primary text-primary-foreground ml-auto'
                    : 'glass border border-glass-border'
                    }`}
                >
                  {message.type === 'ai' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Bot className="w-4 h-4 text-accent" />
                      <span className="text-xs text-accent font-medium">Onesane AI</span>
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <span className="text-xs opacity-70 mt-2 block">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="glass border border-glass-border p-4 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-4 h-4 text-accent" />
                    <span className="text-xs text-accent font-medium">Onesane AI</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Preset Questions */}
          {messages.length <= 1 && (
            <div className="px-6 pb-4">
              <div className="flex flex-wrap gap-2">
                {presetQuestions.map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInputValue(question)}
                    className="text-xs bg-accent/20 text-accent px-3 py-2 rounded-full hover:bg-accent/30 transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-6 border-t border-glass-border/30">
            <div className="flex gap-3 mb-4">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything about our AI solutions..."
                className="flex-1 bg-glass border-glass-border focus:border-accent"
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="bg-gradient-primary text-primary-foreground hover:scale-105 transition-all"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center justify-between flex-wrap-reverse gap-2">
              <p className="text-xs text-muted-foreground">
                This is a demo. Real AI responses would be even more contextual and accurate.
              </p>
              <Button
                onClick={() => {
                  handleClose();
                  onStartJourney();
                }}
                size="sm"
                className="bg-gradient-primary text-primary-foreground"
              >
                Start Your AI Journey
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDemoModal;