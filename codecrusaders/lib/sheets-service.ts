// This is a placeholder for a real Google Sheets API integration
// In a production app, you would use the Google Sheets API with proper authentication

export interface MetricsData {
  date: string
  completedTasks: number
  hoursWorked: number
  efficiency: number
}

export interface WeeklyReport {
  week: string
  totalHours: number
  teamMembers: {
    name: string
    hours: number
    tasks: string[]
  }[]
}

// Simulated data - in a real app, this would come from the Google Sheets API
export async function fetchMetricsData(): Promise<MetricsData[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      date: "2023-01-01",
      completedTasks: 12,
      hoursWorked: 40,
      efficiency: 0.3,
    },
    {
      date: "2023-01-08",
      completedTasks: 15,
      hoursWorked: 42,
      efficiency: 0.36,
    },
    {
      date: "2023-01-15",
      completedTasks: 10,
      hoursWorked: 38,
      efficiency: 0.26,
    },
    {
      date: "2023-01-22",
      completedTasks: 18,
      hoursWorked: 45,
      efficiency: 0.4,
    },
    {
      date: "2023-01-29",
      completedTasks: 20,
      hoursWorked: 44,
      efficiency: 0.45,
    },
  ]
}

export async function fetchWeeklyReports(): Promise<WeeklyReport[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  return [
    {
      week: "Jan 1-7",
      totalHours: 120,
      teamMembers: [
        { name: "Alice", hours: 40, tasks: ["Design", "Frontend"] },
        { name: "Bob", hours: 38, tasks: ["Backend", "Testing"] },
        { name: "Charlie", hours: 42, tasks: ["Documentation", "QA"] },
      ],
    },
    {
      week: "Jan 8-14",
      totalHours: 125,
      teamMembers: [
        { name: "Alice", hours: 41, tasks: ["Design", "Frontend"] },
        { name: "Bob", hours: 40, tasks: ["Backend", "Testing"] },
        { name: "Charlie", hours: 44, tasks: ["Documentation", "QA"] },
      ],
    },
    {
      week: "Jan 15-21",
      totalHours: 118,
      teamMembers: [
        { name: "Alice", hours: 38, tasks: ["Design", "Frontend"] },
        { name: "Bob", hours: 36, tasks: ["Backend", "Testing"] },
        { name: "Charlie", hours: 44, tasks: ["Documentation", "QA"] },
      ],
    },
  ]
}
