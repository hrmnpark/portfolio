import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Contact from '@/components/Contact';
import { projects } from '@/lib/projects';

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="projects container" id="projects">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
      <Contact />
    </main>
  );
}
