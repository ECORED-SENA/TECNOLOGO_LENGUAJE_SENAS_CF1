<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1(data-aos="fade-right") Aspectos administrativos

    .row.mb-4
      .col-12.col-md-12
        figure
          img(src='@/assets/curso/tema4/img01.png' data-aos="zoom-in-down")
    
    Separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 4.1	Aspectos administrativos

    p.mb-4(data-aos="fade-right") La administración junto con la planeación son procesos sensibles y fundamentales en cualquier organización, empresa o proceso, en tanto constituye el momento clave para la definición del marco legal, recursos, contratación y procedimientos indispensables para la ejecución de acciones que determinan el quehacer.

    
    .row.justify-content-center.mb-4
      .col-12.col-md-6.mb-4.mb-md-0.width_franjacajon_t4
        .cajon.color-primario.p-1.p-md-5.mb-2.mb-md-4.h-100(data-aos="fade-right")
          p.m-5 En el contexto de la interpretación y traducción, en el que se genera un alto nivel de informalidad en la prestación del servicio, los aspectos administrativos se convierten en una acción de mejora en la gestión y prioridad fundamental para ofrecer servicios y apoyos inclusivos que permitan el acceso y la participación plena desde el marco legal, recursos, contratación y procedimientos.
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/tema4/img02.png' data-aos="zoom-in-down")
    
    .row.justify-content-center.mb-5
      .col-12.col-md-6.col-lg-6.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/tema4/img03.png' data-aos="zoom-in-down")
      .col-12.col-md-6.col-lg-6.medidas_bloque-textb_t4.medidas_fa-quote-textb_t4  
        .tarjeta-color.bg_color4.pe-4.ps-3.py-4.mb-2.mb-md-4(data-aos="fade-right")
          hr
          .bloque-texto-b.color-acento-botones.px-4(data-aos="fade-right")
            .bloque-texto-b__texto.m-4
              i.fas.fa-quote-left
              p.m-5 “El Estado garantizará y proveerá la ayuda de intérpretes idóneos para que sea éste un medio a través del cual las personas sordas puedan acceder a todos los servicios que como ciudadanos colombianos les confiere la Constitución. Para ello el Estado organizará a través de entes oficiales o por convenios con asociaciones de sordos, la presencia de intérpretes para el acceso a los servicios mencionados.”
              br
              br
              p.margin-texto_2.flex-end <b>Ley 324 (1996).</b>  
              i.fas.fa-quote-right

    .row.mb-5
      .col-12.col-md-3
        .tarjeta.color-primario.p-2
          h3.m-0.text-center <b>Recursos requeridos</b>

    .row.justify-content-center.align-items-center.mb-5.height_bloque_text_1         
      .col-lg-10 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.height_bloque_img_1(data-aos="flip-down")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img04.png')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mt-0.mt-md-4 Identificar los recursos de acuerdo con la necesidad de la actividad, implica hacer un recorrido por el proyecto a emprender, máxime si se considera que estos no solo están en el orden de lo físico, sino y especialmente en el ámbito de la interpretación y la traducción, en el orden de lo humano.
              br
              br
    p.mb-5 Siendo así, el ciclo PHVA (Planificar, Hacer, Verificar y Actuar), desarrollado por Edward Deming, responde a un ciclo dinámico que se puede emplear en procesos y proyectos, es la base para proyección de los recursos requeridos:


    .row.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-10.col-lg-4.col-xl-1.margin_center_tar_t2.mb-4.mb-md-0
        img.img190(src='@/assets/curso/tema4/img05.svg')
        
      .col-10.col-lg-4.col-xl-1.ms-0.ms-md-4.margin_center_tar_t2.mb-4.mb-md-0
        img.img190(src='@/assets/curso/tema4/img06.svg')
        
      .col-10.col-lg-4.col-xl-1.ms-0.ms-md-4.margin_center_tar_t2.mb-4.mb-md-0
        img.img190(src='@/assets/curso/tema4/img07.svg')
        
      .col-10.col-lg-4.col-xl-1.ms-0.ms-md-4.margin_center_tar_t2.mb-4.mb-md-0
        img.img190(src='@/assets/curso/tema4/img08.svg')
            
      .col-10.col-lg-4.col-xl-1.ms-0.ms-md-4.margin_center_tar_t2.mb-4.mb-md-0
        img.img190(src='@/assets/curso/tema4/img09.svg')


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
