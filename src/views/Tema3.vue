<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Trabajo en equipo

    .row.mb-4
      .col-12.col-md-12
        figure
          img(src='@/assets/curso/tema3/img01.png' data-aos="zoom-in-down")
    
    p.mb-4 El trabajo en equipo como esfuerzo integrado para lograr un propósito, meta u objetivo por parte de un grupo de personas es la representación de un trabajo efectivo que parte de ideas comunes, decisiones consensuadas, fortalecimiento de habilidades y destrezas; además de facilitar la cooperación, autonomía y la motivación.

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-6
        figure
          img(src='@/assets/curso/tema3/img02.png' data-aos="zoom-in-down")
      .col-12.col-md-6.mb-4.mb-md-0
        .cajon.color-acento-contenido.p-4.p-md-5.h-100(data-aos="fade-right")
          p.mb-4 Las relaciones que se establecen con los colegas podrán ser muy diferentes en función de la actividad que se realiza, el lugar de trabajo, la cantidad de empleados con las que se establece relación y coordina acciones, el tiempo de trabajo, la cultura, condiciones, situaciones y ámbitos como el caso de la interpretación y traducción de lengua de señas, que pone de manifiesto el establecimiento de parámetros y ciertos códigos de conducta que permitan interacciones recíprocas y acuerdos para trabajar en equipo. 
          p.m-0.mb-1 El manejo de unas adecuadas relaciones interpersonales con los colegas, optimiza el desempeño de las funciones desde el concepto de equipo, las actitudes, la comunicación, la autoestima y la motivación.

    p Desde el ámbito de la interpretación y traducción de lengua de señas, la confiablidad y validez de las relaciones interpersonales, tiene un impacto significativo y representa un nivel de satisfacción laboral alto, ya que la función y desempeño de esta labor tiene implicaciones sociales y culturales desde la compresión y la convivencia.  




</template>

<script>
export default {
  name: 'Tema3',
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
