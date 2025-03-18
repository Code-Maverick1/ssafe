import type React from "react"
import type { Metadata } from "next"
import { WelcomeHero } from "@/components/welcome-hero"
import { JobListings } from "@/components/job-listings"
import { CommunityFeed } from "@/components/community-feed"
import { LearningPlans } from "@/components/learning-plans"
import { PerformanceOverview } from "@/components/performance-overview"
import { ApplicationStatus } from "@/components/application-status"
import { QuickActionsBar } from "@/components/quick-actions-bar"
import { CodingChallenges } from "@/components/coding-challenges"

export const metadata: Metadata = {
  title: "Dashboard | CodeCareer",
  description: "Your personalized job search and learning platform",
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      <WelcomeHero />

      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <JobListings />
            <CommunityFeed />
          </div>

          <div className="space-y-6">
            <LearningPlans />
            <PerformanceOverview />
            <ApplicationStatus />
            <CodingChallenges />
          </div>
        </div>
      </div>

      <QuickActionsBar />
    </div>
  )
}

function DashboardDateRangePicker() {
  return (
    <div className="flex items-center gap-2">
      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
        Last 30 days
      </button>
    </div>
  )
}

function DashboardTopCandidates({ className }: { className?: string }) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow ${className}`}>
      <div className="p-6 flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Top Candidates</h3>
          <button className="text-sm text-primary">View all</button>
        </div>
        <div className="space-y-4">
          {topCandidates.map((candidate) => (
            <div
              key={candidate.id}
              className="flex items-center gap-4 p-3 rounded-md hover:bg-accent transition-colors"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={`/placeholder.svg?height=40&width=40&text=${candidate.name.charAt(0)}`}
                  alt={candidate.name}
                  className="object-cover"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white"></span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{candidate.name}</p>
                <p className="text-sm text-muted-foreground truncate">{candidate.position}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-sm font-medium">{candidate.score}%</span>
                  <span className="text-xs text-muted-foreground">match</span>
                </div>
                <div className="w-16 h-2 rounded-full bg-muted overflow-hidden">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${candidate.score}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DashboardHiringFunnel({ className }: { className?: string }) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow ${className}`}>
      <div className="p-6 flex flex-col space-y-4">
        <h3 className="text-lg font-semibold">Hiring Funnel</h3>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-64">
            <FunnelChart />
          </div>
        </div>
      </div>
    </div>
  )
}

function FunnelChart() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between">
      {funnelData.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <div className="w-32 text-sm text-right">{item.stage}</div>
          <div className="flex-1 h-8 relative">
            <div
              className="absolute top-0 left-0 h-full bg-primary/10 rounded-r-md"
              style={{ width: `${(item.count / funnelData[0].count) * 100}%` }}
            >
              <div
                className="absolute top-0 left-0 h-full bg-primary rounded-r-md"
                style={{ width: `${(item.hired / item.count) * 100}%` }}
              ></div>
            </div>
            <div className="absolute top-0 left-2 h-full flex items-center">
              <span className="text-sm font-medium">{item.count}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function DashboardRecentApplications({ className }: { className?: string }) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow ${className}`}>
      <div className="p-6 flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Recent Applications</h3>
          <button className="text-sm text-primary">View all</button>
        </div>
        <div className="space-y-4">
          {recentApplications.map((application) => (
            <div
              key={application.id}
              className="flex items-center gap-4 p-3 rounded-md hover:bg-accent transition-colors"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={`/placeholder.svg?height=40&width=40&text=${application.name.charAt(0)}`}
                  alt={application.name}
                  className="object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{application.name}</p>
                <p className="text-sm text-muted-foreground truncate">{application.position}</p>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    application.status === "New"
                      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                      : application.status === "Reviewing"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                  }`}
                >
                  {application.status}
                </span>
                <span className="text-xs text-muted-foreground">{application.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DashboardUpcomingInterviews({ className }: { className?: string }) {
  return (
    <div className={`rounded-lg border bg-card text-card-foreground shadow ${className}`}>
      <div className="p-6 flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Upcoming Interviews</h3>
          <button className="text-sm text-primary">View all</button>
        </div>
        <div className="space-y-4">
          {upcomingInterviews.map((interview) => (
            <div
              key={interview.id}
              className="flex items-center gap-4 p-3 rounded-md hover:bg-accent transition-colors"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                <CalendarIcon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{interview.name}</p>
                <p className="text-sm text-muted-foreground truncate">{interview.position}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{interview.time}</p>
                <p className="text-sm text-muted-foreground">{interview.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Mock data
const topCandidates = [
  { id: 1, name: "Alex Johnson", position: "Senior Frontend Developer", score: 95 },
  { id: 2, name: "Sarah Williams", position: "UX Designer", score: 92 },
  { id: 3, name: "Michael Brown", position: "Backend Engineer", score: 88 },
  { id: 4, name: "Emily Davis", position: "Product Manager", score: 85 },
]

const funnelData = [
  { stage: "Applications", count: 1250, hired: 50 },
  { stage: "Screening", count: 750, hired: 50 },
  { stage: "Interview", count: 350, hired: 50 },
  { stage: "Assessment", count: 180, hired: 50 },
  { stage: "Offer", count: 80, hired: 50 },
  { stage: "Hired", count: 50, hired: 50 },
]

const recentApplications = [
  { id: 1, name: "David Wilson", position: "Full Stack Developer", status: "New", time: "2h ago" },
  { id: 2, name: "Jessica Lee", position: "Data Scientist", status: "Reviewing", time: "5h ago" },
  { id: 3, name: "Robert Taylor", position: "DevOps Engineer", status: "Shortlisted", time: "1d ago" },
  { id: 4, name: "Amanda Clark", position: "UI Designer", status: "New", time: "1d ago" },
]

const upcomingInterviews = [
  { id: 1, name: "Thomas Anderson", position: "Senior Backend Developer", time: "10:00 AM", date: "Today" },
  { id: 2, name: "Lisa Rodriguez", position: "Product Manager", time: "2:30 PM", date: "Today" },
  { id: 3, name: "James Martin", position: "Frontend Developer", time: "11:15 AM", date: "Tomorrow" },
  { id: 4, name: "Sophia Chen", position: "UX Researcher", time: "3:00 PM", date: "Tomorrow" },
]

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

