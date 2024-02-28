import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
      password: password,
      role: "",
      token: "",
    };
  
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    try {
      const response = await fetch("http://localhost:5272/api/User/Login", requestOptions);
      if (response.ok) {
        const data = await response.json();
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("username", data.username);
        sessionStorage.setItem("userId", data.userId);
        alert("Login success - " + data.username);
        setLoggedin(true);
    
        if (data.role === 'Owner') {
          // Fetch and display the list of owned hotels
          const hotelsResponse = await fetch(`http://localhost:5272/api/Hotel/OwnedHotels?ownerId=${data.userId}`);
          if (hotelsResponse.ok) {
            const hotelsData = await hotelsResponse.json();
            sessionStorage.setItem("hotels", JSON.stringify(hotelsData));
            // Redirect to a component to display the list of owned hotels
            // window.location.href = '/owned-hotels';
            navigate('/owned-hotels')
          } else {
            alert("Failed to fetch owned hotels");
          }
        } else if (data.role === 'Admin') {
          // Redirect to hotel admin dashboard
          // window.location.href = '/admin-dashboard';
          navigate('/admin-dashboard')
        } else {
          // Redirect to guest dashboard
          // window.location.href = '/guest-dashboard';
          navigate('/guest-dashboard')
        }
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setLoggedin(false);
    }
    
  
    };

    return (
      
        <div className="wrapperr">
            <div className="containerr main1">
                <div className="row1">
                    <div className="col-md-12 right1">
                        <span className="close-symbol" id="closeSymbol">&times;</span>
                        <div className="input-boxx">
                            <header className="loginheaderr">Login</header>
                            <form onSubmit={handleSubmit}>
                                <div className="input-fieldd">
                                    <input type="text" className="inputt" id="email" required="" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
                                    <label htmlFor="email">Username</label>
                                </div>
                                <div className="input-fieldd">
                                    <input type="password" className="inputt" id="pass" required="" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <label htmlFor="pass">Password</label>
                                </div>
                                <div className="forgot-password">
                                    <span><a to="/forgot_password">Forgot your password?</a></span>
                                </div>
                                <div className="input-fieldd">
                                    <input type="submit" className="submitt" value="Login" />
                                </div>
                                <div className="signup">
                                    <span>Don't have an account? <Link to="registration">Sign Up here</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Login;
// import React, { useState } from 'react';
// import { Link,useHistory} from 'react-router-dom';
// import './Login.css'; 

// function Login() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const history = useHistory();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const user = {
//             username: username,
//             password: password,
//             role: "",
//             token: "",
//         };

//         const requestOptions = {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(user),
//         };

//         try {
//             const response = await fetch("http://localhost:5272/api/User/Login", requestOptions);
//             if (response.ok) {
//                 const data = await response.json();
//                 sessionStorage.setItem("token", data.token);
//                 sessionStorage.setItem("username", data.username);
//                 alert("Login success - " + data.username);

//                 if (data.role === 'Owner') {
//                     history.push('/owner-dashboard');
//                 } else if (data.role === 'Admin') {
//                     history.push('/admin-dashboard');
//                 } else {
//                     history.push('/guest-dashboard');
//                 }
//             } else {
//                 alert("Invalid username or password");
//             }
//         } catch (error) {
//             console.error('Error logging in:', error);
//         }
//     };

//     return (
//         <div className="wrapperr">
//             <div className="container main1">
//                 <div className="row1">
//                     <div className="col-md-12 right1">
//                         <span className="close-symbol1" id="closeSymbol">&times;</span>
//                         <div className="input-box1">
//                             <header>Login</header>
//                             <form onSubmit={handleSubmit}>
//                                 <div className="input-field1">
//                                     <input type="text" className="input1" id="email" required="" autoComplete="off" value={username} onChange={(e) => setUsername(e.target.value)} />
//                                     <label htmlFor="email">Username</label>
//                                 </div>
//                                 <div className="input-field1">
//                                     <input type="password" className="input1" id="pass" required="" value={password} onChange={(e) => setPassword(e.target.value)} />
//                                     <label htmlFor="pass">Password</label>
//                                 </div>
//                                 <div className="forgot-password1">
//                                     <span><a href="forgot_password.html">Forgot your password?</a></span>
//                                 </div>
//                                 <div className="input-field1">
//                                     <input type="submit" className="submit1" value="Login" />
//                                 </div>
//                                 <div className="signup1">
//                                     <span>Don't have an account? <Link to="registration">Sign Up here</Link></span>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;
