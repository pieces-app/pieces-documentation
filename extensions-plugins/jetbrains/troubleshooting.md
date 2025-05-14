# Troubleshooting

Support resources, documentation, and our Discord channel for troubleshooting the Pieces for JetBrains Plugin, along with troubleshooting steps for JCEF-related issues.

## Troubleshooting Pieces for JetBrains

Here are links to support resources, documentation, and our Discord channel for troubleshooting related to the Pieces for JetBrains Plugin.

You can also find some specific troubleshooting steps for JCEF-related issues below.

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

​

## Pieces Copilot: Enabling JCEF Runtime and Downgrade​

The Pieces Copilot relies on the JCEF (Java Chromium Embedded Framework) runtime to function appropriately within JetBrains IDEs.

However, not all JetBrains IDEs, including specific versions of Android Studio, come pre-configured with a JCEF-compatible runtime, which can cause compatibility issues.

You must switch your Java runtime to a JCEF-enabled runtime inside your global IDE settings.

This operation will require restarting your IDE, so make sure to save your work before doing so.

Follow these steps to switch your runtime:

Open the Action Search Dialog using ⌘+shift+a (macOS) or ctrl+shift+a (Windows/Linux).

Search for Choose Boot Java Runtime for the IDE.

Select the latest version from the available JCEF-enabled runtimes.

If you’re using Android Studio Hedgehog (2023.1.1), switching to a JCEF runtime may still result in GPU process errors, which can cause performance instability.

This is a known issue with this release, affecting Pieces Copilot and other plugins relying on JCEF (such as the Flutter inspector).

If you encounter GPU-related errors after switching to a JCEF runtime, consider downgrading to Android Studio Giraffe (2022.3.1 Patch 4). This version offers better compatibility until a permanent fix is released for Hedgehog.

To downgrade Android Studio, follow these steps:

Uninstall Hedgehog (2023.1.1) from your device.

Download Giraffe (2022.3.1 Patch 4) from the Android Studio archives, which you can find here.

Reinstall Android Studio using the Giraffe version and switch the runtime to JCEF-enabled using the instructions above.

## Unable to Find the JetBrains Plugin in the JetBrains Marketplace​

If you can't find the Pieces for Developers JetBrains Plugin in the JetBrains Marketplace, you can navigate directly to it using this link.

## Updating​

The Pieces for JetBrains Plugin will automatically update when a new version is available.

You can manually update the plugin by going to your Plugins window using ⌘+shift+x (macOS) or ctrl+shift+x (Windows/Linux).

Next, locate the Pieces for JetBrains Plugin (titled ‘Pieces’) and click the update button.

Check to make sure PiecesOS is running. PiecesOS must be running for the Pieces for JetBrains Plugin to work.

If you’ve recently installed or updated PiecesOS or the Pieces for JetBrains Plugin, restart the IDE.

## Reloading the Pieces Copilot Chat Window

You may need to restart or refresh the Pieces Copilot chat, especially if you’re using a cloud LLM and disconnect from WiFi.

These scenarios can occasionally cause the LLM to ‘hang’—to appear as if generating a response but eventually timing out, entering an infinite response loop, or experiencing other issues.

To do so, click the small Reload Copilot symbol above the Pieces Copilot chat once it is open.

