## 2024-05-15 - [XSS in CLI HTML Formatter]
**Vulnerability:** The HTML formatter for the CLI (`lib/cli-engine/formatters/html.js`) had a Cross-Site Scripting (XSS) vulnerability due to injecting `ruleId` and `ruleUrl` into the generated HTML string without proper encoding.
**Learning:** Externally derived variables, such as rule names and their associated documentation URLs, can be controlled by third-party configurations or plugins and should be treated as potentially untrusted input when creating formats like HTML.
**Prevention:** Always use the internal `encodeHTML` utility for any variables interpolated into an HTML template within the CLI formatters, even if they don't originate from direct user input like source code but from rule definitions or configurations.
