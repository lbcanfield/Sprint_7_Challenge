



export default function OrderForm(props) {
    const { data } = props;
    // console.log(data);

    const crust = data.filter((element) => {
        return element.section == 'crustsize';
    })
    const sause = data.filter((element) => {
        return element.section == 'sause';
    })
    const toppings = data.filter((element) => {
        return element.section == 'topping';
    })
    const substitute = data.filter((element) => {
        return element.section == 'substitute';
    })
    return (
        <div className='order-form-container'>
            <form id='pizza-form' className='order-form'>
                <div className='form-section form-head'>
                    <h3>Build Your Own Pizza</h3>
                    <label>Enter Your Name
                        <input
                            id='name-input'
                            type='text'
                            name='name'
                        />
                    </label>
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
                            {crust.map(item => (
                                <option
                                    value={item.formValue}
                                >
                                    {item.displayText}
                                </option>
                            ))}

                        </select>
                    </label>
                </div>
                <div className='form-section option-section'>
                    <h3>Choice of Sause</h3>
                    <p>Required</p>
                </div>
                <div className='form-section form-input radioBtns'>
                    {sause.map(item => (
                        <div className='radio'>
                            <input
                                type='radio'
                                name={item.section}
                                value={item.formValue}
                            />
                            {item.displayText}
                        </div>
                    ))}

                </div>
                <div className='form-section option-section'>
                    <h3>Add Toppings</h3>
                    <p>Choose up to 10</p>
                </div>
                <div className='form-section form-input checkboxes'>
                    {toppings.map(item => (
                        <div className='checkbox'>
                            <input
                                type='checkbox'
                                name={item.formValue}
                            />{item.displayText}
                        </div>
                    ))}
                </div>
                <div className='form-section option-section'>
                    <h3>Choice of Substitute</h3>
                    <p>Choose up to 1</p>
                </div>
                <div className='form-section form-input checkboxes'>
                    {substitute.map(item => (
                        <div className='checkbox'>
                            <input
                                type='checkbox'
                                name={item.formValue}
                            />{item.displayText}
                        </div>
                    ))}
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