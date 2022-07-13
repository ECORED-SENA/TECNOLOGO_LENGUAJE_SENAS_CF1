<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1(data-aos="fade-right") Contratación

    .row.mb-4
      .col-12.col-md-12
        figure
          img(src='@/assets/curso/tema5/img01.png' data-aos="zoom-in-down")
    
    Separador

    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 5.1	Tipos

    figure.mb-5
      .video(data-aos="fade-down")
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    p.mb-4 Una contratación figura la concreción de un contrato, es decir, un documento a través del cual se acuerda entre las partes intervinientes la ejecución de una actividad determinada, a cambio de la cual, la persona contratada recibirá una suma de dinero, la cual será estipulada en documento.
    p.mb-4 Existen diferentes tipos de contratos. A fin de comprender los detalles y características más relevantes junto con los derechos y obligaciones tanto del prestador de servicio como del empleador, a continuación, se nombrarán de manera general estas figuras.
    p.mb-4 Los tipos de contratos a los que puede aspirar un intérprete de lengua de señas pueden ser, entre otros: 
    
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-5
        figure
          img.mb-4.mb-md-0(src='@/assets/curso/tema5/img02.png' data-aos="fade-right")
      .col-12.col-md-5.bg_color-tarjeta_t5
        .tarjeta.color-secundario.p-4(data-aos="fade-left")
          ul.lista-ul.mb-3.ms-4.mt-3
            li 
              i.fas.far.fa-check
              | Contrato civil por prestación de servicios.
            li 
              i.fas.far.fa-check
              | Contrato a término fijo.
            li  
              i.fas.far.fa-check
              | Contrato a término indefinido.
            li 
              i.fas.far.fa-check
              | Contrato de aprendizaje.
            li 
              i.fas.far.fa-check
              | Contrato de obra o labor.
            li  
              i.fas.far.fa-check
              | Contrato temporal.
            

    Separador

    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 5.2	Remuneración
    
    p.m-0.mb-4 Tener conocimiento del tipo de contratación permite entender aspectos legales relacionados con el tipo de remuneración como, por ejemplo, cómo será la periodicidad de pago, qué acciones del servidor no constituyen un referente de remuneración, qué tipos de descuentos le benefician y cuáles son sus derechos y obligaciones.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-5.bg_color-tarjeta_t5(data-aos="fade-right")
        p.mb-4.mb-md-0 En el caso particular de la remuneración de los intérpretes en el entorno educativo, que es el contexto en el que se desenvuelven gran parte de los intérpretes de lengua de señas en Colombia, el Instituto Nacional para Sordos (INSOR) ha venido realizando algunos ejercicios encaminados a la proyección de una base salarial para los intérpretes con el fin de orientar la remuneración por la prestación del servicio, dando respuesta a lo establecido en el parágrafo del artículo 7 de la Ley 982 de 2005. En el caso de los sectores no educativos en los que se presta el servicio, se realiza un acuerdo salarial entre las partes o lo conviene una de ellas.
      .col-12.col-md-5
        figure
          img.mb-4.mb-md-0(src='@/assets/curso/tema5/img03.png' data-aos="fade-left")

    .row.justify-content-center.mb-5
      .col-12.col-md-8.mb-4.mb-md-0.width_franjacajon_t5
        .cajon.color-acento-contenido.p-4.p-md-5.h-100
          .row.justify-content-between
            .col-12.col-md-2
              figure
                img.img68.mx-auto.mb-4.mb-md-0(src='@/assets/curso/tema5/img04.svg' data-aos="fade-right")
            .col-12.col-md-10
              p(data-aos="fade-left") Remuneración en el contexto educativo: “El Instituto Nacional para Sordos, (INSOR), dispondrá de un registro […] con indicación de la remuneración que por su trabajo pueden percibir”. (Ley 982/2005, art. 7).
    


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
