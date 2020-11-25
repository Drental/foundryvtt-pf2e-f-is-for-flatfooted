class TIsForTarget {

  static ready() {
    $(document).keydown(function(e) {
      if (e.which == 84) {
        if (TIsForTarget.hovering) {
          if (game.user.targets.has(TIsForTarget.hovering))
            TIsForTarget.hovering.setTarget(false, {user: game.user, releaseOthers: !e.shiftKey});
          else
            TIsForTarget.hovering.setTarget(game.user, {releaseOthers: !e.shiftKey});
        }
      }
    });
  }

  static onHoverToken(token, hovered) {
    TIsForTarget.hovering = hovered ? token : undefined;
  }

}

Hooks.once('ready', TIsForTarget.ready);
Hooks.on('hoverToken', TIsForTarget.onHoverToken);

