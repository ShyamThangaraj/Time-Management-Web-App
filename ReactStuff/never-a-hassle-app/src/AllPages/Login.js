export default function Login() { 
    return (
        <div>
            <h1>Login page</h1>
            <form>
                <label>Email: <input type="text" name="userEmail" /></label>
                <br />
                <br />
                <label>Password: <input type="text" name="password" /></label>
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>



            
        </div>
    );
}