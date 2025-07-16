import * as vscode from "vscode";

export function showFruitWebview(
  context: vscode.ExtensionContext,
  fruitName: string
) {
  const panel = vscode.window.createWebviewPanel(
    "pqliteFruitWebview",
    `${fruitName} Info`,
    vscode.ViewColumn.One,
    {}
  );

  panel.webview.html = `<!DOCTYPE html>
  <html>
  <body>
    <h1>${fruitName} Details</h1>
    <button id="colorBtn">Show Color</button>
    <script>
      const vscode = acquireVsCodeApi();
      document.getElementById('colorBtn').addEventListener('click', () => {
        vscode.postMessage({
          command: 'showColor',
          fruit: '${fruitName}'
        });
      });
    </script>
  </body>
  </html>`;

  // Handle messages from webview
  panel.webview.onDidReceiveMessage(
    (message) => {
      if (message.command === "showColor") {
        vscode.window.showInformationMessage(
          `${message.fruit} color: Example color`
        );
      }
    },
    undefined,
    context.subscriptions
  );
}
