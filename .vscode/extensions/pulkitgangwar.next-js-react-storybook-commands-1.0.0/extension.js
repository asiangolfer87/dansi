const vscode = require("vscode");
const fileCreator = require("./utils/fileCreator");

function activate(context) {
  const createComponentInSrc = vscode.commands.registerCommand(
    "nrs.createComponentInSrc",
    async () => {
      // creates src directory and appends component directory and appends file component directory.
      fileCreator("component", "/src/components/");
    }
  );

  const createComponent = vscode.commands.registerCommand(
    "nrs.createComponent",
    async () => {
      // creates component directory and appends file to it.
      fileCreator("component", "/components/");
    }
  );

  const createPageInSrc = vscode.commands.registerCommand(
    "nrs.createPageInSrc",
    async () => {
      // create pages directory in src directory and appends file to it.
      fileCreator("page", "/src/pages/");
    }
  );

  const createPage = vscode.commands.registerCommand(
    "nrs.createPage",
    async () => {
      // creates page and appends file to it.
      fileCreator("page", "/pages/");
    }
  );

  const createStorybookComponentInSrc = vscode.commands.registerCommand(
    "nrs.createStorybookComponentInSrc",
    async () => {
      // creates storybook directory  in src directory and appends stories in it.
      fileCreator("story", "/src/stories/");
    }
  );

  const createStorybookComponent = vscode.commands.registerCommand(
    "nrs.createStorybookComponent",
    async () => {
      // creates storybook directory and appends stories to it.
      fileCreator("story", "/stories/");
    }
  );

  const subscriptions = [
    createComponent,
    createComponentInSrc,
    createPage,
    createPageInSrc,
    createStorybookComponent,
    createStorybookComponentInSrc,
  ];

  context.subscriptions.push(...subscriptions);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
