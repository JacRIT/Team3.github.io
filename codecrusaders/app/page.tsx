import Image from "next/image"
import About from "./about/page"
import Team from "./team/page"
import Reports_And_Metrics from "./reports_and_metrics/page"
import Process from "./process/page"

export default function Home() {
  return (
    <>
      <About />
      <Team />
      <Reports_And_Metrics />
      <Process />
    </>
  )
}
