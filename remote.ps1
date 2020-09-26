# Install all dependencies
# yarn install --modules-folder ../../../JHA.Server/dist/node_modules;
# npm install;

# Install node-windows globally
npm install -g node-windows;

# Traverse to Dist and link to node-windows
npm link node-windows;

# Run Node as Windows service
node service.js;