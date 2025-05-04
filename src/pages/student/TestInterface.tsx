
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useTest } from '@/contexts/TestContext';
import { useToast } from '@/hooks/use-toast';
import Logo from '@/components/Logo';

const TestInterface: React.FC = () => {
  const { activeTest, submitTest } = useTest();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: string, answer: string }[]>([]);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  
  // Redirect if no active test
  useEffect(() => {
    if (!activeTest) {
      toast({
        title: "No Active Test",
        description: "There is no active test. Please enter a test code.",
        variant: "destructive",
      });
      navigate('/student/take-test');
    } else {
      // Initialize answers array
      const initialAnswers = activeTest.questions.map(q => ({ questionId: q.id, answer: '' }));
      setAnswers(initialAnswers);
      
      // Initialize timer
      setTimeLeft(activeTest.duration * 60); // Convert minutes to seconds
    }
  }, [activeTest, navigate, toast]);
  
  // Timer effect
  useEffect(() => {
    if (!timeLeft) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev && prev > 1) {
          return prev - 1;
        } else {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [timeLeft]);
  
  if (!activeTest) {
    return null; // Will redirect in the useEffect
  }
  
  const currentQuestion = activeTest.questions[currentQuestionIndex];
  
  const formatTimeLeft = () => {
    if (timeLeft === null) return '00:00';
    
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex].answer = e.target.value;
    setAnswers(updatedAnswers);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < activeTest.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const getWordCount = (text: string) => {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  };
  
  const handleSubmit = () => {
    // Check if any answers are empty
    const emptyAnswers = answers.filter(a => !a.answer.trim());
    
    if (emptyAnswers.length > 0) {
      const confirmSubmit = window.confirm(
        `You have ${emptyAnswers.length} unanswered question(s). Are you sure you want to submit?`
      );
      
      if (!confirmSubmit) {
        return;
      }
    }
    
    submitTest(answers);
    navigate('/student/test-results');
  };
  
  return (
    <div className="min-h-screen bg-writeEdge-blue">
      {/* Header */}
      <header className="bg-writeEdge-blue text-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center">
          <Logo size="small" />
          <span className="ml-6 text-xl">Test ID: {activeTest.code}</span>
        </div>
        <div className="flex items-center space-x-6">
          <span className="text-xl">Time Left: {formatTimeLeft()}</span>
          <button 
            onClick={() => navigate('/student/dashboard')}
            className="text-white hover:text-writeEdge-gold"
          >
            QUIT
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">
        {/* Question Header */}
        <div className="mb-6 text-white">
          <h2 className="text-2xl">Question {currentQuestionIndex + 1}</h2>
        </div>
        
        {/* Problem Statement */}
        <div className="bg-writeEdge-gold p-4 rounded-lg mb-6">
          <h2 className="text-xl text-center text-writeEdge-blue font-bold mb-4">PROBLEM STATEMENT</h2>
          <div className="bg-writeEdge-cream p-4 rounded-lg">
            <p className="text-lg text-writeEdge-blue font-medium">
              {currentQuestion?.text || 'No question available'}
            </p>
          </div>
        </div>
        
        {/* Answer Box */}
        <div className="bg-writeEdge-cream rounded-lg p-6 mb-6">
          <textarea
            value={answers[currentQuestionIndex]?.answer || ''}
            onChange={handleTextChange}
            placeholder="Type your answer here..."
            className="w-full h-64 p-4 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-writeEdge-blue"
          ></textarea>
          <div className="flex justify-end mt-2">
            <p className="text-gray-600">
              Word Count: {getWordCount(answers[currentQuestionIndex]?.answer || '')}
            </p>
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className={`writeEdge-btn ${
              currentQuestionIndex === 0 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'writeEdge-btn-primary'
            }`}
          >
            Previous
          </button>
          
          {currentQuestionIndex < activeTest.questions.length - 1 ? (
            <button
              onClick={handleNextQuestion}
              className="writeEdge-btn writeEdge-btn-primary"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="writeEdge-btn writeEdge-btn-accent"
            >
              Submit
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default TestInterface;
