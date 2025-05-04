
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';

const StudentFeedback: React.FC = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Missing Rating",
        description: "Please provide a rating",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your feedback!",
    });
    
    // In a real app, this would send the feedback to the server
    console.log("Feedback submitted:", { feedback, rating });
    
    navigate('/student/dashboard');
  };
  
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-writeEdge-blue">Provide Feedback</h1>
        
        <div className="bg-writeEdge-cream rounded-lg p-6 shadow">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                Rate your experience (1-5)
              </label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className={`p-2 text-2xl ${
                      rating >= star ? 'text-writeEdge-gold' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
                Your Feedback
              </label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={5}
                className="writeEdge-input"
                placeholder="Please share your thoughts about your experience..."
              />
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="writeEdge-btn writeEdge-btn-primary"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default StudentFeedback;
