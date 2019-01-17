<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Agile"
        title="Agile Transformation: It's a New Way of Thinking"
        summary="Many of the world’s biggest companies struggle to be nimble, efficient, and data-driven, which then makes them less productive than they should be."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>

          <InsightSubSection
            class="subsection-padding"
            title="What it takes to adopt Agile"
            content="Companies can achieve agile transformation at three levels: the project level, which is relatively easy to accomplish; the portfolio level, which is more complex; and the organization level, which requires a complete rethinking of a company’s operating model."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Data Architecture"
            content="Moving effectively from the first level to the last can be difficult for a large organization, but companies that move in progressive steps can succeed. Ultimately, creating a more agile way of working takes about two to three years to complete, but meaningful results can be achieved in as little as six months depending on an organization’s starting point and level of internal support. It’s not just their size that holds them back; much of the problem is created by a traditional business model that’s been created for scale and standardization, rather than for agility and innovation."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Cross-Functional, Dedicated Team"
            content="Agile teams need dedicated employees from every part of the business, including operations, product management, and IT. While larger projects can have more team members, every group should abide by two rules. First, everyone must be fully dedicated to the effort. Second, team members must be doing the actual work—they can’t delegate tasks to others."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Iterative, Empirical Approach"
            content="Work should be completed in fixed-length iterations, and a working prototype should be created after each iteration. Design and prioritization decisions are then informed by the feedback and results from the demonstrations of the product. During the early stages of an agile transformation, allow for longer iteration lengths—four to six weeks instead of the usual two weeks—and limit the depth of testing. Both can help build the case for investing in critical technical enablers."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Continuous Improvement"
            content="Agile is, by definition, not static. Teams are constantly identifying ways to become more productive by tweaking and tuning their environment and the way they work. We often see teams continue to significantly increase their productivity, even four to five years after going through the initial agile transformation."
          ></InsightSubSection>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import ModalMenu from "../../components/ModalMenu.vue";
import Spacer from "../../components/Spacer.vue";
import InsightHeader from "../../components/InsightHeader.vue";
import InsightSubSection from "../../components/InsightSubSection.vue";

export default {
  name: "AgileTransformation",
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
@import "../../assets/sass/settings.sass"

.insight-image
  // filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(3500deg) saturate(6)
  background-image: url(../../assets/background/insights/backpack.jpg)

</style>
