<template>
  <div>
    <TopPanel v-if="isShowing" @clicked="onTopPanelClose"></TopPanel>
    <TopHeader></TopHeader>
    <Menubar></Menubar>
    <MainBanner></MainBanner>
    <AboutBlock></AboutBlock>
    <AboutBlockWeDo></AboutBlockWeDo>
    <ServicesTitleBlock></ServicesTitleBlock>
    <ServicesDescription></ServicesDescription>
    <ServicesFooter></ServicesFooter>
    <ConsultForm></ConsultForm>
    <Objects></Objects>
    <Why></Why>
    <Partners></Partners>
    <Contacts></Contacts>
    <nuxt />
    <Footer></Footer>
    <SiteLoader  v-if="loading" />
    <BackToTop></BackToTop>
  </div>
</template>

<script>
import TopPanel from './TopPanel';
import TopHeader from './TopHeader';
import AboutBlock from './AboutBlock';
import AboutBlockWeDo from './AboutBlockWeDo';
import ServicesTitleBlock from './ServicesTitleBlock';
import ServicesDescription from './ServicesDescription';
import ServicesFooter from './ServicesFooter';
import ConsultForm from './ConsultForm';
import Objects from './Objects';
import Partners from './Partners';
import Why from './Why';
import Contacts from './Contacts';
import Menubar from './Menubar';
import MainBanner from './MainBanner';
import Footer from './Footer';
import BackToTop from './BackToTop';
import SiteLoader from './SiteLoder';
export default {
  components: {
    Partners,
    Contacts,
    TopPanel, TopHeader, Menubar, AboutBlock, AboutBlockWeDo, ServicesTitleBlock, ServicesFooter, ConsultForm, Objects, Why, ServicesDescription, MainBanner, Footer, BackToTop, SiteLoader
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
