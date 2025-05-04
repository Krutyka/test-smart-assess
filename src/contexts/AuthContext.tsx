
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

type UserType = 'student' | 'admin' | null;

type User = {
  id: string;
  name: string;
  email: string;
  userType: UserType;
} | null;

interface AuthContextType {
  user: User;
  loading: boolean;
  login: (email: string, password: string, userType: UserType) => Promise<void>;
  register: (name: string, email: string, password: string, userType: UserType) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check local storage for existing session
    const storedUser = localStorage.getItem('writeEdgeUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string, userType: UserType) => {
    try {
      setLoading(true);
      
      // Mock authentication - in a real app, this would be an API call
      if (email && password) {
        const mockUser = {
          id: Math.random().toString(36).substring(2, 9),
          name: email.split('@')[0],
          email,
          userType
        };
        
        setUser(mockUser);
        localStorage.setItem('writeEdgeUser', JSON.stringify(mockUser));
        
        toast({
          title: "Login successful",
          description: `Welcome back, ${mockUser.name}!`,
        });
        
        // Redirect based on user type
        if (userType === 'student') {
          navigate('/student/dashboard');
        } else if (userType === 'admin') {
          navigate('/admin/dashboard');
        }
      } else {
        throw new Error('Please provide email and password');
      }
    } catch (error) {
      toast({
        title: "Login failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, userType: UserType) => {
    try {
      setLoading(true);
      
      // Mock registration - in a real app, this would be an API call
      if (name && email && password) {
        const mockUser = {
          id: Math.random().toString(36).substring(2, 9),
          name,
          email,
          userType
        };
        
        setUser(mockUser);
        localStorage.setItem('writeEdgeUser', JSON.stringify(mockUser));
        
        toast({
          title: "Registration successful",
          description: `Welcome, ${name}!`,
        });
        
        // Redirect based on user type
        if (userType === 'student') {
          navigate('/student/dashboard');
        } else if (userType === 'admin') {
          navigate('/admin/dashboard');
        }
      } else {
        throw new Error('Please provide all required information');
      }
    } catch (error) {
      toast({
        title: "Registration failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('writeEdgeUser');
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
