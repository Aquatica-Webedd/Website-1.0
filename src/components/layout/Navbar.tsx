
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navItems } from './navigation-items';

// Logo component for reusability
const Logo = () => (
  <div className="flex items-center gap-2">
    <img 
      src="/logo.png" 
      alt="Aquatica Logo" 
      className="h-10 w-10 rounded-md"
    />
    <span className="text-xl font-bold text-glow text-aqua-light">Aquatica</span>
  </div>
);

type NavItemProps = {
  to: string;
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
};

const NavItem = ({ to, label, icon, active, onClick }: NavItemProps) => (
  <Link 
    to={to} 
    className={cn(
      "flex items-center gap-2 px-4 py-2 rounded-md transition-all",
      active 
        ? "bg-aqua-dark text-white font-medium" 
        : "hover:bg-muted text-muted-foreground hover:text-white"
    )}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </Link>
);

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-lg bg-background/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <NavItem 
                key={item.path}
                to={item.path} 
                label={item.label} 
                icon={<Icon size={18} />}
                active={location.pathname === item.path}
              />
            );
          })}
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border/40 py-2 px-4 z-50">
          <nav className="flex flex-col space-y-1">
            {navItems.map(item => {
              const Icon = item.icon;
              return (
                <NavItem 
                  key={item.path}
                  to={item.path} 
                  label={item.label} 
                  icon={<Icon size={18} />}
                  active={location.pathname === item.path}
                  onClick={() => setIsMenuOpen(false)}
                />
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
