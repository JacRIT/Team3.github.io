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
import { fetchMetricsData, type MetricsData } from "@/lib/sheets-service"
import { Skeleton } from "@/components/ui/skeleton"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
} from "recharts"

export function MetricsDashboard() {
  const [data, setData] = useState<MetricsData[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const metricsData = await fetchMetricsData()
        setData(metricsData)
      } catch (error) {
        console.error("Failed to fetch metrics data:", error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-[400px] w-full rounded-md" />
      </div>
    )
  }

  if (!data) {
    return <div>Failed to load metrics data. Please try again later.</div>
  }

  return (
    <Tabs defaultValue="tasks" className="space-y-4">
      <TabsList>
        <TabsTrigger value="tasks">Completed Tasks</TabsTrigger>
        <TabsTrigger value="hours">Hours Worked</TabsTrigger>
        <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
      </TabsList>

      <TabsContent value="tasks">
        <Card>
          <CardHeader>
            <CardTitle>Completed Tasks</CardTitle>
            <CardDescription>
              Number of tasks completed per week
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="completedTasks"
                    fill="#8884d8"
                    name="Completed Tasks"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="hours">
        <Card>
          <CardHeader>
            <CardTitle>Hours Worked</CardTitle>
            <CardDescription>Total hours worked per week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="hoursWorked"
                    fill="#82ca9d"
                    name="Hours Worked"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="efficiency">
        <Card>
          <CardHeader>
            <CardTitle>Efficiency</CardTitle>
            <CardDescription>Tasks completed per hour worked</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="efficiency"
                    stroke="#8884d8"
                    name="Efficiency"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
