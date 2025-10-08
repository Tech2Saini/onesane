import { useContext, useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Mail, User, Shield } from 'lucide-react';
import AuthContext from "@/Contexts/AuthContext";
import Cookies from "js-cookie";


interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { authUser, setAuthUser, sendOTP, verifyOTP, getUser, logout } = useContext(AuthContext);

  // Step 1: Send OTP
  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter both name and email.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await sendOTP({ name, email });
      if (response.success) {
        setStep('otp');
        toast({
          title: "OTP Sent",
          description: "Check your email for the verification code.",
        });
      } else {
        toast({
          title: "Failed",
          description: response.message || "Could not send OTP.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send OTP. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a 6-digit OTP.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await verifyOTP({ email, otp });
      console.log("The response after verify otp : ", response)

      if (response.success && response.user) {
        // ✅ Set the authenticated user in AuthContext
        // setAuthUser(response.user);
        if (response.token) {
          Cookies.set("auth_token", response.token, { expires: 7 }); // store for 7 days
          setAuthUser(response.user);
        }
        toast({
          title: "Success",
          description: "You are now authenticated!",
        });

        onClose();
        resetForm();
      } else {
        toast({
          title: "Verification Failed",
          description: response.error,
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to verify OTP. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };


  const getAuthUser = async () => {
    try {
      const token = Cookies.get("auth_token");
      console.log("The local Cookie token : ", token)
      if (token) {

        const response = await getUser(token);
        console.log("The response is : ", response)

        if (response.success) {
          setAuthUser(response.user);
        } else {
          toast({
            title: "Error",
            description: "Session expired! Please log in again.",
            variant: "destructive"
          });
        }
      }
      else {
        toast({
          title: "Welcome to Onesane",
          description: "Verify email to make comments! But you can directly like this post",
          variant: "default"
        });
      }


    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch user data.",
        variant: "destructive"
      });
    }
  }

  const resetForm = () => {
    setStep('email');
    setName('');
    setEmail('');
    setOtp('');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  useEffect(() => {
    console.log("The auth user requested ")
    getAuthUser();
    console.log("The auth user request end")
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="glass-card max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 gradient-text">
            <Shield className="w-5 h-5" />
            {step === 'email' ? 'Join the Discussion' : 'Verify Your Email'}
          </DialogTitle>
        </DialogHeader>

        {step === 'email' ? (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2 text-sm">
                <User className="w-4 h-4" />
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={isLoading}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  Sending OTP...
                </>
              ) : (
                'Send Verification Code'
              )}
            </Button>
          </form>
        ) : (
          <div className="space-y-4 text-center flex justify-center items-center flex-col gap-2">
            <p className="text-sm text-muted-foreground">
              We've sent a verification code to <strong>{email}</strong>
            </p>
            <h6 className="text-sm font-bold text-muted-foreground">
              Enter 6 digit code
            </h6>
            <InputOTP maxLength={6}  value={otp} onChange={setOtp} disabled={isLoading}>
              <InputOTPGroup >
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <InputOTPSlot key={i} index={i} />
                ))}
              </InputOTPGroup>
            </InputOTP>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setStep('email')} className="flex-1" disabled={isLoading}>
                Back
              </Button>
              <Button onClick={handleVerifyOTP} className="flex-1" disabled={isLoading || otp.length !== 6}>
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    Verifying...
                  </>
                ) : (
                  'Verify Code'
                )}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
