import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useTest, Question } from '@/contexts/TestContext';
import { useToast } from '@/hooks/use-toast';

const CreateTest: React.FC = () => {
  const [testName, setTestName] = useState('');
  const [totalDuration, setTotalDuration] = useState('');
  const [testDuration, setTestDuration] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [questions, setQuestions] = useState<Question[]>([
    { id: '1', text: '', difficulty: 'Medium', marks: 10 },
  ]);
  
  const { createTest } = useTest();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleQuestionTextChange = (index: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].text = value;
    setQuestions(updatedQuestions);
  };
  
  const handleDifficultyChange = (index: number, value: 'Easy' | 'Medium' | 'Hard') => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].difficulty = value;
    setQuestions(updatedQuestions);
  };
  
  const handleMarksChange = (index: number, value: string) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].marks = parseInt(value) || 0;
    setQuestions(updatedQuestions);
  };
  
  const handleNumberOfQuestionsChange = (value: string) => {
    const num = parseInt(value) || 1;
    setNumberOfQuestions(num);
    
    // Update questions array based on new number
    if (num > questions.length) {
      // Add new questions
      const newQuestions = [...questions];
      for (let i = questions.length; i < num; i++) {
        newQuestions.push({
          id: (i + 1).toString(),
          text: '',
          difficulty: 'Medium',
          marks: 10,
        });
      }
      setQuestions(newQuestions);
    } else if (num < questions.length) {
      // Remove questions
      setQuestions(questions.slice(0, num));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (!testName.trim()) {
      toast({
        title: "Missing Information",
        description: "Please enter a test name",
        variant: "destructive",
      });
      return;
    }
    
    if (!startTime || !endTime) {
      toast({
        title: "Missing Information",
        description: "Please specify start and end times",
        variant: "destructive",
      });
      return;
    }
    
    if (!testDuration) {
      toast({
        title: "Missing Information",
        description: "Please specify test duration",
        variant: "destructive",
      });
      return;
    }
    
    // Validate all questions have text
    const emptyQuestions = questions.filter(q => !q.text.trim());
    if (emptyQuestions.length > 0) {
      toast({
        title: "Incomplete Questions",
        description: `${emptyQuestions.length} question(s) have no text`,
        variant: "destructive",
      });
      return;
    }
    
    // Create test with the returned test object
    const newTest = createTest({
      name: testName,
      startTime,
      endTime,
      duration: parseInt(testDuration) || 30,
      questions,
      createdBy: 'admin',
    });
    
    // Display test code in toast
    toast({
      title: "Test Created Successfully",
      description: `Test code: ${newTest.code}`,
    });
    
    navigate('/admin/tests');
  };
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-writeEdge-blue">Create a New Test</h1>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Test Information */}
          <div className="bg-writeEdge-cream rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Test Information</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="testName" className="block text-sm font-medium text-gray-700 mb-1">
                  Test Name
                </label>
                <input 
                  type="text"
                  id="testName"
                  value={testName}
                  onChange={(e) => setTestName(e.target.value)}
                  placeholder="Enter test name"
                  className="writeEdge-input"
                />
              </div>
              
              <div>
                <label htmlFor="testDuration" className="block text-sm font-medium text-gray-700 mb-1">
                  Test Duration (minutes)
                </label>
                <input 
                  type="number"
                  id="testDuration"
                  value={testDuration}
                  onChange={(e) => setTestDuration(e.target.value)}
                  placeholder="e.g. 30"
                  min="1"
                  className="writeEdge-input"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Start Time
                  </label>
                  <input 
                    type="datetime-local"
                    id="startTime"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    className="writeEdge-input"
                  />
                </div>
                
                <div>
                  <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
                    End Time
                  </label>
                  <input 
                    type="datetime-local"
                    id="endTime"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    className="writeEdge-input"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="numberOfQuestions" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Questions
                </label>
                <input 
                  type="number"
                  id="numberOfQuestions"
                  value={numberOfQuestions}
                  onChange={(e) => handleNumberOfQuestionsChange(e.target.value)}
                  min="1"
                  max="10"
                  className="writeEdge-input"
                />
              </div>
            </div>
          </div>
          
          {/* Questions */}
          {questions.map((question, index) => (
            <div key={question.id} className="bg-writeEdge-cream rounded-lg p-6 shadow">
              <h2 className="text-xl font-semibold mb-4">Question {index + 1}</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor={`question-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Question Text
                  </label>
                  <textarea 
                    id={`question-${index}`}
                    value={question.text}
                    onChange={(e) => handleQuestionTextChange(index, e.target.value)}
                    placeholder="Enter the question text"
                    className="writeEdge-input min-h-24"
                    rows={3}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`difficulty-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Difficulty
                    </label>
                    <select 
                      id={`difficulty-${index}`}
                      value={question.difficulty}
                      onChange={(e) => handleDifficultyChange(index, e.target.value as 'Easy' | 'Medium' | 'Hard')}
                      className="writeEdge-input"
                    >
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor={`marks-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Marks
                    </label>
                    <input 
                      type="number"
                      id={`marks-${index}`}
                      value={question.marks}
                      onChange={(e) => handleMarksChange(index, e.target.value)}
                      min="1"
                      className="writeEdge-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Submit Button */}
          <div className="flex justify-center">
            <button 
              type="submit"
              className="writeEdge-btn writeEdge-btn-accent px-8"
            >
              Generate Test Code
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateTest;
