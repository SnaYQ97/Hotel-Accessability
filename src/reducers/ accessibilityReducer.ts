import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum Contrast {
  YELLOW_ON_BLACK = "yellowOnBlack",
  BLACK_ON_YELLOW = "blackOnYellow",
  WHITE_ON_BLACK = "whiteOnBlack",
  BLACK_ON_WHITE = "blackOnWhite",
  DEFAULT = "default",
}

export interface FontOptions {
  fontSize: number;
  paragraphSpacing: number;
  lineSpacing: number;
  wordSpacing: number;
  letterSpacing: number;
}

export interface AccessibilityState {
  isOpen: boolean;
  contrast: Contrast;
  fontOptions: FontOptions;
}

const initialState: AccessibilityState = {
  isOpen: false,
  contrast: Contrast.DEFAULT,
  fontOptions: {
    fontSize: 0,
    paragraphSpacing: 0,
    lineSpacing: 0,
    wordSpacing: 0,
    letterSpacing: 0,
  }
};

const accessibilitySlice = createSlice({
  name: "accessibility",
  initialState,
  reducers: {
    toggleAccessibilityMenu: (state) => {
      state.isOpen = !state.isOpen;
    },
    setContrast: (state, action: PayloadAction<Contrast>) => {
      state.contrast = action.payload;
    },
    increaseTextOption: (state, action: PayloadAction<keyof FontOptions>) => {
      state.fontOptions[action.payload]++;
    },
    decreaseTextOption: (state, action: PayloadAction<keyof FontOptions>) => {
      state.fontOptions[action.payload]--;
    },
    resetTextOption: (state, action: PayloadAction<keyof FontOptions>) => {
      state.fontOptions[action.payload] = initialState.fontOptions[action.payload];
    }
  },
});

export const {
  toggleAccessibilityMenu,
  setContrast,
  increaseTextOption,
  decreaseTextOption,
  resetTextOption,
} = accessibilitySlice.actions;
export default accessibilitySlice.reducer;
