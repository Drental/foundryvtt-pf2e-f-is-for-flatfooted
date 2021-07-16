class FIsForFlatFooted {

  static onKeyDown(e) {
      if (e.which == 70) {
        if (FIsForFlatFooted.hovering) {
          game.pf2e.StatusEffects.setStatus(canvas.tokens._hover, [{ name: 'flatFooted', toggle: true }]);
        }
      }
  }

  static ready() {
    $(document).unbind('keydown', FIsForFlatFooted.onKeyDown);
    $(document).keydown(FIsForFlatFooted.onKeyDown);
  }

}

Hooks.on('canvasReady',FIsForFlatFooted.ready);

