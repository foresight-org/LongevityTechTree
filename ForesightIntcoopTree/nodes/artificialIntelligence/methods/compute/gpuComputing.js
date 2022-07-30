const gpuComputing = {
    "data": {
        "id": "GPU computing",
        "parent": "compute",
        "description": "General purpose computing on graphics processing units is the use of a graphics processing unit to perform computation in applications traditionally handled by the central processing unit.",
        "history": [
            "1987 - Conways Game of Life became first example of general purpose computing",
            "~2001 - More popularity through programmable shaders and floating point support on graphics processors",
            "2005 - First common scientific program runs faster on GPU’s",
        ],
        "projects": [
            {
                "name": "NVIDIA Artificial Intelligence Computing Leadership from NVIDIA",
                "url": "https://www.nvidia.com/en-us/"
            },
            {
                "name": "AMD www.amd.com/en",
                "url": "https://www.amd.com/en"
            },
            {
                "name": "Intel Intel | Data Center Solutions, IoT, and PC Innovation",
                "url": "https://www.intel.com/content/www/us/en/homepage.html"
            },
            {
                "name": "EVGA www.evga.com/",
                "url": "https://www.evga.com/"
            },
            {
                "name": "Sapphire SAPPHIRE Technology Limited",
                "url": "https://www.sapphiretech.com/de-de"
            },
        ],
        "labs": [
            {
                "name": "CHTC UW Research Computing",
                "url": "https://chtc.cs.wisc.edu/uw-research-computing/gpu-lab.html"
            },
            {
                "name": "Princeton Research Computing GPU Computing",
                "url": "https://researchcomputing.princeton.edu/support/knowledge-base/gpu-computing"
            },
            {
                "name": "Make Programming Simple Lab GPU Computing",
                "url": "https://labs.engineering.asu.edu/mps-lab/research-themes/accelerated-computing/gpuc/"
            },
            {
                "name": "Irish Centre for High-end Computing GPU Research & Development",
                "url": "https://www.ichec.ie/about/activities/novel-technologies/many-core-rd/gpu-research-development"
            },
            {
                "name": "NVIDIA GPU Research Center Higher Education and Research",
                "url": "https://developer.nvidia.com/higher-education-and-research"
            },
        ],
        "people": [
            "Jensen Huang",
            "Chris Malachowsky",
        ],
        "involvement": [
            {
                "name": "GPU hackathon GPU Hackathons and Bootcamps | GPU Hackathon",
                "url": "https://www.gpuhackathons.org/"
            },
            {
                "name": "Build your own on GPU computing based computerHow to build the perfect Deep Learning Computer and save thousands of dollars | by Jeff Chen | Mission.org | Medium",
                "url": "https://medium.com/the-mission/how-to-build-the-perfect-deep-learning-computer-and-save-thousands-of-dollars-9ec3b2eb4ce2"
            },
            {
                "name": "GPU grant program for scientific research projects and prospective startups GPU Grant Program for Research Projects and Startups",
                "url": "https://hostkey.com/about-us/grants-for-scientific-projects-and-startups/"
            },
            {
                "name": "Use a GPU cloud provider for machine learning How to use NVIDIA GPUs for Machine Learning with the new Data Science PC from Maingear | by Déborah Mesquita | Towards Data Science",
                "url": "https://towardsdatascience.com/how-to-use-gpus-for-machine-learning-with-the-new-nvidia-data-science-workstation-64ef37460fa0"
            },
            {
                "name": "NVIDIA fellowship Graduate Fellows & Fellowship Opportunities | NVIDIA Research",
                "url": "https://www.nvidia.com/en-us/research/graduate-fellowships/"
            },
        ],
        "resources": [],
        "nodeType": "core",
    }
};

const gpu_cv = {
    "data": {
        "source": gpuComputing.data.id,
        "target": "Computer vision",
        "id": "gpu_cv"
    }
};

export default [
    gpuComputing,
    gpu_cv
];