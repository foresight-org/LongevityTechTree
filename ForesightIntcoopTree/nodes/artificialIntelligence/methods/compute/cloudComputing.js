const cloudComputing = {
    "data": {
        "id": "Cloud computing",
        "parent": "compute",
        "description": "On demand computing power without directive management of the computing source. Machine learning demands a lot of power which a single person with one computer is often not able to bring up.",
        "history": [
            "1960 - Initial concepts of time sharing came up",
            "1977 - Cloud symbol represents networks of computing equipment",
            "1993 - Term cloud was used to refer to platforms for distributed computing",
        ],
        "projects": [
            {
                "name": "H2O AI Cloud | H2O.ai",
                "url": "https://h2o.ai/platform/ai-cloud/"
            },
            {
                "name": "Vast.ai",
                "url": "https://vast.ai/console/create/"
            },
            {
                "name": "GPU servers rental for deep learning | LeaderGPU",
                "url": "https://www.leadergpu.com/"
            },
            {
                "name": "About | Lambda",
                "url": "https://lambdalabs.com/about"
            },
            {
                "name": "Paperspace Console",
                "url": "https://console.paperspace.com/signup?R=ZKGRZB5"
            },
        ],
        "labs": [
            {
                "name": "Microsoft Cloud Computing Research Centre",
                "url": "http://www.mccrc.org/"
            },
            {
                "name": "Welcome | NSF Cloud & Autonomic Computing Center (CAC)",
                "url": "https://nsfcac.org/"
            },
            {
                "name": "About | Princeton Research Computing",
                "url": "https://researchcomputing.princeton.edu/about"
            },
            {
                "name": "Research Laboratories | College of Engineering and Computing",
                "url": "https://cec.georgiasouthern.edu/research-initiatives/research-labs/"
            },
            {
                "name": "HPCC lab",
                "url": "http://hpcclab.org/"
            },
        ],
        "people": [
            {
                "name": "Dillon Erb, CEO Paperspace",
                "url": "https://www.linkedin.com/in/dillonerb/"
            },
            {
                "name": "About | Enter the Singularity Jakob Cannell, CEO Vast.ai",
                "url": "https://entersingularity.wordpress.com/about/"
            },
            {
                "name": "Stephen Balaban, CEO Lambda",
                "url": "https://www.linkedin.com/in/sbalaban/"
            },
            {
                "name": "Sri Ambati, CEO H2O",
                "url": "https://www.linkedin.com/in/srisatishambati/"
            },
            {
                "name": "Nicolas Chaparro, CEO Genesis Cloud",
                "url": "https://www.linkedin.com/in/nicolaschaparro/?originalSubdomain=de"
            },
            {
                "name": "Vishnu Subramanian, CEO Jarvislabs",
                "url": "https://www.linkedin.com/in/vishnusubramanian/"
            },
        ],
        "involvement": [
            {
                "name": "Careers | Vast.ai is hiring CUDA/C++ programmers",
                "url": "https://vast.ai/gesys_gpupro/"
            },
            {
                "name": "Elite Cloud Engineer Program Cloud computing bootcamp",
                "url": "https://qwasar.io/tech-talent-programs/devops-and-cloud-engineer-program/"
            },
            {
                "name": "Vast.ai host your computer GPU power",
                "url": "https://vast.ai/console/host/setup/"
            },
        ],
        "resources": [],
        "nodeType": "core",
    }
};

const cloud_data = {
    "data": {
        "source": cloudComputing.data.id,
        "target": "Data Analysis",
        "id": "cloud_data"
    }
};

export default [
    cloudComputing,
    cloud_data
];