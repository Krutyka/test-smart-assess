
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { useTest } from '@/contexts/TestContext';

const AdminReports: React.FC = () => {
  const { tests, getTestResults } = useTest();
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  
  // Calculate overall statistics
  const totalSubmissions = tests.reduce((total, test) => {
    return total + getTestResults(test.id).length;
  }, 0);
  
  const averageScore = tests.reduce((total, test) => {
    const testResults = getTestResults(test.id);
    if (testResults.length === 0) return total;
    
    const testAverage = testResults.reduce((sum, result) => {
      return sum + (result.overallScore / result.totalPossibleScore) * 100;
    }, 0) / testResults.length;
    
    return total + testAverage;
  }, 0) / (tests.length || 1);
  
  const getTestData = (testId: string) => {
    return getTestResults(testId);
  };
  
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-2xl font-bold">Performance Reports</h1>
        
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 mb-1">Total Tests</div>
            <div className="text-3xl font-bold text-writeEdge-blue">{tests.length}</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 mb-1">Total Submissions</div>
            <div className="text-3xl font-bold text-writeEdge-blue">{totalSubmissions}</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 mb-1">Average Score</div>
            <div className="text-3xl font-bold text-writeEdge-blue">
              {averageScore.toFixed(1)}%
            </div>
          </div>
        </div>
        
        {/* Test Selection */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">Select a Test to View Detailed Reports</h2>
          
          {tests.length > 0 ? (
            <div className="space-y-2">
              {tests.map((test) => (
                <button
                  key={test.id}
                  onClick={() => setSelectedTest(test.id)}
                  className={`block w-full text-left p-3 rounded-md transition ${
                    selectedTest === test.id
                      ? 'bg-writeEdge-blue text-white'
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{test.name}</span>
                    <span className="text-sm">
                      {getTestResults(test.id).length} submissions
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No tests have been created yet.</p>
          )}
        </div>
        
        {/* Detailed Report */}
        {selectedTest && (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">
              Detailed Report: {tests.find(t => t.id === selectedTest)?.name}
            </h2>
            
            {getTestData(selectedTest).length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Score
                      </th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Time Taken
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {getTestData(selectedTest).map((result) => (
                      <tr key={result.id} className="hover:bg-gray-50">
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium">{result.userName}</div>
                          <div className="text-sm text-gray-500">{result.userEmail}</div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(result.submittedAt).toLocaleString()}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-center">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {result.overallScore}/{result.totalPossibleScore}
                            {' '}
                            ({Math.round((result.overallScore / result.totalPossibleScore) * 100)}%)
                          </span>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                          25 min
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No submissions for this test yet.</p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default AdminReports;
