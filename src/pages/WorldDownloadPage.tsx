import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import PageLayout from "@/components/layout/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// World map data
const worldMaps = [
  {
    id: 1,
    name: "Aquatica Season 1",
    version: "1.21",
    size: "9.3 GB",
    date: "September 15, 2024",
    description: "The original Aquatica world.",
    downloadUrl:
      "https://drive.google.com/drive/folders/18Js-mWOQhSkKbZ57WRDR985lG3k2JPFG",
  },
];

interface World {
  id: number;
  name: string;
  version: string;
  size: string;
  date: string;
  description: string;
  downloadUrl: string;
}

// World preview card
const WorldPreviewCard = ({
  name,
  version,
  downloadUrl,
  date,
  description,
  id,
  size,
  imageIndex,
}: World & { imageIndex: number }) => {
  // Use placeholder images for world previews
  const bgImages = ["bg-[url(/season_1_bg.jpg)]"];

  return (
    <div
      className={`${
        bgImages[(id - 1) % bgImages.length]
      } bg-cover bg-center h-48 rounded-lg relative overflow-hidden group`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="text-white font-medium">{name}</h3>
        <i>{date}</i>
        <p className="text-white/80 text-sm">Minecraft {version}</p>
      </div>
      <div className="absolute bottom-0 right-0 p-2">
        <Button size="sm" variant="secondary" asChild>
          <a href={downloadUrl} target="_blank" rel="noopener noreferrer">
            <Download className="mr-1" size={16} /> {size} Download
          </a>
        </Button>
      </div>
    </div>
  );
};

export default function WorldDownloadPage() {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <SectionHeader
          title="World Downloads"
          subtitle="Download previous seasons and special world maps from the Aquatica."
          centered={true}
        />

        {/* World previews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {worldMaps.map((world, index) => (
            <WorldPreviewCard
              key={world.id}
              id={world.id}
              name={world.name}
              version={world.version}
              downloadUrl={world.downloadUrl}
              imageIndex={index}
              date={world.date}
              description={world.description}
              size={world.size}
            />
          ))}
        </div>
        {/* Installation instructions */}
        <div className="mt-12">
          <Card>
            <CardHeader>
              <CardTitle>How to Install World Downloads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Step 1: Download the World File
                  </h3>
                  <p className="text-muted-foreground">
                    Click the download button for the world you want to explore
                    and save the ZIP file to your computer.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Step 2: Extract the ZIP File
                  </h3>
                  <p className="text-muted-foreground">
                    Extract the contents of the ZIP file using software like
                    WinRAR, 7-Zip, or your operating system's built-in
                    extractor.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Step 3: Move to Minecraft Saves Folder
                  </h3>
                  <p className="text-muted-foreground">
                    Move the extracted folder to your Minecraft saves directory:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                    <li>
                      Windows:{" "}
                      <code className="bg-muted px-1 rounded">
                        %appdata%\.minecraft\saves
                      </code>
                    </li>
                    <li>
                      Mac:{" "}
                      <code className="bg-muted px-1 rounded">
                        ~/Library/Application Support/minecraft/saves
                      </code>
                    </li>
                    <li>
                      Linux:{" "}
                      <code className="bg-muted px-1 rounded">
                        ~/.minecraft/saves
                      </code>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Step 4: Launch Minecraft
                  </h3>
                  <p className="text-muted-foreground">
                    Start Minecraft with the correct version listed for the
                    world download, then select "Single Player" and you should
                    see the world in your list.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage policy */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Usage Policy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              All world downloads are provided for personal use only. You may
              explore and play in these worlds, but please respect the
              following:
            </p>
            <ul className="list-disc pl-6 mt-2 text-sm text-muted-foreground">
              <li>Do not claim these builds or worlds as your own work.</li>
              <li>
                If sharing content from these worlds (screenshots, videos,
                etc.), please credit "Aquatica".
              </li>
              <li>
                Do not redistribute these world downloads on other websites.
              </li>
              <li>
                For content creators: You're welcome to feature these worlds in
                your content with proper attribution.
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex-col items-start border-t pt-4">
            <p className="text-sm text-muted-foreground mb-2">
              For questions about usage or permissions, please contact us:
            </p>
            <Button variant="link" asChild className="p-0 h-auto text-sm">
              <Link to="/contact">Contact the Aquatica Team</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </PageLayout>
  );
}

// Link component for internal navigation
function Link({
  to,
  children,
  className = "",
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={to} className={className}>
      {children}
    </a>
  );
}
