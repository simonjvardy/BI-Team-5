# BI Team 5 Project Testing Details

---

[Main README.md file](https://github.com/AlexNexton/BI-Team-5/blob/master/README.md)

[View the live project here.](https://github.com/AlexNexton/BI-Team-5/)

---

## Table of Contents


## Automated Testing

### Validation Services

The following validation services and linter were used to check the validity of the website code.

- [W3C Markup Validation](https://validator.w3.org/) was used to validate HTML.
- [W3C CSS validation](https://jigsaw.w3.org/css-validator/) was used to validate CSS.
- [JSHint](https://jshint.com/) was used to validate JavaScript.

### Client stories testing

## Manual Testing

### Testing undertaken on desktop

### Testing undertaken on tablet and phone devices

### Bugs discovered

The issue log is managed on the [GitHub Project Issues section](https://github.com/AlexNexton/BI-Team-5/issues) using the standard GitHub [bug\_report.md template](https://github.com/AlexNexton/BI-Team-5/blob/master/.github/ISSUE_TEMPLATE/bug_report.md)


#### Solved bugs

1. [While using google dev tools in mobile view the navbar wasn't "sticking" to the top.](https://github.com/AlexNexton/BI-Team-5/issues/6)

    - Fix: The issue was traced to the bootstrap default `.container-fluid` class. The following css code was added to style.css to override the default bootstrap class behaviour
```
.container-fluid{
    padding: 0;
     overflow: hidden;}
```

#### Unsolved bugs

## Further testing

