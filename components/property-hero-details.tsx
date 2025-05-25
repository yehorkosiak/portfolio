import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Database,
  Cloud,
  Code,
  Users,
  BarChart3,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export function PropertyHeroDetails() {
  const techStack = {
    backend: ["Django", "Python", "PostgreSQL", "Django REST Framework"],
    frontend: ["Django Templates", "HTML5", "CSS3", "JavaScript"],
    infrastructure: ["AWS (EC2, VPC, Route53, SES, CloudWatch)", "Terraform"],
    security: ["AWS IAM", "Security Groups", "SSL/TLS"],
    development: ["Git", "CI/CD", "Testing frameworks"],
    monitoring: ["CloudWatch", "Custom metrics", "Logging"],
  };

  const keyMetrics = [
    { label: "Database Tables", value: "45", icon: Database },
    { label: "Constraints", value: "466", icon: Shield },
    { label: "Foreign Key Relationships", value: "22", icon: Code },
    { label: "Data Capacity", value: "4.3GB+", icon: BarChart3 },
    { label: "Development Duration", value: "18 months", icon: Users },
    { label: "AWS Services", value: "7+", icon: Cloud },
  ];

  const features = [
    {
      category: "Core Platform",
      items: [
        "Multi-property organizations with detailed tracking",
        "Room-by-room asset cataloging with valuations",
        "Flexible space definition and asset assignment",
        "Document management and file organization system",
      ],
    },
    {
      category: "Business Logic",
      items: [
        "Automated asset value calculations and equity tracking",
        "Insurance claim management with payment tracking",
        "Warranty expiration tracking and notifications",
        "Recurring task scheduling and assignment",
      ],
    },
    {
      category: "Advanced Features",
      items: [
        "AI Integration for asset documentation and analysis",
        "Role-based permissions and collaboration",
        "Real-time analytics and data visualization",
        "Event scheduling and maintenance planning",
      ],
    },
  ];

  const challenges = [
    {
      title: "Data Architecture",
      description:
        "Designed normalized schema supporting complex business relationships with efficient querying patterns for hierarchical data.",
    },
    {
      title: "Infrastructure Management",
      description:
        "Architected scalable AWS infrastructure from scratch with proper security patterns and maintainable Terraform modules.",
    },
    {
      title: "Business Logic Implementation",
      description:
        "Developed complex valuation algorithms, multi-step claims processing workflows, and recurring task scheduling.",
    },
  ];

  return (
    <div className={`min-h-screen bg-background ${poppins.className}`}>
      {/* Header */}
      <div className="bg-brand-blue/5 border-b border-brand-blue/10">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-brand-blue hover:bg-brand-blue/10"
            >
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-brand-blue">
                Property Hero: Enterprise Asset Management Platform
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-brand-blue/10 text-brand-blue"
                >
                  Full-Stack SaaS Development
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-brand-blue/10 text-brand-blue"
                >
                  18 Months
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-brand-blue/10 text-brand-blue"
                >
                  Production Deployment
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-brand-blue/10 text-brand-blue"
                >
                  Solo Development
                </Badge>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A comprehensive SaaS platform designed for property and asset
                management, built to handle complex organizational workflows
                including property valuations, maintenance tracking, warranty
                management, and insurance claims processing.
              </p>
            </div>

            <div className="flex gap-3">
              <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                <Link href="https://example.com">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
              >
                <Link href="https://github.com">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-brand-blue">
            Project Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {keyMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card key={index} className="text-center border-brand-blue/10">
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 mx-auto mb-2 text-brand-blue" />
                    <div className="text-2xl font-bold text-brand-blue">
                      {metric.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {metric.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-brand-blue">
            Technical Architecture
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-brand-blue/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-brand-blue">
                  <Database className="h-5 w-5" />
                  Backend System
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-brand-blue">
                    Framework & Database
                  </h4>
                  <p className="text-muted-foreground">
                    Django with comprehensive business logic and PostgreSQL with
                    45 interconnected tables
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-brand-blue">
                    Architecture
                  </h4>
                  <p className="text-muted-foreground">
                    Multi-tenant design supporting organizations, properties,
                    spaces, and assets
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-brand-blue">APIs</h4>
                  <p className="text-muted-foreground">
                    RESTful architecture with proper serialization and Django
                    Auth integration
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-brand-blue/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-brand-blue">
                  <Cloud className="h-5 w-5" />
                  Infrastructure & DevOps
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-brand-blue">
                    Cloud Provider
                  </h4>
                  <p className="text-muted-foreground">
                    Amazon Web Services with Terraform modules for networking,
                    compute, and security
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-brand-blue">
                    Security
                  </h4>
                  <p className="text-muted-foreground">
                    IAM roles, security groups, VPC configuration
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-brand-blue">
                    Monitoring
                  </h4>
                  <p className="text-muted-foreground">
                    CloudWatch integration with custom metrics, Route53 and SES
                    integration
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Database Design */}
        <section className="mb-16">
          <Card className="border-brand-blue/10">
            <CardHeader>
              <CardTitle className="text-brand-blue">Database Design</CardTitle>
              <CardDescription>
                Complex relational schema handling hierarchical data and
                business logic
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-brand-blue">
                    Data Relationships
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • Properties → Spaces → Assets hierarchical structure
                    </li>
                    <li>• Claims processing and warranty tracking</li>
                    <li>
                      • Multi-tenant permissions and organization structures
                    </li>
                    <li>• Comprehensive audit trails and activity tracking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-brand-blue">
                    Technical Specifications
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 45 tables with 466 constraints</li>
                    <li>
                      • 22 foreign key relationships to central User model
                    </li>
                    <li>• 4.3GB+ structured data capacity</li>
                    <li>• Medium complexity with proper normalization</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-brand-blue">
            Key Features Implemented
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-brand-blue/10">
                <CardHeader>
                  <CardTitle className="text-brand-blue">
                    {feature.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-brand-blue mr-2 mt-1">✓</span>
                        <span className="text-muted-foreground text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Challenges */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-brand-blue">
            Technical Challenges Solved
          </h2>
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="border-brand-blue/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-brand-blue">
                    {challenge.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-brand-blue">
            Technical Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, technologies]) => (
              <Card key={category} className="border-brand-blue/10">
                <CardHeader>
                  <CardTitle className="text-brand-blue capitalize">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs border-brand-blue/20 text-brand-blue"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Outcomes & Lessons */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-brand-blue">
            Outcomes & Lessons Learned
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-brand-blue/10">
              <CardHeader>
                <CardTitle className="text-brand-blue">
                  Technical Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="h-4 w-4 text-brand-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Successfully deployed and maintained production
                      infrastructure
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-4 w-4 text-brand-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Handled complex data relationships without performance
                      issues
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-4 w-4 text-brand-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Built scalable foundation supporting future feature
                      development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-4 w-4 text-brand-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Demonstrated full-stack capabilities across multiple
                      domains
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-brand-blue/10">
              <CardHeader>
                <CardTitle className="text-brand-blue">
                  Skills Developed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Code className="h-4 w-4 text-brand-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      End-to-end application development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Cloud className="h-4 w-4 text-brand-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Infrastructure automation and deployment strategies
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Database className="h-4 w-4 text-brand-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Complex relational modeling and optimization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-4 w-4 text-brand-blue mr-2 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Scalable, maintainable system design
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Statement */}
        <section className="mb-16">
          <Card className="border-brand-blue/20 bg-brand-blue/5">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-blue">
                Project Impact
              </h2>
              <p className="text-lg text-muted-foreground italic border-l-4 border-brand-blue pl-6">
                This project demonstrates comprehensive software development
                skills from initial architecture through production deployment,
                showcasing the ability to manage complex technical challenges
                while building production-ready enterprise software. It
                represents end-to-end ownership of enterprise software
                development, from database architecture to cloud deployment.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="border-brand-blue/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-brand-blue">
                Interested in Learning More?
              </h3>
              <p className="text-muted-foreground mb-6">
                Explore the live platform or dive into the technical
                implementation details.
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  asChild
                  className="bg-brand-blue hover:bg-brand-blue/90"
                >
                  <Link href="https://example.com">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live Platform
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="text-brand-blue hover:bg-brand-blue/10"
                >
                  <Link href="/#contact">Contact Me</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
