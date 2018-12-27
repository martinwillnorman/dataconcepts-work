import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home.vue";
import Insights from "@/pages/Insights.vue";
import Services from "@/pages/Services.vue";
import BigData from "@/pages/BigData.vue";
import IoT from "@/pages/IoT.vue";
import Cloud from "@/pages/Cloud.vue";
import BusinessIntelligence from "@/pages/BusinessIntelligence.vue";
import DataAnalytics from "@/pages/DataAnalytics.vue";
import AI from "@/pages/AI.vue";
import Blockchain from "@/pages/Blockchain.vue";
import ApplicationDevelopment from "@/pages/ApplicationDevelopment.vue";
import CyberSecurity from "@/pages/CyberSecurity.vue";
import Mobility from "@/pages/Mobility.vue";
import MachineLearning from "@/pages/MachineLearning.vue";
import Kafka from "@/pages/Kafka.vue";
import ProgramManagement from "@/pages/ProgramManagement.vue";
import DigitalStrategy from "@/pages/DigitalStrategy.vue";
import DataStrategy from "@/pages/DataStrategy.vue";
import DataGovernance from "@/pages/DataGovernance.vue";
import DataWarehouse from "@/pages/DataWarehouse.vue";
import DataIntegration from "@/pages/DataIntegration.vue";
import MasterDataManagement from "@/pages/MasterDataManagement.vue";
import DataVisualization from "@/pages/DataVisualization.vue";
import DataScience from "@/pages/DataScience.vue";
import InsightQuickPeek from "@/pages/InsightQuickPeek.vue";
import InsightWorldBlockchain from "@/pages/InsightWorldBlockchain.vue";
import InsightDataMining from "@/pages/InsightDataMining.vue";
import InsightPopularAnalytics from "@/pages/InsightPopularAnalytics.vue";
import InsightModernUtility from "@/pages/InsightModernUtility.vue";
import InsightAzureML from "@/pages/InsightAzureML.vue";
import InsightAgileTransformation from "@/pages/InsightAgileTransformation.vue";
import InsightDigitalTransformation from "@/pages/InsightDigitalTransformation.vue";
import InsightAgileUnderstanding from "@/pages/InsightAgileUnderstanding.vue";
import InsightITAgility from "@/pages/InsightITAgility.vue";
import InsightDataStrategyRight from "@/pages/InsightDataStrategyRight.vue";
import InsightDigitalCulture from "@/pages/InsightDigitalCulture.vue";
import InsightGovernanceJourney from "@/pages/InsightGovernanceJourney.vue";
import InsightAgileEmbrace from "@/pages/InsightAgileEmbrace.vue";
import InsightLeverageBigData from "@/pages/InsightLeverageBigData.vue";
import InsightGovernancePath from "@/pages/InsightGovernancePath.vue";
import InsightDataChange from "@/pages/InsightDataChange.vue";
import InsightDataSecurityBI from "@/pages/InsightDataSecurityBI.vue";
import InsightBigDataBusiness from "@/pages/InsightBigDataBusiness.vue";
import InsightAnalyticsPower from "@/pages/InsightAnalyticsPower.vue";
import InsightAppDevApproach from "@/pages/InsightAppDevApproach.vue";
import InsightCloudAppDev from "@/pages/InsightCloudAppDev.vue";
import InsightInformationArchitecture from "@/pages/InsightInformationArchitecture.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      beforeEnter: (to, from, next) => {
        const el1 = document.body;
        el1.classList.remove("hide-overflow");
        next();
      }
    },
    {
      path: "/insights",
      name: "Insights",
      component: Insights,
      beforeEnter: (to, from, next) => {
        const el1 = document.body;
        el1.classList.remove("hide-overflow");
        next();
      }
    },
    {
      path: "/services",
      name: "Services",
      component: Services,
      beforeEnter: (to, from, next) => {
        const el1 = document.body;
        el1.classList.remove("hide-overflow");
        next();
      }
    },
    {
      path: "/services/big-data",
      name: "BigData",
      component: BigData
    },
    {
      path: "/services/iot",
      name: "IoT",
      component: IoT
    },
    {
      path: "/services/cloud",
      name: "Cloud",
      component: Cloud
    },
    {
      path: "/services/business-intelligence",
      name: "BusinessIntelligence",
      component: BusinessIntelligence
    },
    {
      path: "/services/data-analytics",
      name: "DataAnalytics",
      component: DataAnalytics
    },
    {
      path: "/services/artificial-intelligence",
      name: "AI",
      component: AI
    },
    {
      path: "/services/blockchain",
      name: "Blockchain",
      component: Blockchain
    },
    {
      path: "/services/application-development",
      name: "ApplicationDevelopment",
      component: ApplicationDevelopment
    },
    {
      path: "/services/cyber-security",
      name: "CyberSecurity",
      component: CyberSecurity
    },
    {
      path: "/services/mobility",
      name: "Mobility",
      component: Mobility
    },
    {
      path: "/services/machine-learning",
      name: "MachineLearning",
      component: MachineLearning
    },
    {
      path: "/services/kafka",
      name: "Kafka",
      component: Kafka
    },
    {
      path: "/services/program-management",
      name: "ProgramManagement",
      component: ProgramManagement
    },
    {
      path: "/services/digital-strategy",
      name: "DigitalStrategy",
      component: DigitalStrategy
    },
    {
      path: "/services/data-strategy",
      name: "DataStrategy",
      component: DataStrategy
    },
    {
      path: "/services/data-governance",
      name: "DataGovernance",
      component: DataGovernance
    },
    {
      path: "/services/data-warehouse",
      name: "DataWarehouse",
      component: DataWarehouse
    },
    {
      path: "/services/data-integration",
      name: "DataIntegration",
      component: DataIntegration
    },
    {
      path: "/services/master-data-management",
      name: "MasterDataManagement",
      component: MasterDataManagement
    },
    {
      path: "/services/data-visualization",
      name: "DataVisualization",
      component: DataVisualization
    },
    {
      path: "/services/data-science",
      name: "DataScience",
      component: DataScience
    },
    {
      path: "/insights/quick-peek",
      name: "InsightQuickPeek",
      component: InsightQuickPeek
    },
    {
      path: "/insights/blockchain-world",
      name: "InsightWorldBlockchain",
      component: InsightWorldBlockchain
    },
    {
      path: "/insights/data-mining",
      name: "InsightDataMining",
      component: InsightDataMining
    },
    {
      path: "/insights/analytics-is-popular",
      name: "InsightPopularAnalytics",
      component: InsightPopularAnalytics
    },
    {
      path: "/insights/modern-utility",
      name: "InsightModernUtility",
      component: InsightModernUtility
    },
    {
      path: "/insights/azure-machine-learning",
      name: "InsightAzureML",
      component: InsightAzureML
    },
    {
      path: "/insights/agile-transformation",
      name: "InsightAgileTransformation",
      component: InsightAgileTransformation
    },
    {
      path: "/insights/digital-transformation",
      name: "InsightDigitalTransformation",
      component: InsightDigitalTransformation
    },
    {
      path: "/insights/agile-understanding",
      name: "InsightAgileUnderstanding",
      component: InsightAgileUnderstanding
    },
    {
      path: "/insights/it-agility",
      name: "InsightITAgility",
      component: InsightITAgility
    },
    {
      path: "/insights/data-strategy-right",
      name: "InsightDataStrategyRight",
      component: InsightDataStrategyRight
    },
    {
      path: "/insights/digital-culture",
      name: "InsightDigitalCulture",
      component: InsightDigitalCulture
    },
    {
      path: "/insights/data-governance-journey",
      name: "InsightGovernanceJourney",
      component: InsightGovernanceJourney
    },
    {
      path: "/insights/agile-embrace",
      name: "InsightAgileEmbrace",
      component: InsightAgileEmbrace
    },
    {
      path: "/insights/big-data-leverage",
      name: "InsightLeverageBigData",
      component: InsightLeverageBigData
    },
    {
      path: "/insights/data-governance-path",
      name: "InsightGovernancePath",
      component: InsightGovernancePath
    },
    {
      path: "/insights/data-analytics-change",
      name: "InsightDataChange",
      component: InsightDataChange
    },
    {
      path: "/insights/data-security-bi",
      name: "InsightDataSecurityBI",
      component: InsightDataSecurityBI
    },
    {
      path: "/insights/big-data-business",
      name: "InsightBigDataBusiness",
      component: InsightBigDataBusiness
    },
    {
      path: "/insights/analytics-power",
      name: "InsightAnalyticsPower",
      component: InsightAnalyticsPower
    },
    {
      path: "/insights/application-development-approach",
      name: "InsightAppDevApproach",
      component: InsightAppDevApproach
    },
    {
      path: "/insights/cloud-application-development",
      name: "InsightCloudAppDev",
      component: InsightCloudAppDev
    },
    {
      path: "/insights/information-architecture",
      name: "InsightInformationArchitecture",
      component: InsightInformationArchitecture
    }
  ]
});

// router.beforeResolve((to, from, next) => {
//   // If this isn't an initial page load.
//   if (to.name) {
//     // Start the route progress bar.
//     NProgress.start();
//   }
//   next();
// });

// router.afterEach((to, from) => {
//   // Complete the animation of the route progress bar.
//   NProgress.done();
// });

export default router;
