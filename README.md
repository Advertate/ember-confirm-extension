# ember-confirm-extension

Extend any template block by a confirmation "bubble".

Use confirmation mechanisms (buttons/bubbles/dialogs) with caution. The are not always the best choice UX-wise. For more information on that topic see:
* [Never Use a Warning When you Mean Undo](http://alistapart.com/article/neveruseawarning)
* [Deletion: Confirm or Undo? Which is the better option and why?](http://ux.stackexchange.com/questions/71960/deletion-confirm-or-undo-which-is-the-better-option-and-why)
* [Try Undos instead of prompting for confirmation](https://goodui.org/#8)
* [Undo](http://patternry.com/p=undo/)

## Installation

```bash
ember install:addon ember-confirm-extension
```

## Usage

```handlebars
{{#confirm-extension questionText='Do you really want to destroy the planet?' confirmText='Yes' declineText='No' confirmAction='destroyEarth'}}
  <button>Destroy Earth</button>
{{/confirm-extension}}
```

## Styling

Take a look at the [component's template](https://github.com/advertate/ember-confirm-extension/tree/master/addon/templates/components/confirm-extension.hbs) to see which css classes are used.

## Contributions

PRs are always welcome! Make sure that code changes are covered by tests.

## License

MIT
