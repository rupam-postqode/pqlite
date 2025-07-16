import * as vscode from "vscode";

export class FruitItem extends vscode.TreeItem {
  constructor(public readonly name: string) {
    super(name, vscode.TreeItemCollapsibleState.None);
    this.command = {
      command: "pqlite.showFruitWebview",
      title: "Show Fruit",
      arguments: [name],
    };
  }
}

class FruitCategory extends vscode.TreeItem {
  constructor(public readonly name: string) {
    super(name, vscode.TreeItemCollapsibleState.Collapsed);
  }
}

export class FruitProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
  // 1. Add event emitter for tree refresh
  private _onDidChangeTreeData = new vscode.EventEmitter<
    vscode.TreeItem | undefined | null
  >();
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

  // 2. Add refresh method
  refresh(): void {
    this._onDidChangeTreeData.fire(undefined);
  }

  // 3. Implement required getTreeItem method
  getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
    return element;
  }

  // 4. Fix getChildren implementation
  getChildren(element?: vscode.TreeItem): Thenable<vscode.TreeItem[]> {
    if (!element) {
      // Root items
      return Promise.resolve([
        new FruitCategory("Tropical Fruits"),
        new FruitCategory("Berry Fruits"),
      ]);
    } else if (element instanceof FruitCategory) {
      // Return children for categories
      if (element.name === "Tropical Fruits") {
        return Promise.resolve([
          new FruitItem("🍍 Pineapple"),
          new FruitItem("🥭 Mango"),
        ]);
      } else if (element.name === "Berry Fruits") {
        return Promise.resolve([
          new FruitItem("🍓 Strawberry"),
          new FruitItem("🫐 Blueberry"),
        ]);
      }
    }
    // Return empty array for leaf nodes
    return Promise.resolve([]);
  }
}
