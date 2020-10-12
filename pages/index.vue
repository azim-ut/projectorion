<template>
  <div>
    <Banner></Banner>
    <br />
    <br />
    <Services></Services>
    <hr />
    <News></News>
    <br />
    <br />
    <div style="background: #373737;">
      <Gallery></Gallery>
    </div>
    <br />
    <hr />
    <Subscribe></Subscribe>
    <br />
    <hr />
    <br />
    <Partners></Partners>
  </div>
</template>

<script>
import Banner from '../components/landing-one/Banner'
import Services from '../components/landing-one/Services'
import Gallery from '../components/landing-one/Gallery'
import News from '../components/landing-one/News'
import Subscribe from '../components/common/Subscribe'
import Partners from '../components/landing-one/Partners'

export default {
  components: {
    Banner, Services, Gallery, News, Subscribe, Partners
  }
}
</script>
