"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bookmark, BookmarkCheck, Building2, Clock, Filter, MapPin, Search, Star } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function JobListings() {
  const [bookmarked, setBookmarked] = useState<number[]>([2])

  const toggleBookmark = (id: number) => {
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter((item) => item !== id))
    } else {
      setBookmarked([...bookmarked, id])
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Highlighted Job Listings</CardTitle>
        <div className="flex items-center gap-2">
          <Select defaultValue="expiring">
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="expiring">Expiring Soon</SelectItem>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="salary">Salary</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search job listings..." className="pl-8" />
        </div>

        <div className="space-y-3">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-lg border bg-card p-4 transition-all hover:shadow-md"
            >
              <div className="absolute right-0 top-0">
                {job.id === 1 && (
                  <Badge className="rounded-bl-lg rounded-tr-lg bg-green-500 text-white">Recommended</Badge>
                )}
                {job.id === 3 && <Badge className="rounded-bl-lg rounded-tr-lg bg-blue-500 text-white">New</Badge>}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-primary/10">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {job.rating && (
                        <div className="flex items-center gap-1 text-amber-500">
                          <Star className="h-3 w-3 fill-amber-500" />
                          <span className="text-xs font-medium">{job.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {job.expiresIn} days left
                    </Badge>
                    <Badge variant="secondary">{job.salary}</Badge>
                    {job.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleBookmark(job.id)}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {bookmarked.includes(job.id) ? (
                      <BookmarkCheck className="h-5 w-5 text-primary" />
                    ) : (
                      <Bookmark className="h-5 w-5" />
                    )}
                  </Button>
                  <Link href="/jobs">
                  <Button>Apply now</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center pt-2">
          <Button variant="outline">View All Jobs</Button>
        </div>
      </CardContent>
    </Card>
  )
}

const jobs = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "TechCorp Solutions",
    location: "Remote",
    expiresIn: 3,
    salary: "$20-25/hr",
    rating: 4.8,
    tags: ["React", "TypeScript", "UI/UX"],
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    company: "InnovateTech",
    location: "San Francisco, CA",
    expiresIn: 5,
    salary: "$30-35/hr",
    rating: 4.5,
    tags: ["Java", "Spring", "AWS"],
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "DataDriven Inc.",
    location: "Remote",
    expiresIn: 7,
    salary: "$25-30/hr",
    rating: 4.2,
    tags: ["Python", "ML", "SQL"],
  },
  {
    id: 4,
    title: "Mobile App Developer Intern",
    company: "AppWorks Studio",
    location: "New York, NY",
    expiresIn: 10,
    salary: "$22-28/hr",
    rating: 4.0,
    tags: ["React Native", "Flutter", "Mobile"],
  },
]

