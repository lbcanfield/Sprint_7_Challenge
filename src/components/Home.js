import React from 'react';
import { useHistory } from 'react-router-dom';
import OrderForm from './OrderForm';

export default function Home(props) {
    const history = useHistory();

    const orderPizza = () => {
        history.push('/pizza');
    }
    return (
        <section className='home-container'>
            <div className='top-container'>
                <div className='txt-buffer'></div>
                <div className='top-txt'>
                    <h1>Your favorite food, delivered while coding</h1>
                </div>
                <div>
                    <button onClick={orderPizza}>Pizza?</button>
                </div>
            </div>
        </section>
    )
}