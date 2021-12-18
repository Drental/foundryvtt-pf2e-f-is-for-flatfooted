const selectedTokenOrDefaultActor = () => {
  const actor = [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0]
  if (!actor) {
    ui.notifications.warn('You need to have a token selected or a default character for this key binding to work.')
  }
  return actor
}

Hooks.on("init", () => {
  // FLATFOOTED (very common condition)
  // Binding with a default key and a simple callback
  game.keybindings.register("pf2e-f-is-for-flatfooted", "flatfooted", {
    name: "F is for Flatfooted",
    hint: "Toggles the Flatfooted state of the token currently hovered over",
    editable: [
      {
        key: "KeyF"
      }
    ],
    onDown: () => { canvas.tokens._hover?.actor?.toggleCondition('flat-footed') },
    restricted: false,
    reservedModifiers: [],
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL
  });

  // WINDOW ACTIONS

  game.keybindings.register("pf2e-f-is-for-flatfooted", "compendiumBrowser", {
    name: "Open Compendium Browser",
    hint: "Opens the compendium browser or closes it if it's already opened.",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.compendiumBrowser.rendered ? game.pf2e.compendiumBrowser.close() : game.pf2e.compendiumBrowser.render(true)},
  });

  // ACTOR CONDITIONS

  game.keybindings.register("pf2e-f-is-for-flatfooted", "blinded", {
    name: "Toggle Blinded",
    hint: "Changes the Blinded state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('blinded') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "concealed", {
    name: "Toggle Concealed",
    hint: "Changes the Concealed state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('concealed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "confused", {
    name: "Toggle Confused",
    hint: "Changes the Confused state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('confused') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "controlled", {
    name: "Toggle Controlled",
    hint: "Changes the Controlled state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('controlled') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "dazzled", {
    name: "Toggle Dazzled",
    hint: "Changes the Dazzled state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('dazzled') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "deafened", {
    name: "Toggle Deafened",
    hint: "Changes the Deafened state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('deafened') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "encumbered", {
    name: "Toggle Encumbered",
    hint: "Changes the Encumbered state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('encumbered') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "fascinated", {
    name: "Toggle Fascinated",
    hint: "Changes the Fascinated state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('fascinated') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "fatigued", {
    name: "Toggle Fatigued",
    hint: "Changes the Fatigued state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('fatigued') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "fleeing", {
    name: "Toggle Fleeing",
    hint: "Changes the Fleeing state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('fleeing') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "grabbed", {
    name: "Toggle Grabbed",
    hint: "Changes the Grabbed state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('grabbed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "hidden", {
    name: "Toggle Hidden",
    hint: "Changes the Hidden state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('hidden') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "immobilized", {
    name: "Toggle Immobilized",
    hint: "Changes the Immobilized state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('immobilized') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "invisible", {
    name: "Toggle Invisible",
    hint: "Changes the Invisible state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('invisible') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "paralyzed", {
    name: "Toggle Paralyzed",
    hint: "Changes the Paralyzed state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('paralyzed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "petrified", {
    name: "Toggle Petrified",
    hint: "Changes the Petrified state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('petrified') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "prone", {
    name: "Toggle Prone",
    hint: "Changes the Prone state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('prone') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "quickened", {
    name: "Toggle Quickened",
    hint: "Changes the Quickened state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('quickened') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "restrained", {
    name: "Toggle Restrained",
    hint: "Changes the Restrained state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('restrained') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "unconscious", {
    name: "Toggle Unconscious",
    hint: "Changes the Unconscious state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { selectedTokenOrDefaultActor()?.toggleCondition('unconscious') },
  });

  // ACTOR ACTIONS

  game.keybindings.register("pf2e-f-is-for-flatfooted", "raiseAShield", {
    name: "Raise a Shield",
    hint: "Use the Raise a Shield action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.raiseAShield({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "seek", {
    name: "Seek",
    hint: "Use the Seek action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.seek({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "senseMotive", {
    name: "Sense Motive",
    hint: "Use the Sense Motive action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.senseMotive({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "balance", {
    name: "Balance",
    hint: "Use the Balance action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.balance({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "maneuverInFlight", {
    name: "Maneuver in Flight",
    hint: "Use the Maneuver in Flight action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.maneuverInFlight({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "squeeze", {
    name: "Squeeze",
    hint: "Use the Squeeze action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.squeeze({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "tumbleThrough", {
    name: "Tumble Through",
    hint: "Use the Tumble Through action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.tumbleThrough({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "climb", {
    name: "Climb",
    hint: "Use the Climb action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.climb({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "disarm", {
    name: "Disarm",
    hint: "Use the Disarm action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.disarm({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "forceOpen", {
    name: "Force Open",
    hint: "Use the Force Open action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.forceOpen({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "grapple", {
    name: "Grapple",
    hint: "Use the Grapple action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.grapple({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "highJump", {
    name: "High Jump",
    hint: "Use the High Jump action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.highJump({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "longJump", {
    name: "Long Jump",
    hint: "Use the Long Jump action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.longJump({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "shove", {
    name: "Shove",
    hint: "Use the Shove action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.shove({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "swim", {
    name: "Swim",
    hint: "Use the Swim action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.swim({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "trip", {
    name: "Trip",
    hint: "Use the Trip action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.trip({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "whirlingThrow", {
    name: "Whirling Throw",
    hint: "Use the Whirling Throw action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.whirlingThrow({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "craft", {
    name: "Craft",
    hint: "Use the Craft action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.craft({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "createADiversion", {
    name: "Create A Diversion",
    hint: "Use the Create A Diversion action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.createADiversion({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "feint", {
    name: "Feint",
    hint: "Use the Feint action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.feint({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "impersonate", {
    name: "Impersonate",
    hint: "Use the Impersonate action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.impersonate({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "lie", {
    name: "Lie",
    hint: "Use the Lie action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.lie({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "bonMot", {
    name: "Bon Mot",
    hint: "Use the Bon Mot action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.bonMot({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "gatherInformation", {
    name: "Gather Information",
    hint: "Use the Gather Information action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.gatherInformation({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "makeAnImpression", {
    name: "Make an Impression",
    hint: "Use the Make an Impression action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.makeAnImpression({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "request", {
    name: "Request",
    hint: "Use the Request action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.request({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "coerce", {
    name: "Coerce",
    hint: "Use the Coerce action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.coerce({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "demoralize", {
    name: "Demoralize",
    hint: "Use the Demoralize action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.demoralize({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "hide", {
    name: "Hide",
    hint: "Use the Hide action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.hide({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "sneak", {
    name: "Sneak",
    hint: "Use the Sneak action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.sneak({ actors: [actor] })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "pickALock", {
    name: "Pick a Lock",
    hint: "Use the Pick a Lock action with the currently selected token or assigned character",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { const actor = selectedTokenOrDefaultActor();  if (actor) game.pf2e.actions.pickALock({ actors: [actor] })},
  });
})
