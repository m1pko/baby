 
var images = {
  logo: "http://baby.naodigonada.com/img/diaper.png"
};

var options = {};

// Grid 1

var logoClass = React.createClass({
  render: function () {
  return "<img class='img-responsive' src={images.logo} />";
  }
});

var logoElem = React.createElement(logoClass, options);

ReactDOM.render(
  logoElem,
  document.getElementById('dipper')
);
