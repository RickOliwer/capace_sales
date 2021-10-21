import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword, signOut } from "@firebase/auth";
import {auth} from "../config/firebase.config"
import AuthContext from "../context/AuthContext";
import Image from "next/image"
import logo from '../images/logo.gif'

function Login() {
	const {user} = useContext(AuthContext)
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	
	const login = async (e) => {
		e.preventDefault();


		signInWithEmailAndPassword(auth, email, password).then(userCred => {
			console.log(userCred)
		}).catch(err => {
			console.log(err)
		})
		
	};
	const handleSignout = async () => {
		await signOut(auth)
	}

	return (
		<div className="relative flex flex-col items-center justify-center min-h-screen bg-black ">
			<div
			className="absolute top-0 left-0 w-52 h-52">
				<div className="relative w-full h-full">
					<Image layout="fill" objectFit="cover" src={logo} priority/>

				</div>
			</div>
			<div className="w-1/2 p-8 bg-white rounded shadow-2xl">
				<div className="mb-10 text-3xl font-bold text-yellow-600">{JSON.stringify(user) !== 'null' ? JSON.stringify(user) : ''}</div>
				<form className="space-y-8" onSubmit={(e) => login(e)}>
					<div>
						<label htmlFor="" className="block mb-2 font-bold text-gray-500" for="email">Email</label>
						<input 
						id="email" 
						className="w-full p-3 border border-gray-400 rounded outline-none text-brand-dark focus:border-yellow-600" 
						type="email" 
						value={email} 
						onChange={(e) => setEmail(e.target.value)} />
					</div>
					<div>
						<label htmlFor="" className="block mb-2 font-bold text-gray-500" for="passoword">Password</label>
						<input 
						id="password" 
						className="w-full p-3 text-gray-900 border border-gray-400 rounded outline-none focus:border-yellow-600" 
						type="password" 
						value={password} 
						onChange={(e) => setPassword(e.target.value)} />
					</div>
					<div>
						<button className="block w-full p-4 font-bold text-gray-800 transition duration-500 bg-yellow-600 rounded hover:text-yellow-600 hover:bg-gray-800" type="submit">login</button>

					</div>
				</form>
			<button onClick={() => handleSignout()}>Logout</button>
				
			</div>

		</div>
	);
}

export default Login