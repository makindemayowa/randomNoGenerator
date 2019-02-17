import React from "react";
import TestRenderer from "react-test-renderer";
import { shallow } from "enzyme";
import CustomModal from "./CustomModal";

describe("The CustomModal component", () => {
  const props = {
    buttonLabel: "Get Min",
    modalTitle: "Minimum Number",
    className: "minNo",
    onclick: jest.fn(),
    modalBody: `The minimum phone number is 0909`
  };
  it("should toggle the modal state on click", () => {
    const customModalContainer = shallow(<CustomModal {...props} />);
    const prevState = customModalContainer.instance().state.modal;
    customModalContainer.instance().toggle();
    expect(customModalContainer.instance().state.modal).toEqual(!prevState);
  });
});
