# Get Started

Follow the steps below to install and use the Pieces for VS Code Extension.

## Prerequisites

Before installation, you'll need:

PiecesOS: The main engine that powers Pieces for VS Code functionality. Learn more about PiecesOS.

VS Code: Visual Studio Code should already be installed on your development machine.

PiecesOS must be installed to enable the Pieces for VS Code Extension. For enhanced functionality, we also recommend the Pieces for Developers Desktop App.

## Setting Up PiecesOS

To use the Pieces for VS Code Extension, you must install PiecesOS on your operating system.

Follow the specific setup steps below:

macOS 13.0 (Ventura) or higher

macOS 13.0 (Ventura) or higher

Windows 10 (20H0) or higher required

Ubuntu 22.04+ required.

Run these commands in order to install and properly set up the Pieces Desktop App and it’s core dependencies:

sudo snap install pieces-os

sudo snap connect pieces-os:process-control :process-control

Then, type pieces-os to launch the application directly from your terminal.

Click here for alternative PiecesOS installation methods, or install the PiecesOS and the Pieces Desktop App together for Windows, macOS, and Linux.

## Installation



Alternatively, download the .VSIX installer from the VS Code Marketplace and install it manually.

Restart VS Code after installing the extension to complete the setup.

Enable Pieces Tool Windows by going to View, then Tool Windows, and enable whichever Pieces Windows that best suit your workflow

The Pieces for VS Code Extension will automatically update when a new version is available.

The Auto Update setting is enabled by default.

Connecting to the Pieces Cloud is optional. However, it provides additional features like data backups, shareable links, and more. You can enjoy the main functionalities of Pieces without an account.



Disconnecting from the Pieces Cloud logs you out of your Pieces account.

To disconnect from the Pieces Cloud:

Open the command palette in VS Code with ⌘+shift+p (macOS) or ctrl+shift+p (Windows/Linux)

Enter Pieces: Disconnect from Pieces Cloud and choose the option



## Onboarding

The Pieces for VS Code extension includes an interactive walkthrough that shows the different steps in one panel. This onboarding page will teach you how to save, view, and use saved materials and fully utilize Pieces for Visual Studio Code.

When you click Save Your First Material, Pieces automatically opens the Pieces Drive and stores a sample snippet to show you how everything works.

You’ll see that snippet immediately in the Saved Materials list, giving you a quick demonstration of how Pieces captures items and organizes themes.



By clicking View Your Saved Materials, Pieces Drive will open up to your Saved Materials—showing you any saved snippets you had before and the newly generated saved snippet.

Clicking Open Your Copilot triggers the Pieces Copilot side panel, as shown in the screenshots. In the Pieces Copilot, you’ll find suggested prompts, options to set context from folders or files, and quick links to your saved materials.

Once you open the Copilot, the onboarding step is marked as complete. You're ready to ask questions about your code, document it, or refactor a selected material—all within the VS Code interface.

When you click Ask Copilot about Your Material, Pieces automatically adds the newly saved snippet to the Copilot chat with a sample prompt (like “What does this code do?”). Press Enter to send your snippet to the Copilot, and you’ll immediately receive an explanation or suggested improvements.



Clicking Pieces Documentation opens our guide with advanced tips, setup instructions, and best practices. Choosing View All Steps lets you revisit any onboarding step at any time.

The right side includes extra resources and helpful videos, including community channels and tutorials, to help you master Pieces and maintain a smooth development flow.



If you need extra support, you can find helpful resources here.

## Uninstallation

To uninstall the Pieces for VS Code Extension, press ⌘+shift+x (macOS) or ctrl+shift+x (Windows/Linux) to open the extensions tab. Then, search for the Pieces for VS Code extension and click Uninstall.

Restart your VS Code IDE after removing the extension to complete the uninstallation process.

