
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import Logo from '@/components/Logo';

const Courses = () => {
  const { isAuthenticated } = useAuth();
  
  const renderContent = () => (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-10 text-center">Our Writing Courses</h1>
      
      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Course 1 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-writeEdge-blue flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-writeEdge-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Business Writing Fundamentals</h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>6 weeks • 12 modules</span>
            </div>
            <p className="text-gray-600 mb-6">
              Master essential business writing skills including emails, reports, and proposals. Learn how to communicate clearly and effectively in professional settings.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-writeEdge-blue font-bold">$199</span>
              <a 
                href="/auth" 
                className="writeEdge-btn writeEdge-btn-primary"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Course 2 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-writeEdge-blue flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-writeEdge-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Technical Documentation</h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>8 weeks • 16 modules</span>
            </div>
            <p className="text-gray-600 mb-6">
              Learn to create clear, concise technical documentation. Perfect for IT professionals, engineers, and technical writers who need to explain complex concepts.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-writeEdge-blue font-bold">$249</span>
              <a 
                href="/auth" 
                className="writeEdge-btn writeEdge-btn-primary"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Course 3 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-writeEdge-blue flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-writeEdge-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Persuasive Writing</h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>4 weeks • 8 modules</span>
            </div>
            <p className="text-gray-600 mb-6">
              Develop the ability to craft compelling arguments and persuasive content. Ideal for marketing professionals, copywriters, and content creators.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-writeEdge-blue font-bold">$179</span>
              <a 
                href="/auth" 
                className="writeEdge-btn writeEdge-btn-primary"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Course 4 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-writeEdge-blue flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-writeEdge-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Creative Writing Workshop</h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10 weeks • 20 modules</span>
            </div>
            <p className="text-gray-600 mb-6">
              Unleash your creativity with structured exercises and personalized feedback. Explore fiction, poetry, and creative non-fiction in a supportive environment.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-writeEdge-blue font-bold">$299</span>
              <a 
                href="/auth" 
                className="writeEdge-btn writeEdge-btn-primary"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Course 5 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-writeEdge-blue flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-writeEdge-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Academic Writing Excellence</h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>12 weeks • 24 modules</span>
            </div>
            <p className="text-gray-600 mb-6">
              Develop research, citation, and scholarly writing skills for academic success. Designed for college students and researchers.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-writeEdge-blue font-bold">$349</span>
              <a 
                href="/auth" 
                className="writeEdge-btn writeEdge-btn-primary"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Course 6 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-40 bg-writeEdge-blue flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-writeEdge-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Professional Email Mastery</h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>3 weeks • 6 modules</span>
            </div>
            <p className="text-gray-600 mb-6">
              Improve your email communication skills with templates, best practices, and strategies for effective professional correspondence.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-writeEdge-blue font-bold">$99</span>
              <a 
                href="/auth" 
                className="writeEdge-btn writeEdge-btn-primary"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="mt-16 bg-writeEdge-blue text-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Training Solution?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          We offer tailored writing courses for organizations and educational institutions. 
          Our team can design specialized curriculum based on your specific requirements.
        </p>
        <a 
          href="/auth" 
          className="writeEdge-btn writeEdge-btn-accent inline-block"
        >
          Contact Us for Details
        </a>
      </div>
    </div>
  );
  
  if (isAuthenticated) {
    return <Layout>{renderContent()}</Layout>;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="bg-writeEdge-blue text-white">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <Logo />
          <nav className="flex items-center space-x-6">
            <a href="/" className="text-white hover:text-writeEdge-gold">HOME</a>
            <a href="/about" className="text-white hover:text-writeEdge-gold">ABOUT</a>
            <a href="/courses" className="text-writeEdge-gold hover:underline">COURSES</a>
            <a href="/modules" className="text-white hover:text-writeEdge-gold">MODULES</a>
            <a 
              href="/auth" 
              className="bg-writeEdge-gold px-4 py-2 rounded text-writeEdge-blue font-medium hover:bg-opacity-90 transition-all"
            >
              LOG IN
            </a>
          </nav>
        </div>
      </header>
      
      {renderContent()}
      
      {/* Footer */}
      <footer className="bg-writeEdge-blue text-white py-10 mt-auto">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Logo />
              <p className="mt-4 text-sm">
                Empowering better writing through AI-driven feedback and assessment.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-writeEdge-gold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:text-writeEdge-gold transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-writeEdge-gold transition-colors">About</a></li>
                <li><a href="/courses" className="hover:text-writeEdge-gold transition-colors">Courses</a></li>
                <li><a href="/auth" className="hover:text-writeEdge-gold transition-colors">Login</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-writeEdge-gold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-writeEdge-gold transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-writeEdge-gold transition-colors">Writing Tips</a></li>
                <li><a href="#" className="hover:text-writeEdge-gold transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-writeEdge-gold transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-writeEdge-gold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>contact@writeedge.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Education Ave, Suite 100</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 WriteEdge. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-writeEdge-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-writeEdge-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-writeEdge-gold transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Courses;
