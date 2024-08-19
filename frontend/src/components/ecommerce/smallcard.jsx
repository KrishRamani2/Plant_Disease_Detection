import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import F4 from "../../assets/F4.avif"
const SmallCards = () => {
  // Generate an array of card data to map over
  const cardData = Array.from({ length: 10 }, (_, index) => ({
    id: index,
    imgSrc: F4,
  }));

  return (
    <div style={styles.container}>
      {cardData.map((card) => (
        <Card
          key={card.id}
          hoverable
          style={styles.card}
          cover={<img alt={card.title} src={card.imgSrc} />}
        >
          <Meta title={card.title} description={card.description} />
        </Card>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    overflowX: 'auto', // Allows horizontal scrolling if cards overflow
    padding: '16px',
    gap: '16px',
    whiteSpace: 'nowrap' // Ensures cards are displayed in a single row
  },
  card: {
    width: 120, // Adjust width to fit 10 cards in one line
    flex: '0 0 auto', // Ensures cards do not shrink
  }
};

export default SmallCards;
