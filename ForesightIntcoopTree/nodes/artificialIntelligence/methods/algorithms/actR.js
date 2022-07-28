const actR = {
    "data": {
        "id": "ACT-R",
        "parent": "algorithms & architectures",
        "description": "Theory about how human cognition works.",
        "history": [
            "1973 - 1990 - ACT-R is the ultimate successor of a series of increasingly precise models of human cognition developed by John R. Anderson.",
            "1990 - 1998 - Release of ACT-R 4.0 (software)"
        ],
        "projects": [],
        "labs": [
            {
                "name": "ACT-R",
                "url": "http://act-r.psy.cmu.edu/"
            },
            {
                "name": "LearnLab – Part of the Simon Initiative",
                "url": "https://learnlab.org/"
            },
            {
                "name": "Research Services, Open Innovation and Breakthrough Technology",
                "url": "https://www.parc.com/"
            },
            {
                "name": "PACT Center @ Carnegie Mellon University",
                "url": "http://pact.cs.cmu.edu/"
            },
        ],
        "people": [
            {
                "name": "John R Anderson - Department of Psychology - Dietrich College of Humanities and Social Sciences - Carnegie Mellon University",
                "url": "https://www.cmu.edu/dietrich/psychology/people/core-training-faculty/anderson-john.html"
            },
            {
                "name": "[ACT-R » People], Extensive list of people which are involved in the project",
                "url": "http://act-r.psy.cmu.edu/people/"
            },
        ],
        "involvement": [],
        "resources": [
            {
                "name": "How Can the Human Mind Occur in the Physical Universe? - John R. Anderson - Oxford University Press",
                "url": "https://global.oup.com/academic/product/how-can-the-human-mind-occur-in-the-physical-universe-9780195324259?q=american%20architecture&lang=en&cc=us"
            },
        ],
        "nodeType": "frontier",
    }
};

const act_r_reinforcement = {
    "data": {
        "source": actR.data.id,
        "target": "Reinforcement learning",
        "id": "act_r_reinforcement"
    }
}

export default [
    actR,
    act_r_reinforcement
];