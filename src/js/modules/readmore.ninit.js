$('.readmore').readmore({
  // Be sure to use the same speed value in your CSS transition property.
  speed: 500,
  moreLink: '<a href="#" class="btn-solid btn-showmore">Read More</a>',
  lessLink: '<a href="#" class="btn-solid btn-showmore">Read Less</a>',
  collapsedHeight: 800,
  
  // Add the class 'transitioning' before toggling begins.
  beforeToggle: function(trigger, element, expanded) {
    element.addClass('transitioning');
    
  },
  
  // Remove the 'transitioning' class when toggling completes.
  afterToggle: function(trigger, element, expanded) {
    element.removeClass('transitioning');
  }
});