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

  //Expand these as needed - the first could probably be detected automatically, but, I'm feeling lazy tonight. :)
  let alreadyKeyboundConditions = ['flat-footed'];
  let ignorableConditions = ['helpful', 'friendly', 'unfriendly'];
  let numericConditions = ['clumsy', 'doomed', 'drained', 'dying', 'enfeebled', 'frightened', 'sickened', 'slowed', 'stunned', 'stupefied', 'wounded'];

  let conditions = Object.keys(CONFIG.PF2E.conditionTypes).filter(condition => !ignorableConditions.includes(condition) && !alreadyKeyboundConditions.includes(condition));
  for (let id = 0; id < conditions.length; id++) {
    let condition = conditions[id];
    let conditionName = condition.charAt(0).toUpperCase() + condition.slice(1);

    if (condition) {
      game.keybindings.register("pf2e-f-is-for-flatfooted", condition, {
        name: `${conditionName}: toggle`,
        hint: `Toggle the ${conditionName} condition of the selected token(s) or assigned character.`,
        editable: [],
        onDown: () => {
          selectedTokenActorsOrDefaultCharacter().forEach(a => a.toggleCondition(condition))
        },
      });

      if (numericConditions.includes(condition)) {
        game.keybindings.register("pf2e-f-is-for-flatfooted", `${condition}-increase`, {
          name: `${conditionName}: increase`,
          hint: `Increase the ${conditionName} condition of the selected token(s) or assigned character.`,
          editable: [],
          onDown: () => {
            selectedTokenActorsOrDefaultCharacter().forEach(a => a.increaseCondition(condition))
          },
        });

        game.keybindings.register("pf2e-f-is-for-flatfooted", `${condition}-decrease`, {
          name: `${conditionName}: decrease`,
          hint: `Decrease the ${conditionName} condition of the selected token(s) or assigned character.`,
          editable: [],
          onDown: () => {
            selectedTokenActorsOrDefaultCharacter().forEach(a => a.decreaseCondition(condition))
          },
        });
      }
    }
  }

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
