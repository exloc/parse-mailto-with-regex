## Parse mailto field with a regular expression

Regular Expression:

```regex
/(.*[^\s*<])?\s*<(.*)>/
```

This will match properties of a 'mailto' field in the following format:

```no-highlight
Bill Gates <billg@microsoft.com>
Tom Anderson <tom@myspace.com>
<radavis@gmail.com>
```
