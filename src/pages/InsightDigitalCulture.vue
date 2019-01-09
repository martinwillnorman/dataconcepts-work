<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Digital"
        title="The 'Culture Step': for Getting a Digital Transformation on Track"
        summary="The hardest part of a successful digital transformation is the cultural piece."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            title="Getting on track"
            content="Building a culture of constant change I think you need to be in a state of constant revolution. You don’t make a change and then just sit back and wait for the next five years of business as usual. I think you need to build a new momentum and rhythm in your business that reflects the new reality of the industry in which you are operating. Many companies already have a strategy of continuous improvement in their businesses and in their operations globally. I think you need to instill, even in that kind of organization, a culture of continuous change and evolution in how things work."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Some changes are gradual and evolve toward an end goal, which becomes clear over time, and you need to make a number of small steps to do that. Sometimes you do this through external actions, such as acquisitions, investments, partnerships, or other external activity or statements. Sometimes you do this through internal activity, such as the people you promote or the way you talk about the company and its customers and mission. Some people will be taken a little outside their comfort zone, but that’s OK, so long as you give them the permission to take small risks and fail quickly if they can."
          ></InsightSubSection>
          <InsightSubSection
            title="The board’s role in the digital age"
            content="The role of the board in a digital business is quite different from the role of the board in a legacy business. One of the challenges I think many legacy companies face today is that their boards are not really ready to challenge them and to support and encourage their digital transformation."
          ></InsightSubSection>
          <InsightSubSection
            content="If you think of the average age of most board members around the world—and, frankly, of their backgrounds as well—they are not digitally ready. A recent survey suggested, I think, that only 4 percent of global 500 companies truly have a board that’s digitally ready, even fewer in Asia–Pacific, and under 25 percent in the United States. So there’s still a long, long way to go."
          ></InsightSubSection>
          <InsightSubSection
            content="To make a digital transformation happen, you need complete alignment—from the board through the executive team through the whole organization. Without that “air cover” from the board and from shareholders who understand the change that you’re taking the organization through, it is very, very hard to do it successfully."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="For example, many board meetings are backward looking in their approach. The data they’re looking at is often a little old. They’re not looking at live data. Many board members are often not active customers of the company’s products or services. I think there’s a new generation of board director emerging that is much more hands-on, with a more entrepreneurial background. You mix that with some of the more traditional board profiles and you get greater diversity on the board."
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
  name: "InsightDigitalCulture",
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
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(290deg) saturate(6)
  background-image: url(../assets/background/insights/art.jpg)
  background-position: center 40%
</style>
