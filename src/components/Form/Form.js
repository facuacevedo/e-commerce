import { useEffect, useState, useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import './Form.css';

export const Form = ({ onClick }) => {
    const { getOrder, setOrder } = useContext(CartContext)
    
    const [ isFormDisabled, setIsFormDisabled] = useState( false )
    const [ infoForm, setInfoForm ] = useState({
        name : "",
        surname : "",
        tel : "",
        email : "",
        email2:""
    })

    const onFormInput = ({ target }) => {
        //de esta forma se setea la nueva informacion al estado del form sin perder la anterior
        const newInfoForm = {...infoForm, [target.name] : target.value};
        setInfoForm(newInfoForm);
        const dataOrder = getOrder(infoForm)
        setOrder(dataOrder)
    }
    const onSubmit = (event) => {
        event.preventDefault()
        /* const dataOrder = getOrder(infoForm)
        setOrder(dataOrder) */
    }

    useEffect(() => {       
        if ( infoForm.name === "" ||
            infoForm.surname === "" ||
            infoForm.tel === "" ||
            infoForm.email === "" ||
            infoForm.email !== infoForm.email2 ){
                setIsFormDisabled(true)
            }else{
                setIsFormDisabled(false)
            }
    },[ infoForm ])

    return (
        <form className="formulario" onSubmit={ onSubmit} >
            <label >
                Nombre:
                <input name="name" type="text" onChange={ onFormInput} value={infoForm.name}></input>
            </label>
            <label >
                Apellido:
                <input name="surname" type="text" onChange={ onFormInput} value={infoForm.surname}></input>
            </label>
            <label >
                Telefono:
                <input name="tel" type="tel" onChange={ onFormInput} value={infoForm.tel}></input>
            </label>
            <label >
                E-mail:
                <input name="email" type="email" onChange={ onFormInput} value={infoForm.email}></input>
            </label>
            <label >
                Repetir e-mail:
                <input name="email2" type="email" onChange={ onFormInput} value={infoForm.email2}></input>
            </label>
            <input className="inputSubmit" type="submit" onClick={ onClick } onSubmit={ onSubmit } disabled={ isFormDisabled } value="Enviar orden de compra"/>
        </form>

        
    )
}