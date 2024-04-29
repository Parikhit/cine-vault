import Card from './Card.component';

const Cards = ({ data, type }) => {
    return (
        <div className='sm:grid sm:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto sm:p-4 w-full'>
            {data.map((item, id) => (
                <Card
                    key={id}
                    data={item}
                    type={type}
                />
            ))}
        </div>
    );
};

export default Cards;
