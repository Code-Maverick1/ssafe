"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Bell, Calendar, CheckCircle, Edit, FileText } from "lucide-react"
import { motion } from "framer-motion"

export function WelcomeHero() {
  const [quote] = useState(getRandomQuote())

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-primary/5 to-background pb-6 pt-10">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
          <Avatar className="h-24 w-24 border-4 border-background shadow-lg">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Adil" />
            <AvatarFallback className="text-2xl">AD</AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-3xl font-bold tracking-tight">Welcome back, Adil!</h1>
              <Badge variant="outline" className="ml-2 bg-primary/10">
                Premium
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground">Ready to land your dream internship?</p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Card className="border-none bg-background/60 backdrop-blur">
                <CardContent className="flex items-center gap-2 p-3">
                  <FileText className="h-4 w-4 text-blue-500" />
                  <div>
                    <p className="text-sm font-medium">Applications</p>
                    <p className="text-xl font-bold">12</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none bg-background/60 backdrop-blur">
                <CardContent className="flex items-center gap-2 p-3">
                  <Calendar className="h-4 w-4 text-purple-500" />
                  <div>
                    <p className="text-sm font-medium">Interviews</p>
                    <p className="text-xl font-bold">3</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none bg-background/60 backdrop-blur">
                <CardContent className="flex items-center gap-2 p-3">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <div>
                    <p className="text-sm font-medium">Profile</p>
                    <div className="flex items-center gap-2">
                      <Progress value={85} className="h-2 w-16" />
                      <span className="text-sm font-medium">85%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Edit className="h-3 w-3" />
              <span>Edit Profile</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                5
              </span>
            </Button>
          </div>
        </div>

        <div className="mt-6 rounded-lg border bg-card/30 p-4 backdrop-blur">
          <p className="text-sm italic text-muted-foreground">"{quote}"</p>
        </div>
      </div>
    </div>
  )
}

function getRandomQuote() {
  const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
    "The best way to predict the future is to create it. – Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "The most difficult thing is the decision to act, the rest is merely tenacity. – Amelia Earhart",
  ]

  return quotes[Math.floor(Math.random() * quotes.length)]
}

