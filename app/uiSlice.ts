import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface uiState {
  googleChannel: boolean;
  facebookChannel: boolean;
  twitterChannel: boolean;
  linkedinChannel: boolean;
  pinterestChannel: boolean;
  slackChannel: boolean;
  domainInput: string;
  titleInput: string;
  descriptionInput: string;
  imageUrl: string;
  imageFile: string;
}

const initialState: uiState = {
  googleChannel: true,
  facebookChannel: true,
  twitterChannel: true,
  linkedinChannel: false,
  pinterestChannel: false,
  slackChannel: false,
  domainInput: "https://metatags.io",
  titleInput: "Meta Tags — Preview, Edit and Generate",
  descriptionInput:
    "With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!",
  imageUrl: "./assets/metatags-image.png",
  imageFile: "",
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleChannel: (state, action: PayloadAction<{ channelName: string }>) => {
      // @ts-ignore
      state[action.payload.channelName] = !state[action.payload.channelName];
    },
    setInputValue: (state, action: PayloadAction<{ inputName: string; value: string }>) => {
      // @ts-ignore
      state[action.payload.inputName] = action.payload.value;
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.imageFile = action.payload;
    },
  },
});

export const { toggleChannel, setInputValue, setImage } = uiSlice.actions;

export default uiSlice.reducer;
