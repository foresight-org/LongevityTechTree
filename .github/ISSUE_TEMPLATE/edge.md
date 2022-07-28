---
name: edge
about: Add a new edge between two nodes.
title: "[edge] my edge name"
labels: 'edge'
assignees: foresight-tech-tree
body:
  - type: dropdown
    id: treename
    attributes:
      label: Which tree will this change be applied to?
      multiple: false
      options:
        - Longevity
        - Intelligent Cooperation
        - NanoTech
        - NeuroTech
        - SpaceTech

---

**id**: "edge id",
**label**: "edge label",
**source**: "source node id"
**target**: "target node id"
