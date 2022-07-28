const modularity = {
    "data": {
        "id": "modularity",
        "parent": "decentralised infrastructure",
        "description": "An architectural paradigm that separates the data availability, consensus, settlement, and execution layers.",
        "nodeType": "core",
    },
    "projects": [
        {
            "name": "Celestia",
            "url": "https://celestia.org/"
        }
    ]
};

export default [
    modularity,
    { "data": { "source": "data availability", "target": "modularity", "id": "opendata_interop" }, "group": "edges" },
];