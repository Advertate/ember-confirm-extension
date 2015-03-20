# THIS IS WIP AND NOT RELEASED AS AN NPM PROJECT YET. STAY TUNED!
# ember-confirm-button

Add a confirmation button to your ember-cli project.

Use confirmation mechanisms (buttons/dialogs) with caution. The are now always the best choice UX-wise. For more information on that topic see:
* [Never Use a Warning When you Mean Undo](http://alistapart.com/article/neveruseawarning)
* [Deletion: Confirm or Undo? Which is the better option and why?](http://ux.stackexchange.com/questions/71960/deletion-confirm-or-undo-which-is-the-better-option-and-why)
* [Try Undos instead of prompting for confirmation](https://goodui.org/#8)
* [Undo](http://patternry.com/p=undo/)

## Installation

```bash
ember install:addon ember-confirm-button
```

## Usage

```handlebars
{{confirm-button label='Destroy Earth' questionText='Do you really want to destroy the planet?' confirmText='Yes' declineText='No' confirmAction='destroyEarth'}}
```

## Styling

Take a look at the [component's template](https://github.com/advertate/ember-confirm-button/tree/master/addon/templates/components/confirm-button.hbs) to see which css classes are used.

## Contributions

PRs are always welcome! Make sure that code changes are covered by tests.

## License

MIT
