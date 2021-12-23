Hooks.on("init", () => {
  // Binding with a default key and a simple callback
  game.keybindings.register("pf2e-f-is-for-flatfooted", "visibility", {
    name: "Toggle Visibility",
    hint: "Toggle Visibility of a Token, GM only function that players can't see",
    editable: [],
    onDown: () => { canvas.tokens.controlled[0].toggleVisibility() },
  });

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
    editable: [],
    onDown: () => { game.pf2e.compendiumBrowser.rendered ? game.pf2e.compendiumBrowser.close() : game.pf2e.compendiumBrowser.render(true)},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "endTurn", {
    name: "End Turn",
    hint: "Ends your turn in combat.",
    editable: [],
    onDown: () => { game.combat.nextTurn()},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "raiseAShield", {
    name: "Raise a Shield",
    editable: [],
    onDown: () => { game.pf2e.actions.raiseAShield({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "blinded", {
    name: "Toggle Blinded",
    hint: "Changes the Blinded state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('blinded') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "clumsy-increase", {
    name: "Increase Clumsy",
    hint: "Increase the Clumsy state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].increaseCondition('clumsy') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "clumsy-decrease", {
    name: "Decrease Clumsy",
    hint: "Decrease the Clumsy state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].decreaseCondition('clumsy') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "clumsy", {
    name: "Toggle Clumsy",
    hint: "Turn Clumsy off or set to 1 for the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('clumsy') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "concealed", {
    name: "Toggle Concealed",
    hint: "Changes the Concealed state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('concealed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "confused", {
    name: "Toggle Confused",
    hint: "Changes the Confused state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('confused') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "controlled", {
    name: "Toggle Controlled",
    hint: "Changes the Controlled state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('controlled') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "dazzled", {
    name: "Toggle Dazzled",
    hint: "Changes the Dazzled state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('dazzled') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "deafened", {
    name: "Toggle Deafened",
    hint: "Changes the Deafened state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('deafened') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "doomed-increase", {
    name: "Increase Doomed",
    hint: "Increase the Doomed state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].increaseCondition('doomed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "doomed-decrease", {
    name: "Decrease Doomed",
    hint: "Decrease the Doomed state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].decreaseCondition('doomed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "doomed", {
    name: "Toggle Doomed",
    hint: "Turn Doomed off or set to 1 for the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('doomed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "drained-increase", {
    name: "Increase Drained",
    hint: "Increase the Drained state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].increaseCondition('drained') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "drained-decrease", {
    name: "Decrease Drained",
    hint: "Decrease the Drained state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].decreaseCondition('drained') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "drained", {
    name: "Toggle Drained",
    hint: "Turn Drained off or set to 1 for the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('drained') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "dying-increase", {
    name: "Increase Dying",
    hint: "Increase the Dying state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].increaseCondition('dying') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "dying-decrease", {
    name: "Decrease Dying",
    hint: "Decrease the Dying state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].decreaseCondition('dying') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "dying", {
    name: "Toggle Dying",
    hint: "Turn Dying off or set to 1 for the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('dying') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "encumbered", {
    name: "Toggle Encumbered",
    hint: "Changes the Encumbered state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('encumbered') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "enfeebled-increase", {
    name: "Increase Enfeebled",
    hint: "Increase the Enfeebled state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].increaseCondition('enfeebled') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "enfeebled-decrease", {
    name: "Decrease Enfeebled",
    hint: "Decrease the Enfeebled state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].decreaseCondition('enfeebled') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "enfeebled", {
    name: "Toggle Enfeebled",
    hint: "Turn Enfeebled off or set to 1 for the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('enfeebled') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "fascinated", {
    name: "Toggle Fascinated",
    hint: "Changes the Fascinated state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('fascinated') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "fatigued", {
    name: "Toggle Fatigued",
    hint: "Changes the Fatigued state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('fatigued') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "fleeing", {
    name: "Toggle Fleeing",
    hint: "Changes the Fleeing state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('fleeing') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "frightened-increase", {
    name: "Increase Frightened",
    hint: "Increase the Frightened state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].increaseCondition('frightened') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "frightened-decrease", {
    name: "Decrease Frightened",
    hint: "Decrease the Frightened state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].decreaseCondition('frightened') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "frightened", {
    name: "Toggle Frightened",
    hint: "Turn Frightened off or set to 1 for the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('frightened') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "grabbed", {
    name: "Toggle Grabbed",
    hint: "Changes the Grabbed state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('grabbed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "hidden", {
    name: "Toggle Hidden",
    hint: "Changes the Hidden state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('hidden') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "immobilized", {
    name: "Toggle Immobilized",
    hint: "Changes the Immobilized state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('immobilized') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "invisible", {
    name: "Toggle Invisible",
    hint: "Changes the Invisible state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('invisible') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "paralyzed", {
    name: "Toggle Paralyzed",
    hint: "Changes the Paralyzed state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('paralyzed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "petrified", {
    name: "Toggle Petrified",
    hint: "Changes the Petrified state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('petrified') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "prone", {
    name: "Toggle Prone",
    hint: "Changes the Prone state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('prone') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "quickened", {
    name: "Toggle Quickened",
    hint: "Changes the Quickened state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('quickened') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "restrained", {
    name: "Toggle Restrained",
    hint: "Changes the Restrained state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('restrained') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "sickened-increase", {
    name: "Increase Sickened",
    hint: "Increase the Sickened state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].increaseCondition('sickened') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "sickened-decrease", {
    name: "Decrease Sickened",
    hint: "Decrease the Sickened state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].decreaseCondition('sickened') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "sickened", {
    name: "Toggle Sickened",
    hint: "Turn Sickened off or set to 1 for the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('sickened') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "slowed-increase", {
    name: "Increase Slowed",
    hint: "Increase the Slowed state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].increaseCondition('slowed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "slowed-decrease", {
    name: "Decrease Slowed",
    hint: "Decrease the Slowed state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].decreaseCondition('slowed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "slowed", {
    name: "Toggle Slowed",
    hint: "Turn Slowed off or set to 1 for the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('slowed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "stunned-increase", {
    name: "Increase Stunned",
    hint: "Increase the Stunned state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].increaseCondition('stunned') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "stunned-decrease", {
    name: "Decrease Stunned",
    hint: "Decrease the Stunned state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].decreaseCondition('stunned') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "stunned", {
    name: "Toggle Stunned",
    hint: "Turn Stunned off or set to 1 for the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('stunned') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "stupefied-increase", {
    name: "Increase Stupefied",
    hint: "Increase the Stupefied state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].increaseCondition('stupefied') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "stupefied-decrease", {
    name: "Decrease Stupefied",
    hint: "Decrease the Stupefied state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].decreaseCondition('stupefied') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "stupefied", {
    name: "Toggle Stupefied",
    hint: "Turn Stupefied off or set to 1 for the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('stupefied') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "unconscious", {
    name: "Toggle Unconscious",
    hint: "Changes the Unconscious state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('unconscious') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "wounded-increase", {
    name: "Increase Wounded",
    hint: "Increase the Wounded state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].increaseCondition('wounded') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "wounded-decrease", {
    name: "Decrease Wounded",
    hint: "Decrease the Wounded state of the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].decreaseCondition('wounded') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "wounded", {
    name: "Toggle Wounded",
    hint: "Turn Wounded off or set to 1 for the selected or assigned Token",
    editable: [],
    onDown: () => { [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor)[0].toggleCondition('wounded') },
  });
  
  game.keybindings.register("pf2e-f-is-for-flatfooted", "seek", {
    name: "Seek",
    editable: [],
    onDown: () => { game.pf2e.actions.seek({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "senseMotive", {
    name: "Sense Motive",
    editable: [],
    onDown: () => { game.pf2e.actions.senseMotive({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "balance", {
    name: "Balance",
    editable: [],
    onDown: () => { game.pf2e.actions.balance({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "maneuverInFlight", {
    name: "Maneuver in Flight",
    editable: [],
    onDown: () => { game.pf2e.actions.maneuverInFlight({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "squeeze", {
    name: "Squeeze",
    editable: [],
    onDown: () => { game.pf2e.actions.squeeze({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "tumbleThrough", {
    name: "Tumble Through",
    editable: [],
    onDown: () => { game.pf2e.actions.tumbleThrough({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "climb", {
    name: "Climb",
    editable: [],
    onDown: () => { game.pf2e.actions.climb({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "disarm", {
    name: "Disarm",
    editable: [],
    onDown: () => { game.pf2e.actions.disarm({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "forceOpen", {
    name: "Force Open",
    editable: [],
    onDown: () => { game.pf2e.actions.forceOpen({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "grapple", {
    name: "Grapple",
    editable: [],
    onDown: () => { game.pf2e.actions.grapple({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "highJump", {
    name: "High Jump",
    editable: [],
    onDown: () => { game.pf2e.actions.highJump({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "longJump", {
    name: "Long Jump",
    editable: [],
    onDown: () => { game.pf2e.actions.longJump({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "shove", {
    name: "Shove",
    editable: [],
    onDown: () => { game.pf2e.actions.shove({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "swim", {
    name: "Swim",
    editable: [],
    onDown: () => { game.pf2e.actions.swim({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "trip", {
    name: "Trip",
    editable: [],
    onDown: () => { game.pf2e.actions.trip({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "whirlingThrow", {
    name: "Whirling Throw",
    editable: [],
    onDown: () => { game.pf2e.actions.whirlingThrow({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "craft", {
    name: "Craft",
    editable: [],
    onDown: () => { game.pf2e.actions.craft({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "createADiversion", {
    name: "Create A Diversion",
    editable: [],
    onDown: () => { game.pf2e.actions.createADiversion({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "feint", {
    name: "Feint",
    editable: [],
    onDown: () => { game.pf2e.actions.feint({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "impersonate", {
    name: "Impersonate",
    editable: [],
    onDown: () => { game.pf2e.actions.impersonate({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "lie", {
    name: "Lie",
    editable: [],
    onDown: () => { game.pf2e.actions.lie({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "bonMot", {
    name: "Bon Mot",
    editable: [],
    onDown: () => { game.pf2e.actions.bonMot({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "gatherInformation", {
    name: "Gather Information",
    editable: [],
    onDown: () => { game.pf2e.actions.gatherInformation({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "makeAnImpression", {
    name: "Make an Impression",
    editable: [],
    onDown: () => { game.pf2e.actions.makeAnImpression({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "request", {
    name: "request",
    editable: [],
    onDown: () => { game.pf2e.actions.request({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "coerce", {
    name: "Coerce",
    editable: [],
    onDown: () => { game.pf2e.actions.coerce({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "demoralize", {
    name: "Demoralize",
    editable: [],
    onDown: () => { game.pf2e.actions.demoralize({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "hide", {
    name: "Hide",
    editable: [],
    onDown: () => { game.pf2e.actions.hide({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "sneak", {
    name: "Sneak",
    editable: [],
    onDown: () => { game.pf2e.actions.sneak({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "pickALock", {
    name: "Pick a Lock",
    editable: [],
    onDown: () => { game.pf2e.actions.pickALock({ actors: [canvas.tokens.controlled[0]?.actor ?? game.user.character].filter((actor) => actor) })},
  });
})
