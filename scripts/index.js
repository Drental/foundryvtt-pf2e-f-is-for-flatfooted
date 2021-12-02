Hooks.on("init", () => {
  // Binding with a default key and a simple callback
  KeybindLib.register("pf2e-f-is-for-flatfooted", "flatfooted", {
    name: "Toggle Flatfooted",
    hint: "Set or remove flat-footed of the token under the mouse.",
    default: "KeyF",
    onKeyDown: async () => {
      if (canvas.tokens._hover) {
        const actor = canvas.tokens._hover.actor;
        const conditionSlug = 'flat-footed';
        if (actor.hasCondition(conditionSlug)) {
            await actor.decreaseCondition(conditionSlug, { forceRemove: true });
        } else {
            await actor.increaseCondition(conditionSlug);
        }
      }
    }
  });
})
