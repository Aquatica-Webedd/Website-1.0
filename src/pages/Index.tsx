import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/ui/section-header";
import PageLayout from "@/components/layout/PageLayout";
import { ShoppingCart, Download, Users, Server } from "lucide-react";

// Feature card component for reusability
const FeatureCard = ({
  icon,
  title,
  description,
  actionText,
  actionLink,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionText: string;
  actionLink: string;
}) => (
  <Card className="bg-card/60 backdrop-blur-sm border-aqua-dark/30 hover:border-aqua overflow-hidden group">
    <CardContent className="p-6">
      <div className="mb-4 inline-flex p-2 rounded-lg bg-aqua-dark/20 text-aqua">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2 text-aqua-light group-hover:text-glow transition-all">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Button
        variant="outline"
        asChild
        className="w-full border-aqua-dark/50 hover:bg-aqua-dark/20 hover:text-aqua"
      >
        <Link to={actionLink}>{actionText}</Link>
      </Button>
    </CardContent>
  </Card>
);

export default function Index() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-aqua-glow border-b border-border/40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-aqua-dark/20 to-background/90 z-10"></div>
          <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-aqua-light/10 rounded-full filter blur-3xl animate-pulse-glow"></div>
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-aqua/10 rounded-full filter blur-3xl animate-pulse-glow"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <div className="animate-float">
            <img
              src="/logo.png"
              alt="Aquatica Logo"
              className="h-32 w-32 mx-auto mb-6 rounded-xl shadow-lg shadow-aqua/20"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-glow bg-clip-text text-transparent bg-gradient-to-r from-aqua-light to-aqua-dark">
            Aquatica
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Dive into an underwater Minecraft adventure like no other. Explore
            hidden treasures, build underwater kingdoms, and join our thriving
            community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact#discord">Join the Discord!</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/world-download">Get World Download</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-minecraft-pattern">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Discover Aquatica"
            subtitle="Explore the unique features of our underwater Minecraft SMP server"
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard
              icon={<ShoppingCart size={24} />}
              title="Server Store"
              description="Support the server and get exclusive perks, items, and cosmetics."
              actionText="Visit Store"
              actionLink="/store"
            />
            <FeatureCard
              icon={<Download size={24} />}
              title="World Downloads"
              description="Download previous map versions to explore offline or for inspiration."
              actionText="Download Maps"
              actionLink="/world-download"
            />
            <FeatureCard
              icon={<Users size={24} />}
              title="Community"
              description="Join a friendly community of builders, explorers, and underwater architects."
              actionText="Contact Us"
              actionLink="/contact"
            />
            <FeatureCard
              icon={<Server size={24} />}
              title="Server Events"
              description="Participate in regular server events, competitions, and special activities."
              actionText="Learn More on our Discord"
              actionLink="/contact#discord"
            />
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-aqua-surface">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-glow">
            Ready to Dive In?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-muted-foreground">
            Join hundreds of players already exploring the depths of Aquatica.
            Start your underwater adventure today!
          </p>
          <div className="inline-flex p-1 bg-card/50 backdrop-blur-sm rounded-lg border border-border/40">
            <Button size="lg">
              <Link to="/contact#discord">Join the Discord!</Link>
            </Button>
            {/* <Button variant="ghost" size="sm" className="ml-1 text-muted-foreground"
            <pre className="text-sm p-2 bg-muted/30 rounded text-aqua-light overflow-x-auto"></pre>
              onClick={() => {
                navigator.clipboard.writeText("play.aquatica-smp.com");
              }}
            >
              Copy
            </Button> */}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
