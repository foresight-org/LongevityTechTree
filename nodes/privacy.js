import zkp from './privacy/zkp.js';
import fhe from './privacy/fhe.js';
import mpc from './privacy/mpc.js';

const general = {
    "data": {
        "id": "general private computation",
        "parent": "private computation"
    }
};

const privacy = [
    { "data": { "id": "private computation"}, "position": { "x": null, "y": null }, "group": "nodes" },
    zkp,
    fhe,
    mpc,
    general,
    { "data": { "source": "zero-knowledge virtual machines", "target": general.data.id, "id": "zkvm_general" }, "position": { "x": null, "y": null }, "group": "edges" },
    { "data": { "source": general.data.id, "target": "private artificial intelligence", "id": "priv_ai" }, "position": { "x": null, "y": null }, "group": "edges" },
];

export default privacy;