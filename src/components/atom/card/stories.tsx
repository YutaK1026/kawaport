import Card from ".";

const meta = {
  title: "Card",
  component: Card,
};

export default meta;

export const Default = () => {
  return (
    <Card>
      <Card.Title>タイトル</Card.Title>
      <Card.Content>ここに文章を記述</Card.Content>
      <Card.Footer>これがフッター</Card.Footer>
    </Card>
  );
};
Default.storyName = "Card";

export const TwoCard = () => {
  return (
    <>
      <Card>
        <Card.Title>タイトル</Card.Title>
        <Card.Content>ここに文章を記述</Card.Content>
        <Card.Footer>これがフッター</Card.Footer>
      </Card>
      <Card>
        <Card.Title>タイトル</Card.Title>
        <Card.Content>ここに文章を記述</Card.Content>
        <Card.Footer>これがフッター</Card.Footer>
      </Card>
    </>
  );
};
TwoCard.storyName = "カードが2つある場合";
