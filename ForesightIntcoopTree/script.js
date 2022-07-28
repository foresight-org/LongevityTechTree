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
  const nodeStyles = {
    "core": { "color": "lightgreen" },
    "frontier": { "color": "#FFF380" },
    "application": { "color": "lightskyblue" },
    "challenge": { "color": "palevioletred" },
  };

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

  function getWidth(node) {
    /**
    Calculate the width of a node given its text label `node.data(id)`
    */

    // Create element with attributes needed to calculate text size
    const ctx = document.createElement('canvas').getContext("2d");
    const fStyle = node.pstyle('font-style').strValue;
    const size = node.pstyle('font-size').pfValue + 'px';
    const family = node.pstyle('font-family').strValue;
    const weight = node.pstyle('font-weight').strValue;
    ctx.font = fStyle + ' ' + weight + ' ' + size + ' ' + family;

    // For multiple lines, evaluate the width of the largest line
    const lines = node.data('id').split('\n')
    const lengths = lines.map(a => a.length);
    const max_line = lengths.indexOf(Math.max(...lengths));

    // User-defined padding
    const padding = 30

    return ctx.measureText(lines[max_line]).width + padding;
  }

  function getColor(node) {
    var nodeType = node.data('nodeType');
    if (nodeType) {
      return nodeStyles[nodeType].color
    } else {
      return "grey"
    }
  }

  var cy = window.cy = cytoscape({
    container: document.getElementById('cy'),

    ready: function () {
      this.layout({
        name: 'fcose',
        randomize: false,
        fit: false,
        animate: false,
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
        undoable: false
      });
      api.collapseAll();
    },
    style: [
      {
        selector: 'node',
        style: {
          'label': 'data(id)',
          'font-family': 'Courier New',
          'background-color': getColor,
          'text-wrap': 'wrap',
          'text-max-width': '500px',
          'text-halign': "center",
          'text-valign': "center",
          "shape": "round-rectangle",
          'width': getWidth
        }
      },
      {
        selector: ':parent',
        style: {
          'background-opacity': 0.333,
          "shape": "round-rectangle"
        }
      },

      {
        selector: "node.cy-expand-collapse-collapsed-node",
        style: {
          "shape": "round-rectangle"
        }
      },
      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#696969',
          'curve-style': 'taxi',
          'target-arrow-shape': 'triangle',
          'target-arrow-color': '#696969'
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

  cy.on('dblclick', 'node', function (evt) {
    document.getElementById('node-title').innerHTML = this.id();
    if (this.data('description')) {
      document.getElementById('node-description').innerHTML = this.data('description')
    }
    if (this.data('history')) {
      document.getElementById('node-history').innerHTML = this.data('history')
    }
    if (this.data('projects')) {
      document.getElementById('node-projects').innerHTML = this.data('projects')
    }
    if (this.data('labs')) {
      document.getElementById('node-labs').innerHTML = this.data('labs')
    }
    if (this.data('people')) {
      document.getElementById('node-people').innerHTML = this.data('people')
    }
    if (this.data('involvement')) {
      document.getElementById('node-involvement').innerHTML = this.data('involvement')
    }
    if (this.data('resources')) {
      document.getElementById('node-resources').innerHTML = this.data('resources')
    }
    UIkit.offcanvas('#offcanvas-overlay').show();
  });

  document.getElementById("collapseAll").addEventListener("click", function () {
    api.collapseAll();
  });

  document.getElementById("expandAll").addEventListener("click", function () {
    api.expandAll();
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

