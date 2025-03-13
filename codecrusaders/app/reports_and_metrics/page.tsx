"use client"

import { useState, useEffect } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"
import { Download, ExternalLink, RefreshCw } from "lucide-react"
// import { useToast } from "@/hooks/use-toast"

export default function ReportsAndMetrics() {
  const [metricsLoading, setMetricsLoading] = useState(true)
  const [reportsLoading, setReportsLoading] = useState(true)
  // const { toast } = useToast()

  useEffect(() => {
    // Simulate loading time for iframes
    const metricsTimer = setTimeout(() => setMetricsLoading(false), 1500)
    const reportsTimer = setTimeout(() => setReportsLoading(false), 2000)

    return () => {
      clearTimeout(metricsTimer)
      clearTimeout(reportsTimer)
    }
  }, [])

  const handleRefresh = (type: "metrics" | "reports") => {
    if (type === "metrics") {
      setMetricsLoading(true)
      setTimeout(() => setMetricsLoading(false), 1500)
    } else {
      setReportsLoading(true)
      setTimeout(() => setReportsLoading(false), 2000)
    }

    // toast({
    //   title: "Refreshing data",
    //   description: `${
    //     type === "metrics" ? "Metrics" : "Reports"
    //   } data is being refreshed.`,
    // })
  }

  const handleDownload = (type: "metrics" | "reports") => {
    // toast({
    //   title: "Download started",
    //   description: `${
    //     type === "metrics" ? "Metrics" : "Reports"
    //   } data is being prepared for download.`,
    // })
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Reports & Metrics</h1>
        <p className="text-muted-foreground">
          View and analyze our performance metrics and weekly reports
        </p>
      </div>

      <Tabs defaultValue="metrics" className="space-y-4">
        <TabsList>
          <TabsTrigger value="metrics">Metrics</TabsTrigger>
          <TabsTrigger value="reports">Weekly Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="metrics" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>
                  Key performance indicators and project metrics
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleRefresh("metrics")}
                  disabled={metricsLoading}
                >
                  <RefreshCw
                    className={`h-4 w-4 ${
                      metricsLoading ? "animate-spin" : ""
                    }`}
                  />
                  <span className="sr-only">Refresh</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDownload("metrics")}
                >
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRxSn5dO04LfV4DcQABKMMI_OsAa8fsiq9wj3bt17BmKhA-VwFmnxpo4Ctt_bp5OvdXx4kweZUZYxCr/pubhtml"
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
              {metricsLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-[400px] w-full rounded-md" />
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-md border h-[500px]">
                  <iframe
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRxSn5dO04LfV4DcQABKMMI_OsAa8fsiq9wj3bt17BmKhA-VwFmnxpo4Ctt_bp5OvdXx4kweZUZYxCr/pubhtml?widget=true&amp;headers=false"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Weekly Reports</CardTitle>
                <CardDescription>
                  Detailed weekly reports of hours worked and progress made
                </CardDescription>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleRefresh("reports")}
                  disabled={reportsLoading}
                >
                  <RefreshCw
                    className={`h-4 w-4 ${
                      reportsLoading ? "animate-spin" : ""
                    }`}
                  />
                  <span className="sr-only">Refresh</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDownload("reports")}
                >
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Download</span>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://docs.google.com/spreadsheets/d/e/2PACX-1vQNfWEHnACtp5tyIO2FKM4OyTEhLPnmKI2b-Gue0JUZJ02FoVAWxGh-R_K4cJ5zuLKrP2Bj4LgY4Zcq/pubhtml"
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
              {reportsLoading ? (
                <div className="space-y-2">
                  <Skeleton className="h-[400px] w-full rounded-md" />
                </div>
              ) : (
                <div className="relative overflow-hidden rounded-md border h-[500px]">
                  <iframe
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQNfWEHnACtp5tyIO2FKM4OyTEhLPnmKI2b-Gue0JUZJ02FoVAWxGh-R_K4cJ5zuLKrP2Bj4LgY4Zcq/pubhtml?widget=true&amp;headers=false"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
