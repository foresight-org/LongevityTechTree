const nlp = {
    "data": {
        "id": "Natural language processing (NLP)",
        "parent": "applications",
        "description": "Concerned with interactions between computers and human language.",
        "history": [
            "1954 - Automatic translation of more than sixty Russian sentences into English",
            "60s ‒ Further development of notable natural language processing systems ELIZA & SHRDLU",
            "70s - Many programmers wrote conceptual ontologies",
            "80s - Hey-day of symbolic methods in NLP",
            "1990s - 2010s - Introduction of machine learning algorithms for language processing",
        ],
        "projects": [
            {
                "name": "Aigo.ai – Enterprise Chatbot with a Brain | Chatbot",
                "url": "https://aigo.ai/"
            },
            {
                "name": "Verbit: Professional AI-Based Transcription & Captioning Services | Transcription",
                "url": "https://verbit.ai/"
            },
            {
                "name": "Augmented Voice Intelligence for Contact Centers | Skit.ai | Augmented voice",
                "url": "https://skit.ai/"
            },
            {
                "name": "Home - PrimerAI | Text organisation",
                "url": "https://primer.ai/"
            },
            {
                "name": "Top 42 Startups in the Natural Language Processing Industry | Customer service",
                "url": "https://www.failory.com/startups/natural-language-processing#toc-2-primer"
            },
        ],
        "labs": [
            {
                "name": "Research Groups | Institute for Natural Language Processing | University of Stuttgart",
                "url": "https://www.ims.uni-stuttgart.de/en/institute/researchgroups/"
            },
            {
                "name": "The Berkeley NLP Group",
                "url": "http://nlp.cs.berkeley.edu/"
            },
            {
                "name": "UCL Machine Reading",
                "url": "https://mr.cs.ucl.ac.uk/"
            },
            {
                "name": "The Stanford Natural Language Processing Group",
                "url": "https://nlp.stanford.edu/"
            },
            {
                "name": "Computer Laboratory – Natural Language and Information Processing Research Group: NLIP Group",
                "url": "https://www.cl.cam.ac.uk/research/nl/"
            },
        ],
        "people": [
            {
                "name": "Peter Voss",
                "url": "https://www.linkedin.com/in/vosspeter"
            },
            {
                "name": "Christopher Manning’s Profile | Stanford Profiles",
                "url": "https://profiles.stanford.edu/chris-manning"
            },
            {
                "name": "Sebastian Ruder",
                "url": "https://ruder.io/"
            },
            {
                "name": "Dr. Rachael Tatman",
                "url": "https://www.rctatman.com/"
            },
            {
                "name": "Richard Socher",
                "url": "https://www.socher.org/"
            },
        ],
        "involvement": [
            {
                "name": "Explore use cases of language models like GPT-3",
                "url": "https://gpt3demo.com/"
            },
            {
                "name": "Write With Transformer, Start writing with language models",
                "url": "https://transformer.huggingface.co/"
            },
        ],
        "resources": [
            {
                "name": "GitHub - keon/awesome-nlp: A curated list of resources dedicated to Natural Language Processing (NLP)",
                "url": "https://github.com/keon/awesome-nlp"
            },
        ],
        "nodeType": "core",
    }
}

const nlp_agi = {
    "data": {
        "source": nlp.data.id,
        "target": "Artificial General Intelligence",
        "id": "nlp_agi"
    }
};

export default [
    nlp,
    nlp_agi
];