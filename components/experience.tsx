import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description:
        "Lead development of web applications using React, Node.js, and cloud technologies. Mentor junior developers and architect scalable solutions.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to implement pixel-perfect UIs.",
    },
    {
      title: "Frontend Developer",
      company: "Startup Ventures",
      period: "2019 - 2020",
      description:
        "Built responsive web applications and improved user experience. Worked closely with UX designers to implement interactive features.",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="text-lg">{exp.company}</CardDescription>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 sm:mt-0">{exp.period}</div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
