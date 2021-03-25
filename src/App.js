import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <div className='wrapper'>
                <Header/>
                <Main/>
            </div>
            <Footer/>
        </div>
        // <div className={'wrapper'}>
        //     <Header/>
        //     <Main/>
        //     <Footer/>
        // </div>
    )
}

export default App;
