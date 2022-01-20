import { createSlice } from "@reduxjs/toolkit";
import { getMyDevices } from "../actions/devicesActions";
type InitialState = {
  videoDevices: MediaDeviceInfo[];
  // videoDevices: string;

  selectedVideoDeviceId: string;
  selectedVideoDeviceLabel: string;

  audioDevices: MediaDeviceInfo[];
  selectedAudioDeviceId: string;
  selectedAudioDeviceLabel: string;

  speakerDevices: MediaDeviceInfo[];
  selectedSpeakerDeviceId: string;
  selectedSpeakerDeviceLabel: string;

  globalMutedForAllVideoTag: boolean;
};

// type TypeAdd<T> = {
//   [key in keyof T]: T[key] extends string ? T[key] | null | undefined : T[key];
// };

// type devicesSliceInitialStateType = TypeAdd<InitialState>;

const initialState: InitialState = {
  videoDevices: [],
  selectedVideoDeviceId: "",
  selectedVideoDeviceLabel: "",

  audioDevices: [],
  selectedAudioDeviceId: "",
  selectedAudioDeviceLabel: "",

  speakerDevices: [],
  selectedSpeakerDeviceId: "",
  selectedSpeakerDeviceLabel: "",

  globalMutedForAllVideoTag: true
};

const devicesSlice = createSlice({
  name: "devices",
  initialState,
  reducers: {
    // get camera device
    getVideoDevices(state, action) {
      state.videoDevices = action.payload;
    },
    getSelectedVideoDeviceId(state, action) {
      state.selectedVideoDeviceId = action.payload;
    },
    getSelectedVideoDeviceLabel(state, action) {
      state.selectedVideoDeviceLabel = action.payload;
    },
    // end of get camera device

    // get audio input device
    getAudioDevices(state, action) {
      state.audioDevices = action.payload;
    },
    getSelectedAudioDeviceId(state, action) {
      state.selectedAudioDeviceId = action.payload;
    },
    getSelectedAudioDeviceLabel(state, action) {
      state.selectedAudioDeviceLabel = action.payload;
    },
    // end of get auido input device

    // get speaker device
    getSpeakerDevices(state, action) {
      state.speakerDevices = action.payload;
    },
    getSelectedSpeakerDeviceId(state, action) {
      state.selectedSpeakerDeviceId = action.payload;
    },
    getSelectedSpeakerDeviceLabel(state, action) {
      state.selectedSpeakerDeviceLabel = action.payload;
    },
    // end of speaker device

    // set GlobalMutedForAllVideoTag
    setGlobalMutedForAllVideoTag(state, action) {
      state.globalMutedForAllVideoTag = action.payload;
    }
  },

  extraReducers: builder =>
    builder
      .addCase(getMyDevices.pending, (state, action) => {})
      .addCase(getMyDevices.fulfilled, (state, action) => {
        state.videoDevices = action.payload?.videoDevices || [];
        state.audioDevices = action.payload?.audioDevices || [];
        state.speakerDevices = action.payload?.speakerDevices || [];
      })
      .addCase(getMyDevices.rejected, (state, action) => {})
      .addMatcher(
        action => {
          return action.type.includes("/pending");
        },
        (state, action) => {
          console.log("add matcher in devicesSlice, pending");
        }
      )
});

export default devicesSlice;
