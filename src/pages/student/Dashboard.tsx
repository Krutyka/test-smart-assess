
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Welcome, {user?.name || 'Student'}</h1>
        </div>
        
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-writeEdge-lightBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-gray-600 text-sm font-medium">Tests Completed</h2>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-gray-600 text-sm font-medium">Average Score</h2>
                <p className="text-2xl font-bold">72%</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-3 bg-amber-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h2 className="text-gray-600 text-sm font-medium">Hours Practiced</h2>
                <p className="text-2xl font-bold">8.5</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Progress Chart */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-6">My Progress</h2>
          <div className="flex items-center justify-center">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#5b9bd5"
                  strokeWidth="3"
                  strokeDasharray="70, 100"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="text-3xl font-bold text-writeEdge-blue">70%</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            to="/student/take-test"
            className="block bg-writeEdge-blue text-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
          >
            <div className="flex flex-col items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Take Test</h3>
              <p>Enter a test code to start a new assessment</p>
            </div>
          </Link>
          
          <Link 
            to="/student/practice"
            className="block bg-writeEdge-cream text-writeEdge-blue rounded-lg shadow hover:shadow-lg transition-shadow p-6"
          >
            <div className="flex flex-col items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Practice Writing</h3>
              <p>Improve your skills with practice exercises</p>
            </div>
          </Link>
        </div>
        
        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Upcoming Events</h2>
          <div className="border rounded-lg p-4 mb-4">
            <div className="flex items-start">
              <div className="bg-writeEdge-blue text-white rounded p-2 mr-4">
                <span className="block text-center font-bold">10</span>
                <span className="block text-center text-xs">MAY</span>
              </div>
              <div>
                <h3 className="font-medium">Business Writing Assessment</h3>
                <p className="text-gray-600 text-sm">9:00 AM - Test will be available for 2 hours</p>
              </div>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-start">
              <div className="bg-writeEdge-blue text-white rounded p-2 mr-4">
                <span className="block text-center font-bold">15</span>
                <span className="block text-center text-xs">MAY</span>
              </div>
              <div>
                <h3 className="font-medium">Technical Documentation Test</h3>
                <p className="text-gray-600 text-sm">2:00 PM - Test will be available for 90 minutes</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Writing Tips Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Writing Tip of the Day</h2>
          <div className="border-l-4 border-writeEdge-lightBlue pl-4">
            <p className="italic text-gray-700">
              "Use strong verbs — they carry more weight than adjectives. Instead of saying 'the meeting was good,' try 'the meeting energized the team.'"
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StudentDashboard;
