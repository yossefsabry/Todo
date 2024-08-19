import { useRef, useState  } from "react";
import { useNavigate } from "react-router-dom";
import CopyWrite from "../components/CopyWrite";
import { Link } from "react-router-dom";

export default function Register() {

    const [_, setConformPassword] = useState(false);
    
    let navigate = useNavigate();
    const usernameRef = useRef(null);
    const ageRef = useRef(null);
    const passwordRef = useRef(null);
    const confPassword = useRef(null);
    const emailRef = useRef(null);

    const checkInputs = () => {
        // check for confirm password
        if ( passwordRef.current.value !== confPassword.current.value) return -1; 
        setConformPassword(true);
        return 1;
    }
    const ClickRegisterButton = async(event, age, username, email, password) => {
        if (checkInputs() < 0) {
            return;
        }
        console.log(passwordRef.current.value, confPassword.current.value);
        event.preventDefault();
        const data = new FormData();
        data.append("username", username);
        data.append("age", age);
        data.append("email", email);
        data.append("password", password);
        console.log(data);
        navigate("/home");
        //setAlert("success register new user now login", "green");
    };
    return (
        <>
            <div className="warpper__sign text-* text-white p-5 flex items-center justify-center flex-col w-full">
                <div className="container__wrapper bg-gray-700 p-5 md:px-52 md:py-20 m-5 rounded-lg">
                    <div className="massage block text-center py-4 pb-11">
                        Todo list 
                        <span>
                            <i className='bx bxl-mastodon ml-2 mt-2'                                                                 style={{ fontSize: "32px !important"}}>
                            </i>
                        </span>
                    </div>
                    <div className="inputs block">
                        <form>
                            <div className="mb-6">
                                <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900                                      dark:text-white">
                                    age 
                                </label>
                                <input type="text" id="age" className="bg-gray-50 border border-gray-300                             text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600                                              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500                                    dark:focus:border-blue-500" placeholder="Enter your age" required  style={{ minWidth: "calc(3rem + 40vw)" }} ref={ageRef}/>
                            </div> 
                            <div className="mb-6">
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900                                      dark:text-white">
                                    username
                                </label>
                                <input type="text" id="username" className="bg-gray-50 border border-gray-300                             text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600                                              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500                                    dark:focus:border-blue-500" placeholder="Enter Your username" required  style={{ minWidth: "calc(3rem + 40vw)" }} ref={usernameRef}/>
                            </div> 
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900                                      dark:text-white">
                                    Email address
                                </label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300                             text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600                                              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500                                    dark:focus:border-blue-500" placeholder="john.doe@company.com" required  style={{ minWidth: "calc(3rem + 40vw)" }} ref={emailRef}/>
                            </div> 
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900                                 dark:text-white">
                                    Password
                                </label>
                                <input type="password" id="password" className="bg-gray-50 border                                           border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500                                  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700                                             dark:border-gray-600 dark:placeholder-gray-400 dark:text-white                                        dark:focus:ring-blue-500 dark:focus:border-blue-500"                                                  placeholder="•••••••••" required ref={passwordRef}/>
                            </div> 
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900                                 dark:text-white">
                                    Conform Password
                                </label>
                                <input type="password" id="password" className="bg-gray-50 border                                           border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500                                  focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700                                             dark:border-gray-600 dark:placeholder-gray-400 dark:text-white                                        dark:focus:ring-blue-500 dark:focus:border-blue-500"                                                placeholder="•••••••••" required ref={confPassword}/>
                            </div> 
                            <div className="flex items-center mb-6">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border                                         border-gray-300 rounded bg-gray-50 focus:ring-3                                                       focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600                                             dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                </div>
                                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900                                     dark:text-gray-300">
                                    I agree with the 
                                    <Link to={"/sign"} className="text-blue-600 hover:underline                                             dark:text-blue-500 transition">
                                        terms and conditions
                                    </Link>
                                    .
                                </label>
                            </div>
                            <button type="submit" className=" block  text-white bg-blue-700                                           hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300                               font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center                                       dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => ClickRegisterButton(event,ageRef, usernameRef,                                                    emailRef.current.value, passwordRef.current.value)}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="pt-4 link__wrapper w-full flex items-center justify-center">
                        <Link to={"/sign"} className="text-blue-600 hover:underline                                             dark:text-blue-500 transition">Have and account
                        </Link>
                    </div>
                    <CopyWrite />
                </div>
            </div>
        </>
    );
}
