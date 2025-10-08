import React, { useEffect, useContext, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { CommentItem } from './CommentItem';
import { CommentForm } from './CommentForm';
import { AuthModal } from './AuthModal';
import AuthContext from "@/Contexts/AuthContext";
import Cookies from "js-cookie";


import BlogContext from '../Contexts/BlogContext';

interface CommentsSectionProps {
  blogSlug: string;
}

export const CommentsSection = ({ blogSlug }: CommentsSectionProps) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const { toast } = useToast();
  const { comments, loading, getComments } = useContext(BlogContext);
  const { authUser, setAuthUser, logout } = useContext(AuthContext);

  const handleAuthRequired = () => {
    if (!authUser) {
      setShowAuthModal(true);
    }
  };

  const handleLogout = async () => {
    try {
      const token = Cookies.get("auth_token");
      const response = await logout(token);
      if (response.success) {
        setAuthUser(null);
        Cookies.remove("auth_token"); // store for 0 days

        toast({
          title: "Logged Out",
          description: "You have been logged out successfully.",
        });
      }
      else {
        toast({
          title: "Error",
          description: "Failed to log out. Please try again.",
          variant: "destructive"
        });
      }

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleCommentAdded = () => {
    getComments(blogSlug); // refresh comments after adding
    // console.log("handle comment added :")
  };

  if (loading || !comments) {
    return (
      <div className="space-y-6 m-5">
        <div className="glass-card animate-pulse">
          <div className="h-6 bg-glass-border/30 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-glass-border/30 rounded w-full"></div>
            <div className="h-4 bg-glass-border/30 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Comments Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-primary">
            <MessageSquare className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-xl font-bold gradient-text">Discussion</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <Users className="w-4 h-4" />
              {comments.length} {comments.length === 1 ? 'comment' : 'comments'}
            </p>
          </div>
        </div>

        {authUser && (
          <div className="flex items-center gap-3">
            <div className="text-sm">
              <p className="font-medium text-foreground">Welcome, {authUser.name}</p>
              <p className="text-muted-foreground text-xs">{authUser.email}</p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="glass border-glass-border/50 hover:bg-destructive/10 hover:border-destructive/50"
            >
              <LogOut className="w-4 h-4 mr-1" />
              Logout
            </Button>
          </div>
        )}
      </div>

      {/* Comment Form or Auth Prompt */}
      <div className="glass-card">
        {authUser ? (
          <CommentForm blogSlug={blogSlug} parentId={null} onCommentAdded={handleCommentAdded} />
        ) : (
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <MessageSquare className="w-12 h-12 mx-auto text-muted-foreground" />
              <h4 className="font-semibold">Join the Discussion</h4>
              <p className="text-sm text-muted-foreground">
                Share your thoughts and connect with the community
              </p>
            </div>
            <Button
              onClick={handleAuthRequired}
              className="glow-primary hover:glow-accent"
            >
              Start Commenting
            </Button>
          </div>
        )}
      </div>

      {/* Comments List */}
      {comments.length > 0 ? (
        <div className="space-y-6">
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
              blogSlug={blogSlug}
              onCommentAdded={handleCommentAdded}
            />
          ))}
        </div>
      ) : (
        <div className="glass-card text-center py-12">
          <MessageSquare className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h4 className="text-lg font-semibold mb-2">No comments yet</h4>
          <p className="text-muted-foreground">
            Be the first to share your thoughts on this article!
          </p>
        </div>
      )}

      {/* Auth Modal (Uncomment when ready) */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </div>
  );
};
