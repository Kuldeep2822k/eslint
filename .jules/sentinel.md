
## 2024-05-20 - HTML Formatter XSS via Rule Metadata
**Vulnerability:** Cross-Site Scripting (XSS) in `lib/cli-engine/formatters/html.js` via unescaped `ruleUrl` and `ruleId` externally derived variables within `messageTemplate`.
**Learning:** Custom ESLint rules can specify their own `ruleId` and metadata URL. If these contain malicious HTML characters (like `<script>`), the HTML formatter will render them without escaping them properly if it relies solely on direct string interpolation. This means even external configuration metadata needs encoding.
**Prevention:** Ensure all external properties injected into HTML output, specifically things like rule IDs and URLs, use `encodeHTML()` internally to prevent XSS payloads from executing in generated HTML reports.
