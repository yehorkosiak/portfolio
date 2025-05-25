import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6">
          Full Stack Developer
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I create modern web applications with clean code, intuitive design,
          and seamless user experiences. Passionate about building scalable
          solutions that make a difference.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <Link
            href="https://github.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="/resume.pdf"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Download className="h-6 w-6" />
            <span className="sr-only">Download Resume</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
