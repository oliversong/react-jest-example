const React = require('react');

const Test = React.createClass({
  render() {
    let repeat = true;
    while (repeat) {
      repeat = false;
      const x = [];
      const y = [];
      x.forEach(z => {
        y.find(o => o === 'test'); // fails
        y.includes('test'); // fails
        console.log(z); // passes
      });

      // when both are present, fails
      continue; // passes without break
      break; // passes without continue

      // these fail even in a control structure as below
      // if (true) {
      //   continue;
      // } else {
      //   break;
      // }
    }

    return <div>Test</div>;
  },
});

module.exports = Test;
