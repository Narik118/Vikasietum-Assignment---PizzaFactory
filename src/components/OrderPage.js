import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../App.css'
import { BsFillCartFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";


const pizzas = [
    {
        id: 1,
        name: 'Deluxe Veggie',
        type: 'veg',
        price: 0,
        image:'Assests/Pizza1.jpeg',
        custamization: [
            {name:'New Hand Tossed',price: 10 },
            {name:'Wheat Thin Crust',price: 10 },
            {name:'Cheese Burst',price: 10 },
            {name:'Fresh Pan Pizza',price: 10 },
            { name: 'Black Olive', price: 20 },
            { name: 'Capsicum', price: 25 },
            { name: 'Paneer', price: 35 },
            { name: 'Mushroom', price: 30 },
            { name: 'Tomato', price: 10 },
            { name: 'Regular', price: 150 },
            { name: 'Medium', price: 200 },
            { name: 'Large', price: 325 },
        ],
    },
    {
        id: 2,
        name: 'Cheese and Corn',
        type: 'veg',
        price: 0,
        image:'Assests/Pizza2.jpeg',
        custamization: [
            {name:'New Hand Tossed',price: 10 },
            {name:'Wheat Thin Crust',price: 10 },
            {name:'Cheese Burst',price: 10 },
            {name:'Fresh Pan Pizza',price: 10 },
            { name: 'Black Olive', price: 20 },
            { name: 'Capsicum', price: 25 },
            { name: 'Paneer', price: 35 },
            { name: 'Mushroom', price: 30 },
            { name: 'Tomato', price: 10 },
            { name: 'Regular', price: 175 },
            { name: 'Medium', price: 375 },
            { name: 'Large', price: 475 },


        ],
    },
    {
        id: 3,
        name: 'Paneer Tikka',
        type: 'veg',
        price: 0,
        image:'Assests/Pizza3.jpeg',
        custamization: [
            {name:'New Hand Tossed',price: 10 },
            {name:'Wheat Thin Crust',price: 10 },
            {name:'Cheese Burst',price: 10 },
            {name:'Fresh Pan Pizza',price: 10 },
            { name: 'Black Olive', price: 20 },
            { name: 'Capsicum', price: 25 },
            { name: 'Paneer', price: 35 },
            { name: 'Mushroom', price: 30 },
            { name: 'Tomato', price: 10 },
            { name: 'Regular', price: 160 },
            { name: 'Medium', price: 290 },
            { name: 'Large', price: 340 },


        ],
    },
    {
        id: 4,
        name: 'Non Veg Supreme',
        type: 'Non-Veg',
        price: 0,
        image:'Assests/Pizza4.jpeg',
        custamization: [
            {name:'New Hand Tossed',price: 10 },
            {name:'Wheat Thin Crust',price: 10 },
            {name:'Cheese Burst',price: 10 },
            {name:'Fresh Pan Pizza',price: 10 },
            { name: 'Chicken Tikka', price: 35 },
            { name: 'Barbeque Chicken', price: 45 },
            { name: 'Grilled Chicken', price: 40 },
            { name: 'Regular', price: 190 },
            { name: 'Medium', price: 325 },
            { name: 'Large', price: 425 },


        ],
    },
    {
        id: 5,
        name: 'Chicken Tikka',
        type: 'Non-Veg',
        price: 0,
        image:'Assests/Pizza5.jpeg',
        custamization: [
            {name:'New Hand Tossed',price: 10 },
            {name:'Wheat Thin Crust',price: 10 },
            {name:'Cheese Burst',price: 10 },
            {name:'Fresh Pan Pizza',price: 10 },
            { name: 'Chicken Tikka', price: 35 },
            { name: 'Barbeque Chicken', price: 45 },
            { name: 'Grilled Chicken', price: 40 },
            { name: 'Regular', price: 210 },
            { name: 'Medium', price: 370 },
            { name: 'Large', price: 500 },


        ],
    },
    {
        id: 6,
        name: 'Pepper Barbeque',
        type: 'Non-Veg',
        price: 0,
        image:'Assests/Pizza6.jpeg',
        custamization: [
            {name:'New Hand Tossed',price: 10 },
            {name:'Wheat Thin Crust',price: 10 },
            {name:'Cheese Burst',price: 10 },
            {name:'Fresh Pan Pizza',price: 10 },
            { name: 'Chicken Tikka', price: 35 },
            { name: 'Barbeque Chicken', price: 45 },
            { name: 'Grilled Chicken', price: 40 },
            { name: 'Regular', price: 220 },
            { name: 'Medium', price: 380 },
            { name: 'Large', price: 525 },


        ],
    },

];

const PizzaOrder = () => {
    const [selectedPizzas, setSelectedPizzas] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAddToCart = (id, custamization) => {
        const pizzaToAdd = pizzas.find((pizza) => pizza.id === id);
        const selectedcustamization = custamization
            .map((toppingName) => pizzaToAdd.custamization.find((t) => t.name === toppingName))
            .filter(Boolean);
        const totalToppingPrice = selectedcustamization.reduce((acc, t) => acc + t.price, 0);
        const updatedSelectedPizzas = [
            ...selectedPizzas,
            {
                ...pizzaToAdd,
                custamization: selectedcustamization,
                totalToppingPrice: totalToppingPrice,
                totalPrice: pizzaToAdd.price + totalToppingPrice,
            },
        ];
        setSelectedPizzas(updatedSelectedPizzas);
        const total = updatedSelectedPizzas.reduce((acc, pizza) => acc + pizza.totalPrice, 0);
        setTotalCost(total);
    };

    const handleRemoveFromCart = (id) => {
        const updatedSelectedPizzas = selectedPizzas.filter((pizza) => pizza.id !== id);
        setSelectedPizzas(updatedSelectedPizzas);
        const total = updatedSelectedPizzas.reduce((acc, pizza) => acc + pizza.totalPrice, 0);
        setTotalCost(total);
    };

    return (
        <div className='main-div'>
            <Container className='container-class'>

                <Row className='order-header'>
                    <Col xs={8}>
                        <h4 className='h4-margin'>Select a Pizza</h4>
                    </Col>
                    <Col xs={4} className="text-end">
                        <button className='view-cart-btn' onClick={handleShow}><BsFillCartFill color='white' size={20} />{selectedPizzas.length}</button>

                    </Col>

                </Row>

                {pizzas.map((pizza) => (
                    <Row className='pizza-row'>
                        <Col xs={{ order: 'last' }}md={8} className='order-xs-2 order-md-1'>
                            <div className="pizza-card" key={pizza.id}>
                                <div className='pizza-card-header'><h4 className='mediun-size'>{pizza.name}<h6>{pizza.type}</h6></h4></div>
                                <br />
                                <h6>Avaiable Custamization</h6>
                                <div className="custamization">
                                    <Row>
                                        {pizza.custamization.map((topping) => (
                                            <Col xs="auto" md="auto">
                                                <div key={topping.name}>
                                                    <input type="checkbox" id={`${pizza.id}-${topping.name}`} name={`${pizza.id}-${topping.name}`} value={topping.name} />
                                                    <label htmlFor={`${pizza.id}-${topping.name}`}>{topping.name} (+{topping.price.toFixed(2)})</label>
                                                </div>
                                            </Col>

                                        ))}
                                    </Row>
                                    
                                </div>
                                <br />
                                <Row>
                                    <Col>
                                        <Button
                                            className='add-to-cart-btn'
                                            id='add-to-cart'
                                            onClick={() => handleAddToCart(pizza.id, Array.from(document.querySelectorAll(`input[name^="${pizza.id}-"]:checked`)).map((topping) => topping.value))}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Col>
                                </Row>


                            </div>
                        </Col>
                        <Col xs={{ order: 'first' }} md={4} className=' pizza-img'>
                            {/* <img src={require('../Assests/Pizza1.jpeg')} width="100%" height="100%" /> */}
                            <img src={require(`../${pizza.image}`)} width="100%" height="100%" />
                        </Col>
                    </Row>

                ))}

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Items</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{selectedPizzas.map((pizza) => (
                        <div className="cart-item" key={pizza.id}>
                            <Row className='pizza-card-header'>
                                <Col>
                                    <h4 className='mediun-size'>{pizza.name}<h6>{pizza.type}</h6></h4>
                                </Col>
                                <Col className='text-end'>
                                    <Button variant="danger" onClick={() => handleRemoveFromCart(pizza.id)}>
                                        <ImCross />
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                {pizza.custamization.length > 0 && (
                                    <>
                                        <h6>Selected custamization</h6>
                                        {pizza.custamization.map((topping) => (
                                            <Col md="auto" xs="auto"> {topping.name} (+{topping.price.toFixed(2)})</Col>
                                        ))}
                                    </>
                                )}
                            </Row>
                            <Row>
                                <Col>
                                <p className='weight'>Total Price: {pizza.totalPrice.toFixed(2)}</p>
                                </Col>
                                <Col className='text-end'>
                                    
                                </Col>
                            </Row>




                        </div>
                    ))}
                        <p className="total-cost">Total Cost: Rs{totalCost.toFixed(2)}</p></Modal.Body>
                    <Modal.Footer>
                        <Button className='add-to-cart-btn' onClick={handleClose}>
                            Check out
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    );
};

export default PizzaOrder;