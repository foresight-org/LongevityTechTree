import nodes from './nodes.js';

function readTxtFile(file, cb) {
  const fileReader = new FileReader();
  fileReader.onload = () => {
    try {
      cb(fileReader.result);
    } catch (error) {
      console.error('Given file is not suitable.', error);
    }
  };
  fileReader.onerror = (error) => {
    console.error('File could not be read!', error);
    fileReader.abort();
  };
  fileReader.readAsText(file);
}

function activateAccordions() {
  const acc = document.getElementsByClassName("accordion");
  let i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}

function addParentNode(idSuffix, parent = undefined) {
  const id = 'c' + idSuffix;
  const parentNode = { data: { id: id } };
  cy.add(parentNode);
  cy.$('#' + id).move({ parent: parent });
  return id;
}


function main() {
  function setColor4CompoundEdge(e) {
    const collapsedEdges = e.data('collapsedEdges');
    if (doElemsMultiTypes(collapsedEdges)) {
      return '#b3b3b3';
    }
    return collapsedEdges[0].style('line-color')
  }

  function setTargetArrowShape(e) {
    const collapsedEdges = e.data('collapsedEdges');
    const shapes = {};
    for (let i = 0; i < collapsedEdges.length; i++) {
      shapes[collapsedEdges[0].style('target-arrow-shape')] = true;
    }
    delete shapes['none'];
    if (Object.keys(shapes).length < 1) {
      if (collapsedEdges.sources().length > 1) {
        return collapsedEdges[0].style('source-arrow-shape');
      }
      return 'none';
    }
    return Object.keys(shapes)[0];
  }

  function setSourceArrowShape(e) {
    const collapsedEdges = e.data('collapsedEdges');
    const shapes = {};
    for (let i = 0; i < collapsedEdges.length; i++) {
      shapes[collapsedEdges[0].style('source-arrow-shape')] = true;
    }
    delete shapes['none'];
    if (Object.keys(shapes).length < 1) {
      if (collapsedEdges.sources().length > 1) {
        return collapsedEdges[0].style('target-arrow-shape');
      }
      return 'none';
    }
    return Object.keys(shapes)[0];
  }

  function doElemsMultiTypes(elems) {
    const classDict = {};
    for (let i = 0; i < elems.length; i++) {
      classDict[elems[i].data('edgeType')] = true;
    }
    return Object.keys(classDict).length > 1;
  }

  var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),

    ready: function () {
      this.layout({
        name: 'fcose',
        randomize: false,
        fit: true,
        animate: false,
        fixedNodeConstraint: [
          {
            "nodeId": "Bacterial Elastase",
            "position": {
              "x": 2000,
              "y": 2000
            }
          },
          {
            "nodeId": "Control ECM Turnover Throughout Body",
            "position": {
              "x": 200,
              "y": 200
            }
          },
        ]
      }).run();
      var api = this.expandCollapse({
        layoutBy: {
          name: "fcose",
          animate: true,
          randomize: false,
          fit: true,
          avoidOverlap: true,
          avoidOverlapPadding: 1, // extra spacing around nodes when avoidOverlap: true
          nodeDimensionsIncludeLabels: true
        },
        fisheye: true,
        animate: true,
        undoable: true
      });
      //api.collapseAll();
    },
    style: [
      {
        selector: 'node',
        style: {
          'background-color': '#729FCF',
          'label': 'data(id)',
		  'shape': 'round-rectangle',
		  'width': 100,
		  'text-valign': 'center'
        }
      },
      {
        selector: ':parent',
        style: {
          'background-opacity': 0.333
        }
      },

      {
        selector: "node.cy-expand-collapse-collapsed-node",
        style: {
          "background-color": "darkblue",
          "shape": "rectangle"
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#9A9A9A',
          'curve-style': 'taxi',
          'target-arrow-shape': 'triangle',
          'target-arrow-color': '#9A9A9A'
        }
      },
      {
        selector: 'node:selected',
        style: {
          'overlay-color': "#6c757d",
          'overlay-opacity': 0.3,
          'background-color': "#999999"
        }
      },
      {
        selector: 'edge:selected',
        style: {
          'overlay-color': "#6c757d",
          'overlay-opacity': 0.3,
          'background-color': "#999999",
          'label': 'data(description)'
        }
      },
      {
        selector: 'edge.cy-expand-collapse-collapsed-edge',
        style:
        {
          "text-outline-color": "#ffffff",
          "text-outline-width": "2px",
          'label': (e) => {
            return '(' + e.data('collapsedEdges').length + ')';
          },
          'width': function (edge) {
            const n = edge.data('collapsedEdges').length;
            return (3 + Math.log2(n)) + 'px';
          },
          'line-style': 'dashed',
          'line-color': setColor4CompoundEdge.bind(this),
          'target-arrow-color': setColor4CompoundEdge.bind(this),
          'target-arrow-shape': setTargetArrowShape.bind(this),
          'source-arrow-shape': setSourceArrowShape.bind(this),
          'source-arrow-color': setColor4CompoundEdge.bind(this),
        }
      },
    ],

    elements: nodes
  });

  var api = cy.expandCollapse('get');
  var elements = null;

  cy.on('dblclick', 'node', function (evt) {
    document.getElementById('node-title').innerHTML = this.id();
    document.getElementById('node-description').innerHTML = this.data('description');
    document.getElementById('node-history').innerHTML = this.data('history');
    document.getElementById('node-companies').innerHTML = this.data('companies');
    document.getElementById('node-labs').innerHTML = this.data('labs');
    document.getElementById('node-people').innerHTML = this.data('people');
    document.getElementById('node-involvement').innerHTML = this.data('involvement');
    document.getElementById('node-resources').innerHTML = this.data('resources');
    UIkit.offcanvas('#offcanvas-overlay').show();
  });

  document.getElementById("collapseRecursively").addEventListener("click", function () {
    api.collapseRecursively(cy.$(":selected"));
  });

  document.getElementById("expandRecursively").addEventListener("click", function () {
    api.expandRecursively(cy.$(":selected"));
  });

  document.getElementById("collapseAll").addEventListener("click", function () {
    api.collapseAll();
  });

  document.getElementById("expandAll").addEventListener("click", function () {
    api.expandAll();
  });

  document.getElementById("graphml-input").addEventListener("change", function (evt) {
    //read graphML file
    let files = evt.target.files;
    let reader = new FileReader();
    let contents;
    reader.readAsText(files[0]);
    reader.onload = function (event) {
      contents = event.target.result;

      cy.startBatch();
      cy.elements().remove();
      cy.graphml({ layoutBy: 'preset' });
      cy.graphml(contents);
      cy.endBatch();

      cy.makeLayout({
        name: 'fcose',
        randomize: true,
        fit: true,
        animate: false
      }).run();

      //to be able to open the same file again
      document.getElementById("graphml-input").value = "";
    };

  });

  document.getElementById('saveAsJson').addEventListener('click', function () {
    api.saveJson(cy.$());
  });

  document.getElementById('loadFromJson').addEventListener('click', function () {
    const el = document.getElementById('load-from-inp');
    el.value = '';
    el.click();
  });

  document.getElementById('load-from-inp').addEventListener('change', function () {
    readTxtFile(this.files[0], function (txt) {
      cy.$().remove();
      api.loadJson(txt);
    })
  });

  document.getElementById('add-compound').addEventListener('click', function () {
    const elems = cy.nodes(':selected');
    if (elems.length < 1) {
      return;
    }
    const parent = elems[0].parent().id();
    for (let i = 1; i < elems.length; i++) {
      if (parent !== elems[i].parent().id()) {
        return;
      }
    }
    const id = new Date().getTime();
    addParentNode(id, parent);
    for (let i = 0; i < elems.length; i++) {
      elems[i].move({ parent: 'c' + id });
    }
  });

  document.getElementById('remove-compound').addEventListener('click', function () {
    const elems = cy.nodes(':selected').filter(':compound');
    if (elems.length < 1) {
      return;
    }
    for (let i = 0; i < elems.length; i++) {
      // expand if collapsed
      if (elems[i].hasClass('cy-expand-collapse-collapsed-node')) {
        api.expand(elems[i], { layoutBy: null, fisheye: false, animate: false });
      }
      const grandParent = elems[i].parent().id() ?? null;
      const children = elems[i].children();
      children.move({ parent: grandParent });
      cy.remove(elems[i]);
    }
  });

  activateAccordions();

  setTimeout(() => {
    document.getElementsByClassName('accordion')[1].click();
  }, 500);
}

document.addEventListener('DOMContentLoaded', main);

