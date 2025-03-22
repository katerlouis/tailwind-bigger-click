A tailwind plugin for creating bigger click areas without changing layout flow.

## Installation

Install the plugin from npm:
```shell
npm install -D @katerlouis/tailwind-bigger-click
```

Then add the plugin to your main `style.css` file:

```css
@plugin "@katerlouis/tailwind-bigger-click";
```

## Basic usage

Now you can use the `bigger-click-` classes to add bigger click areas to elements

### Note

Since `bigger-click-` uses absolute positioning under the hood, your element must be at least of `position: relative` (or `fixed`, or `absolute`).

## Example code

```html
<button class="relative bigger-click-5">
  I have a larger click area!
</button>
```

Or use separate values for horizontal and vertical enlargement

```html
<button class="relative bigger-click-x-10 bigger-click-y-5">
  Oooh, fancy!
</button>
```

## Feedback

As this is my first published node package, please feel free to jump into the issues or discussions with feedback both for the project setup and the actual tailwind code. 

Thanks!