<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Data Security"
        title="Data Security in the BI & IoT World"
        summary="Facebook… user data harvested by Cambridge Analytica Equifax… customer data lost to hackers IoT data breach … hackers gained access to a casino’s data through an internet-connected aquarium thermometer."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            class="subsection-padding"
            title="The danger of unsecure data"
            content="Facebook… user data harvested by Cambridge Analytica Equifax… customer data lost to hackers IoT data breach … hackers gained access to a casino’s data through an internet-connected aquarium thermometer. These examples are just some of the most recent and noteworthy data breaches in the news. But data security issues can occur on a far smaller scale and these security issues can ultimately lead to big data losses for organizations if not properly addressed."
          ></InsightSubSection>
          <InsightSubSection
            title="At Data Concepts we partner with organizations to develop data security solutions for both BI and IoT needs by designing, developing and implementing:"
            content="- Robust data management and governance practices."
          ></InsightSubSection>
          <InsightSubSection
            content="- BI and IoT architecture solutions that meet the specific needs of your organization."
          ></InsightSubSection>
          <InsightSubSection
            content="- Solutions to address accessibility, usability, storage and data in motion needs."
          ></InsightSubSection>
          <InsightSubSection content="- Robust and secure IoT API solutions."></InsightSubSection>
          <InsightSubSection
            content="- BI and data analytical solutions with your data security needs in mind."
          ></InsightSubSection>
          <InsightSubSection content="- IoT data analytical strategies for securing data."></InsightSubSection>s
          <InsightSubSection
            content="Today organizations are more than ever utilizing the power of Business Intelligence (BI) to meet both internal and customer’s needs. At the same time organizations are rapidly developing and adopting the Internet of Things (IoT) strategies in order to be competitive in the marketplace. Both BI and IoT are seeing tremendous growth in almost every industry. According to Forbes, Cloud BI adoption levels doubled between 2016 and 2018. Forbes also estimates that global IoT market growth will go from $157B in 2016 to an estimated $457B by 2020."
          ></InsightSubSection>
          <InsightSubSection
            content="These BI and IoT solutions present data security challenges for any organization. Going above and beyond the cloud providers solutions for network, database, and firewall security; which are of critical importance, organizations must also address security concerns around accessibility, usability, storage and movement of data. Those data security concerns must be a top priority."
          ></InsightSubSection>
          <InsightSubSection
            content="Furthermore, IoT solutions offer new sources of data which organizations must contend with. While the uses of this data can be invaluable, organizations must also address issues around security, privacy and accessibility of the data collected. Organizations must demonstrate that they can operate responsibly when using customer, employee, and company IoT-sourced data."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Come talk to us about data security solutions for your BI and IoT needs."
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
  name: "InsightDataSecurityBI",
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
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(340deg) saturate(6)
  background-image: url(../assets/background/insights/dance-2.jpg)
</style>
