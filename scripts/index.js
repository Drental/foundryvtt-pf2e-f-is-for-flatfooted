const selectedTokenActorsOrDefaultCharacter = () => {
  const controlledTokenActors = canvas.tokens.controlled.map(t => t.actor)
  const defaultUserActor = game.user.character
  if (controlledTokenActors.length !== 0) {
    return controlledTokenActors
  } else if (defaultUserActor) {
    return [defaultUserActor]
  } else {
    ui.notifications.warn('You need to have a token selected or a default character for this key binding to work.')
    return []
  }
}

/**
 * This function is just like the above, but expects a single token and doesn't allow many.
 * This is to avoid accidentally creating a lot of chat messages at once (as this is almost never intended)
 */
const oneSelectedTokenActorOrDefaultCharacter = () => {
  const controlledTokenActors = canvas.tokens.controlled.map(t => t.actor)
  const defaultUserActor = game.user.character
  if (controlledTokenActors.length === 1) {
    return controlledTokenActors
  } else if (controlledTokenActors.length > 1) {
    ui.notifications.warn('You should only have a single token selected for this key binding to work.')
    return []
  } else if (defaultUserActor) {
    return [defaultUserActor]
  } else {
    ui.notifications.warn('You need to have a token selected or a default character for this key binding to work.')
    return []
  }
}

const toggleVisibility = (canvasObjectList, documentName) => {
  if (canvasObjectList.controlled[0]) {
    canvas.scene.updateEmbeddedDocuments(
      documentName,
      canvasObjectList.controlled.map(it => ({ _id: it.id, hidden: !it.data.hidden }))
    )
  }
}

