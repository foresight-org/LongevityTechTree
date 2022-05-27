function makeList(strings) {
    return strings.reduce((result, str) => result + "• " + str + "<br/>", "");
}

function parseLink(obj) {
    return "<a target=_blank href=" + obj.url + ">" + obj.name + "</a>"
}

function parseNode(node) {
    if (!node.data) {
        console.log(node)
    }
    if (node.data.description) {
        return {
            "data": {
                "id": node.data.id,
                "parent": node.data.parent,
                "description": node.data.description,
                "history": makeList(node.data.history),
                "companies": makeList(node.data.companies.map(parseLink)),
                "labs": makeList(node.data.labs.map(parseLink)),
                "people": makeList(node.data.people.map(parseLink)),
                "involvement": makeList(node.data.involvement.map(parseLink)),
                "resources": makeList(node.data.resources.map(parseLink)),
            },
            "group": "nodes"
        };
    } else {
        return node;
    }
}

const nodes = [
 		{
            "data": {
                "id": "in vivo measurement of glycation crosslinks"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Bacterial Elastase"
            },
            "group": "nodes"
        },
        {
            "data": {
                "id": "Control ECM Turnover Throughout Body"
            },
            "group": "nodes"
        },
        {
            "data": {
                "id": "Produce Young ECM"
            },
            "group": "nodes"
        },
        {
            "data": {
                "id": "Control Inflammation Signaling"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Inflammation"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "TGF-B"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Loss of collagen production"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Matrix Metalloproteinases"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Elastin"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "UV Damage"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Loss of Collagen Production"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "ROS"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Senescence"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Elastase"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Collagen"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Laminins"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Glycoproteins"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Fibronectin"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Integrin"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Discoidin Domain Receptors"
            },
            "group": "nodes"
        },
        {
            "data": {
                "source": "Bacterial Elastase",
                "target": "Elastin",
                "id": "bact_elast" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "Elastase",
                "target": "Elastin",
                "id": "elast_elast" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "Inflammation",
                "target": "TGF-B",
                "id": "inf_tgf" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "TGF-B",
                "target": "Collagen",
                "id": "tgf_col" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "Control ECM Turnover Throughout Body",
                "target": "Elastin",
                "id": "ai_dec" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "Senescence",
                "target": "Matrix Metalloproteinases",
                "id": "ai_priv" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "UV Damage",
                "target": "ROS",
                "id": "UV_ROS",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Loss of Collagen Production",
                "target": "Collagen",
                "id": "coll",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "ROS",
                "target": "Matrix Metalloproteinases",
                "id": "ROS_Matrix",
                "description": ""
            },
            "group": "edges"
        },
    ]
    .map(node => parseNode(node));

export default nodes;
