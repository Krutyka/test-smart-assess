
import React from 'react';
import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';

const Help: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-writeEdge-blue">Help & Support</h1>
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Find answers to common questions about using the WriteEdge platform.
            </p>
          </div>
          
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-writeEdge-blue mb-2">
                  How do I take a test?
                </h3>
                <p className="text-gray-700">
                  To take a test, navigate to the "Take Test" section from your student dashboard. 
                  Enter the test code provided by your instructor and click "Start" to begin the test.
                  Make sure you have a stable internet connection before starting the test.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-writeEdge-blue mb-2">
                  What happens if my internet disconnects during a test?
                </h3>
                <p className="text-gray-700">
                  WriteEdge automatically saves your answers as you type. If you lose connection, 
                  you can log back in and continue the test from where you left off, as long as the 
                  test time limit hasn't expired.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-writeEdge-blue mb-2">
                  How are tests evaluated?
                </h3>
                <p className="text-gray-700">
                  Tests are evaluated using our AI-powered writing assessment system. The system checks 
                  grammar, spelling, content relevance, and overall writing quality. Each question may 
                  have different criteria based on difficulty level and requirements set by your instructor.
                </p>
              </div>
              
              {user?.userType === 'admin' && (
                <div>
                  <h3 className="text-lg font-medium text-writeEdge-blue mb-2">
                    How do I create a new test?
                  </h3>
                  <p className="text-gray-700">
                    Navigate to the "Create Test" page from your admin dashboard. Fill in the test details, 
                    including name, duration, and questions. You can specify the difficulty level and points 
                    for each question. After submission, you'll receive a test code to share with students.
                  </p>
                </div>
              )}
              
              <div>
                <h3 className="text-lg font-medium text-writeEdge-blue mb-2">
                  How do I view my test results?
                </h3>
                <p className="text-gray-700">
                  After completing a test, you will be automatically directed to the results page. 
                  You can also find past test results in the "Results" section of your dashboard. 
                  Additionally, a summary of your results will be emailed to your registered email address.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
            <p className="text-gray-600">
              Need help with something not covered in the FAQs? Contact our support team.
            </p>
          </div>
          
          <div className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-writeEdge-cream rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-writeEdge-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Email Support</h3>
                <p className="text-gray-600">support@writeedge.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-writeEdge-cream rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-writeEdge-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Phone Support</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
                <p className="text-xs text-gray-500">Monday - Friday, 9:00 AM - 5:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
