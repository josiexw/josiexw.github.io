import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h1>
            <p className="text-muted-foreground">My recent projects from hackathons, clubs, etc.</p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/wIJV6qguReI"
                allowFullScreen
                width={410}
                height={232}
              />
            </div>
            <CardHeader>
              <CardTitle>Treehacks 2025 EmberScout</CardTitle>
              <CardDescription>
                A radio-controlled car with edge AI for disaster response. Our team 3D-printed 
                and assembled the car in Stanford's makerspace. The RC car has an NVIDIA Jetson nano 
                for edge AI, object detection, and path finding. The car is able to navigate 
                through obstacles to the target (a person in need of rescue after a natural disaster 
                such as an earthquake.)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Edge AI</Badge>
                <Badge variant="secondary">NVIDIA Jetson Nano</Badge>
                <Badge variant="secondary">Computer vision</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/josiexw/treehacks25" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src="/hackprinceton.png?height=200&width=400"
                alt="Project 2"
                fill
                className="object-cover transition-all hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>HackPrinceton 2025 MemoRe</CardTitle>
              <CardDescription>An app for the MetaQuest VR headset (meant to be Integrated 
                into other platforms such as Rayban glasses) to help patients with dementia 
                recall memories. Uses facial recognition and object detection to retrieve information 
                about the people and objects that the user is currently looking at.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">VR/AR</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Flask</Badge>
                <Badge variant="secondary">SQL</Badge>
                <Badge variant="secondary">RAG</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/taipioca/hackprinceton" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative aspect-video">
              <iframe
                src="https://www.youtube.com/embed/ExD2K1UDd0E"
                allowFullScreen
                width={410}
                height={232}
              />
            </div>
            <CardHeader>
              <CardTitle>HackHarvard 2025 Real Estate Analytics</CardTitle>
              <CardDescription>Analyze historical housing market prices and use 
                machine learning to predict projected housing prices in different cities. 
                Provides real estate insights via LLMs with context from data analytics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Flask</Badge>
                <Badge variant="secondary">Data analytics</Badge>
                <Badge variant="secondary">scikit-learn</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/taipioca/hackharvard24" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src="/hackmit.png?height=200&width=400"
                alt="Project 4"
                fill
                className="object-cover transition-all hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>HackMIT 2024 - SkInsight</CardTitle>
              <CardDescription>A dermatology app that uses machine learning to detect 
                skin ailments and disorders (ranging from acne vulgaris to cancer) from a photograph. 
                Provides users with advice and treatment regiments.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React.js</Badge>
                <Badge variant="secondary">Flask</Badge>
                <Badge variant="secondary">Tensorflow</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/hap196/skinsight" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src="/fullhouse.png?height=200&width=400"
                alt="Project 5"
                fill
                className="object-cover transition-all hover:scale-105"
              />
            </div>
            <CardHeader>
              <CardTitle>Summer housing for college students</CardTitle>
              <CardDescription>A dashboard for college students to find housing and housemates 
                for the summer or post-graduation. Students can post housing listings if they are 
                looking for someone to share an accommodation with. Users can also find other students 
                who will be staying the same city short-term or long-term.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Django</Badge>
                <Badge variant="secondary">SQL</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/appdev-at-mit/full-house" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

