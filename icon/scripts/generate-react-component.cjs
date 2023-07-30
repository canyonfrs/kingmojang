const fs = require("fs");
const path = require("path");
const { transform } = require("@svgr/core");

const svgDir = path.join(__dirname, "../svg");
const svgs = fs.readdirSync(svgDir).filter((file) => {
  return file.endsWith(".svg");
});

console.log("Generating index.ts file...");

svgs.forEach(async (svg) => {
  const svgName = svg.split(".")[0];
  const componentName = svgName
    .replace(/^[a-z]/, (ch) => ch.toUpperCase())
    .replace(/_[a-z]/g, (ch) => ch[1].toUpperCase());
  const svgCode = fs.readFileSync(path.join(svgDir, svg), "utf8");
  const reactDir = path.join(__dirname, "../react");
  const jsCode = await transform(
    svgCode,
    {
      plugins: [
        "@svgr/plugin-svgo",
        "@svgr/plugin-jsx",
        "@svgr/plugin-prettier",
      ],
      prettierConfig: {
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        semi: true,
      },
      svgoConfig: {
        plugins: [
          {
            name: "addAttributesToSVGElement",
            params: {
              attributes: [{ "data-kingmojang-icon": true }],
            },
          },
        ],
      },
      typescript: true,
      dimensions: false,
    },
    { componentName: componentName },
  );
  fs.writeFileSync(path.join(reactDir, `${componentName}.tsx`), jsCode);
});

console.log("Done!");
