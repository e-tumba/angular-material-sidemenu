export default function() {

  return `
    <div class="md-sidemenu-content" layout="column">
      <md-button class="md-sidemenu-toggle" ng-if="$mdSidemenuContent.heading" ng-click="$mdSidemenuContent.changeState();" ng-class="{ 'md-active': $mdSidemenuContent.visible }">
        <div layout="row">
          <div ng-transclude="icon" layout="column" layout-align="center center"></div>
          <span flex ng-bind="$mdSidemenuContent.heading"></span>
          <md-icon class="md-sidemenu-toggle-icon">
            <svg viewBox="0 0 24 24">
                <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/>
                <path d="M0-.75h24v24H0z" fill="none"/>
            </svg>
          </md-icon>
        </div>
      </md-button>

      <div class="md-sidemenu-wrapper"  md-sidemenu-disable-animate ng-class="{ 'md-active': $mdSidemenuContent.visible, 'md-sidemenu-wrapper-icons':  true }" layout="column" ng-transclude="body"></div>
    </div>
  `;

}
