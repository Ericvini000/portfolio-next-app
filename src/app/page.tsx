import Apresentation from "@/components/apresentation";
import Container from "@/components/container";
import Header from "@/components/header";
import Projects from '../components/projects';



export default function Home() {
  return (
    <main className="font bg-gray-400 min-h-screen">
      <Container>
        <Header />
        <Apresentation />
        <Projects />
      </Container>
    </main>
  )
}
