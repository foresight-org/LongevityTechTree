const badger = {
    "data": {
        "id": "Badger Architecture",
        "parent": "algorithms & architectures",
        "description": "Set of design principles and a learning protocol.",
        "history": [
            "2019 - Release of Badger architecture"
        ],
        "projects": [
            {
                "name": "GoodAI | Develop safe general artificial intelligence – as fast as possible – to help humanity and understand the universe.",
                "url": "https://www.goodai.com/"
            },
        ],
        "labs": [],
        "people": [
            {
                "name": "Marek Rosa, Founder of GoodAI",
                "url": "https://www.linkedin.com/in/marekrosa1/"
            },
        ],
        "involvement": [
            {
                "name": "GoodAI Grants, Apply for an grant",
                "url": "https://www.goodai.com/goodai-grants/"
            },
            {
                "name": "GoodAI Careers, Apply",
                "url": "https://www.goodai.com/careers/"
            },
        ],
        "resources": [
            {
                "name": "[[1912.01513] BADGER: Learning to (Learn [Learning Algorithms] through Multi-Agent Communication)]",
                "url": "https://arxiv.org/abs/1912.01513"
            },
        ],
        "nodeType": "frontier",
    }
};

const badger_agi = {
    "data": {
        "source": badger.data.id,
        "target": "Artificial General Intelligence",
        "id": "badger_agi"
    }
};

export default [
    badger,
    badger_agi
];