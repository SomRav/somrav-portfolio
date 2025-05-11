import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Student Forum Platform",
    description:
      "A secure and responsive MERN stack forum for students with real-time interactions, authentication, and comment management.",
    image: `${import.meta.env.BASE_URL}projects/unisphere_project.png`,
    tags: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    demoUrl: "https://github.com/SomRav",
    githubUrl: "https://github.com/SomRav",
  },
  {
    id: 2,
    title: "Azure Infrastructure Deployment",
    description:
      "Deployed a scalable full-stack app on Azure using VMs, Load Balancer, Auto Scaling, VPN access, and SSL-secured domain.",
    image: `${import.meta.env.BASE_URL}projects/azure_project.jpeg`,
    tags: ["Azure", "Load Balancer", "Auto Scaling", "SSL", "DevOps"],
    demoUrl: "https://github.com/SomRav",
    githubUrl: "https://github.com/SomRav",
  },
  {
    id: 3,
    title: "AWS Infrastructure, Route 53",
    description:
      "Designed and deployed scalable AWS infrastructure using EC2, ALB, Route 53, Auto Scaling, MySQL DB, and monitoring tools.",
    image: `${import.meta.env.BASE_URL}projects/aws_project.jpeg`,
    tags: ["AWS", "EC2", "Route 53", "MySQL", "Auto Scaling"],
    demoUrl: "https://github.com/SomRav",
    githubUrl: "https://github.com/SomRav",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-2xl">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-[1.1rem] mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/SomRav"
          >
            Check My Github <Github size={16} /> <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
