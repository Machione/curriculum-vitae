# Curriculum Vitae

Create a stylish, functional, dynamic, and customisable Curriculum Vitae (CV) or Résumé. You can see an example of what your next CV could look like at <https://machione.github.io/curriculum-vitae/cv.html>.

## Features

- CV = HTML + CSS + JS, meaning it can be hosted basically anywhere, even on GitHub using GH Pages like the example linked above.
- Fully responsive layout which can fit and look good on any screen.
- Working hyperlinks to socials, email, telephone, etc. in contacts details header.
- Dynamic calculation of the duration in years and months between two dates, allowing for tenure to be kept up to date automatically.
- Easily convert to PDF.
- Generate a private and public version of your CV.

## Quick Start

1. Either download a ZIP of this repository, or fork and clone it.
2. In your local copy, replace the contents of [cv.html](cv.html) with your own information.
3. Refer to the instructions below to avail of additional functionality, if desired.

## Additional Features

### Time Delta Calculation

The duration in years and months between two dates, or from one date to today, can be calculated and displayed automatically. To do this, create a div in [cv.html](cv.html) belonging to the class "calc-duration". The contents of this div should be one or two dates in YYYY-MM-DD format.

If just one date is given, then the contents of the div will be replaced by the number of years and months from that date to the current date. For example, the following will be replaced by the number of years and months between 1st March 2020 and today.

```html
<div class="calc-duration">2020-03-01</div>
```

If two dates are given, then they should be separated by double-dashes (i.e. "--"), and the contents of the div will be replaced by the number of years and months between the two dates. For example, the following will will be replaced by "(2 years)" since that is the time between 1st March 2018 and 1st March 2020.

```html
<div class="calc-duration">2018-03-01--2020-03-01</div>
```

Note that this time delta, once calculated will be surrounded in brackets when displayed.

### Convert to PDF

Use File > Print. Note that it's recommended to use Google Chrome or similar [Chromium-based browsers](https://en.wikipedia.org/wiki/Chromium_(web_browser)) for this action since other browsers (e.g. Safari at the time of writing) add unwanted margins and/or don't know how to apply a top-margin to everything after the first page when printing.

### Generating a public-safe CV

Running [hide_private_parts.py](hide_private_parts.py) will remove all divs in [cv.html](cv.html) belonging to the "private" class and write the redacted HTML to a file named "public_cv.html". Therefore, you can keep your personal information (like phone number and email address) secret and safely host the generated "public_cv.html" without worrying about your personal details getting scraped by bots and spammed.

Note that this requires [Python 3](https://www.python.org) and [Beautiful Soup 4](https://pypi.org/project/beautifulsoup4/).

## Contributing

This project is not under active development. Nevertheless, if you think something could be better, submit an issue. Pull requests are welcomed. The project uses [Typescript](https://www.typescriptlang.org), which will need to be compiled to Javascript before requesting a review on a PR. With Typescript installed, run `tsc ts/date_calc.ts --outDir js` in the root of the repository. Also, ensure any relevant updates have been made to this README before requesting a review.

## Credits

Icons used come from <https://feathericons.com>.
