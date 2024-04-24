import "./styles.css";
import AccessibilityIcon from "../../../assets/icons/accessibility.svg?react";
import { toggleAccessibilityMenu} from "../../../reducers/ accessibilityReducer.ts";
import {useDispatch, useSelector } from "react-redux";
import {RootState} from "../../../store";

const Accessibility = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.accessibility.isOpen);
  console.log(isOpen)

  const handleOpen = () => {
    dispatch(toggleAccessibilityMenu());
  }

  return (
    <>
      <button className="accessibility-menu__button"
        aria-label="Przycisku menu dostępności"
        onClick={handleOpen}
        tabIndex={0}
      >
        <AccessibilityIcon />
      </button>
    </>

  );
};

export default Accessibility;
