import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

export default function CVPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Curriculum Vitae</h1>
            <p className="text-muted-foreground">My professional experience and education</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_250px]">
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Professional Experience</h2>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Researcher</CardTitle>
                      <CardDescription>McGovern Institute for Brain Research</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">February 2024 - Present</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Optimized parameters in an infant locomotion model using gradient descent in PyTorch to investigate 
                      whether infant locomotion is destination-driven or peregration-driven.</li>
                    <li>Analyzed and modeled infant location, velocity, and cumulative area explored using Pandas and 
                      Matplotlib. Fitted data to logarithmic and logistic curves with SciPy to compare infant movement 
                      patterns, providing insights into behavioral responses.</li>
                    <li>Submitted a paper exploring spatial and temporal coordination in task-irrelevant variability 
                      during locomotor development to <a href="https://icdl2025.fel.cvut.cz/" className="underline" target="_blank" rel="noopener noreferrer">IEEE ICDL</a>.</li>
                    <li>Building a computer vision pipeline for extracting infant movement data from 2D videos 
                      using pose estimation algorithms. Validating the pipeline with ground truth infant locomotion parameters.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Computer vision</Badge>
                    <Badge variant="secondary">Data analytics</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Software Engineer</CardTitle>
                      <CardDescription>Princeton Satellite Systems</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">January 2025</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Created <a href="https://psatellite.com/kinetrack-pro/" className="underline" target="_blank" rel="noopener noreferrer">KineTrack</a>, a mobile app for dancers and athletes to track movement 
                      features, via Xcode. Created functionalities that transfer data to a MATLAB 
                      algorithm, trains a machine learning logistic regression model to classify 
                      movement types, and detect discrepancies in the athlete's motion.</li>
                    <li>Updated features in <a href="https://psatellite.com/products/simulation-framework/visualcommander/" className="underline" target="_blank" rel="noopener noreferrer">VisualCommander</a>, a Mac OS X application for data 
                      acquisition, hardware control, simulation and visualization of spacecraft 
                      systems. Created a graphics plugin for simulating spacecrafts on iOS.</li>
                    <li><a href="https://psatellite.com/software-engineer-internship-january-2025/" className="underline" target="_blank" rel="noopener noreferrer">Blog about my internship experience at Princeton Satellite Systems</a></li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">Swift & Xcode</Badge>
                    <Badge variant="secondary">MATLAB</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>AI/ML Engineer</CardTitle>
                      <CardDescription>Acoris</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">June 2024 - August 2024</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Developed the backend for an AI-powered workflow automation tool via Django 
                      and RAG with LangChain, streamlining AI assistant integration across various 
                      platforms. Utilized SQL databases to store chatbot customizations.</li>
                    <li>Built two AI chatbots using React.js and Node.js, boosting customer engagement 
                      and sales efficiency. Integrated the chatbots through an embeddable React widget 
                      with Webpack to simplify deployment.</li>
                    <li>Created a keyword finder and customer segmentation algorithm with spaCy, 
                      multilingual BERT, and PyTorch, enhancing targeted marketing campaigns for 
                      European companies.</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <Badge variant="secondary">React.js</Badge>
                    <Badge variant="secondary">Django</Badge>
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">PyTorch</Badge>
                    <Badge variant="secondary">BERT</Badge>
                  </div>
                </CardContent>
              </Card>
            </section>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Autonomy Programmer</CardTitle>
                    <CardDescription>MIT Autonomous Robotics Team</CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">September 2023 - December 2024</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Trained a YOLOv8 model to detect buoys and simulated LiDAR scanning 
                    via Python in ROS2 Humble to improve navigational accuracy for our 
                    autonomous surface vehicle.</li>
                  <li>Recorded and transferred acoustic tracking data to MOOS-IvP via Linux, 
                    facilitating precise localization of the transmitter with respect to 
                    the global frame.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">ROS2 Humble</Badge>
                  <Badge variant="secondary">Moos-IvP</Badge>
                  <Badge variant="secondary">Linux</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Researcher</CardTitle>
                    <CardDescription>Tenenbaum Computational and Cognitive Science Lab</CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">September 2023 - May 2024</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Developed a Bayesian inference model using <a href="https://www.gen.dev/" className="underline" target="_blank" rel="noopener noreferrer">Gen</a> in Julia to perform hierarchical 
                    logistic regression on primate pattern learning data, inferring parameters via 
                    Metropolis-Hastings sampling that calculate the probability of primates learning 
                    spatial patterns.</li>
                  <li>Analyzed and modeled spatiotemporal pattern recognition in children and primates 
                    with Pandas and Matplotlib to identify indicators of learning</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Bayesian inference</Badge>
                  <Badge variant="secondary">Data analytics</Badge>
                  <Badge variant="secondary">Julia</Badge>
                </div>
              </CardContent>
            </Card>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Education</h2>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>B.S. Computer Science and Engineering</CardTitle>
                      <CardDescription>Massachusetts Institute of Technology</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">September 2023 - May 2027</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>GPA: 5.0/5.0</p>
                  <p>Activities:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Python programming lab assistant: Help students with learning, 
                      debugging, and writing efficient Python code.</li>
                    <li>Computational Motor Control TA: Write code simulating dynamics 
                      of neuromechanical systems for recitations and PSETs.</li>
                    <li>Co-president of <a href="https://mitappdev.com/" className="underline" target="_blank" rel="noopener noreferrer">App Dev @ MIT</a>: Provide mentorship and 
                      funding for students to create software products. Led a team in 
                      developing a website for college students to find and share housing 
                      during the summer or post-graduation.</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* <section className="space-y-4">
              <h2 className="text-2xl font-bold">Archive</h2>
              <p>Miscellaneous projects and activities</p>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Teacher</CardTitle>
                      <CardDescription>Haileybury Almaty</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">January 2024</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Ran a biology course on bacteria and antibiotics for grades 6 - 8 at Haileybury Almaty in Kazakhstan.</li>
                    <li>Led wet labs on staining and observing E. Coli, culturing E. Coli, and testing different 
                      antibiotics (penicillin, ampicillin, streptomycin) on E. Coli.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Co-Founder</CardTitle>
                      <CardDescription>ScioVirtual</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">June 2020 - June 2023</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Co-founded a 501(c)3 organization with 6000+ national/international registrations, 300+ instructors, and 50+ partnered schools. 
                      Raised $65,000+ for COVID-19 and hunger relief. Visit <a href="https://sciovirtual.org/" className="underline" target="_blank" rel="noopener noreferrer">sciovirtual.org</a>.</li>
                    <li>Trained executive team members and instructors, managed registrations and emails, and 
                      organized a STEM summer camp for students grades 4-9.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Medical Receptionist</CardTitle>
                      <CardDescription>Shiwei Tong M.D. Pediatrics</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">May 2021 - June 2023</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Organized files, verified insurance eligibility and benefits, 
                      completed forms, created patient claims/billing, and performed 
                      basic physical examinations.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Teacher</CardTitle>
                      <CardDescription>Princeton Chinese Language School</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">September 2019 - May 2023</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Taught a culture class for children ages 4 - 9.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Researcher</CardTitle>
                      <CardDescription>Summer Science Program</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">June 2022 - July 2022</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Developed inhibitors for Cdc14 in Alternaria alternata, a plant fungus, 
                      to combat agricultural yield losses.</li>
                    <li><a href="https://drive.google.com/file/d/1N0Sqj4z56GHIxM342i1_qFGr6mDkQ-Ww/view" className="underline" target="_blank" rel="noopener noreferrer">Research paper</a></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Author</CardTitle>
                      <CardDescription>Somatosensory Facts, Sehej Bindra and Dr. Charles Pidgeon</CardDescription>
                    </div>
                    <span className="text-sm text-muted-foreground">March 2020 - August 2020</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Author of Somatosensory Facts textbook</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div> */}

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Skills</h2>
              <Card>
                <CardContent className="">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-medium">Programming Languages</h3>
                      <p className="text-sm text-muted-foreground">Python, Java, JavaScript, TypeScript, HTML/CSS, C, Assembly, Swift, Julia</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Frameworks & Libraries</h3>
                      <p className="text-sm text-muted-foreground">React, Next.js, Node.js, Express, TailwindCSS, Django, Flask</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Tools</h3>
                      <p className="text-sm text-muted-foreground">PyTorch, Tensorflow, Linux, Docker, MATLAB, ROS2 Humble, Moos-IvP</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Databases</h3>
                      <p className="text-sm text-muted-foreground">PostgreSQL, MySQL, SQLite, MongoDB</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Languages</h2>
              <Card>
                <CardContent className="">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>English</span>
                      <span className="text-muted-foreground">Native</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Chinese (Mandarin)</span>
                      <span className="text-muted-foreground">Fluent</span>
                    </div>
                    <div className="flex justify-between">
                      <span>French</span>
                      <span className="text-muted-foreground">Intermediate</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold">Honors</h2>
              <Card>
                <CardContent className="">
                  <div className="space-y-2">
                    <div>
                      <h3 className="font-medium">USA Biology Olympiad Top 50</h3>
                      <p className="text-sm text-muted-foreground">2022</p>
                    </div>
                    <div>
                      <h3 className="font-medium">Piano ABRSM 8 Distinction</h3>
                      <p className="text-sm text-muted-foreground">2022</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

