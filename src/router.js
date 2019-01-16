import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home.vue";
import Insights from "@/pages/Insights.vue";
import Services from "@/pages/Services.vue";
import Works from "@/pages/Works.vue";
import ContactUs from "@/pages/ContactUs.vue";

// work pages
import VehicleInspection from "@/pages/Work/VehicleInspection.vue";
import MagellanHealth from "@/pages/Work/MagellanHealth.vue";
import WebPortal from "@/pages/Work/WebPortal.vue";
import Moonlighting from "@/pages/Work/Moonlighting.vue";
import SexRegistry from "@/pages/Work/SexRegistry.vue";
import FirstUnion from "@/pages/Work/FirstUnion.vue";
import FinancePortal from "@/pages/Work/FinancePortal.vue";
import ServerMigration from "@/pages/Work/ServerMigration.vue";
import EstesImprovement from "@/pages/Work/EstesImprovement.vue";
import FreightVolume from "@/pages/Work/FreightVolume.vue";
import FreightMovement from "@/pages/Work/FreightMovement.vue";
import EstesQuote from "@/pages/Work/EstesQuote.vue";
import CapitalOne from "@/pages/Work/CapitalOne.vue";
import PredictiveModeling from "@/pages/Work/PredictiveModeling.vue";
import JudicialEnforcement from "@/pages/Work/JudicialEnforcement.vue";
import JuryManagement from "@/pages/Work/JuryManagement.vue";
import DataLake from "@/pages/Work/DataLake.vue";
import ScalaArchitecture from "@/pages/Work/ScalaArchitecture.vue";
import DevopsTransformation from "@/pages/Work/DevopsTransformation.vue";
import UnifiedData from "@/pages/Work/UnifiedData.vue";
import CircuitCourts from "@/pages/Work/CircuitCourts.vue";

// service pages
import BigData from "@/pages/Service/BigData.vue";
import IoT from "@/pages/Service/IoT.vue";
import Cloud from "@/pages/Service/Cloud.vue";
import BusinessIntelligence from "@/pages/Service/BusinessIntelligence.vue";
import DataAnalytics from "@/pages/Service/DataAnalytics.vue";
import ArtificialIntelligence from "@/pages/Service/ArtificialIntelligence.vue";
import Blockchain from "@/pages/Service/Blockchain.vue";
import ApplicationDevelopment from "@/pages/Service/ApplicationDevelopment.vue";
import Mobility from "@/pages/Service/Mobility.vue";
import MachineLearning from "@/pages/Service/MachineLearning.vue";
import Kafka from "@/pages/Service/Kafka.vue";
import ProgramManagement from "@/pages/Service/ProgramManagement.vue";
import DigitalStrategy from "@/pages/Service/DigitalStrategy.vue";
import CyberSecurity from "@/pages/Service/CyberSecurity.vue";
import MicrosoftAzure from "@/pages/Service/MicrosoftAzure.vue";
import DataStrategy from "@/pages/Service/DataStrategy.vue";
import DataGovernance from "@/pages/Service/DataGovernance.vue";
import DataWarehouse from "@/pages/Service/DataWarehouse.vue";
import DataIntegration from "@/pages/Service/DataIntegration.vue";
import MasterDataManagement from "@/pages/Service/MasterDataManagement.vue";
import DataVisualization from "@/pages/Service/DataVisualization.vue";
import DataScience from "@/pages/Service/DataScience.vue";

// insight pages
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
import InsightBIDataWarehouse from "@/pages/InsightBIDataWarehouse.vue";
import InsightAzureMigration from "@/pages/InsightAzureMigration.vue";
import InsightSharePoint from "@/pages/InsightSharePoint.vue";
import InsightPowerBI from "@/pages/InsightPowerBI.vue";
import InsightDigitalLandscape from "@/pages/InsightDigitalLandscape.vue";
import InsightBigDataPlan from "@/pages/InsightBigDataPlan.vue";

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
      path: "/contact",
      name: "ContactUs",
      component: ContactUs,
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
      name: "ArtificialIntelligence",
      component: ArtificialIntelligence
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
      path: "/services/microsoft-azure",
      name: "MicrosoftAzure",
      component: MicrosoftAzure
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
    },
    {
      path: "/insights/bi-data-warehousing",
      name: "InsightBIDataWarehouse",
      component: InsightBIDataWarehouse
    },
    {
      path: "/insights/azure-migration",
      name: "InsightAzureMigration",
      component: InsightAzureMigration
    },
    {
      path: "/insights/sharepoint",
      name: "InsightSharePoint",
      component: InsightSharePoint
    },
    {
      path: "/insights/power-bi",
      name: "InsightPowerBI",
      component: InsightPowerBI
    },
    {
      path: "/insights/digital-landscape",
      name: "InsightDigitalLandscape",
      component: InsightDigitalLandscape
    },
    {
      path: "/insights/big-data-plan",
      name: "InsightBigDataPlan",
      component: InsightBigDataPlan
    },
    {
      path: "/work",
      name: "Works",
      component: Works
    },
    {
      path: "/work/circuit-courts",
      name: "CircuitCourts",
      component: CircuitCourts
    },
    {
      path: "/work/vehicle-inspection",
      name: "VehicleInspection",
      component: VehicleInspection
    },
    {
      path: "/work/magellan-health",
      name: "MagellanHealth",
      component: MagellanHealth
    },
    {
      path: "/work/web-portal",
      name: "WebPortal",
      component: WebPortal
    },
    {
      path: "/work/moonlighting",
      name: "Moonlighting",
      component: Moonlighting
    },
    {
      path: "/work/sex-registry",
      name: "SexRegistry",
      component: SexRegistry
    },
    {
      path: "/work/first-union",
      name: "FirstUnion",
      component: FirstUnion
    },
    {
      path: "/work/finance-portal",
      name: "FinancePortal",
      component: FinancePortal
    },
    {
      path: "/work/server-migration",
      name: "ServerMigration",
      component: ServerMigration
    },
    {
      path: "/work/estes-improvement",
      name: "EstesImprovement",
      component: EstesImprovement
    },
    {
      path: "/work/freight-volume",
      name: "FreightVolume",
      component: FreightVolume
    },
    {
      path: "/work/freight-movement",
      name: "FreightMovement",
      component: FreightMovement
    },
    {
      path: "/work/estes-quote",
      name: "EstesQuote",
      component: EstesQuote
    },
    {
      path: "/work/capital-one",
      name: "CapitalOne",
      component: CapitalOne
    },
    {
      path: "/work/predictive-modeling",
      name: "PredictiveModeling",
      component: PredictiveModeling
    },
    {
      path: "/work/judicial-enforcement",
      name: "JudicialEnforcement",
      component: JudicialEnforcement
    },
    {
      path: "/work/jury-management",
      name: "JuryManagement",
      component: JuryManagement
    },
    {
      path: "/work/data-lake",
      name: "DataLake",
      component: DataLake
    },
    {
      path: "/work/scala-architecture",
      name: "ScalaArchitecture",
      component: ScalaArchitecture
    },
    {
      path: "/work/devops-transformation",
      name: "DevopsTransformation",
      component: DevopsTransformation
    },
    {
      path: "/work/unified-data",
      name: "UnifiedData",
      component: UnifiedData
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
