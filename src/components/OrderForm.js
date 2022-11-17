export default function OrderForm(props) {
    const { data } = props;
    // console.log(data);

    const crust = data.filter((element) => {
        return element.section == 'crustsize';
    })
    const sause = data.filter((element) => {
        return element.section == 'sause';
    })
    const topping = data.filter((element) => {
        return element.section == 'topping';
    })
    const substitute = data.filter((element) => {
        return element.section == 'substitute';
    })
    // console.log(crust);
    // console.log(sause);
    // console.log(topping);
    // console.log(substitute);
    return (
        <div className='order-form-container'>
            <form className='order-form'>
                <div className='form-section form-head'>
                    <h3>Build Your Own Pizza</h3>
                </div>
                <div className='form-section form-img'></div>
                <div className='form-section'>
                    <h2>Build Your Own Pizza</h2>
                </div>
                <div className='form-section option-section'>
                    <h3>Choice of Size</h3>
                    <p>Required</p>
                </div>
                <div className='form-section form-input'>
                    <label className='select-box'>
                        <select
                            name='crustsize'
                        >
                            <option value=''>--- Select ---</option>
                            <option value='Extra Large'>Extra Large</option>
                            <option value='Large'>Large</option>
                            <option value='Medium'>Medium</option>
                            <option value='Small'>Small</option>
                            <option value='Personal'>Personal</option>
                        </select>
                    </label>
                </div>
                <div className='form-section option-section'>
                    <h3>Choice of Sause</h3>
                    <p>Required</p>
                </div>
                <div className='form-section form-input radioBtns'>
                    <div className='radio'>
                        <input
                            type='radio'
                            name='sause'
                            value='originalred'
                        />Original Red
                    </div>
                    <div className='radio'>
                        <input
                            type='radio'
                            name='sause'
                            value='garlicranch'
                        />Garlic Ranch
                    </div>
                    <div className='radio'>
                        <input
                            type='radio'
                            name='sause'
                            value='bbqsause'
                        />BBQ Sause
                    </div>
                    <div className='radio'>
                        <input
                            type='radio'
                            name='sause'
                            value='spinachalfredo'
                        />Spinach Alfredo
                    </div>
                </div>
                <div className='form-section option-section'>
                    <h3>Add Toppings</h3>
                    <p>Choose up to 10</p>
                </div>
                <div className='form-section form-input checkboxes'>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            name='pepperoni'
                        />Pepperoni
                    </div>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            name='sausage'
                        />Sausage
                    </div>
                    <div className='checkbox'>                    <input
                        type='checkbox'
                        name='canadianbacon'
                    />Canadian Bacon
                    </div>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            name='spicyitaliansausage'
                        />Spicy Italian Sausage
                    </div>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            name='grilledchicken'
                        />Grilled Chicken
                    </div>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            name='onions'
                        />Onions
                    </div>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            name='greenpepper'
                        />Green Pepper
                    </div>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            name='dicedtomatos'
                        />Diced Tomatos
                    </div>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            name='blackolives'
                        />Black Olives
                    </div>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            name='roastedgarlic'
                        />Roasted Garlic
                    </div>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            name='artichokehearts'
                        />Artichoke Hearts
                    </div>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            name='threecheese'
                        />Three Cheese
                    </div>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            name='pineapple'
                        />Pineapple
                    </div>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            name='dicedtomatos'
                        />Diced Tomatos
                    </div><div className='checkbox'>
                        <input
                            type='checkbox'
                            name='extracheese'
                        />Extra Cheese
                    </div>
                </div>
                <div className='form-section option-section'>
                    <h3>Choice of Substitute</h3>
                    <p>Choose up to 1</p>
                </div>
                <div className='form-section form-input checkboxes'>
                    <div className='checkbox'>
                        <input
                            type='checkbox'
                            name='glutenfree'
                        />Gluten Free Crust (+ $100)
                    </div>
                </div>
                <div className='form-section option-section'>
                    <h3>Special Instructions</h3>
                </div>
                <div className='form-section form-input'>
                    <textarea
                        placeholder="Anything else you'd like to add?"
                        cols="500" />
                </div>

            </form >
        </div >
    )
}