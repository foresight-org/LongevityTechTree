const languageModels = {
    "data": {
        "id": "Language Models",
        "parent": "algorithms & architectures",
        "description": "Probability distribution over sequences of words.",
        "history": [
            "2001 - First neural language model",
            "2008 - Multi-task learning ",
            "2013 - Word embeddings",
            "2014 - Sequence to sequence models",
            "2015 - Memory based networks",
            "2018 - Pretrained language models",
        ],
        "projects": [
            {
                "name": "AI21 Labs",
                "url": "https://www.ai21.com/"
            },
            {
                "name": "Natural Language Processing | CloudFactory",
                "url": "https://info.cloudfactory.com/natural-language-processing"
            },
            {
                "name": "OpenAI Blog",
                "url": "https://openai.com/blog/"
            },
            {
                "name": "ALEPH ALPHA",
                "url": "https://www.aleph-alpha.com/"
            },
        ],
        "labs": [
            {
                "name": "EleutherAI",
                "url": "https://www.eleuther.ai/"
            },
            {
                "name": "www.baai.ac.cn/",
                "url": "https://www.baai.ac.cn"
            },
        ],
        "people": [
            {
                "name": "Johannes Hage",
                "url": "https://twitter.com/johannes_hage) "
            },
            {
                "name": "Connor Leahy",
                "url": "https://twitter.com/npcollapse)"
            },
            {
                "name": "Jonas Andrulis",
                "url": "https://www.linkedin.com/in/jonasandrulis)"
            },
            {
                "name": "Dario Amodei",
                "url": "https://www.linkedin.com/in/dario-amodei-3934934/)"
            },
            {
                "name": "Zhilin Yang | Carnegie Mellon University",
                "url": "https://kimiyoung.github.io/)         "
            },
        ],
        "involvement": [
            {
                "name": "A curated list of resources dedicated to Natural Language Processing (NLP)",
                "url": "https://github.com/keon/awesome-nlp"
            },
            {
                "name": "Explore use cases of language models like GPT-3",
                "url": "https://gpt3demo.com/"
            },
            {
                "name": "Write With Transformer",
                "url": "https://transformer.huggingface.co/"
            },
        ],
        "resources": [
            {
                "name": "GitHub - karpathy/minGPT: A minimal PyTorch re-implementation of the OpenAI GPT (Generative Pretrained Transformer) training",
                "url": "https://github.com/karpathy/minGPT"
            },
        ],
        "nodeType": "core",
    }
};

const lang_nlp = {
    "data": {
        "source": languageModels.data.id,
        "target": "Natural language processing (NLP)",
        "id": "lang_nlp" 
    }
};


export default [
    languageModels,
    lang_nlp
];