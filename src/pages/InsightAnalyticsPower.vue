<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Artificial Intelligence"
        title="Harness the Power of Analytics & AI to Predict"
        summary="Using your data to realize the benefits of artificial intelligence (AI) sounds good, right? Now you just need to work out how to do it."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            class="subsection-padding"
            title="Why artificial intelligence"
            content="88% of global C-level executives and IT decision-makers believe companies incorporate AI because it’s trendy, but most don’t actually know how to use it1. It may not always be obvious that data sets the foundation for AI, but it provides the strength to build tailored customer experiences, targeted communications, increased engagement and more. Clients also tell us they’re overwhelmed by the sheer volume and complexity of their data, with many lacking the tools and skills required to use it to solve their business problems – but it doesn’t have to be like this."
          ></InsightSubSection>
          <InsightSubSection
            title="Our advice before getting started"
            content="- Apply a design-thinking approach – acknowledge there may be multiple possibilities. Use this framework to take a different approach to your data. Uncover the right questions you want to ask and be prepared to experiment with ideas."
          ></InsightSubSection>
          <InsightSubSection
            content="- Identify a data champion; someone who’s passionate about the uses of data and the wider project. They’ll help to convince others to get on board. He or she should be part of the senior level or executive management, which means they’ll have the vision, as well as the budget, to make things happen."
          ></InsightSubSection>
          <InsightSubSection
            content="- Be agile when it comes to scaling your approach. Be ready to adapt to changes along the way."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="- Focus on your business outcomes throughout the process, as opposed to getting caught up in the technology. While technology is critical to achieving your goals, it shouldn’t be your driver."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Step 1: Take Stock"
            content="The first step to understanding your data, or improving your existing data management practices, sounds basic – but it’s arguably the most important step to getting ready for AI: take stock. Ask yourself what kind of data has already been captured. Is it structured data from internal CRM, ERP or customer service channels? Or is it unstructured data that circulates in the public domain via social media, shared documents, and videos? Evaluate how your data is being captured and understand if there’s any governance in place. Identify any processes that help to ensure high data quality. Add tags or metadata to categorize and record key information, like which departments currently use a certain data field. It could be as simple as creating a master spreadsheet inventory to record your findings in one place. It’ll become a valuable asset as you continue this journey."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Step 2: Understand"
            content="You’ve now created an inventory of your data to answer your business problem. You know what information you have to work with. What’s next? Define your hypothesis. Look at your data’s potential value and understand how it relates to your business goals and challenges. Next, think of ways to organize this data into manageable chunks and consider how they’ll begin to support your overarching objectives. Taking this incremental, more agile approach to analysis will help you avoid complexity as your data and business success builds."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Step 3: Focus"
            content="You know your business problem, what data could help you answer it and how you might use that data. Now you need to narrow things down, decide on what data elements matter to you most and focus your attention on them."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Keep your eyes on the prize"
            content="Most organizations attempt to collect every bit of data they can, saving and storing it just in case. There’s nothing wrong with that. It’s a good thing because it can be cataloged for future use. After all, you may have to come back to it again, so any understanding is helpful. But it’s important not to waste time trying to analyze everything all at once. Remember the outcomes you’re looking to achieve. Rationalize your datasets – why are they important? Only concentrate on the data that matters for meeting your immediate objectives. Be single-minded at this stage because if you start analyzing a broad range of varied data types all at once, you’ll only end up with multiple outcomes, and none of them particularly strong. AI relies on a constant flow of robust data. You need 100% accuracy to be successful."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Step 4: Prototype and Prove"
            content="Now that you’ve defined a clear path to follow, it’s time to test your data. Ask questions. Train algorithms to find the answers. And if you haven’t got the in-house capability to do so, find a partner who does."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Test your hypothesis"
            content="Use the relevant data points you’ve identified in the previous steps to start testing your hypothesis. Implement algorithms; run a set of rules and calculations to make predictions about future outcomes. Look for patterns and behaviors. Just be aware that this process is iterative, and may require you to look for other data sources to answer the question you’re asking. Perseverance is key."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Step 5: Organize and Design"
            content="You’ve proved your hypothesis and your prototype is adding value. Next, you need to organize and design how your data insights will be used daily in real-life business scenarios and processes. How do you operationalize and standardize them to share with the rest of your organization?"
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Step 6: Create value over and over again"
            content="This is it. The final step in the journey. Put your data to work for the business, just as you’ve planned. Monitor how your processes progress and then start all over again. Return to Step 1 and take stock of things before going back through the entire cycle. It’s the best way to create value and readiness for AI in the long run."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Go back to the future"
            content="Continually repeat the steps in this guide to sharpen your data. The process will also help you identify further use cases within the business where you can apply data technology and extend your overall capability. When you’re ready to adopt various components of AI, such as bots, intelligent automation, and predictive analytics, you’ll know exactly where to point your algorithms for the right outcomes, because your data is organized. But remember that as AI continues to advance, the number of things within your business which depend on data will increase. If you have high- quality data, the business value of the AI application will be equally high."
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
  name: "InsightAnalyticsPower",
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
  filter: brightness(0.75) contrast(1) sepia(100%) hue-rotate(30deg) saturate(6)
  background-image: url(../assets/background/insights/dance.jpg)
</style>
