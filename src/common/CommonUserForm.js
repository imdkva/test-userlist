import React from 'react'
import { observer } from 'mobx-react'
import TextInput from 'test-app/ui/TextInput'
import DateInput from 'test-app/ui/DateInput'

export default observer(function UserForm({values, errors, actions}) {
    return (
        <form>
            <TextInput 
                name="fio"
                type="text"
                title="ФИО"
                value={values.fio}
                error={errors.fio}
                onChange={actions.onChange}
                onBlur={actions.onBlur}
                onFocus={actions.onFocus}
            />
            <DateInput 
                name="birthdate"
                type="date"
                title="Дата рождения"
                value={values.birthdate}
                error={errors.birthdate}
                onChange={actions.onChange}
                onBlur={actions.onBlur}
                onFocus={actions.onFocus}
            />
            <TextInput
                name="address"
                type="text"
                title="Адрес"
                value={values.address}
                error={errors.address}
                onChange={actions.onChange}
                onBlur={actions.onBlur}
                onFocus={actions.onFocus}
            />
            <TextInput 
                name="city"
                type="text"
                title="Город"
                value={values.city}
                error={errors.city}
                onChange={actions.onChange}    
                onBlur={actions.onBlur}  
                onFocus={actions.onFocus}          
            />
            <TextInput 
                name="phone"
                type="text"
                title="Телефон"
                value={values.phone}
                error={errors.phone}
                onChange={actions.onChange}       
                onBlur={actions.onBlur}  
                onFocus={actions.onFocus}       
            />         
        </form>
    )
})