Hooks.on("init", () => {
  game.keybindings.register("pf2e-f-is-for-flatfooted", "visibility", {
    name: "Toggle Visibility",
    hint: "Toggle the visibility state of each selected token, tile, or drawing (hiding or revealing it).",
    editable: [],
    onDown: () => {
      // only one of the following will happen, because the user can only be on a single layer
      toggleVisibility(canvas.tokens, 'Token')
      toggleVisibility(canvas.drawings, 'Drawing')
      toggleVisibility(canvas.background, 'Tile')
      toggleVisibility(canvas.foreground, 'Tile')
    },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "flatfooted", {
    name: "F is for Flatfooted",
    hint: "Toggle the Flatfooted condition on the token currently hovered over (if you can control it).",
    editable: [
      {
        key: "KeyF"
      }
    ],
    onDown: () => { canvas.tokens._hover?.actor?.toggleCondition('flat-footed') },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "compendiumBrowser", {
    name: "Open Compendium Browser",
    hint: "Open the compendium browser, or close it if it's already opened.",
    editable: [],
    onDown: () => { game.pf2e.compendiumBrowser.rendered ? game.pf2e.compendiumBrowser.close() : game.pf2e.compendiumBrowser.render(true)},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "endTurn", {
    name: "End Turn",
    hint: "End your turn in combat. As GM, this will end anyone's turn.",
    editable: [],
    onDown: () => { game.combat.nextTurn()},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "raiseAShield", {
    name: "Raise a Shield",
    hint: "Use the Raise a Shield action with the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.raiseAShield({ actors: selectedTokenActorsOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "blinded", {
    name: "Toggle Blinded",
    hint: "Toggle the Blinded condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('blinded')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "clumsy-increase", {
    name: "Increase Clumsy",
    hint: "Increase the Clumsy condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.increaseCondition('clumsy')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "clumsy-decrease", {
    name: "Decrease Clumsy",
    hint: "Decrease the Clumsy condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.decreaseCondition('clumsy')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "clumsy", {
    name: "Toggle Clumsy",
    hint: "Remove the Clumsy condition or set it to 1 for the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('clumsy')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "concealed", {
    name: "Toggle Concealed",
    hint: "Toggle the Concealed condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('concealed')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "confused", {
    name: "Toggle Confused",
    hint: "Toggle the Confused condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('confused')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "controlled", {
    name: "Toggle Controlled",
    hint: "Toggle the Controlled condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('controlled')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "dazzled", {
    name: "Toggle Dazzled",
    hint: "Toggle the Dazzled condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('dazzled')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "deafened", {
    name: "Toggle Deafened",
    hint: "Toggle the Deafened condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('deafened')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "doomed-increase", {
    name: "Increase Doomed",
    hint: "Increase the Doomed condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.increaseCondition('doomed')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "doomed-decrease", {
    name: "Decrease Doomed",
    hint: "Decrease the Doomed condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.decreaseCondition('doomed')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "doomed", {
    name: "Toggle Doomed",
    hint: "Remove the Doomed condition or set it to 1 for the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('doomed')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "drained-increase", {
    name: "Increase Drained",
    hint: "Increase the Drained condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.increaseCondition('drained')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "drained-decrease", {
    name: "Decrease Drained",
    hint: "Decrease the Drained condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.decreaseCondition('drained')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "drained", {
    name: "Toggle Drained",
    hint: "Remove the Drained condition or set it to 1 for the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('drained')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "dying-increase", {
    name: "Increase Dying",
    hint: "Increase the Dying condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.increaseCondition('dying')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "dying-decrease", {
    name: "Decrease Dying",
    hint: "Decrease the Dying condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.decreaseCondition('dying')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "dying", {
    name: "Toggle Dying",
    hint: "Remove the Dying condition or set it to 1 for the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('dying')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "encumbered", {
    name: "Toggle Encumbered",
    hint: "Toggle the Encumbered condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('encumbered')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "enfeebled-increase", {
    name: "Increase Enfeebled",
    hint: "Increase the Enfeebled condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.increaseCondition('enfeebled')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "enfeebled-decrease", {
    name: "Decrease Enfeebled",
    hint: "Decrease the Enfeebled condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.decreaseCondition('enfeebled')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "enfeebled", {
    name: "Toggle Enfeebled",
    hint: "Remove the Enfeebled condition or set it to 1 for the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('enfeebled')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "fascinated", {
    name: "Toggle Fascinated",
    hint: "Toggle the Fascinated condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('fascinated')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "fatigued", {
    name: "Toggle Fatigued",
    hint: "Toggle the Fatigued condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('fatigued')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "fleeing", {
    name: "Toggle Fleeing",
    hint: "Toggle the Fleeing condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('fleeing')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "frightened-increase", {
    name: "Increase Frightened",
    hint: "Increase the Frightened condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.increaseCondition('frightened')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "frightened-decrease", {
    name: "Decrease Frightened",
    hint: "Decrease the Frightened condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.decreaseCondition('frightened')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "frightened", {
    name: "Toggle Frightened",
    hint: "Remove the Frightened condition or set it to 1 for the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('frightened')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "grabbed", {
    name: "Toggle Grabbed",
    hint: "Toggle the Grabbed condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('grabbed')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "hidden", {
    name: "Toggle Hidden",
    hint: "Toggle the Hidden condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('hidden')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "immobilized", {
    name: "Toggle Immobilized",
    hint: "Toggle the Immobilized condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('immobilized')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "invisible", {
    name: "Toggle Invisible",
    hint: "Toggle the Invisible condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('invisible')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "paralyzed", {
    name: "Toggle Paralyzed",
    hint: "Toggle the Paralyzed condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('paralyzed')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "petrified", {
    name: "Toggle Petrified",
    hint: "Toggle the Petrified condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('petrified')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "prone", {
    name: "Toggle Prone",
    hint: "Toggle the Prone condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('prone')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "quickened", {
    name: "Toggle Quickened",
    hint: "Toggle the Quickened condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('quickened')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "restrained", {
    name: "Toggle Restrained",
    hint: "Toggle the Restrained condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('restrained')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "sickened-increase", {
    name: "Increase Sickened",
    hint: "Increase the Sickened condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.increaseCondition('sickened')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "sickened-decrease", {
    name: "Decrease Sickened",
    hint: "Decrease the Sickened condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.decreaseCondition('sickened')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "sickened", {
    name: "Toggle Sickened",
    hint: "Remove the Sickened condition or set it to 1 for the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('sickened')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "slowed-increase", {
    name: "Increase Slowed",
    hint: "Increase the Slowed condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.increaseCondition('slowed')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "slowed-decrease", {
    name: "Decrease Slowed",
    hint: "Decrease the Slowed condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.decreaseCondition('slowed')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "slowed", {
    name: "Toggle Slowed",
    hint: "Remove the Slowed condition or set it to 1 for the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('slowed')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "stunned-increase", {
    name: "Increase Stunned",
    hint: "Increase the Stunned condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.increaseCondition('stunned')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "stunned-decrease", {
    name: "Decrease Stunned",
    hint: "Decrease the Stunned condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.decreaseCondition('stunned')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "stunned", {
    name: "Toggle Stunned",
    hint: "Remove the Stunned condition or set it to 1 for the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('stunned')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "stupefied-increase", {
    name: "Increase Stupefied",
    hint: "Increase the Stupefied condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.increaseCondition('stupefied')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "stupefied-decrease", {
    name: "Decrease Stupefied",
    hint: "Decrease the Stupefied condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.decreaseCondition('stupefied')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "stupefied", {
    name: "Toggle Stupefied",
    hint: "Remove the Stupefied condition or set it to 1 for the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('stupefied')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "unconscious", {
    name: "Toggle Unconscious",
    hint: "Toggle the Unconscious condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('unconscious')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "wounded-increase", {
    name: "Increase Wounded",
    hint: "Increase the Wounded condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.increaseCondition('wounded')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "wounded-decrease", {
    name: "Decrease Wounded",
    hint: "Decrease the Wounded condition of the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.decreaseCondition('wounded')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "wounded", {
    name: "Toggle Wounded",
    hint: "Remove the Wounded condition or set it to 1 for the selected token(s) or assigned character.",
    editable: [],
    onDown: () => { selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition('wounded')) },
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "seek", {
    name: "Seek",
    hint: "Use the Seek action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.seek({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "senseMotive", {
    name: "Sense Motive",
    hint: "Use the Sense Motive action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.senseMotive({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "balance", {
    name: "Balance",
    hint: "Use the Balance action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.balance({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "maneuverInFlight", {
    name: "Maneuver in Flight",
    hint: "Use the Maneuver in Flight action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.maneuverInFlight({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "squeeze", {
    name: "Squeeze",
    hint: "Use the Squeeze action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.squeeze({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "tumbleThrough", {
    name: "Tumble Through",
    hint: "Use the Tumble Through action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.tumbleThrough({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "climb", {
    name: "Climb",
    hint: "Use the Climb action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.climb({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "disarm", {
    name: "Disarm",
    hint: "Use the Disarm action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.disarm({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "forceOpen", {
    name: "Force Open",
    hint: "Use the Force Open action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.forceOpen({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "grapple", {
    name: "Grapple",
    hint: "Use the Grapple action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.grapple({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "highJump", {
    name: "High Jump",
    hint: "Use the High Jump action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.highJump({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "longJump", {
    name: "Long Jump",
    hint: "Use the Long Jump action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.longJump({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "shove", {
    name: "Shove",
    hint: "Use the Shove action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.shove({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "swim", {
    name: "Swim",
    hint: "Use the Swim action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.swim({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "trip", {
    name: "Trip",
    hint: "Use the Trip action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.trip({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "whirlingThrow", {
    name: "Whirling Throw",
    hint: "Use the Whirling Throw action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.whirlingThrow({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "craft", {
    name: "Craft",
    hint: "Use the Craft action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.craft({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "createADiversion", {
    name: "Create A Diversion",
    hint: "Use the Create A Diversion action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.createADiversion({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "feint", {
    name: "Feint",
    hint: "Use the Feint action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.feint({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "impersonate", {
    name: "Impersonate",
    hint: "Use the Impersonate action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.impersonate({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "lie", {
    name: "Lie",
    hint: "Use the Lie action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.lie({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "bonMot", {
    name: "Bon Mot",
    hint: "Use the Bon Mot action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.bonMot({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "gatherInformation", {
    name: "Gather Information",
    hint: "Use the Gather Information action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.gatherInformation({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "makeAnImpression", {
    name: "Make an Impression",
    hint: "Use the Make an Impression action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.makeAnImpression({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "request", {
    name: "Request",
    hint: "Use the Request action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.request({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "coerce", {
    name: "Coerce",
    hint: "Use the Coerce action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.coerce({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "demoralize", {
    name: "Demoralize",
    hint: "Use the Demoralize action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.demoralize({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "hide", {
    name: "Hide",
    hint: "Use the Hide action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.hide({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "sneak", {
    name: "Sneak",
    hint: "Use the Sneak action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.sneak({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });

  game.keybindings.register("pf2e-f-is-for-flatfooted", "pickALock", {
    name: "Pick a Lock",
    hint: "Use the Pick a Lock action with the selected token or assigned character.",
    editable: [],
    onDown: () => { game.pf2e.actions.pickALock({ actors: oneSelectedTokenActorOrDefaultCharacter() })},
  });
})
