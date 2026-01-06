import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend & Databases",
    skills: ["Firebase", "REST APIs", "Node.js (Basic)"],
  },
  {
    title: "Data & Analysis",
    skills: ["Python", "Pandas", "NumPy", "Excel"],
  },
  {
    title: "Other Skills",
    skills: ["Git & GitHub", "Problem Solving", "Team Collaboration"],
  },
];

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <Card key={index} className="transition-transform transform hover:scale-105">
              <CardHeader>
                <CardTitle>{group.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}