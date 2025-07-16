import * as vscode from "vscode";

export function showSimpleWebview(context: vscode.ExtensionContext) {
  const panel = vscode.window.createWebviewPanel(
    "pqliteWebview",
    "Simple Webview",
    vscode.ViewColumn.One,
    {}
  );

  panel.webview.html = `<!DOCTYPE html>
    <html>
    <body>
      <h1>Hello from PQLite!</h1>
      <p>This is a simple webview</p>
    </body>
    </html>`;
}
