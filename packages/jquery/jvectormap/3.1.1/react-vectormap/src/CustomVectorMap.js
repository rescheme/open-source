import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';
import VectorMapAdapter from './VectorMapAdapter';

function CustomVectorMap({ mapContent, ...props }) {
  /**
   * load required map
   */
  useLayoutEffect(
    () => {
      $.fn.vectorMap('addMap', props.map, mapContent);
    },
    [props.map, mapContent]
  );

  return <VectorMapAdapter {...props} />;
}

CustomVectorMap.propTypes = {
  map: PropTypes.string,
  mapContent: PropTypes.exact({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    paths: PropTypes.objectOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

CustomVectorMap.defaultProps = {
  map: 'custom',
};

export default React.memo(CustomVectorMap);
