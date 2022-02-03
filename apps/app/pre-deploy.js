const fs = require("fs-extra");

const packageJsonPath = "./package.json";
const packageJson = require(packageJsonPath);

(async () => {
    await fs.remove(`./private-utils`);
    await fs.copy(`../../packages/private-utils`, './private-utils');
    packageJson.dependencies["@wyxmono/private-utils"] = "file:./private-utils";
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
})();
