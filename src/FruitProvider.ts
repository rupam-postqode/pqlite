import * as vscode from "vscode";

export class FruitItem extends vscode.TreeItem {
  //   constructor(public readonly name: string) {
  //     super(name, vscode.TreeItemCollapsibleState.None);
  //   }

  constructor(public readonly name: string) {
    super(name, vscode.TreeItemCollapsibleState.None);
    this.command = {
      command: "pqlite.fruitClick",
      title: "Select Fruit",
      arguments: [name],
    };
  }
}

export class FruitProvider implements vscode.TreeDataProvider<FruitItem> {
  getTreeItem(element: FruitItem): vscode.TreeItem {
    return element;
  }

  getChildren(): Thenable<FruitItem[]> {
    return Promise.resolve([
      new FruitItem("🍎 Apple"),
      new FruitItem("🍌 Banana"),
      new FruitItem("🍊 Orange"),
    ]);
  }
}
