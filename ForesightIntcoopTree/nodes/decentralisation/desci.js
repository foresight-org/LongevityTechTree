import openScience from "./desci/openScience.js"

const desci = {
    "data": {
        "id": "decentralised science (DeSci)",
        "parent": "decentralised infrastructure",
        "description": "The use of decentralised technologies such as smart contracts, tokens, decentralised storage and computation to enable new possibilities to make science more accessible, auditable, transparent, independent, and fair.",
        "projects": [
            {
                "name": "DeSci Foundation",
                "url": "https://mirror.xyz/descifoundation.eth"
            },
            {
                "name": "DeSci Labs",
                "url": "https://desci.com/"
            }
        ],
        "resources": [
            {
                "name": "DeSci - the New Web 3 Movement to Revolutionize Scientific Research & Funding (2022) - Serge Baloyan",
                "url": "https://hackernoon.com/desci-the-new-web-3-movement-to-revolutionize-scientific-research-and-funding"
            },
            {
                "name": "Ten more DeSci projects disrupting scientific research, development, and knowledge sharing.",
                "url": "https://www.cryptoaltruism.org/blog/ten-more-desci-projects"
            },
            {
                "name": "DeSci: Can crypto improve scientific research? (2022) - Max Parasol",
                "url": "https://cointelegraph.com/magazine/2022/04/15/desci-tokens-help-improve-scientific-research"
            },
            {
                "name": "A Guide to DeSci, the Latest Web3 Movement - Sarah Hamburg",
                "url": "https://future.com/what-is-decentralized-science-aka-desci/"
            },
        ],
        "nodeType": "frontier"
    }
};

const digitalLab = {
    "data": {
        "id": "digital computational lab",
        "parent": desci.data.id,
        "description": "A virtual lab environment for scientists to standardize workflows, and to track and reproduce all computations and discoveries",
        "projects": [
            {
                "name": "Code Ocean",
                "url": "https://codeocean.com"
            }
        ],
        "nodeType": "frontier"
    }
};

const researchObjects = {
    "data": {
        "id": "Research Objects",
        "parent": desci.data.id,
        "description": "A method for the identification, aggregation and exchange of scholarly information on the Web. The primary goal of the research object approach is to provide a mechanism to associate related resources about a scientific investigation so that they can be shared using a single identifier.",
        "projects": [
            {
                "name": "Figshare",
                "url": "https://figshare.com/"
            },
        ],
        "nodeType": "core"
    }

};

const verifiedResearch = {
    "data": {
        "id": "Verified Research Objects",
        "parent": desci.data.id,
        "description": "Dynamic research objects (5) that combine text, code, data, videos, peer-reviews, annotations, and commentaries, allowing to trace the development of a research object over time including version management, citations, replication status, and the on-chain verification of open science practices, badges (e.g. for FAIR data), and replication status.",
        "projects": [
            {
                "name": "DeSci Nodes",
                "url": "https://desci.com/sciweave"
            },
        ],
        "nodeType": "frontier"
    }
};

const scientometrics = {
    "data": {
        "id": "decentralised scientometrics",
        "parent": desci.data.id,
        "description": "Robust methods to determine scientific impact. These are alternative to the existing peer-review process and journal circulation.",
        "nodeType": "challenge"
    }
};

const funding = {
    "data": {
        "id": "decentralised scientific funding",
        "parent": desci.data.id,
        "description": "Decentralised methods of funding scientific research. These are an alternative to grant proposals and centralised funding bodies.",
        "nodeType": "challenge"
    }
};


const replication = {
    "data": {
        "id": "replication",
        "parent": desci.data.id,
        "description": "Decentralised methods of funding scientific research. These are an alternative to grant proposals and centralised funding bodies.",
        "resources": [
            {
                "name": "Funding Science With a DAO: The Who, What, Why & How",
                "url": "https://www.lifespan.io/topic/funding-science-with-a-dao-the-who-what-why-how/"
            }
        ],
        "projects": [
            {
                "name": "VitaDAO",
                "url": "https://www.vitadao.com/"
            },
            {
                "name": "Molecule",
                "url": "https://www.molecule.to/"
            },
        ],
        "nodeType": "challenge"
    }
};

const peerReview = {
    "data": {
        "id": "incentivised peer review",
        "parent": desci.data.id,
        "description": "Incentive systems that rewards scientists for peer-reviewing other scientists' work and that builds up trust and reputation.",
        "projects": [
            {
                "name": "Ants-Review",
                "url": "https://linktr.ee/antsreview"
            }
        ],
        "nodeType": "challenge"
    }
};

const arcs = {
    "data": {
        "id": "autonomous research communities (ARCs)",
        "parent": desci.data.id,
        "description": "Communities to select, validate, and curate scientific discoveries, with each step in the process being stored on chain, creating an immutable record.",
        "resources": [
            {
                "name": "The DAO stack for Scientific Societies",
                "url": "https://desci.com/arcs"
            }
        ]
    }
};

export default [
    desci,
    researchObjects,
    verifiedResearch,
    digitalLab,
    scientometrics,
    funding,
    replication,
    peerReview,
    arcs,
    { "data": { "source": "decentralised data storage", "target": digitalLab.data.id, "id": "storage_lab" }, "group": "edges" },
    { "data": { "source": "data curation", "target": scientometrics.data.id, "id": "curate_metrics" }, "group": "edges" },
    { "data": { "source": "open data", "target": researchObjects.data.id, "id": "open_research" }, "group": "edges" },
    { "data": { "source": researchObjects.data.id, "target": verifiedResearch.data.id, "id": "res_ver" }, "group": "edges" },
    { "data": { "source": "grant DAOs", "target": funding.data.id, "id": "dao_fund" }, "group": "edges" },
    { "data": { "source": "professional DAOs", "target": arcs.data.id, "id": "dao_arc" }, "group": "edges" },
].concat(
    openScience
).flat();