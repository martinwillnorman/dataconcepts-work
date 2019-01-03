<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBarWhite/>
    <div class="sections">
      <Hero
        title="AI"
        kicker="We provide artificial intelligence consulting to help organizations implement this technology today."
      >
        <div v-parallax="0.4" class="cover-image hero-background tinted"></div>
      </Hero>

      <section id="first" class="content-block">
        <div class="container">
          <ServicePromise
            title="Artificial Intellegence"
            content="Our Data Scientists and Machine Learning Engineers can support your AI initiatives from strategy to implementation to optimization. With systems that can improve their own performance by learning and adapting to new data. Software that understands and interprets unstructured text. Automation that gives your staff time for higher levels of interaction with your customers. And chatbots that deliver consistent, personalized customer service."
          />
          <Spacer/>
        </div>
      </section>
      <SubHeader
        title="Natural Language Processing"
        content="Natural Language Processing (NLP) helps a computer program understand how people communicate and then automatically generates text based on this understanding. NLP can read through and extract meaning from millions of lines of unstructured text data (ex: emails, surveys, social media conversations, online reviews, text documents)."
      />
      <section class="content-block">
        <div class="container">
          <div class="row padded-top">
            <div class="column col-12 center-horizontal">
              <h1 data-aos="fade-up" data-aos-duration="600" class="section-header">NLP Services</h1>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Machine Learning"
                  content="Perform NLP tasks like keyword extraction, POS tagging, classification, NER, and topic modeling."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Semantic Search"
                  content="Enable apps to perform deep searches by understanding the searcher’s intent and the context through their search queries using NLP techniques."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Speech Recognition"
                  content="Identify the textual representation of the speech and provide correct results for search and analytics."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Sentiment analysis"
                  content="Also known as opinion mining or emotion AI, sentiment analysis allows you to determine whether content is positive, negative or neutral by extracting particular words or phrases."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Advantages title="Advantages of NLP">
        <ul class="text-white">
          <li>- Increase customer engagement, revenue, and retention</li>
          <li>- Analyze social media comments, online reviews</li>
          <li>- Decipher employee survey results</li>
          <li>- Develop smart product strategies</li>
          <li>- Process, categorize, and index text documents</li>
          <li>- Drive strategic decision-making</li>
        </ul>
      </Advantages>
      <section class="content-block">
        <div class="container">
          <Spacer/>
        </div>
      </section>
      <SubHeader
        title="Machine Learning"
        content="Machine Learning algorithms help your systems learn by detecting patterns in historical data and outcomes, making predictions and prescriptions based on that data, and adapting to new data for continually improved performance over time. The business value can be profound."
      />
      <section class="content-block">
        <div class="container">
          <div class="row padded-top">
            <div class="column col-12 center-horizontal">
              <h1
                data-aos="fade-up"
                data-aos-duration="600"
                class="section-header"
              >Machine Learning Services</h1>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Supervised Learning"
                  content="Perform NLP tasks like keyword extraction, POS tagging, classification, NER, and topic modeling."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Unsupervised Learning"
                  content="Enable apps to perform deep searches by understanding the searcher’s intent and the context through their search queries using NLP techniques."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Reinforced Learning"
                  content="Identify the textual representation of the speech and provide correct results for search and analytics."
                />
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
      <SubHeader
        title="Chatbot"
        content="Chatbots enable businesses to deliver consistent, personalized service using technology to interact with customers through simulated text or verbal communications."
      />
      <section class="content-block">
        <div class="container">
          <div class="row padded-top">
            <div class="column col-12 center-horizontal">
              <h1 data-aos="fade-up" data-aos-duration="600" class="section-header">Chatbot Services</h1>
            </div>
          </div>
          <div class="row padded-bottom">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Assessment & Roadmap"
                  content="We identify repetitive processes that are easy to consume through conversation. We capture and analyze rule complexity, technology compatibility and data availability to develop a roadmap for your chatbots."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Design & Development"
                  content="We capture required features and functionality, develop conversational scripting, and build the engineering components. Chatbot intent and entities are created and tested throughout the process."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Deployment & Monitoring"
                  content="We deploy your Chatbots in the selected hosting environment and publish them to your platform. We also offer performance monitoring, wherein we monitor actual chatbot conversations and analyze performance."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ServiceApproach title="AI Approach">
        <div id="approach" v-parallax="0.2" class="cover-image tinted"></div>
      </ServiceApproach>
      <section class="content-block grey">
        <div class="container">
          <div class="row padded">
            <div class="column col-12 flex">
              <SubApproach
                title="Discovery"
                content="Reviewing your current capabilities and defining future goals to make recommendations for tools, technology, and architecture."
              ></SubApproach>
              <SubApproach
                title="Proof of Concept"
                content="Test a small-scale system, proving the viability of the machine learning models for your problem."
              ></SubApproach>
              <SubApproach
                title="Improvement"
                content="Improvement of previously built models to continuously raise the quality of insights and to keep up with the changing environment."
              ></SubApproach>
              <SubApproach
                title="Production"
                content="Inserting the machine learning system into production while considering costs of implementation and maintenance during deployment."
              ></SubApproach>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <div class="row padded-top">
            <div class="column col-12 center-horizontal">
              <h1 class="section-header">Business Implications of AI</h1>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper services-wrapper">
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Scalability"
                  content="AI enabled solutions are designed to handle big data. There is also no overtime, or hiring challenges when your machine needs to handle more data."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Consistency & Predictability"
                  content="Machines are programmed to perform consistently; they do not bring personal bias into processing. Insights can be traced to the data model design.s"
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="400"
                  title="Quality & Reliability"
                  content="Expect reductions in mistakes, accidents, regulatory violations and fraud. When trained properly, AI enabled processes will reduce risk and improve the quality of results."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  title="Employee Satisfaction"
                  content="Eliminating mundane and repetitive tasks frees up human talent to innovate and create."
                />
                <SubService
                  data-aos="fade-down"
                  data-aos-duration="600"
                  data-aos-delay="200"
                  title="Productivity & Performance"
                  content="AI is “on” 24/7, 365 days a year; does not take vacations; and can perform at digital speeds."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-block">
        <div class="container">
          <div class="row padded-top">
            <div class="column col-12 center-horizontal">
              <h1 data-aos="fade-up" data-aos-duration="600" class="section-header">Related</h1>
            </div>
          </div>
          <div class="row">
            <div class="column col-12">
              <div class="content-wrapper related-wrapper">
                <RelatedBox
                  link="/insights/analytics-power"
                  category="Insight"
                  title="Harness the Power of Analytics & AI to Predict"
                ></RelatedBox>
                <RelatedBox
                  link="/insights/azure-machine-learning"
                  category="Insight"
                  title="5 Reasons We Love Azure ML"
                ></RelatedBox>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WorkTogether/>
    </div>
  </div>
