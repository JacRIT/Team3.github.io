import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function About() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Project Synopsis</h1>
        <p className="text-muted-foreground">
          Learn about the FiTR application and its purpose
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>FiTR: Connecting Job Seekers and Employers</CardTitle>
          <CardDescription>An innovative job matching platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="leading-7">
            FiTR is an innovative web application designed to streamline the job
            matching process by connecting job seekers with employers based
            primarily on location and key skills. Modeled after a "dating app"
            format, users swipe left or right on job listings to indicate
            whether they possess the necessary skills for a given position.
          </p>

          <p className="leading-7">
            When a match occurs between a job seeker and an employer, a brief
            5-10 minute interview is scheduled, allowing both parties to assess
            if they wish to continue the hiring process. Beyond facilitating
            quick connections, FiTR provides valuable insights for employers,
            educators, and job seekers.
          </p>

          <p className="leading-7">
            Employers can compare skills to other job postings, educators can
            identify in-demand skills, and job seekers can evaluate how their
            skills measure up against others in the industry. The platform
            highlights the skills users possess while identifying any gaps in
            their expertise.
          </p>

          <p className="leading-7">
            For job seekers seeking to enhance their qualifications, FiTR offers
            educational resources to acquire the necessary skills, paving the
            way for improved employability. Overall, FiTR is a comprehensive,
            professional career platform that simplifies the job search process
            for job seekers, employers, and educators alike. It empowers
            individuals to understand the skills they need to secure employment
            while fostering growth opportunities for career advancement.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
