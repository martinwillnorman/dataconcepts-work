<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero title="DevOps Transformation" kicker="Strategy & Roadmap.">
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <Summary
        content="Data Concepts’ client was mired in organizational change and needed help improving their processes due to a failed Agile approach and a lack of communication across the twelve teams in their eCommerce division."
      >
        <Role>
          <li>Agile Reengineering</li>
          <li>DevOps</li>
          <li>CI/CD</li>
          <li>Automation</li>
          <li>Organizational Transformation</li>
        </Role>
      </Summary>

      <Challenge>
        <h1 class="challenge-header">CHALLENGE</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          class="text-white"
        >The workforce used Agile methodologies, however, automation was limited and organizational redundancies resulted in duplicate effort and waste. A culture centered on delivery deadlines had tattered morale and communication while simultaneously ignoring individual and team growth. A new corporate vice president mandated the group transition to a DevOps model, a significant transformation melding development, operations, and support by extending Agile principles and test automation through the deployment process to increase software quality and reliability while reducing waste. DevOps would also empower the teams by promoting a culture of cooperation, accountability, continuous improvement, and growth.</p>
      </Challenge>

      <SolutionHeader>
        <h1 class="section-header solution-header">SOLUTION</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >A TAILORED DEVOPS SOLUTION DESIGNED FOR COLLABORATION</p>
      </SolutionHeader>

      <Solution>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >Data Concepts crafted and implemented a detailed roadmap for the eCommerce division to reach full DevOps maturity with predictable stability in all environments. The project entailed several steps:</p>
        <ul data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
          <li>- Establish a new Continuous Integration / Continuous Delivery [CI/CD] pipeline.</li>
          <li>- Streamline roles and responsibilities.</li>
          <li>- Make quality the focus throughout the development cycle, starting with improving the format for user stories with rigorous Definitions of Done, as well as employing better automation.</li>
          <li>- Build team morale.</li>
        </ul>
      </Solution>

      <Outcome>
        <h1 class="section-header medium outcome-header">OUTCOME</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="600"
        >Ultimately, Data Concepts delivered tangible, immediate value through a DevOps strategy and roadmap tailored to the exact needs of the eCommerce group, complete with vision, measurable goals and recommendations that were immediately actionable. Successful execution excited leadership, as it meant a transition from DevOps to NoOps, where optimization is built into testing and automation to such an extent that operations is “hands off” in the deployment process. The realized transformation in the software development process and the capacity of each employee resulted in a better product, significant efficiency gains, and a culture of improved teamwork and communication.</p>
      </Outcome>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../../components/NavBarWhite.vue";
import ModalMenu from "../../components/ModalMenu.vue";
import Hero from "../../components/Hero.vue";
import Summary from "../../components/work/Summary.vue";
import Challenge from "../../components/work/Challenge.vue";
import Role from "../../components/work/Role.vue";
import SolutionHeader from "../../components/work/SolutionHeader.vue";
import Solution from "../../components/work/Solution.vue";
import Outcome from "../../components/work/Outcome.vue";

export default {
  name: "DevopsTransformation",
  components: {
    NavBarWhite,
    ModalMenu,
    Hero,
    Summary,
    Challenge,
    Role,
    SolutionHeader,
    Solution,
    Outcome
  }
};
</script>


<style lang="sass" scoped>
@import "../../assets/sass/settings.sass"

.hero-background
  background-image: url(../../assets/background/work-large/devops-transformation.jpg)
  background-position: center

#first
    background-color: #ffc200

.challenge-header
    font:
        size: 1.8rem
    color: #ffc200
    margin-bottom: 30px

.outcome-header
    font:
        size: 2rem
        weight: 600
    letter-spacing: 4px
    color: #ffc200

.solution-header:after
    background-color: #ffc200

</style>