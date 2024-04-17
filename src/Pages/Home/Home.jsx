import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/modal/modalSlice';
import { Modal, CloseModalCross } from 'components';
import { modalNames } from 'constants/constants';
function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      HOME PAGE HERE. This page wants a private route. Please add a private
      route after adding a redux in project. And this page should be on another
      route.
      <button
        type="button"
        onClick={() => dispatch(openModal(modalNames.ADD_WATER))}
      >
        OPEN MODAL BUTTON
      </button>
      <Modal modalId={modalNames.ADD_WATER}>
        <div>
          <CloseModalCross />
          Modal content here
        </div>
      </Modal>
    </div>
  );
}

export default Home;
