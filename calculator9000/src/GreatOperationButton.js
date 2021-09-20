const numbers = ['+', '-', '*', '/'];

const elements = numbers.map((numbers) => <button className="btn_operators">{numbers}</button>)

const GreatOperationButton = () => {
    return (
        <div className="operatorsbutton">
            {elements}
        </div>
    )
}

export default GreatOperationButton;