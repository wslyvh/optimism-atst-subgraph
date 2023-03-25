# optimism-atst-subgraph

AttestationStation Subgraph deployed on Optimism

- Address [0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77](https://optimistic.etherscan.io/address/0xEE36eaaD94d1Cc1d0eccaDb55C38bFfB6Be06C77)
- Graph https://thegraph.com/hosted-service/subgraph/wslyvh/optimism-atst

## Scaling Ethereum 2023

This subgraph is created as part of the Scaling Ethereum 2023 hackathon. Since this repo is used as project submission, I'll provide some more context on other aspects.


### Intro 

The subgraph is used to integrate OP AttestationStation as data provider into Sismo. Sismo is a identity protocol that allows you to select, add and aggregate data to your digital identity using ZK proofs. Their data providers allow you to connect various sources from both Web2 as Web3 to make claims about your data using ZK technology. This results in privacy-preserving attestations that can be utilized for digital identities, access control and reputation.

The combination with AttestationStation allows to create new identity sets and build more robust, trustworthy identities.

### What did I build?

1. Subgraph

This subgraph is used to query any attestations on Optimism. It indexes by creator, creator + key and receivers and keeps track of some global stastistics. The ATST Subgraph is public, open-source and can be used by other projects and use-cases.

- Subgraph https://thegraph.com/hosted-service/subgraph/wslyvh/optimism-atst
- Repo https://github.com/wslyvh/optimism-atst-subgraph

--- 

2. Sismo Integration

The subgraph is used as a data source to create an AttestationStation data provider in Sismo. This allows you to create new Data Groups, zkConnect Apps (SSO) and Sismo badges (SBTs) using attestations on Optimism.

Contributions to Sismo:
- Initial work https://github.com/sismo-core/sismo-hub/pull/1564
- Value-based scoring https://github.com/sismo-core/sismo-hub/pull/1606


The data provider allows anyone to query, select and aggregate any attestations from creators, keys or key/value pairs. The attestations or its values can be used as a scoring mechanism in Sismo's products. As an example, you can find a data group and ZK badge using the Optimist Score by flipside. 

- Optimist Score by Flipside https://science.flipsidecrypto.xyz/optimist/
- Optmists group https://factory.sismo.io/groups-explorer?search=optimists
- ZK Badge https://factory.sismo.io/badge-dashboard/c25e7a5d-d23e-4af1-83ea-45b28f15e5c7

