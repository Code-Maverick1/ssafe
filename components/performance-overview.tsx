"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BarChart, CheckCircle, Clock, FileText, Target, TrendingUp } from "lucide-react"

export function PerformanceOverview() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Performance Overview</CardTitle>
        <Badge variant="outline" className="gap-1">
          <TrendingUp className="h-3 w-3 text-green-500" />
          <span>Improving</span>
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="coding">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="coding">Coding</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>

          <TabsContent value="coding" className="space-y-4 pt-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-100">
                    <BarChart className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">LeetCode</p>
                    <p className="text-xs text-muted-foreground">Problems solved</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold">128</p>
                  <p className="text-xs text-green-500">+12 this month</p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span>Easy: 45</span>
                  <span>Medium: 68</span>
                  <span>Hard: 15</span>
                </div>
                <div className="flex h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full bg-green-500" style={{ width: "35%" }} />
                  <div className="h-full bg-amber-500" style={{ width: "53%" }} />
                  <div className="h-full bg-red-500" style={{ width: "12%" }} />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-100">
                    <Target className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Goal Progress</p>
                    <p className="text-xs text-muted-foreground">Monthly targets</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span>DSA Problems: 50/75</span>
                    <span className="font-medium">67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span>System Design: 3/5</span>
                    <span className="font-medium">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span>Mock Interviews: 2/4</span>
                    <span className="font-medium">50%</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="applications" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-blue-500" />
                  <p className="text-sm font-medium">Applications</p>
                </div>
                <p className="mt-1 text-2xl font-bold">12</p>
                <p className="text-xs text-muted-foreground">Last 30 days</p>
              </div>

              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-amber-500" />
                  <p className="text-sm font-medium">Interviews</p>
                </div>
                <p className="mt-1 text-2xl font-bold">3</p>
                <p className="text-xs text-muted-foreground">Scheduled</p>
              </div>

              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <p className="text-sm font-medium">Success Rate</p>
                </div>
                <p className="mt-1 text-2xl font-bold">25%</p>
                <p className="text-xs text-muted-foreground">Interviews to offers</p>
              </div>

              <div className="rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-purple-500" />
                  <p className="text-sm font-medium">Response Rate</p>
                </div>
                <p className="mt-1 text-2xl font-bold">42%</p>
                <p className="text-xs text-muted-foreground">Application responses</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

