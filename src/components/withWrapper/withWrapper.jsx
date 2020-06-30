import New from './../List/New/New';
import Popular from './../List/Popular/Popular';

const Wrapper = item => {
    let Component;

    if (item.views < 1000) {
        Component = New;
    }

    if (item.views >= 1000) {
        Component =  Popular;
    }
    return (...args) => {
        return Component.apply(this, args);
    };
};

export default Wrapper;

