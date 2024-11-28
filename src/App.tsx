import BasicTypes from "./typescript/BasicTypes";
import ObjectLiterals from "./typescript/ObjectLiterals";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-svh">
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        {<BasicTypes />}
        {<ObjectLiterals />}
      </div>
    </>
  );
}

export default App;
