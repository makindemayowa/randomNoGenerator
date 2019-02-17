import React from "react";
import TestRenderer from "react-test-renderer";
import { shallow } from "enzyme";
import Home from "./Home";
import RandNos from "../components/RandNos";
import { generateNos, sortAsc, sortDesc } from "../../api";

describe("The Home component", () => {
  describe("with no data from localstorage", () => {
    const componentWrapper = TestRenderer.create(<Home />);
    const componentInstance = componentWrapper.getInstance();
    it("should read randomNumbers from the localStorage on page load", () => {
      expect(componentInstance.state.randNos.length).toEqual(8000);
    });
  });

  describe("loading data from localstorage", () => {
    const randomNumbers = generateNos(10);
    const sortedAscendingNumbers = sortAsc([...randomNumbers]);
    const sorteddescendingNumbers = sortDesc([...randomNumbers]);
    const componentWrapper = TestRenderer.create(<Home />);
    const componentInstance = componentWrapper.getInstance();
    it("should read randomNumbers from the localStorage on page load", () => {
      expect(componentInstance.state).toHaveProperty("randNos", randomNumbers);
    });

    it("should set maximum number to state when the get maximum button is clicked", () => {
      const componentRoot = componentWrapper.root;
      const maxButton = componentRoot.findByProps({
        className: "maxNo"
      });
      maxButton.props.onclick();
      const homeComponentState = componentWrapper.getInstance().state;
      expect(homeComponentState.maxNo).toEqual(sorteddescendingNumbers[0]);
    });

    it("should set minimum number to state when the get minimum button is clicked", () => {
      const componentRoot = componentWrapper.root;
      const minButton = componentRoot.findByProps({
        className: "minNo"
      });
      minButton.props.onclick();
      const homeComponentState = componentWrapper.getInstance().state;
      expect(homeComponentState.minNo).toEqual(sortedAscendingNumbers[0]);
    });

    it("should sort the random numbers in ascending order when the ascending button is clicked", () => {
      const componentRoot = componentWrapper.root;
      const expectedValue = sortAsc([...randomNumbers]);
      const ascendingButton = componentRoot.findByProps({
        className: "dropdown-item sortAsc"
      });
      ascendingButton.props.onClick();
      const homeComponentState = componentWrapper.getInstance().state;
      expect(homeComponentState.randNos).toEqual(expectedValue);
    });

    it("should sort the random numbers in descending order when the descending button is clicked", () => {
      const componentRoot = componentWrapper.root;
      const expectedValue = sortDesc([...randomNumbers]);
      const descendingButton = componentRoot.findByProps({
        className: "dropdown-item sortDesc"
      });
      descendingButton.props.onClick();
      const homeComponentState = componentWrapper.getInstance().state;
      expect(homeComponentState.randNos).toEqual(expectedValue);
    });

    it("should generate random 8000 numbers on click of Re-run button", () => {
      const componentRoot = componentWrapper.root;
      const rerunButton = componentRoot.findByProps({
        className: "mr-2 btn btn-primary"
      });
      rerunButton.props.onClick();
      const homeComponentState = componentWrapper.getInstance().state;
      expect(homeComponentState.randNos.length).toEqual(8000);
    });

    it("should contain a randNos component", () => {
      const homeContainer = shallow(<Home />);
      const randNos = homeContainer.find(RandNos).render();
      expect(randNos).toHaveLength(1);
    });
  });
});
