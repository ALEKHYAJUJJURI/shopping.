export function LoginPage(){
    return (
      <form>
        <label>Login Page</label>
        <dl>
            <dd>UserName</dd>
            <dt><input type="text" placeholder="Enter name"/></dt>
            <dd>Password</dd>
            <dt><input type="password" placeholder="password"/></dt>
        </dl>
        <button className="btn btn-primary">Login</button>
      </form>
    )
}