<template>
  <div class="content-holder">
    <ModalMenu/>
    <NavBar/>
    <div class="sections">
      <InsightHeader
        category="Digital Strategy"
        title="What's the big deal - why go digital?"
        summary="Adopting and adapting to digital is more than an afterthought in business today. To stay competitive and relevant, it's crucial for companies to begin and progress their transition to digital transformation."
      />

      <section class="content-block fullpage">
        <div v-parallax="0.4" class="cover-image insight-image"></div>
      </section>

      <section class="content-block">
        <div class="container">
          <Spacer/>
          <InsightSubSection
            title="Transforms Customer Experience"
            content="Blockchain is a distributed digital ledger that keeps track of transactions in a verifiable, secured and permanent way. By design, blockchain is a decentralized technology and anything that happens on it alters all the nodes within that network. Each blockchain network consists of nodes where each node is nothing but a user’s computer or device. These nodes share digital information (basically cryptocurrencies) among themselves and that transaction gets recorded on each node in that network."
          ></InsightSubSection>
          <InsightSubSection
            content="Blockchain offers benefits like immutability, unprecedented security, faster transactions, data transparency, data reliability and much more. Our experts have mastered this technology and are experienced in Bitcoin, Ethereum, Hyperledger, Litecoin, Eris, Ripple, just to name a few."
          />
          <InsightSubSection
            content="With our existing technology, if a person wants to transfer some money from one account to another, it has to pass through that person’s bank. Be it online wiring, cash withdrawal or transfer through any third party wallets, the bank always acts as a mediator between the two parties. This process is centralized, where the bank has to know about each an every transaction happening between those two parties."
          ></InsightSubSection>
          <InsightSubSection
            content="Whereas in case of Blockchain, the transaction directly happens between peers or nodes after proper approval. There is no one centralized server that handles the transaction. Each node within that large blockchain network knows that a transaction is going to occur and they keep a copy of that transaction in their distributed ledger. In its simplest form, a distributed ledger is a database held and updated independently by each participant (or node) in a large network. You might wonder how that data remains secured if each and every node is aware about that transaction? We will explore this more in-depth in the next section."
          ></InsightSubSection>
          <InsightSubSection
            content="In a blockchain network, each and every node is independent and acts as an Administrator. No single node can act as an owner of the entire blockchain or demand control over it. The beauty of blockchain is in decentralization. When a transaction occurs, peers are only allowed to add digital information in their distributed ledger. Once it is added, no one can edit or delete that information. Multiple transactions can occur between peers and that transaction or group of transactions is called a Block."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Each block which is added by peers is signed with a unique secure code that later gets tied to the next block added in the same network creating a chain like structure between the blocks, hence where the name Blockchain originates. An in-depth detail about how blocks and blockchain actually works is given below. So now that we have understood the basics of what blockchain is, let’s take a look at the principle of Cryptoeconomics on which the entire Blockchain technology runs."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="What is Cryptoeconomics and Cryptocurrency?"
            content="The term Cryptoeconomics comes from a combination of two words: Cryptography and Economics. Blockchain technology is built on the principles of Cryptoeconomics. At Data Concepts, our Blockchain Specialistsand Blockchain Consultants not only focus on the technicality of cryptography but they are also well versed with the economy side of equation. Let’s take a quick look at both the Economic and Cryptography concepts."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Economics"
            content="The by-product of the concept of Cryptoeconomics is Cryptocurrencies and the very famous application of this concept is Bitcoin, which was first introduced by Satoshi Nakamoto in 2008. Though in real world scenarios a digital currency like Bitcoin, does not have any value, it is agreed upon by blockchain users to trust and give a certain value to that currency. Like in any economy, the concept of demand and supply also plays a very important role. Certain factors like the team handling that currency, history of that currency, performance, and many more affects the demand for these currencies."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Mining"
            content="Due to the decentralized nature of blockchain, any transactions that occur has to be verified by the network. The process of verifying or solving the transactions is called Mining. Once the transactions are solved, miners add them to the global distributed ledger (i.e to the public blockchain). Mining is not about generating new bitcoins, rather it allows blockchain to be a decentralized security."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Miners"
            content="Miners compete to solve a difficult mathematical problem based on a cryptographic hash algorithm. In the case of Bitcoin, it is observed that miners take an average of 10 minutes to mine a particular block. When this problem is solved, they receive rewards or incentives in the form of a cryptocurrency (ex: Bitcoin, Ethereum, etc) or transaction fees."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Proof of Work"
            content="The proof of work involves the concept of mining so that the transactions get validated. Based upon a successful validation, the miners get their reward and another block gets added to the public blockchain. Together, this entire process is called Proof of Work."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Cryptography"
            content="Blockchain uses cryptographic functions for its operations. There are two main cryptographic concepts that underpin blockchain technology: Hashing and Digital Signature. In this section, we will take a deeper look at these two concepts."
          ></InsightSubSection>
          <InsightSubSection
            title="Hashing"
            content="Hashing is the process of taking a random amount of data as an input and converting that data into an output of fixed length. There are many publicly available hashing algorithms available for us, and we can choose any algorithm that suits our requirements. In case of Bitcoin, SHA-256 algorithm is being used for hashing."
          ></InsightSubSection>
          <InsightSubSection
            content="The input passed to the hashing algorithm can be anything. It can be some characters or words, spreadsheets, images, audio files or any other data. The hashing algorithm accepts that input, performs its computational logic and converts it into another form of data which usually is alphanumeric having a fixed length. Pass in the same data any number of times, and the hashing algorithm always gives you the same output. If that data is tampered, and if even a single character is changed, the entire hash gets updated and a new hash is created."
          ></InsightSubSection>
          <InsightSubSection
            content="In the case of Blockchain, it utilizes hashing technique to know the current state of its block. All the transactions that have taken place inside a block are grouped together and a single hash is generated. The first block inside the blockchain is called the Genesis Block. The transactions inside this genesis block are hashed and saved inside this block. When the miners add the second block in the ledger, the hash of this genesis block and transactions of the second block are taken as the input for the hashing algorithm and new hash is generated. This cycle is repeated for every new block being added in the ledger and this is how the chain of blocks is formed."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="A block internally keeps each block and is connected to its previous block through its hash code. This hashing system guarantees that no transaction in the history can be tampered with because if any single part of the transaction changes, it affects the hash of the block to which it belongs, and any following blocks’ hashes as a result."
          ></InsightSubSection>
          <InsightSubSection
            title="Digital Signature"
            content="Just like a real signature, a digital signature is used to identify a person’s identity. It helps the other party identify that the message was sent by the original party rather than coming from a hacker. A digital signature is basically a combination of key pair (Public key and Private key). Public keys are public, which means it can be shared with anyone. Whereas private keys are private and has to be kept secured by the owner. Both the keys are mathematically related to each other, in such a way that if a data is signed/encrypted by a private key, only its corresponding public key is able to decrypt it. Let’s look at an example."
          ></InsightSubSection>
          <InsightSubSection
            content="If person A wants to send the message “DATA CONCEPTS” to person B. Person A first encrypts that message with his private key (ex: Key-(‘DATA CONCEPTS’)). This encrypted data is sent over to person B, who then uses the public key to decrypt that data. (ex: Key+(key-(‘DATA CONCEPTS’)). Since both keys are related, the message gets decrypted and the output that he receives is ‘DATA CONCEPTS’. Since the data got decrypted correctly, the receiver is ensured that the information was sent from a valid source. If the hacker had hacked the data, he would have encrypted the data using his private key, and the receiver wouldn’t have been able to open it. Ultimately making the receiver aware that the message has been tampered."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="Similarly in case of Blockchain, any transaction that happens in the network, the sender encrypts the data before sending it over. This signature ensures that only the owner of the account can move money out of the account and the transaction was made by the rightful owner."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Different types of Cryptocurrencies"
            content="Today there are more than 700 cryptocurrencies built on top of blockchain technology, but out of those many currencies only a few are recognized as the best. Let’s take a brief look at some of those currencies."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Bitcoin"
            content="Bitcoin is the first decentralized digital currency that works in the blockchain environment. Bitcoins can be sent over to anyone anywhere in the world and anyone can generate bitcoins by using mining tools. Bitcoins can be broken down into two components, Bitcoin Token and Bitcoin Protocol. The bitcoin token is a digital code whereas bitcoin protocol is the distributed digital ledger that keeps track of all the bitcoin tokens. Bitcoins are stored in a digital wallet, which exists either in the cloud or on a user’s computer. That wallet is a kind of virtual bank account that allows users to send or receive bitcoins."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Ethereum"
            content="Ethereum is a completely different blockchain protocol when compared to Bitcoin. Though both of them are the applications of Blockchain technology, both differ in their purpose and capabilities. Ethereum internally uses Smart Contracts, which are like any other real world contract, except they are completely digital. It also offers its own cryptocurrency called Ether, which is used by developers to pay transaction or service fees on the Ethereum network. While miners in bitcoin application mine bitcoins, miners in Ethereum network work hard to mine Ether."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Litecoin"
            content="Litecoin is another type of cryptocurrency that has gained a remarkable attention in the blockchain community. The concept of litecoin is similar to that of bitcoin as it was created to improve upon bitcoin. Litecoin is much cheaper and faster than Bitcoin. On an average it takes only 2.5 mins to mine a Litecoin block as compared to a whopping 10 mins in case of Bitcoins. Like bitcoin and many other cryptocurrencies, litecoin is typically stored in a digital wallet."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Different types of Blockchain"
            content="Currently there are three types of Blockchains and as blockchain develops, there probably will be many more types. Any blockchain created, falls under one of these types. They are Public, Private or Consortium. Let us take a brief look at what these types are and how they differ."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Public Blockchain"
            content="This is one of the most common type of Blockchain. It is the one that you may already know or heard of. Blockchain applications like Bitcoin, Ethereum, Litecoin are examples of this kind of blockchain. As the name says, it is public and hence anyone can join the blockchain network. These blockchains are generally considered to be fully decentralized. Anyone can start a public node on their local machine and be a part of the consensus process (the process for determining what blocks are added to the chain and validating its current state). They can read/write/audit transactions without any permission."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Consortium/Federated Blockchain"
            content="Under this type of blockchain, the consensus process is controlled by pre-selected group of nodes. Other nodes that accept the consensus process and are a part of this blockchain are only allowed to read transactions. Only a set of chosen/selected nodes get the authority to add new blocks, validating the transactions and make decisions for the best benefit of the whole network. This type of blockchain is popular used between a group of banks or organizations."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="Private Blockchain"
            content="This type of blockchain fundamentally kills the entire process of Blockchain introduced by Bitcoin. In a private blockchain, an individual or an organization is responsible for making decisions and give read/write/audit access to other nodes. Private blockchains are a way of taking advantage of blockchain technology by setting up groups and participants who can verify transactions internally. This process makes the blockchain more centralized, but it still enjoys the cryptographic security of blockchain technology."
          ></InsightSubSection>
          <InsightSubSection
            title="What are Smart Contracts?"
            content="Smart contracts are extremely popular these days. They are just like any contracts in the real world. The only difference is that they are completely digital. Smart Contracts are simple programs that execute inside the blockchain and can be used to automatically exchange data when certain conditions are passed."
          ></InsightSubSection>
          <InsightSubSection
            content="Let’s take a simple example of transfering money through smart contracts. Assuming there is a money-transfer application that works on Smart Contracts. People who transfer funds, actually send their money to the smart contract first. If the conditions mentioned in the smart contract program succeeds or meets the expectations, the funds are transferred to the receiving party. Whereas if the contract fails, the money is transferred back to the sender’s account."
          ></InsightSubSection>
          <InsightSubSection
            content="It is important for the parties to trust the smart contract as it is stored within the blockchain. It inherits certain properties of blockchain like immutability and distributed. Once the smart contract is created, it can never be changed or tampered and that is how they are immutable. Since the contract is distributed, each and every node that holds this contract has to validate if the conditions mentioned in the contract is passed."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="For example: While transfering funds, if one node shouts out that the conditions are met, and other nodes do not agree with it, then that transaction fails and funds do not get transferred. These two properties makes Smart Contracts more reliable. The very famous Blockchain application, Ethereum was specifically built and designed to support Smart Contracts. It is worth noting that even Bitcoin has support for Smart contracts although its a lot more limited when compared to Ethereum."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            title="What are Smart Contracts?"
            content="Smart contracts are extremely popular these days. They are just like any contracts in the real world. The only difference is that they are completely digital. Smart Contracts are simple programs that execute inside the blockchain and can be used to automatically exchange data when certain conditions are passed."
          ></InsightSubSection>
          <InsightSubSection
            title="How can we help you with Blockchain Consulting?"
            content="We are composed of technical professionals with expertise gained all over the world and in all fields of the tech industry and we put this expertise to work for you. Our experts are able to quickly identify, predict, and satisfy our clients’ current and future need. Our hierarchy of consultants include Principal Consultants, Senior Architects, Senior Managers, Lead Senior Consultants, Senior and Junior Level Consultants and Developers available at your disposal with flexible engagements."
          ></InsightSubSection>
          <InsightSubSection
            content="At DATA CONCEPTS, we provide first class Blockchain consulting and Blockchain training services. Our team of Blockchain Specialists, Blockchain Consultants and Developers can assess your business requirements and consult if blockchain suits as the perfect solution. While our experts help you develop the correct blockchain solution, we also help you adapt and integrate blockchain into your existing network, develop and deploy smart contracts, token creation, ICO auditing, perform smart contract audits, public and private blockchain creation, wallet security solutions, wallet integration, and much more."
          ></InsightSubSection>
          <InsightSubSection
            content="In addition to being experts in Blockchain technology, we specialize in .NET Consulting, .NET Core Consulting, ASP.NET & ASP.NET Core Consulting, Cosmos DB Computing, Cloud Computing, Salesforce, Microsoft Dynamic CRM, Agile Methodologies, Software Architecture Consulting and Training, Big Data and Big Data related technologies like Hadoop, Kafka, Spark, PIG, Cassandra, HBase, HIVE, Zookeeper, Solr, and ElasticSearch just to name a few. Check out our consulting services for more details."
          ></InsightSubSection>
          <InsightSubSection
            content="DATA CONCEPTS has expanded into a global company servicing clients not only across the United States, but in Europe and Canada as well. In the United States, we provide our Blockchain Consulting and Blockchain Training services across various cities like, Dallas, Houston, New York, New Jersey, Irvine, Los Angeles, Denver, Boulder, Charlotte, Atlanta, Orlando, Miami, San Antonio, San Diego and others. Our Blockchain experts remain committed to the vision of helping our clients innovate and transform their business strategies into deliverable projects and real-time solutions."
          ></InsightSubSection>
          <InsightSubSection
            class="subsection-padding"
            content="We work in a blockchain agnostic way as our experts have experience in using Bitcoin, Ethereum, Hyperledger, Eris, Ripple, Tangle just to name a few. We also offer Blockchain training services. Our team of expert Blockchain Trainers can help your team learn all the concepts of blockchain from basics to advance level with a focus on real world use cases. Want to learn more about our Blockchain services or how Blockchain technology can impact your business? Contact us today to allow our blockchain experts make your vision a reality."
          ></InsightSubSection>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import ModalMenu from "../../components/ModalMenu.vue";
import Spacer from "../../components/Spacer.vue";
import InsightHeader from "../../components/InsightHeader.vue";
import InsightSubSection from "../../components/InsightSubSection.vue";

export default {
  name: "WorldBlockchain",
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
@import "../../assets/sass/settings.sass"

.insight-image
  filter: brightness(0.35) contrast(1) sepia(100%) hue-rotate(deg) saturate(6)
  background-image: url(../../assets/background/insights/bridge.jpg)
  background-position: center 70%
</style>
