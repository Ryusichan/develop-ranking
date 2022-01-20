import { createAsyncThunk } from "@reduxjs/toolkit";
// -------- 내 장치정보들을 리스트 업하는 기능 --------
export const getMyDevices = createAsyncThunk(
  "devices/get",
  async (data, thunkAPI) => {
    console.log("getMyDevice activate");
    try {
      // 이함수의 코어
      // 현재 장치에 연결된 사용 가능한 모든 비디오 장치와 오디오 장치정보를 배열안에 담아서 반환해준다.
      const devices = await navigator.mediaDevices.enumerateDevices();

      // 디바이스에 연결된 카메라 장치 정보만 필터링해서를 불러와준다.
      const videoDevices = devices.filter(
        device => device.kind === "videoinput"
      );

      // 디바이스에 연결된 오디오 입력 장치 정보만 필터링해서를 불러와준다.
      const audioDevices = devices.filter(
        device => device.kind === "audioinput"
      );

      // 디바이스에 연결된 오디오 출력 장치 정보만 필터링해서를 불러와준다.
      const speakerDevices = devices.filter(
        device => device.kind === "audiooutput"
      );

      return { videoDevices, audioDevices, speakerDevices };
    } catch (e) {
      console.log(e);
    }
  }
);
// -------- end of 내 장치정보들을 리스트 업하는 기능 --------
