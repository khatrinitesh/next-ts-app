

// Define an interface for the component props
interface ExampleProps {
    width: number; // Width of the element
    height: number; // Height of the element
  }
const Example: React.FC<ExampleProps> = ({width ,height}) => {

   const containerStyle = {
    width:`calc(100% - ${width}px)`,
    height:`calc(100% - ${height}px)`
   }
  return (
    <>
      <div className="flex justify-center items-center w-full">
      <div
        className="bg-blue-500 text-white rounded-lg p-4"
        style={containerStyle}
      >
        <p>This is an example component.</p>
        <p>Width: {width}px</p>
        <p>Height: {height}px</p>
      </div>
    </div>
    </>
  );
};

export default Example;
