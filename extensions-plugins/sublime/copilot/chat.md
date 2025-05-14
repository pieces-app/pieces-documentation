# Generative AI Conversations

The Pieces for Sublime Text Plugin provides versatile tools for leveraging generative AI to gain insights, debug, and optimize code seamlessly within your editor.

## Accessing Copilot Chats in Sublime Text

There are two primary ways to access Generative AI Conversations with the Pieces Copilot.

Highlight any code segment and right-click to open the Tool Menu.

Choose Start Conversation About The Current Selection to open a new conversation.



Open the command palette with ⌘+shift+p (macOS) or ctrl+shift+p (Windows/Linux), and enter commands such as:

Pieces: Copilot: Opens a clean-slate chat with Pieces Copilot.

Pieces: Ask Copilot About Active File: Provides insights for the current file open in your Sublime Text editor.



Read more about what commands are available in the Pieces for Sublime Text Plugin.

## Contextualized Chats

There are 3 levels of contextual awareness you can use when starting a conversation or adding code to an existing Copilot Chat with the Pieces Copilot.

One of the easiest ways to ask the Pieces Copilot a question about a specific class, method, function, or script is to open the right-click menu, hover over the Ask Copilot section, and select the About Current Selection option.

To use this feature:

Right click on a selected portion of code.

Hover over the Ask Copilot section.

Select the About Current Selection option.

Once selected, you can enter your prompt in the text input field at the bottom of the Sublime Text's view and press enter.



This feature makes it incredibly convenient for users to get quick insights or answers to specific questions about their code.

The Pieces: Ask About The Current File feature focuses on providing insights and assistance with the specific file you're working on.

To use this feature:

Open up the command palette using ⌘+shift+p (macOS) or ctrl+shift+p (Windows/Linux).

Enter Pieces: Ask About The Current File, then enter your question into the input field.



After running the initial command, you can then query the LLM, which will use the file as context to generate accurate and useful responses.

This is ideal for developers who need a comprehensive understanding of a file, such as its dependencies, functions, and classes

Similar to the file-level command, the Pieces: Ask About The Current Project command lets developers understand every corner of an entire project.

To ask about the current project:

Open the command palette with ⌘+shift+p (macOS) or ctrl+shift+p (Windows/Linux).

Enter Pieces: Ask About The Current Project, then type in your question.



This feature highlights errors and suggests improvements on a larger scale. Its main benefit is helping developers navigate their codebase by using the Pieces context-awareness engine to provide accurate information, even for specific prompts.

## Adding Context to Copilot Chats

There are a number of individual items you can add as context to a chat, namely Files, Folders, and Snippets.

This flexibility is useful when reference materials aren't directly accessible from Sublime Text or when you want to compartmentalize context by keeping files or folders from other projects separate from your active workflow.

To do this:

You can select the Message Icon on the left side of any of your chats in the Copilot Chat window.

A new menu will appear. Choose the type of context you want to add, then select the item you wish to include in the Copilot chat.



## Improving Code Consistency & Standardization

The Pieces Copilot helps improve code quality by identifying inconsistencies and providing actionable suggestions for standardization.

If functions across your workspace use inconsistent naming patterns (e.g., authenticateUser in authHandler.go vs. retrieveUserProfile in userHandler.go), Pieces Copilot can suggest adopting a standardized naming convention for better readability and maintainability, like this:

If error-handling strategies differ across files (e.g., structured errors in authService.go vs. inconsistent handling in userService.go), Pieces Copilot can help unify the approach: