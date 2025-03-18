"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Layout, Server, Sparkles } from "lucide-react"

export function LearningPlans() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Learning Plans</CardTitle>
        <Badge variant="outline" className="gap-1">
          <Sparkles className="h-3 w-3 text-amber-500" />
          <span>AI Recommended</span>
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="recommended">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="recommended">Recommended</TabsTrigger>
            <TabsTrigger value="all">All Tracks</TabsTrigger>
          </TabsList>

          <TabsContent value="recommended" className="space-y-4 pt-4">
            {learningTracks.map((track) => (
              <div key={track.id} className="group rounded-lg border bg-card p-4 transition-all hover:shadow-md">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-md ${track.bgColor}`}>
                      <track.icon className={`h-5 w-5 ${track.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-medium">{track.title}</h3>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={track.progress}
                          className="h-2 w-24"
                          indicatorClassName={track.progressColor}
                        />
                        <span className="text-xs text-muted-foreground">{track.progress}% complete</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    Resume
                  </Button>
                </div>

                <div className="mt-3 text-xs text-muted-foreground">
                  <p>{track.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {track.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center pt-2">
              <Button variant="outline" size="sm">
                View All Learning Tracks
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="all">
            <div className="py-8 text-center text-muted-foreground">All learning tracks will appear here</div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

const learningTracks = [
  {
    id: 1,
    title: "Data Structures & Algorithms",
    description: "Master fundamental DSA concepts for technical interviews",
    progress: 65,
    progressColor: "bg-green-500",
    icon: Code,
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    skills: ["Arrays", "Linked Lists", "Trees", "Graphs", "DP"],
  },
  {
    id: 2,
    title: "System Design",
    description: "Learn to design scalable and reliable systems",
    progress: 30,
    progressColor: "bg-blue-500",
    icon: Server,
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    skills: ["Scalability", "Databases", "Caching", "Load Balancing"],
  },
  {
    id: 3,
    title: "Frontend Development",
    description: "Build modern, responsive user interfaces",
    progress: 80,
    progressColor: "bg-purple-500",
    icon: Layout,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    skills: ["React", "TypeScript", "CSS", "State Management"],
  },
]

