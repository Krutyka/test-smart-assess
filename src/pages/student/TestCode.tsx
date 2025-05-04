
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useTest } from '@/contexts/TestContext';
import { useToast } from '@/hooks/use-toast';

const TestCode: React.FC = () => {
  const [testCode, setTestCode] = useState('');
  const { startTest } = useTest();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!testCode.trim()) {
      toast({
        title: "Error",
        description: "Please enter a test code",
        variant: "destructive",
      });
      return;
    }
    
    const success = startTest(testCode.trim().toUpperCase());
    
    if (success) {
      navigate('/student/test-interface');
    }
  };
  
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)]">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">Enter Test Code</h1>
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={testCode}
              onChange={(e) => setTestCode(e.target.value)}
              className="writeEdge-input text-center text-xl uppercase mb-6"
              autoFocus
              placeholder="Enter code here"
            />
            
            <button
              type="submit"
              className="writeEdge-btn writeEdge-btn-primary w-full"
            >
              START TEST
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default TestCode;
