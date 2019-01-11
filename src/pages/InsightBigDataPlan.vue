<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Big Data"
        title="Big Data: Here's how to get Started."
        summary="A game plan for assembling and integrating data is essential."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            class="subsection-padding"
            title="Make a Plan."
            content="What's in a plan? Any successful plan will focus on three core elements:"
          ></InsightSubSection>
          <InsightSubSection
            title="Data"
            content="A game plan for assembling and integrating data is essential. Companies are buried in information that’s frequently siloed horizontally across business units or vertically by function. Critical data may reside in legacy IT systems that have taken hold in areas such as customer service, pricing, and supply chains. Complicating matters is a new twist: critical information often resides outside companies, in unstructured forms such as social-network conversations."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Making this information a useful and long-lived asset will often require a large investment in new data capabilities. Plans may highlight a need for the massive reorganization of data architectures over time: sifting through tangled repositories (separating transactions from analytical reports), creating unambiguous golden-source data, and implementing data-governance standards that systematically maintain accuracy. In the short term, a lighter solution may be possible for some companies: outsourcing the problem to data specialists who use cloud-based software to unify enough data to attack initial analytics opportunities."
          ></InsightSubSection>
          <InsightSubSection
            title="Analytic models"
            class="subsection-padding"
            content="As with fresh data sources, companies eventually will want to link these models together to solve broader optimization problems across functions and business units. Indeed, the plan may require analytics “factories” to assemble a range of models from the growing list of variables and then to implement systems that keep track of both. And even though models can be dazzlingly robust, it’s important to resist the temptation of analytic perfection: too many variables will create complexity while making the models harder to apply and maintain."
          ></InsightSubSection>
          <InsightSubSection
            title="Tools"
            content="The output of modeling may be strikingly rich, but it’s valuable only if managers and, in many cases, frontline employees understand and use it. Output that’s too complex can be overwhelming or even mistrusted. What’s needed are intuitive tools that integrate data into day-to-day processes and translate modeling outputs into tangible business actions: for instance, a clear interface for scheduling employees, fine-grained cross-selling suggestions for call-center agents, or a way for marketing managers to make real-time decisions on discounts. Many companies fail to complete this step in their thinking and planning—only to find that managers and operational employees do not use the new models, whose effectiveness predictably falls."
          ></InsightSubSection>
          <InsightSubSection
            content="There’s also a critical enabler needed to animate the push toward data, models, and tools: organizational capabilities. Much as some strategic plans fail to deliver because organizations lack the skills to implement them, so too big-data plans can disappoint when organizations lack the right people and capabilities. Companies need a road map for assembling a talent pool of the right size and mix. And the best plans will go further, outlining how the organization can nurture data scientists, analytic modelers, and frontline staff who will thrive (and strive for better business outcomes) in the new data- and tool-rich environment."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="By assembling these building blocks, companies can formulate an integrated big-data plan similar to what’s summarized in the exhibit. Of course, the details of plans—analytic approaches, decision-support tools, and sources of business value—will vary by industry. However, it’s important to note an important structural similarity across industries: most companies will need to plan for major data-integration campaigns. The reason is that many of the highest-value models and tools (such as those shown on the right of the exhibit) increasingly will be built using an extraordinary range of data sources (such as all or most of those shown on the left). Typically, these sources will include internal data from customers (or patients), transactions, and operations, as well as external information from partners along the value chain and Web sites—plus, going forward, from sensors embedded in physical objects."
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
  name: "InsightDataMining",
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
//   filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(290deg) saturate(6)
  background-image: url(../assets/background/insights/lights-7.jpg)
</style>
