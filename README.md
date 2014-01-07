snap-files
==========

Snap File management plugin

# SNAP Plugin Boilerplate

## Getting started

```
cd <snap_directory>
npm install git+https://github.com/puppetmaster/snap-files.git
cat >> "config/`hostname`.yaml" <<EOF
plugins:
  - path: 'snap-files'
    options:
      dummyFlag: True
EOF
grunt run
vi node_modules/snap-files/index.js
