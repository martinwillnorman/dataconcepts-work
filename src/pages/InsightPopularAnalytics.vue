<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Data & Analytics"
        title="The Popularity of Analytics"
        summary="Ten imperatives for successfully developing an analytics capability."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            title="Why Big Data & Analytics"
            content="Big Data and Advanced Analytics have been ’hot’ topics for some time now. It has become clear that the most successful companies spend more on advanced analytics and, as a result, outperform their peers. Furthermore, this spending is expected to accelerate in the years ahead, because of greater proliferation of data, greater computing power, and the need to find ever more competitive advantages – all driven by analytics."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="We find ten clear determinants of success in building successful analytics capabilities that should be part of every CEO’s analytics blueprint:"
          ></InsightSubSection>
          <InsightSubSection title="1. Senior Sponsorship"></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="2. Commitment"
            content="Success requires patience and ongoing engagement rather than only a one off investment for setting up a team. At the start, there may not be much visible progress, so it’s important to stick with it. For CEOs embarking on this journey, the key issue is commitment."
          ></InsightSubSection>
          <InsightSubSection
            title="3. Relentless focus on business goals"
            content="The success of analytics is driven by focusing on where you can deliver transformational value. The CEO should look at the value chain of the business to identify the major decisions that analytics can support."
          ></InsightSubSection>
          <InsightSubSection
            content="Creating a functional map of the business processes of the organization, can, for example, shows where analytics can add the greatest value to a decision, the risk if that decision turns out to be wrong, the burden of proof that decision requires, and if judgment in the past has proven to be the wrong way to make that decision."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Don’t let your analytics capability be a hammer looking for a nail – it’s important to focus on the business problem, not the analytics or tools. We are all very excited about techniques such as Artificial Intelligence and machine learning, but it’s critical to take a step back and ask what the best way to answer the needs of the business actually is."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="4. Technology"
            content="Technology is an important enabler of successful analytics in two different ways:
As a trigger for the analytics journey. The technology was both a trigger (‘we’ve invested in a data warehouse, so now I need to realize the benefits’) and an enabler of analytics. As a way to embed analytics into the organization and make sure it stays there. Technology tools embed analytics into the normal business-as-usual process of the firm. Automate data and analytics processes as much as possible. Automation of individual tasks frees up valuable resources to focus on strategic analytics.Technology makes analytics sticky to the organization. In some ways automated analytics processes represent a sort of actualization for analytics, ensuring that the business is running on the basis of analytics, for example with automated decision making and real-time pricing. Choose your use cases for analytics on the basis of what you can automate with technology and build into everyday business, not chasing the theoretical biggest prize."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="5. Data assurance"
            content="Analytics must be built on a verified foundation of data you can trust. A single version of the truth is an essential building block for analytics capability. Although you might think it would be better to start with use cases in the business that get traction and demonstrate value, what we actually know is that it is vital to build a solid foundation of assured data first, and to collect the right data, not all data – do not boil the ocean! In other words, for best results you should narrow your analytical focus to only the essential data, and then collect that data meticulously and uniformly."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="6. Centralised critical mass"
            content="We believe in the success of a centralised analytics capability. These are important lessons for CEOs when building a successful analytics capability. Critical mass is key to creating impactful analytics capabilities! A centralised hub for analytics makes it possible to achieve critical mass, leads to better resourcing of varying needs, and allows a team to learn and grow from working together."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="7. Process change"
            content="For analytics to be successful, it’s important that the rest of the organization be willing to change their processes to make the most of the analytics input. Investing in analytics without changing the processes at the organization to take advantage of those inputs is a complete waste of money. Embed analytics in a whole ecosystem, e.g. involve ad agency partners. The understanding and mapping of the company’s processes to identify the transformational pivot points where analytics can make a difference enables successful deployment."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="8. Feedback and evolution"
            content="Our interviewees emphasized that a successful analytics capability needs to be agile and flexible, but it must also evolve over time. This evolution needs to happen in a disciplined and formal manner. Design the analytics capability with the formal processes of internal customer needs in mind, since it’s their decisions that you will be supporting. Equally, the capability should respond and evolve according to a formal feedback process from those customers."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="9. Training"
            content="Analytics success happens only by training both the providers and consumers of analytics. Train the analysts about what the business needs, and the business about how to use the analysis. You need to break down any ‘us and them’ culture and create multidisciplinary teams of business executive and analysts working closely together; our training helps make this happen. A successful analytics capability only flourishes when there are a collaborative culture, open communication and mutual respect between the analytics team and the business."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="10. Culture"
            content="For analytics to be successful you have to build the right culture. The question of cultural change is relevant not just for the wider business but for the analytics teams themselves. Ultimately it’s up to senior leaders to set the tone and mold the culture of the business. Create a data-informed culture. Challenge pet theories, myths, and sacred cows; encourage discovery and trust. Culture change is important for the analysts too – they need to be able to cut to the chase of the key insight and the resulting action so that those making decisions for the business have a clear picture of how to move forward and aren’t overwhelmed with complexity."
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
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(310deg) saturate(6)
  background-image: url(../assets/background/insights/model.jpg)
</style>
