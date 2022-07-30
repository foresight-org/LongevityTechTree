const agi = {
    "data": {
        "id": "Artificial General Intelligence",
        "parent": "artificial intelligence",
        "description": "Ability of an intelligent agent to understand or learn any intellectual task that a human being can.",
        "history": [
            "1950s - First generation of AI researcher were convinced that artificial intelligence was possible",
            "1970s - AI winter",
            "1980s - Knowledge became focus of mainstream AI",
            "1987 - 1993 - AI winter",
            "1993 - 2011 - Used successfully throughout the technology industry",
            "2011 - present Deep learning, big data and artificial general intelligence",
        ],
        "projects": [
            {
                "name": "Vicarious",
                "url": "https://www.vicarious.com"
            },
            {
                "name": "Numenta",
                "url": "https://numenta.com"
            },
            {
                "name": "Vast.ai",
                "url": "https://vast.ai"
            },
            {
                "name": "DeepMind",
                "url": "https://www.deepmind.com"
            },
            {
                "name": "AIBrain",
                "url": "https://aibrain.com/about"
            },
            {
                "name": "OpenAI",
                "url": "https://openai.com/about/"
            },
            {
                "name": "Olbrain - The AGI Brain",
                "url": "http://olbrain.com"
            },
            {
                "name": "generallyintelligent.ai/",
                "url": "https://generallyintelligent.ai/"
            },
        ],
        "labs": [
            {
                "name": "Genesis",
                "url": "https://web.archive.org/web/20050405071221/http://genesis.csail.mit.edu/index.html"
            },
            {
                "name": "CCRG - Cognitive Computing Research Group - Projects",
                "url": "https://ccrg.cs.memphis.edu/projects.html"
            },
            {
                "name": "EleutherAI",
                "url": "https://www.eleuther.ai/"
            },
            {
                "name": "SNePS Research Group Home Page",
                "url": "https://cse.buffalo.edu/sneps/"
            },
            {
                "name": "Blue Brain Project ‐ EPFL",
                "url": "https://www.epfl.ch/research/domains/bluebrain/"
            },
        ],
        "people": [
            {
                "name": "people.idsia.ch/~juergen/",
                "url": "https://people.idsia.ch/~juergen/"
            },
            {
                "name": "cis.temple.edu/~wangp/",
                "url": "https://cis.temple.edu/~wangp"
            },
            {
                "name": "Ben Goertzel",
                "url": "https://www.linkedin.com/in/bengoertzel/"
            },
        ],
        "involvement": [
            {
                "name": "Open-NARS, University of Michigan Soar Group · GitHub, Contribute to open source projects",
                "url": "https://github.com/SoarGroup"
            },
            {
                "name": "OpenCog Foundation | Donate, Donate to openCog",
                "url": "https://opencog.org/donate/"
            },
            {
                "name": "Theoretical Foundations of Artificial General Intelligence | SpringerLink, Start with creating a reading list or join existing curriculum AGI Curriculum – goertzel.org",
                "url": "http://goertzel.org/agi-curriculum/"
            },
            {
                "name": "EleutherAI, Join a AI community",
                "url": "https://www.eleuther.ai/"
            },
        ],
        "resources": [],
        "nodeType": "challenge",
    }
}

export default [
    agi,
    {
        "data": { 
            "source": "Reinforcement learning",
            "target": "Artificial General Intelligence",
            "id": "reinforcement_agi"
        },
        "group": "edges"
    },
    {
        "data": {
            "source": "security / alignment",
            "target": "Artificial General Intelligence",
            "id": "security_agi"
        },
        "group": "edges"
    },
];