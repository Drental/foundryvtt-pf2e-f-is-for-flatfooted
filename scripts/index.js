class TIsForTarget {

  static onKeyDown(e) {
      if (e.which == 84) {
        if (TIsForTarget.hovering) {
          if (game.user.targets.has(TIsForTarget.hovering))
            TIsForTarget.hovering.setTarget(false, {user: game.user, releaseOthers: !e.shiftKey});
          else
            TIsForTarget.hovering.setTarget(game.user, {releaseOthers: !e.shiftKey});
        }
      }
  }

  static ready() {
    $(document).unbind('keydown', TIsForTarget.onKeyDown);
    $(document).keydown(TIsForTarget.onKeyDown);
  }

  static onHoverToken(token, hovered) {
    TIsForTarget.hovering = hovered ? token : undefined;
  }

}

Hooks.on('canvasReady',TIsForTarget.ready);
Hooks.on('hoverToken', TIsForTarget.onHoverToken);

