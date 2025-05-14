# Refactoring Code

Refactoring improves code structure and maintainability without changing its behavior. The Pieces for Sublime Text Plugin simplifies this with Pieces Copilot’s Modify feature.

## Modifying Your Code with Pieces Copilot

The Modify function in Pieces Copilot allows you to enhance your selected code by making adjustments such as improving error handling, renaming functions, or adding new functionality.

In Sublime Text, you can modify your code via the following steps:

Say you want to add a missing positional argument to the add_user function.

Simply follow these step below and Pieces Copilot will efficiently apply the necessary changes.

Select the portion of code you want to modify.

Right-click to open the context menu.

Hover over Quick Actions and select the Modify option.

Enter the query containing specific modification instructions. In this case, we want to add the aforementioned argument to the add_user function, so we’ll specify that.

Then, press return (macOS) or enter (Windows/Linux), then accept or deny the changes once the Pieces Copilot has generated the modifications accordingly.



Pieces Copilot’s Modify feature can handle a variety of refactoring scenarios. Here are some everyday tasks where it can help:

Renaming Variables or Functions Across Multiple Files: Instead of manually searching for occurrences, just instruct Pieces Copilot to rename them. It updates references automatically, reducing the chance of a missed or broken link.

Updating a Deprecated API Call: Legacy code often uses outdated methods. Instruct Pieces Copilot to replace the old API call with the new one and handle any necessary parameter or return-value changes.

Adding Error Handling to a Function: If you have a function without proper error handling, ask Pieces Copilot to wrap it in a try/catch block, or add more robust error-logging statements.

Reorganizing Code for Better Readability: Large functions with multiple responsibilities can be split into smaller helper functions, or code blocks can be reordered for clarity. Pieces Copilot can assist by identifying logical sections and extracting them into new functions.

Converting Code Syntax: Use “Modify” to transform class components into functional components (in React), convert promise chains into async/await, or update ES5 syntax to ES6+.

Try using the Modify function to implement error handling, update deprecated methods, add logging to several functions, or refactor variable names for consistency.