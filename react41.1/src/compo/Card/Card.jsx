import './card-conten.css'
const Card = ({card}) => {
    return (
        <div>
            <h4>Card Add: {card.length}</h4>
            <div className="card-conten">
                {card.map(bottle=><img src={bottle.img}></img>)}
            </div>
        </div>
    );
};

export default Card;