import AmazingNumberButton from './AmazingNumberButton';
import BeautifullScreen from './BeautifullScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';

const Calculator = () => {
    return (
        <div className="calculator">
            <BeautifullScreen/>
            <AmazingNumberButton/>
            <GreatOperationButton/>            
            <MagnificientEqualButton/>
        </div>
    );
};

export default Calculator;