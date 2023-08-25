import { useRef, useState } from "react";

export default function Signup() { 

    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const birthDayRef = useRef();
    const phoneFirst = useRef();
    const phoneMiddle = useRef();
    const phoneLast = useRef();

    let todayFormatted = "";
    const today = new Date();

    if (today.getMonth().toString().length === 1) {
        todayFormatted = today.getFullYear() + "-0" + (today.getMonth()+1);
    }
    else{
        todayFormatted = today.getFullYear() + "-" + (today.getMonth()+1);
    }
    if (today.getDate().toString().length === 1) {
        todayFormatted += "-0" + today.getDate();
    }
    else{
        todayFormatted += "-" + today.getDate();
    }

    const FormValidation = (e) => { 
        let current = e.target;
        e.preventDefault();

        let Email = emailRef.current.value;
        let Password = passwordRef.current.value;
        let ConfirmPassword = confirmPasswordRef.current.value;
        let BirthDay = birthDayRef.current.value;
        let PhoneFirst = phoneFirst.current.value;
        let PhoneMiddle = phoneMiddle.current.value;
        let PhoneLast = phoneLast.current.value;


        const EmailVerification = (email) => { 
            let emailDomains = ["gmail.com", "yahoo.com", "hotmail.com", "aol.com", "hotmail.co.uk", "hotmail.fr", "msn.com", "yahoo.fr", "wanadoo.fr", "orange.fr"];
                
            if (!email.includes("@")) { 
                return false;
            }

            let AtIndex = email.indexOf("@");

            for (let i = 0; i < emailDomains.length; i++){
                if (email.substring(AtIndex+1) === (emailDomains[i])) { //check with Brian about == operator
                    return true;
                }   
            }
            return false;
            
        }

        const PasswordVerification = (password) => { 

            const getCharCodes = (password) => { 
                let asciiChar = [];
                for (let i = 0; i < password.length; i++) { 
                    let asciiLetter = password.charCodeAt(i);
                    asciiChar.push(asciiLetter);
                }
                return asciiChar;
            }

            let passwordBreakDown = getCharCodes(password);

            let passwordLength = false;
            let uppercase = false;
            let lowercase = false;
            let numbers = false;
            let symbols = false;

            if (passwordBreakDown.length > 11) { 
                passwordLength = true;
            }
            for (let i = 0; i < passwordBreakDown.length; i++) { 
                console.log(passwordBreakDown[i]);
                if (passwordBreakDown[i] >= 65 && passwordBreakDown[i] <= 90) { 
                    uppercase = true;
                }
                if (passwordBreakDown[i] >= 97 && passwordBreakDown[i] <= 122) { 
                    lowercase = true;
                }
                if (passwordBreakDown[i] >= 48 && passwordBreakDown[i] <= 57) { 
                    numbers = true;
                }
                if ((passwordBreakDown[i] >= 33 && passwordBreakDown[i] <= 47) || (passwordBreakDown[i] >= 58 && passwordBreakDown[i] <= 64) || (passwordBreakDown[i] >= 91 && passwordBreakDown[i] <= 96) || (passwordBreakDown[i] >= 123 && passwordBreakDown[i] <= 126) || (passwordBreakDown[i] >= 128)){ 
                    symbols = true;
                }
            }

            console.log("pwd: " + passwordLength, ", upper: " + uppercase, ", lower: " + lowercase, ", num: " + numbers, ", symbols: " + symbols);

            if (passwordLength && uppercase && lowercase && numbers && symbols) {
                return true;
            }

            return false;
                 
        }

        const ConfirmPasswordVerification = (confirmPassword) => { 
            if (confirmPassword == Password) { 
                return true;
            }
            return false;
        }


        const PhoneVerification = (first, middle, last) => { //We should try OTPs
            if (first.length!=3) { // || first.includes("-") || first.includes(".") || first.includes("e") || first.includes("E")
                return false;
            }
            if (middle.length!=3) { // || middle.includes("-") || middle.includes(".") || middle.includes("e") || middle.includes("E")
                return false;
            }
            if (last.length!=4) { // || last.includes("-") || last.includes(".") || last.includes("e") || last.includes("E")
                return false;
            }
            return true;
        }
        
        console.log(PhoneVerification(PhoneFirst, PhoneMiddle, PhoneLast));

        //current.submit();

    }

    return (
        <div>
            <h1>Signup Page</h1>
            <br />
            <form onSubmit = {FormValidation}>
                <h3>Login Items</h3>
                <label>Email: <input type="text" name="emailLogin" ref={ emailRef } /></label>
                <br />
                <br />
                <label>Password: <input type="text" name="password" ref={ passwordRef } /></label>
                <br />
                <br />
                <label>Confirm Password: <input type="text" name="confirmPassword" ref={ confirmPasswordRef } /></label>
                <br />
                <br />
                <br />
                <h3>Birthday</h3>
                <label><input type="date" name="BirthDay" max={ todayFormatted } ref={ birthDayRef } /></label>
                <br />
                <br />
                <br />
                <h3>Contact</h3>
                <label>Phone:</label>
                <label>(<input maxLength="3" type="number" name="phone" ref={ phoneFirst } placeholder="012"/>)</label>
                <label> - <input maxLength="3" type="number" name="phone" ref={ phoneMiddle } placeholder="345"/></label>
                <label> - <input maxLength="4" type="number" name="phone" ref={ phoneLast } placeholder="6789"/></label>
                <br />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

