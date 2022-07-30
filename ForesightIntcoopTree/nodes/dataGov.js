import dataAnalysis from "./dataGov/dataAnalysis.js";
import dataMining from "./dataGov/dataMining.js";
import datasets from "./dataGov/datasets.js";
import dataStorage from "./dataGov/dataStorage.js";

const openData = {
    "data": {
        "id": "open data",
        "parent": "decentralised data governance",
        "description": "Data which is openly accessible, exploitable and shared by anyone for any purpose.",
        "history": [
            "1942 - Robert King Merton explained importance that result of research should be open",
            "1995 - Term open data appeared first time",
            "2007 - While meeting of thirty thinkers aim to define concept of open public data ",
            "2009 - Nobel prize to Elinor Orstrom who showed the specificity of information commons",
        ],
        "projects": [
            {
                "name": "GitHub: Where the world builds software · GitHub",
                "url": "https://github.com/"
            },
            {
                "name": "Alphabet",
                "url": "https://abc.xyz/"
            },
            {
                "name": "Kaggle: Your Machine Learning and Data Science Community",
                "url": "https://www.kaggle.com/"
            },
            {
                "name": "dev.socrata.com/",
                "url": "https://dev.socrata.com/"
            },
        ],
        "labs": [
            {
                "name": "LinkedScience",
                "url": "http://linkedscience.org/data",
            },
            {
                "name": "www.systemanaturae.org/",
                "url": "https://www.systemanaturae.org/"
            },
            {
                "name": "The Dataverse Project - Dataverse.org",
                "url": "https://dataverse.org/"
            },
            {
                "name": "The Human Genome Project",
                "url": "https://www.genome.gov/human-genome-project"
            },
            {
                "name": "Open Government - Data.gov",
                "url": "https://data.gov/open-gov/"
            },
        ],
        "people": [
            {
                "name": "Max Roser – Researcher, Founder Our World in Data",
                "url": "https://www.maxroser.com/"
            },
            {
                "name": "Jimmy Wales | Free knowledge for free minds",
                "url": "https://jimmywales.com/)"
            },
            {
                "name": "Tim Berners-Lee",
                "url": "https://www.w3.org/People/Berners-Lee/"
            },
        ],
        "involvement": [
            {
                "name": "Where can you contribute to open data? Yes, you! – Lost Boy",
                "url": "https://blog.ldodds.com/2017/05/25/where-can-you-contribute-to-open-data-yes-you/"
            },
            {
                "name": "Starting an open data Initiative | Data",
                "url": "http://opendatatoolkit.worldbank.org/en/starting.html"        
            },
        ],
        "resources": [
            {
                "name": "The State of Open Data 2021",
                "url": "https://digitalscience.figshare.com/articles/report/The_State_of_Open_Data_2021/17061347"
            }
        ],
        "nodeType": "core"
    }
};


const dataAvail = {
    "data": {
        "id": "data availability",
        "parent": "decentralised data governance",
        "projects": [
            {
                "name": "Celestia",
                "url": "https://celestia.org/"
            },
            {
                "name": "Polygon Avail",
                "url": "https://polygon.technology/solutions/polygon-avail/"
            },
            {
                "name": "zkPorter",
                "url": "https://zkporter.io/#/"
            }
        ],
        "nodeType": "core"
    },
};

const dataCuration = {
    "data": {
        "id": "data curation",
        "parent": "decentralised data governance",
        "projects": [
            {
                "name": "4TU.ResearchData",
                "url": "https://data.4tu.nl/info/en/"
            }
        ],
        "nodeType": "core"
    },
}

const datasets_deeplearning = {
    "data": {
        "source": "Datasets",
        "target": "deep learning",
        "id": "datasets_deeplearning"
    },
    "group": "edges"
}

export default [
    openData,
    dataAvail,
    dataCuration,
    {
        "data": {
            "source": "open data",
            "target": "decentralised data governance",
            "id": "opendata_sov" 
        },
        "group": "edges"
    },
    datasets_deeplearning
].concat(dataAnalysis)
    .concat(dataMining)
    .concat(datasets)
    .concat(dataStorage)
    .flat();
