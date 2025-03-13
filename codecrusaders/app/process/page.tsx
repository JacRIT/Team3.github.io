"use client"

import { useState, useEffect } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ExternalLink, RefreshCw } from "lucide-react"

export default function Process() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for iframe
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleRefresh = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Process and Plan</h1>
        <p className="text-muted-foreground">
          Our development methodology and project roadmap
        </p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div>
            <CardTitle>Project Documentation</CardTitle>
            <CardDescription>
              Detailed process documentation and project plan
            </CardDescription>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={handleRefresh}
              disabled={loading}
            >
              <RefreshCw
                className={`h-4 w-4 ${loading ? "animate-spin" : ""}`}
              />
              <span className="sr-only">Refresh</span>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vRhc7M6mh0PP249T_HxK5GVZogUQQkIBW2RxMMXAaqSbr5qd4XmZ6dunclc9vOZgUJNRlHg6T4f9C6m/pub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Open in new tab</span>
              </a>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              <Skeleton className="h-[600px] w-full rounded-md" />
            </div>
          ) : (
            <div className="relative overflow-hidden rounded-md border h-[600px]">
              <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vRhc7M6mh0PP249T_HxK5GVZogUQQkIBW2RxMMXAaqSbr5qd4XmZ6dunclc9vOZgUJNRlHg6T4f9C6m/pub?embedded=true"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
