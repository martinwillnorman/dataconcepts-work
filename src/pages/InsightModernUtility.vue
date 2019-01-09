<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="IoT"
        title="The Needs of Modern Utility Consumers"
        summary="The digital era has ushered in the trend of information being available at fingertips on-demand."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            title="The reasons for change"
            content="The digital era has ushered in the trend of information being available at fingertips on-demand. For instance, modern utility consumers like to know their consumption levels at every possible interval, such as by year, month, week, day, hour, minute and even second. Yet, the need to maintain consistency in standards to achieve customer delight is imperative through all this hoopla. In the End consumers are more proactive today. The advent of smart technology has brought the world to their palms. There are apps and web services available for almost everything — to access information, pay bills, book tickets, monitor consumption, keep track of tasks and know how you drive, among others. To provide better customer service and retain customers, utility service providers are coming up with innovative ideas. Nothing works better than keeping consumers happy. If you provide live consumption data through mobile apps, then your consumers will be aware of their monthly consumption."
          ></InsightSubSection>
          <InsightSubSection
            content="Also, if they receive tips for efficient usage through various alarms, then you will have a satisfied utility consumer for life. However, the real winners are those who are going the extra mile to provide better customer service."
          ></InsightSubSection>
          <InsightSubSection
            content="This includes providing information around data usage, number of minutes used, current bill and next billing cycle, new plans or services available, and status of requested services. Almost all service providers have web or mobile apps, using which consumers can access the required information and take intelligent actions."
          ></InsightSubSection>
          <InsightSubSection
            content="Similarly, utility consumers look for information, like overall utility consumption history, budget and billing in real time, for a detailed understanding of their usage. With the technological prowess and internet of things, this has been made possible with smart metering systems. The smart meters installed at homes or companies provide meter data in real time, which is used to derive consumption patterns. Consumers can use mobile applications to monitor real-time usage, customize alerts on overconsumption, leakage and meter failure, view consumption details and make payments from anywhere at any time. As an instructive example, check how our team of IoT consultants helped a leading smart manufacturing and water utility service provider develop an Azure-based smart water metering technology. It can handle data from 500,000 smart meters and provides real-time and predictive insights to create customer awareness towards water conservation."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Consumers are definitely the king. And utility providers can go to any extent to make their utility consumers happy. It should be interesting to see that through all these nuances, what are utility providers going to come up with next? All IoT Agenda network contributors are responsible for the content and accuracy of their posts. Opinions are of the writers and do not necessarily convey the thoughts of IoT Agenda."
          ></InsightSubSection>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Spacer from "../components/Spacer.vue";
import InsightHeader from "../components/InsightHeader.vue";
import InsightSubSection from "../components/InsightSubSection.vue";

export default {
  name: "InsightModernUtility",
  components: {
    NavBar,
    ModalMenu,
    Spacer,
    InsightHeader,
    InsightSubSection
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.insight-image
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(85deg) saturate(6)
  background-image: url(../assets/background/insights/camera.jpg)
  background-position: center 40%

</style>
