import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App () {
  const handleSelectedItem =(item: string) => {
    console.log(item);
  }

  let items = ["New York", "London", "Tokyo", "San Francisco", "Paris"];
  let color = 'primary'
  return (
    <div>
      <Alert>My <span>Alert</span></Alert>
      <ListGroup items={items} heading="Cities" onSelectedItem={handleSelectedItem}/>
      <br></br>
      <Button color='primary' onClick={() => console.log('Clicked')}>My Button</Button>
    </div>
  );
}

export default App;