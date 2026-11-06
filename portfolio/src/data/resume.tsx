import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";

export const DATA = {
  name: "Shubham Tiwary",
  initials: "ST",
  url: "http://localhost:4321",
  location: "Gurgaon, India",
  locationLink: "https://www.google.com/maps/place/Gurugram,+Haryan",
  description:
    "Software Engineer, like ricing my PCs to no end, building random things sometimes & writing",
  summary:
    "software engineer at [Xane](https://xane.ai/), handling ops & search. I like working at lower layers of abstraction, ricing my [neovim](https://github.com/ShubhamTiwary914/yank.nvim) & [homelab](https://github.com/ShubhamTiwary914/home-lab), and building random tools like [htty](https://github.com/ShubhamTiwary914/htty).",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/sardiness.jpg",
  ogImage: "/sardiness.jpg",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    contributions: { order: 2, enabled: true, heading: "Contributions", username: "ShubhamTiwary914" },
    work: { order: 3, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 99, enabled: false, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "random stuff I've built in the past",
    },
    hackathons: {
      order: 6, enabled: true,
      label: "More",
      heading: "more things I've built & hackathons",
    },
    books: { order: 7, enabled: true, heading: "some books I've liked reading in the past" },
    blogs: { order: 8, enabled: true, heading: "I write some blogs from time to time", moreUrl: "https://blog.shubhamtw.xyz" },
    photos: {
      order: 99, enabled: false,
      heading: "My Recent Travels",
    },
    contact: {
      order: 9, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "reach me out at shubhamtiwary914@gmail.com or ping me on linkedin",
    },
  },
  books: [
    { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", image: "/books/ddia.jpg" },
    { title: "Computer Networking: A Top-Down Approach", author: "James Kurose, Keith Ross", image: "/books/networking.jpg" },
    { title: "Operating System Concepts", author: "Abraham Silberschatz", image: "/books/os-concepts.jpg" },
    { title: "High Performance Browser Networking", author: "Ilya Grigorik", image: "/books/hpbn.jpg" },
    { title: "How Linux Works", author: "Brian Ward", image: "/books/how-linux-works.jpg" },
    { title: "Inference Engineering", author: "Philip Kiely", image: "/books/inference-engineering.png" },
  ],
  blogs: [
    {
      title: "Ingesting Millions of log records from AWS S3 to Grafana Loki",
      href: "https://blog.shubhamtw.xyz/networkscloud/Ingesting-Millions-of-log-records-from-AWS-S3-to-Grafana-Loki/",
      date: "June 2026",
      image: "/blogs/loki.png",
    },
    {
      title: "Shrinking Docker Images over 100x",
      href: "https://blog.shubhamtw.xyz/containersVMDBs/Shrinking-Docker-Images-over-100x/",
      date: "April 2026",
      image: "/blogs/docker.png",
    },
    {
      title: "Ricing Neovim into the best code IDE",
      href: "https://blog.shubhamtw.xyz/linuxembedded/Ricing-Neovim-into-the-best-code-IDE/",
      date: "June 2026",
      image: "/blogs/neovim.png",
    },
  ],
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skills: [
    { group: "Languages", items: ["Go", "Python", "TypeScript", "JavaScript", "Bash"] },
    { group: "Backend", items: ["Node.js", "Express.js", "FastAPI", "REST APIs", "gRPC", "MQTT"] },
    { group: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Qdrant", "Bigtable", "Firestore"] },
    { group: "DevOps / Infra", items: ["Docker", "Kubernetes", "Helm", "Terraform", "GitHub Actions", "Nginx", "Cloudflare Tunnel", "Linux"] },
    { group: "Cloud", items: ["AWS", "GCP"] },
    { group: "Observability", items: ["Prometheus", "Grafana", "Loki", "Alloy", "CloudWatch"] },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
    { href: "https://blog.shubhamtw.xyz", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "shubhamtiwary914@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ShubhamTiwary914",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shubham-tiwary-3511751b1/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:shubhamtiwary914@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "XaneAI",
      href: "https://xane.ai/",
      badges: [],
      location: "Gurgaon, India",
      title: "Software Engineer",
      logoUrl: "https://xane.ai/favicon.ico?size=40",
      start: "January 2026",
      end: undefined,
      bullets: [
        "Built a **Terraform environment manager** provisioning client environments (VPC, subnets, EC2, security groups) from a single TOML config, cutting delivery from **weeks to same-day** self-serve.",
        "Built a **Go microservice streaming logs from S3 to Loki** at **3x Logstash throughput** and **1.3 GB less memory**, exposing **10M+ API logs** through Grafana dashboards.",
        "Cut HTTP payloads **~55%** and average response time **~30ms** by enabling gzip in **AWS API Gateway and Nginx** across high-traffic endpoints.",
        "Built a **document OCR pipeline** ingesting **100k+ pages** via MinerU VLM, powering **hybrid RAG over Qdrant** (vector + lexical with RRF) for sub-second retrieval.",
        "Diagnosed recurring **5xx failures** on production API Gateway endpoints using CloudWatch logs, metrics and alarms.",
      ],
    },
    {
      company: "Yardstick",
      href: "https://www.yardstick.live/",
      badges: [],
      location: "Bangalore, India (Remote)",
      title: "Software Engineer Intern",
      logoUrl: "https://www.yardstick.live/favicon.ico?size=40",
      start: "April 2024",
      end: "November 2024",
      bullets: [
        "Designed a **distributed backend on AWS EC2** sustaining **500-1k req/s** at **p90 under 50ms**.",
        "Built **CI/CD pipelines on GitHub Actions** for automated testing and zero-downtime deploys, cutting releases from **30 mins to under 2 mins**.",
        "Engineered a **Redis cache layer** with LRU eviction and TTL, cutting MongoDB query load **60%**, and integrated **BullMQ** async processing for **1k+ messages/min**.",
      ],
    },
  ],
  education: [
    {
      school: "Uttaranchal University",
      href: "https://uttaranchaluniversity.ac.in/",
      degree: "B.Tech, Computer Science and Engineering",
      logoUrl: "",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "LogCore v2",
      href: "https://github.com/ShubhamTiwary914/logcore-v2",
      dates: "August 2025 - October 2025",
      active: true,
      description:
        "IoT streaming platform on GKE handling 10k+ concurrent MQTT device connections. Go workers over a VerneMQ cluster process 10k messages/min, Apache Beam ETL lands data in Bigtable under 5s. 10+ GCP resources via Terraform, VPA and readiness probes cutting pod CPU ~35%, Prometheus Operator with Loki/Alloy alerting on ingestion lag, local dev on K3s with GCP emulators.",
      technologies: ["Go", "Kubernetes", "Terraform", "Helm", "GCP", "Apache Beam", "MQTT", "Prometheus", "Grafana"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShubhamTiwary914/logcore-v2",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/logcore.png",
      video: "",
    },
    {
      title: "Video Transcode GCP",
      href: "https://github.com/ShubhamTiwary914/video-transcode-gcp",
      dates: "May 2025 - September 2025",
      active: true,
      description:
        "Serverless batch transcoding pipeline turning uploads into HLS streams (1080p60, 720p30, 480p30) with FFMPEG on Cloud Run jobs. GCS upload triggers enqueue to Cloud Tasks rate-limited to 100 concurrent jobs, signed URLs keep buckets private, all infra in Terraform.",
      technologies: ["Go", "GCP", "Cloud Run", "Cloud Tasks", "FFMPEG", "Terraform", "Docker"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShubhamTiwary914/video-transcode-gcp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/video-transcode.png",
      video: "",
    },
    {
      title: "findmejob",
      href: "https://www.findmejob.xyz/",
      dates: "", //TODO: dates
      active: true,
      description:
        "Desktop app that pulls listings from Wellfound and Greenhouse, marks each one against your resume, exposes it over MCP and sends daily match reports.",
      technologies: [], //TODO: stack
      links: [
        {
          type: "Website",
          href: "https://www.findmejob.xyz/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/findmejob.png",
      video: "",
    },
    {
      title: "htty",
      href: "https://github.com/ShubhamTiwary914/htty",
      dates: "February 2026 - August 2026",
      active: true,
      description:
        "Keyboard-driven HTTP client that lives in your terminal. Panel-based TUI where you set method, URL, headers and body, hit Enter and get the response inline. One-line curl install, configurable via ~/.config/htty, latest release v0.1.5.",
      technologies: ["Go", "Bubble Tea", "Lipgloss"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShubhamTiwary914/htty",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/htty.png",
      video: "",
    },
    {
      title: "yank.nvim",
      href: "https://github.com/ShubhamTiwary914/yank.nvim",
      dates: "February 2026 - August 2026",
      active: true,
      description:
        "Yet Another Neovim Kustomization: LSP, completions, file tree, buffer tabs, linting and formatting, everything to speedrun a neovim coding env on linux.",
      technologies: ["Lua", "Neovim"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ShubhamTiwary914/yank.nvim",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/yank-nvim.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Homelab",
      dates: "2026 - Present",
      location: "",
      description: "Old PC exposed via Cloudflare Tunnel with wildcard DNS. Nginx with bearer auth over a Go proxy load balancing Ollama instances, Hugo blog, FileBrowser NAS, self-hosted GitHub Actions runner.",
      image: "",
      win: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShubhamTiwary914/home-lab",
        },
      ],
    },
    {
      title: "dotfiles",
      dates: "2025 - 2026",
      location: "",
      description: "Linux dotfiles for distrohopping & ricing: Arch with Hyprland, Quickshell, etc.",
      image: "",
      win: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShubhamTiwary914/dotfiles",
        },
      ],
    },
    {
      title: "chess-engine-gl",
      dates: "2025 - 2026",
      location: "",
      description: "Bitmaps based chess engine rendered with SDL2 in C++.",
      image: "",
      win: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShubhamTiwary914/chess-engine-gl",
        },
      ],
    },
    {
      title: "tcp-http-1.1-server",
      dates: "November 2024",
      location: "",
      description: "HTTP/1.1 server built directly over TCP sockets in Go.",
      image: "",
      win: "",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShubhamTiwary914/tcp-http-1.1-server",
        },
      ],
    },
    {
      title: "Hack Assembler & VM Translator",
      dates: "January 2025",
      location: "",
      description: "nand2tetris toolchain in Go: Hack VM to .asm translator and an assembler from Hack ASM to machine code.",
      image: "",
      win: "",
      links: [
        {
          title: "Assembler",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShubhamTiwary914/hackAssember",
        },
        {
          title: "VM Translator",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShubhamTiwary914/hack-vmTranslator",
        },
      ],
    },
    {
      title: "Site-Sentry, Cognizance 2025 IIT Roorkee",
      dates: "2025",
      location: "",
      description: "Autonomous website maintenance agent: runs Lighthouse audits, plans fixes with LangGraph agents and opens a GitHub PR with the changes.",
      image: "",
      win: "1st Prize",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/rajatbalyan/agentx-2025",
        },
      ],
    },
  ],
} as const;
