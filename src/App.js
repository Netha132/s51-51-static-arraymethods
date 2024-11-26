
import './App.css';
import TenthStudent from './classes/TenthStudent';
import ArrayMethods from './components/ArrayMethods';


function App() {

 


  let vivek=new TenthStudent();
  
  vivek.telMarks=95;
  vivek.hinMarks=88;
  vivek.engMarks=99;
  vivek.matMarks=89;
  vivek.sciMarks=99;
  vivek.socMarks=88;
 
  vivek.totalMarks();
  console.log(TenthStudent.passMarks);
  vivek.calculateResult();


  return (

    
    <div className="App">

       <h1>Static Class & ArrayMethods</h1>
       <ArrayMethods/>
      
    </div>
  );
}

export default App;
