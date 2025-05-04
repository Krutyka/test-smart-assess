
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export type Question = {
  id: string;
  text: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  marks: number;
};

export type TestResult = {
  questionId: string;
  score: number;
  maxScore: number;
  grammarCheck: string;
  contentFeedback: string;
  suggestions: string;
  wordCount: number;
  answer: string;
};

export type Test = {
  id: string;
  name: string;
  code: string;
  startTime: string;
  endTime: string;
  duration: number; // in minutes
  createdBy: string;
  questions: Question[];
};

export type TestSubmission = {
  id: string;
  testId: string;
  userId: string;
  userName: string;
  userEmail: string;
  submittedAt: string;
  results: TestResult[];
  overallScore: number;
  totalPossibleScore: number;
};

interface TestContextType {
  tests: Test[];
  activeTest: Test | null;
  currentSubmission: TestSubmission | null;
  submissions: TestSubmission[];
  createTest: (test: Omit<Test, 'id' | 'code'>) => void;
  startTest: (testCode: string) => boolean;
  submitTest: (answers: { questionId: string, answer: string }[]) => void;
  getTestResults: (testId: string) => TestSubmission[];
  getAllTests: () => Test[];
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export const useTest = () => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};

export const TestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tests, setTests] = useState<Test[]>([]);
  const [activeTest, setActiveTest] = useState<Test | null>(null);
  const [currentSubmission, setCurrentSubmission] = useState<TestSubmission | null>(null);
  const [submissions, setSubmissions] = useState<TestSubmission[]>([]);
  const { toast } = useToast();

  // Load data from localStorage on mount
  useEffect(() => {
    const storedTests = localStorage.getItem('writeEdge-tests');
    const storedSubmissions = localStorage.getItem('writeEdge-submissions');
    
    if (storedTests) {
      setTests(JSON.parse(storedTests));
    }
    
    if (storedSubmissions) {
      setSubmissions(JSON.parse(storedSubmissions));
    }
  }, []);

  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('writeEdge-tests', JSON.stringify(tests));
  }, [tests]);

  useEffect(() => {
    localStorage.setItem('writeEdge-submissions', JSON.stringify(submissions));
  }, [submissions]);

  const generateTestCode = (): string => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const createTest = (testData: Omit<Test, 'id' | 'code'>) => {
    const newTest: Test = {
      ...testData,
      id: Math.random().toString(36).substring(2, 9),
      code: generateTestCode(),
    };
    
    setTests([...tests, newTest]);
    
    toast({
      title: "Test Created",
      description: `Test "${newTest.name}" has been created with code: ${newTest.code}`,
    });
    
    return newTest;
  };

  const startTest = (testCode: string): boolean => {
    const test = tests.find(t => t.code === testCode);
    
    if (!test) {
      toast({
        title: "Invalid Test Code",
        description: "The test code you entered does not exist.",
        variant: "destructive",
      });
      return false;
    }
    
    const now = new Date();
    const startTime = new Date(test.startTime);
    const endTime = new Date(test.endTime);
    
    if (now < startTime) {
      toast({
        title: "Test Not Started Yet",
        description: `This test will be available from ${startTime.toLocaleString()}`,
        variant: "destructive",
      });
      return false;
    }
    
    if (now > endTime) {
      toast({
        title: "Test Expired",
        description: `This test was available until ${endTime.toLocaleString()}`,
        variant: "destructive",
      });
      return false;
    }
    
    setActiveTest(test);
    return true;
  };

  const evaluateAnswer = (question: Question, answer: string): TestResult => {
    // Mock AI evaluation - in a real app, this would call an AI service
    const wordCount = answer.split(/\s+/).filter(Boolean).length;
    const maxScore = question.marks;
    let score = 0;
    
    // Simple scoring based on word count and question difficulty
    if (question.difficulty === 'Easy') {
      score = Math.min(maxScore, wordCount > 30 ? maxScore : Math.floor(maxScore * wordCount / 30));
    } else if (question.difficulty === 'Medium') {
      score = Math.min(maxScore, wordCount > 50 ? maxScore : Math.floor(maxScore * wordCount / 50));
    } else {
      score = Math.min(maxScore, wordCount > 80 ? maxScore : Math.floor(maxScore * wordCount / 80));
    }
    
    // Random score if no answer
    if (!answer.trim()) {
      score = 0;
    }
    
    return {
      questionId: question.id,
      score,
      maxScore,
      grammarCheck: getGrammarFeedback(answer),
      contentFeedback: getContentFeedback(answer, question),
      suggestions: getSuggestions(answer),
      wordCount,
      answer
    };
  };

  const getGrammarFeedback = (text: string): string => {
    // Mock grammar feedback - in a real app, this would use an AI service
    const feedback = [
      "Good use of punctuation and sentence structure.",
      "Some minor grammatical errors detected. Consider reviewing your use of commas.",
      "Several spelling errors detected. Consider using a spell checker.",
      "Proper use of tenses throughout your response.",
      "Good paragraph structure and sentence variety.",
    ];
    return feedback[Math.floor(Math.random() * feedback.length)];
  };

  const getContentFeedback = (text: string, question: Question): string => {
    // Mock content feedback - in a real app, this would use an AI service
    const feedback = [
      "Your response addresses the key points of the question effectively.",
      "Good attempt, but your answer could benefit from more specific examples.",
      "Your response shows good understanding of the concept, but lacks depth in analysis.",
      "Well-structured response that directly addresses the question.",
      "Your answer demonstrates critical thinking and analysis of the topic.",
    ];
    return feedback[Math.floor(Math.random() * feedback.length)];
  };

  const getSuggestions = (text: string): string => {
    // Mock suggestions - in a real app, this would use an AI service
    const suggestions = [
      "Consider including more specific examples to strengthen your argument.",
      "Try to vary your sentence structure for better flow.",
      "Adding more industry-specific terminology would enhance your response.",
      "Consider addressing counterarguments to strengthen your position.",
      "Adding a clear conclusion would help summarize your key points.",
    ];
    return suggestions[Math.floor(Math.random() * suggestions.length)];
  };

  const submitTest = (answers: { questionId: string, answer: string }[]) => {
    if (!activeTest) {
      toast({
        title: "No Active Test",
        description: "There is no active test to submit.",
        variant: "destructive",
      });
      return;
    }
    
    const user = JSON.parse(localStorage.getItem('writeEdgeUser') || '{}');
    
    const results: TestResult[] = answers.map(answer => {
      const question = activeTest.questions.find(q => q.id === answer.questionId);
      if (!question) throw new Error(`Question ${answer.questionId} not found`);
      return evaluateAnswer(question, answer.answer);
    });
    
    const totalScore = results.reduce((sum, result) => sum + result.score, 0);
    const totalPossible = results.reduce((sum, result) => sum + result.maxScore, 0);
    
    const submission: TestSubmission = {
      id: Math.random().toString(36).substring(2, 9),
      testId: activeTest.id,
      userId: user.id || 'anonymous',
      userName: user.name || 'Anonymous',
      userEmail: user.email || 'anonymous@example.com',
      submittedAt: new Date().toISOString(),
      results,
      overallScore: totalScore,
      totalPossibleScore: totalPossible
    };
    
    setSubmissions([...submissions, submission]);
    setCurrentSubmission(submission);
    setActiveTest(null);
    
    toast({
      title: "Test Submitted",
      description: `Your answers have been submitted and evaluated.`,
    });
    
    // Mock email sending - in a real app, this would trigger an email service
    console.log(`Mock email sent to ${submission.userEmail} with test results`);
    
    return submission;
  };

  const getTestResults = (testId: string): TestSubmission[] => {
    return submissions.filter(sub => sub.testId === testId);
  };

  const getAllTests = (): Test[] => {
    return tests;
  };

  return (
    <TestContext.Provider
      value={{
        tests,
        activeTest,
        currentSubmission,
        submissions,
        createTest,
        startTest,
        submitTest,
        getTestResults,
        getAllTests,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};
