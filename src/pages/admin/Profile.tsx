
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const AdminProfile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    position: 'Senior Administrator',
    department: 'English Department',
    institution: 'University of Technology',
    phone: '(555) 123-4567',
    bio: 'Experienced administrator with over 8 years in educational assessment and curriculum development. Specializing in writing program administration and student performance evaluation.'
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        <h1 className="text-2xl font-bold mb-8">Administrator Profile</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            {/* Profile Sidebar */}
            <div className="md:w-1/3 bg-writeEdge-blue text-white p-8">
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-writeEdge-gold mb-4 flex items-center justify-center text-writeEdge-blue text-4xl font-bold">
                  {formData.name.charAt(0)}
                </div>
                <h2 className="text-xl font-semibold mb-1">{formData.name}</h2>
                <p className="text-writeEdge-gold mb-4">{formData.position}</p>
                <p className="text-sm text-center">{formData.department}</p>
                <p className="text-sm text-center">{formData.institution}</p>
              </div>
              
              <div className="mt-8">
                <h3 className="text-writeEdge-gold font-medium mb-2">Admin Stats</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Active Tests</span>
                    <span className="font-semibold">4</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Student Users</span>
                    <span className="font-semibold">124</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Submissions</span>
                    <span className="font-semibold">315</span>
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
                    <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                      Position/Title
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      className="writeEdge-input"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                      Department
                    </label>
                    <input
                      type="text"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="writeEdge-input"
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
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="writeEdge-input"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                      Professional Bio
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
        
        {/* API Settings Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">API Settings</h3>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              Connected
            </span>
          </div>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                API Key
              </label>
              <div className="flex">
                <input
                  type="password"
                  value="••••••••••••••••••••••••••••••"
                  readOnly
                  className="writeEdge-input flex-grow"
                />
                <button
                  type="button"
                  className="ml-2 px-4 py-2 border border-gray-300 rounded bg-gray-50 hover:bg-gray-100"
                  onClick={() => {
                    toast({
                      title: "API Key Copied",
                      description: "The API key has been copied to your clipboard."
                    });
                  }}
                >
                  Copy
                </button>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Webhook URL
              </label>
              <input
                type="text"
                value="https://api.writeedge.com/webhooks/results/callback"
                readOnly
                className="writeEdge-input"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                API Permissions
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="permission-read"
                    checked={true}
                    readOnly
                    className="h-4 w-4"
                  />
                  <label htmlFor="permission-read" className="ml-2 block text-sm text-gray-700">
                    Read test data
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="permission-write"
                    checked={true}
                    readOnly
                    className="h-4 w-4"
                  />
                  <label htmlFor="permission-write" className="ml-2 block text-sm text-gray-700">
                    Create and modify tests
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="permission-users"
                    checked={false}
                    readOnly
                    className="h-4 w-4"
                  />
                  <label htmlFor="permission-users" className="ml-2 block text-sm text-gray-700">
                    Manage user accounts
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end space-x-3">
            <button
              type="button"
              className="writeEdge-btn bg-gray-200 text-gray-700 hover:bg-gray-300"
              onClick={() => {
                toast({
                  title: "API Key Regenerated",
                  description: "A new API key has been generated and the old one is no longer valid."
                });
              }}
            >
              Regenerate API Key
            </button>
            <button
              type="button"
              className="writeEdge-btn writeEdge-btn-primary"
              onClick={() => {
                toast({
                  title: "Settings Saved",
                  description: "Your API settings have been updated successfully."
                });
              }}
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminProfile;
