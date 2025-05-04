
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Logo from "@/components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-writeEdge-blue flex flex-col items-center justify-center p-6">
      <Logo size="large" />
      
      <div className="mt-8 max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-6xl font-bold text-writeEdge-blue mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-gray-600 mb-8">
          The link might be incorrect or the page may have been moved.
        </p>
        <Link 
          to="/" 
          className="writeEdge-btn writeEdge-btn-primary inline-block"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
