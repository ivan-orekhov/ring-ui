export default `<span>
  <rg-button
    ng-click="button.model = !button.model"
    ng-disabled="button.dialogIsActive"
  >
    <rg-icon
      ng-show="button.model"
      glyph="{{button.chevronRight}}"
    ></rg-icon>

    <rg-icon
      ng-show="!button.model"
      glyph="{{button.chevronLeft}}"
    ></rg-icon>

    <span ng-transclude></span>
  </rg-button>
</span>`;
