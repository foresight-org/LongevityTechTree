const aixi = {
    "data": {
        "id": "AIXI",
        "parent": "algorithms & architectures",
        "description": "Is a reinforcement learning agent.",
        "history": [
            "2000- First proposal from Marcus Hutter",
            "2005 - Several results regarding AIXI are proved in Hutter’s 2005 book Universal Artificial Intelligence"
        ],
        "projects": [],
        "labs": [],
        "people": [
            {
                "name": "Marcus Hutter",
                "url": "www.hutter1.net",
            },
        ],
        "involvement": [
            {
                "name": "Try the compressing human knowledge challenge",
                "url": "http://www.hutter1.net/prize/index.htm",
            },
            {
                "name": "Join projects which are promoted by Hutter",
                "url": "https://cecs.anu.edu.au/people/marcus-hutter",
            },
        ],
        "resources": [
            {
                "name": "Read the AIXI discussion on Lesswrong",
                "url": "https://www.lesswrong.com/tag/aixi",
            },
        ],
        "nodeType": "core",
    }
};

const aixi_reinforcement = {
    "data": {
        "source": aixi.data.id,
        "target": "Reinforcement learning",
        "id": "aixi_reinforcement"
    }
};

export default [
    aixi,
    aixi_reinforcement
];