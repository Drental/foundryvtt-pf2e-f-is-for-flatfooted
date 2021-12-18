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
    onDown: () => { canvas.tokens._hover?.actor?.toggleCondition('flat-footed') },
    onUp: () => {},
    restricted: false,
    reservedModifiers: [],
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "compendiumBrowser", {
    name: "Open Compendium Browser",
    hint: "opens the compendium browser or closes it if it's already opened.",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.compendiumBrowser.rendered ? game.pf2e.compendiumBrowser.close() : game.pf2e.compendiumBrowser.render(true)},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "raiseAShield", {
    name: "Raise a Shield",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.raiseAShield({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "blinded", {
    name: "Toggle Blinded",
        name: "Toggle Blinded",
    hint: "Changes the Blinded state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('blinded') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "concealed", {
    name: "Toggle Concealed",
        name: "Toggle Concealed",
    hint: "Changes the Concealed state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('concealed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "confused", {
    name: "Toggle Confused",
        name: "Toggle Confused",
    hint: "Changes the Confused state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('confused') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "controlled", {
    name: "Toggle Controlled",
        name: "Toggle Controlled",
    hint: "Changes the Controlled state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('controlled') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "dazzled", {
    name: "Toggle Dazzled",
        name: "Toggle Dazzled",
    hint: "Changes the Dazzled state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('dazzled') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "deafened", {
    name: "Toggle Deafened",
        name: "Toggle Deafened",
    hint: "Changes the Deafened state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('deafened') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "encumbered", {
    name: "Toggle Encumbered",
        name: "Toggle Encumbered",
    hint: "Changes the Encumbered state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('encumbered') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "fascinated", {
    name: "Toggle Fascinated",
        name: "Toggle Fascinated",
    hint: "Changes the Fascinated state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('fascinated') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "fatigued", {
    name: "Toggle Fatigued",
        name: "Toggle Fatigued",
    hint: "Changes the Fatigued state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('fatigued') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "fleeing", {
    name: "Toggle Fleeing",
        name: "Toggle Fleeing",
    hint: "Changes the Fleeing state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('fleeing') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "grabbed", {
    name: "Toggle Grabbed",
        name: "Toggle Grabbed",
    hint: "Changes the Grabbed state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('grabbed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "hidden", {
    name: "Toggle Hidden",
        name: "Toggle Hidden",
    hint: "Changes the Hidden state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('hidden') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "immobilized", {
    name: "Toggle Immobilized",
        name: "Toggle Immobilized",
    hint: "Changes the Immobilized state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('immobilized') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "invisible", {
    name: "Toggle Invisible",
        name: "Toggle Invisible",
    hint: "Changes the Invisible state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('invisible') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "paralyzed", {
    name: "Toggle Paralyzed",
        name: "Toggle Paralyzed",
    hint: "Changes the Paralyzed state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('paralyzed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "petrified", {
    name: "Toggle Petrified",
        name: "Toggle Petrified",
    hint: "Changes the Petrified state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('petrified') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "prone", {
    name: "Toggle Prone",
        name: "Toggle Prone",
    hint: "Changes the Prone state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('prone') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "quickened", {
    name: "Toggle Quickened",
        name: "Toggle Quickened",
    hint: "Changes the Quickened state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('quickened') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "restrained", {
    name: "Toggle Restrained",
        name: "Toggle Restrained",
    hint: "Changes the Restrained state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('restrained') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "unconscious", {
    name: "Toggle Unconscious",
        name: "Toggle Unconscious",
    hint: "Changes the Unconscious state of the selected or assigned Token",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('unconscious') },
  });
  
  game.keybindings.register("pf2e-f-is-for-flatfooted", "seek", {
    name: "Seek",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.seek({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "senseMotive", {
    name: "Sense Motive",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.senseMotive({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "balance", {
    name: "Balance",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.balance({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "maneuverInFlight", {
    name: "Maneuver in Flight",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.maneuverInFlight({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "squeeze", {
    name: "Squeeze",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.squeeze({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "tumbleThrough", {
    name: "Tumble Through",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.tumbleThrough({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "climb", {
    name: "Climb",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.climb({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "disarm", {
    name: "Disarm",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.disarm({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "forceOpen", {
    name: "Force Open",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.forceOpen({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "grapple", {
    name: "Grapple",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.grapple({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "highJump", {
    name: "High Jump",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.highJump({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "longJump", {
    name: "Long Jump",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.longJump({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "shove", {
    name: "Shove",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.shove({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "swim", {
    name: "Swim",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.swim({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "trip", {
    name: "Trip",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.trip({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "whirlingThrow", {
    name: "Whirling Throw",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.whirlingThrow({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "craft", {
    name: "Craft",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.craft({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "createADiversion", {
    name: "Create A Diversion",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.createADiversion({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "feint", {
    name: "Feint",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.feint({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "impersonate", {
    name: "Impersonate",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.impersonate({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "lie", {
    name: "Lie",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.lie({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "bonMot", {
    name: "Bon Mot",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.bonMot({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "gatherInformation", {
    name: "Gather Information",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.gatherInformation({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "makeAnImpression", {
    name: "Make an Impression",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.makeAnImpression({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "request", {
    name: "request",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.request({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "coerce", {
    name: "Coerce",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.coerce({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "demoralize", {
    name: "Demoralize",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.demoralize({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "hide", {
    name: "Hide",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.hide({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "sneak", {
    name: "Sneak",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.sneak({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "pickALock", {
    name: "Pick a Lock",
    editable: [
      {
        key: "F24"
      }
    ],
    onDown: () => { game.pf2e.actions.pickALock({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });
})
