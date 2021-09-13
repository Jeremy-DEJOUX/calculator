import AmazingNumberButton from './AmazingNumberButton';
import BeautifullScreen from './BeautifullScreen';
import GreatOperationButton from './GreatOperationButton';
import MagnificientEqualButton from './MagnificientEqualButton';
import TheTitle from './TheTitle';

const Calculator = () => {
    return (
        <div>
            <TheTitle/>
            <AmazingNumberButton/>
            <GreatOperationButton/>
            <BeautifullScreen/>
            <MagnificientEqualButton/>
        </div>
    );
};

export default Calculator;