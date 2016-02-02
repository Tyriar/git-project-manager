// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "git-project-manager" is now active!');
	
	var projectManager = require('./gitProjectManager');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	var disposable = vscode.commands.registerCommand('gitProjectManager.openProject', function () {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user       		
        projectManager.showProjectList();
		
	});
    
	var refreshDisposable = vscode.commands.registerCommand('gitProjectManager.refreshProjects', function () {
        projectManager.refreshList();	
	});    
	
	context.subscriptions.push(disposable, refreshDisposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;