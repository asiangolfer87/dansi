const vscode = require("vscode");
const fs = require("fs");
const nrs = require("./templates");

const fileCreator = async (type,  filePath) => {
  const name = await vscode.window.showInputBox({
    value: "",
  });

  if (!name) {
    vscode.window.showErrorMessage(
      "Please Enter a component name with extension"
    );
    return;
  }
  const fileName = name.split(".")[0];
  const root = vscode.workspace.workspaceFolders[0].uri;
  const path = vscode.Uri.joinPath(root, filePath, name);
  const fileExists = fs.existsSync(path.path);
  if (fileExists) {
    vscode.window.showErrorMessage("File already exists");
    return;
  } else {
    await vscode.workspace.fs.writeFile(path, Buffer.from(nrs[type](fileName)));
    vscode.commands.executeCommand("vscode.open", path);
  }
};

module.exports = fileCreator;
