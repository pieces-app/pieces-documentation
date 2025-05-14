# Sharing Snippets

The Share Snippets feature in the Pieces for Sublime Text Plugin lets users create shareable links for code snippets directly from the interface, simplifying sharing with others.

## How to Share a Saved Snippet

To create a link that you can share anywhere, right-click on a section of selected code, hover over the Pieces option, and then choose Generate Shareable Link.

A prompt will appear, allowing you to either Copy or Dismiss the shareable link.



When you click Generate Shareable Link, the Pieces Copilot will generate the link, then open a small menu with two options—Copy or Dismiss, allowing you to either copy the link or disregard the link.

Selecting Copy will copy the shareable URL to your clipboard:



This feature allows the recipient to easily access and view the snippet, even if they don't have Pieces installed or have a Pieces account.

This link can easily be shared via email, Discord, Slack, or other platforms. The recipient can view the snippet without needing to have a Pieces account.

## Generating Links for Existing Snippets

In addition to sharing code snippets on the fly, you can also open up previously saved materials and generate a shareable link from the embedded Share button.



## Enriched Sharing Experience

When you Share a snippet, it’s not just the code that’s included. The snippet comes with additional metadata to provide context—you can read more about that here.

Snippet Type: Identify the language or framework, such as Python or React.

Tags: Useful keywords for quick categorization.

Description: A short summary of what the snippet does.

Related Links: Helpful resources or documentation tied to the snippet.

Author Information: A record of who created the snippet.



## What Information Gets Shared

When a snippet is saved to the Pieces Cloud, the code is enriched with valuable information such as related people, links, annotations, tags, and an automatically-generated description.

This information is visible to the right of the code block when the shared snippet is open in your browser:



The Generate Shareable Link feature does more than just allow you to effectively share snippets across your entire team and other communities, though.

You'll see a section titled Sensitive Information:



Our in-house ML model scans snippets for potentially sensitive information, like API keys or passwords, and alerts you so that you can make an informed decision before sharing the snippet.  

The scan happens locally using on-device machine learning models before the snippet is uploaded to the cloud for sharing—that way, you can make an informed decision about sharing your code.