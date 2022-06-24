<template lang="pug">
.banner-principal
  .container.tarjeta.position-relative(
    :style="{'background-image': globalData.fondoBannerPrincipal ? `url(${globalData.fondoBannerPrincipal})` : 'none'}"
  )
    .row.banner-principal__row.position-relative.justify-content-evenly.align-items-center
      .col-lg-6.col-xxl-5.py-sm-5.banner-principal__info.ms-5.ms-lg-2
        .banner-principal__componente
          h1.mb-0(v-html="globalData.componenteFormativo")
        .col-lg-12
          .banner-principal__descripcion
            p.mb-0(v-html="globalData.descripcionCurso")
        .banner-principal__accion
          router-link.boton(:to="{name: iniciarLnk.nombreRuta }")
            span Iniciar
            i.fas.fa-angle-right

      .d-none.d-lg-block.col-lg-5.px-0.banner-principal__img.img-banner
        img(:src="globalData.imagenBannerPrincipal")
    .imagen_flotante_1.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img: img(src="@/assets/curso/portada/Mini_Elipse_white.svg")
    .imagen_flotante_2.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img: img(src="@/assets/curso/portada/Mini_Elipse_white_1.svg")
    .imagen_flotante_3.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img: img(src="@/assets/curso/portada/Mini_Elipse_white_2.svg")
    .imagen_flotante_4.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img: img(src="@/assets/curso/portada/flechas.svg")
    .imagen_flotante_5.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img: img(src="@/assets/curso/portada/Elipse_blue.svg")
    .imagen_flotante_6.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img: img(src="@/assets/curso/portada/ondas.svg")
    .imagen_flotante_7.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img: img(src="@/assets/curso/portada/flechas2.svg")
    .imagen_flotante_9.d-none.d-lg-block.col-lg-5.px-0.banner-principal__img: img(src="@/assets/curso/portada/Mini_Elipse_white_3.svg")
  

</template>

<script>
import mixins from '../components/plantillaMixins'
export default {
  name: 'BannerPrincipal',
  mixins: [mixins],
  computed: {
    globalData() {
      return this.$config.global
    },
  },
}
</script>

<style lang="sass">
.fondo-contenido
  position: absolute
  padding: 0px
  z-index: 2
  height: 100% !important
  width: 10%

.banner-principal
  p, h1, h2, h3, h4, h5, h6
    color: $color-banner-text
    @media (max-width: $bp-max-xs)
      margin-left: 9px
      margin-top: -12px

  .tarjeta
    background-size: cover
    background-position: 50%
    background-repeat: no-repeat
    border-radius: 20px
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
      background-size: contain
      background-position: 50%
      background-repeat: no-repeat


  &__info
    display: flex
    flex-direction: column
    justify-content: center
    margin-left: 17px
    margin-top: 28px
    padding-left: 4rem!important
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
      padding-left: 5rem!important
    @media (max-width: $bp-max-xs)
      padding-left: 30px!important

  &__programa
    display: flex
    align-items: center
    margin-bottom: 20px


  &__componente
    margin-bottom: 20px
    margin-left: -40px
    h1
      line-height: 1.1em

      @media (max-width: $bp-max-xs)
        font-size: 2em
        margin-left: 10px
        margin-top: 7px

  &__descripcion
    margin-bottom: 20px
    margin-left: -40px
    @media (max-width: $bp-max-xs)
      margin-right: 24px

  &__accion
    margin-left: -40px
    margin-top: 35px

  &__row
    @if $banner-principal-img-x == 'derecha'
      justify-content: space-between
    @else
      justify-content: space-around
      .banner-principal__img
        padding-right: 1.5rem!important
      @media (min-width: $bp-min-sm)
        .banner-principal__img
          padding-right: 0rem!important
          margin-right: -15px
          @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
            padding-right: 1rem!important
            margin-right: 19px
  &__img
    animation: scale 5s ease-in-out infinite alternate
    width: 530px
    margin-left: 40px
    margin-top: 47px
    z-index: 9
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
      width: 488px
      margin-top: 50px

.imagen_flotante
  &_1
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 36px
    top: 8rem
    left: -1%
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
      width: 33px
      left: -3%
  &_2
    animation: float1 3.5s ease-in-out infinite alternate
    position: absolute
    width: 512px
    bottom: 8px
    left: 55%
    z-index: 3
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
      width: 472px
      bottom: 3px
      left: 53%
  &_3
    animation: float1 3.8s ease-in-out infinite alternate
    position: absolute
    width: 35px
    top: 22rem
    left: 58%
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
       top: 20rem
  &_4
    animation: float1 4s ease-in-out infinite alternate
    position: absolute
    width: 30px
    top: 5%
    left: 54%
    z-index: 99
  &_5
    animation: giro .9s ease-in-out infinite alternate
    position: absolute
    width: 512px
    top: 1rem
    left: 55%
    z-index: 0
    @keyframes giro
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
      width: 470px
      top: 1rem
      left: 52%
  &_6
    filter: blur(2px)
    animation: float1 2.7s ease-in-out infinite alternate
    position: absolute
    width: 100px
    bottom: 4rem
    left: 410px
    z-index: 1
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
      width: 91px
      left: 345px
      bottom: 5rem
  &_7
    animation: float1 3s ease-in-out infinite alternate
    position: absolute
    width: 36px
    top: 17rem
    left: 1%
    @media (min-width: $bp-min-lg) and (max-width: $bp-max-xl)
      width: 30px
      left: -1%
  &_9
    animation: float1 3.5s ease-in-out infinite alternate
    position: absolute
    width: 69px
    top: 3%
    right: 1%



@keyframes float1
  0%
    transform: translateY(20px)

  100%
    transform: translateY(0px)
@keyframes scale
  0%
    transform: scale(1.01)

  100%
    transform: scale(1)

@keyframes giro
  0%
    transform: rotate(180deg)

  100%
    transform: rotate(360deg)





@media (max-width: $bp-max-md)
  .fondo-contenido
    display: none
  .fondo-contenido2
    background-repeat: no-repeat
    background-size: cover
</style>
