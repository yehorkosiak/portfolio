import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Poppins, League_Spartan } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  duration?: string;
  type?: string;
  achievements?: string[];
  impact?: string;
}

export function Projects() {
  const propertyHero = {
    title: "Property Hero - Enterprise Asset Management Platform",
    description:
      "A comprehensive property and asset management platform built from the ground up, handling complex multi-tenant data relationships and business logic.",
    image: "/placeholder.svg?height=400&width=800",
    technologies: [
      "Django",
      "PostgreSQL",
      "AWS",
      "Terraform",
      "IAM",
      "Route53",
      "CloudWatch",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    duration: "18 Months",
    type: "Full-Stack SaaS Development",
    achievements: [
      "45-table PostgreSQL database with sophisticated relational design",
      "Complete AWS infrastructure deployed via Terraform",
      "Multi-tenant architecture supporting properties, spaces, assets, and claims",
      "Production deployment with monitoring, security, and scalability considerations",
    ],
    impact:
      "Demonstrates end-to-end ownership of enterprise software development, from database architecture to cloud deployment.",
  };

  const sektaSelekta = {
    title: "Sekta Selekta - Techno Community Social Platform",
    description:
      "A comprehensive social platform for the techno music community, featuring event discovery, artist networking, and an innovative QR-based loyalty system.",
    image: "/placeholder.svg?height=400&width=800",
    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "SoundCloud API",
      "QR Scanning",
      "Push Notifications",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    duration: "Active Development",
    type: "React Native Social App",
    achievements: [
      "47 active TestFlight users with high engagement (up to 100 sessions per user)",
      "Real-world integration via QR loyalty system at club entrances",
      "SoundCloud API integration for seamless music sharing",
      "Multi-role platform supporting fans, DJs, and venue administrators",
      "Professional UI/UX optimized for the techno scene aesthetic",
    ],
    impact:
      "Successfully launched and maintained a production social platform with genuine user adoption and community engagement in Krakow's techno scene.",
  };

  const renderProjectSection = (
    project: typeof propertyHero,
    isReversed = false
  ) => (
    <div className="mb-20">
      <Card
        className={`overflow-hidden border-2 ${
          project === propertyHero
            ? "border-[#E0E7FF] bg-[#F8FAFC] shadow-lg"
            : "border-orange-500/20 bg-zinc-900 shadow-lg"
        }`}
      >
        <div
          className={`grid lg:grid-cols-2 gap-0 ${
            isReversed ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Image Section */}
          <div
            className={`relative h-64 lg:h-auto ${
              isReversed ? "lg:col-start-2" : ""
            }`}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content Section */}
          <div
            className={`p-8 lg:p-12 ${isReversed ? "lg:col-start-1" : ""} ${
              project === propertyHero
                ? poppins.className
                : project === sektaSelekta
                ? leagueSpartan.className
                : ""
            }`}
          >
            <div className="mb-4">
              <h3
                className={`text-2xl lg:text-3xl font-bold mb-2 ${
                  project === propertyHero
                    ? "text-[#1E40AF]"
                    : "bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 text-transparent bg-clip-text"
                }`}
              >
                {project.title}
              </h3>
              <div
                className={`${
                  project === propertyHero ? "text-[#4B5563]" : "text-zinc-400"
                } mb-4`}
              >
                {project.type} | {project.duration}
              </div>
              <p
                className={`text-lg ${
                  project === propertyHero ? "text-[#4B5563]" : "text-zinc-300"
                } leading-relaxed`}
              >
                {project.description}
              </p>
            </div>

            {/* Key Achievements */}
            <div className="mb-6">
              <h4
                className={`font-semibold mb-3 ${
                  project === propertyHero
                    ? "text-[#1E40AF]"
                    : "text-orange-400"
                }`}
              >
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {project.achievements?.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span
                      className={`mr-2 mt-1 ${
                        project === propertyHero
                          ? "text-[#1E40AF]"
                          : "text-orange-500"
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={`text-sm ${
                        project === propertyHero
                          ? "text-[#4B5563]"
                          : "text-zinc-300"
                      }`}
                    >
                      {achievement}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4
                className={`font-semibold mb-3 ${
                  project === propertyHero
                    ? "text-[#1E40AF]"
                    : "text-orange-400"
                }`}
              >
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className={
                      project === propertyHero
                        ? "bg-[#E0E7FF] text-[#1E40AF]"
                        : "bg-zinc-800 text-zinc-300 border-zinc-700"
                    }
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Impact */}
            {project.impact && (
              <div className="mb-6">
                <h4
                  className={`font-semibold mb-2 ${
                    project === propertyHero
                      ? "text-[#1E40AF]"
                      : "text-orange-400"
                  }`}
                >
                  Impact
                </h4>
                <p
                  className={`text-sm italic ${
                    project === propertyHero
                      ? "text-[#4B5563]"
                      : "text-zinc-300"
                  }`}
                >
                  {project.impact}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              {project === propertyHero && (
                <Button asChild className="bg-[#1E40AF] hover:bg-[#1E3A8A]">
                  <Link href="/projects/property-hero">Learn More</Link>
                </Button>
              )}
              {project === sektaSelekta && (
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-medium"
                >
                  <Link href="/projects/sekta-selekta">Learn More</Link>
                </Button>
              )}
              <Button
                variant="outline"
                asChild
                className={
                  project === propertyHero
                    ? "border-[#1E40AF] text-[#1E40AF] hover:bg-[#E0E7FF]"
                    : "border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                }
              >
                <Link href={project.liveUrl}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className={
                  project === propertyHero
                    ? "border-[#1E40AF] text-[#1E40AF] hover:bg-[#E0E7FF]"
                    : "border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                }
              >
                <Link href={project.githubUrl}>
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-16 text-[#1E40AF]">
          Featured Projects
        </h2>

        {/* Property Hero Section */}
        {renderProjectSection(propertyHero, false)}

        {/* Sekta Selekta Section */}
        {renderProjectSection(sektaSelekta, true)}
      </div>
    </section>
  );
}
