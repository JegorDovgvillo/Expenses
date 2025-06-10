import ExpenseItem from '../components/ExpenseCard/ExpenseItem';
import NewCard from '../components/NewCard/NewCard';

const MainPage = async () => {
  const response = await fetch('http://localhost:3001/getCards');
  let cards;
  if (response.ok) {
    const json = await response.json();
    cards = json;
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '370px 370px 370px',
        gap: '85px',
      }}
    >
      {cards.map((item: any) => {
        return (
          <ExpenseItem
            key={item.id}
            text={item.text}
            title={item.title}
            id={item.id}
          />
        );
      })}
      <NewCard />
    </div>
  );
};

export default MainPage;
