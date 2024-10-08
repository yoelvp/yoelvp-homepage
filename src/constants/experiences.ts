import type { Experience } from '@/types/Experience'

export const experiences: Experience[] = [
  {
    startDate: 'Ago 2024',
    endDate: 'Actualidad',
    position: 'Desarrollador Frontend',
    companyName: 'NGCRAFTZ',
    companyWebsite: 'https://github.com/ngcraftz',
    description: 'ngcraftz, uno de mis proyectos personales, con mi equipo buscamos optimizar y solucionar problemas a nuestros clientes.',
    details: [
      'Contribuí con el equipo en el desarrollo de módulos para <strong class="white-to-primary">i-manager</strong> tales como: recuperación de contraseña, visitas, equipos, proveedores y estado de cuenta. Desarrollando servicios en backend e implementarlos en frontend usando React, TypeScript y Zustand para manejar los datos que retorna la petición y manejo de estado global.',
      'Solucionar problemas en equipo para poder llegar a la mejor solución y obtener los mejores resultados en el proyecto.'
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
    companyWebsite: 'https://negocios.idbi.pe',
    details: [
      'Contribuí con el equipo en el desarrollo de módulos para <strong class="white-to-primary">i-manager</strong> tales como: recuperación de contraseña, visitas, equipos, proveedores y estado de cuenta. Desarrollando servicios en backend e implementarlos en frontend usando React, TypeScript y Zustand para manejar los datos que retorna la petición y manejo de estado global.',
      'Solucionar problemas en equipo para poder llegar a la mejor solución y obtener los mejores resultados en el proyecto.'
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
