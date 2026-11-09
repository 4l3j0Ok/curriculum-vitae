export const experience = [
  {
    company: "FlexCore",
    position: "Fundador y desarrollador",
    location: "Buenos Aires, Argentina",
    period: "Agosto 2025 – Actualidad",
    responsibilities: [
      "Fundación y operación en solitario de Gestión Digital (gestion-digital.com), un SaaS en producción para comercios que integra punto de venta, caja, stock, compras y cuentas corrientes, con soporte multisucursal y roles por usuario.",
      "Desarrollo full stack del producto con FastAPI, React y PostgreSQL.",
      "Despliegue en Kubernetes con pipelines de CI/CD y operación de la infraestructura de producción.",
      "Trato directo con clientes: relevamiento, implementación, capacitación y soporte.",
    ],
  },
  {
    company: "Leafnoise",
    position: "SRE / DevOps",
    location: "Buenos Aires, Argentina",
    period: "Septiembre 2022 – Actualidad",
    responsibilities: [
      "Responsable de la migración de proyectos de Docker a Kubernetes para lograr alta disponibilidad.",
      "Implementación de aplicaciones basadas en microservicios sobre Kubernetes para múltiples clientes, en infraestructuras y clouds diferentes.",
      "Creación de entornos de desarrollo completos para proyectos nuevos y existentes, aplicando estándares de desarrollo.",
      "Automatización de despliegues con pipelines de CI/CD (Jenkins, GitHub Actions, GitLab CI y ArgoCD) y empaquetado de aplicaciones con Helm.",
      "Administración de infraestructuras en AWS (EC2, S3, EKS, ECS), DigitalOcean, Vultr y Cloudflare, tanto internas como de clientes.",
      "Infraestructura como código con Terraform y Ansible.",
      "Despliegue de servicios Java con JBoss EAP / WildFly y exposición de aplicaciones con Apache y NGINX.",
      "Monitoreo y observabilidad con Grafana, Prometheus y Elastic Kibana; scripting con Bash, PowerShell y Python.",
      "Implementación de RAG, creación de harnesses para proyectos de desarrollo y despliegue de LLMs en cloud y on-premise.",
    ],
  },
  {
    company: "Leafnoise",
    position: "Desarrollador backend",
    location: "Buenos Aires, Argentina",
    period: "Agosto 2020 – Septiembre 2022",
    responsibilities: [
      "Desarrollo de Moorea, plataforma de microservicios para la despapelización y gestión de formularios con flujos de trabajo (alternativa a Camunda), implementada en clientes de Leafnoise.",
      "Creación de APIs y servicios web REST y SOAP conectados a bases de datos MongoDB y SQL.",
      "Diseño y optimización de consultas para bases de datos.",
      "Trabajo en equipo con metodologías ágiles, Git y GitLab.",
    ],
  },
];

export const languages = [
  { name: "Español", level: "nativo" },
  { name: "Inglés", level: "intermedio, lectura de documentación técnica" },
];

export const education = [
  {
    institution:
      "Instituto Superior de Formación Docente y Técnica Nº 93 Arturo Umberto Illia",
    degree:
      "Tecnicatura Superior en Análisis, Desarrollo y Programación de Aplicaciones",
    location: "Buenos Aires, Argentina",
    period: "Marzo 2023 – Abril 2027 (estimado)",
  },
  {
    institution: "Escuela de Educación Secundaria Técnica N° 2 - Manuel Mateo",
    degree:
      "Tecnicatura en informática con orientación en redes y programación",
    location: "Buenos Aires, Argentina",
    period: "Marzo 2012 – Noviembre 2019",
  },
];

export const skills = {
  sections: [
    {
      title: "Tecnologías que utilizo como desarrollador de aplicaciones:",
      categories: [
        {
          name: "Lenguajes de programación",
          items: ["Python", "JavaScript", "TypeScript", "C#", "HTML", "CSS"],
        },
        {
          name: "Backend",
          items: [
            "Flask",
            "FastAPI",
            "SQLModel",
            "SQLAlchemy",
            "pytest",
            "REST y SOAP",
          ],
        },
        {
          name: "Frontend",
          items: ["Astro", "React", "Next.js", "Vite", "Tailwind CSS", "Figma"],
        },
        {
          name: "Base de datos",
          items: [
            "MongoDB",
            "SQL Server",
            "SQLite",
            "MySQL",
            "PostgreSQL",
            "Redis",
          ],
        },
        {
          name: "Versionado",
          items: ["Git"],
        },
      ],
    },
    {
      title: "Tecnologías que utilizo como SRE:",
      categories: [
        {
          name: "Infraestructura",
          items: ["Digital Ocean", "AWS", "Vultr", "Cloudflare"],
        },
        {
          name: "Contenedores",
          items: ["Docker", "Kubernetes", "Helm"],
        },
        {
          name: "CI/CD",
          items: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD"],
        },
        {
          name: "Servidores web",
          items: ["Apache", "Nginx"],
        },
        {
          name: "Monitorización",
          items: ["Grafana", "Prometheus", "Elastic Kibana"],
        },
        {
          name: "Scripting",
          items: ["Bash", "Python"],
        },
        {
          name: "IaC",
          items: ["Terraform", "Ansible"],
        },
      ],
    },
    {
      title: "Tecnologías que utilizo en Inteligencia Artificial:",
      categories: [
        {
          name: "Herramientas y modelos",
          items: [
            "OpenCode",
            "Claude Code",
            "Ollama",
            "LM Studio",
            "LiteLLM",
            "Hugging Face",
          ],
        },
        {
          name: "Técnicas",
          items: [
            "RAG",
            "Harnesses para desarrollo",
            "Despliegue de LLMs (cloud y on-premise)",
          ],
        },
      ],
    },
  ],
};

export const certificationsInProgress = [
  {
    title: "AWS Certified CloudOps Engineer – Associate",
    institution: "Amazon Web Services",
    date: "fecha estimada: enero 2027",
  },
];

export const certifications = [
  {
    title: "Cloud DevOps (Docker, Kubernetes y Jenkins)",
    certificateUrl: "/alejo-sarmiento-certificado-cloud-devops.pdf",
    institution: "Educación IT",
    date: "may. 2022",
    featured: true,
  },
  {
    title: "Ultimate Docker",
    certificateUrl: "/alejo-sarmiento-certificado-ultimate-docker.pdf",
    institution: "Academia Hola Mundo",
    date: "jun. 2024",
    featured: true,
  },
  {
    title: "Qt/PySide: Interfaces Gráficas con Python",
    certificateUrl: "/alejo-sarmiento-certificado-pyside.pdf",
    institution: "Hector Costa Guzmán",
    date: "nov. 2024",
  },
  {
    title: "Ultimate Git + GitHub",
    certificateUrl: "/alejo-sarmiento-certificado-ultimate-git-github.pdf",
    institution: "Academia Hola Mundo",
    date: "ago. 2024",
  },
  {
    title: "Ultimate Python",
    certificateUrl: "/alejo-sarmiento-certificado-ultimate-python.pdf",
    institution: "Academia Hola Mundo",
    date: "abr. 2024",
  },
  {
    title: "Python Sin Fronteras: HTML, CSS, Flask y MySQL",
    certificateUrl: "/alejo-sarmiento-certificado-python-sin-fronteras.pdf",
    institution: "Udemy",
    date: "mar. 2024",
  },
  {
    title: "Bases de datos NoSQL con MongoDB y NodeJS",
    certificateUrl: "/alejo-sarmiento-certificado-mongodb.pdf",
    institution: "Academia Mastermind",
    date: "sept. 2022",
  },
];
