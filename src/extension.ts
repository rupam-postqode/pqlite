import * as vscode from "vscode";
import { FruitItem, FruitProvider } from "./FruitProvider";
import { showSimpleWebview } from "./SimpleWebview";
import { showFruitWebview } from "./FruitWebview";

export function activate(context: vscode.ExtensionContext) {
  // fruit provider in primary side bar
  const fruitProvider = new FruitProvider();

  vscode.window.registerTreeDataProvider("pqlite-fruit-view", fruitProvider);

  const refreshCommand = vscode.commands.registerCommand(
    "pqlite.refreshFruits",
    () => {
      fruitProvider.refresh();
    }
  );

  const fruitCommand = "pqlite.fruitClick";

  const fruitCommandHandler = (fruit: FruitItem) => {
    vscode.window.showInformationMessage(`You clicked on: ${fruit}`);
  };

  const fruitCommandDisposable = vscode.commands.registerCommand(
    fruitCommand,
    fruitCommandHandler
  );

  context.subscriptions.push(fruitCommandDisposable, refreshCommand);

  // simple webview
  const webviewCommand = "pqlite.showSimpleWebview";

  const webviewCommandHandler = () => {
    showSimpleWebview(context);
  };

  const webviewCommandDisposable = vscode.commands.registerCommand(
    webviewCommand,
    webviewCommandHandler
  );

  context.subscriptions.push(webviewCommandDisposable);

  // fruit webview
  const showFruitWebviewCommand = "pqlite.showFruitWebview";

  const showFruitWebviewCommandHandler = (fruitName: string) => {
    showFruitWebview(context, fruitName);
  };

  const showFruitWebviewCommandDisposable = vscode.commands.registerCommand(
    showFruitWebviewCommand,
    showFruitWebviewCommandHandler
  );

  context.subscriptions.push(showFruitWebviewCommandDisposable);

  // hello world command
  const helloCommand = "pqlite.sayHello";

  const helloCommandHandler = (name: string = "world") => {
    console.log(`Hello ${name}!!!`);
  };

  const helloCommandDisposable = vscode.commands.registerCommand(
    helloCommand,
    helloCommandHandler
  );

  // hello markdown command
  const helloMarkdownCommand = "pqlite.helloMarkdown";

  const helloMarkdownCommandHandler = () => {
    vscode.window.showInformationMessage("Hello from the Markdown command!");
  };

  const helloMarkdownCommandDisposable = vscode.commands.registerCommand(
    helloMarkdownCommand,
    helloMarkdownCommandHandler
  );

  // hello python command
  const helloPythonCommand = "pqlite.helloPython";

  const helloPythonCommandHandler = () => {
    vscode.window.showInformationMessage("Hello from the Python command!");
  };

  const helloPythonCommandDisposable = vscode.commands.registerCommand(
    helloPythonCommand,
    helloPythonCommandHandler
  );

  // hello javascript command
  const helloJavaScriptCommand = "pqlite.helloJavaScript";

  const helloJavaScriptCommandHandler = () => {
    vscode.window.showInformationMessage("Hello from the JavaScript command!");
  };

  const helloJavaScriptCommandDisposable = vscode.commands.registerCommand(
    helloJavaScriptCommand,
    helloJavaScriptCommandHandler
  );

  // hello html command
  const helloHtmlCommand = "pqlite.helloHtml";

  const helloHtmlCommandHandler = () => {
    vscode.window.showInformationMessage("Hello from the HTML command!");
  };

  const helloHtmlCommandDisposable = vscode.commands.registerCommand(
    helloHtmlCommand,
    helloHtmlCommandHandler
  );

  // hello css command
  const helloCssCommand = "pqlite.helloCss";

  const helloCssCommandHandler = () => {
    vscode.window.showInformationMessage("Hello from the CSS command!");
  };

  const helloCssCommandDisposable = vscode.commands.registerCommand(
    helloCssCommand,
    helloCssCommandHandler
  );

  context.subscriptions.push(
    helloCommandDisposable,
    helloMarkdownCommandDisposable,
    helloPythonCommandDisposable,
    helloJavaScriptCommandDisposable,
    helloHtmlCommandDisposable,
    helloCssCommandDisposable
  );
}

export function deactivate() {}
