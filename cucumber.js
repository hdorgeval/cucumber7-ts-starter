module.exports = {
  default:
    'features/**/*.feature --require env/set-environment-variables.ts --require world/custom-world.ts --require step-definitions/**/*.ts --require hooks/**/*.ts  --require-module ts-node/register --format-options \'{"snippetInterface": "async-await"}\' --publish-quiet',
};
