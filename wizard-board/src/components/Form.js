import React from 'react'



function Form(props) {

    const {user, change, submit, disabled, formError} = props

    const formChange = e =>{
        const {value, name, type , checked} = e.target
        const newValue = type === 'checkbox' ? checked : value
        change(name,newValue)
    }

    const formSubmit = (e) => {
        e.preventDefault()
        submit()
    }




    return (
        <form onSubmit={formSubmit}>
            <label>
                Name: 
                <input type="text" name="name" value={user.name} onChange={formChange}  />
            </label>
            <h6 className="error">{formError.name}</h6>

            <label>
                Email: 
                <input type="email" name="email" value={user.email} onChange={formChange} />
            </label>
            <h6 className="error">{formError.email}</h6>

            <label>
                Password: 
                <input type="password" name="password" value={user.password} onChange={formChange} />
            </label>
            <h6 className="error">{formError.password}</h6>

            <label>
                Terms Of Service: 
                <input type="checkbox" name="terms" value={user.terms} onChange={formChange} />
            </label>
            <h6 className="error">{formError.terms}</h6>

            <button disabled={disabled}>Submit</button>

        </form>
    )
}

export default Form
