"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about/" },
  { name: "Team", href: "/team/" },
  { name: "Reports and Metrics", href: "/reports_and_metrics/" },
  { name: "Process and Plan", href: "/process/" },
  { name: "Wiki", href: "https://github.com/JacRIT/Team3.github.io/wiki" },
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <nav>
      <ul>
        {links.map((link) => {
          return (
            <li
              className={clsx("", {
                "underline ": pathname === link.href,
              })}
            >
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
