
import React, {useState} from 'react';
import User from './User';

function Form() {

  const [firstNameInput, setFirstName] = useState("");
  const [lastNameInput, setLastName] = useState("");
  const [emailInput, setEmail] = useState("");
  const [passwordInput, setPassword] = useState("");
  const [seasonInput, setSeason] = useState("Spring");

  const [errorMessages, setErrorMessages] = useState([]);
  const [isUserValidated, setUserValidated] = useState(false);

  function handle_upload(first_name, last_name, email, password)  {
    const all_alphabets_regex = new RegExp(/^[A-Za-z]+$/);
    const email_format_regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/);
    const password_regex = new RegExp(/^(?=.*[A-Z])(?=.*\d)(?=.*[\!\@\#\$\%\^\&\*\(\)\_\-\\\/\<\,\>\.\`\~\+\=])[a-zA-Z\d\!\@\#\$\%\^\&\*\(\)\_\-\\\/\<\,\>\.\`\~\+\=]{8,}$/);
    const errors = [];

    if (!all_alphabets_regex.test(first_name)) {
      errors.push("invalid first user name");
    }

    if (!all_alphabets_regex.test(last_name)) {
      errors.push("invalid last user name");
    }

    if (!email_format_regex.test(email)) {
        errors.push("invalid email format");
    }

    if (!password_regex.test(password)) {
        errors.push("invalid password[at least 8 characters long, one special character, one uppercase letter, and one number]");
    }

    if (errors.length === 0) {
      setUserValidated(true);
    } else {
      setErrorMessages(errors);
    }
  }

  return (
    !isUserValidated ? (
      <div className="Form">
          <h1 className="h1 pt-5 text-center">Welcome to LAB7!</h1>
        <form className="p-5">
            <div className="mb-3">
                <div class="row">
                    <div class="col">
                        <label for="fn" className="form-label">First Name</label>
                        <input type="text" id="fn" class="form-control" aria-label="First name"
                            onChange={(event)=>setFirstName(event.target.value)}/>
                    </div>
                    <div class="col">
                        <label for="ln" className="form-label">Last Name</label>
                        <input type="text" id ="ln" class="form-control" aria-label="Last name"
                            onChange={(event)=>setLastName(event.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label for="email" className="form-label">Email address</label>
                <input className="form-control" id="email" aria-describedby="emailHelp"
                    onChange={(event)=>setEmail(event.target.value)}></input>
            </div>
            <div className="mb-3">
                <label for="pw" className="form-label">Password</label>
                <input className="form-control" id="pw"
                    onChange={(event)=>setPassword(event.target.value)}></input>
            </div>
            <div className="mb-3">
                <label for="season" className="form-label">What's your favourite Season?</label>
                <select class="form-select" id="season" aria-label="What's your favourite Season?"
                    onChange={(event)=>setSeason(event.target.value)}>
                    <option selected value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                    <option value="Winter">Winter</option>
                </select>
            </div>
            <button onClick={() => handle_upload(firstNameInput, lastNameInput, emailInput, passwordInput)} type="button" className="btn btn-primary mt-5">Submit</button> 

        </form>
        <div className='p-5'>
          {
            errorMessages.map(errorMessage => (
              <p>{errorMessage}</p>
            ))
          }
        </div>
      </div>
    ) : (
        <User firstName={firstNameInput} lastName={lastNameInput} email={emailInput} password={passwordInput} season={seasonInput}/>
    )

  );
}

export default Form;
