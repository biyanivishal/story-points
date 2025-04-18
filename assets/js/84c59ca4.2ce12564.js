"use strict";(self.webpackChunkstory_point_estimator_docs=self.webpackChunkstory_point_estimator_docs||[]).push([[7876],{4419:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"user-guide/user-guide","title":"Jira Story Points Calculator User Guide","description":"This guide explains how to use the Story Points Calculator app to automatically generate story point estimates based on configurable scoring criteria.","source":"@site/docs/user-guide/user-guide.md","sourceDirName":"user-guide","slug":"/user-guide/","permalink":"/docs/user-guide/","draft":false,"unlisted":false,"editUrl":"https://github.com/biyanivishal/story-points/edit/main/docs/user-guide/user-guide.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Getting Started","permalink":"/docs/getting-started"},"next":{"title":"Story Point Calculation","permalink":"/docs/user-guide/story-point-calculation"}}');var r=n(4848),t=n(8453);const l={},o="Jira Story Points Calculator User Guide",a={},c=[{value:"Overview",id:"overview",level:2},{value:"Accessing the Configuration Panel",id:"accessing-the-configuration-panel",level:2},{value:"Configuration Tabs",id:"configuration-tabs",level:2},{value:"Scoring Criteria",id:"scoring-criteria",level:3},{value:"Story Point Mapping",id:"story-point-mapping",level:3},{value:"General Settings",id:"general-settings",level:3},{value:"History",id:"history",level:3},{value:"Using the Calculator",id:"using-the-calculator",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){const i={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"jira-story-points-calculator-user-guide",children:"Jira Story Points Calculator User Guide"})}),"\n",(0,r.jsx)(i.p,{children:"This guide explains how to use the Story Points Calculator app to automatically generate story point estimates based on configurable scoring criteria."}),"\n",(0,r.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(i.p,{children:"The Story Points Calculator automates the process of assigning story points to issues by:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Evaluating issues against customizable criteria"}),"\n",(0,r.jsx)(i.li,{children:"Calculating a numeric score based on these criteria"}),"\n",(0,r.jsx)(i.li,{children:"Converting scores to story points using configurable mappings"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"accessing-the-configuration-panel",children:"Accessing the Configuration Panel"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Navigate to your Jira project"}),"\n",(0,r.jsx)(i.li,{children:'Click on the "Project settings" gear icon'}),"\n",(0,r.jsx)(i.li,{children:'Find and select "Story Points Calculator" from the left sidebar'}),"\n",(0,r.jsx)(i.li,{children:'Click "Configure" to open the configuration panel'}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"configuration-tabs",children:"Configuration Tabs"}),"\n",(0,r.jsx)(i.h3,{id:"scoring-criteria",children:"Scoring Criteria"}),"\n",(0,r.jsx)(i.p,{children:"This tab allows you to define factors that contribute to an issue's complexity score."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Adding a Criterion:"})}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:'Click "Add New Criterion"'}),"\n",(0,r.jsx)(i.li,{children:'Enter a name for the criterion (e.g., "Technical Complexity", "Business Value")'}),"\n",(0,r.jsx)(i.li,{children:"Set a weight to determine its importance in the overall calculation"}),"\n",(0,r.jsx)(i.li,{children:"Define score boundaries (min, max) and default value"}),"\n",(0,r.jsx)(i.li,{children:"Toggle whether this criterion is enabled"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Editing Criteria:"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Modify any field directly in the table"}),"\n",(0,r.jsx)(i.li,{children:"Values are validated in real-time to ensure consistency"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Removing Criteria:"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:'Click the "Remove" button next to any criterion you wish to delete'}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"story-point-mapping",children:"Story Point Mapping"}),"\n",(0,r.jsx)(i.p,{children:"This tab defines how numeric scores translate to story point values."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Adding a Mapping Range:"})}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:'Click "Add Story Point Range"'}),"\n",(0,r.jsx)(i.li,{children:"Define the minimum and maximum scores for this range"}),"\n",(0,r.jsx)(i.li,{children:"Assign the story point value for this range (typically using Fibonacci sequence: 1, 2, 3, 5, 8, 13, etc.)"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Example Configuration:"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Scores 0-20: 1 point"}),"\n",(0,r.jsx)(i.li,{children:"Scores 21-40: 2 points"}),"\n",(0,r.jsx)(i.li,{children:"Scores 41-70: 3 points"}),"\n",(0,r.jsx)(i.li,{children:"Scores 71-100: 5 points"}),"\n",(0,r.jsx)(i.li,{children:"Scores 101-150: 8 points"}),"\n",(0,r.jsx)(i.li,{children:"Scores 151+: 13 points"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"general-settings",children:"General Settings"}),"\n",(0,r.jsx)(i.p,{children:"This tab contains global configuration options."}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Score Range:"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Set the minimum and maximum possible scores across all criteria"}),"\n",(0,r.jsx)(i.li,{children:"Enable or disable negative scores"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Calculation Method:"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Sum: Add all criteria scores"}),"\n",(0,r.jsx)(i.li,{children:"Average: Calculate mean of all criteria scores"}),"\n",(0,r.jsx)(i.li,{children:"Weighted: Calculate weighted average based on criteria weights"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Story Points Field:"})}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Enter the name of your Jira field used for story points"}),"\n",(0,r.jsx)(i.li,{children:'Click "Validate" to verify the field exists'}),"\n",(0,r.jsx)(i.li,{children:"Select the matching field from the dropdown if multiple options appear"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Version Retention:"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Choose how many previous configuration versions to retain in history"}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"history",children:"History"}),"\n",(0,r.jsx)(i.p,{children:"This tab shows a log of all configuration changes:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Who made the changes"}),"\n",(0,r.jsx)(i.li,{children:"When changes occurred"}),"\n",(0,r.jsx)(i.li,{children:"Detailed before/after comparisons"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"using-the-calculator",children:"Using the Calculator"}),"\n",(0,r.jsx)(i.p,{children:"Once configured, the calculator will:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Automatically calculate scores when viewing or editing issues"}),"\n",(0,r.jsx)(i.li,{children:"Suggest story point values based on configured mappings"}),"\n",(0,r.jsx)(i.li,{children:"Update the specified Jira field with calculated story points"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsx)(i.li,{children:"Start with a small set of criteria (3-5) that most impact complexity"}),"\n",(0,r.jsx)(i.li,{children:"Use weighted calculation for more nuanced scoring"}),"\n",(0,r.jsx)(i.li,{children:"Adjust mappings based on team velocity and feedback"}),"\n",(0,r.jsx)(i.li,{children:"Review and refine the configuration periodically"}),"\n",(0,r.jsx)(i.li,{children:"Use the history tab to track the impact of configuration changes"}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Issue: Story points not updating"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Verify the correct Jira field is configured"}),"\n",(0,r.jsx)(i.li,{children:"Check if all criteria are properly configured"}),"\n",(0,r.jsx)(i.li,{children:"Ensure users have permission to update story points"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Issue: Unexpected score values"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Review the min/max settings for each criterion"}),"\n",(0,r.jsx)(i.li,{children:"Check if negative scores are enabled/disabled as expected"}),"\n",(0,r.jsx)(i.li,{children:"Verify the calculation method is appropriate"}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Issue: Configuration errors"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Review validation messages in the interface"}),"\n",(0,r.jsx)(i.li,{children:"Ensure min values are less than max values"}),"\n",(0,r.jsx)(i.li,{children:"Verify no gaps exist in story point mapping ranges"}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>o});var s=n(6540);const r={},t=s.createContext(r);function l(e){const i=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(t.Provider,{value:i},e.children)}}}]);