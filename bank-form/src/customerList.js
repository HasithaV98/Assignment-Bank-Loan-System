/*import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [customerName, setCustomerName] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanDuration, setLoanDuration] = useState('');
  const [bankFile, setBankFile] = useState('');
  const [customerList, setCustomerList] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

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

  const fetchCustomerList = async () => {
    try {
      const response = await fetch('http://localhost:8022/customer/');
      const data = await response.json();
      setCustomerList(data);
    } catch (error) {
      console.error('Error getting customer list', error);
    }
  };

  const handleCustomerClick = async (customerId) => {
    try {
      const response = await fetch(`http://localhost:8022/customer/show?customerId=${customerId}`);
      const data = await response.json();
      setSelectedCustomer(data.response);
    } catch (error) {
      console.error('Error getting customer details', error);
    }
  };

  useEffect(() => {
    fetchCustomerList();
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

      <div className="customer-list-container">
        <h1>All Customers</h1>
        <ul>
          {customerList.map((customer) => (
            <li key={customer._id} onClick={() => handleCustomerClick(customer._id)}>
              {customer.customerName}
            </li>
          ))}
        </ul>
        {selectedCustomer && (
          <div>
            <h2>Customer Details</h2>
            <p>Customer Name: {selectedCustomer.customerName}</p>
            <p>Loan Amount: {selectedCustomer.loanAmount}</p>
            <p>Loan Duration: {selectedCustomer.loanDuration}</p>
            <p>Number of Installment: {selectedCustomer.numberOfInstallments}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;*/
