"use client"

import { Button } from "@/components/ui/button"
import { BriefcaseIcon, Code2, FileEdit, LayoutDashboard, Plus } from "lucide-react"
import { motion } from "framer-motion"

export function QuickActionsBar() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center"
    >
      <div className="mb-4 flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 shadow-lg backdrop-blur">
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
          <LayoutDashboard className="h-5 w-5" />
          <span className="sr-only">Dashboard</span>
        </Button>

        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
          <BriefcaseIcon className="h-5 w-5" />
          <span className="sr-only">Jobs</span>
        </Button>

        <Button size="icon" className="h-12 w-12 rounded-full bg-primary text-primary-foreground">
          <Plus className="h-6 w-6" />
          <span className="sr-only">Create</span>
        </Button>

        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
          <Code2 className="h-5 w-5" />
          <span className="sr-only">Challenges</span>
        </Button>

        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full">
          <FileEdit className="h-5 w-5" />
          <span className="sr-only">Resume</span>
        </Button>
      </div>
    </motion.div>
  )
}

