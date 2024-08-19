import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import I1 from "../../assets/F1.jpeg"
import I2 from "../../assets/F2.webp"
import I3 from "../../assets/F3.webp"
import I4 from "../../assets/F4.avif"
const Cards = () => (
  <div style={styles.container}>
    <Card
      hoverable
      style={styles.card}
      cover={<img alt="example" src={I1} />}
    >
    </Card>
    <Card
      hoverable
      style={styles.card}
      cover={<img alt="example" src={I2} />}
    >
    </Card>
    <Card
      hoverable
      style={styles.card}
      cover={<img alt="example" src={I3} />}
    >
    </Card>
    <Card
      hoverable
      style={styles.card}
      cover={<img alt="example" src={I4}/>}
    >
     
    </Card>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '16px',
    padding: '16px'
  },
  card: {
    width: 240,
  }
};

export default Cards;
