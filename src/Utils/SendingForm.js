export default class SendingForm {
    static maskMail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    static selector = {
        form: '[data-form-container]',
        input: '[data-input]'
    };

    constructor(fun) {
        this.form = document.querySelector(SendingForm.selector.form);
        this.fun = fun;
        if (this.form) {
            this.inputs = Array.from(this.form.querySelectorAll(SendingForm.selector.input));
            this.bindEvents();
        }
    }

    static isMailValid(mail) {
        //какая-то доп логика по данным почты
        if (mail.value.length === 0) {
            return false;
        } else {
            if (this.maskMail.test(mail.value)) {
                return true;
            } else {
                return false;
            }
        }
    }

    static isPassValid(input) {
        //проверка на минимальное кол-во символов
        return input.value.length > 5;
    }

    static isDefaultInputValid(input) {
        return !!input.value.length;
    }

    static isValid(inputs = []) {
        const isInputValid = (input) => {
            const validationType = input.getAttribute('data-form');
            switch (validationType) {
                case 'mail':
                    return SendingForm.isMailValid(input);
                case 'password':
                    return SendingForm.isPassValid(input.element);
                default:
                    return SendingForm.isDefaultInputValid(input);
            }
        };
        return inputs.map(el => {
            const isValid = isInputValid(el);
            SendingForm.setInputErrorState(el, !isValid);
            return isValid;
        }).every(isValid => !!isValid);
    }

    #onSubmit(e) {
        e.preventDefault();
        const isValid = SendingForm.isValid(this.inputs);
        if (isValid) {
            // this.#blockingBtn(true);
            SendingForm.send(SendingForm.dataAcquisition(this.inputs)).then((e) => {
                if (e.status === 200) {
                    //в случае если запрос успешный
                } else {
                    throw new Error('');
                }
            }).catch(() => {
                //какая-то ошибка если есть
            }).finally(() => {
                if (this.fun) {
                    this.fun();
                }
                //если потребуется допольнительная логика
            });
        }
    }

    static setInputErrorState(input, isValid = false) {
        const errorContainer = input.parentNode.querySelector('#errorMessage');
        if (!input.value && errorContainer) {
            errorContainer.innerText = 'Заполните поле';
        } else if (isValid && errorContainer) {
            errorContainer.innerText = 'Не верно';
        }
        input.classList.toggle('isValid', isValid);
    }

    static dataAcquisition(inputs) {
        return inputs.reduce((target, current) => {
            target[current.dataset.input] = current.value;
            return target;
        }, {});
    }

    static async send(data) {
        return await fetch('/#', {
            method: 'POST',
            headers: {'Content-Type': 'multipart/form-data'},
            body: JSON.stringify(data)
        });
    }

    bindEvents() {
        this.form.addEventListener('submit', (e) => this.#onSubmit(e));
    }
}
