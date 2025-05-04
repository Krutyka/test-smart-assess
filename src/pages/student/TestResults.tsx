
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTest } from '@/contexts/TestContext';
import { useToast } from '@/hooks/use-toast';
import Logo from '@/components/Logo';

const TestResults: React.FC = () => {
  const { currentSubmission } = useTest();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Redirect if no submission
  React.useEffect(() => {
    if (!currentSubmission) {
      toast({
        title: "No Test Results",
        description: "There are no test results to display.",
        variant: "destructive",
      });
      navigate('/student/dashboard');
    }
  }, [currentSubmission, navigate, toast]);
  
  if (!currentSubmission) {
    return null; // Will redirect in the useEffect
  }
  
  const requestEmailSummary = () => {
    toast({
      title: "Summary Sent",
      description: `A detailed summary has been sent to ${currentSubmission.userEmail}`,
    });
  };
  
  return (
    <div className="min-h-screen bg-writeEdge-blue">
      {/* Header */}
      <header className="bg-writeEdge-blue text-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center">
          <Logo size="small" />
          <span className="ml-6 text-xl">Test ID: {currentSubmission.testId}</span>
        </div>
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => navigate('/student/dashboard')}
            className="text-white hover:text-writeEdge-gold"
          >
            DASHBOARD
          </button>
          <button 
            onClick={() => navigate('/')}
            className="text-white hover:text-writeEdge-gold"
          >
            QUIT
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-center text-writeEdge-gold mb-6">TEST RESULTS</h1>
        
        {/* Overall Score */}
        <div className="flex justify-center mb-10">
          <div className="bg-writeEdge-cream py-2 px-10 rounded-full">
            <h2 className="text-2xl font-bold">
              {currentSubmission.overallScore}/{currentSubmission.totalPossibleScore}
            </h2>
          </div>
        </div>
        
        {/* Questions Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {currentSubmission.results.map((result, index) => (
            <div key={result.questionId} className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="bg-writeEdge-cream px-4 py-2 rounded-md font-semibold">QUESTION {index + 1}</h3>
                <span className="bg-writeEdge-cream px-3 py-1 rounded-full font-semibold">{result.score}/{result.maxScore}</span>
              </div>
              
              <div className="bg-writeEdge-cream p-4 rounded-lg">
                <h4 className="uppercase font-semibold text-gray-700 mb-2">SPELL & GRAMMAR CHECK</h4>
                <p className="text-sm">{result.grammarCheck}</p>
              </div>
              
              <div className="bg-writeEdge-cream p-4 rounded-lg">
                <h4 className="uppercase font-semibold text-gray-700 mb-2">CONTENT FEEDBACK</h4>
                <p className="text-sm">{result.contentFeedback}</p>
              </div>
              
              <div className="bg-writeEdge-cream p-4 rounded-lg">
                <h4 className="uppercase font-semibold text-gray-700 mb-2">SUGGESTIONS</h4>
                <p className="text-sm">{result.suggestions}</p>
              </div>
              
              <div className="text-white text-sm">
                Word Count: {result.wordCount}
              </div>
            </div>
          ))}
        </div>
        
        {/* Email Summary Button */}
        <div className="text-center mt-12">
          <p className="text-white mb-4">CLICK BELOW TO GET A DETAILED SUMMARY ON YOUR MAIL</p>
          <button 
            onClick={requestEmailSummary}
            className="writeEdge-btn writeEdge-btn-accent px-10"
          >
            SUMMARY
          </button>
        </div>
      </main>
    </div>
  );
};

export default TestResults;
