// function wait(
//   callback?: () => void,
//   options?: {
//     timeout?: number
//     interval?: number
//   }
// ): Promise<void>
import DelayedToggle from "./";
import {
  render,
  userEvent,
  wait,
  waitForElement,
  waitForDomChange,
  waitForElementToBeRemoved,
} from "@testing-library/react";

describe("<DelayedToggle />", () => {
  it("reveals text when toggle is ON", async () => {
    render(<DelayedToggle />);
    const toggleButton = screen.getByText("토글");
    userEvent.click(toggleButton);
    await wait(() => getByText("야호!!")); // 콜백 안의 함수가 에러를 발생시키지 않을 때 까지 기다립니다.
  });
});
