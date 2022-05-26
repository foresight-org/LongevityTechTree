const zkp = {
    "data": {
        "id": "zero-knowledge proofs",
        "parent": "private computation"
    }
};

const recursive = {
    "data": {
        "id": "recursive SNARKs",
        "parent": "private computation"
    }
};

const zkvm = {
    "data": {
        "id": "zero-knowledge virtual machines",
        "parent": "private computation"
    }
};

export default [
    zkp,
    recursive,
    zkvm,
    { "data": { "source": zkp.data.id, "target": recursive.data.id, "id": "zkp_recursive" }, "position": { "x": null, "y": null }, "group": "edges" },
    { "data": { "source": zkp.data.id, "target": zkvm.data.id, "id": "zkp_zkvm" }, "position": { "x": null, "y": null }, "group": "edges" },
];