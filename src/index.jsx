const React = require('react');
const component = require('omniscient');
const Immstruct = require('immstruct');

const mainStyle = require('./style.styl');
const DraggableNumber = require('./draggable-number');
const PlateCalc = require('./plate-calc');

const struct = Immstruct({
  bar: 45,
  total: 100,
})

const Main = component('Main', ({cursor}) => {
  const up = function(key) {
    return function(e) {
      cursor.set(key, e.target.value);
    }
  }

  return <div className="container">
    <div className="row">

      <div className="col-xs-12">
        <h1 style={{textAlign:'center'}}>Plate-o-matic!</h1>
      </div>

      <hr/>

      <div className="col-xs-6">
        <label>Bar Weight</label>
        <DraggableNumber value={cursor.get('bar')} style={{
          fontSize:'3em',
          padding:'1em',
          background: '#e74c3c',
          color: '#ecf0f1',
        }}
        onDoneDragging={up('bar')}/>
      </div>

      <div className="col-xs-6">
        <label>Total Weight</label>
        <DraggableNumber value={cursor.get('total')} style={{
          fontSize:'3em',
          padding:'1em',
          background: '#e74c3c',
          color: '#ecf0f1',
        }}
        onDoneDragging={up('total')}/>
      </div>

      <hr/>

      <PlateCalc bar={cursor.get('bar')} total={cursor.get('total')}/>

    </div>
  </div>
}).jsx

const render = function() {
  React.render(<Main cursor={struct.cursor()}/>, document.getElementById('main'))
}

struct.on('swap', render)

render()
