import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ title, subTitle, firsName }) => {

  return (
    <>
      <h1> {title} </h1>
      <p>{subTitle}</p>
      <p>{firsName}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
};

// Estos cargan antes que los proptypes por eso no da errors
FirstApp.defaultProps = {
  firsName: 'César',
  subTitle: 'No hay subtitulo',
  // title: 'No hay titulo',
}

export default FirstApp;
