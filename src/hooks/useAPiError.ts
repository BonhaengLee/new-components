import { useCallback } from "react";

// 기본 핸들러 예시. 특정 HTTP Status와 서비스 표준 에러 Code 일 때 전역적으로 적용하기로 사전 정의한 핸들러
type IErrorHandlerObjType = {
  [key in "common" | "default" | 401 | 403 | 409 | 500]: () => void;
};

// 매개변수 handlers: 컴포넌트에서 재정의한 핸들러 모음
export const useApiError = (handlers: IErrorHandlerObjType) => {
  // 우선순위에 따른 핸들러의 선택과 실행
  const handleError = useCallback(
    (error) => {
      const httpStatus: "common" | "default" | 401 | 403 | 409 | 500 =
        error.status; // HTTP Status
      // const serviceCode = error.response.meta.code; // 서비스 표준 에러 Code

      switch (true) {
        case httpStatus === "common":
          // 공통 에러 처리
          if (handlers.common) {
            handlers.common();
          } else {
            commonHandler();
          }
          break;
        case httpStatus === 401:
          if (handlers[401]) {
            handlers[401]();
          } else {
            handler401();
          }
          break;
        case httpStatus === 403:
          if (handlers[403]) {
            handlers[403]();
          } else {
            handler403();
          }
          break;
        case httpStatus === 409:
          if (handlers[409]) {
            handlers[409]();
          } else {
            handler409();
          }
          break;
        case httpStatus === 500:
          if (handlers[500]) {
            handlers[500]();
          } else {
            handle500();
          }
          break;
        default:
          if (handlers.default) {
            handlers.default();
          } else {
            defaultHandler();
          }
          break;
      }
    },
    [
      commonHandler,
      defaultHandler,
      handler401,
      handler403,
      handler409,
      handle500,
    ]
  );

  // ...
  return { handleError };
};

function commonHandler() {
  // 공통 처리 로직 수행
  console.log("commonHandler");
}

function defaultHandler() {
  // 기본 처리 로직 수행
  console.log("defaultHandler");
}

function handler401() {
  // 401 처리 로직 수행
  console.log("handler401");
}

function handler403() {
  // 403 처리 로직 수행
  console.log("handler403");
}

function handler409() {
  // 409 10001 처리 로직 수행
  console.log("handler40910001");
}

// function handler40910002() {
//   // 409 10002 처리 로직 수행
//   console.log("handler40910002");
// }

function handle500() {
  // 500 처리 로직 수행
  console.log("handle500");
}
