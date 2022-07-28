import defi from './decentralisation/defi.js';
import desci from './decentralisation/desci.js';
import desoc from './decentralisation/desoc.js';
import scaling from './decentralisation/scaling.js';
import consensus from './decentralisation/consensus.js';
import governance from './decentralisation/governance.js';
import interop from './decentralisation/interop.js';

const decentralisation = [
    {
        "data": {
            "id": "decentralised infrastructure",
            "resources": [
                {
                    "name": "Decentralized Tech ecosystem map (a project of the Digital Life Collective)",
                    "id": "https://kumu.io/DigLife/decentralized-tech"
                }
            ],
            "nodeType": "core"
        },
        "group": "nodes"
    },
    defi,
    desci,
    desoc,
    consensus,
    scaling,
    governance,
    interop
];

export default decentralisation;