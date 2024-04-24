import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import {
  toggleAccessibilityMenu,
  Contrast,
  // decreaseTextOption, FontOptions,
  // increaseTextOption,
  // resetTextOption,
  setContrast
} from "../../../reducers/ accessibilityReducer.ts";
import {ChangeEvent, useEffect} from "react";
import "./styles.css";

const AccessibilityMenu = () => {
  const dispatch = useDispatch();
  const {contrast, isOpen} = useSelector((state: RootState) => state.accessibility);

  useEffect(() => {
    document.body.className = `contrast-${contrast}`;
  }, [contrast]);

  if (!isOpen) return null;

  const handleContrastChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    dispatch(setContrast(e.target.value as Contrast));
  };

  // const handleIncreaseTextOption = (option: keyof FontOptions) => {
  //   dispatch(increaseTextOption(option));
  // }
  //
  // const handleDecreaseTextOption = (option: keyof FontOptions) => {
  //   dispatch(decreaseTextOption(option));
  // }
  //
  // const handleResetTextOption = (option: keyof FontOptions) => {
  //   dispatch(resetTextOption(option));
  // }

  const handleToggleAccessibilityMenu = () => {
    dispatch(toggleAccessibilityMenu());
  }

  return (
    <div className='accessibility-menu' role="region" aria-label="Accessibility Menu">
      <button
        onClick={handleToggleAccessibilityMenu}
        aria-label="Przycisk zamknięcia menu dostępności"
      >
        Close Menu
      </button>
      <section>
        <h2>Skróty</h2>
        <p>Użyj <kbd>ctrl</kbd> + <kbd>m</kbd> aby otworzyć/zamnknąć menu dostępności</p>
      </section>
      <section className="contrast">
        <h2>Kontrast</h2>
        <label htmlFor="contrast">Wybierz kontrast:</label>
        <select id="contrast" name="contrast" value={contrast} onChange={handleContrastChange}>
          <option value={Contrast.DEFAULT}>Domyślny</option>
          <option value={Contrast.BLACK_ON_YELLOW}>Czarny na żółtym</option>
          <option value={Contrast.YELLOW_ON_BLACK}>Żółty na czarnym</option>
          <option value={Contrast.BLACK_ON_WHITE}>Czarny na białym</option>
          <option value={Contrast.WHITE_ON_BLACK}>Biały na czarnym</option>
        </select>
      </section>

      {/*<section className="text">*/}
      {/*  <h2>Text Options</h2>*/}
      {/*  <div>*/}
      {/*    {Object.keys(fontOptions).map((option) => (*/}
      {/*      <div key={option}>*/}
      {/*        <h3>{option}</h3>*/}
      {/*        <button type="button" onClick={() => handleIncreaseTextOption(option as keyof FontOptions)}>*/}
      {/*        Increase*/}
      {/*        </button>*/}
      {/*        <button type="button" disabled={fontOptions[option as keyof FontOptions] == 0} onClick={() => handleDecreaseTextOption(option as keyof FontOptions)}>*/}
      {/*        Decrease*/}
      {/*        </button>*/}
      {/*        <button type="button" onClick={() => handleResetTextOption(option as keyof FontOptions)}>*/}
      {/*        Reset*/}
      {/*        </button>*/}
      {/*      </div>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</section>*/}
    </div>
  );
};

export default AccessibilityMenu;
