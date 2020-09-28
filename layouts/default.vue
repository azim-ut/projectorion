<template>
  <div>
    <TopPanel v-if="isShowing" @clicked="onTopPanelClose"></TopPanel>
    <TopHeader v-if="isShowing"></TopHeader>
    <Menubar></Menubar>
    <MobileMenubar style="position: fixed !important; bottom: 10px !important; left: 10px !important; z-index: 1000;"></MobileMenubar>
    <nuxt />
    <hr/>
    <Footer></Footer>
    <SiteLoader  v-if="loading" />
    <BackToTop></BackToTop>
  </div>
</template>

<script>
import TopPanel from './TopPanel';
import TopHeader from './TopHeader';
import Menubar from './Menubar';
import MobileMenubar from './MobileMenubar';
import Footer from './Footer';
import BackToTop from './BackToTop';
import SiteLoader from './SiteLoder';
export default {
  components: {
    TopPanel, TopHeader, Menubar, Footer, BackToTop, SiteLoader, MobileMenubar
  },
  data() {
    return {
      loading: true,
      isShowing: false
    }
  },
  methods: {
    onTopPanelClose (value) {
      this.isShowing = value;
    }
  },
  watch: {
    '$route' (pathUrl){
      this.loading = true;
      setTimeout(() => { this.loading = false; }, 600);
    }
  },
  mounted(){
    setTimeout(() => { this.loading = false; }, 600);
  }
}
</script>
