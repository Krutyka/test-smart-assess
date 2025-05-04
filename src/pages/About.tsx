
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Layout from '@/components/Layout';
import Logo from '@/components/Logo';

const About = () => {
  const { isAuthenticated } = useAuth();
  
  const renderContent = () => (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">About WriteEdge</h1>
      
      <div className="prose lg:prose-lg">
        <p className="lead text-xl mb-6">
          WriteEdge is a state-of-the-art platform designed to help students and professionals master the art of written communication through AI-powered assessment and feedback.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
        <p>
          Our mission is to empower learners with the writing skills necessary for success in academic and professional environments. 
          We believe effective writing is not just about grammar and spelling—it's about clarity, persuasiveness, and purpose.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
        <p>
          WriteEdge combines advanced AI technology with educational best practices to provide:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Comprehensive assessments of writing skills through customizable tests</li>
          <li>Detailed, contextual feedback on grammar, content, and style</li>
          <li>Personalized suggestions for improvement</li>
          <li>Analytics that track progress over time</li>
          <li>Tools for educators to design tests and monitor student performance</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Technology</h2>
        <p>
          At the heart of WriteEdge is our proprietary AI engine that analyzes written responses across multiple dimensions:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Linguistic accuracy (grammar, spelling, punctuation)</li>
          <li>Content relevance and depth</li>
          <li>Structural coherence and organization</li>
          <li>Stylistic elements and tone appropriateness</li>
        </ul>
        <p>
          Our AI has been trained on millions of text samples to provide feedback that's not just accurate, but helpful and actionable.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">For Students</h2>
        <p>
          As a student, WriteEdge helps you:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Identify and correct persistent writing errors</li>
          <li>Develop stronger argumentation and analysis skills</li>
          <li>Practice responding to various writing prompts</li>
          <li>Prepare for academic and professional writing tasks</li>
          <li>Track improvement over time with detailed analytics</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">For Educators</h2>
        <p>
          As an educator or administrator, WriteEdge enables you to:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Create customized writing assessments</li>
          <li>Set difficulty levels and scoring parameters</li>
          <li>Monitor student performance across classes or cohorts</li>
          <li>Identify common writing challenges</li>
          <li>Save time on grading while providing more detailed feedback</li>
        </ul>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
        <p>
          WriteEdge was developed by a team of educators, linguists, and AI specialists committed to advancing writing education. 
          With decades of combined experience in educational technology, our team understands the challenges of teaching and learning writing skills in today's fast-paced digital environment.
        </p>
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
            <a href="/about" className="text-writeEdge-gold hover:underline">ABOUT</a>
            <a href="/courses" className="text-white hover:text-writeEdge-gold">COURSES</a>
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
                <li><a href="/courses" className="hover:text-write-Edge-gold transition-colors">Courses</a></li>
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

export default About;
