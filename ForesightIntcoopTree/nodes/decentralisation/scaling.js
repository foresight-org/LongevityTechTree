const scaling = {
    "data": {
        "id": "scaling",
        "parent": "decentralised infrastructure",
        "description": "Mechanisms to increase throughput on resource-constrained execution environments.",
        "nodeType": "challenge"
    },
    "group": "nodes"
};

const zkrollup = {
    "data": {
        "id": "zkRollups",
        "parent": "scaling",
        "description": "A scaling solution that provides validity proofs for off-chain transactions.",
        "projects": [
            {
                "name": "zkSync",
                "url": "https://zksync.io/"
            },
            {
                "name": "Loopring",
                "url": "https://loopring.org/#/"
            },
            {
                "name": "Aztec",
                "url": "https://aztec.network/"
            },
            {
                "name": "StarkNet",
                "url": "https://starkware.co/starknet/"
            },
            {
                "name": "Polygon Zero",
                "url": "https://polygon.technology/solutions/polygon-zero/"
            },
            {
                "name": "Polygon Hermez",
                "url": "https://polygon.technology/solutions/polygon-hermez/"
            },
        ],
        "nodeType": "application"
    },
};

const optimisticRollup = {
    "data": {
        "id": "optimistic rollups",
        "parent": "scaling",
        "description": "An optimistic scaling solution that provides fraud proofs for off-chain transactions.",
        "projects": [
            {
                "name": "Optimism",
                "url": "https://www.optimism.io/"
            },
            {
                "name": "Arbitrum",
                "url": "https://arbitrum.io/"
            },
            {
                "name": "Polygon Nightfall",
                "url": "https://polygon.technology/solutions/polygon-nightfall/"
            },
            {
                "name": "Fuel Network",
                "url": "https://fuel.network/"
            }
        ],
        "nodeType": "application"
    },
};

const succinctBlockchain = {
    "data": {
        "id": "succinct blockchain",
        "parent": "scaling",
        "description": "A blockchain that requires only constant-size computation to validate.",
        "projects": [
            {
                "name": "Mina Protocol",
                "url": "https://minaprotocol.com/"
            }
        ],
        "nodeType": "application"
    },
};

export default [
    scaling,
    zkrollup,
    optimisticRollup,
    succinctBlockchain,
    { "data": { "source": "data availability", "target": zkrollup.data.id, "id": "avail_zkrollup" }, "group": "edges" },
    { "data": { "source": "data availability", "target": optimisticRollup.data.id, "id": "avail_optirollup" }, "group": "edges" },
    { "data": { "source": "zero-knowledge proofs", "target": zkrollup.data.id, "id": "zkp_zkr" }, "group": "edges" },
    { "data": { "source": "open data", "target": "data availability", "id": "open_avail" }, "group": "edges" },
    { "data": { "source": "recursive SNARKs", "target": succinctBlockchain.data.id }, "group": "edges"}
];