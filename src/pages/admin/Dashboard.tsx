
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { useTest } from '@/contexts/TestContext';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();
  const { tests, submissions } = useTest();
  
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Welcome, {user?.name || 'Administrator'}</h1>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-writeEdge-lightBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-gray-600 text-sm font-medium">Active Tests</h2>
                <p className="text-2xl font-bold">{tests.length || 0}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-gray-600 text-sm font-medium">Student Submissions</h2>
                <p className="text-2xl font-bold">{submissions.length || 0}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-amber-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-gray-600 text-sm font-medium">Average Score</h2>
                <p className="text-2xl font-bold">
                  {submissions.length
                    ? Math.round((submissions.reduce((acc, sub) => acc + (sub.overallScore / sub.totalPossibleScore) * 100, 0) / submissions.length))
                    : 0}%
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-gray-600 text-sm font-medium">Upcoming Tests</h2>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/admin/create-test"
              className="block bg-writeEdge-blue text-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <h3 className="text-xl font-bold mb-2">CREATE & MANAGE TESTS</h3>
                <p className="text-sm">Easily design and schedule custom tests with full control over questions, duration, and difficulty.</p>
              </div>
            </Link>
            
            <Link 
              to="/admin/tests"
              className="block bg-writeEdge-gold text-writeEdge-blue rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-12 w-12 mb-4">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
                <h3 className="text-xl font-bold mb-2">AI TEXT GENERATOR</h3>
                <p className="text-sm">Generate high-quality, contextually accurate content using AI-powered writing assistance.</p>
              </div>
            </Link>
            
            <Link 
              to="/admin/reports"
              className="block bg-writeEdge-cream text-writeEdge-blue rounded-lg shadow hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <h3 className="text-xl font-bold mb-2">EVENTS & ANNOUNCEMENT</h3>
                <p className="text-sm">Publish important academic events and updates in real-time to keep students informed.</p>
              </div>
            </Link>
            
            <div className="block bg-writeEdge-blue text-white rounded-lg shadow p-6">
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <h3 className="text-xl font-bold mb-2">TIPS & SUGGESTIONS</h3>
                <p className="text-sm">Share curated writing tips and strategies to help students enhance their skills.</p>
              </div>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow p-6 h-full">
              <h2 className="text-lg font-semibold mb-4">Recent Submissions</h2>
              
              {submissions.length > 0 ? (
                <div className="space-y-4">
                  {submissions.slice(0, 5).map((submission) => (
                    <div key={submission.id} className="border-b pb-4 last:border-0">
                      <div className="flex justify-between">
                        <div>
                          <p className="font-medium">{submission.userName}</p>
                          <p className="text-sm text-gray-600">{submission.userEmail}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{submission.overallScore}/{submission.totalPossibleScore}</p>
                          <p className="text-sm text-gray-600">
                            {new Date(submission.submittedAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-center py-8">No submissions yet</p>
              )}
              
              {submissions.length > 5 && (
                <div className="mt-4 text-center">
                  <Link 
                    to="/admin/reports"
                    className="text-writeEdge-lightBlue hover:underline"
                  >
                    View all submissions
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* System Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">System Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <h3 className="font-medium">AI Writing Assistant</h3>
              </div>
              <p className="text-sm text-gray-600">Operating normally</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <h3 className="font-medium">Test Creation System</h3>
              </div>
              <p className="text-sm text-gray-600">All features available</p>
            </div>
            
            <div className="border rounded-lg p-4">
              <div className="flex items-center mb-2">
                <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
                <h3 className="font-medium">Email Notification System</h3>
              </div>
              <p className="text-sm text-gray-600">Sending successfully</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
