import agi from './artificialIntelligence/agi.js';
import applications from './artificialIntelligence/applications.js';
import methods from './artificialIntelligence/methods.js';
import securityAlignment from './artificialIntelligence/securityAlignment.js';

const artificialIntelligence = {
    "data": {
        "id": "artificial intelligence",
        "nodeType": "core"
    },
    "group": "nodes"
};

export default [artificialIntelligence]
    .concat(agi)
    .concat(applications)
    .concat(methods)
    .concat(securityAlignment)
    .flat();
