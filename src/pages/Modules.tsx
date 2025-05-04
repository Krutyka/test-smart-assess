
import React from 'react';
import Layout from '@/components/Layout';

const Modules = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Learning Modules</h1>
        
        <div className="space-y-6">
          {/* Module 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-writeEdge-blue text-white p-4">
              <h2 className="text-xl font-bold">Module 1: Business Communication Basics</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Lesson 1: Principles of Effective Communication</h3>
                    <p className="text-sm text-gray-600">Completed on May 2, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Lesson 2: Writing Professional Emails</h3>
                    <p className="text-sm text-gray-600">Completed on May 3, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Lesson 3: Creating Effective Business Reports</h3>
                    <p className="text-sm text-gray-600">In progress</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-medium">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Lesson 4: Writing for Internal Communications</h3>
                    <p className="text-sm text-gray-600">Unlock on May 10, 2025</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-500 rounded-full" style={{ width: "60%" }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Progress: 60%</span>
                  <span>Completion date: May 15, 2025</span>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="writeEdge-btn writeEdge-btn-primary">
                  Continue Module
                </button>
              </div>
            </div>
          </div>
          
          {/* Module 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-writeEdge-blue text-white p-4">
              <h2 className="text-xl font-bold">Module 2: Technical Writing Foundations</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Lesson 1: Understanding Technical Documentation</h3>
                    <p className="text-sm text-gray-600">Available May 20, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Lesson 2: Writing User Guides</h3>
                    <p className="text-sm text-gray-600">Available May 22, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Lesson 3: Technical Specifications</h3>
                    <p className="text-sm text-gray-600">Available May 25, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-medium">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Lesson 4: Technical Presentations</h3>
                    <p className="text-sm text-gray-600">Available May 28, 2025</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-gray-400 rounded-full" style={{ width: "0%" }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Progress: 0%</span>
                  <span>Unlock date: May 20, 2025</span>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="writeEdge-btn bg-gray-300 text-gray-700 cursor-not-allowed">
                  Module Locked
                </button>
              </div>
            </div>
          </div>
          
          {/* Module 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-writeEdge-blue text-white p-4">
              <h2 className="text-xl font-bold">Module 3: Advanced Persuasive Writing</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-medium">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Lesson 1: Psychology of Persuasion</h3>
                    <p className="text-sm text-gray-600">Available June 5, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-medium">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Lesson 2: Creating Compelling Arguments</h3>
                    <p className="text-sm text-gray-600">Available June 8, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-medium">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Lesson 3: Marketing Copy Techniques</h3>
                    <p className="text-sm text-gray-600">Available June 12, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <span className="text-gray-500 font-medium">4</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Lesson 4: Ethical Persuasion</h3>
                    <p className="text-sm text-gray-600">Available June 15, 2025</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-gray-400 rounded-full" style={{ width: "0%" }}></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600">
                  <span>Progress: 0%</span>
                  <span>Unlock date: June 5, 2025</span>
                </div>
              </div>
              
              <div className="mt-6">
                <button className="writeEdge-btn bg-gray-300 text-gray-700 cursor-not-allowed">
                  Module Locked
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Modules;
