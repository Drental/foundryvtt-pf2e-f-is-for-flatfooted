Hooks.on("init", () => {
  // Binding with a default key and a simple callback
  KeybindLib.register("pf2e-f-is-for-flatfooted", "flatfooted", {
    name: "Toggle Flatfooted",
    hint: "Set or remove flat-footed of the token under the mouse.",
    default: "KeyF",
    onKeyDown: () => {
      if (canvas.tokens._hover) {
        game.pf2e.StatusEffects.setStatus(canvas.tokens._hover, [{ name: 'flatFooted', toggle: true }]);
      }
    }
  });
})
