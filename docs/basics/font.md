# Font
As you may know minecraft has ways to customize text as seen here https://www.digminecraft.com/lists/color_list_pc.php
Instead of doing
```js
'§3I am aqua'
```
You can now do this instead
```js
// Make sure you import the font module
import { font } from "./LIB/utils/font";

font.colourize('I am aqua', font.colours.dark_aqua)
```

Now instead of having to decode the colour code you can easliy see which colour the text is being applied