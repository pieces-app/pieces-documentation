# Troubleshooting

This page shows you how to fix common issues with the Pieces Web Extension and how to connect with the Pieces support team or community.

## Having Trouble with the Pieces Web Extension?

If you’re having issues with the Pieces Web Extension, try the following quick fixes and dependency checks.

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

## Check PiecesOS Status

PiecesOS, a required dependency, can cause issues with the Pieces Web Extension or other extensions and plugins if it is not installed or running.

Make sure PiecesOS is running on your device.

To double-check that Pieces OS is running, ensure the Pieces logo is present in your toolbar (on macOS) or your taskbar (Windows/Linux).

If it isn't there, please launch PiecesOS by double-clicking PiecesOS in your Applications folder.

For the Pieces Web Extension to run, PiecesOS is required. This dependency communicates with the Web Extension and provides context and other necessary data for on-device machine learning, cloud and local-hosted model usage, cloud connectivity, and more.

If you need to download and install PiecesOS, click here.

## Refreshing Copilot Chats

If you're using the Pieces Copilot chat and disconnect from WiFi or encounter issues with a cloud-based LLM, you may need to refresh the chat.

This can resolve issues such as the LLM appearing to "hang" (e.g., generating a response that turns out to be an infinite loop).

To refresh the chat, click the three vertical dots at the top-right corner of your Copilot Chat window and select Refresh.



## Missing Quick Actions Buttons

You may be missing the Pieces Quick Actions buttons under eligible code blocks for two main reasons:

Navigate to the Settings view to double-check that you haven't disabled the Pieces buttons from the site in your active tab. If you enable them, the page will automatically refresh, and the buttons should appear.

On specific pages, even on sites where code block elements are frequently embedded in the Document Object Model (DOM), such as Stack Overflow, there may not be eligible code blocks under which to render the Pieces Quick Action buttons.