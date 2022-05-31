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
                "id": "In Vivo Measurement of Glycation Crosslinks"
			},
			"style": {
				"background-color": "#168253"
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
                "id": "Matrisome"
            },
            "group": "nodes"
        },
        {
            "data": {
                "id": "Control ECM Turnover Throughout Body"
            },
			"style": {
				"background-color": "#168253"
			},
			"position": {
			"x": 200,
			"y": 200
			},
            "group": "nodes"
        },
        {
            "data": {
                "id": "Produce Young ECM"
            },
			"style": {
				"background-color": "#168253"
			},
            "group": "nodes"
        },
        {
            "data": {
                "id": "Control Inflammation Signaling"
            },
			"style": {
				"background-color": "#168253"
			},
            "group": "nodes"
        },
		{
            "data": {
                "id": "Cancer"
            },
			"style": {
				"background-color": "#FFFF38"
			},
            "group": "nodes"
        },
		{
            "data": {
                "id": "Loss of Identity"
            },
			"style": {
				"background-color": "#FFFF38"
			},
            "group": "nodes"
        },
		{
            "data": {
                "id": "Stem Cell Exhaustion"
            },
			"style": {
				"background-color": "#FFFF38"
			},
            "group": "nodes"
        },
		{
            "data": {
                "id": "Diet"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Plasma Rich Platelets"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Pneumonia"
            },
			"style": {
				"background-color": "#FFFF38"
			},
            "group": "nodes"
        },
		{
            "data": {
                "id": "Glycation"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Cell-Attached ECM"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Independent ECM"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Glycation Crosslink Breakers"
            },
			"style": {
				"background-color": "#168253"
			},
            "group": "nodes"
        },
		{
            "data": {
                "id": "Small Molecules for ECM Homeostasis"
            },
			"style": {
				"background-color": "#168253"
			},
            "group": "nodes"
        },
		{
            "data": {
                "id": "Carbamylation"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Tail-Tendon Breakage Assay"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Loss of Mitochondrial Homeostasis"
            },
			"style": {
				"background-color": "#FFFF38"
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
                "id": "Collagen Replacement Therapy"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Collagen Induction Therapy"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Collagen Supplements"
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
                "id": "Loss of Collagen Production"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Calcification"
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
                "id": "Elastin",
				"parent": "Matrisome"
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
                "id": "ROS"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Arthritis"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Advanced Glycation Endproducts"
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
                "id": "Collagen",
				"parent": "Matrisome"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Laminins",
				"parent": "Matrisome"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Glycoproteins",
				"parent": "Matrisome"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Fibronectin",
				"parent": "Matrisome"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Integrin",
				"parent": "Matrisome"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Discoidin Domain Receptors",
				"parent": "Matrisome"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Fibrosis"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Loss of Mechanotransduction"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Crosslinking"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Liver Failure"
            },
			"style": {
				"background-color": "#FFFF38"
			},
            "group": "nodes"
        },
		{
            "data": {
                "id": "Lung Failure"
            },
			"style": {
				"background-color": "#FFFF38"
			},
            "group": "nodes"
        },
		{
            "data": {
                "id": "Heart Failure"
            },
			"style": {
				"background-color": "#FFFF38"
			},
            "group": "nodes"
        },
		{
            "data": {
                "id": "Stiffening ECM"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Circadian Rhythm"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Loss of Proteolysis"
            },
			"style": {
				"background-color": "#FFFF38"
			},
            "group": "nodes"
        },
		{
            "data": {
                "id": "Protein Aggregates"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Proteolysis"
            },
            "group": "nodes"
        },
		{
            "data": {
                "id": "Control Downstream Signaling"
            },
			"style": {
				"background-color": "#168253"
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
                "source": "Circadian Rhythm",
                "target": "Collagen",
                "id": "circ_col" 
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
                "source": "Loss of Mechanotransduction",
                "target": "Cancer",
                "id": "canc" 
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Matrisome",
                "target": "Cell-Attached ECM",
                "id": "cellat" 
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Matrisome",
                "target": "Independent ECM",
                "id": "indat" 
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Cell-Attached ECM",
                "target": "Small Molecules for ECM Homeostasis",
                "id": "homeo" 
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Independent ECM",
                "target": "Glycation Crosslink Breakers",
                "id": "break" 
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Loss of Mechanotransduction",
                "target": "Loss of Identity",
                "id": "ident" 
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Loss of Mechanotransduction",
                "target": "Stem Cell Exhaustion",
                "id": "exhaust" 
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Loss of Mechanotransduction",
                "target": "Loss of Mitochondrial Homeostasis",
                "id": "homeo2" 
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
		{
            "data": {
                "source": "Control Inflammation Signaling",
                "target": "Inflammation",
                "id": "inflame",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Produce Young ECM",
                "target": "Matrisome",
                "id": "matrione",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Fibrosis",
                "target": "Liver Failure",
                "id": "fibliver",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Fibrosis",
                "target": "Lung Failure",
                "id": "fiblung",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Fibrosis",
                "target": "Heart Failure",
                "id": "fibheart",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "ROS",
                "target": "Loss of Collagen Production",
                "id": "colloss",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Advanced Glycation Endproducts",
                "target": "Crosslinking",
                "id": "crossed",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Matrisome",
                "target": "Arthritis",
                "id": "arth",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Plasma Rich Platelets",
                "target": "Arthritis",
                "id": "prp",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Calcification",
                "target": "Matrisome",
                "id": "calcify",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Loss of Proteolysis",
                "target": "Proteolysis",
                "id": "proteone",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Proteolysis",
                "target": "Protein Aggregates",
                "id": "agg",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Protein Aggregates",
                "target": "Matrisome",
                "id": "promat",
                "description": ""				
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Pneumonia",
                "target": "Bacterial Elastase",
                "id": "pneumon",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Matrix Metalloproteinases",
                "target": "Matrisome",
                "id": "matrix",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Matrix Metalloproteinases",
                "target": "Fibrosis",
                "id": "matrixx",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Crosslinking",
                "target": "Stiffening ECM",
                "id": "cross",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Diet",
                "target": "Glycation",
                "id": "glyc",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Glycation",
                "target": "Carbamylation",
                "id": "carba",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Carbamylation",
                "target": "Advanced Glycation Endproducts",
                "id": "AGEs",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Stiffening ECM",
                "target": "Matrisome",
                "id": "stiff",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Matrisome",
                "target": "Loss of Mechanotransduction",
                "id": "loss",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "In Vivo Measurement of Glycation Crosslinks",
                "target": "Crosslinking",
                "id": "meas",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Collagen Replacement Therapy",
                "target": "Collagen",
                "id": "collo",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Collagen Supplements",
                "target": "Collagen",
                "id": "collo2",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Collagen Induction Therapy",
                "target": "Collagen",
                "id": "collo3",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Discoidin Domain Receptors",
                "target": "Fibrosis",
                "id": "fibro",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Collagen",
                "target": "Fibrosis",
                "id": "fibro2",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Tail-Tendon Breakage Assay",
                "target": "Crosslinking",
                "id": "cross2",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Discoidin Domain Receptors",
                "target": "Control Downstream Signaling",
                "id": "disco",
                "description": ""
            },
            "group": "edges"
        },
		{
            "data": {
                "source": "Integrin",
                "target": "Control Downstream Signaling",
                "id": "inte",
                "description": ""
            },
            "group": "edges"
        },
    ]
    .map(node => parseNode(node));

export default nodes;