</template>

<script>
import NavBarWhite from "../components/NavBarWhite.vue";
import ModalMenu from "../components/ModalMenu.vue";
import Hero from "../components/Hero.vue";
import ServicePromise from "../components/ServicePromise.vue";
import Spacer from "../components/Spacer.vue";
import SubService from "../components/SubService.vue";
import ServiceAsideRight from "../components/ServiceAsideRight.vue";
import ServiceAsideLeft from "../components/ServiceAsideLeft.vue";
import ServiceLeft from "../components/ServiceLeft.vue";
import ServiceRight from "../components/ServiceRight.vue";
import ServiceApproach from "../components/ServiceApproach.vue";
import SubApproach from "../components/SubApproach.vue";
import WorkTogether from "../components/WorkTogether.vue";
import SubHeader from "../components/SubHeader.vue";
import Advantages from "../components/Advantages.vue";
import RelatedBox from "../components/RelatedBox.vue";

export default {
  name: "ServiceAI",
  components: {
    NavBarWhite,
    ModalMenu,
    Spacer,
    Hero,
    ServicePromise,
    SubService,
    ServiceAsideRight,
    ServiceAsideLeft,
    ServiceLeft,
    ServiceRight,
    ServiceApproach,
    SubApproach,
    WorkTogether,
    SubHeader,
    Advantages,
    RelatedBox
  }
};
</script>


<style lang="sass" scoped>
@import "../assets/sass/settings.sass"

.hero-background
  background-image: url(../assets/background/services-large/ai.jpg)

#approach
  background-image: url(../assets/background/services-large/approach-2.jpg)

</style>
