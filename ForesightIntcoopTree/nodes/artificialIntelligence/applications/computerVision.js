const computerVision = {
    "data": {
        "id": "Computer vision",
        "parent": "applications",
        "description": "Deals with how computers can gain high level understanding from digital images or videos.",
        "history": [
            "1960 - Start at universities",
            "1970s - formed the early foundations of many computer vision algorithms which exist today",
            "1990s - changes through increased interactions between the fields of computer graphics and computer vision",
        ],
        "projects": [
            {
                "name": "Anduril | Military use",
                "url": "https://www.anduril.com/"
            },
            {
                "name": "Metropolis | Mobile commerce and parking",
                "url": "https://metropolis.io/"
            },
            {
                "name": "Miso Robotics | Robotics focus on restaurant industry",
                "url": "https://misorobotics.com/"
            },
            {
                "name": "gita store - Piaggio Fast Forward, Following robots",
                "url": "https://shop.piaggiofastforward.com/?_ga=2.63624109.309326748.1648511687-11106.1648511687"
            },
            {
                "name": "Viso Suite | Platform for building computer vision platforms without code",
                "url": "https://viso.ai/"
            },
        ],
        "labs": [
            {
                "name": "MIT CSAIL Computer Vision Research Group",
                "url": "https://groups.csail.mit.edu/vision/welcome/"
            },
            {
                "name": "CI2CV Computer Vision Lab",
                "url": "https://ci2cv.net"
            },
            {
                "name": "Computational Vision: [Home]",
                "url": "http://www.vision.caltech.edu"
            },
            {
                "name": "UCLA Vision Lab",
                "url": "http://vision.ucla.edu"
            },
            {
                "name": "Computer Vision and Learning Lab Heidelberg",
                "url": "https://hci.iwr.uni-heidelberg.de/vislearn/"
            },
        ],
        "people": [
            {
                "name": "Andrew Zisserman",
                "url": "www.robots.ox.ac.uk/~az/"
            },
            {
                "name": "Computational Perception & Cognition, Aude Oliva",
                "url": "http://olivalab.mit.edu/audeoliva.html"
            },
            {
                "name": "Alex Krizhevsky",
                "url": "https://www.cs.toronto.edu/~kriz/"
            },
            {
                "name": "Pushmeet Kohli",
                "url": "https://sites.google.com/site/pushmeet/"
            },
            {
                "name": "Takeo Kanade - The Robotics Institute Carnegie Mellon University",
                "url": "https://www.ri.cmu.edu/ri-faculty/takeo-kanade/"
            },
        ],
        "involvement": [
            {
                "name": "AIcrowd | AI Blitz XIII | Challenges, Do these five computer challenges",
                "url": "https://www.aicrowd.com/challenges/ai-blitz-xiii"
            },
            {
                "name": "Tips On Getting Started With Computer Vision In Your Business, Implement computer vision in your business",
                "url": "https://www.forbes.com/sites/forbestechcouncil/2022/03/02/tips-on-getting-started-with-computer-vision-in-your-business/?sh=2ae195636976"
            },
        ],
        "resources": [
            {
                "name": "A curated list of awesome computer vision resources, comprehensive list of projects",
                "url": "https://github.com/jbhuang0604/awesome-computer-vision"
            }
        ],
        "nodeType": "core",
    }
}

const cv_agi = {
    "data": {
        "source": computerVision.data.id,
        "target": "Artificial General Intelligence",
        "id": "cv_agi"
    }
};

export default [
    computerVision,
    cv_agi
];