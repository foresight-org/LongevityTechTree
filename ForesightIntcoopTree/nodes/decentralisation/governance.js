const governance = {
    "data": {
        "id": "decentralised governance",
        "parent": "decentralised infrastructure",
        "description": "Protocols for collective decision-making by stakeholders and participants in a community.",
        "nodeType": "challenge",
    }
};

const voting = {
    "data": {
        "id": "decentralised voting",
        "parent": governance.data.id,
        "description": "A voting protocol that preserves the correctness and secrecy of votes without a central coordinating body.",
        "projects": [
            {
                "name": "Vocdoni",
                "url": "https://vocdoni.app/"
            },
            {
                "name": "Snapshot",
                "url": "https://snapshot.org/"
            },
        ],
        "nodeType": "application",
    }
}

const quadVoting = {
    "data": {
        "id": "quadratic voting",
        "parent": governance.data.id,
        "description": "Quadratic voting is a collective decision-making procedure which involves individuals allocating votes to express the degree of their preferences, rather than just the direction of their preferences.",
        "history": [
            "1960s/70s - Vickrey, Clarke, and Groves create the VCG Mechanism.",
            "1977 - Groves and Ledyard, Optimal Allocation of Public Goods: A Solution to the Free-Rider Problem (1977).",
            "2012 - Glen Weyl applies the convept to democratic politics and corporate governance, coining the phrase 'Quadratic Voting'."
        ],
        "resources": [
            {
                "name": "Plural Voting (RadicalxChange)",
                "url": "https://www.radicalxchange.org/concepts/plural-voting/"
            }
        ],
        "projects": [
            {
                "name": "Democracy Earth",
                "url": "https://democracy.earth/"
            },
        ],
        "nodeType": "core"
    }
};

const antiCollusion = {
    "data": {
        "id": "anti-collusion",
        "parent": governance.data.id,
        "description": "A protocol that prevents malicious users from buying votes.",
        "projects": [
            {
                "name": "Minimal Anti-Collusion Infrastructure (MACI)",
                "url": "https://github.com/privacy-scaling-explorations/maci"
            },
            {
                "name": "Clr.fund",
                "url": "https://clr.fund/#/"
            }
        ],
        "nodeType": "core",
    }
}

export default [
    governance,
    voting,
    antiCollusion,
    { "data": { "source": antiCollusion.data.id, "target": voting.data.id, "id": "anticollusion_voting" }, "group": "edges" },
    // { "data": { "source": voting.data.id, "target": quadVoting.data.id, "id": "voting_quad" }, "group": "edges" },
    { "data": { "source": voting.data.id, "target": "public goods funding", "id": "voting_pubgoods" }, "group": "edges" },
    // { "data": { "source": quadVoting.data.id, "target": "quadratic funding", "id": "qv_qf" }, "group": "edges" },
];