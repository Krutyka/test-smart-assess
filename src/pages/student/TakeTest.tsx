
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useTest } from '@/contexts/TestContext';
import { useToast } from '@/hooks/use-toast';

const StudentTakeTest: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-center mb-8">ENTER THE TEST CODE</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={testCode}
              onChange={(e) => setTestCode(e.target.value)}
              className="w-full text-center text-xl uppercase p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-writeEdge-blue"
              autoFocus
              placeholder="Enter code here"
            />
            
            <button
              type="submit"
              className="w-full bg-writeEdge-blue hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-colors"
            >
              START
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default StudentTakeTest;
