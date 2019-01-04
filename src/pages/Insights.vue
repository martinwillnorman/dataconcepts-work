<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <section class="content-block">
        <div class="content-wrapper">
          <div class="nav-block"></div>
        </div>
      </section>
      <section class="content-block fullpage black">
        <div class="container">
          <div class="row padded">
            <div class="column col-12">
              <div class="content-wrapper text-white">
                <h1 class="insights-header">Our thoughts, your insights.</h1>
                <p
                  class="insights-text"
                >We think it's important to provide our clients with key insights into the solutions that could help your business succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image tinted"></div>
        <div class="container">
          <div class="row">
            <div class="column col-3 no-content"></div>
            <div class="column col-8 responsive-12">
              <div class="content-wrapper header__content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="900"
                >Here's a little insight into what we do</h1>
              </div>
            </div>
            <div @click="scrollDown" class="show-more">
              <svg
                fill="#000"
                version="1.1"
                id="Ebene_2_1_"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="53px"
                height="20px"
                viewBox="0 0 53 20"
                enable-background="new 0 0 53 20"
                xml:space="preserve"
              >
                <g>
                  <polygon
                    points="26.5,17.688 9.114,3.779 10.303,2.312 26.5,15.269 42.697,2.313 43.886,3.779 	"
                  ></polygon>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block intruding">
        <div class="container">
          <div class="row">
            <div class="column col-4 responsive-8 responsive">
              <div
                data-aos="fade-in"
                data-aos-duration="900"
                class="content-wrapper intruding-kicker"
              >
                <h3>Share Knowledge</h3>
                <p>We think it's important to provide you with key insights into the solutions that could help your business succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <Spacer/>
        </div>
      </section>
      <section id="first" class="content-block grey">
        <div class="container">
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper insights-wrapper">
                <Insight
                  link="/insights/quick-peek"
                  category="Data"
                  title="A Quick Peek At Our World Helping Clients with Data Strategy"
                  summary="Every business and organisation has its own unique set of goals, KPIs and targets, and we believe that everything that we do should be devised, planned and executed with these objectives in mind."
                ></Insight>
                <Insight
                  link="/insights/blockchain-world"
                  category="Blockchain"
                  title="Our Insights on the World of Blockchain"
                  summary="Blockchain is one of the most dynamic inventions of this century. Though this revolutionary technology is still in its infancy, it has the potential to disrupt almost every industry and to change how the world works."
                ></Insight>
                <Insight
                  link="/insights/data-mining"
                  category="Big Data"
                  title="Extracting Actionable Insights from Data"
                  summary="Data mining is the extraction of actionable insights from data."
                ></Insight>
                <Insight
                  link="/insights/analytics-is-popular"
                  category="Data & Analytics"
                  title="The Popularity of Analytics"
                  summary="Ten imperatives for successfully developing an analytics capability."
                ></Insight>
                <Insight
                  link="/insights/modern-utility"
                  category="IoT"
                  title="The Needs of Modern Utility Consumers"
                  summary="The digital era has ushered in the trend of information being available at fingertips on-demand."
                ></Insight>
                <Insight
                  link="/insights/azure-machine-learning"
                  category="Machine Learning"
                  title="5 Reasons Why We Love Azure ML for Machine Learning Solutions"
                  summary="From virtual assistants to chatbots and automation to smart homes, Artificial Intelligent (AI) and Machine Learning have become prominent in our daily life."
                ></Insight>
                <Insight
                  link="/insights/agile-transformation"
                  category="Agile"
                  title="Agile Transformation: It's a New Way of Thinking!"
                  summary="Many of the world’s biggest companies struggle to be nimble, efficient, and data-driven, which then makes them less productive than they should be."
                ></Insight>
                <Insight
                  link="/insights/digital-transformation"
                  category="Digital"
                  title="Digital Transformation: Our Thoughts on Getting Started"
                  summary="Our digital strategists and technologists are changing the way our clients think about, assemble, ship, and run digital services."
                ></Insight>
                <Insight
                  link="/insights/agile-understanding"
                  category="Agile"
                  title="Agile Transformation: Understanding What it Means to be Agile"
                  summary="Agile, as it relates to project management for software development, is sometimes used as synonym for Scrum, Kanban or other type of framework."
                ></Insight>
                <Insight
                  link="/insights/it-agility"
                  category="Agile"
                  title="What is IT Agility?"
                  summary="In the ever-evolving world of information technology, being able to effectively respond to market changes is a difficult but critical task."
                ></Insight>
                <Insight
                  link="/insights/data-strategy-right"
                  category="Data Strategy"
                  title="Data Strategy is About Doing the Right Things"
                  summary="Let’s discuss the process to guide your organization to lay out your organization-specific Data Strategy."
                ></Insight>
                <Insight
                  link="/insights/digital-culture"
                  category="Digital"
                  title="The 'Culture Step': for Getting a Digital Transformation on Track"
                  summary="The hardest part of a successful digital transformation is the cultural piece."
                ></Insight>
                <Insight
                  link="/insights/data-governance-journey"
                  category="Data Governance"
                  title="Data Governance is a Journey, not a Destination"
                  summary="Governance is the ongoing process of creating and managing processes, policies, and information. This includes strategies, processes, activities, skills, organizations, and technologies for the purpose of accelerating business outcomes."
                ></Insight>
                <Insight
                  link="/insights/agile-embrace"
                  category="Agile"
                  title="How Business Teams can Embrace Agile"
                  summary="As the agile methodology becomes more and more popular, business teams are adopting certain aspects of the approach in order to benefit from the speed and flexibility provided by agile."
                ></Insight>
                <Insight
                  link="/insights/big-data-leverage"
                  category="Big Data"
                  title="Leveraging Big Data to Enable Digital Transformation and Competitive Advantages"
                  summary="Big Data means different things to different people, but too often the exact definition becomes overcomplicated. At Data Concepts, Big Data is simply the ability to skillfully leverage both internal and external data sources to help in effectively managing resources."
                ></Insight>
                <Insight
                  link="/insights/data-governance-path"
                  category="Data Governance"
                  title="Let's Put You on the Path to Data Governance Excellence"
                  summary="In the rush to get exciting, advanced analytics projects off the ground, don't overlook the importance of data governance. Data governance practices can sink any analytics initiative before it really has a chance to take shape."
                ></Insight>
                <Insight
                  link="/insights/data-analytics-change"
                  category="Data & Analytics"
                  title="Data & Analytics Governance: Change is Happening, are You Ready?"
                  summary="Governance is the ongoing process of creating and managing processes, policies, and information. This includes strategies, processes, activities, skills, organizations, and technologies for the purpose of accelerating business outcomes."
                ></Insight>
                <Insight
                  link="/insights/data-security-bi"
                  category="Data Security"
                  title="Data Security in the BI & IoT World"
                  summary="Facebook… user data harvested by Cambridge Analytica Equifax… customer data lost to hackers IoT data breach … hackers gained access to a casino’s data through an internet-connected aquarium thermometer."
                ></Insight>
                <Insight
                  link="/insights/big-data-business"
                  category="Big Data"
                  title="Developing a Roadmap For Driving Business With Data"
                  summary="Data is an important window into the way that decisions are made and processes are executed in each individual business."
                ></Insight>
                <Insight
                  link="/insights/power-bi"
                  category="Business Intelligence"
                  title="Are You Making the Most of Your Business Data?"
                  summary="Power BI - Business intelligence like never before."
                ></Insight>
                <Insight
                  link="/insights/analytics-power"
                  category="Artificial Intelligence"
                  title="Harness the Power of Analytics & AI to Predict"
                  summary="Using your data to realize the benefits of artificial intelligence (AI) sounds good, right? Now you just need to work out how to do it."
                ></Insight>
                <Insight
                  link="/insights/application-development-approach"
                  category="Application Development"
                  title="Application Development: Our Approach"
                  summary="High performance, outcome-driven systems."
                ></Insight>
                <Insight
                  link="/insights/cloud-application-development"
                  category="Cloud | Application Development"
                  title="Cloud Application Development"
                  summary="Data Concepts’ cloud application development offerings help you take an advantage of everything Microsoft Azure has to offer – from migrating legacy applications to creating custom solutions which exploit the full value of the platform."
                ></Insight>
                <Insight
                  link="/insights/information-architecture"
                  category="Data Strategy"
                  title="Information Architecture Strategy"
                  summary="We identify and analyze our clients’ business requirements, recommend solutions and assist them in implementing these solutions successfully."
                ></Insight>
                <Insight
                  link="/insights/bi-data-warehousing"
                  category="BI | Data Warehouse"
                  title="Business Intelligence & Data Warehousing"
                  summary="We leverage our expertise in architecting large-scale complex BI/DW (Business Intelligence/Data Warehousing) applications and provide EIM (Enterprise Information Management) implementation services."
                ></Insight>
                <Insight
                  link="/insights/azure-migration"
                  category="Microsoft Azure"
                  title="What is Your Azure Migration Strategy?"
                  summary="Most Enterprises are moving to the Cloud as a cost-effective means to develop, deploy and manage their infrastructure."
                ></Insight>
                <Insight
                  link="/insights/sharepoint"
                  category="Business Intelligence"
                  title="What can you do with SharePoint?"
                  summary="Upgrade or Migration is a major challenge for organizations who have invested in SharePoint extensively. Each new edition of SharePoint provides new features which has potential to improve your business case."
                ></Insight>
                <Insight
                  link="/insights/digital-landscape"
                  category="Digital"
                  title="The Modern Digital Landscape"
                  summary="Consumers have become accustomed to smartphones, mobile applications and ubiquitous connectivity, demanding a better user experience in their daily interactions."
                ></Insight>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Spacer from "../components/Spacer.vue";
import Insight from "../components/Insight.vue";

export default {
  name: "Insights",
  components: {
    NavBarWhite,
    ModalMenu,
    Spacer,
    Insight
  },
  methods: {
    scrollDown() {
      document.getElementById("first").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }
};
</script>

<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.cover-image
  filter: brightness(0.7) contrast(1.2) sepia(100%) hue-rotate(160deg) saturate(3.5)
  background-image: url(../assets/background/insights/insights.jpg)

.insights-wrapper
  display: flex
  flex-wrap: wrap
  padding-top: 100px

.insights-header
  font:
    size: 160px
  line-height: 164px
  letter-spacing: -2px
  margin-bottom: 100px

.insights-text
  font: 
    size: 31px
    weight: 400
  line-height: 44px
  max-width: 570px

@media only screen and (max-width: 450px)
  .insights-wrapper
    padding-top: 60px

</style>



