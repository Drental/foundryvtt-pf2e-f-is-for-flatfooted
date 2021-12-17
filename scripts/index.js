Hooks.on("init", () => {
  // Binding with a default key and a simple callback
  game.keybindings.register("pf2e-f-is-for-flatfooted", "flatfooted", {
    name: "F is for Flatfooted",
    hint: "Toggles the FlatFooted state of the token currently hovered over",
    editable: [
      {
        key: "KeyF"
      }
    ],
    onDown: () => { canvas.tokens._hover.actor.toggleCondition('flat-footed') },
    onUp: () => {},
    restricted: false,
    reservedModifiers: [],
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL
  });
})
