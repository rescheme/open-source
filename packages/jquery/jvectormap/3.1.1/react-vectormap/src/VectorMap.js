import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import VectorMapAdapter from './VectorMapAdapter';

function VectorMap({ map, ...props }) {
  const [isReady, setIsReady] = useState(false);

  /**
   * load required map
   */
  useEffect(
    () => {
      import('jvectormap-content/'+map+'.js').then(
        content => {
          $.fn.vectorMap('addMap', map, content.default)
          setIsReady(true)
        },
        () => {
          // skip error
          setIsReady(true)
        }
      );
    },
    [map]
  );

  return isReady && <VectorMapAdapter map={map} {...props} />;
}

VectorMap.propTypes = {
  map: PropTypes.string.isRequired
};

export default React.memo(VectorMap);
