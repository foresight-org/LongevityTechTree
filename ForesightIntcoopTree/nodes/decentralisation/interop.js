const interop = {
    "data": {
        "id": "interoperability",
        "parent": "decentralised infrastructure",
        "nodeType": "core",
    }
};

const commonDataFormat = {
    "data": {
        "id": "common data formats",
        "parent": interop.data.id,
        "description": "An open file format is a file format for storing digital data, defined by a openly published specification usually maintained by a standards organization, and which can be used and implemented by anyone. Open file format is licensed with open license.",
        "projects": [
            {
                "name": "Network Common Data Form (netCDF)",
                "url": "https://www.unidata.ucar.edu/software/netcdf/"
            }
        ],
        "resources": [
            {
                "name": "Open file format (Wikipedia)",
                "url": "https://en.wikipedia.org/wiki/Open_file_format"
            },
            {
                "name": "Open Data Handbook",
                "url": "http://opendatahandbook.org/guide/en/appendices/file-formats/"
            },
            {
                "name": "InterPlanetary Linked Data (IPLD)",
                "url": "https://ipld.io/"
            },
            {
                "name": "Computable Document Format (Wolfram)",
                "url": "https://www.wolfram.com/cdf/"
            }
        ],
        "nodeType": "core",
    }
};

const commProtocol = {
    "data": {
        "id": "communication protocols",
        "parent": interop.data.id,
        "description": "Standards and protocols for communication, networking, and transfer between systems.",
        "projects": [
            {
                "name": "Inter-Blockchain Communication (IBC)",
                "url": "https://ibcprotocol.org/"
            },
            {
                "name": "Hypertext Transfer Protocol (HTTP)",
                "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
            },
            {
                "name": "Cross-Consensus Message Format (XCM)",
                "url": "https://wiki.polkadot.network/docs/learn-crosschain"
            }
        ],
        "nodeType": "core"
    }
};

const bridges = {
    "data": {
        "id": "inter-blockchain bridges",
        "parent": interop.data.id,
        "description": "Protocols to transfer data across blockchains with minimal trust assumptions and maximal security. These protocols aim to achieve cross-chain composability.",
        "projects": [
            {
                "name": "Nomad",
                "url": "https://app.nomad.xyz/"
            },
            {
                "name": "LayerZero",
                "url": "https://layerzero.network/"
            },
            {
                "name": "Wormhole",
                "url": "https://wormholenetwork.com/"
            }
        ],
        "resources": [
            {
                "name": "The Bridges Are Dead, Long Live The Bridges! (2022)",
                "url": "https://zeeprime.capital/the-bridges-are-dead-long-live-the-bridges/"
            }
        ],
        "nodeType": "core"
    }
};

const crossDex = {
    "data": {
        "id": "cross-chain decentralised exchanges",
        "parent": interop.data.id,
        "description": "A decentralised exchange that can trade assets originating from different chains.",
        "nodeType": "application"
    }
}

const crossLending = {
    "data": {
        "id": "cross-chain lending",
        "parent": interop.data.id,
        "description": "Lending protocols that can use collateral sitting on chain A to borrow on chain B, instead of wrapping the collateral and forcing it across chains",
        "nodeType": "application"
    }
}

export default [
    interop,
    commonDataFormat,
    commProtocol,
    bridges,
    crossDex,
    crossLending,
    { "data": { "source": interop.data.id, "target": "open data", "id": "opendata_interop" }, "group": "edges" },
    { "data": { "source": interop.data.id, "target": crossDex.data.id, "id": "opendata_interop" }, "group": "edges" },
    { "data": { "source": "decentralised exchange (DEX)", "target": crossDex.data.id, "id": "opendata_interop" }, "group": "edges" },
];