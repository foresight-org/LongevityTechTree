import algorithms from "./methods/algorithms.js";
import deepLearning from "./methods/deepLearning.js";
import compute from "./methods/compute.js";
import reinforcementLearning from "./methods/reinforcementLearning.js";

const methods = {
    "data": {
        "id": "methods",
        "parent": "artificial intelligence"
    }
};

export default [
    algorithms,
    compute,
    deepLearning,
    methods,
    reinforcementLearning,
];