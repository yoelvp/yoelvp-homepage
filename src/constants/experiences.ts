import type { Experience } from '@/types/Experience'

export const experiences: Experience[] = [
  {
    startDate: 'Ago 2024',
    endDate: 'Actualidad',
    position: 'Desarrollador Frontend',
    companyName: 'NGCRAFTZ',
    companyWebsite: 'https://github.com/ngcraftz',
    description: '<strong class="white-to-primary">ngcraftz</strong> es un proyecto personal que fundé junto a dos compañeros con el objetivo de ofrecer soluciones digitales a clientes que desean optimizar su presencia en línea.',
    details: [
      'Implemento interfaces dinámicas y responsivas usando React, TypeScript, y TailwindCSS.',
      'Lidero el desarrollo, coordino el equipo y aseguro que los proyectos se entreguen a tiempo.',
      'Trabajo directamente con los clientes para transformar sus ideas en soluciones digitales que impulsen su negocio.',
      'Utilizo las mejores prácticas y herramientas de desarrollo para garantizar soluciones escalables y mantenibles.',
      'Proporciono soporte post-lanzamiento, mejorando constantemente las funcionalidades y el rendimiento de las aplicaciones.'
    ],
    projects: [
      {
        name: 'Golden',
        link: 'https://golden.pe'
      },
      {
        name: 'ICJ LEX & CARRANZA CONSULTORES',
        link: 'https://icjlex.academy'
      },
      {
        name: 'Valhalla',
        link: 'https://valhalla.barber'
      }
    ],
    stack: [
      'React',
      'TypeScript',
      'Bootstrap',
      'Zustand',
      'NestJS',
      'MySQL',
      'TypeORM'
    ]
  },
  {
    startDate: 'Ene 2024',
    endDate: 'Abr 2024',
    position: 'Desarrollador Fullstack',
    companyName: 'ID Business Intelligence',
    companyWebsite: 'https://idbi.pe',
    details: [
      'Elaboré el diagrama ERD, asegurando escalabilidad y consistencia en la gestión de los datos, en los módulos trabajados.',
      'Implementé la arquitectura del servidor utilizando NestJS, creando APIs y servicios altamente escalables y seguros, alineados con los requerimientos funcionales.',
      'Desarrollé el frontend con precisión, respetando los prototipos y estándares de diseño del equipo de UX/UI, garantizando una experiencia de usuario intuitiva y coherente.',
      'Asumí el desarrollo de módulos como recuperación de contraseñas, gestión de visitas y equipos, agregando valor al sistema con nuevas características en el módulo de proveedores y contribuyendo al módulo estado de cuentas.',
      'Aseguré que cada módulo fuera validado minuciosamente y superara las pruebas de calidad antes de su implementación final, garantizando un sistema funcional y libre de errores.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Bootstrap',
      'Zustand',
      'NestJS',
      'MySQL',
      'TypeORM'
    ]
  },
  {
    startDate: 'Sep 2023',
    endDate: 'Dic 2023',
    position: 'Desarrollador Fullstack',
    companyName: 'Freelance',
    companyWebsite: 'https://github.com/yoelvp',
    details: [
      'Transformo ideas en realidad digital. Desde páginas estáticas hasta plataformas dinámicas, cada proyecto refleja la fusión única de creatividad y funcionalidad. Tu visión, mi pasión.',
      'Como profesional independiente, creo experiencias digitales que van más allá de lo convencional. Con una paleta tecnológica diversa, cada detalle se cuida con precisión, desde la interfaz hasta la optimización SEO. Juntos, elevaremos tu presencia online y desatarás el potencial completo de tu negocio.'
    ],
    projects: [
      {
        name: 'Agromocan SAC',
        link: 'https://agromocansac.com'
      }
    ],
    stack: [
      'React',
      'TypeScript',
      'Tailwindcss',
      'PHP',
      'Laravel',
      'MySQL'
    ]
  },
  {
    startDate: 'Abr 2023',
    endDate: 'Sep 2023',
    position: 'Desarrollador frontend',
    companyName: 'ISOS GROUP',
    companyWebsite: 'https://isosgroup.pe',
    details: [
      'Desarrollé una plataforma web integral de viajes y turismo, gestionando eficientemente departamentos, paquetes turísticos, usuarios y vuelos a través de un panel administrativo personalizado.',
      'Solucioné desafíos técnicos complejos al integrar con éxito una API, permitiendo un intercambio fluido de datos entre el frontend y el backend de la aplicación.'
    ],
    projects: [
      {
        name: 'Agencia Carmen',
        link: 'https://agtcarmen.com'
      }
    ],
    stack: [
      'React',
      'TypeScript',
      'Tailwindcss',
      'Ant Design',
      'Tan Stack'
    ]
  },
  {
    startDate: 'Feb 2022',
    endDate: 'Mar 2023',
    position: 'Desarrollador Fullstack',
    companyName: 'Possible Corporación',
    companyWebsite: 'https://possiblecorporacion.com',
    details: [
      'Diseño y liderazgo en la creación de "ClubMas", una aplicación móvil para gestión financiera.',
      'Implementación de sólido sistema para manejo de dinero y transacciones financieras en la app.',
      'Brindé orientación y apoyo a dos practicantes, contribuyendo en varios sistemas web.',
      'Fomenté un entorno de aprendizaje colaborativo para el equipo de desarrollo.',
      'Experiencia destacada como desarrollador web frontend y backend, así como en el ámbito móvil.',
      'Participación integral en diversas fases del ciclo de desarrollo de software.'
    ],
    projects: [
      {
        name: 'Comunicando Huamachuco',
        link: 'http://comunicando.digital'
      },
      {
        name: 'San Isidro',
        link: 'http://centromedicosanisidro.pe'
      },
      {
        name: 'Hostal Arica',
        link: 'http://hostalarica.com'
      }
    ],
    stack: [
      'JavaScript',
      'React',
      'TypeScript',
      'TailwindCSS',
      'Laravel',
      'MySQL'
    ]
  }
] as const
