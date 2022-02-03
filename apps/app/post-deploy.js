const packageJsonPath = "./package.json";
const packageJson = require(packageJsonPath);
const fs = require("fs-extra");

(async () => {
    await fs.remove('./private-utils');
    packageJson.dependencies["@wyxmono/private-utils"] = "file:../../packages/private-utils";
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
})();
