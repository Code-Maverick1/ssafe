"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Code, Flame, Star, Zap } from "lucide-react"

export function CodingChallenges() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Coding Challenges</CardTitle>
        <div className="flex items-center gap-1 text-amber-500">
          <Flame className="h-4 w-4 fill-amber-500" />
          <span className="text-sm font-medium">3 day streak!</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg border bg-primary/5 p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Daily Challenge</h3>
            <Badge variant="outline" className="gap-1">
              <Clock className="h-3 w-3" />
              <span>30 min</span>
            </Badge>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Merge Intervals - Given an array of intervals, merge all overlapping intervals.
          </p>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Badge variant="secondary">Medium</Badge>
              <Badge variant="outline">Arrays</Badge>
              <Badge variant="outline">Sorting</Badge>
            </div>
            <Button size="sm" className="gap-1">
              <Code className="h-3 w-3" />
              <span>Solve</span>
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="flex items-center gap-2 text-sm font-medium">
            <Zap className="h-4 w-4 text-primary" />
            <span>Recommended Problems</span>
          </h3>

          <div className="space-y-2">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{challenge.title}</p>
                    <Badge
                      variant={
                        challenge.difficulty === "Easy"
                          ? "outline"
                          : challenge.difficulty === "Medium"
                            ? "secondary"
                            : "destructive"
                      }
                      className="text-xs"
                    >
                      {challenge.difficulty}
                    </Badge>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                      {challenge.rating}
                    </span>
                    <span>•</span>
                    <span>{challenge.category}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <Button variant="outline" size="sm">
            View All Challenges
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

const challenges = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    rating: 4.8,
    category: "Arrays & Hashing",
  },
  {
    id: 2,
    title: "LRU Cache",
    difficulty: "Medium",
    rating: 4.6,
    category: "Design",
  },
  {
    id: 3,
    title: "Word Search II",
    difficulty: "Hard",
    rating: 4.3,
    category: "Trie & Backtracking",
  },
]

