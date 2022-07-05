<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Atención al usuario

    .row.mb-4
      .col-12.col-md-12
        figure
          img(src='@/assets/curso/tema2/img01.png' data-aos="zoom-in-down")
    
    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 2.1	Definición

    p.mb-4(data-aos="fade-right") Hablar de atención al usuario no es solo definir los parámetros relacionados con la comunicación interna o externa, y sus correspondientes canales para garantizar una adecuada y oportuna respuesta; es también proporcionar los estándares de comunicación y de la proyección de una imagen personal, segura, eficiente y eficaz, para satisfacer de manera oportuna los requerimientos que solicitan nuestros usuarios.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    .row.justify-content-center
      .col-12.col-md-5
        .cajon.color-secundario.pe-4.ps-3.py-4.mb-2.mb-md-4(data-aos="fade-right")
          p.m-0 “El Estado Colombiano reconoce la Lengua Manual Colombiana, como idioma propio de la Comunidad Sorda del País”. Ley 324 de 1996. 
        .row.justify-content-center
          .col-12.col-md-12
            .bloque-texto-b.color-acento-contenido.px-5(data-aos="fade-right")
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p <b>“Las entidades estatales de cualquier orden, incorporan paulatinamente dentro de los programas de atención al cliente, el servicio de intérprete y guía intérprete para las personas sordas y sordociegas que lo requieran de manera directa o mediante convenios con organismos que ofrezcan tal servicio.”</b> 
                br
                p.margin-texto <b>Ley 982 de 2005.</b>
                i.fas.fa-quote-right
      .col-12.col-md-5
        figure
          img(src='@/assets/curso/tema2/img02.png' data-aos="zoom-in-down")
    
    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 2.2	Relaciones interpersonales

    p.mb-4(data-aos="fade-right") La definición de atención al usuario se da como el conjunto de elementos intangibles, acciones integradas, interacciones personales y actitudes para satisfacer la necesidad de un cliente, lo que requiere, además, de un protocolo y de una política.

    .row.justify-content-center.align-items-center.mb-5.height_bloque_text_1         
      .col-lg-10 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.height_bloque_img_1(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img03.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mt-0.mt-md-4 Las expectativas de los usuarios son diferentes y variadas por lo que es fundamental conocerlas y contar con ellas. El ideal de éxito y calidad del servicio reside en superar esas expectativas. Ello no significa endosar información o instrucciones innecesarias, pero sí dar una respuesta adecuada, completa, rápida y fiable, que aporte valor adicional.
              br
              br
    p.mb-4 Estas expectativas serán mucho más exigentes, cuando se habla de un servicio de interpretación en la que la atención al usuario lleva implícita una actividad que permite que varias partes comprendan un mensaje a través de un sistema de signos, gestos y expresiones y que requiere una comprensión detallada de la cultura sorda y todos sus matices.  

    p.mb-5 Entre las expectativas del usuario actual pueden citarse:

    .row.justify-content-center(data-aos="fade-right")
      .col-12.col-md-12
        .row.mb-4
          .col-sm-6.col-lg-3.mb-4.mb-sm-0
            .tarjeta.color-acento-contenido.p-3.h-100
              .row.justify-content-center.align-items-center
                .col-md-3.padding__cero.width_tarjetas_t2
                  figure
                    img(src='@/assets/curso/tema2/img04.svg')
                .col-md-9
                  p.m-0.text-center <b>Eficacia:</b>
                  p.m-0.text-center obtención real de resultados y respuestas. 

          .col-sm-6.col-lg-3.mb-4.mb-sm-0
            .tarjeta.color-acento-contenido.p-3.h-100
              .row.justify-content-center.align-items-center
                .col-md-3.padding__cero.width_tarjetas_t2
                  figure
                    img(src='@/assets/curso/tema2/img05.svg')
                .col-md-9
                  p.m-0.text-center <b>Rapidez:</b>
                  p.m-0.text-center el tiempo es un factor fundamental, siempre escaso y valioso.

          .col-sm-6.col-lg-3.mb-4.mb-sm-0
            .tarjeta.color-acento-contenido.p-3.h-100
              .row.justify-content-center.align-items-center.mt-2
                .col-md-3.padding__cero.width_tarjetas_t2
                  figure
                    img(src='@/assets/curso/tema2/img06.svg')
                .col-md-9
                  p.m-0.text-center <b>Facilidad:</b> simplicidad, comodidad, ahorro de esfuerzo. 

          .col-sm-6.col-lg-3.mb-4.mb-sm-0
            .tarjeta.color-acento-contenido.p-3.h-100
              .row.justify-content-center.align-items-center.mt-2
                .col-md-3.padding__cero.width_tarjetas_t2
                  figure
                    img(src='@/assets/curso/tema2/img07.svg')
                .col-md-9
                  p.m-0.text-center <b>Autonomía:</b> tendencia a preferir en lo posible sistemas autoservicio. 
          
        .row.mb-4.justify-content-center(data-aos="fade-left")
          .col-sm-6.col-lg-3.mb-4.mb-sm-0
            .tarjeta.color-acento-contenido.p-3.h-100
              .row.justify-content-center.align-items-center
                .col-md-3.padding__cero.width_tarjetas_t2
                  figure
                    img(src='@/assets/curso/tema2/img08.svg')
                .col-md-9
                  p.m-0.text-center <b>Concentración:</b>
                  p.m-0.text-center encontrar la respuesta completa en un sitio, por una sola vía. 
          .col-sm-6.col-lg-3.mb-4.mb-sm-0
            .tarjeta.color-acento-contenido.p-3.h-100
              .row.justify-content-center.align-items-center.mt-2
                .col-md-3.padding__cero.width_tarjetas_t2
                  figure
                    img(src='@/assets/curso/tema2/img09.svg')
                .col-md-9
                  p.m-0.text-center <b>Fiabilidad:</b> garantías sobre el valor y calidad de la información recibida.

          .col-sm-6.col-lg-3.mb-4.mb-sm-0
            .tarjeta.color-acento-contenido.p-3.h-100
              .row.justify-content-center.align-items-center
                .col-md-3.padding__cero.width_tarjetas_t2
                  figure
                    img(src='@/assets/curso/tema2/img10.svg')
                .col-md-9
                  p.m-0.text-center <b>Trato individualizado:</b>
                  p.m-0.text-center atención a las peculiaridades personales.

    .row.justify-content-center.mb-4
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/tema2/img11.png' data-aos="zoom-in-down")
      .col-12.col-md-6
        .cajon.color-acento-contenido.pe-3.ps-5.pt-0.pt.md-5.pb-5.h-100.margin__centercajont2(data-aos="fade-right")
          p.m-0.mb-5.mb-md-4 Hablar entonces de atención al usuario, indica la necesidad de establecer unos parámetros que respondan a un protocolo de servicio, pero en especial a una política de este. 
          p.m-0.mb-0.mb-md-4 La importancia de tener definida una política de servicio al cliente radica en la estandarización de procedimientos que los empleados deben seguir al momento de atender una solicitud, lo que sin duda alguna marca la personalidad de una organización. 
          p.m-0.mb-5.mb-md-4 La política de servicio al cliente son las orientaciones, directrices o procedimientos que rigen la actuación de una persona o entidad frente a sus clientes.
    
    p.mb-4 Los objetivos en la política de servicio al cliente corresponden a los propósitos de la prestación del servicio en relación a la atención al usuario y su necesidad, además, deben estar alineados con los objetivos de su empresa y del servicio a prestar.  

    p.mb-4 Algunos pueden ser:

    .row.justify-content-center(data-aos="fade-right")
      .col-12.col-md-12
        .row.mb-4
          .col-sm-6.col-lg-4.mb-4.mb-sm-0
            .tarjeta.color-secundario.px-4.py-5.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img.mx-auto.d-block.img100(src='@/assets/curso/tema2/img12.svg', alt='Texto que describa la imagen')

              p.m-0.mb-4.ms-1 <b>Cómo comunicarle al cliente</b> la existencia de un nuevo producto o línea de producto.

          .col-sm-6.col-lg-4.mb-4.mb-sm-0
            .tarjeta.color-secundario.px-4.py-5.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img.mx-auto.d-block.img110(src='@/assets/curso/tema2/img13.svg', alt='Texto que describa la imagen')

              p.m-0.ms-2.ms-md-0 <b>Cómo medir la satisfacción del cliente,</b> a través de encuestas aleatorias.

          .col-sm-6.col-lg-4.mb-4.mb-sm-0
            .tarjeta.color-secundario.px-4.py-5.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure
                    img.mx-auto.d-block.img110(src='@/assets/curso/tema2/img14.svg', alt='Texto que describa la imagen')

              p.m-0.ms-2.ms-md-0 <b>Plan de incentivos,</b> de acuerdo al nivel de consumo por parte del cliente.

    p.mb-4 Evaluar las políticas de servicio de su competencia permite definir estándares, perfiles y protocolos de atención, así se puede corresponder de manera eficaz y eficiente a lo que se está ofertando y a lo que se está demandando.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-6.mb-4.mb-md-0
        .cajon.color-acento-contenido.p-4.p-md-5.h-100(data-aos="fade-right")
          p.mb-4 Tener claro las políticas de servicio de su competencia, le indica que los procedimientos e instructivos deben estar documentados y responder al paso a paso de lo que debe hacer cada empleado al momento de contestar una llamada, recibir una queja u orientar un cliente para adquirir un producto o servicio. La documentación de los procedimientos e instructivos consiste en describir paso a paso lo que debe hacer cada empleado al momento de contestar una llamada, recibir una queja u orientar un cliente al momento de adquirir un producto o servicio, etc. 
          p.m-0.mb-1 Es recomendable, realizar procedimientos cortos y prácticos.
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/tema2/img15.png' data-aos="zoom-in-down")

    p.mb-5(data-aos="fade-right") Al tener establecida una política de servicio al cliente, como en todo proceso, es fundamental hacer una evaluación periódica que permita recoger fortalezas de lo que se está haciendo, pero en especial, aspectos que son sujeto de mejora y que daría valor agregado en cuanto se superen.

    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-10 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img16.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-0 Como último paso, la política de servicio al cliente debe ser compartida con los empleados, puede ser a través de una capacitación o charla programada donde todos escuchen el procedimiento que deben seguir al momento de atender la solicitud de un cliente, lo que permitirá un mayor control, seguimiento y posterior evaluación de esta.
              br
              br
    Separador

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
