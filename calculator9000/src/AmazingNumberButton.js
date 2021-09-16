
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const elements = numbers.map(function(numbers){
    return <button>{numbers}</button>
})

const AmazingNumberButton = () => {
    return (
        <div className="amazingnumberbutton">
            {elements}
        </div>
    )
}

export default AmazingNumberButton;