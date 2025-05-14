# Get Started

Follow the steps below to install and use the Pieces for JetBrains Plugin.

## JetBrains Prerequisites

Before you begin, make sure you have:

PiecesOS: The core engine that powers all Pieces extensions. Learn more about PiecesOS.

Any JetBrains IDE: The Pieces for JetBrains Plugin works with any of the official JetBrains IDEs, so make sure you’ve got one installed.

You must have PiecesOS to use the Pieces for JetBrains Plugin. We also recommend downloading the Pieces for Developers Desktop App.

## Installing the Pieces for JetBrains Plugin

You can install the Pieces for JetBrains plugin through the JetBrains Marketplace or by searching for Pieces in the plugins search of your IDE.



Once you've installed the plugin, you can use Pieces without restarting your IDE.

PiecesOS is required for the Pieces for JetBrains Plugin to work.

If you haven’t installed it yet, click the buttons to download PiecesOS via the recommended method, or follow the alternative steps below.

macOS 13.0 (Ventura) or higher

macOS 13.0 (Ventura) or higher

Windows 10 (20H0) or higher required

Ubuntu 22.04+ required.

Run these commands in order to install and properly set up the Pieces Desktop App and it’s core dependencies:

sudo snap install pieces-os

sudo snap connect pieces-os:process-control :process-control

Then, type pieces-os to launch the application directly from your terminal.

Click here for alternative PiecesOS installation methods, or install the PiecesOS and the Pieces Desktop App together for Windows, macOS, and Linux.

For enhanced security and better system integration, we recommend installing the appinstaller package over the InnoSetup (.exe) installer. The appinstaller package operates in a containerized environment, providing additional security benefits.

## Updating

The Pieces for JetBrains Plugin will automatically update when a new version is available.

When the plugin updates, a small success message will appear in the bottom right-hand corner of your JetBrains IDE.

Update notifications cover updates for both the Pieces for JetBrains Plugin and PiecesOS.

You can also manually update the plugin by going to your Plugins window, locating the Pieces for JetBrains Plugin, and clicking the Update button.

## Pieces Cloud

Connecting to the Pieces Cloud is optional. However, it provides additional features like data backups, shareable links, and more. You can enjoy the main functionalities of Pieces without an account.

Disconnecting from the Pieces Cloud logs you out of your Pieces account.

To disconnect from the Pieces Cloud:

Open the command palette in VS Code with ⌘+shift+p (macOS) or ctrl+shift+p (Windows/Linux)

Enter Disconnect from Pieces Cloud and choose the option

If you’re not signed into Pieces Cloud - this option will not be available. You will see Connect to Pieces Cloud.



## Onboarding

The Pieces for JetBrains plugin features an interactive walkthrough that shows all the steps in one panel. This onboarding page teaches you how to save, view, and use saved materials, and how to get the most out of the Pieces for JetBrains plugin.

If you don’t have PiecesOS installed, the Pieces for JetBrains plugin onboarding will require you to install it before completing the onboarding steps.

Click Save Your First Material, and Pieces will automatically open the Pieces Drive to save a sample snippet, showing you how it all works.

You'll see that snippet right away in the Saved Materials list. This shows how Pieces captures items and keeps them organized for easy reuse.



Click View Your Saved Materials, and Pieces Drive will open to your Saved Materials, showing any snippets you saved earlier along with the new snippet.

Click Open Your Copilot to open the Pieces Copilot side panel, as shown in the screenshots. In the Pieces Copilot, you'll find suggested prompts, options to set context from folders or files, and quick links to your saved materials.

Once you open the Copilot, the onboarding step is complete. You're ready to ask questions about your code, document it, debugging, or refactor a selected material—all within the JetBrains interface.

Click Ask Copilot about Your Material, and Pieces will add the new snippet to the Copilot chat with the sample prompt “What does this code do?”. Press Enter to send your snippet to the Copilot, and you'll receive an explanation or suggestions about the snippet.



Click Pieces Documentation to access our complete guide, which includes advanced tips, setup instructions, and best practices. Select View All Steps to revisit any onboarding step whenever you like.



If you need extra support, you can find helpful resources here.

## Uninstalling

To uninstall the Pieces for JetBrains Plugin, go to the Settings icon in the top left, Plugins > Installed, find the Pieces plugin, and click the uninstall button in the dropdown menu.

To access the uninstall option, click the dropdown menu and select the chevron to display the uninstall button.

You'll need to restart the JetBrains IDE for Pieces to be completely uninstalled.

