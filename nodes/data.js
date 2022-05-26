import dataAnalysis from "./data/dataAnalysis.js";
import dataMining from "./data/dataMining.js";
import datasets from "./data/datasets.js";
import openData from "./data/openData.js";

const data = {
    "data": {
        "id": "data"
    }
};

const datasets_deeplearning = {
    "data": {
        "source": "Datasets",
        "target": "Deep learning",
        "id": "datasets_deeplearning"
    }
}

export default [
    data,
    datasets_deeplearning
].concat(dataAnalysis)
    .concat(dataMining)
    .concat(datasets)
    .concat(openData)
    .flat();
