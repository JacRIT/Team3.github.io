import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Team() {
  const teamMembers = [
    {
      name: "JP Dumont",
      role: "Team Lead / Full Stack Developer",
      description:
        "JP serves as the primary point of contact within the team, plans meetings, and ensures project progress aligns with objectives.",
      avatar: "https://avatars.githubusercontent.com/u/113440108?v=4",
    },
    {
      name: "Aiden Green",
      role: "Full Stack Developer & Scribe",
      description:
        "Aiden takes notes during meetings and plays a key role in back-end development, focusing on API design and implementation.",
      avatar: "https://avatars.githubusercontent.com/u/70248258?s=64&v=4",
    },
    {
      name: "Jessie Perce",
      role: "Full Stack Developer & Sponsor Liaison",
      description:
        "Jessie acts as the main communication channel between the team and the sponsor, ensuring clarity in requirements and deliverables.",
      avatar: "https://avatars.githubusercontent.com/u/113440108?v=4",
    },
    {
      name: "Michael Nersinger",
      role: "Full Stack Developer",
      description:
        "Michael has a keen understanding for Full Stack Development and aids greatly in the teams success of the application.",
      avatar: "https://avatars.githubusercontent.com/u/113440108?v=4",
    },
    {
      name: "Charlie Luebstorff",
      role: "Full Stack Developer",
      description:
        "Charlie designs and implements the graphical user interface (GUI) of the application, handling all technical details related to the visual features.",
      avatar: "https://avatars.githubusercontent.com/u/113440108?v=4",
    },
    {
      name: "Jacob Canedy",
      role: "Full Stack Developer & Mockup Development",
      description:
        "Jacob is responsible for converting the defined requirements into mockups that can be presented to the sponsor for feedback before work begins.",
      avatar: "https://avatars.githubusercontent.com/u/113440108?v=4",
    },
    {
      name: "Huan Huynh",
      role: "Test Developer",
      description:
        "Huan is responsible for designing and implementing both front-end UI testing and back-end service testing to ensure product quality.",
      avatar: "https://avatars.githubusercontent.com/u/113440108?v=4",
    },
    {
      name: "Taha Syed-Quadri",
      role: "Front-End Developer",
      description:
        "Taha works on the design and implementation of the front-end user interface of the application, focusing on delivering an intuitive visual experience.",
      avatar: "https://avatars.githubusercontent.com/u/113440108?v=4",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Our Team</h1>
        <p className="text-muted-foreground">
          Meet the Code Crusaders team members, coach, and sponsor
        </p>
      </div>

      <Tabs defaultValue="team" className="space-y-4">
        <TabsList>
          <TabsTrigger value="team">Code Crusaders</TabsTrigger>
          <TabsTrigger value="coach">Coach</TabsTrigger>
          <TabsTrigger value="sponsor">Sponsor</TabsTrigger>
        </TabsList>

        <TabsContent value="team" className="space-y-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={member.avatar}
                        alt={`${member.name}'s avatar`}
                      />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="coach" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage
                    src="https://claws.rit.edu/photos/images/placeholder.jpg"
                    alt="Bryan Basham's avatar"
                  />
                  <AvatarFallback>BB</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg">Bryan Basham</CardTitle>
                  <CardDescription>Coach</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">bdbvse@rit.edu</p>
              <p className="text-muted-foreground text-sm">
                Golisano College of Computing and Information Sciences Faculty
                and Software Engineering Senior Project Coach
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sponsor" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>FiTR Skills</CardTitle>
              <CardDescription>Project Sponsor</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                FiTR Skills is the sponsor for this senior project, providing
                guidance and requirements for the development of the FiTR
                application.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
