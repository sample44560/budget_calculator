import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect , useState} from 'react';
import axios from 'axios';

function Home() {
  const [selectedValue, setSelectedValue] = useState('');
  const [options, setOptions] = useState([]);
  // const [setOptions] = useState([]);
  const [income, setIncome] = useState('');
  const [budget, setBudget] = useState({});
  const [selectedRule, setSelectedRule] = useState(null);

  useEffect(() => {

    axios.get('https://lloyd44560.pythonanywhere.com/api/rules/')
      .then(response => {
        // setOptions(response.data);
        console.log(response.data, "Options")
      })
      .catch(error => {
        console.error('Error fetching options:', error);
      });
  }, []);

  // const handleSelectChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  // const handleIncomeChange = (event) => {
  //   setIncome(event.target.value);
  // };

  // const calculateBudget = () => {
  //   const rule = options.find(option => option.id === parseInt(selectedValue));
  //   setSelectedRule(rule);
  //   if (rule && income) {
  //     const budget = {
  //       category1: (income * rule.percentage1) / 100,
  //       category2: (income * rule.percentage2) / 100,
  //       category3: rule.percentage3 ? (income * rule.percentage3) / 100 : 0
  //     };
  //     setBudget(budget);
  //   } else {
  //     setBudget({});
  //   }
  // };

  // useEffect(() => {
  //   calculateBudget();
  // }, [selectedValue, income]);

  return (
    <div className="App">
      <h1>Budget Calculator</h1>
{/* 
      <label>
        Choose a rule:
        <select value={selectedValue} onChange={handleSelectChange}>
          <option value="">Select...</option>
          {options.map(option => (
            <option key={option.id} value={option.id}>{option.name}</option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Enter your monthly income:
        <input type="number" value={income} onChange={handleIncomeChange} />
      </label>
      <br />
      {selectedValue && income && (
        <div>
          <h2>Calculated Budget</h2>
          <p>Category 1: ${budget.category1 ? budget.category1.toFixed(2) : 'N/A'}</p>
          <p>Category 2: ${budget.category2 ? budget.category2.toFixed(2) : 'N/A'}</p>
          {selectedRule && selectedRule.percentage3 !== null && (
            <p>Category 3: ${budget.category3 ? budget.category3.toFixed(2) : 'N/A'}</p>
          )}
        </div>
      )} */}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
