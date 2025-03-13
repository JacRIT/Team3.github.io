import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, BarChart2, FileText, Users, Code } from "lucide-react";

export default function Home() {
  const sections = [
    {
      id: "about",
      title: "Project Synopsis",
      description: "Learn about FiTR and our mission",
      href: "/about",
      icon: <FileText className="text-primary-custom mb-2 h-6 w-6" />,
    },
    {
      id: "team",
      title: "Our Team",
      description: "Meet the Code Crusaders team members",
      href: "/team",
      icon: <Users className="text-primary-custom mb-2 h-6 w-6" />,
    },
    {
      id: "reports",
      title: "Reports & Metrics",
      description: "View our progress and performance metrics",
      href: "/reports_and_metrics",
      icon: <BarChart2 className="text-primary-custom mb-2 h-6 w-6" />,
    },
    {
      id: "process",
      title: "Process & Plan",
      description: "Understand our methodology and roadmap",
      href: "/process",
      icon: <Code className="text-primary-custom mb-2 h-6 w-6" />,
    },
  ];

  return (
    <div className="space-y-12">
      <section className="container mx-auto space-y-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:py-32">
        <div className="container mx-auto flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Code Crusaders
          </h1>
          <p className="text-muted-foreground max-w-[42rem] leading-normal sm:text-xl sm:leading-8">
            Senior Project Progress Tracker for the FiTR application
          </p>
          <div className="space-x-4">
            <Button asChild size={"lg"}>
              <Link href="/reports_and_metrics">View Progress</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">About FiTR</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Project Updates
          </h2>
          <p className="text-muted-foreground max-w-[85%] leading-normal sm:text-lg sm:leading-7">
            Stay up to date with our progress, team information, and development
            process
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <Card
              key={section.id}
              className="border-primary-custom/20 flex flex-col justify-between"
            >
              <CardHeader className="text-center">
                <div className="flex justify-center">{section.icon}</div>
                <CardTitle>{section.title}</CardTitle>
                <CardDescription>{section.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  asChild
                  variant="ghost"
                  className="hover:bg-primary-custom/10 hover:text-primary-custom w-full justify-between"
                >
                  <Link href={section.href}>
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
