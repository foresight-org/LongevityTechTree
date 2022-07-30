const partial = {
    "data": {
        "id": "partially homomorphic encryption",
        "parent": "private computation",
        "description": "Partially homomorphic encryption allows only select mathematical functions to be performed homomorphically on encrypted values.",
        "nodeType": "core",
    }
};

const fhe = {
    "data": {
        "id": "fully homomorphic encryption",
        "parent": "private computation",
        "description": "An encryption scheme that enables analytical functions to be run directly on encrypted data while yielding the same encrypted results as if the functions were run on plaintext.",
        "projects": [
            {
                "name": "Zama",
                "url": "https://www.zama.ai/"
            }
        ],
        "nodeType": "challenge",
    },
};

export default [
    fhe,
    partial
];