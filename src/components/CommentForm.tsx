import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { MessageSquare, Send, Loader2 } from 'lucide-react';
import React, { useEffect, useContext, useState } from 'react';
import BlogContext from '../Contexts/BlogContext';
import AuthContext from "@/Contexts/AuthContext";
import Cookies from "js-cookie";

interface CommentFormProps {
  blogSlug: string;
  parentId?: string;
  onCommentAdded: () => void;
  onCancel?: () => void;
  placeholder?: string;
}

export const CommentForm = ({
  blogSlug,
  parentId,
  onCommentAdded,
  onCancel,
  placeholder = "Share your thoughts..."
}: CommentFormProps) => {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { addComment, addReply, loading } = useContext(BlogContext);
  const { authUser, setAuthUser, logout } = useContext(AuthContext);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) {
      toast({
        title: "Empty Comment",
        description: "Please enter your comment.",
        variant: "destructive"
      });
      return;
    }

    if (!authUser?.email) {
      toast({
        title: "Authentication Required",
        description: "Please authenticate to post a comment.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    // {id,blog,user,content,parent}
    await addComment(blogSlug, content, authUser.email, parentId);
    setContent('');
    onCommentAdded();
    toast({
      title: "Comment Posted",
      description: "Your comment has been added successfully.",
    });
    if (onCancel) onCancel();

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={placeholder}
          rows={parentId ? 3 : 4}
          className="glass border-glass-border/50 focus:border-primary/50 resize-none"
          disabled={isLoading}
        />
        {authUser && (
          <p className="text-xs text-muted-foreground">
            Posting as <span className="text-primary">{authUser.name}</span>
          </p>
        )}
      </div>

      <div className="flex gap-2 justify-end">
        {onCancel && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={onCancel}
            className="glass border-glass-border/50"
            disabled={isLoading}
          >
            Cancel
          </Button>
        )}
        <Button
          type="submit"
          size="sm"
          className="glow-primary hover:glow-accent"
          disabled={isLoading || !content.trim()}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              {parentId ? 'Replying...' : 'Posting...'}
            </>
          ) : (
            <>
              {parentId ? <MessageSquare className="w-4 h-4 mr-2" /> : <Send className="w-4 h-4 mr-2" />}
              {parentId ? 'Reply' : 'Post Comment'}
            </>
          )}
        </Button>
      </div>
    </form>
  );
};