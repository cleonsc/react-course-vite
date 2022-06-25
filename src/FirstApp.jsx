import PropTypes from 'prop-types';

const FirstApp = ({ title, subTitle }) => {

  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle + 1}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
};
export default FirstApp;
