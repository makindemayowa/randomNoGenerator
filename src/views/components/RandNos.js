import React from "react";
import { AutoSizer, List } from "react-virtualized";
import { Row, Col } from "reactstrap";

const RandNos = ({ height, width, list }) => {
  const ITEMS_COUNT = list.length;
  const ITEM_SIZE = 200;
  const itemsPerRow = Math.floor(width / ITEM_SIZE);
  const rowCount = Math.ceil(ITEMS_COUNT / itemsPerRow);

  const rowRenderer = ({ index, key, style }) => {
    const items = [];
    const convertedIndex = index * itemsPerRow;
    for (let i = convertedIndex; i < convertedIndex + itemsPerRow; i++) {
      if (i >= list.length) {
        break;
      }
      items.push(
        <Col md="2" sm="12" className="Item" key={i}>
          {`(0)${list[i]}`}
        </Col>
      );
    }

    return (
      <Row key={key} style={style}>
        {items}
      </Row>
    );
  };

  return (
    <AutoSizer>
      {() => {
        return (
          <List
            rowRenderer={rowRenderer}
            className="List"
            height={height}
            rowHeight={50}
            rowCount={rowCount}
            width={width}
            style={{ outline: 0 }}
          />
        );
      }}
    </AutoSizer>
  );
};

export default RandNos;
