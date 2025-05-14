# Troubleshooting

This page will guide you through resolving common issues with the Pieces for VS Code Extension and connecting with the Pieces support team or community.

## Having Trouble with Pieces for VS Code?

If the Pieces for VS Code Extension isn’t working as expected, try the following troubleshooting steps.

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

First, confirm you’re using the latest version of the Pieces for VS Code Extension from the Visual Studio Marketplace and the latest version of PiecesOS.

The minimum functioning version permitted is currently 10.1.12.

If you’ve recently installed or updated PiecesOS or the Pieces for VS Code Extension, restart the IDE.

Contact the Pieces support team if the issue still persists.

Verify the health and status of PiecesOS and check off the boxes below if you are experiencing issues with Pieces Drive or Pieces Copilot within the Pieces for VS Code Extension.

Check to make sure PiecesOS is running. PiecesOS must be running for the Pieces for VS Code Extension to work.

You may need to restart or refresh the Pieces Copilot chat, especially if you’re using a cloud LLM and disconnect from WiFi.

These scenarios can occasionally cause the LLM to ‘hang’—to appear as if generating a response but eventually timing out, entering an infinite response loop, or experiencing other issues.

To do this, click the three vertical dots in the top-right corner of your Copilot Chat window, and click Refresh.

