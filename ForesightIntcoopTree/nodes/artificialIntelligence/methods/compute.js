import aiAccelerator from './compute/aiAccelerator.js'
import cloudComputing from './compute/cloudComputing.js'
import cpuComputing from './compute/cpuComputing.js'
import dnaComputing from './compute/dnaComputing.js'
import gpuComputing from './compute/gpuComputing.js'
import opticalComputing from './compute/opticalComputing.js'
import quantumComputing from './compute/quantumComputing.js'

const compute = {
    "data": {
        "id": "compute",
        "parent": "methods",
        "nodeType": "core",
    }
};

export default [compute]
    .concat(aiAccelerator)
    .concat(cloudComputing)
    .concat(cpuComputing)
    .concat(dnaComputing)
    .concat(gpuComputing)
    .concat(opticalComputing)
    .concat(quantumComputing)
    .flat();
