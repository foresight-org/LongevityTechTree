const zkrollup = {
    "data": {
        "id": "zkRollups",
        "parent": "scaling"
    }
};

const dataAvail = {
    "data": {
        "id": "data availability",
        "parent": "scaling"
    }
};

export default [
    zkrollup,
    dataAvail,
    { "data": {"id": "scaling", "parent": "decentralised infrastructure" }, "group": "nodes" },
    { "data": { "source": dataAvail.data.id, "target": zkrollup.data.id, "id": "avail_rollup" }, "position": { "x": null, "y": null }, "group": "edges" },
    { "data": { "source": "zero-knowledge proofs", "target": zkrollup.data.id, "id": "zkp_zkr" }, "position": { "x": null, "y": null }, "group": "edges" },
    { "data": { "source": "Open Data", "target": dataAvail.data.id, "id": "open_avail" }, "position": { "x": null, "y": null }, "group": "edges" },
];