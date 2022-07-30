const dnaComputing = {
    "data": {
        "id": "DNA computing",
        "parent": "compute",
        "description": "Information is represented and gets computed this way by using the genetic alphabet ACGT. Is mostly used for memory storage.",
        "history": [
            "1994 - Leonard Adleman solved first algorithmic problem with DNA computing",
            "1995 - Eric Baum proposes DNA computing as memory system",
        ],
        "projects": [
            {
                "name": "CATALOG",
                "url": "https://www.catalogdna.com/"
            },
            {
                "name": "Evonetix",
                "url": "https://www.evonetix.com/"
            },
            {
                "name": "Molecular Assemblies",
                "url": "https://molecularassemblies.com/"
            },
            {
                "name": "TWIST Bioscience",
                "url": "https://www.twistbioscience.com"
            },
            {
                "name": "Helix Works",
                "url": "https://helix.works/"
            },
        ],
        "labs": [
            {
                "name": "The Qian Lab - Caltech",
                "url": "http://qianlab.caltech.edu/index.html"
            },
            {
                "name": "Center for Open Innovation in Connected Health DNA Computing: COPICOH",
                "url": "https://www.copicoh.uni-luebeck.de/en/research/projects/dna-computing.html"
            },
            {
                "name": "Hilbert Lab",
                "url": "http://hilbertlab.org/"
            },
            {
                "name": "Seelig lab",
                "url": "https://www.seeliglab.org/"
            },
            {
                "name": "Max Planck Institute for Molecular Genetics",
                "url": "https://www.molgen.mpg.de/2168/en"
            },
        ],
        "people": [
            {
                "name": "Thomas Hinze PD Dr.-Ing. habil. Thomas Hinze",
                "url": "https://users.fmi.uni-jena.de/~hinze/index-en.html"
            },
            {
                "name": "Lulu Qian Lulu Qian | Biology and Biological Engineering",
                "url": "https://www.bbe.caltech.edu/people/lulu-qian"
            },
            {
                "name": "Kevin Cherry www.linkedin.com/in/kevin cherry 55153135/",
                "url": "https://www.linkedin.com/in/kevin-cherry-55153135/"
            },
            {
                "name": "Leonard Adleman Leonard Adleman – Department of Computer Science, Department of Molecular Biology",
                "url": "https://adleman.usc.edu/"
            },
            {
                "name": "Erik Winfree www.dna.caltech.edu/~winfree/",
                "url": "https://www.dna.caltech.edu/~winfree/"
            },
        ],
        "involvement": [],
        "resources": [
            {
                "name": "DNA computing tutorial",
                "url": "www.youtube.com/watch?v=YBhWrHeIqDs",
            },
            {
                "name": "DNA computing library in development: Library to experiment with DNA Computing",
                "url": "https://github.com/AkashGutha/D-Compute"
            },
        ],
        "nodeType": "frontier",
    }
};

const dna_bio = {
    "data": {
        "source": dnaComputing.data.id,
        "target": "bioinformatics",
        "id": "dna_bio"
    }
};

export default [
    dnaComputing,
    dna_bio
];