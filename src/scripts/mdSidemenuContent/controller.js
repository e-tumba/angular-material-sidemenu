export default function($sce) {

  this.visible = false;

  this.changeState = function() {
    this.visible = !this.visible;
  };

  this.icon = $sce.trustAsHtml(this.icon);
}
