<template>
  <div>
    <Banner></Banner>
    <br/>
    <br/>
    <Products></Products>
    <hr/>
    <Features></Features>
    <hr/>
    <News></News>
    <br/>
    <br/>
    <div style="background: #373737;">
      <Gallery></Gallery>
    </div>

    <br/>
    <hr/>
    <Subscribe></Subscribe>
    <br/>
    <hr/>
    <br/>
    <Partners></Partners>
  </div>
</template>

<script>
import Banner from '../components/landing-one/Banner';
import Features from '../components/landing-one/Features';
import Products from '../components/landing-one/Products';
import Gallery from '../components/landing-one/Gallery';
import News from '../components/landing-one/News';
import Subscribe from '../components/common/Subscribe';
import Partners from '../components/landing-one/Partners';

export default {
  components: {
    Banner, Features, Products, Gallery, News, Subscribe, Partners
  }
}
</script>
