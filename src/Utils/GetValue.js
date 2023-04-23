import SendingForm from "./SendingForm";

export default class GetValue {
    static isValidValue(inputs) {
        const InputValid = (el) => {
            const validationType = el.getAttribute('data-input');
            switch (validationType) {
                case 'email':
                    return SendingForm.isMailValid(el)
                default:
                    return SendingForm.isDefaultInputValid(el)
            }
        }
        return inputs.map(el => {
            return InputValid(el);
        }).every(isValid => !!isValid)
    }

    static giveData(current) {
        this.container = current;
        this.returnValue = {
            flag: false,
            value: {}
        };
        if (this.container) {
            this.inputs = Array.from(this.container.querySelectorAll('[data-input]'));
            if (this.isValidValue(this.inputs)) {
                alert('correct data');
                const data = SendingForm.dataAcquisition(this.inputs);
                data.id = Date.now();
                this.returnValue = {
                    flag: true,
                    value: data
                };
                GetValue.cleaningValue(this.inputs);
            } else {
                alert('incorrect data')
                this.returnValue = {
                    flag: false
                };
            }
        }
        return this.returnValue;
    }

    static cleaningValue(inputs) {
        inputs.map(input => input.value = '');
    }

}
