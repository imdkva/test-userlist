import Validator from 'validatorjs'
import moment from 'moment'

Validator.useLang('ru')
Validator.register(
    'phone', 
    function(value) {
        return value.match(/^((\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{10}$/);
    }, 
    'Номер телефона должен быть в формате +7999888776655'
);
Validator.register(
    'birthdate', 
    function(value) {
        return moment(value).isBefore(moment())
    }, 
    'Укажите корректную дату'
);
Validator.register(
    'alphaRU',
    function(value) {
        return (/^[а-яА-Я]+$/).test(value);
    },    
    'Только буквы алфавита'
)

export default function validate(data, rules) {
    const validation = new Validator(data, rules, {
        "required": "Обязательное поле",
        "min": "Слишком коротко",
        "alpha": "Только буквы",
        "max": "Слишком длинное"
    })

    return {
        isValid: validation.passes(),
        ...validation.errors.all()
    }
}