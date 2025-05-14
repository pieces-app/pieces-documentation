# Sharing Snippets

The Share via Pieces Link feature in the Pieces CLI simplifies sharing code snippets by creating shareable links right from your terminal, eliminating the need to switch to the Pieces for Developers Desktop App.

## How to Share a Saved Snippet

Sharing a saved snippet is easy with the Pieces CLI. It enables you to collaborate with other developers, coworkers, and members even if they are outside of your organization or don’t have a Pieces account.

Read below for detailed steps on using the share command within the Pieces CLI.

To access a terminal on your device, the method depends on your platform: use the search bar of your OS to type in terminal for macOS/Linux or CMD for Windows.

To share a snippet, enter the pieces share command.

If you’re within the Pieces CLI run mode, you can enter share.

In the new view, use your arrow keys to navigate your saved snippets. When you’ve located the snippet you’d like to share, press return (macOS) or enter (Windows/Linux).

This will begin the process of sharing the snippet using the Pieces CLI.

After the snippet has been shared, its URL will appear within the terminal, and the CLI will prompt you to open the snippet in a browser.

Open it in a browser with y or deny it with n. After entering your option, press return (macOS) or enter (Windows/Linux).



## Enriched Sharing Experience

When you share a snippet, it’s not just the code that’s included. The snippet comes with additional metadata to provide context—you can read more about that here.

Snippet Type: Identify the language or framework, such as Python or React.

Tags: Useful keywords for quick categorization.

Description: A summary of what the snippet does.

Related Links: Helpful resources or documentation tied to the snippet.

Author Information: A record of who created the snippet.

## What Information Gets Shared

When you save a snippet to the Pieces Cloud, the code is enriched with valuable information, such as related people, links, annotations, tags, and an automatically generated description.

This information appears to the right of the code block when the shared snippet is open in your browser:



The share command does more than enable you to share snippets with your entire team and other communities effectively.

You'll see a section titled Sensitive Information:



Our in-house ML model scans snippets for potentially sensitive information, such as API keys or passwords, and alerts you so you can make an informed decision before sharing the snippet.