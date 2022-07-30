const defi = {
    "data": {
        "id": "decentralised finance (DeFi)",
        "parent": "decentralised infrastructure",
        "description": "Financial products and services that do not rely on a central authority or middleman.",
        "nodeType": "application",
    }
};

const dex = {
    "data": {
        "id": "decentralised exchange (DEX)",
        "parent": defi.data.id,
        "description": "A peer-to-peer marketplace where users can trade cryptocurrencies in a non-custodial manner without the need for an intermediary to facilitate the transfer and custody of funds.",
        "projects": [
            {
                "name": "Uniswap Protocol",
                "url": "https://uniswap.org/"
            },
            {
                "name": "Curve Finance",
                "url": "https://curve.fi/"
            },
            {
                "name": "PancakeSwap",
                "url": "https://pancakeswap.finance/"
            },
            {
                "name": "Balancer",
                "url": "https://balancer.fi/"
            },
        ],
        "nodeType": "application",
    }
};

const stablecoins = {
    "data": {
        "id": "stablecoins",
        "parent": defi.data.id,
        "description": "Cryptocurrencies designed to decrease the volatility of the coin's price, relative to some “stable” asset or basket of assets.",
        "projects": [
            {
                "name": "Maker Dai",
                "url": "https://makerdao.com/en/"
            },
            {
                "name": "RAI",
                "url": "https://reflexer.finance/"
            },
            {
                "name": "Tether",
                "url": "https://tether.to/"
            },
            {
                "name": "USDC",
                "url": "https://www.circle.com/en/usdc"
            },
        ],
        "nodeType": "application",
    }
};

const credit = {
    "data": {
        "id": "decentralised credit platforms",
        "parent": defi.data.id,
        "description": "Decentralized lending platforms provide loans to businesses, or the public with no intermediaries are present. These also allow lendres to earn interest on supplied stablecoins and cryptocurrencies.",
        "projects": [
            {
                "name": "MakerDAO",
                "url": "https://makerdao.com/en/"
            },
            {
                "name": "TrueFi",
                "url": "https://truefi.io/"
            },
            {
                "name": "Yield Protocol",
                "url": "https://yield.credit/"
            },
            {
                "name": "Aave",
                "url": "https://aave.com/"
            },
            {
                "name": "Compound",
                "url": "https://compound.finance/"
            },
            {
                "name": "C.R.E.A.M",
                "url": "https://cream.finance/"
            },
        ],
        "nodeType": "application",
    }
};

const undercollaterised = {
    "data": {
        "id": "undercollaterised lending markets",
        "parent": defi.data.id,
        "description": "Lending based on some measure of creditworthiness, as opposed to collateral.",
        "nodeType": "challenge"
    }
};

const commLending = {
    "data": {
        "id": "uncollateralised community lending",
        "parent": defi.data.id,
        "description": "Community-based lending practices where members of a social network agree to support one another's liabilities.",
        "projects": [
            {
                "name": "Grameen Bank",
                "url": "https://grameenbank.org/"
            }
        ],
        "nodeType": "application"
    }
};

const derivative = {
    "data": {
        "id": "decentralised derivative platforms",
        "parent": defi.data.id,
        "description": "DeFi derivatives are financial contracts which track or provide exposure to an underlying asset.",
        "projects": [
            {
                "name": "dYdX",
                "url": "https://dydx.exchange"
            },
            {
                "name": "Opyn",
                "url": "https://www.opyn.co/"
            },
            {
                "name": "Synthetix",
                "url": "https://synthetix.io/"
            },
        ],
        "nodeType": "application",
    }
};

const insurance = {
    "data": {
        "id": "decentralised insurance platforms",
        "parent": defi.data.id,
        "description": "An insurance policy that relies on its community of users to dictate premiums and orchestrate payouts.",
        "projects": [
            {
                "name": "InsurAce",
                "url": "https://www.insurace.io/"
            },
            {
                "name": "Nexus Mutual",
                "url": "https://nexusmutual.io/"
            },
            {
                "name": "Opium",
                "url": "https://opium.finance/"
            },
        ],
        "nodeType": "application",
    }
};

const prediction = {
    "data": {
        "id": "decentralised prediction markets",
        "parent": defi.data.id,
        "description": "Prediction market, facilitated by smart contracts, which allow users to trade the outcome of events.",
        "projects": [
            {
                "name": "Augur",
                "url": "https://augur.net/"
            },
            {
                "name": "Polymarket",
                "url": "https://polymarket.com/"
            }
        ],
        "nodeType": "application",
    }
}

const mev = {
    "data": {
        "id": "maximal extractable value (MEV)",
        "parent": defi.data.id,
        "description": "Maximal extractable value (MEV) refers to the maximum value that can be extracted from block production in excess of the standard block reward and gas fees by including, excluding, and changing the order of transactions in a block.",
        "projects": [
            {
                "name": "Flashbots",
                "url": "https://docs.flashbots.net/"
            },
        ],
        "nodeType": "challenge",
    }
};

export default [
    defi,
    dex,
    stablecoins,
    credit,
    undercollaterised,
    commLending,
    derivative,
    insurance,
    prediction,
    mev,
    { "data": { "source": "verifiable reputation", "target": undercollaterised.data.id, "id": "ver_under" }, "group": "edges" },
    { "data": { "source": credit.data.id, "target": undercollaterised.data.id, "id": "credit_under" }, "group": "edges" },
    { "data": { "source": undercollaterised.data.id, "target": commLending.data.id, "id": "under_comm" }, "group": "edges" },
    { "data": { "source": "Sybil resistance", "target": undercollaterised.data.id, "id": "sybil_under" }, "group": "edges" },
    { "data": { "source": "decentralised identity (DID)", "target": undercollaterised.data.id, "id": "did_under" }, "group": "edges" },
];