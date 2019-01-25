import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home.vue";
import Insights from "@/pages/Insights.vue";
import Services from "@/pages/Services.vue";
import Works from "@/pages/Works.vue";
import Contact from "@/pages/Contact.vue";
import About from "@/pages/About.vue";
import HireUs from "@/pages/HireUs.vue";
import Careers from "@/pages/Careers.vue";

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
import Energy from "@/pages/Work/Energy.vue";
import FirearmsApplication from "@/pages/Work/FirearmsApplication.vue";
import Sabra from "@/pages/Work/Sabra.vue";
import CriminalHistory from "@/pages/Work/CriminalHistory.vue";
import Court from "@/pages/Work/Court.vue";
import Energy2 from "@/pages/Work/Energy2.vue";

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
import UIUX from "@/pages/Service/UIUX.vue";

// insight pages
import QuickPeek from "@/pages/Insights/QuickPeek.vue";
import WorldBlockchain from "@/pages/Insights/WorldBlockchain.vue";
import DataMining from "@/pages/Insights/DataMining.vue";
import PopularAnalytics from "@/pages/Insights/PopularAnalytics.vue";
import ModernUtility from "@/pages/Insights/ModernUtility.vue";
import AzureML from "@/pages/Insights/AzureML.vue";
import AgileTransformation from "@/pages/Insights/AgileTransformation.vue";
import DigitalTransformation from "@/pages/Insights/DigitalTransformation.vue";
import AgileUnderstanding from "@/pages/Insights/AgileUnderstanding.vue";
import ITAgility from "@/pages/Insights/ITAgility.vue";
import DataStrategyRight from "@/pages/Insights/DataStrategyRight.vue";
import DigitalCulture from "@/pages/Insights/DigitalCulture.vue";
import GovernanceJourney from "@/pages/Insights/GovernanceJourney.vue";
import AgileEmbrace from "@/pages/Insights/AgileEmbrace.vue";
import LeverageBigData from "@/pages/Insights/LeverageBigData.vue";
import GovernancePath from "@/pages/Insights/GovernancePath.vue";
import DataChange from "@/pages/Insights/DataChange.vue";
import DataSecurityBI from "@/pages/Insights/DataSecurityBI.vue";
import BigDataBusiness from "@/pages/Insights/BigDataBusiness.vue";
import AnalyticsPower from "@/pages/Insights/AnalyticsPower.vue";
import AppDevApproach from "@/pages/Insights/AppDevApproach.vue";
import CloudAppDev from "@/pages/Insights/CloudAppDev.vue";
import InformationArchitecture from "@/pages/Insights/InformationArchitecture.vue";
import BIDataWarehouse from "@/pages/Insights/BIDataWarehouse.vue";
import AzureMigration from "@/pages/Insights/AzureMigration.vue";
import SharePoint from "@/pages/Insights/SharePoint.vue";
import PowerBI from "@/pages/Insights/PowerBI.vue";
import DigitalLandscape from "@/pages/Insights/DigitalLandscape.vue";
import BigDataPlan from "@/pages/Insights/BigDataPlan.vue";
import MDMvsDW from "@/pages/Insights/MDMvsDW.vue";

Vue.use(Router);

