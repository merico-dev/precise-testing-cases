# Snapshot Cases

This folder includes test cases for analyzing a snapshot of a codebase. When analyzing a snapshot, the input of the analysis is the source code, and the output is the dataflow values for each line.

The ground truth of a test case is documented in the comments. If a line doesn't have any comment, it implies its dataflow value is bottom.

| No  | Name | Description | Status |
| ------------- | ------------- | ------------- | ------------- |
| 1  | basicIntraPlatform  | the most basic case for intra-procedural analysis for platforms | :white_check_mark:
| 2  | basicIntraApp  | the most basic case for intra-procedural analysis for apps | :white_check_mark:
| 3  | varIntraPlatform  | extends case 1 by assigning to a var and using that var as condition | :white_check_mark:
| 4  | varIntraApp  | extends case 2 by assigning to a var and using that var as condition | :white_check_mark:
| 5  | onelineIntraPlatform  | a variant of case 1 with the ternary operator (?:) | :white_check_mark:
| 6  | onelineIntraApp  | a variant of case 2 with the ternary operator (?:) | :white_check_mark:
| 7  | topdownInterPlatform  | the most basic case for top-down inter-procedural analysis for platforms | 
| 8  | topdownInterApp  | the most basic case for top-down inter-procedural analysis for apps |
| 9  | bottomupInterPlatform  | the most basic case for bottom-up inter-procedural analysis for platforms |
| 10  | bottomupInterApp  | the most basic case for bottom-up inter-procedural analysis for apps |
| 11  | nestedIntraPlatforms  | extends case 1 by nesting the conditionals | :white_check_mark:
| 12 | nestedIntraApps  | extends case 2 by nesting the conditionals | :white_check_mark:



