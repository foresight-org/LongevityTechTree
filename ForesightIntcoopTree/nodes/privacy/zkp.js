const zkp = {
    "data": {
        "id": "zero-knowledge proofs",
        "parent": "private computation",
        "nodeType": "core",
    }
};

const recursive = {
    "data": {
        "id": "recursive SNARKs",
        "parent": zkp.data.id,
        "description": "A protocol in which each SNARK proof can verify a previous instance of a SNARK proof.",
        "projects": [
            {
                "name": "Halo 2",
                "url": "https://zcash.github.io/halo2/"
            },
            {
                "name": "plonky2",
                "url": "https://github.com/mir-protocol/plonky2"
            },
            {
                "name": "Nova",
                "url": "https://github.com/microsoft/Nova"
            },
        ],
        "nodeType": "core",
    },
};

const ivc = {
    "data": {
        "id": "incrementally verifiable computation (IVC)",
        "parent": "private computation",
        "description": "An efficient verifiable computation that can be verified at any intermediate point in the computation. The proof at each step is generated efficiently by updating the previous proof, without recomputing the entire proof from scratch.",
        "resources": [
            {
                "name": "Incrementally Verifiable Computation or Proofs of Knowledge Imply Time/Space Efficiency",
                "url": "https://link.springer.com/chapter/10.1007/978-3-540-78524-8_1"
            }
        ]
    }
}

const pcd = {
    "data": {
        "id": "proof-carrying data (PCD)",
        "parent": "private computation",
    }
}

const zkvm = {
    "data": {
        "id": "zero-knowledge virtual machines",
        "parent": "private computation",
        "description": "The encoding of a virtual machine (state transition function) in a zero-knowledge circuit. This enables any general-purpose program which can be compiled down to a reduced instruction set, to be verifiably computed in a zero-knowledge proof.",
        "projects": [
            {
                "name": "Risc Zero",
                "url": "https://www.risczero.com/"
            },
            {
                "name": "Polygon Miden (Miden VM)",
                "url": "https://polygon.technology/solutions/polygon-miden/"
            },
            {
                "name": "Starkware (Cairo VM)",
                "url": "https://starkware.co/tech-stack/"
            }
        ],
        "nodeType": "application",
    }
};

const setMembership = {
    "data": {
        "id": "zero-knowledge set membership",
        "parent": "private computation",
        "description": "A scheme to prove inclusion in a set, without revealing which member of the set it is.",
        "projects": [
            {
                "name": "Semaphore",
                "url": "https://github.com/semaphore-protocol/semaphore/"
            }
        ],
        "nodeType": "application",
    }
};

export default [
    zkp,
    recursive,
    zkvm,
    setMembership,
    ivc,
    pcd,
    { "data": { "source": zkp.data.id, "target": recursive.data.id, "id": "zkp_recursive" }, "group": "edges" },
    { "data": { "source": recursive.data.id, "target": ivc.data.id, "id": "rec_ivc" }, "group": "edges" },
    { "data": { "source": recursive.data.id, "target": pcd.data.id, "id": "rec_pcd" }, "group": "edges" },
    { "data": { "source": zkp.data.id, "target": zkvm.data.id, "id": "zkp_zkvm" }, "group": "edges" },
    { "data": { "source": zkp.data.id, "target": setMembership.data.id, "id": "zkp_setmembership" }, "group": "edges" },
    { "data": { "source": setMembership.data.id, "target": "anti-collusion", "id": "zkp_anticollusion" }, "group": "edges" },
];