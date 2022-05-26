const did = {
    "data": {
        "id": "decentralised identity (DID)",
        "parent": "decentralised infrastructure"
    }
};

export default [
    did,
    { "data": { "source": "Data sovereignty", "target": did.data.id, "id": "sov_did" }, "position": { "x": null, "y": null }, "group": "edges" },
    { "data": { "source": did.data.id, "target": "governance", "id": "did_gov" }, "position": { "x": null, "y": null }, "group": "edges" },
];