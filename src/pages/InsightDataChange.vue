<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Data & Analytics"
        title="Data & Analytics Governance: Change is Happening, are You Ready?"
        summary="Governance is the ongoing process of creating and managing processes, policies, and information. This includes strategies, processes, activities, skills, organizations, and technologies for the purpose of accelerating business outcomes."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            title="What we do with analytics"
            content="Within the realm of analytics we talk about two types of governance: Data & Analytic. Data and analytics governance is about leveraging data to gain insights. Data governance includes activities such as data definitions, discovery, data quality, and data lineage. Analytic governance involves focusing on both the tools used and how to manage them to unlock the value of data for the organization. Governing these is just as important as governing the data. More and more organizations are starting to see the value of data and analytics governance, and so are starting up related initiatives."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="In our experience, many organizations address governance once and often without completing the necessary tasks. Organizations that excel in data and analytics governance continuously manage the process on an ongoing basis. Often, these initiatives come from IT, who sees issues with how data is being used and may be the front line for handling complaints about data quality. Both need to be involved, and they need to walk through the multiple steps required to create a holistic program."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="At Data Concepts, we see three main subdomains:"
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Organization design"
            content="is defining the structure of the governance groups themselves: who needs to be involved, timing of meetings, their decision making process, etc. There are many organizational models that can work – finding the one which matches an enterprise’s needs requires understanding company culture as well as business drivers behind the governance effort."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Process and change management"
            content="takes the governance initiative to the rest of the enterprise. It includes communication and adoption of process and policy changes. Understanding who to approach with questions is just as important as creating the right policies. As with organization design, knowing company culture is critical to successful adoption."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Data integrity"
            content="involves turning policies into concrete efforts. This can include data quality checks, master data management, data lineage repositories, data dictionaries – any implementation which enacts a governance decision. These efforts can be quick hits or lengthy initiatives. It’s important to understand the business value before embarking on any type of longer project."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Here are the top three challenges we have seen in starting or sustaining governance efforts:"
          ></InsightSubSection>
          <InsightSubSection
            title="1. Remember, Its an on-going Process"
            content="All enterprises change over time as business and analytic needs evolve. Moreover, we are in the middle of a massive trend toward rapid, self-service analytics. Business users and data analysts are looking to combine and explore data on their own in search of new insights. Reducing the time to business value creates a greater need for governance. It’s easy to run afoul of data issues, or to create dependencies on manual processes to sustain initial discoveries. Many organizations create governance documents (such as data dictionaries or data quality rules) once, when a solution is being implemented. But while business processes change, the documentation often does not. As the accuracy of these items decreases, the business value of the documentation and the solution both fade. True governance requires an ongoing process to ensure that changes are understood and adopted."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="This shift from a project-based to a process-based approach can be difficult. One way to make it easier is to focus on ease of maintenance when creating governance-related documents. Since there will be many updates over the lifespan of any documentation, any reduction in time required to make changes will improve the adoption rate as well as the productivity of the team making the updates."
          ></InsightSubSection>
          <InsightSubSection
            title="2. Full Participation is Required"
            content="Creating and nurturing ongoing governance processes can be very challenging. Just bringing together all of the groups involved in creating, managing, and consuming data can be difficult, let alone convincing them of the importance of this type of effort. Without everyone’s perspective and buy-in, governance efforts will not succeed. For example, many data quality issues stem from data entry in transactional systems. Without participation from the data entry team, the likelihood of business process changes to reduce those issues is low."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Governance efforts are often initiated by IT groups who are seeking to improve adoption of analytics solutions. (Sometimes it is the reverse: a business group leads a governance effort in an attempt to improve their data, or their understanding of it.) Imposing governance as a set of rules on other groups is more likely to lead to resentment than successful adoption. An organization that is ready for governance understands the need to work together and the importance of sharing perspectives and priorities."
          ></InsightSubSection>
          <InsightSubSection
            title="3. Clear Understanding of Decision Rights"
            content="Governance is an ongoing, organization-wide effort. To coordinate such an effort requires a clear understanding of decision rights: what decisions are important, and who makes them. Some decisions are strategic and need to be made by a consensus of stakeholders (such as prioritizing domains for master data management). Some are very time-sensitive and should be assigned to individual stewards who have the bandwidth to address them as they arise (such as identifying failed customer matches in a key MDM pipeline)."
          ></InsightSubSection>
          <InsightSubSection
            content="Knowing what questions to ask is just as important as coming up with the right answers. It’s very common to miss the forest for the trees – that is, to focus on a particular aspect of governance without considering how that piece fits into larger priorities. Very often, the deliverable which comes up first ends up being a lower priority than others that are revealed along the way."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Perhaps the most important application of decision rights is focusing on areas which provide business value. Every domain does not need the same level of scrutiny. Many enterprise governance initiatives become bogged down in completing purely theoretical exercises (defining every single term in the company’s data systems, for example). Deciding which areas are of most benefit and therefore the highest priority ensures return on the organization’s investment."
          ></InsightSubSection>
          <InsightSubSection
            title="What Next?"
            content="Succeeding at governance requires understanding its holistic nature. A governance organization involves stakeholders from across the enterprise, with an operating model that empowers the right individuals with the decision rights to sustain the business value of solutions and reduce time to insight. This organization can take many forms based on the nature of the enterprise and its business needs. Awareness of the need to identify, prioritize, and address change is the common factor."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Everything changes over time: data, systems, organizations, processes. Business analytics thrive only when they evolve to meet these changing needs. Governance organizations are the best way to recognize these changes, prioritize them, and make sure that the right part of the enterprise is tasked with addressing them. Without participation from everyone, these goals are unlikely to succeed."
          ></InsightSubSection>
          <InsightSubSection
            title="Agile best practices for embracing agile"
            content="Agile focuses on user experience rather than system experience, and on collaboration and communication at the right levels. It is essential to be transparent with all of your work in progress even as your specifications are being created. THE TRANSITION More and more companies are making the transition from traditional development methods to Agile. Many times, development organizations are not always clear why and how to make this shift. A common “pro” that I hear from stakeholders and project managers new to Agile is, “We need to move to Agile because we are always changing our minds.”"
          ></InsightSubSection>
          <InsightSubSection
            content="However, the Agile Manifesto actually values: “Responding to change over following a plan.” It is common for new organizations to misinterpret this as, “we can change our minds without impact to the plan.” Before jumping into Agile, it is good for organizations to better understand the spirit of Agile and how to make the shift. Agile offers a lightweight and flexible framework that delivers business value more quickly than traditional development methods."
          ></InsightSubSection>
          <InsightSubSection
            content="And, its continual iterative process provides an adaptability that ensures that software remains aligned with business needs, which makes it very appealing. Unlike traditional development methods, Agile is about the conversation of what the business is looking for in a system. It focuses on user experience rather than system experience, and on collaboration and communication at the right levels – not extensive documentation. Having said that, there are some key best practices that can make all the difference in successfully practicing Agile and reaping the many benefits it has to offer."
          ></InsightSubSection>
          <InsightSubSection
            content="Get Everyone Aligned The first order of business is to get everyone on board with what Agile is, what it means, and how it works. Agile is as much a philosophy as a methodology, and the way you make it work for your projects and environment will look different for your company than for someone else’s. Right from the start you should establish your approach and ensure you have buy-in from all participants. I have seen this work from both a top-down and bottom-up approach. The key is to prepare Agile training for all levels of the organization prior to the start of the project."
          ></InsightSubSection>
          <InsightSubSection
            content="Ensure Participation Agile absolutely requires participation. But most people involved in a software project have other priorities and responsibilities, which can diminish the participation that’s needed in an Agile environment. It is essential to create a cadence in your meetings that is predictable, measurable, and actionable to keep your users engaged in the conversation. This will require more face-to-face time because nonverbal communication is key. If your teams are distributed, hold regular video conference for the meetings. Don’t shortcut this − the benefits of seeing someone’s face in a Scrum meeting cannot be overstated. Don’t settle for a conference call if video is a possibility."
          ></InsightSubSection>
          <InsightSubSection
            content="Keep your business owners engaged throughout the process − and make sure it’s valuable for them. Business owners do not have to participate in every meeting. Make sure the meetings they’re in are tailored specifically to their concerns and domain knowledge. Most likely, your business owner would not care about the internal data structure being developed, but they would care what type of reports they could get from the system. The bottom line is, if people − from stakeholders to the development team − aren’t engaged or don’t show up, you can do the mechanics of doing Agile, but you’re really not doing Agile."
          ></InsightSubSection>
          <InsightSubSection
            content="Collaborate Set up a collaboration tool set − a common place for shared docs or wiki page where people can see your work in progress. It is essential to be transparent with all of your work in progress even as your user story and/or specifications are being created. If you don’t have access to an electronic online collaboration tool set, create portable user storyboards out of paper and sticky notes. Always have a place where people can see the work in the progress, and feel comfortable commenting on it. That can be a Wiki or a war room with marker boards and Post-It notes, but there must be a project nexus where all information is available."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Be Transparent Be as transparent as possible. It’s amazing what feedback and ideas you’ll get from people when they see what you’re doing. You’ll discover things you didn’t even know were an issue all because someone else may have a perspective or information that you don’t. This also allows for the team to make small corrections through the process to keep the project on track, as opposed to a major shift after a completed phase typically done in the traditional waterfall approach. Having a nexus, as described above, is one way to force ourselves to be transparent – all the time. Be Disciplined"
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
  name: "InsightDataChange",
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
  filter: brightness(0.65) contrast(1) sepia(100%) hue-rotate(120deg) saturate(6)
  background-image: url(../assets/background/insights/light-bulbs.jpg)
  background-position: center 60%
</style>
