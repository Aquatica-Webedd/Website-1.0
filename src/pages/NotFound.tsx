
import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PageLayout from "@/components/layout/PageLayout";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-20 min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-bold text-aqua-light text-glow mb-4">404</h1>
        <div className="animate-float mb-8">
          <img 
            src="/lovable-uploads/9c3a7dfb-8244-43ac-8518-416ac8d6afc4.png" 
            alt="Aquatica Logo" 
            className="h-20 w-20 opacity-70"
          />
        </div>
        <h2 className="text-2xl md:text-3xl font-medium mb-4">Page Not Found</h2>
        <p className="text-muted-foreground text-center max-w-md mb-8">
          Looks like you've ventured too deep into the ocean! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link to="/" className="flex items-center gap-2">
            <Home size={18} /> Return to Surface
          </Link>
        </Button>
      </div>
    </PageLayout>
  );
};

export default NotFound;
