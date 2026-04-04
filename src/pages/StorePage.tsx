import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import PageLayout from "@/components/layout/PageLayout";
import { Skeleton } from "@/components/ui/skeleton";

// Store product card
const ProductCard = ({
  title,
  price,
  description,
  features,
  popular = false,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}) => (
  <Card
    className={`h-full ${
      popular ? "border-aqua shadow-lg shadow-aqua/20" : "border-border/40"
    }`}
  >
    {popular && (
      <div className="absolute top-0 right-0 bg-aqua text-white px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-md">
        Popular
      </div>
    )}
    <CardHeader>
      <CardTitle className={`${popular ? "text-aqua-light text-glow" : ""}`}>
        {title}
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="text-3xl font-bold">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-aqua mr-2">•</span>
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button className="w-full" variant={popular ? "default" : "outline"}>
        <ExternalLink size={16} className="mr-2" />
        Buy now!
      </Button>
    </CardFooter>
  </Card>
);

export default function StorePage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <SectionHeader
          title="Aquatica Store"
          subtitle="Support our server and enhance your gameplay experience with these perks and items."
          centered={true}
        />

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProductCard
              title="Coming Soon"
              price="FREE"
              description="Coming soon..."
              features={["Coming soon...", "Coming soon...", "Coming soon..."]}
              popular={true}
            />
            <ProductCard
              title="Coming Soon"
              price="FREE"
              description="Coming soon..."
              features={["Coming soon...", "Coming soon...", "Coming soon..."]}
              popular={true}
            />
            <ProductCard
              title="Coming Soon"
              price="FREE"
              description="Coming soon..."
              features={["Coming soon...", "Coming soon...", "Coming soon..."]}
              popular={true}
            />
            {/*
            <ProductCard
              title="Shark Rank"
              price="$9.99"
              description="Mid-tier rank with enhanced benefits"
              features={[
                "All Dolphin rank perks",
                "5 extra home locations",
                "Advanced particle effects",
                "Access to /enderchest command",
                "Weekly reward crate",
                "Colored name in chat",
              ]}
              popular={true}
            />

            <ProductCard
              title="Kraken Rank"
              price="$24.99"
              description="Premium supporter with exclusive features"
              features={[
                "All Shark rank perks",
                "10 home locations total",
                "Full particle effect library",
                "Access to /fly in peaceful zones",
                "Daily reward crates",
                "Custom nickname color",
                "Priority server access",
              ]}
            /> */}
          </div>
        </div>
        {/* Tebex Disclaimer */}
        {/*       <div className="mt-16 p-6 bg-card/40 backdrop-blur-sm border border-border/40 rounded-lg">
          <h3 className="text-xl font-medium mb-4">About our Tebex Store</h3>
          <p className="text-muted-foreground mb-4">
            All purchases directly support the continued development and
            maintenance of the Aquatica server. Items are delivered
            automatically in-game after purchase confirmation.
          </p>
          <p className="text-muted-foreground mb-4">
            For any store-related questions or issues with purchases, please
            visit our
            <Link to="/contact" className="text-aqua hover:underline mx-1">
              Contact page
            </Link>
            or join our Discord server.
          </p>
          <div className="flex justify-center mt-6">
            <Button asChild>
              <a
                href="https://tebex.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                Visit Full Tebex Store <ExternalLink size={16} />
              </a>
            </Button>
          </div>
        </div> */}
      </div>
    </PageLayout>
  );
}
