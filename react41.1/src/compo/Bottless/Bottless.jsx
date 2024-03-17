import './bottle.css'

const Bottle = ({ bottle, handelAddEvent }) => {
    const {name, price, img}=bottle;
    return (
        <div className="Bottle">
            <h3>Bottle  name: {name}</h3>
            <img src={img} alt="" />
            <h3>Bottle Price: {price}</h3>
            <button onClick={() => handelAddEvent(bottle)}>Buy</button>
        </div>
    );
};

export default Bottle;