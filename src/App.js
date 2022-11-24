import UseCallbackSample from './components/UseCallbackSample';
import UseMemoSample from './components/UseMemoSample';
import UseRefSample from './components/UseRefSample';
import UseRefSample1 from './components/UseRefSample1';
import UseRefSample2 from './components/UseRefSample2';

function App() {
  return (
    <div className="container mt-5">
      {/* <UseRefSample2/><div className="my-5 "style={{border: "1px solid red"}}></div>
      <UseRefSample1/><div className="my-5 "style={{border: "1px solid red"}}></div>
      <UseRefSample/> 
      <UseMemoSample/>
      */}
      <UseCallbackSample/>
    </div>
  )
}

export default App
