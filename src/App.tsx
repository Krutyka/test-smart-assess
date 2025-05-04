import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { TestProvider } from "./contexts/TestContext";

// Pages
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";

// Student Pages
import StudentDashboard from "./pages/student/Dashboard";
import StudentProfile from "./pages/student/Profile";
import StudentPractice from "./pages/student/Practice";
import StudentTakeTest from "./pages/student/TakeTest";
import TestCode from "./pages/student/TestCode";
import TestInterface from "./pages/student/TestInterface";
import TestResults from "./pages/student/TestResults";
import StudentFeedback from "./pages/student/Feedback";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import AdminProfile from "./pages/admin/Profile";
import AdminCreateTest from "./pages/admin/CreateTest";
import AdminTests from "./pages/admin/Tests";
import AdminReports from "./pages/admin/Reports";

// Other Pages
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Modules from "./pages/Modules";

const queryClient = new QueryClient();

// Auth Guard Component
const ProtectedRoute = ({ 
  children, 
  requiredUserType 
}: { 
  children: JSX.Element, 
  requiredUserType?: 'student' | 'admin' | null 
}) => {
  const user = JSON.parse(localStorage.getItem('writeEdgeUser') || 'null');
  
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  
  if (requiredUserType && user.userType !== requiredUserType) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <TestProvider>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              
              {/* Student Routes */}
              <Route path="/student/dashboard" element={
                <ProtectedRoute requiredUserType="student">
                  <StudentDashboard />
                </ProtectedRoute>
              } />
              <Route path="/student/profile" element={
                <ProtectedRoute requiredUserType="student">
                  <StudentProfile />
                </ProtectedRoute>
              } />
              <Route path="/student/practice" element={
                <ProtectedRoute requiredUserType="student">
                  <StudentPractice />
                </ProtectedRoute>
              } />
              <Route path="/student/take-test" element={
                <ProtectedRoute requiredUserType="student">
                  <StudentTakeTest />
                </ProtectedRoute>
              } />
              <Route path="/student/test-code" element={
                <ProtectedRoute requiredUserType="student">
                  <TestCode />
                </ProtectedRoute>
              } />
              <Route path="/student/test-interface" element={
                <ProtectedRoute requiredUserType="student">
                  <TestInterface />
                </ProtectedRoute>
              } />
              <Route path="/student/test-results" element={
                <ProtectedRoute requiredUserType="student">
                  <TestResults />
                </ProtectedRoute>
              } />
              <Route path="/student/feedback" element={
                <ProtectedRoute requiredUserType="student">
                  <StudentFeedback />
                </ProtectedRoute>
              } />
              <Route path="/modules" element={
                <ProtectedRoute requiredUserType="student">
                  <Modules />
                </ProtectedRoute>
              } />
              
              {/* Admin Routes */}
              <Route path="/admin/dashboard" element={
                <ProtectedRoute requiredUserType="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/profile" element={
                <ProtectedRoute requiredUserType="admin">
                  <AdminProfile />
                </ProtectedRoute>
              } />
              <Route path="/admin/create-test" element={
                <ProtectedRoute requiredUserType="admin">
                  <AdminCreateTest />
                </ProtectedRoute>
              } />
              <Route path="/admin/tests" element={
                <ProtectedRoute requiredUserType="admin">
                  <AdminTests />
                </ProtectedRoute>
              } />
              <Route path="/admin/reports" element={
                <ProtectedRoute requiredUserType="admin">
                  <AdminReports />
                </ProtectedRoute>
              } />
              
              {/* Common Protected Routes */}
              <Route path="/settings" element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              } />
              <Route path="/help" element={
                <ProtectedRoute>
                  <Help />
                </ProtectedRoute>
              } />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TestProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
