export default {
  global: {
    componenteFormativo: 'Fundamentos del servicio de interpretación',
    descripcionCurso:
      'Fundamentar el servicio de interpretación permite un acercamiento a los protocolos que intervienen en el servicio mismo y la adquisición de habilidades y actitudes para un desempeño acorde con los desafíos del contexto general. Adicionalmente, proporciona elementos importantes sobre el seguimiento del servicio y la administración de los aspectos logísticos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Logística',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición de logística',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Etapas o fases',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Criterios',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Costos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Objetivos',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Atención al usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Relaciones interpersonales',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Trabajo en equipo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Aspectos administrativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Aspectos administrativos',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Contratación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Remuneración',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Perfiles y Funciones',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Perfiles y funciones del intérprete',
            hash: 't_6_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Nombre del material',
      Referencia: '',
      tipo: 'tipo',
      link: 'https://www.google.com/',
    },
  ],
  glosario: [
    {
      termino: '<em>Intérprete para sordos</em>',
      significado:
        'Personas con amplios conocimientos de la Lengua de Señas Colombiana que puede realizar interpretación simultánea del español hablado en la lengua de señas y viceversa.',
    },
    {
      termino: '<em>Lengua de señas</em>',
      significado:
        'Es la lengua natural de una comunidad de sordos, la cual forma parte de su patrimonio cultural y es tan rica y compleja en gramática y vocabulario como cualquier lengua oral. ',
    },
    {
      termino: '<em>Logística</em>',
      significado:
        'Red de medios, métodos e infraestructura que garantiza la conservación y calidad de un producto o servicio.',
    },
    {
      termino: '<em>Planeación</em>',
      significado:
        'Organización de un plan a partir de objetivos en común, junto con acciones requeridas para concluirse exitosamente.',
    },
    {
      termino: '<em>Prestación de servicios</em>',
      significado:
        'Es el servicio ofrecido y el servicio percibido en cuanto a calidad, variedad, costo, tiempo de respuesta, disponibilidad, entre otros.',
    },
    {
      termino: '<em>Relaciones interpersonales</em>',
      significado:
        'Las relaciones interpersonales son asociaciones o interacciones entre dos o más personas que se dan desde el orden de las emociones, sentimientos, intereses, actividades sociales y culturales; además por formas colaborativas que parten de un proceso comunicativo asertivo.',
    },
    {
      termino: '<em>Servicio</em>',
      significado:
        'Conjunto de actividades o acciones para servir a alguien; además se puede considerar como la acción de dar, prestar apoyo o asistencia a alguien, proviene del latín servitĭum.',
    },
    {
      termino: '<em>Servicio de interpretación</em>',
      significado:
        'Servicio que se desarrolla “in situ”, es decir, en el propio lugar. Por ejemplo, un intérprete se desplaza con su cliente a una institución, eventos, reuniones.',
    },
    {
      termino: '<em>Trabajo en equipo</em>',
      significado:
        'Acciones de un grupo de personas que se dan desde un interés común y bajo parámetros claros de compromiso y responsabilidad para conseguir el objetivo.',
    },
    {
      termino: '<em>Traducción</em>',
      significado:
        'Consiste en comprender el significado de un texto en un idioma (origen), para producir un texto equivalente, llamado texto meta.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cowen-Fletcher, J., Melia, J., DeRosa, R., & Blane, S. (1994). It takes a village. [Se necesita todo un pueblo]. New York, NY: Scholastic.',
    },
    {
      referencia:
        'Ley 324 de 1996. Por la cual se crean algunas normas a favor de la población sorda. 11 de octubre de 1996. D.O. 42.899.',
    },
    {
      referencia:
        'Ley 982 de 2005. Por la cual se establecen normas tendientes a la equiparación de oportunidades para las personas sordas y sordociegas y se dictan otras disposiciones. 2 de agosto de 2005. D.O. 45.995',
    },
    {
      referencia:
        'Sentencia C-128-02 2002. Corte Constitucional de la República de Colombia. [MP Eduardo Montealegre Lynett]. En el entendido de que también son intérpretes para sordos aquellas personas que realicen la interpretación simultánea del castellano hablado a otras formas de comunicación de la población sorda, distintas a la Lengua Manual, y viceversa. 26 de febrero de 2002.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Tania Yaneth Ramírez Benítez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios -     Regional Tolima',
      },
      {
        nombre: 'Jhacesiz Mary Hincapié Atehortúa',
        cargo: 'Instructora',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Manuel Alejandro Garzón',
        cargo: 'Instructor',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'German Albeiro Saldarriga',
        cargo: 'Instructor',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Adriana María Bustamante',
        cargo: 'Profesional Diseño Curricular',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Luz Mila Pacheco Fuentes',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sergio Arturo Medina Castillo',
        cargo: 'Evaluador Instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Revisora de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Camilo Andrés Villamizar Lizcano',
        cargo: 'Diseño Web & Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Carolina Acevedo Barón',
        cargo: 'Diseño Web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Juan Daniel Polanco Muñoz',
        cargo: 'Validación de diseño',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Marcia Elizabeth Solano Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Ricardo Alfonso Gonzalez Vargas',
        cargo: 'Validación de recursos',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
