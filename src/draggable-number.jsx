const component = require('omniscient');
const React = require('react');
const {merge, identity} = require('lodash');

React.initializeTouchEvents(true)

export default component('DraggableNumber', {
  getInitialState: function() {
    return { delta: 0 }
  },
  propTypes: {
    value: React.PropTypes.number,
    onDoneDragging: React.PropTypes.func,
    style: React.PropTypes.object,
  },
  getDefaultProps: function() {
    return {
      value: 0,
      onDoneDragging: identity,
      style: {},
    }
  }
}, function({value, onDoneDragging}) {
  const onDragStart = (e) => {
    console.log(e);
  }
  const onTouchMove = (e) => {
    console.log(e);
  }
  const onDragEnd = (e) => {
    console.log(e);
  }
  const modifiedStyle = merge({cursor:'pointer', userSelect: 'none'}, this.props.style)

  // return <div
  //   ref='num'
  //   style={modifiedStyle}
  //   onTouchStart={onDragStart}
  //   onTouchEnd={onDragEnd}
  //   onTouchMove={onTouchMove}
  //   >
  //     {value + this.state.delta}
  // </div>
  return <input className="form-control" type="number" value={this.props.value} onChange={this.props.onDoneDragging}/>
}).jsx
