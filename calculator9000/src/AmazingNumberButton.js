
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const elements = numbers.map((numbers) => <button className="btn_numbers">{numbers}</button>)

const AmazingNumberButton = () => {
    return (
        <div className="amazingnumberbutton">
            {elements}
        </div>
    )
}

export default AmazingNumberButton;