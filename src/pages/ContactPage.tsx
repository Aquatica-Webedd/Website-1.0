import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { MapPin, Mail, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/section-header";
import PageLayout from "@/components/layout/PageLayout";
import { TabsContent } from "@radix-ui/react-tabs";
import { env } from "node:process";

// Form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  discord: z.string().min(1).max(32, {
    message: "Please enter a valid discord username.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  // Form hook
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      discord: "",
      subject: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const webhookBody = {
      embeds: [
        {
          title: `${values.name} has sent a message!`,
          description: `**Subject:** ${values.subject}\n**Message:** \n${values.message}`,
          footer: {
            text: `❓Need more information? Open a ticket with user: ${values.discord}`,
          },
          fields: [
            { name: "Sender Name", value: values.name },
            { name: "Sender Discord", value: values.discord },
          ],
          color: 0x1cbfff,
        },
      ],
    };
    const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookBody),
    });
    if (response.status == 200 || response.status == 204) {
      toast.success("Thank you for your message! We'll get back to you soon.");
    } else {
      // Send error first so the other one pops up first (clearer to the user)
      toast.error(
        `${response.text.toString()} ${response.status} ${response.statusText}`
      );
      toast.error(
        `There was an error (${response.status} | ${response.statusText}) whilst sending your message, please contact Staff via Tickets with the given information.`
      );
    }
    form.reset();
  };

  // perhaps a constants.ts file is needed?
  const AQUATICA_EMAIL = "WIP";

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-12">
        <SectionHeader
          title="Contact Us"
          subtitle="Have questions or need help? Reach out to our team."
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-card/60 backdrop-blur-sm border-aqua-dark/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-md bg-aqua-dark/20 text-aqua">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-muted-foreground mb-1">
                      For general inquiries:
                    </p>
                    <a
                      href={"mailto:" + AQUATICA_EMAIL}
                      className="text-aqua hover:underline"
                    >
                      {AQUATICA_EMAIL}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/*             <Card className="bg-card/60 backdrop-blur-sm border-aqua-dark/30">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-md bg-aqua-dark/20 text-aqua">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Server Location</h3>
                    <p className="text-muted-foreground">Our server is hosted in premium datacenters across North America and Europe for optimal performance.</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            <Card className="bg-card/60 backdrop-blur-sm border-aqua-dark/30">
              <CardContent className="p-6">
                <div>
                  <h3 className="font-medium mb-2">Connect With Us</h3>
                  <Card className="bg-card/60 backdrop-blur-sm border-aqua-light/50 m-2">
                    <CardContent id="discord" className="p-4">
                      <a
                        href="https://discord.gg/eHpYjcADYe"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-muted-foreground hover:text-aqua transition-colors"
                      >
                        <span>Join the Discord Today!</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/60 backdrop-blur-sm border-aqua-dark/30">
              <CardContent className="p-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="discord"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Discord Username</FormLabel>
                            <FormControl>
                              <Input placeholder="aquatica#0000" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="A summary of how we can help you..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="In detail how can we help you..."
                              className="min-h-[120px] resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Please provide as much detail as possible so we can
                            best assist you.
                          </FormDescription>
                          <FormDescription>
                            We may open a ticket with the given discord user to
                            further support your query.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full md:w-auto">
                      Send Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
