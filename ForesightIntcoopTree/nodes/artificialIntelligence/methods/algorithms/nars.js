const nars = {
    "data": {
        "id": "NARS",
        "parent": "algorithms & architectures",
        "description": "NARS (Non-Axiomatic Reasoning System) is a project aimed at the building of a general-purpose intelligent system, i.e., a “thinking machine”.",
        "history": [
            "1986 - Version 1 at Peking University",
            "1992 - Version 2 at Indiana University",
            "1995 - Version 3 at Indiana University",
            "1998 - Philadelphia University",
            "2008 - Open source version Open-NARS",
        ],
        "projects": [],
        "labs": [
            {
                "name": "Temple AGI Team",
                "url": "https://cis.temple.edu/tagit/"
            },
        ],
        "people": [
            {
                "name": "Pei Wang",
                "url": "https://cis.temple.edu/~pwang/"
            },
            {
                "name": "Christian Hahm",
                "url": "https://www.christianhahm.com"
            },
            {
                "name": "Mina Gabriel",
                "url": "https://www.linkedin.com/in/mina-gabriel-b9628913b/"
            },
            {
                "name": "Edward Sharick",
                "url": "https://www.linkedin.com/in/edward-sharick/"
            },
        ],
        "involvement": [
            {
                "name": "Join the team",
                "url": "https://cis.temple.edu/tagit/"
            },
            {
                "name": "open-nars - Google Groups, Participate in group discussions",
                "url": "https://groups.google.com/g/open-nars"
            },
        ],
        "resources": [
            {
                "name": "Non-Axiomatic Logic",
                "url": "https://www.worldscientific.com/worldscibooks/10.1142/8665"
            },
        ],
        "nodeType": "frontier",
    }
};

const nars_agi = {
    "data": {
        "source": nars.data.id,
        "target": "Artificial General Intelligence",
        "id": "nars_agi"
    }
}

export default [
    nars,
    nars_agi
];