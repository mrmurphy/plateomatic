const component = require('omniscient');
const React = require('react');
const {reduce} = require('lodash');

var weights = [45, 25, 10, 5, 2.5];

const getCount = function(max, val) {
  return Math.floor(max / val)
}

const calc = function(total, bar) {
  var target = (total - bar) / 2;
  return reduce(weights, function(acc, i){
    var count = getCount(target, i);
    target = target - (count * i);
    var countstr = count > 1 ? `x${count}` : ''
    count && acc.push(`${i}${countstr}`);
    return acc;
  }, [])
}

export default component('PlaceCalc', function({bar, total}) {

  return <div className='col-xs-12' style={{marginTop:'1em', fontSize:'3em', color:'#1abc9c', textAlign:'center'}}>
    {calc(total, bar).map(m => <div>{m}</div>)}
  </div>
}).jsx
