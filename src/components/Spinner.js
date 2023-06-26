import { TailSpin } from 'react-loader-spinner';

const Spinner = ({ width, height, styles, color = 'tomato' }) => {
  return (
    <TailSpin
      height={width}
      width={height}
      color={color}
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={styles}
      visible={true}
    />
  );
};

export default Spinner;
