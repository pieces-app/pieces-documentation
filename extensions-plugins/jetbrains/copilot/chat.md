# Generative AI Conversations

Enhance your development workflow with Copilot Chats inside the Pieces for JetBrains Plugin—an interactive AI assistant integrated directly into your JetBrains IDE.

## Accessing the Pieces Copilot Chat in JetBrains IDEs

There are several ways to open up the Pieces Copilot chat window in any JetBrains IDEs.

Select some code in your active file

Select Ask Copilot About Selection or Ask Copilot About File from the tool menu to open a chat with the selected context.



Select the Copilot Chat tab within the JetBrains sidebar to open the chat interface.

Select the Starred Icon to add context to the Copilot chat



Press ctrl+shift+a (Windows/Linux) or ⌘+shift+a (macOS) to open the Search Everywhere window

Type "Pieces Copilot" and select it from the search results to open the chat



Use the AI Quick Actions feature in the Pieces for JetBrains Plugin to quickly get an explanation for a confusing or forgotten function's logic.

Try using the Pieces: Explain tool above your code to start a conversation about a particular function.

This triggers the Copilot Chat window, which outputs an explanation and summary of the code function.



In addition, there is also Pieces: Comment, which you can read more about here.

## Contextualized Chats

You can utilize 2 different levels of contextual awareness when initiating a Copilot chat (or adding code to an existing chat) with the Pieces Copilot.

The Ask Copilot About Selection command lets you interact with Copilot regarding specific code snippets, functions, or classes.

To use this feature:

Select a portion of code you want to ask about.

Open the command palette with ⌘+shift+p on macOS or ctrl+shift+p on Windows/Linux. Type and execute the Ask Copilot About Selection command.

Type your prompt in the text input field and press return (macOS) or enter (Windows/Linux).



This approach is ideal for localized queries requiring quick insights or guidance on specific code functionality.

The Pieces Ask About Active File feature focuses on the current file, offering tailored insights and assistance with debugging.

There are two ways to access this command:

Right-click inside your file and select Ask Copilot about File, then type your query into the dropdown text input field.

Open the command palette using ⌘+shift+p (macOS) or ctrl+shift+p (Windows/Linux) and enter Ask About File.

Once you've entered your question, the Pieces Copilot will analyze the file's context to deliver precise responses.



This feature helps you understand file dependencies, methods, and structure. It also detects potential issues, suggests improvements, and more.

The Pieces: Ask About Active File feature can also be applied during onboarding purposes to get helpful explanations for unfamiliar code.

## Adding Context to Copilot Chats

You can add context to a chat by adding Files, Folders, Snippets, Websites, and Messages.

This greatly boosts the number of generative AI responses you receive that will actually benefit you. It can provide hyper-specific responses because it’s contextually aware of your code.

To do this, select the Starred Message Icon in the bottom-left corner of your Copilot Chat window, which is openable from the JetBrains IDE sidebar.

Click the Starred Message Icon, then add whatever context items you need.



You can also right-click a file from your project or active file tree and add that file as context to the conversation.

This can be done without opening the Pieces Copilot window. Right-click on a file in your open project and select Add to Copilot Chat Context.



You can paste snippets of code as a code block inside of any Copilot Chat by clicking the { } icon inside the chat window, then pasting in your code.

This is useful for bringing in code that isn’t present immediately in the active file as context, or for comparisons and suggestions.



You can also extract code from screenshots directly from the Copilot chat menu by selecting Extract Code from Screenshot, selecting the desired screenshot from your Finder (macOS) or File Explorer (Windows/Linux) menu, and confirming.

Pieces Copilot will then scan the screenshot and generate the code captured from the image into the chat. You can copy, insert it at your cursor, save it as a snippet, and more.



## AI Quick Actions

Above the functions in your code, you can find the clickable Pieces: Comment and Pieces: Explain buttons.

Click Pieces: Explain to open up the Pieces Copilot in the side window. The Pieces Copilot will automatically explain the purpose and function of that code within the chat.

Similarly, you can click Pieces: Comment above a function to have your preferred LLM generate documentation for that piece of code—you can then insert that code directly at the cursor by clicking Insert at Cursor or save it as a snippet using the built-in Save to Pieces button.



## Improving Code Consistency & Standardization

The Pieces Copilot Chat is designed to assist you with various coding tasks to boost productivity and enhance your workflow. This is done primarily by eliminating context-switching (needing to leave your IDE to access generative AI).

Suppose functions across your workspace use inconsistent naming patterns (e.g., authenticateUser in authHandler.go vs. retrieveUserProfile in userHandler.go). In that case, Pieces Copilot can suggest adopting a standardized naming convention for better readability and maintainability, like this:

If error-handling strategies differ across files (e.g., structured errors in authService.go vs. inconsistent handling in userService.go), Pieces Copilot can help unify the approach: