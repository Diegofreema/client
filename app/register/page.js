'use client';
import React, { useState } from 'react';

const register = () => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      return console.log('No field must be empty');
    }
    if (password.trim().length < 6) {
      return console.log('password must be at least 6 characters');
    }

    if (password !== confirmPassword) {
      return console.log('password does not match confirm password');
    }
    console.table(name, email, password, confirmPassword);
  };

  return (
    <>
      <h1 className="text-5xl text-center h-52 bg-gradient-to-r from-blue-700 to-black flex items-center justify-center text-white ">
        Register
      </h1>
      <div>
        <form
          onSubmit={submitHandler}
          className="grid place-content-center mt-5"
        >
          <input
            type="text"
            className="p-4 py-2  bg-slate-100 shadow-lg mb-3 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            value={email}
            type="email"
            className="p-4 py-2  bg-slate-100 shadow-lg mb-3 outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={password}
            type="password"
            className="p-4  py-2 bg-slate-100 shadow-lg mb-3 outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            value={confirmPassword}
            type="password"
            className="p-4  py-2 bg-slate-100 shadow-lg mb-3 outline-none"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="text-center">
            <button
              type="submit"
              className="border-none bg-gradient-to-tr py-3 px-2 text-white w-[150px] from-blue-700 to-black"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default register;
