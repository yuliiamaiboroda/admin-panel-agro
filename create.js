const fs = require('fs').promises;
const path = require('path');

const createComponent = async componentName => {
  try {
    const currentPath = path.join(__dirname, './src/components');
    const newFolderPath = currentPath + '/' + componentName;
    await fs.mkdir(newFolderPath);
    await fs.writeFile(
      newFolderPath + '/index.js',
      `export { default } from "./${componentName}";\n`
    );
    await fs.writeFile(
      newFolderPath + `/${componentName}.js`,
      `export default function ${componentName}() {
      return <h1>This is ${componentName}</h1>
    }`
    );
    await fs.writeFile(newFolderPath + `/${componentName}.styled.jsx`, '');
    console.log('Component created successfully');
  } catch (error) {
    console.log(error);
  }
};

// const components = [
//   "TweetsGallery",
//   "TweetsItem",
//   "FilterSelector",
//   "LoadMoreButton",
// ];

// components.forEach(createComponent);

createComponent('Button');
