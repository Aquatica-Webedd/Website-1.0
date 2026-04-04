
import { Home, ShoppingCart, Mail, Download } from 'lucide-react';

export interface NavItem {
  path: string;
  label: string;
  icon: typeof Home | typeof ShoppingCart | typeof Mail | typeof Download;
}

export const navItems: NavItem[] = [
  { path: "/", label: "Home", icon: Home },
  { path: "/world-download", label: "World Download", icon: Download },
  { path: "/store", label: "Store", icon: ShoppingCart },
  { path: "/contact", label: "Contact", icon: Mail }
];
