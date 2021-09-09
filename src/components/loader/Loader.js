import ReactLoading from 'react-loading';
import s from './Loader.module.css';
const Example = ({ type, color }) => (
  <ReactLoading
    className={s.loader}
    type={'bars'}
    color={'red'}
    height={64}
    width={54}
  />
);

export default Example;
