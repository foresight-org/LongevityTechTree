---
name: node
about: Add a new node to the tech tree.
title: "[node] my node name"
labels: node
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

**id**: node name,
**parent id**: parent node name,
**description**: node description,

**history**:
- 1970 - the beginning of time
- 2022 - present day

**projects**:
- first project
- second project

**resources**:
- academic paper
- blogpost

**nodeType**: core/application/challenge/frontier
