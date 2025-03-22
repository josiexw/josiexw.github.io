import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="font-semibold text-lg">
            Josephine Wang
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/cv" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              CV
            </Link>
            <Link
              href="/projects"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container grid items-center gap-8 pb-8 pt-6 md:py-10">
          <div className="flex flex-col-reverse gap-4 md:grid md:grid-cols-2 md:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hello, I'm Josephine Wang
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A sophomore studying 6-3 (Computer Science and Engineering) at MIT.
                </p>
              </div>
              <div className="flex gap-4">
                <Button asChild>
                  <Link href="/projects">
                    View Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/cv">My Resume</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <Link href="https://github.com/josiexw" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link href="https://linkedin.com/in/josiexw" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="mailto:josiexw@mit.edu">
                  <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-[400px] overflow-hidden rounded-full border-4 border-background bg-muted shadow-xl">
                <Image
                  src="/profile2.jpeg?height=400&width=400"
                  alt="profile picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter md:text-3xl">About Me</h2>
              <p className="text-muted-foreground">
                At MIT, I do research on computer vision, specifically pose estimation algorithms for infant locomotion, 
                at the McGovern Institute for Brain Research. I am the co-founder of the <a href="https://mitappdev.com/" className="underline" target="_blank" rel="noopener noreferrer">app development club at MIT</a>, 
                where we build web and mobile apps. Outside of academics, I love traveling and trying new cuisines 
                from different countries. I also enjoy going to hackathons, teaching, creating visual art, and partaking in thrilling activities.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What I Do</h3>
              <ul className="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                <li className="rounded-lg border p-4">
                  <h4 className="font-medium">Data Analytics</h4>
                  <p className="text-sm text-muted-foreground">Pandas, Matplotlib, NumPy, MATLAB</p>
                </li>
                <li className="rounded-lg border p-4">
                  <h4 className="font-medium">Machine Learning</h4>
                  <p className="text-sm text-muted-foreground">PyTorch, Tensorflow, LangChain</p>
                </li>
                <li className="rounded-lg border p-4">
                  <h4 className="font-medium">UI/UX Design</h4>
                  <p className="text-sm text-muted-foreground">Figma, Adobe Illustrator, Adobe Photoshop</p>
                </li>
                <li className="rounded-lg border p-4">
                  <h4 className="font-medium">Frontend Development</h4>
                  <p className="text-sm text-muted-foreground">React.js, Next.js</p>
                </li>
                <li className="rounded-lg border p-4">
                  <h4 className="font-medium">Backend Development</h4>
                  <p className="text-sm text-muted-foreground">Django, Flask, Express.js, SQL, MongoDB</p>
                </li>
                <li className="rounded-lg border p-4">
                  <h4 className="font-medium">Mobile App Development</h4>
                  <p className="text-sm text-muted-foreground">Swift, Xcode, React Native</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Josephine Wang. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link href="/" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/cv" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              CV
            </Link>
            <Link href="/projects" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Projects
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

