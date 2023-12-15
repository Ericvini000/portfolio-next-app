import Apresentation from "@/components/apresentation";
import Container from "@/components/container";
import Header from "@/components/header";
import Projects from '../components/projects';
import Contact from "@/components/contact";



export default function Home() {
  return (
    <main className="font bg-gray-400 min-h-screen relative">
      <Container>
        <Header />
        <Apresentation />
        <Projects />
        <Contact />
      </Container>
    </main>
  )
}
