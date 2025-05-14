# JupyterLab Extension

Learn more about the Pieces for JupyterLab Extension.



V2 Documentation for the Pieces for Developers JupyterLabs Extension is under construction.

In the meantime, you can look at the V1 documentation for the Pieces for JupyterLab Extension below.

## Pieces for JupyterLab

Learn how to install the Pieces for JupyterLab Extension via the PYPI Manager, Pip, and Conda.

This extension is compatible with JupyterLab 4.0.0 and higher, and is currently in beta.

Pieces For Developers captures no identifiable user data. Our local-only architecture means your data never has to leave your device.

PiecesOS must be downloaded and installed separately from the JupyterLab Extension to work correctly.

macOS 13.0 (Ventura) or higher

macOS 13.0 (Ventura) or higher

Windows 10 (20H0) or higher required

Ubuntu 22.04+ required.

Run these commands in order to install and properly set up the Pieces Desktop App and it’s core dependencies:

sudo snap install pieces-os

sudo snap connect pieces-os:process-control :process-control

Then, type pieces-os to launch the application directly from your terminal.

Click here for alternative PiecesOS installation methods, or install the PiecesOS and the Pieces Desktop App together for Windows, macOS, and Linux.

## Installation Instructions

To install the Pieces for JupyterLab extension, run this pip command in your terminal:

Make sure extensions are enabled. If you don’t know how to do this, click here for official Jupyter documentation on how to do so.

Be sure to accept the disclaimer before moving forward in this process.

## Features

Read some of the latest features you can find with in the Pieces for JupyterLab Extension below.

## Pieces Copilot

Pieces Copilot inside JupyterLab is your context-aware AI assistant, designed to help you work smarter with your notebooks.

Powered by qGPT and deeply integrated into the Pieces ecosystem, Copilot can answer questions specific to your code, suggest improvements, and provide real-time assistance—all based on the content of your notebook.

Whether you’re debugging, exploring new concepts, or documenting your workflow, Copilot helps you stay focused by delivering relevant insights without leaving your development environment.

Here’s how to use it:

Ensure PiecesOS is open and up to date.

Click the bot icon in the top slider of the JupyterLab Extension to open Pieces Copilot.

Interact with the Pieces Copilot to get answers related to your notebook.

Highlight code, right-click, and select Ask Copilot for context-aware help based on your selected code.

Enrich Selected Code allows you to instantly add helpful context to any piece of code within your Jupyter notebook.

Simply highlight a section of code, right-click, and choose the “Enrich with Description” option.

Pieces will generate a clear, concise explanation of what the code does—perfect for improving readability, onboarding collaborators, or creating better documentation. It’s a fast, easy way to make your notebooks more understandable and maintainable.

Changes in other Pieces tools (Desktop App, VS Code, etc.) reflect in JupyterLab automatically.

Any snippet you save, edit, or enrich in JupyterLab is instantly reflected in other Pieces integrations—like the Desktop App, VS Code, or JetBrains plugins—without any extra steps.

This seamless, bidirectional sync keeps your context up to date in real time, so you can move between environments without losing track of your work.

## Pieces Drive

Pieces Drive is a local, privacy-first storage system that powers the Pieces ecosystem.

It securely stores your code snippets, enrichments, and contextual data directly on your device—enabling lightning-fast access, offline functionality, and complete control over your development artifacts without relying on the cloud.

To save a snippet:

Highlight text, right-click, and choose “Save to Pieces.”

Use the Pieces button in a code block.

Use a dedicated keyboard shortcut.



Quickly access all of your saved snippets by opening the Pieces View from the Ribbon Menu in JupyterLab.

You can sort snippets by recency or language, and use the search bar to instantly locate the code you need—no more digging through old files.



Once you’ve saved a snippet, you can copy it directly from the Pieces View and paste it anywhere in your notebook.

You’ll also see rich metadata and syntax highlighting, making it easy to understand and reuse your code at a glance.



Sharing is simple with Pieces. Right-click any snippet or use the dedicated share button to generate a secure, shareable link.

Whether you’re collaborating with teammates or showing off a solution, you can distribute your code in just a click.

To share:

Highlight code, right-click, and select “Share via Pieces Link.”

Click the Share button within a code block or the Pieces View.

Or use a keyboard shortcut.



Pieces stores all your snippets for seamless sharing.

The Discover tab in the Pieces View automatically surfaces snippets Pieces has found in your project.

It’s a great way to jumpstart your library of reusable code without manually saving each snippet.



The Pieces JupyterLab Extension adds an embedded Save button directly inside your code cells, making it effortless to capture key snippets as you work.

With one click, you can save the contents of a cell to Pieces without interrupting your flow—perfect for preserving important functions, code patterns, or in-progress ideas for later use.



## Data Privacy, Security, and Offline-First Approach

We prioritize your privacy and offline usability in the same spirit as JupyterLab.

Privacy and Security—All data is stored locally, on your device.

On-Device ML—80%+ of ML runs locally, reducing server exposure.

Offline-First—Works fully offline, with strong functionality.

Opt-In Cloud: Optional cloud features—your data, your control.



## Configuration

You can personalize your experience with the Pieces for Developers JupyterLab Extension through the Pieces Settings menu.

This allows you to tailor how Pieces behaves to best fit your workflow:

Auto-open Snippet List View: Choose whether the Pieces View should automatically open when you save a new snippet—perfect for keeping your saved work front and center.

Cloud Capabilities: Toggle opt-in cloud features on or off. By default, Pieces is local-only, but you can enable cloud sync or sharing on a per-resource basis when needed.

Pieces Server Port: Manually configure the server port used by Pieces if you’re running a custom setup or need to resolve port conflicts.

Login/Logout of Pieces Cloud: Seamlessly sign in or out of your Pieces Cloud account to access synced snippets across devices or keep everything stored locally, depending on your preference.

## Troubleshooting

If the Pieces for Developers JupyterLab Extension isn’t working as expected, first check that Pieces OS is running—you should see the Pieces logo in your toolbar (macOS) or taskbar (Windows).

Make sure you have the latest versions of both the Pieces JupyterLab Extension and Pieces OS (v8.0.0 or higher), and that your JupyterLab version is 4.0.0 or above.

After updating, always restart JupyterLab to apply changes.

If problems persist, submit this support form.

All your Pieces data, including snippets, tags, embeddings, LTM-2 memory, settings, logs, and Pieces Copilot history, is securely stored in the com.pieces.os and com.pieces.pfd folders on your device.

This gives you full control over backups, sharing, and privacy.



You can find your database and support logs at the path below for your specific platform.

macOS—~/Library/com.pieces.os/

Windows—C:\Users\<username>\Documents\com.pieces.os\

Linux—~/.local/share/com.pieces.os/

Don’t forget to switch username with our actual system username.

This dedicated On-Device Storage documentation provides more information about finding your logs, creating manual backups outside of the Pieces Desktop App, and opting in to cloud-only features.

Sharing Logs—Zip the latest 2–3 files from …/production/support/logs/ and attach them to your issue or DM.

Backup & Reset—Copy com.pieces.os to back up your database—or copy zip it, and rename it something other than production to reset your database.

Cloud Functionality—Nothing moves off-device unless you enable Personal Cloud or call a third-party model (e.g. OpenAI).