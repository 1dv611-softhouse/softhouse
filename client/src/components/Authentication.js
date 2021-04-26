// import './styles/signin.css'
import '../styles/authentication.css'

function Authentication() {
  return (
    <div className="authentication-container">
      <form class="signin-form">
        <div class="signin-row">
          <label for="signin-username">Username</label>
          <input type="text" id="signin-username" />
        </div>
        <div class="signin-row">
          <label for="signin-password">Password</label>
          <input type="password" id="signin-password" />
        </div>
        <input type="submit" name="submit" value="Sign in" />
      </form>
    </div>
  );
}

export default Authentication;
