# Configuration

Read the guide below to configure the Pieces for Sublime Text Plugin to work efficiently in your workflow and adapt to your preferences.

## Supported LLMs

We constantly update and configure our plugins and extensions, like the Pieces for Sublime Text Plugin, to work with the latest LLMs.

## Opening Pieces Settings

To open Pieces settings inside of the Pieces for Sublime Text Plugin, you can use ⌘+shift+p (macOS) or ctrl+shift+p (Windows/Linux) to open the command palette.

Then, enter Pieces: Open Pieces Settings.



## Login / Logout

Use the Pieces: Login or Pieces: Logout command in your command palette to log in and out of your Pieces account.



## Configurable Settings

The Pieces for Sublime Text Plugin offers customizable settings to tailor your experience. These options let you configure the connection, language model, startup behavior, and code autocompletion. Here's an overview of the key settings:

host

Specifies the address where the plugin should connect to a local service or server.

model

Determines which large language model to use for all Pieces Pilot functionality.

syntax

Let’s you adjust your language extension.

auto_start_pieces_os

Lets you decide whether or not to open PiecesOS automatically on startup.

Copilot

Allows you to choose whether to open the Copilot in the browser or IDE.

auto_check_updates

Gives you the ability to enable or disable PiecesOS from auto updating.

snippet.autocomplete

Decide whether or not to enable auto-completion of code via suggest snippets from your repository.

To change settings, you need to copy and paste the contents of the default settings file into the empty window on the right side, which you can find below:

You can choose whether or not PiecesOS starts immediately on the launch of the Sublime text editor by setting the parameters to true or false.

Similarly, adjust the parameters to true or false to enable auto-completion of code via snippets to speed up your coding progress.

If you have Pieces snippets saved that are relevant to the code you're writing, you'll get automatic completion for that specific language.

To reload the plugin, enter the command palette with ⌘+shift+p (macOS) or ctrl+shift+p (Windows/Linux) and type Pieces: Reload Plugin.

For additional support resources, check out our troubleshooting guide.

## Saving Your Settings

Once you've copied the contents of the .JSON object and edited them to your preferences, simply save the file, reload the plugin, and restart Sublime for your changes to take effect.

You can save the .JSON file with ⌘+s (macOS) or ctrl+s (Windows / Linux). You do not need to use Save As, as the file is already existing and this is simply updating the settings file, which comes with the Pieces for Sublime Text package.