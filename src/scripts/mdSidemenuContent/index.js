import controller from './controller';
import template from './template';

let directive = () => {

  return {
    restrict: 'E',
    scope: {
      heading: '@mdHeading',
	    visible : '<mdOpened'
    },
    replace: true,
    transclude: {
      'icon': '?mdSidemenuContentIcon',
      'body': 'mdSidemenuContentBody'
    },
    template,
    controller,
    controllerAs: '$mdSidemenuContent',
    bindToController: true
  };

};

export default {
  name: 'mdSidemenuContent',
  directive
};
