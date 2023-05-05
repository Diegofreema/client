'use client';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const register = () => {
  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (!name || !email || !password || !confirmPassword) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [name, email, password, confirmPassword]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (
      name === '' ||
      email === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      return toast('No field must be empty');
    }
    if (password.trim().length < 6) {
      return toast('Password must be at least 6 characters');
    }

    if (password !== confirmPassword) {
      return toast('password does not match confirm password');
    }
    setLoading(true);
    try {
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });
      toast('Registration succesfull, Please login');

      setConfirmPassword('');
      setEmail('');
      setPassword('');
      setName('');
      console.log(data);
      setLoading(false);
      router.push('/login');
    } catch (error) {
      toast(error?.response?.data);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-5xl text-center h-52 bg-gradient-to-r from-blue-700 to-black flex items-center justify-center text-white ">
        Register
      </h1>
      <div className="flex ">
        <form
          onSubmit={submitHandler}
          className="flex flex-col mx-auto justify-center items-center  w-full mt-5"
        >
          <input
            type="text"
            className="p-4 py-2  bg-slate-100 shadow-lg mb-3 outline-none w-[80%] md:w-[50%]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            value={email}
            type="email"
            className="p-4 py-2  bg-slate-100 shadow-lg mb-3 outline-none w-[80%] md:w-[50%]"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            value={password}
            type="password"
            className="p-4  py-2 bg-slate-100 shadow-lg mb-3 outline-none w-[80%] md:w-[50%]"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            value={confirmPassword}
            type="password"
            className="p-4  py-2 bg-slate-100 shadow-lg mb-3 outline-none w-[80%] md:w-[50%]"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <div className="text-center">
            <button
              type="submit"
              className={` ${
                disabled ? 'opacity-50' : ''
              }   border-none  bg-gradient-to-tr py-3 px-2 text-white w-[150px] from-blue-700 to-black`}
              disabled={disabled}
            >
              {loading ? <SyncOutlined spin /> : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default register;
