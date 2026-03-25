## 2025-05-18 - HTML Formatter XSS via Rule Metadata
**Vulnerability:** The HTML formatter was vulnerable to XSS due to unescaped `ruleId` insertion into HTML and unsanitized `ruleUrl` rendering (allowing `javascript:` protocols).
**Learning:** External or seemingly internal configuration data (like rule IDs and rule documentation URLs from plugins) must be treated as untrusted input when formatting HTML reports, because custom plugins can supply arbitrary values. Protocol filtering is necessary alongside HTML encoding.
**Prevention:** Always wrap variables inserted into HTML with `encodeHTML()`, and strictly filter URLs using a robust parser (e.g. `new URL(...)`) to ensure only secure protocols like `http:` or `https:` are allowed before rendering them into `href` attributes.
