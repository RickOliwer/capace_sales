import { useEffect } from 'react';
import 'tailwindcss/tailwind.css'
import AuthGate from '../src/components/AuthGate';
import AuthContext from '../src/context/AuthContext';
import useUser from '../src/hooks/useUser';
import '../css/index.css'
import '../css/globals.css'


function MyApp({ Component, pageProps }) {
	const user = useUser()
	return (
	<AuthContext.Provider value={user}>
		<AuthGate>

				<Component {...pageProps} />

		</AuthGate>
	</AuthContext.Provider>

	);
}

export default MyApp;