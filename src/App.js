
import './App.less';
import { Card } from 'antd';
function App() {
  return (
    <div className="App">
      <div className="card-comp"> 
      <Card title="Todo Manageme" style={{ width: 500 }}>
      <form>
        <input type="text" name="task"/>
          </form> 
    </Card>
    
      </div>
      
    </div>
  );
}

export default App;
