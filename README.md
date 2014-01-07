# SNAP Plugin Boilerplate

## Getting started

```
cd <snap_directory>
npm install git+https://github.com/Bornholm/snap-plugin-boilerplate.git
cat >> "config/`hostname`.yaml" <<EOF
plugins:
  - path: 'snap-plugin-boilerplate'
    options:
      dummyFlag: True
EOF
grunt run
vi node_modules/snap-plugin-boilerplate/index.js
```
