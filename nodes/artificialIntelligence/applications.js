import bioinformatics from './applications/bioinformatics.js'
import cogAgents from './applications/cogAgents.js'
import computerVision from './applications/computerVision.js'
import nlp from './applications/nlp.js'
import patternRecognition from './applications/patternRecognition.js'
import recommendation from './applications/recommendation.js'
import xr_ai from './applications/xr_ai.js'

const applications = [
    { "data": { "id": "applications", "parent": "artificial intelligence" } },
    bioinformatics,
    cogAgents,
    computerVision,
    nlp,
    patternRecognition,
    recommendation,
    xr_ai,
    { "data": { "source": "Deep learning", "target": "Recommendation systems", "id": "deeplearning_recs" } },
];

export default applications;