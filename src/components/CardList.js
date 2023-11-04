import Card from './Card';

const CardList = ({ robots }) => {
  if (true) {
    throw new Error('Nooooo');
  }
  return (
    <div>
      {robots.map(({ id, name, email }) => (
        <Card key={id} id={id} name={name} email={email} />
      ))}
    </div>
  );
};

export default CardList;
