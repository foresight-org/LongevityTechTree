import agi from './artificialIntelligence/agi.js';
import applications from './artificialIntelligence/applications.js';
import education from './artificialIntelligence/education.js';
import methods from './artificialIntelligence/methods.js';
import securityAlignment from './artificialIntelligence/securityAlignment.js';

const artificialIntelligence = {
    "data": {
        "id": "artificial intelligence" 
    },
    "position": {
        "x": 195.56340747734816,
        "y": 484.3338177685355
    },
    "group": "nodes"
};

export default [artificialIntelligence]
    .concat(agi)
    .concat(applications)
    .concat(education)
    .concat(methods)
    .concat(securityAlignment)
    .flat();
