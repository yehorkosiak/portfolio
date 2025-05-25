import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-muted-foreground mb-6">
              I'm a passionate full stack developer with 5+ years of experience building web applications that solve
              real-world problems. I love working with modern technologies and creating efficient, scalable solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or
              sharing knowledge with the developer community through blog posts and talks.
            </p>
            <p className="text-lg text-muted-foreground">
              I believe in writing clean, maintainable code and creating user experiences that are both beautiful and
              functional.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>🎓 Computer Science Degree</li>
                <li>💼 5+ Years Experience</li>
                <li>🌍 Remote & On-site Work</li>
                <li>🚀 20+ Projects Delivered</li>
                <li>☕ Coffee Enthusiast</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
