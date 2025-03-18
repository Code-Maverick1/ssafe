"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, MessageSquare, MoreHorizontal, Share2, ThumbsUp, TrendingUpIcon as Trending } from "lucide-react"
import { motion } from "framer-motion"

export function CommunityFeed() {
  const [activeTab, setActiveTab] = useState("all")
  const [upvoted, setUpvoted] = useState<number[]>([])

  const toggleUpvote = (id: number) => {
    if (upvoted.includes(id)) {
      setUpvoted(upvoted.filter((item) => item !== id))
    } else {
      setUpvoted([...upvoted, id])
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Community Forum</CardTitle>
        <Button variant="outline" size="sm">
          Create Post
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="questions">Questions</TabsTrigger>
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="success">Success Stories</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Trending className="h-4 w-4 text-primary" />
                <h3 className="font-medium">Trending Topics</h3>
              </div>
              <Button variant="ghost" size="sm" className="gap-1">
                <span>This Week</span>
                <ChevronDown className="h-3 w-3" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {trendingTopics.map((topic) => (
                <Badge key={topic} variant="secondary" className="cursor-pointer">
                  #{topic}
                </Badge>
              ))}
            </div>

            <div className="space-y-4 pt-2">
              {posts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-lg border bg-card p-4"
                >
                  <div className="flex justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={post.avatar} alt={post.author} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{post.author}</p>
                        <p className="text-xs text-muted-foreground">
                          {post.time} • {post.type}
                        </p>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Save Post</DropdownMenuItem>
                        <DropdownMenuItem>Follow User</DropdownMenuItem>
                        <DropdownMenuItem>Report</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="mt-3 space-y-2">
                    <h3 className="font-semibold">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">{post.content}</p>
                    {post.tags && (
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="gap-1" onClick={() => toggleUpvote(post.id)}>
                      <ThumbsUp className={`h-4 w-4 ${upvoted.includes(post.id) ? "fill-primary text-primary" : ""}`} />
                      <span>{upvoted.includes(post.id) ? post.upvotes + 1 : post.upvotes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center pt-2">
              <Button variant="outline">View More Posts</Button>
            </div>
          </TabsContent>

          <TabsContent value="questions">
            <div className="py-8 text-center text-muted-foreground">Questions content will appear here</div>
          </TabsContent>

          <TabsContent value="discussions">
            <div className="py-8 text-center text-muted-foreground">Discussions content will appear here</div>
          </TabsContent>

          <TabsContent value="success">
            <div className="py-8 text-center text-muted-foreground">Success stories will appear here</div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

const trendingTopics = [
  "DSA",
  "SystemDesign",
  "ReactJS",
  "InterviewTips",
  "LeetCode",
  "CareerAdvice",
  "SalaryNegotiation",
]

const posts = [
  {
    id: 1,
    author: "Priya Sharma",
    avatar: "/placeholder.svg?height=40&width=40&text=PS",
    time: "2 hours ago",
    type: "Question",
    title: "How to prepare for Google interviews in 3 months?",
    content:
      "I have an interview with Google coming up in 3 months. What's the best way to prepare for the technical rounds? Should I focus more on algorithms or system design?",
    upvotes: 24,
    comments: 12,
    tags: ["Interview", "Google", "Preparation"],
  },
  {
    id: 2,
    author: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40&text=AJ",
    time: "Yesterday",
    type: "Success Story",
    title: "Got an offer from Microsoft after 6 months of preparation!",
    content:
      "After 6 months of intense preparation and 3 rejections, I finally got an offer from Microsoft as a Software Engineer. Here's what worked for me...",
    upvotes: 156,
    comments: 43,
    tags: ["Success", "Microsoft", "Offer"],
  },
  {
    id: 3,
    author: "Raj Patel",
    avatar: "/placeholder.svg?height=40&width=40&text=RP",
    time: "3 days ago",
    type: "Discussion",
    title: "Is LeetCode enough for interview preparation?",
    content:
      "I've been solving LeetCode problems for the past 2 months, but I'm not sure if that's enough. Should I also focus on projects or open source contributions?",
    upvotes: 87,
    comments: 32,
    tags: ["LeetCode", "Preparation", "Projects"],
  },
]

