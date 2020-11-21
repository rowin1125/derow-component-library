const fs = require('fs');
const path = require('path');
const packageJson = require('../../package.json');

const distDirectory = path.join(__dirname, '../../dist');

function createReadmePackageJson() {
  fs.copyFileSync(
    path.join(__dirname, 'README_PACKAGE.md'),
    path.join(distDirectory, 'README.md')
  );
  fs.writeFileSync(
    path.join(distDirectory, 'package.json'),
    JSON.stringify(
      {
        name: packageJson.name,
        description: packageJson.description,
        version: packageJson.version,
        author: packageJson.author,
        license: packageJson.license,
        repository: packageJson.repository,
        main: packageJson.main,
        typings: packageJson.typings,
        keywords: packageJson.keywords,
        dependencies: packageJson.dependencies,
        peerDependencies: packageJson.peerDependencies
      },
      null,
      2
    )
  );
}

createReadmePackageJson();
