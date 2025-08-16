export type Project = {
  title: string;
  description: string;
  titleEs?: string;
  descriptionEs?: string;
  tags?: string[];
  href?: string; // live/demo URL
  repo?: string; // source code URL
  featured?: boolean;
  date?: string; // optional ISO date for ordering if needed
  private?: boolean; // if true, hide code link and show lock badge
};

export const projects: Project[] = [
  {
    title: "Self-Managed Web3 Community",
    titleEs: "Comunidad Web3 autogestionada",
    description:
      "Discord-based Web3 community with over 2,000 members, featuring integrated smart contract transactions and automated community management.",
    descriptionEs:
      "Comunidad Web3 en Discord con más de 2.000 miembros, con transacciones de smart contracts integradas y gestión automatizada de la comunidad.",
    tags: ["Discord", "Web3", "Automation", "Smart Contracts"],
    href: "https://discord.gg/Vj4DEvvs9c",
    repo: "",
    featured: true
  },
  {
    title: "MEV Execution Bot",
    titleEs: "Bot de ejecución MEV",
    description:
      "Custom-built private MEV automation system that scans the mempool in real time and executes optimized transactions for maximum profitability.",
    descriptionEs:
      "Sistema privado de automatización MEV que escanea el mempool en tiempo real y ejecuta transacciones optimizadas para maximizar la rentabilidad.",
    tags: ["Python", "Web3", "Blockchain", "Automation", "MEV"],
    href: "",
    repo: "",
    featured: true,
    private: true,
  }, 
  {
    title: "AI Hacker - Automated Pentesting System",
    titleEs: "IA Hacker - Sistema de Pentesting Automatizado",
    description:
      "Collaborative AI-powered penetration testing system that analyzes domains, identifies vulnerabilities, and automatically exploits security weaknesses. Performs comprehensive security assessments with automated exploit execution.",
    descriptionEs:
      "Sistema colaborativo de pentesting impulsado por IA que analiza dominios, identifica vulnerabilidades y explota automáticamente debilidades de seguridad. Realiza evaluaciones de seguridad completas con ejecución automatizada de exploits.",
    tags: ["AI", "Pentesting", "Cybersecurity", "Automation", "Python", "Collaboration"],
    href: "",
    repo: "",
    featured: true,
    private: true,
  },
  {
    title: "Automated Marketplace Bots",
    titleEs: "Bots automatizados para marketplaces",
    description:
      "Full-stack automation system for marketplace operations including auto-buy, auto-offer, auto-sell, websocket monitoring and blockchain transactions.",
    descriptionEs:
      "Sistema de automatización full‑stack para marketplaces: auto‑compra, auto‑oferta, auto‑venta, monitorización por websockets y transacciones on‑chain.",
    tags: ["Python", "Web3", "Automation", "Smart Contracts"],
    private: true,
    featured: true,
  },
  {
    title: "Personal Portfolio",
    titleEs: "Portfolio personal",
    description:
      "This website. Astro + Tailwind, content collections for writeups and personal projects",
    descriptionEs:
      "Este sitio web. Astro + Tailwind, colecciones de contenido para artículos y proyectos personales",
    tags: ["Astro", "TailwindCSS", "TypeScript"],
    href: "/",
    repo: "https://github.com/Eri9523",
    featured: true,
  },
 
  {
  title: "Web3 Raffle Platform",
  titleEs: "Plataforma de Sorteos Web3",
  description:
    "Collaborative Web3 raffle platform that connects crypto wallets, automates ticket purchases, selects winners, logs results to Google Drive via API, and distributes prizes. Includes Discord integration to announce winners in real time.",
  descriptionEs:
    "Plataforma colaborativa de rifas Web3 que conecta monederos, automatiza compras de tickets, selecciona ganadores, registra resultados en Google Drive vía API y distribuye premios. Con integración de Discord para anunciar ganadores en tiempo real.",
  tags: ["Web3", "React", "Python", "Google Drive API", "Discord", "Collaboration"],
  href: "https://roninkaeru.com/",
  repo: "",
  featured: true,
  private: true,
},
  {
    title: "Instagram RPC Automation App",
    titleEs: "App de automatización con RPC de Instagram",
    description:
      "Private application that interacts with Instagram via RPC calls to automate account-related tasks and process social network data.",
    descriptionEs:
      "Aplicación privada que interactúa con Instagram mediante llamadas RPC para automatizar tareas de cuentas y procesar datos de la red social.",
    tags: ["Python", "Automation", "Instagram RPC", "Social Media"],
    href: "",
    repo: "",
    featured: true
  },
  {
    title: "Amazon Data Scraper & Dynamic Web Generator",
    titleEs: "Scraper de Amazon y generador web dinámico",
    description:
      "Automation script to extract product data and associated images from Amazon, then dynamically generate web pages based on the retrieved information for affiliate marketing. ",
    descriptionEs:
      "Script de automatización para extraer datos e imágenes de productos de Amazon y generar páginas web dinámicas con esa información para afiliación. ",
    tags: ["Python", "Scraping", "Automation", "BeautifulSoup", "Dynamic Websites"],
    href: "",
    repo: "",
    featured: true
  },
  {
    title: "NFT Smart Contract Repair & Redeployment",
    titleEs: "Reparación y Despliegue de Smart Contract NFT",
    description:
      "Technical consultation and implementation services for fixing critical vulnerabilities in a malfunctioning NFT collection smart contract, followed by secure redeployment to ensure optimal functionality and on-chain security compliance.",
    descriptionEs:
      "Servicios de consultoría técnica e implementación para reparar vulnerabilidades críticas en un smart contract de colección NFT con fallos, seguido de un despliegue seguro para garantizar funcionalidad óptima y cumplimiento de seguridad on-chain.",
    tags: ["Web3", "Smart Contracts", "Solidity", "Ethereum", "Security"],
    href: "",
    repo: "",
    featured: false
  },
  {
    title: "Laser Hair Removal Website",
    titleEs: "Web de depilación láser",
    description:
      "Redesigned and rebuilt a laser hair removal business website using WordPress and Elementor, improving the previous design, structure, and user experience to better showcase services and attract clients.",
    descriptionEs:
      "Rediseño y reconstrucción de una web de depilación láser con WordPress y Elementor, mejorando diseño, estructura y UX para mostrar servicios y captar clientes.",
    tags: ["WordPress", "Elementor", "Web Design", "UI/UX"],
    href: "https://conolorapalomitas.es/",
    repo: "",
    featured: false
  }  
]; 