<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-4
      .col-12.col-md-12
        figure
          img(src='@/assets/curso/introduccion/img01.png' data-aos="zoom-in-down")
    
    p.mb-4 La gestión del servicio de traducción e interpretación en lengua de señas se realiza en diversos escenarios o contextos que requieren capacidad de personal con habilidades de comunicación oral, administración del trabajo, conocimientos técnicos, profesionales, contextuales y económicos. La logística en el servicio de interpretación requiere de una planeación que considere el evento normal y los riesgos que conlleva el servicio mismo. 
    p.m-0.mb-4 A continuación se abordarán los elementos básicos sobre la logística de un servicio general y posteriormente la logística que atañe al servicio de interpretación.

    Separador



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
