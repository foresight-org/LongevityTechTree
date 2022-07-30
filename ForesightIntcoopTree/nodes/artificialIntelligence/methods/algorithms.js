import aixi from "./algorithms/aixi.js";
import actR from "./algorithms/actR.js";
import badger from "./algorithms/badger.js";
import languageModels from "./algorithms/languageModels.js";
import microPsi from "./algorithms/microPsi.js";
import nars from "./algorithms/nars.js";
import openCog from "./algorithms/openCog.js";
import soar from "./algorithms/soar.js";

const algorithms = {
    "data": {
        "id": "algorithms & architectures",
        "parent": "methods",
        "nodeType": "core",
    }
};

export default [algorithms]
    .concat(aixi)
    .concat(actR)
    .concat(badger)
    .concat(languageModels)
    .concat(microPsi)
    .concat(nars)
    .concat(openCog)
    .concat(soar)
    .flat();
