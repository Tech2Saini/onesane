import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CommentForm } from './CommentForm';
import { Comment } from '@/services/api';
import { MessageSquare, Calendar, User } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { humanizeDate } from "../utils/formatTime";


interface CommentItemProps {
  comment: Comment;
  blogSlug: string;
  onCommentAdded: () => void;
  isReply?: boolean;
}

export const CommentItem = ({ comment, blogSlug, onCommentAdded, isReply = false }: CommentItemProps) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleReplyAdded = () => {
    setShowReplyForm(false);
    onCommentAdded();
  };

  return (
    <div className={`space-y-4 ${isReply ? 'ml-8 pl-4 border-l-2 border-glass-border/30' : ''}`}>
      <div className="glass-card space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2 text-sm">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <User className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground">{comment.user?.name || comment.user?.username}</p>
              <div className="flex items-center gap-1 text-muted-foreground text-xs">
                <Calendar className="w-3 h-3" />
                {humanizeDate(comment.created_at)}
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-sm max-w-none">
          <p className="text-foreground leading-relaxed whitespace-pre-wrap">
            {comment.content}
          </p>
        </div>

        {!isReply && (
          <div className="flex items-center gap-2 pt-2 border-t border-glass-border/30">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowReplyForm(!showReplyForm)}
              className="hover:bg-glass-border/50 text-muted-foreground hover:text-foreground"
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              Reply
            </Button>
          </div>
        )}
        {showReplyForm && (
          <div className="pt-4 border-t border-glass-border/30">
            <CommentForm
              blogSlug={blogSlug}
              parentId={comment.id}
              onCommentAdded={handleReplyAdded}
              onCancel={() => setShowReplyForm(false)}
              placeholder={`Reply to ${comment.name}...`}
            />
          </div>
        )}

      </div>

      {comment.replies && comment.replies.length > 0 && (
        <div className="space-y-4">
          {comment.replies.map((reply) => (
            <CommentItem
              key={reply.id}
              comment={reply}
              blogSlug={blogSlug}
              onCommentAdded={onCommentAdded}
              isReply={true}
            />
          ))}
        </div>
      )}

    </div>
  );
};