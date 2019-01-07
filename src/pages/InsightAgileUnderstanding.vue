<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Agile"
        title="Agile Transformation: Understanding What it Means to be Agile"
        summary="Agile, as it relates to project management for software development, is sometimes used as synonym for Scrum, Kanban or other type of framework."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>

          <InsightSubSection
            class="subsection-padding"
            title="Agile Definition"
            content="Agile, loosely defined, is the “ability to move and think quickly and easily” or “to move in a quick, coordinate fashion. In the world of software development, one of the main goals of adopting and transforming to Agile ? is to produce working, quality software in short, fast increments also known as continuous delivery. This often requires that teams are able to accept and implement fast, changing requirements. This is an incorrect and misleading way to describe what it means to be agile. Agile is a set of principles and values listed formally in the Agile Manifesto, established in 2001."
          ></InsightSubSection>
          <InsightSubSection
            title="The four main values are:"
            content="- Individuals and interactions over processes and tools."
          ></InsightSubSection>
          <InsightSubSection content="- Working software over comprehensive documentation."></InsightSubSection>
          <InsightSubSection content="- Customer collaboration over contract negotiation."></InsightSubSection>
          <InsightSubSection content="- Responding to change over following a plan."></InsightSubSection>
          <InsightSubSection
            content="In order to provide additional guidance, twelve principles were created to support the four main values and are also listed as part of the Agile Manifesto."
          ></InsightSubSection>
          <InsightSubSection
            content="The authors of the Agile Manifesto did not provide a prescription or a formula on how to become agile. The Manifesto does not mention Scrum or any other variety of processes or methodologies. They simply described a small set of values written as simple statements, but are still challenging for most organizations to understand and embrace."
          ></InsightSubSection>
          <InsightSubSection
            content="Many people are surprised to be informed that it is a misperception to believe that an organization can’t be agile if they exercise a waterfall methodology. In fact, only one of the Agile Manifesto value statements mention software and none mention a methodology. It is also incorrectly assumed that Agile is a methodology."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Agile is best described as an umbrella of values and principles and under it are many different sets of frameworks that help an organization achieve agility. Agility is the goal while Scrum, Lean, Kanban or other type of framework is often the “how”. Agile transformation does not mean prescribing to a methodology."
          ></InsightSubSection>
          <InsightSubSection
            title="Agile Transformation Definition"
            content="The agile transformation definition is as an act of transforming an organization’s form or nature gradually to one that is able to embrace and thrive in a flexible, collaborative, self-organizing, fast changing environment. The Agile Manifesto values and principles can be taught and exercised throughout any type of organization as it does not just apply to development teams."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="The entire organization needs to understand the definition of an agile transformation and the value of it in order to benefit from the rewards of achieving true, healthy agility. The complete cultural and organizational mind set must change to one that embraces a culture of self-organization and collaboration."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Agile Adoption vs Agile Transformation"
            content="Agile adoption and agile transformation terms are often incorrectly used interchangeably. However, there are some major differentiation between adoption and transformation."
          ></InsightSubSection>
          <InsightSubSection
            title="Agile Adoption"
            content="Agile adoption is “doing” agile. “Adoption” is the act of taking up or to putting something into effect. A common knee jerk reaction is to adopt Scrum, a popular framework, because it prescribes a specific set of meetings (ceremonies) and example agendas of what is to take places in those ceremonies. It is often easier to implement an organizational change to something that resembles a “process” because “processes” are what feel most comfortable and easiest."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Organizations often fail at agile transformation due to the wrong assumption that because they are “doing” – they have “become”. It could be premature to “adopt” a practice before understanding “why” the practice was created. For example, the first agile value states that “Individuals and interactions are valued more over processes and tools”. The simple act of having a face to face discussion versus using a computer to send an email or using a telephone would be an example of adopting an action or practice that reflects an agile value. This is a very simply policy that can be adhered to, but in order for an organization to continue towards becoming a successful agile organization, they need to understand the “why” in order to help create the “how”."
          ></InsightSubSection>
          <InsightSubSection
            title="Agile Transformation"
            content="Agile transformation is “being, becoming or changing character or condition to one of agility”. This is much more difficult to achieve. It involves a mind-set change in all people in an organization which can be uncomfortable for most."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Most organizations recognize the benefits of agile, but aren’t sure how to create or encourage Agile “behavior” or when to introduce frameworks and practices. Introducing frameworks and practices too early, could be anti-productive."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="What is Agile Lean Transformation?"
            content="Agile Lean transformation is transforming to agility while implementing and recognizing Lean practices and values. Lean, originally intended for manufacturing, was later recognized as applicable and appropriate for software development. The main goal of Lean is to maximize customer value while minimizing waste."
          ></InsightSubSection>
          <InsightSubSection
            title="Lean has 7 key principles (sometimes referred to as “practices”) that apply to software development:"
          ></InsightSubSection>
          <InsightSubSection content="- Waste Elimination."></InsightSubSection>
          <InsightSubSection content="- Amplify Learning."></InsightSubSection>
          <InsightSubSection content="- Late Decision Making."></InsightSubSection>
          <InsightSubSection content="- Fast Delivery."></InsightSubSection>
          <InsightSubSection content="- Team Empowerment."></InsightSubSection>
          <InsightSubSection content="- Built-In Integrity."></InsightSubSection>
          <InsightSubSection content="- View Applications as a Whole."></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Agile values and principles support creating working quality software rapidly. In order to achieve the best benefit, the software should have some value to the end user. Eliminating waste (activities that are not providing value such as defects, non-productive meetings, waiting, inventory, etc.) naturally allows time to be spent on activities to be spent on things of value. The result is the ability to rapidly release working quality software that a customer is going to value. By using a Lean practice, you are achieving a goal of Agile hence, Agile Lean transformation could be considered a healthy marriage of lean and agile principles and values. Combining Lean and Agile helps to guide an organization into agility and Lean thinking faster without prescribing a specific set of actions (or process)."
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
  name: "InsightAgileUnderstanding",
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
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(3500deg) saturate(6)
  background-image: url(../assets/background/insights/dance-2.jpg)

</style>
