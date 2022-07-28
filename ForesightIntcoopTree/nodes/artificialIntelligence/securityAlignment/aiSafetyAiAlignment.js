const aiSafetyAiAlignment = {
    "data": {
        "id": "AI safety / AI alignment",
        "parent": "security / alignment",
        "description": "",
        "history": [],
        "projects": [],
        "labs": [],
        "people": [],
        "involvement": [],
        "resources": [
            {
                "name": "EU Ethics Guidelines for Trustworthy AI",
                "url": "https://op.europa.eu/en/publication-detail/-/publication/d3988569-0434-11ea-8c1f-01aa75ed71a1"
            }
        ],
    }
};

const safety_mining = {
    "data": {
        "source": aiSafetyAiAlignment.data.id,
        "target": "Data Mining",
        "id": "safety_mining"
    }
};

export default [
    aiSafetyAiAlignment,
    safety_mining
];