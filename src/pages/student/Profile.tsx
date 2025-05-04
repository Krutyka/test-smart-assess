
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const StudentProfile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    institution: 'University of Technology',
    studentId: 'ST12345',
    program: 'Computer Science',
    year: '3rd Year',
    bio: 'I am a computer science student interested in artificial intelligence and web development. I enjoy working on challenging problems and learning new technologies.'
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully."
    });
  };
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">My Profile</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Profile Sidebar */}
            <div className="md:w-1/3 bg-writeEdge-blue text-white p-8">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-writeEdge-gold mb-4 flex items-center justify-center text-writeEdge-blue text-4xl font-bold">
                  {formData.name.charAt(0)}
                </div>
                <h2 className="text-xl font-semibold mb-1">{formData.name}</h2>
                <p className="text-writeEdge-gold mb-4">{formData.studentId}</p>
                <p className="text-sm text-center">{formData.institution}</p>
                <p className="text-sm text-center">{formData.program}, {formData.year}</p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-writeEdge-gold font-medium mb-2">Progress Summary</h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Tests Completed</span>
                      <span>3/5</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-2 bg-writeEdge-gold rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Average Score</span>
                      <span>72%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-2 bg-writeEdge-gold rounded-full" style={{ width: "72%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Profile Completion</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-2 bg-writeEdge-gold rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Profile Form */}
            <div className="md:w-2/3 p-8">
              <h3 className="text-xl font-semibold mb-6">Personal Information</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="writeEdge-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="writeEdge-input"
                      disabled
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">
                      Institution
                    </label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      className="writeEdge-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">
                      Student ID
                    </label>
                    <input
                      type="text"
                      id="studentId"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleChange}
                      className="writeEdge-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
                      Program/Major
                    </label>
                    <input
                      type="text"
                      id="program"
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="writeEdge-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                      Year/Level
                    </label>
                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="writeEdge-input"
                    >
                      <option value="1st Year">1st Year</option>
                      <option value="2nd Year">2nd Year</option>
                      <option value="3rd Year">3rd Year</option>
                      <option value="4th Year">4th Year</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      rows={4}
                      value={formData.bio}
                      onChange={handleChange}
                      className="writeEdge-input"
                    ></textarea>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button
                    type="submit"
                    className="writeEdge-btn writeEdge-btn-primary"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        {/* Password Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-8">
          <h3 className="text-xl font-semibold mb-6">Change Password</h3>
          
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  className="writeEdge-input"
                />
              </div>
              
              <div className="md:col-span-1"></div>
              
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="writeEdge-input"
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="writeEdge-input"
                />
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                className="writeEdge-btn writeEdge-btn-primary"
                onClick={() => {
                  toast({
                    title: "Password updated",
                    description: "Your password has been changed successfully."
                  });
                }}
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default StudentProfile;
