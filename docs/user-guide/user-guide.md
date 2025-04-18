# Jira Story Points Calculator User Guide

This guide explains how to use the Story Points Calculator app to automatically generate story point estimates based on configurable scoring criteria.

## Overview

The Story Points Calculator automates the process of assigning story points to issues by:
1. Evaluating issues against customizable criteria
2. Calculating a numeric score based on these criteria
3. Converting scores to story points using configurable mappings

## Accessing the Configuration Panel

1. Navigate to your Jira project
2. Click on the "Project settings" gear icon
3. Find and select "Story Points Calculator" from the left sidebar
4. Click "Configure" to open the configuration panel

## Configuration Tabs

### Scoring Criteria

This tab allows you to define factors that contribute to an issue's complexity score.

**Adding a Criterion:**
1. Click "Add New Criterion"
2. Enter a name for the criterion (e.g., "Technical Complexity", "Business Value")
3. Set a weight to determine its importance in the overall calculation
4. Define score boundaries (min, max) and default value
5. Toggle whether this criterion is enabled

**Editing Criteria:**
- Modify any field directly in the table
- Values are validated in real-time to ensure consistency

**Removing Criteria:**
- Click the "Remove" button next to any criterion you wish to delete

### Story Point Mapping

This tab defines how numeric scores translate to story point values.

**Adding a Mapping Range:**
1. Click "Add Story Point Range"
2. Define the minimum and maximum scores for this range
3. Assign the story point value for this range (typically using Fibonacci sequence: 1, 2, 3, 5, 8, 13, etc.)

**Example Configuration:**
- Scores 0-20: 1 point
- Scores 21-40: 2 points
- Scores 41-70: 3 points
- Scores 71-100: 5 points
- Scores 101-150: 8 points
- Scores 151+: 13 points

### General Settings

This tab contains global configuration options.

**Score Range:**
- Set the minimum and maximum possible scores across all criteria
- Enable or disable negative scores

**Calculation Method:**
- Sum: Add all criteria scores
- Average: Calculate mean of all criteria scores
- Weighted: Calculate weighted average based on criteria weights

**Story Points Field:**
1. Enter the name of your Jira field used for story points
2. Click "Validate" to verify the field exists
3. Select the matching field from the dropdown if multiple options appear

**Version Retention:**
- Choose how many previous configuration versions to retain in history

### History

This tab shows a log of all configuration changes:
- Who made the changes
- When changes occurred
- Detailed before/after comparisons

## Using the Calculator

Once configured, the calculator will:
1. Automatically calculate scores when viewing or editing issues
2. Suggest story point values based on configured mappings
3. Update the specified Jira field with calculated story points

## Best Practices

1. Start with a small set of criteria (3-5) that most impact complexity
2. Use weighted calculation for more nuanced scoring
3. Adjust mappings based on team velocity and feedback
4. Review and refine the configuration periodically 
5. Use the history tab to track the impact of configuration changes

## Troubleshooting

**Issue: Story points not updating**
- Verify the correct Jira field is configured
- Check if all criteria are properly configured
- Ensure users have permission to update story points

**Issue: Unexpected score values**
- Review the min/max settings for each criterion
- Check if negative scores are enabled/disabled as expected
- Verify the calculation method is appropriate

**Issue: Configuration errors**
- Review validation messages in the interface
- Ensure min values are less than max values
- Verify no gaps exist in story point mapping ranges
