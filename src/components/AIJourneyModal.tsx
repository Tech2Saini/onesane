import { useState } from "react";
import { X, Bot, MessageSquare, Settings, BarChart3, Loader2, Zap, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useToast } from '@/hooks/use-toast';



interface AIJourneyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = 'intro' | 'signup' | 'services' | 'confirmation';

const AIJourneyModal = ({ isOpen, onClose }: AIJourneyModalProps) => {
  const [currentStep, setCurrentStep] = useState<Step>('intro');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedMessaging, setSelectedMessaging] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false)
  const { toast } = useToast();


  const services = [
    {
      id: 'chat-agent',
      title: 'AI Chat Agent',
      description: 'Intelligent conversational AI for customer support',
      icon: MessageSquare,
      features: ['24/7 availability', 'Multi-language support', 'Custom training']
    },
    {
      id: 'automation',
      title: 'Automation Tools',
      description: 'Streamline workflows and reduce manual tasks',
      icon: Settings,
      features: ['Process automation', 'Data processing', 'Integration APIs']
    },
    {
      id: 'analytics',
      title: 'Analytics Dashboard',
      description: 'AI-powered insights and business intelligence',
      icon: BarChart3,
      features: ['Real-time analytics', 'Predictive modeling', 'Custom reports']
    }
  ];

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const handleNext = () => {
    if (currentStep === 'intro') setCurrentStep('signup');
    else if (currentStep === 'signup') setCurrentStep('services');
    else if (currentStep === 'services') setCurrentStep('confirmation');
  };

  const handleBack = () => {
    if (currentStep === 'signup') setCurrentStep('intro');
    else if (currentStep === 'services') setCurrentStep('signup');
    else if (currentStep === 'confirmation') setCurrentStep('services');
  };

  const reset = () => {
    setCurrentStep('intro');
    setEmail('');
    setPhone('');
    setSelectedMessaging('');
    setSelectedServices([]);
  };

  const handleClose = () => {
    reset();
    onClose();

  };

  const submitdata = () => {
    setSubmitting(true)
    const data = {
      email,
      phone,
      message: selectedMessaging,
      service: selectedServices
    }
    console.log(data)

    setTimeout(() => {
      setSubmitting(false)
      handleClose()
      toast({
        title: "Journey Submited",
        description: "Your information has been send to onesane team successfully.",
      });
    }, 3000);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-4 px-1">
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-4xl mx-4 max-h-[95vh] glass border border-glass-border rounded-3xl glow-subtle">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-glass-border/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center glow-primary">
              <Bot className="w-6 h-6 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold gradient-text">Start Your AI Journey</h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="hover:bg-accent/20"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="py-2 px-6" style={{ overflow: "auto", height: "73vh" }}>
          {currentStep === 'intro' && (
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold gradient-text">Welcome to Onesane AI</h3>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Your personal AI assistant hub for business transformation
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {services.map((service) => (
                  <div key={service.id} className="glass border border-glass-border rounded-2xl p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 glow-primary">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-foreground">{service.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-accent rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleNext}
                className="bg-gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 glow-primary"
              >
                Let's Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          )}

          {currentStep === 'signup' && (
            <div className="max-w-md mx-auto space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold gradient-text">Join Onesane AI</h3>
                <p className="text-muted-foreground">
                  Connect your preferred channels and get started
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jonedoye@email.com"
                    className="bg-glass border-glass-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <PhoneInput
                    country={"in"} // default India
                    value={phone}
                    onChange={(value) => setPhone(value)}
                    inputClass="bg-glass border-glass-border focus:border-accent p-4"
                    inputStyle={{ backgroundColor: "transparent", border: "1px solid #273248", width: "100%", boxShadow: "0 0 3px #1a2233ff" }}
                  />
                </div>


                <div className="space-y-2">
                  <Label>Preferred Messaging Platform</Label>
                  <Select value={selectedMessaging} onValueChange={setSelectedMessaging}>
                    <SelectTrigger className="bg-glass border-glass-border focus:border-accent">
                      <SelectValue placeholder="Choose platform" />
                    </SelectTrigger>
                    <SelectContent style={{ zIndex: "100" }}>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="telegram">Telegram</SelectItem>
                      <SelectItem value="slack">Slack</SelectItem>
                      <SelectItem value="discord">Discord</SelectItem>
                      <SelectItem value="none">Email Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={handleBack} className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!email}
                  className="flex-1 bg-gradient-primary text-primary-foreground"
                >
                  Continue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {currentStep === 'services' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold gradient-text">Choose Your AI Journey</h3>
                <p className="text-muted-foreground">
                  Select the services you'd like to explore (you can add more later)
                </p>
              </div>

              <div className="grid gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className={`glass border border-glass-border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${selectedServices.includes(service.id)
                      ? 'border-accent glow-primary bg-accent/5'
                      : 'hover:border-accent/50'
                      }`}
                    onClick={() => handleServiceToggle(service.id)}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${selectedServices.includes(service.id)
                        ? 'bg-gradient-primary glow-primary'
                        : 'bg-muted'
                        }`}>
                        {selectedServices.includes(service.id) ? (
                          <Check className="w-6 h-6 text-primary-foreground" />
                        ) : (
                          <service.icon className="w-6 h-6 text-muted-foreground" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-2 text-foreground">{service.title}</h4>
                        <p className="text-muted-foreground mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <span key={idx} className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={handleBack} className="flex-1">
                  Back
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={selectedServices.length === 0}
                  className="flex-1 bg-gradient-primary text-primary-foreground"
                >
                  Complete Setup
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {currentStep === 'confirmation' && (
            <div className="text-center space-y-6 max-w-md mx-auto">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto glow-primary">
                <Check className="w-10 h-10 text-primary-foreground" />
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold gradient-text">You're All Set!</h3>
                <p className="text-muted-foreground">
                  Welcome to Onesane AI! Let's start your AI journey.
                </p>
              </div>

              <div className="glass border border-glass-border rounded-2xl p-4 text-left space-y-2">
                <h4 className="font-semibold text-foreground">Your Setup:</h4>
                <p className="text-sm text-muted-foreground">Email: {email}</p>
                {phone && <p className="text-sm text-muted-foreground">Phone: {phone}</p>}
                {selectedMessaging && (
                  <p className="text-sm text-muted-foreground">Platform: {selectedMessaging}</p>
                )}
                <p className="text-sm text-muted-foreground">
                  Services: {selectedServices.length} selected
                </p>
              </div>

              <div className="space-y-3">
                <h3>Submit your details and we'll get in touch with you soon</h3>
                <Button
                  className="w-full bg-gradient-primary text-primary-foreground hover:scale-105 transition-all duration-300 glow-primary flex items-center justify-center"
                  disabled={submitting}
                  onClick={() => {
                    if (!submitting) {
                      submitdata();
                    }
                  }}
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />  {/* 🔄 Spinner animation */}
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-2" />
                      Submit to Onesane
                    </>
                  )}
                </Button>



              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIJourneyModal;