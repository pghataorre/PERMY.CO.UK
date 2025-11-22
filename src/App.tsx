import { Routes, Route } from "react-router-dom";
import Default from './pages/Default';
import NoPage from './pages/NoPage';
import Header from './components/Header/Header';
import ContentfulProvider from './context/ContentfulProvider/contentfulProvider';
import ModalProvider from "./context/ModalProvider/ModalProvider";
import StreamStateProvider from "./context/StreamProvider/StreamStateProvider";
import './styles/App.scss'


const App = (): JSX.Element => {
  return (
		<ContentfulProvider>
			<ModalProvider>
				<StreamStateProvider>
					<div className='App'>
						<Header />
						<Routes>
							<Route index element={<Default />} />
							<Route path='*' element={<NoPage />} />
						</Routes>
					</div>
				</StreamStateProvider>
			</ModalProvider>
		</ContentfulProvider>
  	)
}
export default App;
