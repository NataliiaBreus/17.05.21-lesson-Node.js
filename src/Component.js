module.exports = class Component {
    constructor(props) {
      this.props = props;
    }
    render() {
      const elem = document.createElement('h2');
      elem.textContent = 'Hello Webpack';
      elem.classList.add('heading');
      document.getElementById('root').append(elem);
    }
  };

  module.exports = Component;
  export default Component;