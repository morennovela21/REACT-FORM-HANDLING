import { useState } from "react"

const Register = () => {
    // First Name - Textbox
    // Last Name - Textbox
    // Username - Textbox
    // Password - Textbox
    // Gender - Select
    // Tech Stack - Checkbox

    const [formData, setFormData] = useState({
        firstname : '',
        lastname : '',
        username : '',
        password : '',
        gender : '',
        techstack : []
    })

    const handleOnChange = (event) => {
        if(event.target.name === 'techstack') {
            let copy = {...formData}
            if(event.target.checked) {
                copy.techstack.push(event.target.value)
            }else{
                copy.techstack = copy.techstack.filter(el => el !== event.target.value)
            }
            setFormData(copy)
        }else{
            setFormData(() => ({
                ...formData,
                [event.target.name] : event.target.value
            }))
        }
    }

    const submitForm = (event) => {
        event.preventDefault()
        console.log(formData)
    }

    return(
        <div className="card register-card">
            <div className="card-header">Register</div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="firstname"> First Name:
                            <input name="firstname" type="text" placeholder="First Name" onChange={handleOnChange} className="form-control"></input>
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname"> Last Name:
                            <input name="lastname" type="text" placeholder="Last Name" onChange={handleOnChange} className="form-control"></input>
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="username"> User Name:
                            <input name="username" type="text" placeholder="User Name" onChange={handleOnChange} className="form-control"></input>
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password"> Password:
                            <input name="password" type="password" placeholder="Password" onChange={handleOnChange} className="form-control"></input>
                        </label>
                    </div>
                    <div className="form-group">
                        <select name="gender" className="form-control" onChange={handleOnChange} >
                            <option>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer not to say">Prefer not to say</option>
                        </select>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="HTML" onChange={handleOnChange}  name="techstack"></input>
                        <label className="form-check-label" htmlFor="techstack">
                            HTML
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="CSS" onChange={handleOnChange}  name="techstack"></input>
                        <label className="form-check-label" htmlFor="techstack">
                            CSS
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="Javascript" onChange={handleOnChange}  name="techstack"></input>
                        <label className="form-check-label" htmlFor="techstack">
                            Javascript
                        </label>
                    </div>
                    <button onClick={submitForm} className="btn btn-primary d-block w-100">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Register