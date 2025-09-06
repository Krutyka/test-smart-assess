
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useTest } from '@/contexts/TestContext';
import { useToast } from '@/hooks/use-toast';

const AdminTests: React.FC = () => {
  const { tests, getTestResults } = useTest();
  const [activeTestId, setActiveTestId] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleEditTest = (testId: string) => {
    // TODO: Implement edit functionality or navigate to edit page
    toast({
      title: "Edit Test",
      description: "Edit functionality will be implemented soon",
    });
  };
  
  const handleDeleteTest = (testId: string) => {
    // TODO: Implement delete functionality
    toast({
      title: "Delete Test",
      description: "Delete functionality will be implemented soon",
      variant: "destructive",
    });
  };
  
  const copyTestCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Test Code Copied",
      description: `Code ${code} copied to clipboard`,
    });
  };
  
  const toggleTestDetails = (testId: string) => {
    setActiveTestId(activeTestId === testId ? null : testId);
  };
  
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Manage Tests</h1>
        </div>
        
        {tests.length > 0 ? (
          <div className="space-y-6">
            {tests.map((test) => (
              <div key={test.id} className="bg-white rounded-lg shadow overflow-hidden">
                {/* Test Header */}
                <div 
                  className={`p-6 cursor-pointer ${
                    activeTestId === test.id ? 'bg-writeEdge-blue text-white' : 'bg-white hover:bg-gray-50'
                  }`}
                  onClick={() => toggleTestDetails(test.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h2 className={`text-xl font-semibold ${activeTestId === test.id ? 'text-white' : 'text-writeEdge-blue'}`}>
                        {test.name}
                      </h2>
                      <p className={`text-sm ${activeTestId === test.id ? 'text-gray-200' : 'text-gray-600'}`}>
                        {new Date(test.startTime).toLocaleDateString()} - {new Date(test.endTime).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="mr-6">
                        <p className={`text-sm font-medium ${activeTestId === test.id ? 'text-gray-200' : 'text-gray-600'}`}>
                          Test Code
                        </p>
                        <div className="flex items-center">
                          <span className={`text-lg font-bold ${activeTestId === test.id ? 'text-writeEdge-gold' : 'text-writeEdge-blue'}`}>
                            {test.code}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyTestCode(test.code);
                            }}
                            className={`ml-2 p-1 rounded hover:bg-gray-200 ${activeTestId === test.id ? 'text-white hover:text-writeEdge-blue' : 'text-gray-600'}`}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className={`text-sm font-medium ${activeTestId === test.id ? 'text-gray-200' : 'text-gray-600'}`}>
                          Questions
                        </p>
                        <span className={`text-lg font-bold ${activeTestId === test.id ? 'text-white' : 'text-writeEdge-blue'}`}>
                          {test.questions.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Test Details (collapsible) */}
                {activeTestId === test.id && (
                  <div className="border-t px-6 py-4 space-y-4 bg-gray-50">
                    {/* Test Info */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm text-gray-600">Duration</p>
                        <p className="font-medium">{test.duration} minutes</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm text-gray-600">Start Time</p>
                        <p className="font-medium">{new Date(test.startTime).toLocaleString()}</p>
                      </div>
                      <div className="bg-white p-3 rounded border">
                        <p className="text-sm text-gray-600">End Time</p>
                        <p className="font-medium">{new Date(test.endTime).toLocaleString()}</p>
                      </div>
                    </div>
                    
                    {/* Questions Overview */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-medium">Questions</h3>
                      {test.questions.map((question, index) => (
                        <div key={question.id} className="bg-white p-3 rounded border">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="font-medium">Question {index + 1}</p>
                              <p className="text-sm text-gray-600 line-clamp-2">{question.text}</p>
                            </div>
                            <div className="ml-4 flex flex-col items-end">
                              <span className="text-xs text-gray-500">{question.difficulty}</span>
                              <span className="font-medium text-writeEdge-blue">{question.marks} points</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Submissions */}
                    <div>
                      <h3 className="text-lg font-medium mb-2">Submissions</h3>
                      {getTestResults(test.id).length > 0 ? (
                        <div className="bg-white rounded border overflow-hidden">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {getTestResults(test.id).map((result) => (
                                <tr key={result.id}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div>
                                      <p className="font-medium">{result.userName}</p>
                                      <p className="text-sm text-gray-600">{result.userEmail}</p>
                                    </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                    {new Date(result.submittedAt).toLocaleString()}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-center">
                                    <span className="font-medium">{result.overallScore}/{result.totalPossibleScore}</span>
                                    <span className="ml-1 text-sm text-gray-600">
                                      ({Math.round((result.overallScore / result.totalPossibleScore) * 100)}%)
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="text-gray-600 bg-white p-4 rounded border">No submissions yet</p>
                      )}
                    </div>
                    
                    {/* Actions */}
                    <div className="flex justify-end space-x-3 pt-2">
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEditTest(test.id);
                        }}
                        className="writeEdge-btn bg-gray-200 text-gray-700 hover:bg-gray-300"
                      >
                        Edit Test
                      </button>
                      <button 
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteTest(test.id);
                        }}
                        className="writeEdge-btn bg-red-100 text-red-700 hover:bg-red-200"
                      >
                        Delete Test
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <h2 className="text-xl font-semibold mb-2">No Tests Created Yet</h2>
            <p className="text-gray-600 mb-6">Create your first test to get started</p>
            <Link to="/admin/create-test" className="writeEdge-btn writeEdge-btn-primary">
              Create Test
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminTests;
