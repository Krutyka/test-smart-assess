
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="bg-writeEdge-blue text-white">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <Logo />
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-writeEdge-gold hover:underline">HOME</Link>
            <Link to="/about" className="text-white hover:text-writeEdge-gold">ABOUT</Link>
            <Link to="/courses" className="text-white hover:text-writeEdge-gold">COURSES</Link>
            <Link to="/modules" className="text-white hover:text-writeEdge-gold">MODULES</Link>
            <Link 
              to="/auth" 
              className="bg-writeEdge-gold px-4 py-2 rounded text-writeEdge-blue font-medium hover:bg-opacity-90 transition-all"
            >
              LOG IN
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="bg-writeEdge-blue text-white py-20 md:py-32">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Content.<br />
                Clarity.<br />
                <span className="text-writeEdge-gold">Credibility.</span>
              </h1>
              <p className="text-lg md:text-xl max-w-md">
                WriteEdge empowers students and professionals to master real-world, corporate writing with AI-driven feedback and structured assessments.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/auth?register=student" 
                  className="writeEdge-btn writeEdge-btn-accent text-center"
                >
                  Register Now
                </Link>
                <Link 
                  to="/about" 
                  className="writeEdge-btn bg-transparent text-white border border-white hover:bg-white/10 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/lovable-uploads/961765f0-50fb-41c8-ab98-c922b1dece0d.png" 
                alt="Student working on laptop" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose WriteEdge?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 mx-auto bg-writeEdge-blue rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-writeEdge-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0-6.75h-3V7.5a2.25 2.25 0 0 1 2.25-2.25h1.5V2.25h3v2.25h1.5a2.25 2.25 0 0 1 2.25 2.25v3.75h-3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">AI-Powered Feedback</h3>
              <p className="text-gray-600 text-center">
                Get instant, detailed feedback on grammar, content relevance, and style to improve your writing skills.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 mx-auto bg-writeEdge-blue rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-writeEdge-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Performance Analytics</h3>
              <p className="text-gray-600 text-center">
                Track your progress over time with comprehensive analytics and actionable insights.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mb-6 mx-auto bg-writeEdge-blue rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-writeEdge-gold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Real-World Skills</h3>
              <p className="text-gray-600 text-center">
                Practice with scenario-based tests designed to improve professional writing in corporate settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-writeEdge-cream">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Writing Skills?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of students and professionals who are enhancing their writing abilities with WriteEdge.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/auth?register=student" 
              className="writeEdge-btn writeEdge-btn-accent"
            >
              Register as Student
            </Link>
            <Link 
              to="/auth?register=admin" 
              className="writeEdge-btn bg-writeEdge-blue text-white hover:bg-blue-900"
            >
              Register as Administrator
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-writeEdge-blue text-white py-10">
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
                <li><Link to="/" className="hover:text-writeEdge-gold transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-writeEdge-gold transition-colors">About</Link></li>
                <li><Link to="/courses" className="hover:text-writeEdge-gold transition-colors">Courses</Link></li>
                <li><Link to="/auth" className="hover:text-writeEdge-gold transition-colors">Login</Link></li>
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

export default HomePage;
