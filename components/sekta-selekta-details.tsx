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
  Smartphone,
  Users,
  Zap,
  Music,
  QrCode,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
});

export function SektaSelektaDetails() {
  const liveMetrics = [
    { label: "Active Beta Testers", value: "47+", icon: Users },
    { label: "Max Sessions per User", value: "100+", icon: TrendingUp },
    { label: "Code Files", value: "294", icon: Smartphone },
    { label: "Lines of Code", value: "12,615", icon: Zap },
    { label: "React Components", value: "199", icon: Music },
    { label: "Crash-Free Rate", value: "99%+", icon: QrCode },
  ];

  const techStack = {
    frontend: ["React Native", "Expo", "TypeScript", "React Hooks"],
    backend: [
      "Firebase Firestore",
      "Firebase Auth",
      "Firebase Storage",
      "Firebase Functions",
    ],
    apis: [
      "SoundCloud API",
      "Expo Camera",
      "Expo Notifications",
      "QR Code Integration",
    ],
    development: ["Git", "TestFlight", "Expo CLI", "TypeScript"],
    design: ["Custom UI Components", "Image Optimization", "Dark Theme"],
    deployment: ["Expo Application Services", "iOS App Store Pipeline"],
  };

  const features = [
    {
      category: "Social Community Hub",
      items: [
        "Dynamic feed with real-time posts and music integration",
        "User-generated content with event announcements",
        "Social interactions with like/comment system",
        "One-click SoundCloud music embedding in posts",
      ],
    },
    {
      category: "Event Discovery & Management",
      items: [
        "Professional event cards with custom graphics",
        "Genre classification (Italo, Disco, House, etc.)",
        "Event details with dress codes and artist lineups",
        "Real-time event announcements and updates",
      ],
    },
    {
      category: "Artist Ecosystem",
      items: [
        "Professional DJ profiles with music samples",
        "Artist discovery system for residents and guests",
        "'Apply to play' booking platform for venues",
        "Direct contact and collaboration networking tools",
      ],
    },
    {
      category: "Innovative Loyalty System",
      items: [
        "'Sektons' token economy with QR-based rewards",
        "Physical QR codes at club entrances",
        "Collect 3 tokens for free venue entry",
        "Gamified token tracking and achievements",
      ],
    },
  ];

  const challenges = [
    {
      title: "Real-time Social Features",
      description:
        "Implemented Firebase listeners for instant content synchronization, conflict resolution for simultaneous user interactions, and offline capability with cached content.",
    },
    {
      title: "External API Integration",
      description:
        "Custom SoundCloud player integration with playlist support, graceful error handling, efficient rate limiting, and automated content validation.",
    },
    {
      title: "Business Logic Implementation",
      description:
        "QR scanning validation and reward distribution, dynamic role-based permissions, complex event scheduling, and automated content moderation workflows.",
    },
  ];

  const achievements = [
    {
      category: "Community Building Success",
      items: [
        "47 engaged users with high session counts (up to 100+ per user)",
        "Increased club attendance through app-driven discovery",
        "Successful DJ bookings facilitated through platform",
        "Real venue integration with QR-based rewards",
      ],
    },
    {
      category: "Technical Achievements",
      items: [
        "Production deployment with live app maintenance",
        "Scalable Firebase backend handling real-time interactions",
        "Cross-platform success with single codebase",
        "99%+ crash-free rate across hundreds of sessions",
      ],
    },
    {
      category: "Business Integration",
      items: [
        "Direct integration with Krakow club operations",
        "Loyalty system driving repeat venue visits",
        "User-generated event promotion and content",
        "Proven product-market fit within target community",
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen bg-black text-white ${leagueSpartan.className} text-base`}
    >
      {/* Header */}
      <div className="bg-zinc-900/50 border-b border-zinc-800">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-zinc-400 hover:text-white hover:bg-zinc-800 text-base"
            >
              <Link href="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 text-transparent bg-clip-text tracking-tight">
                Sekta Selekta: Techno Community Social Platform
              </h1>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge
                  variant="secondary"
                  className="bg-zinc-800 text-zinc-300 border-zinc-700 font-medium text-base"
                >
                  React Native Social App
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-zinc-800 text-zinc-300 border-zinc-700 font-medium text-base"
                >
                  Production App
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-zinc-800 text-zinc-300 border-zinc-700 font-medium text-base"
                >
                  47+ Active Users
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-zinc-800 text-zinc-300 border-zinc-700 font-medium text-base"
                >
                  Solo Development
                </Badge>
              </div>
              <p className="text-2xl text-zinc-400 max-w-3xl tracking-wide">
                A production React Native social platform designed specifically
                for the techno music community in Krakow, Poland. The app
                bridges digital community building with real-world venue
                experiences through innovative QR-based loyalty rewards and
                integrated artist booking systems.
              </p>
            </div>

            <div className="flex gap-3">
              <Button
                asChild
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-medium text-lg"
              >
                <Link href="https://example.com">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Live Demo
                </Link>
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white font-medium text-lg"
              >
                <Link href="https://github.com">
                  <Github className="mr-2 h-5 w-5" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Live User Metrics */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 tracking-tight">
            Live User Metrics
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {liveMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <Card
                  key={index}
                  className="text-center bg-zinc-900 border-zinc-800 hover:border-orange-500/50 transition-colors"
                >
                  <CardContent className="p-6">
                    <Icon className="h-10 w-10 mx-auto mb-3 text-orange-500" />
                    <div className="text-3xl font-bold text-white tracking-tight">
                      {metric.value}
                    </div>
                    <div className="text-base text-zinc-400 tracking-wide mt-2">
                      {metric.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="mt-8 border-orange-500/20 bg-orange-950/20">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-orange-400 tracking-tight">
                Real Adoption Success
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-base text-zinc-300 tracking-wide">
                <div>
                  <p className="mb-2">
                    <strong className="text-orange-400">
                      47 active beta testers
                    </strong>{" "}
                    across 3+ months
                  </p>
                  <p className="mb-2">
                    <strong className="text-orange-400">High retention:</strong>{" "}
                    Multiple users with 20-100+ app sessions
                  </p>
                </div>
                <div>
                  <p className="mb-2">
                    <strong className="text-orange-400">
                      Cross-device compatibility:
                    </strong>{" "}
                    iPhone 8 to iPhone 16 Pro Max
                  </p>
                  <p className="mb-2">
                    <strong className="text-orange-400">
                      Continuous iteration:
                    </strong>{" "}
                    7 version releases based on user feedback
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Architecture */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 tracking-tight">
            Technical Architecture
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-400 text-2xl">
                  <Smartphone className="h-6 w-6" />
                  Mobile Platform
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-zinc-300 text-lg">
                <div>
                  <h4 className="font-semibold mb-2">Framework & Backend</h4>
                  <p className="text-muted-foreground">
                    React Native with Expo managed workflow and Firebase
                    Firestore with live synchronization
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">
                    Authentication & Storage
                  </h4>
                  <p className="text-muted-foreground">
                    Firebase Auth with social login integration and Firebase
                    Storage for media content
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Notifications</h4>
                  <p className="text-muted-foreground">
                    Expo Notifications for event updates and community
                    engagement
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-400 text-2xl">
                  <Zap className="h-6 w-6" />
                  Advanced Integrations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-zinc-300 text-lg">
                <div>
                  <h4 className="font-semibold mb-2">SoundCloud API</h4>
                  <p className="text-muted-foreground">
                    Seamless music embedding in social posts with custom player
                    integration
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">QR Code System</h4>
                  <p className="text-muted-foreground">
                    Custom loyalty token scanning at venue entrances with reward
                    distribution
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Camera & Deep Linking</h4>
                  <p className="text-muted-foreground">
                    Professional photo capture and event sharing with user
                    onboarding flows
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Code Architecture */}
        <section className="mb-16">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-orange-400 text-2xl">
                Code Architecture
              </CardTitle>
              <CardDescription className="text-zinc-400 text-lg">
                Comprehensive React Native application with TypeScript
                implementation
              </CardDescription>
            </CardHeader>
            <CardContent className="text-zinc-300 text-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Scale & Structure</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 294 JS/TS files with 12,615 lines of code</li>
                    <li>• 199 React components with modular architecture</li>
                    <li>• 85 useState and 21 useEffect implementations</li>
                    <li>• 51 production dependencies with TypeScript</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Performance & Quality</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Optimized FlatList rendering for smooth scrolling</li>
                    <li>• Proper component lifecycle management</li>
                    <li>• TypeScript implementation for type safety</li>
                    <li>• React Hooks state management pattern</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Platform Features */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 tracking-tight">
            Key Platform Features
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-orange-400 text-2xl">
                    {feature.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1 text-lg">
                          ✓
                        </span>
                        <span className="text-zinc-300 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Multi-Role Administration */}
        <section className="mb-16">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle className="text-orange-400">
                Multi-Role Administration
              </CardTitle>
              <CardDescription className="text-zinc-400">
                Comprehensive role-based access control and content management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Access Control</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>
                      • Role-based access: Fan, Artist, Admin, and Venue tiers
                    </li>
                    <li>• Dynamic feature access based on user permissions</li>
                    <li>• Registration approval and role assignment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Management Tools</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Content moderation and community management</li>
                    <li>• User engagement and event tracking analytics</li>
                    <li>• Automated and manual review workflows</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Challenges */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 tracking-tight">
            Technical Challenges Solved
          </h2>
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-orange-400">
                    {challenge.title}
                  </h3>
                  <p className="text-zinc-300 text-lg">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Real-World Impact */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 tracking-tight">
            Real-World Impact
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-xl text-orange-400">
                    {achievement.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {achievement.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1 text-lg">
                          ✓
                        </span>
                        <span className="text-zinc-300 text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 tracking-tight">
            Technical Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, technologies]) => (
              <Card key={category} className="bg-zinc-900 border-zinc-800">
                <CardHeader>
                  <CardTitle className="capitalize text-orange-400 text-xl">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-base bg-zinc-800 text-zinc-300 border-zinc-700"
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

        {/* Skills Demonstrated */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 tracking-tight">
            Skills Demonstrated
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-orange-400 text-2xl">
                  Full-Stack Mobile Development
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Smartphone className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300 text-lg">
                      React Native mastery with complex component architecture
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300 text-lg">
                      Firebase integration with real-time database and cloud
                      functions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Music className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300 text-lg">
                      API development and external service integration
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-orange-400 text-2xl">
                  Product Design & Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300 text-lg">
                      User experience design for complex social interactions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300 text-lg">
                      Community understanding and target market integration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <QrCode className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300 text-lg">
                      Business model innovation with loyalty systems
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-orange-400 text-2xl">
                  Project Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Zap className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300 text-lg">
                      End-to-end ownership from concept to production
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300 text-lg">
                      User feedback integration and rapid iteration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300 text-lg">
                      Quality assurance and deployment processes
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Impact Statement */}
        <section className="mb-16">
          <Card className="border-orange-500/20 bg-orange-950/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-orange-400">
                Project Impact
              </h2>
              <p className="text-xl text-zinc-300 italic border-l-4 border-orange-500 pl-6">
                This project demonstrates comprehensive mobile development
                capabilities, from technical implementation through community
                building and real-world business integration. The combination of
                user adoption, technical complexity, and innovative features
                showcases senior-level mobile development skills with strong
                product sense and community understanding.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-orange-400">
                Experience the Platform
              </h3>
              <p className="text-xl text-zinc-300 mb-6">
                Explore the live social platform and see the innovative features
                in action.
              </p>
              <div className="flex justify-center gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-medium text-lg"
                >
                  <Link href="https://example.com">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Try Live Demo
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  asChild
                  className="text-zinc-300 hover:bg-zinc-800 hover:text-white font-medium text-lg"
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
