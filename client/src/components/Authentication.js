// // import './styles/signin.css'
// import Socials from "./Socials.js";
// import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
// import { Auth } from "aws-amplify";

// function Authentication() {
//   const signIn = (e) => {
//     e.preventDefault();
//     console.log("Sign In");
//   };

//   const socialMediaLinks = [
//     "https://www.facebook.com/softhouseconsulting",
//     "",
//     "https://www.instagram.com/softhouseconsulting/",
//     "",
//     "",
//   ];

//   return (
//     <div className="authentication-container">
//       <h1>Sign in</h1>
//       <form className="signin-form">
//         <div className="signin-row">
//           <label for="signin-username">Username</label>
//           <input type="text" className="input-data" id="signin-username" />
//         </div>
//         <div className="signin-row">
//           <label for="signin-password">Password</label>
//           <input type="password" className="input-data" id="signin-password" />
//         </div>
//         <input
//           type="submit"
//           name="submit"
//           value="Sign in"
//           onClick={(e) => signIn(e)}
//         />
//       </form>
//       <p>
//         Don't have an account yet? <a href="">Sign up</a> now
//       </p>
//       {/* <Socials /> */}
//     </div>
//   );
// }

// export default Authentication;
