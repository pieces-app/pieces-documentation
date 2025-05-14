# Troubleshooting

This page guides you on how to fix common issues with the Pieces for Visual Studio Extension and how to connect with the Pieces support team or community.

# Having Issues with Visual Studio?

Read the documentation below for a series of basic troubleshooting steps you can take if the Pieces for Visual Studio Extension isn’t working as expected.

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

## Quick Checks

Many issues stem from an out-of-date version of PiecesOS or a system inadequately powered to run local models. Find out more below.

First, ensure you're using the latest version of the Pieces for Visual Studio Extension from the Visual Studio Marketplace and the newest version of PiecesOS. The minimum supported version is Visual Studio 2022 — 17.9.0 or higher.

It's common for users to adjust a setting in Pieces for Visual Studio that leads to unexpected actions. Double-check your configuration to ensure everything is set as you expect.

PiecesOS and the Pieces Desktop Application update automatically if installed through the Pieces Suite Installer.

For standalone installations (non-macOS/Linux store-based), updates are checked daily or upon application launch, prompting you to install or delay.

See your specific OS page for platform-specific instructions on updating PiecesOS:

macOS

Windows

Linux

Regardless of platform, your device should meet the following basic system specifications for using the Pieces for Developers software.

Component

Minimum

Recommended

Notes

CPU

Any modern CPU

Multi-core CPU

Avoid dual-core processors—aim for at least a 4-core CPU.

RAM (Local Mode)

8 GB total system RAM with 2 GB free

16 GB total system RAM or more

Applies when PiecesOS is running locally.

RAM (Cloud Mode)

8 GB total system RAM with 1 GB free

16 GB total system RAM or more

Applies when PiecesOS is running in cloud mode.

Disk Space

2 GB minimum (1 GB for PiecesOS + 0.5–1 GB for data), with at least 4 GB free

8 GB with at least 6 GB free or more

Ensure additional free space for data storage and future growth.

## Checking Hardware

It may be necessary to verify your system’s specifications if you experience ongoing issues.

See the OS-specific pages for instructions on how to check CPU, RAM, and GPU details:

macOS

Windows

Linux

If you’ve recently installed or updated PiecesOS or the Pieces for Visual Studio Extension, restart the IDE.

Contact the Pieces support team if the issue still persists.

You might need to restart or refresh the Pieces Copilot chat, especially if you're using a cloud LLM and lose your WiFi connection.

This can sometimes cause the LLM to hang, appearing to generate a response but eventually timing out or getting stuck in a loop.

To fix this, click the three vertical dots in the top-right corner of your Copilot Chat window and select Refresh.

