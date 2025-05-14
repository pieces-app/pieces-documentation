# Generative AI Conversations

The Pieces for Obsidian Plugin provides versatile tools to interact with generative AI, enabling you to gain insights, debug efficiently, and enhance your notes and workflows directly within Obsidian.

## Accessing Copilot Chat in Obsidian

There are two primary ways to access generative AI conversations with the Pieces Copilot.

Highlight any text or code block within your note and right-click to open the context menu.

Choose Ask Copilot About Selection for insights or suggestions for the selected snippet.



Open the Pieces for Obsidian Plugin by clicking its icon in the Obsidian sidebar.

Navigate to the Pieces Chat section by selecting it from the top of the plugin slider.

The chat window will open, allowing you to start a conversation directly with the Copilot.



## Contextualized Chats

Using the Pieces: Ask Copilot About Selection command lets you interact with Copilot regarding specific text or code within your notes.

There are two ways to access this command:

Select the text or excerpt that you want to query in your note.

Right-click on the highlighted text.

Choose Ask Copilot About Your Selection from the context menu.

Type your prompt in the text input field and press return (macOS) or enter (Windows/Linux).



Use ⌘+p (macOS) or ctrl+p (Windows/Linux) to open the command palette in Obsidian.

Type and run Pieces for Developers: Ask Copilot About Your Selection.

Type your prompt in the text input field and press return (macOS) or enter (Windows/Linux).

This approach is ideal for localized queries requiring quick insights or guidance on a specific selection.



## Adding Context to Copilot Chats

There are several individual items you can add as context to a chat, namely Files, Folders, Snippets from the Pieces Drive, Websites, and Messages.

This flexibility is particularly useful when the reference material you want to use isn’t directly accessible in Obsidian or when you want to compartmentalize context, avoiding overlap between files or projects.

To do this, select the Starred Message Icon in the bottom-left corner of your Copilot Chat window, openable from the Obsidian sidebar.

Click the Starred Message Icon, then add whatever context items you need.



You can paste snippets of code as a code block inside any Copilot Chat by clicking the { } icon inside the chat window, then pasting in your code.

This is useful for bringing in code that isn’t present immediately in the active file as context, or for comparisons and suggestions.



You can also extract code from screenshots directly from the Copilot chat menu by selecting Extract Code from Screenshot, selecting the desired screenshot from your Finder (macOS) or File Explorer (Windows/Linux) menu, and confirming.

Pieces Copilot will then scan the screenshot and generate the code captured from the image into the chat. You can copy, insert it at your cursor, save it as a snippet, and more.



Suppose you right-click on a folder in Obsidian’s file explorer. In that case, you’ll see the following options: Pieces: Add Vault to Copilot Context and Pieces: Add File to Copilot Context, so you can take any folder or file in the project you’re working in and immediately have the Pieces Copilot interact with it.

## Improving Code Consistency & Standardization

The Pieces Copilot helps improve code quality by identifying inconsistencies and providing actionable suggestions for standardization.

Suppose functions across your workspace use inconsistent naming patterns (e.g., authenticateUser in authHandler.go vs. retrieveUserProfile in userHandler.go). In that case, can suggest adopting a standardized naming convention for better readability and maintainability, like this:

If error-handling strategies differ across files (e.g., structured errors in authService.go vs. inconsistent handling in userService.go), Pieces Copilot can help unify the approach: