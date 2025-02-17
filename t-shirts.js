const tshirts = [
  {
    title: 'Blue T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Bright Purple T-Shirt',
    image: 'bright-purple-t-shirt.jpg',
    price: 5.99,
    stock: 1,
    quantity: 1
  },
  {
    title: 'Cobalt Blue T-Shirt',
    image: 'cobalt-blue-t-shirt.jpg',
    price: 9.99,
    stock: 5,
    quantity: 1
  },
  {
    title: 'Green T-Shirt',
    image: 'green-t-shirt.jpg',
    price: 6.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Grey T-Shirt',
    image: 'blue-t-shirt.jpg',
    price: 4.99,
    stock: 2,
    quantity: 1
  },
  {
    title: 'Light Green T-Shirt',
    image: 'light-green-t-shirt.jpg',
    price: 7.99,
    stock: 4,
    quantity: 1
  },
  {
    title: 'Purple T-Shirt',
    image: 'purple-t-shirt.jpg',
    price: 7.99,
    stock: 0,
    quantity: 1
  },
  {
    title: 'Red T-Shirt',
    image: 'red-t-shirt.jpg',
    price: 6.99,
    stock: 3,
    quantity: 1
  },
  {
    title: 'Teal T-Shirt',
    image: 'teal-t-shirt.jpg',
    price: 7.99,
    stock: 2,
    quantity: 1
  }
]


function Title(props) {
  return <h2>{props.title}</h2>
}

function Image(props) {
  return <img className="img-fluid" src={'images/' + props.src} alt={props.title} />
}

function Stock({stock}) {
  const style = {
    color: stock < 2 ? 'red' : 'black'
  }
  return stock ? <p className="transition" style={style}>{stock} left</p> : <p className="animate">Sold Out!</p>
}

const Price = ({price}) => {
  return <p><strong>${price}</strong></p> 
}

function Buy ({ stock, onBuy, quantity, onQtyChange }) {
  function clickHandler(e) {
    e.preventDefault();
    onBuy();
  }

  return (
    stock ? 
    <form>
      <div className="input-group mb-3">
        <input type="number" className="form-control" value={quantity} placeholder="0"  min="1" max={stock} onChange={(e) => onQtyChange(e.target.value)} />
        <button type="submit" className="btn btn-outline-secondary" onClick={(e) => clickHandler(e)} >Buy</button>
      </div>
    </form> : ''
  )
}

function Tshirt({tshirt}) {
  const [stock, setStock] = React.useState(tshirt.stock)
  const [quantity, setQuantity] = React.useState(tshirt.quantity)
  
  function buyHandler() {
    if(stock >= quantity) {
      setStock(stock - quantity)
    }
  }

  function qtyChangeHandler(value){
    setQuantity(value)
  }

  return (
    <div className="col col-12 col-md-6 col-lg-4 my-3">
      <Image src={tshirt.image} title={tshirt.title}/>
      <Title title={tshirt.title} />
      <Price price={tshirt.price} />
      <Stock stock={stock} />

      <div className="row">
        <div className="col-4">
          <Buy stock={stock} quantity={quantity} onBuy={buyHandler} onQtyChange={qtyChangeHandler} />
        </div>
      </div>
    </div>
  )
} 

function App () {
  return ( 
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>T-Shirts</h1>
        </div>
      </div>
      <div className="row">
        {tshirts.map(tshirt => <Tshirt key={tshirt.id} tshirt={tshirt} />)}
      </div>
    </div>
  )
}


const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)