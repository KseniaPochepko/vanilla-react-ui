import PropTypes from 'prop-types';

export function Icon({ fontSize, children }) {
  return (
    <div className="material-icons" style={{ fontSize }}>
      {children}
    </div>
  );
}

Icon.propTypes = {
  fontSize: PropTypes.string,
};
