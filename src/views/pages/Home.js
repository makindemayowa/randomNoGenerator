import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { generateNos, sortAsc, sortDesc, getMaxNo, getMinNo } from "../../api";
import RandNos from "../components/RandNos";
import CustomModal from "../components/CustomModal";
import "./home.css";

class App extends Component {
  state = {
    quantity: 0,
    randNos: [],
    width: 0
  };

  componentDidMount() {
    const storedNos = JSON.parse(localStorage.getItem("phoneNumbers"));
    if (storedNos) {
      this.setState({
        randNos: [...storedNos]
      });
    } else {
      this.generateRandomNumbers();
    }

    //eslint-disable-next-line
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    this.setState({
      width
    });
  }

  sortNumbers = dir => {
    const { randNos } = this.state;
    if (dir === "asc") {
      this.setState({
        randNos: [...sortAsc(randNos)]
      });
    } else {
      this.setState({
        randNos: [...sortDesc(randNos)]
      });
    }
  };

  getMaximumNo = () => {
    const param = [...this.state.randNos];
    this.setState({
      maxNo: getMaxNo(param)
    });
  };

  getMinimumNo = () => {
    const param = [...this.state.randNos];
    this.setState({
      minNo: getMinNo(param)
    });
  };

  generateRandomNumbers = (quantity = 8000) => {
    const result = generateNos(quantity);
    this.setState({
      randNos: [...result]
    });
  };

  render() {
    const { randNos, width, maxNo, minNo } = this.state;
    return (
      <div className="pt-4 container">
        <Row>
          <Col md="4">
            Random Phone Numbers: <b>{randNos.length}</b>
          </Col>
          <Col md="8">
            <Row>
              <Col md="3">
                <button
                  className="mr-2 btn btn-primary"
                  onClick={() => this.generateRandomNumbers()}
                >
                  Re-run
                </button>
              </Col>
              <Col md="3">
                <CustomModal
                  buttonLabel="Get Max"
                  onclick={this.getMaximumNo}
                  modalTitle="Maximun Number"
                  modalBody={`The maximum phone number is (0)${maxNo}`}
                />
              </Col>
              <Col md="3">
                <CustomModal
                  buttonLabel="Get Min"
                  modalTitle="Minimum Number"
                  onclick={this.getMinimumNo}
                  modalBody={`The minimum phone number is (0)${minNo}`}
                />
              </Col>
              <Col md="3">
                <span className="dropdown">
                  <button
                    className="btn btn-primary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <button
                      onClick={() => this.sortNumbers("asc")}
                      className="dropdown-item"
                    >
                      ascending
                    </button>
                    <button
                      onClick={() => this.sortNumbers("desc")}
                      className="dropdown-item"
                    >
                      descending
                    </button>
                  </div>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="mt-3 row">
          <RandNos
            items={randNos}
            hasNextPage={false}
            isNextPageLoading={false}
            list={randNos}
            height={1000}
            width={width - 80}
            loadNextPage={this.generateNos}
          />
        </div>
      </div>
    );
  }
}

export default App;