const router = new Router({
  watch: {
    $route(to, from) {
      console.log("rout changed");
    }
  },
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
      name: "Contact",
      component: Contact,
      beforeEnter: (to, from, next) => {
        const el1 = document.body;
        el1.classList.remove("hide-overflow");
        next();
      }
    },
    {
      path: "/about",
      name: "About",
      component: About,
      beforeEnter: (to, from, next) => {
        const el1 = document.body;
        el1.classList.remove("hide-overflow");
        next();
      }
    },
    {
      path: "/hire-us",
      name: "HireUs",
      component: HireUs,
      beforeEnter: (to, from, next) => {
        const el1 = document.body;
        el1.classList.remove("hide-overflow");
        next();
      }
    },
    {
      path: "/careers",
      name: "Careers",
      component: Careers,
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
      path: "/services/ui-ux",
      name: "UIUX",
      component: UIUX
    },
    {
      path: "/insights/quick-peek",
      name: "QuickPeek",
      component: QuickPeek
    },
    {
      path: "/insights/blockchain-world",
      name: "WorldBlockchain",
      component: WorldBlockchain
    },
    {
      path: "/insights/data-mining",
      name: "DataMining",
      component: DataMining
    },
    {
      path: "/insights/analytics-is-popular",
      name: "PopularAnalytics",
      component: PopularAnalytics
    },
    {
      path: "/insights/modern-utility",
      name: "ModernUtility",
      component: ModernUtility
    },
    {
      path: "/insights/azure-machine-learning",
      name: "AzureML",
      component: AzureML
    },
    {
      path: "/insights/agile-transformation",
      name: "AgileTransformation",
      component: AgileTransformation
    },
    {
      path: "/insights/digital-transformation",
      name: "DigitalTransformation",
      component: DigitalTransformation
    },
    {
      path: "/insights/agile-understanding",
      name: "AgileUnderstanding",
      component: AgileUnderstanding
    },
    {
      path: "/insights/it-agility",
      name: "ITAgility",
      component: ITAgility
    },
    {
      path: "/insights/data-strategy-right",
      name: "DataStrategyRight",
      component: DataStrategyRight
    },
    {
      path: "/insights/digital-culture",
      name: "DigitalCulture",
      component: DigitalCulture
    },
    {
      path: "/insights/data-governance-journey",
      name: "GovernanceJourney",
      component: GovernanceJourney
    },
    {
      path: "/insights/agile-embrace",
      name: "AgileEmbrace",
      component: AgileEmbrace
    },
    {
      path: "/insights/big-data-leverage",
      name: "LeverageBigData",
      component: LeverageBigData
    },
    {
      path: "/insights/data-governance-path",
      name: "GovernancePath",
      component: GovernancePath
    },
    {
      path: "/insights/data-analytics-change",
      name: "DataChange",
      component: DataChange
    },
    {
      path: "/insights/data-security-bi",
      name: "DataSecurityBI",
      component: DataSecurityBI
    },
    {
      path: "/insights/big-data-business",
      name: "BigDataBusiness",
      component: BigDataBusiness
    },
    {
      path: "/insights/analytics-power",
      name: "AnalyticsPower",
      component: AnalyticsPower
    },
    {
      path: "/insights/application-development-approach",
      name: "AppDevApproach",
      component: AppDevApproach
    },
    {
      path: "/insights/cloud-application-development",
      name: "CloudAppDev",
      component: CloudAppDev
    },
    {
      path: "/insights/information-architecture",
      name: "InformationArchitecture",
      component: InformationArchitecture
    },
    {
      path: "/insights/bi-data-warehousing",
      name: "BIDataWarehouse",
      component: BIDataWarehouse
    },
    {
      path: "/insights/azure-migration",
      name: "AzureMigration",
      component: AzureMigration
    },
    {
      path: "/insights/sharepoint",
      name: "SharePoint",
      component: SharePoint
    },
    {
      path: "/insights/power-bi",
      name: "PowerBI",
      component: PowerBI
    },
    {
      path: "/insights/digital-landscape",
      name: "DigitalLandscape",
      component: DigitalLandscape
    },
    {
      path: "/insights/big-data-plan",
      name: "BigDataPlan",
      component: BigDataPlan
    },
    {
      path: "/insights/mdm-vs-dw",
      name: "MDMvsDW",
      component: MDMvsDW
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
      path: "/work/energy",
      name: "Energy",
      component: Energy
    },
    {
      path: "/work/firearms-application",
      name: "FirearmsApplication",
      component: FirearmsApplication
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
    },
    {
      path: "/work/sabra",
      name: "Sabra",
      component: Sabra
    },
    {
      path: "/work/criminal-history",
      name: "CriminalHistory",
      component: CriminalHistory
    },
    {
      path: "/work/court",
      name: "Court",
      component: Court
    },
    {
      path: "/work/energy-2",
      name: "Energy2",
      component: Energy2
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
