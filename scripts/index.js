class FIsForFlatFooted {

  static onKeyDown(e) {
      if (e.which == 70) {
        if (FIsForFlatFooted.hovering) {
          game.pf2e.StatusEffects.setStatus(token, [{ name: 'flatFooted', toggle: true }]);
        }
      }
  }

  static ready() {
    $(document).unbind('keydown', FIsForFlatFooted.onKeyDown);
    $(document).keydown(FIsForFlatFooted.onKeyDown);
  }

  static onHoverToken(token, hovered) {
    FIsForFlatFooted.hovering = hovered ? token : undefined;
  }

}

Hooks.on('canvasReady',FIsForFlatFooted.ready);
Hooks.on('hoverToken', FIsForFlatFooted.onHoverToken);

