const quantumComputing = {
    "data": {
        "id": "Quantum computing",
        "parent": "compute",
        "description": "Performs calculations via properties of quantum states, such as superposition, interference, and entanglement, to perform calculations.",
        "history": [
            "1980 - Paul Benioff proposed quantum mechanical model of the Turing machine.",
            "1994 - Peter Shor developed quantum algorithm for finding prime factors of an integer.",
            "1998 - Isaac Chuang, Neil Gershenfeld and Mark Kubinec created two-qubit quantum computer that could perform computations.",
            "2019 - Google AI and NASA claiming to have performed quantum computation that was infeasible on any classical computer (gets still researched if claim is valid or not)",
        ],
        "projects": [
            {
                "name": "Google Quantum",
                "url": "https://quantumai.google/"
            },
            {
                "name": "IQM",
                "url": "https://www.meetiqm.com/"
            },
            {
                "name": "IBM Quantum Computing | IBM Research",
                "url": "https://research.ibm.com/quantum-computing"
            },
            {
                "name": "D-Wave SystemsD-Wave Systems | The Practical Quantum Computing Company",
                "url": "https://www.dwavesys.com/"
            },
            {
                "name": "QCI Quantum Circuits, Inc.",
                "url": "https://quantumcircuits.com/"
            },
        ],
        "labs": [
            {
                "name": "Oxford Quantum Oxford Quantum",
                "url": "http://oxfordquantum.org/"
            },
            {
                "name": "Institute for quantum computing Waterloo Home | Institute for Quantum Computing | University of Waterloo",
                "url": "https://uwaterloo.ca/institute-for-quantum-computing/"
            },
            {
                "name": "Center for Theoretical Physics MIT Center for Theoretical Physics » MIT Physics",
                "url": "https://physics.mit.edu/research/labs-centers/center-for-theoretical-physics/"
            },
            {
                "name": "Centre Quantum Technologies CQT | Centre for Quantum Technologies",
                "url": "https://www.quantumlah.org/"
            },
            {
                "name": "QAR LAB Quantencomputing-Forschung: Paper und Abschlussarbeiten am QAR-Lab",
                "url": "https://qarlab.de/en/research/"
            },
        ],
        "people": [
            {
                "name": "Jan Goetz",
                "url": "twitter.com/jangoetz6"
            },
            {
                "name": "John M. Martinis | Martinis Group - Home",
                "url": "http://web.physics.ucsb.edu/~martinisgroup/"
            },
            {
                "name": "Irfan Siddiqi | UC Berkeley Physics",
                "url": "https://physics.berkeley.edu/people/faculty/irfan-siddiqi"
            },
            {
                "name": "Andreas Walraff | Quantum Device Lab",
                "url": "https://qudev.phys.ethz.ch/"
            },
            {
                "name": "Amir Yacoby | Yacoby Lab Spin Qubits",
                "url": "http://yacoby.physics.harvard.edu/yacoby_spinqubits.html"
            },
        ],
        "involvement": [
            {
                "name": "contribute to Qiskit Qiskit · GitHub",
                "url": "https://github.com/Qiskit/"
            },
            {
                "name": "List of projects Unitary Fund",
                "url": "https://unitary.fund/ideas.html"
            },
            {
                "name": "Donate Unitary Fund",
                "url": "https://unitary.fund/donate.html"
            },
            {
                "name": "List of projects Google Summer of Code 2020 · qutip/qutip Wiki · GitHub",
                "url": "https://github.com/qutip/qutip/wiki/Google-Summer-of-Code-2020"
            },
        ],
        "resources": [
            {
                "name": "List of people Who are the top professors working on Quantum Computation? - Quora",
                "url": "https://www.quora.com/Who-are-the-top-professors-working-on-Quantum-Computation"
            },
            {
                "name": "Tips for getting involved The Hitchhiking Cat’s Guide to Getting a Job in Quantum Computing | by Jay Gambetta | Qiskit | Medium",
                "url": "https://medium.com/qiskit/the-hitchhiking-cats-guide-to-getting-a-job-in-quantum-computing-da7e3bb9ff64"
            },
        ],
        "nodeType": "frontier",
    }
};

const qc_bio = {
    "data": {
        "source": quantumComputing.data.id,
        "target": "bioinformatics",
        "id": "qc_bio"
    }
};

export default [
    quantumComputing,
    qc_bio
];