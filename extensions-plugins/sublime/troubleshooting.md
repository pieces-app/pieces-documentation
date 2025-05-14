# Troubleshooting

Find links to support resources, documentation and our Discord channel for any troubleshooting related to the Pieces for Sublime Text Plugin.

## Having Trouble with Pieces for Sublime Text?

If the Pieces for Sublime Text Plugin isn’t working as expected, try the following troubleshooting steps.

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

First, confirm you’re using the latest version of the Pieces for Sublime Text Plugin from Package Control and the latest version of PiecesOS.

The minimum functioning version permitted is currently 1.4.3.

Check to make sure PiecesOS is running. PiecesOS must be running for the Pieces for Sublime Text Plugin to work.

If you’ve recently installed or updated PiecesOS or the Pieces for Sublime Text Plugin, restart the IDE.

Contact the Pieces support team if the issue still persists.

Make sure that the host object inside the Pieces Settings file is empty, not set to localhost:1000 as this creates issues with Package Control trying to load the Pieces Package, and can disable the plugin.

If you're experiencing an issue or something isn't working properly, try reloading the plugin.

To do so, open the command palette using ⌘+shift+p (macOS) or ctrl+shift+p (Windows / Linux) and typing Pieces: Reload Plugin, then press Enter.

