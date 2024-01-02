import './Never-a-hassle-styles.css';

export default function Login() { 
    return (
        
        <div>
            <br />
            <br />
            <br />
            <h1 class="loginTitle" >Welcome to Never-A-Hassle!</h1>
            <div class="loginContainer">
                <br />
                <br />
                <h1>Please Sign In</h1>
                <br />
                <form>
                    <div class="loginElement">Email Address</div>
                    <br />
                    <label><input class="loginInput" type="text" name="userEmail" /></label>
                    <br />
                    <br />
                    <br />
                    <div class="loginElement">Password</div>
                    <br />
                    <label><input class="loginInput" type="text" name="password" /></label>
                    <br />
                    <br />
                    <br />
                    <br />
                    <input class="submitButton" type="submit" value="Submit" />
                    <br />
                    <br />
                    <br />
                </form>
                <div>-----------------------------</div>
                <br />
                <div>Don't have an account?</div>
                <br />
                <a href="/Signup">Create Account</a>
                <br />
                <br />
                <br />  
                <br /> 
            </div>


            
        </div>
    );
}