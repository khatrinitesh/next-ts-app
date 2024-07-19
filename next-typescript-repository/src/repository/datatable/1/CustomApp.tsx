
import Example from "./Example";

const CustomApp = () => {


const data = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // Add more data rows as needed
  ];
  
  const columns = [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
  ];
   
  return (
    <>
     <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Data Table Example</h1>
      <Example data={data} columns={columns} />
    </div>
    </>
  );
};

export default CustomApp;
