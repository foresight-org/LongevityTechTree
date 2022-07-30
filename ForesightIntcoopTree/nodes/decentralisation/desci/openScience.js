const openScience = {
    "data": {
        "id": "open science",
        "parent": "decentralised science (DeSci)",
        "description": "The movement to make scientific research (including publications, data, physical samples, and software) and its dissemination accessible to all levels of society, amateur or professional",
        "projects": [
            {
                "name": "Code Ocean",
                "url": "https://codeocean.com"
            },
            {
                "name": "Allen Institute for Brain Science",
                "url": "https://alleninstitute.org"
            },
            {
                "name": "Open Knowledge Foundation",
                "url": "https://okfn.org"
            },
            {
                "name": "Open Science Framweork",
                "url": "https://osf.io"
            },
            {
                "name": "Open Science Organization",
                "url": "https://oso.network"
            },
            {
                "name": "Center for Open Science",
                "url": "https://cos.io"
            },
        ],
        "resources": [
            {
                "name": "Open science (Wikipedia)",
                "url": "https://en.wikipedia.org/wiki/Open_science"
            },
            {
                "name": "Public Access Policy (National Institute of Health)",
                "url": "https://publicaccess.nih.gov/"
            }
        ],
        "nodeType": "frontier"
    }
};

const infrastructure = {
    "data": {
        "id": "open science infrastructure",
        "parent": openScience.data.id,
        "description": "The infrastructure school is founded on the assumption that 'efficient' research depends on the availability of tools and applications. Therefore, the goal of the school is to promote the creation of openly available platforms, tools, and services for scientists.",
        "projects": [
            {
                "name": "Open Science Grid",
                "url": "https://opensciencegrid.org/"
            }
        ],
        "nodeType": "frontier"
    }
}

export default [
    openScience,
    infrastructure,
    { "data": { "source": "open data", "target": infrastructure.data.id, "id": "open_science" }, "group": "edges" },
    { "data": { "source": "decentralised infrastructure", "target": infrastructure.data.id, "id": "open_science" }, "group": "edges" },
];