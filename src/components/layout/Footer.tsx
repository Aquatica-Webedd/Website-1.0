import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { navItems } from "./navigation-items";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Aquatica Logo"
                className="h-10 w-10 rounded-md"
              />
              <span className="text-xl font-bold text-glow text-aqua-light">
                Aquatica
              </span>
            </div>
            <p className="mt-4 text-muted-foreground">
              Dive into the underwater world of Aquatica, a unique Minecraft SMP
              experience.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-aqua-light transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.gg/eHpYjcADYe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-aqua-light transition-colors inline-flex items-center gap-1"
                >
                  Discord <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Aquatica. All rights reserved.</p>
          <p className="mt-1">Not affiliated with Mojang Studios.</p>
        </div>
      </div>
    </footer>
  );
}
