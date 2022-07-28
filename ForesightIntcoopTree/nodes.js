import artificialIntelligence from './nodes/artificialIntelligence.js';
import decentralisation from './nodes/decentralisation.js';
import privacy from './nodes/privacy.js';
import openData from './nodes/dataGov.js';

function makeList(strings) {
    return strings.reduce((result, str) => result + "• " + str + "<br/>", "");
}

function parseLink(obj) {
    return "<a target=_blank href=" + obj.url + ">" + obj.name + "</a>"
}

function parseNode(node) {
    // Node is an edge
    if (node.data.source) {
        return node;
    }

    let myNode = {};
    let data = {};
    data["id"] = node.data.id;

    if (node.data.parent) {
        data["parent"] = node.data.parent;
    }
    if (node.data.nodeType) {
        data["nodeType"] = node.data.nodeType;
    }
    if (node.data.description) {
        data["description"] = node.data.description;
    }
    if (node.data.history) {
        data["history"] = makeList(node.data.history);
    }
    if (node.data.projects) {
        data["projects"] = makeList(node.data.projects.map(parseLink));
    }
    if (node.data.labs) {
        data["labs"] = makeList(node.data.labs.map(parseLink));
    }
    if (node.data.people) {
        data["people"] = makeList(node.data.people.map(parseLink));
    }
    if (node.data.involvement) {
        data["involvement"] = makeList(node.data.involvement.map(parseLink));
    }
    if (node.data.resources) {
        data["resources"] = makeList(node.data.resources.map(parseLink));
    }

    myNode["data"] = data;
    myNode["group"] = "nodes";

    return myNode;
}

const nodes = artificialIntelligence
    .concat(decentralisation)
    .concat(privacy)
    .concat(openData)
    .flat()
    .concat(
        {
            "data": {
                "id": "decentralised artificial intelligence",
                "nodeType": "frontier"
            },
            "group": "nodes"
        },
        {
            "data": {
                "id": "private artificial intelligence",
                "nodeType": "frontier"
            },
            "group": "nodes"
        },
        {
            "data": {
                "id": "private decentralised computation",
                "nodeType": "frontier"
            },
            "group": "nodes"
        },
        {
            "data": {
                "id": "decentralised data governance",
                "nodeType": "challenge"
            },
            "group": "nodes"
        },
        {
            "data": {
                "source": "decentralised data governance",
                "target": "decentralised identity (DID)",
                "id": "sov_did" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "decentralised infrastructure",
                "target": "decentralised artificial intelligence",
                "id": "dec_ai" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "decentralised infrastructure",
                "target": "private decentralised computation",
                "id": "dec_priv" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "artificial intelligence",
                "target": "decentralised artificial intelligence",
                "id": "ai_dec" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "artificial intelligence",
                "target": "private artificial intelligence",
                "id": "ai_priv" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "private computation",
                "target": "private decentralised computation",
                "id": "priv_dec",
                "description": ""
            },
            "group": "edges"
        },
    )
    .map(node => parseNode(node));

export default nodes;
