import { useRef, useState } from "react";
import './Never-a-hassle-styles.css';
import TLDs from './TLDs';

export default function Signup() { 

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [PhoneFirst, setPhoneFirst] = useState("");
    const [CalendarFull, setCalendarFull] = useState(false);
    const CalendarRef = useRef();

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


    const EmailVerification = (email) => { 

        if (email.length === 0) { 
            return false;
        }

        let emailDomains = TLDs();//["gmail.com", "yahoo.com", "hotmail.com", "aol.com", "hotmail.co.uk", "hotmail.fr", "msn.com", "yahoo.fr", "wanadoo.fr", "orange.fr"];
        
        if (!email.includes("@")) { 
            return false;
        }

        let AtIndex = email.indexOf("@");
        let emailAfterAt = email.substring(AtIndex + 1);
        let dotIndex = emailAfterAt.indexOf(".");
        let StuffAfterDot = emailAfterAt.substring(dotIndex);

        for (let i = 0; i < emailDomains.length; i++){
            if (StuffAfterDot === (emailDomains[i])) { //check with Brian about == operator
                return true;
            }   
        }
        return false;
        
    }

    const PasswordVerification = (password) => { 

        if (password.length === 0) { 
            return false;
        }

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

        if (passwordLength && uppercase && lowercase && numbers && symbols) {
            return true;
        }

        return false;
                
    }

    const ConfirmPasswordVerification = (confirmPassword) => { 
        if (Password.length>0 && confirmPassword === Password) { 
            return true;
        }
        return false;
    }

    const PhoneFirstVerification = (first) => { //We should try OTPs
        var asciiVal = 0;
        for (var i = 0; i < first.length; i++) { 
            asciiVal = first.charCodeAt(i);
            if (asciiVal < 48 || asciiVal > 57 || first.length < 10) { 
                return false;
            }
        }
        return true;
    }

    const EmailSaveChange = (e) => { 
        setEmail(e.target.value);
    }
    const PasswordSaveChange = (e) => { 
        setPassword(e.target.value);
    }
    const ConfirmPasswordSaveChange = (e) => { 
        setConfirmPassword(e.target.value);
    }
    const PhoneFirstSaveChange = (e) => { 
        setPhoneFirst(e.target.value);
    }

    
    const CalendarChange = (e) => { 
        if (!CalendarRef.current.value) {
            setCalendarFull(false);
        }
        else { 
            setCalendarFull(true);
        }
    }
    

    const emailClassSignup = EmailVerification(Email)
    ? 'valid-input'
    : Email.length == 0
    ? 'blank'
    : Email.length > 0
    ? 'invalid-input'
    : '';
    
    const passwordClassSignup = PasswordVerification(Password)
    ? 'valid-input'
    : Password.length == 0
    ? 'blank'
    : Password.length > 0
    ? 'invalid-input'
    : '';
    
    const confirmPasswordClassSignup = ConfirmPasswordVerification(ConfirmPassword)
    ? 'valid-input'
    : ConfirmPassword.length == 0
    ? 'blank'
    : ConfirmPassword.length > 0
    ? 'invalid-input'
    : '';

    const phoneFirstClassSignup = PhoneFirstVerification(PhoneFirst)
    ? 'valid-input'
    : PhoneFirst.length == 0
    ? 'blank'
    : PhoneFirst.length > 0
    ? 'invalid-input'
    : '';

 

    return (
        <div class="signupContainer">
            <h1>Signup Page</h1>
            <br />
            <form>
                <div class="signupElement">Email</div>
                <br />
                <label><input onChange={EmailSaveChange} className={ emailClassSignup } value={ Email } type="text" name="emailLogin" /></label>
                <br />
                <br />
                <div class="signupElement">Password</div>
                <br />
                <label><input onChange={PasswordSaveChange} className = { passwordClassSignup } value={ Password } type="text" name="password" /></label>
                <br />
                <br />
                <div class="signupElement">Confirm Password</div>
                <br />
                <label><input onChange={ ConfirmPasswordSaveChange } className = { confirmPasswordClassSignup } value={ ConfirmPassword } type="text" name="confirmPassword" /></label>
                <br />
                <br />
                <br />
                <div class="signupElement">Birthday</div>
                <br />
                <label><input onChange={ CalendarChange } ref={ CalendarRef } type="date" name="BirthDay" max={ todayFormatted } /></label> 
                <br />
                <br />
                <br />
                <div class="signupElement">Phone</div>
                <br />
                <label>Phone:</label>
                <label>(<input onChange={ PhoneFirstSaveChange } className = { phoneFirstClassSignup } value={ PhoneFirst } maxLength="10" type="string" name="phone" placeholder="(510)-260-1878"/>)</label>
                <br />
                <br />
                <br />
                <input type="submit" disabled={!PhoneFirstVerification(PhoneFirst) || !ConfirmPasswordVerification(ConfirmPassword) || !PasswordVerification(Password) || !EmailVerification(Email) || !CalendarFull} value="Submit" />
            </form>
        </div>
    );
}

