import React from 'react'
import { useState } from 'react';
import { registerUser, loginUser } from '../api/authApi';
import { useNavigate } from 'react-router-dom';
import { UserRegisterRequest } from '../models/UserRegisterRequest';
import { notifyError, notifySuccess } from '../utils/toastUtil';
const AuthForm = () => {
    const navigate = useNavigate();
    const [isRegisterMode, setIsRegisterMode] = useState(true);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleAuth = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setIsLoading(true);


        try {
            let response;
            await new Promise(resolve => setTimeout(resolve, 1500));

            if (isRegisterMode) {
                debugger;
                var registerUsers: UserRegisterRequest = {
                    email: email,
                    passwordHash: password,
                    fullName: name,
                    roleId: 1
                }

                response = await registerUser(registerUsers);
                debugger;
                if (response.success) {
                    notifySuccess("You are successfully registered. Please Login ");
                    setIsRegisterMode(false);
                } else {
                    notifyError("Registration failed");
                }


            } else {
                response = await loginUser(email, password);
                  if (response.Success) {
                    notifySuccess("You are successfully Login ");
                    navigate("/dashboard");

                } else {
                    notifyError("Login failed");
                }
            }

            setEmail("");
            setPassword("");
            setName("");
        } catch (error) {
            setErrorMessage(`Action failed: ${error.message || 'Please try again.'}`);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 sm:p-8 md:p-10 transform transition-all duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold text-center text-purple-800 mb-6">
                {isRegisterMode ? 'Register' : 'Login'}
            </h2>
            <form onSubmit={handleAuth} className="space-y-4">

                  {isRegisterMode ? 
                  
                   <div>
                    <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">FullName</label>
                    <input
                        type="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                        placeholder="Enter your fullname"
                    />
                </div>
                  : null}
               
                <div>
                    <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                        placeholder="your.email@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                        placeholder="********"
                    />
                </div>

                {errorMessage && (
                    <div className="text-red-600 text-sm bg-red-100 p-3 rounded-lg border border-red-200">
                        {errorMessage}
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold text-lg hover:bg-purple-800 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                    disabled={isLoading}
                >
                    {isLoading ? 'Processing...' : (isRegisterMode ? 'Register' : 'Login')}
                </button>
            </form>

            <p className="text-center text-gray-600 text-sm mt-6">
                {isRegisterMode ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                    onClick={() => {
                        setIsRegisterMode(!isRegisterMode);
                        setErrorMessage('');
                    }}
                    className="text-purple-700 font-semibold hover:underline focus:outline-none"
                >
                    {isRegisterMode ? 'Login here' : 'Register here'}
                </button>
            </p>
        </div>
    )
}

export default AuthForm