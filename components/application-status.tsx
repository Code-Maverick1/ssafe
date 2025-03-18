"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, ChevronRight, Clock, FileText, Video } from "lucide-react"

export function ApplicationStatus() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Application Status</CardTitle>
        <Button variant="ghost" size="sm" className="gap-1">
          <span>View All</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="flex items-center gap-2 text-sm font-medium">
            <Calendar className="h-4 w-4 text-primary" />
            <span>Upcoming Interviews</span>
          </h3>

          <div className="space-y-2">
            {interviews.map((interview) => (
              <div key={interview.id} className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={interview.companyLogo} alt={interview.company} />
                    <AvatarFallback>{interview.company[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{interview.company}</p>
                    <p className="text-xs text-muted-foreground">{interview.position}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <p className="text-sm">{interview.time}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Badge variant="outline" className="flex items-center gap-1 text-xs">
                      <Video className="h-3 w-3" />
                      <span>{interview.type}</span>
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="flex items-center gap-2 text-sm font-medium">
            <FileText className="h-4 w-4 text-primary" />
            <span>Recent Applications</span>
          </h3>

          <div className="space-y-2">
            {applications.map((application) => (
              <div key={application.id} className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={application.companyLogo} alt={application.company} />
                    <AvatarFallback>{application.company[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{application.company}</p>
                    <p className="text-xs text-muted-foreground">{application.position}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    variant={
                      application.status === "In Review"
                        ? "secondary"
                        : application.status === "Applied"
                          ? "outline"
                          : application.status === "Rejected"
                            ? "destructive"
                            : "default"
                    }
                  >
                    {application.status}
                  </Badge>
                  <p className="mt-1 text-xs text-muted-foreground">{application.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

const interviews = [
  {
    id: 1,
    company: "TechCorp",
    companyLogo: "/placeholder.svg?height=32&width=32&text=TC",
    position: "Frontend Developer Intern",
    time: "Today, 2:00 PM",
    type: "Video Call",
  },
  {
    id: 2,
    company: "InnovateTech",
    companyLogo: "/placeholder.svg?height=32&width=32&text=IT",
    position: "Software Engineering Intern",
    time: "Tomorrow, 10:30 AM",
    type: "Technical Round",
  },
]

const applications = [
  {
    id: 1,
    company: "DataDriven",
    companyLogo: "/placeholder.svg?height=32&width=32&text=DD",
    position: "Data Science Intern",
    status: "In Review",
    date: "Applied 3 days ago",
  },
  {
    id: 2,
    company: "AppWorks",
    companyLogo: "/placeholder.svg?height=32&width=32&text=AW",
    position: "Mobile App Developer",
    status: "Applied",
    date: "Applied 1 week ago",
  },
  {
    id: 3,
    company: "CloudTech",
    companyLogo: "/placeholder.svg?height=32&width=32&text=CT",
    position: "Cloud Engineer Intern",
    status: "Rejected",
    date: "Applied 2 weeks ago",
  },
]

