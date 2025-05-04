
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';

const topics = [
  "Business Email Response",
  "Customer Service Communication",
  "Project Proposal",
  "Meeting Summary",
  "Technical Documentation",
  "Product Description",
  "Marketing Content",
  "Team Collaboration Message",
];

const StudentPractice = () => {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [promptText, setPromptText] = useState('');
  const [response, setResponse] = useState('');
  const [feedback, setFeedback] = useState<null | {
    grammar: string;
    content: string;
    suggestions: string;
    score: number;
  }>(null);
  const { toast } = useToast();
  
  const generatePrompt = () => {
    if (!selectedTopic) {
      toast({
        title: "Topic Required",
        description: "Please select a topic first",
        variant: "destructive",
      });
      return;
    }
    
    // Mock prompt generation - in real app would call AI API
    const prompts = {
      "Business Email Response": "You're a customer service manager at a software company. Draft a response to a client who is experiencing technical difficulties with your product after a recent update.",
      "Customer Service Communication": "As a support agent, write a message explaining to a customer why their recent refund request is taking longer than the typical processing time.",
      "Project Proposal": "Create a brief project proposal for implementing a new employee training program at your company. Include objectives, timeline, and expected benefits.",
      "Meeting Summary": "Summarize the key points from a team meeting discussing quarterly goals, project updates, and upcoming deadlines.",
      "Technical Documentation": "Write a step-by-step guide explaining how to reset a user's password in your company's customer database system.",
      "Product Description": "Create a compelling product description for a new smartwatch that tracks health metrics and connects to mobile devices.",
      "Marketing Content": "Write a short promotional email announcing a 30% discount on your company's premium subscription plan.",
      "Team Collaboration Message": "Draft a message to your team explaining changes to the project timeline and requesting updated milestone deliverables.",
    };
    
    setPromptText(prompts[selectedTopic as keyof typeof prompts] || "");
  };
  
  const handleSubmit = () => {
    if (!response.trim()) {
      toast({
        title: "Response Required",
        description: "Please write a response to the prompt",
        variant: "destructive",
      });
      return;
    }
    
    // Mock feedback generation - in real app would call AI API
    const mockFeedback = {
      grammar: "Your writing shows good command of grammar and punctuation. Consider using more varied sentence structures to improve flow.",
      content: "Your response addresses the main points of the prompt and provides relevant information. Adding specific examples would strengthen your answer.",
      suggestions: "Try incorporating more professional terminology related to the topic. Consider adding a clear call-to-action at the end of your response.",
      score: Math.floor(Math.random() * 30) + 70, // Random score between 70-100
    };
    
    setFeedback(mockFeedback);
    
    toast({
      title: "Response Evaluated",
      description: "Your practice response has been analyzed",
    });
  };
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">Practice Writing Skills</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Topic Selection */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Select Topic</h2>
              <div className="space-y-3">
                {topics.map(topic => (
                  <div key={topic} className="flex items-center">
                    <input
                      type="radio"
                      id={topic.replace(/\s+/g, '')}
                      name="topic"
                      value={topic}
                      checked={selectedTopic === topic}
                      onChange={() => setSelectedTopic(topic)}
                      className="w-4 h-4 text-writeEdge-lightBlue focus:ring-writeEdge-lightBlue"
                    />
                    <label htmlFor={topic.replace(/\s+/g, '')} className="ml-2 block text-sm">
                      {topic}
                    </label>
                  </div>
                ))}
              </div>
              
              <button
                onClick={generatePrompt}
                className="writeEdge-btn writeEdge-btn-primary w-full mt-4"
              >
                Generate Prompt
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Writing Tips</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-writeEdge-lightBlue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>Use active voice for more direct and engaging writing</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-writeEdge-lightBlue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>Start with a clear introduction that states your purpose</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-writeEdge-lightBlue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>Use concrete examples instead of abstract statements</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-writeEdge-lightBlue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>Keep paragraphs focused on a single idea or point</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-writeEdge-lightBlue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <span>Revise and edit your work before submitting</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Practice Area */}
          <div className="md:col-span-2">
            {/* Prompt */}
            <div className="bg-writeEdge-blue text-white p-6 rounded-lg shadow-md mb-6">
              <h2 className="text-lg font-semibold mb-3">Writing Prompt</h2>
              <p className="mb-4">{promptText || "Please select a topic and generate a prompt to begin practicing."}</p>
              {selectedTopic && (
                <div className="text-sm text-writeEdge-gold">
                  Topic: {selectedTopic}
                </div>
              )}
            </div>
            
            {/* Response Area */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Your Response</h2>
              <textarea
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Write your response here..."
                className="w-full h-64 p-4 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-writeEdge-lightBlue"
              ></textarea>
              
              <div className="flex justify-between items-center mt-4">
                <div className="text-sm text-gray-600">
                  Word count: {response.trim() ? response.trim().split(/\s+/).length : 0}
                </div>
                <button
                  onClick={handleSubmit}
                  className="writeEdge-btn writeEdge-btn-primary"
                >
                  Submit for Feedback
                </button>
              </div>
            </div>
            
            {/* Feedback Area */}
            {feedback && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold">Feedback</h2>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-600 mr-2">Score:</span>
                    <span className="bg-writeEdge-lightBlue text-white px-3 py-1 rounded-full font-medium">
                      {feedback.score}/100
                    </span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-writeEdge-blue mb-2">Grammar & Structure</h3>
                    <p className="text-gray-700">{feedback.grammar}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-writeEdge-blue mb-2">Content Quality</h3>
                    <p className="text-gray-700">{feedback.content}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-writeEdge-blue mb-2">Suggestions for Improvement</h3>
                    <p className="text-gray-700">{feedback.suggestions}</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => {
                      setResponse('');
                      setFeedback(null);
                    }}
                    className="writeEdge-btn bg-gray-200 text-gray-700 hover:bg-gray-300"
                  >
                    Practice Again
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentPractice;
