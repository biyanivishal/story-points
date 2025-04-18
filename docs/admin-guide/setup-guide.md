# Jira Story Points Calculator Setup Guide

This guide will walk you through setting up and configuring the Story Points Calculator app for your Jira instance.

## Installation

### Prerequisites
- Jira Cloud instance with admin access
- Story points custom field already set up in Jira

### Installation Steps

1. Navigate to the Atlassian Marketplace
2. Search for "Story Points Calculator"
3. Click "Get app" or "Try it free"
4. Follow the installation prompts
5. Wait for confirmation that the app is installed

## Initial Configuration

### Accessing the Admin Panel

1. Go to Jira Administration
2. Click on "Apps" in the left sidebar
3. Select "Story Points Calculator" from the app list
4. Click "Configure" to open the admin panel

### General Setup

1. **Establish Score Range**
   - Set minimum and maximum scores (e.g., 0-100)
   - Decide whether to enable negative scores

2. **Choose Calculation Method**
   - Sum: Simple addition of all criteria
   - Average: Mean value of all criteria
   - Weighted: Weighted average based on importance factors

3. **Link to Story Point Field**
   - Enter the name of your story point field
   - Click "Validate" to confirm the field exists
   - Select the correct field from the dropdown

4. **Set Version Retention**
   - Choose how many configuration versions to retain (1-10)

### Creating Scoring Criteria

For each criterion you want to evaluate:

1. Click "Add New Criterion"
2. Enter a descriptive name
3. Set weight (importance factor)
4. Define score boundaries:
   - Minimum score
   - Maximum score
   - Default value when not specified
5. Enable the criterion

**Recommended Starting Criteria:**
- Technical Complexity (Weight: 2)
- Business Value (Weight: 1.5)
- Effort Estimation (Weight: 2)
- Risk Factor (Weight: 1)
- Dependencies (Weight: 1.5)

### Configuring Story Point Mapping

Create ranges that map scores to story points:

1. Click "Add Story Point Range"
2. Define score ranges and corresponding story points
3. Ensure there are no gaps between ranges

**Example Fibonacci-based Mapping:**
- Scores 0-10: 1 point
- Scores 11-25: 2 points
- Scores 26-40: 3 points
- Scores 41-65: 5 points
- Scores 66-90: 8 points
- Scores 91-120: 13 points
- Scores 121+: 21 points

## Advanced Configuration

### Fine-tuning Criteria

For each criterion, consider:
- What makes an issue complex for your team?
- What numerical range best represents this factor?
- What's the appropriate weight relative to other factors?

### Testing Your Configuration

1. Apply your configuration to a sample set of issues
2. Compare calculated story points with team estimates
3. Adjust criteria and mappings until results align with expectations

### Integration with Workflows

Consider:
- When should scores be calculated? (On issue creation, transitions, etc.)
- Who can modify scores manually?
- Should scores be locked at certain workflow stages?

## Maintenance

### Regular Review

Schedule periodic reviews of your configuration:
- Are story points accurately reflecting issue complexity?
- Do any criteria need adjustment?
- Is the calculation method appropriate?

### Using the History Tab

The History tab provides:
- Audit trail of configuration changes
- Version comparisons to understand what changed and why
- Ability to understand how scoring has evolved

## Rollout Strategies

### Limited Pilot

1. Deploy to a single project or team first
2. Gather feedback and refine configuration
3. Create documentation for team members

### Full Deployment

1. Communicate the purpose and benefits to all teams
2. Provide training on the scoring system
3. Establish feedback channels for ongoing improvement

### Training Materials

Prepare:
- Short video tutorials
- Written guides (like this document)
- Examples of proper scoring for different issue types

## Advanced Use Cases

### Custom Field Automation

The calculator can be enhanced to:
- Update multiple fields based on scores
- Trigger automation rules based on score thresholds
- Generate reports on complexity distribution

### Project-Specific Configurations

For larger organizations:
- Configure different criteria sets for different project types
- Customize story point mappings per team
- Share best practices across projects
