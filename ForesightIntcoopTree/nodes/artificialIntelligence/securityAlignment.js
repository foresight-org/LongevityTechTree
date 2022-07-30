import aiRiskManagement from './securityAlignment/aiRiskManagement.js'
import aiSafetyAiAlignment from './securityAlignment/aiSafetyAiAlignment.js'
import aiSafetyTechnical from './securityAlignment/aiSafetyTechnical.js'
import aiSecurityTechnical from './securityAlignment/aiSecurityTechnical.js'

const securityAlignment = [
    {
        "data": {
            "id": "security / alignment",
            "parent": "artificial intelligence",
            "nodeType": "challenge"
        }
    },
];

export default [
    securityAlignment,
    aiRiskManagement,
    aiSafetyAiAlignment,
    aiSafetyTechnical,
    aiSecurityTechnical
];