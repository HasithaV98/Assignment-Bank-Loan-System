import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [customerName, setCustomerName] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanDuration, setLoanDuration] = useState('');
  const [bankFile, setBankFile] = useState('');
  
  const [customers, setCustomers] = useState([]);
  


  const handleFileChange = (event) => {
    setBankFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('customerName', customerName);
    formData.append('loanAmount', loanAmount);
    formData.append('loanDuration', loanDuration);
    formData.append('bankFile', bankFile);

    try {
      const response = await fetch('http://localhost:8022/customer/saveing', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    fetch('http://localhost:8022/customer/getCustomers')
      .then(response => response.json())
      .then(data => setCustomers(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  

 

  

  

  return (
    <div className="app-container">
      <div className="form-container">
        <h1>Loan Details</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <label>Customer Name:</label>
          <input type="text" value={customerName} onChange={(e)=>setCustomerName(e.target.value)}required/>

        </div>
        <br></br>
        <div>
          <label>Loan Amount:</label>
          <input type="number" value={loanAmount} onChange={(e)=>setLoanAmount(e.target.value)}required/>

        </div>
        <br></br>
        <div>
          <label>Loan Duration:</label>
          <input type="number" value={loanDuration} onChange={(e)=>setLoanDuration(e.target.value)}required/>

        </div>
        <br></br>
        <div>
          <label>Bank Details File:</label>
          <input type="file" accept=".pdf, .txt, .csv" onChange={handleFileChange} required/>

        </div>
        <br></br>
        <button type="submit">Submit Details</button>
        <br></br>
        

          
        </form>
      </div>


  
    <div>
      <h2>Customer Details</h2>
      <table class="table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Loan Amount (Rs.)</th>
            <th>Loan Duration (months)</th>
            <th>Installments (Rs.)</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer._id}>
              <td>{customer.customerName}</td>
              <td>{customer.loanAmount}</td>
              <td>{customer.loanDuration}</td>
              <td>{customer.numberOfInstallments}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  


    </div>
    
  );

}

export default App;
