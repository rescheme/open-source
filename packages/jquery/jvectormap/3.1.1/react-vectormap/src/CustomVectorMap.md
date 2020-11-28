Custom VectorMap examples:

```js
const mapContent = require('jvectormap-content/fr_regions_2016-mill.js');

<div style={{ height: 500 }}>
  <CustomVectorMap
    mapContent={mapContent}
  />
</div>
```

```js
const mapContent = require('./maps/custom.js').default;
initialState = { count: 1 };

<>
  <button onClick={() => setState({ count: state.count < 15 ? state.count + 1 : 1 })}>Stepper #{state.count} is selected.</button>

  <div style={{ height: 500 }}>
    <CustomVectorMap
      mapContent={mapContent}
      selectedRegions={'step' + state.count}
      className={'map-' + state.count}
    />
  </div>
</>
```
