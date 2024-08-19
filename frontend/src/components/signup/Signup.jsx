import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true);
    try {
      // Post the form data to the API
      await axios.post('http://localhost:8000/api/user/user/', {
        email, password,
      });

      message.success('Signup Successful');
      navigate('/signin'); // Redirect to login page after signup
    } catch (error) {
      console.error('Error signing up:', error);
      message.error('An error occurred during signup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen md:flex-row bg-gray-100">
      <div
        className="w-full md:w-1/2 bg-black p-8 flex items-center justify-center"
        style={{
          backgroundImage: "url('../../src/assets/logo.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Enter your email below to create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onFinish}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="email"
                    type='email'
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              
              </div>
              <CardFooter className="flex flex-col">
                <Button className="w-full mt-4" type="submit" loading={loading}>
                  Sign Up
                </Button>
                <Link to="/signin" className="block mt-2 text-center text-blue-500">
                  Existing User?
                </Link>
                <div className="mt-4 text-center text-sm text-gray-500">OR CONTINUE WITH</div>
                <Button variant="outline" className="w-full mt-2">
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="#4285F4"
                      d="M21.35 11.1H12v2.82h5.35c-.23 1.27-.94 2.34-1.98 3.05v2.54h3.2c1.86-1.7 2.93-4.21 2.93-6.85 0-.48-.04-.96-.12-1.44z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 22c2.7 0 4.97-.9 6.63-2.44l-3.2-2.54c-.9.6-2.04.96-3.43.96-2.63 0-4.86-1.77-5.65-4.15H3.01v2.6C4.66 19.98 8.05 22 12 22z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M6.35 13.83c-.21-.6-.35-1.25-.35-1.92s.13-1.32.35-1.92V7.39H3.01C2.37 8.72 2 10.31 2 12c0 1.69.37 3.28 1.01 4.61l3.34-2.78z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.66c1.48 0 2.8.51 3.84 1.5l2.86-2.86C16.97 1.77 14.7.99 12 .99 8.05.99 4.66 3.01 3.01 5.39l3.34 2.78c.79-2.38 3.02-4.15 5.65-4.15z"
                    />
                  </svg>
                  Google
                </Button>
                <div className="mt-4 text-center text-xs text-gray-500">
                  By clicking continue, you agree to our{' '}
                  <a href="#" className="underline">Terms of Service</a> and{' '}
                  <a href="#" className="underline">Privacy Policy</a>.
                </div>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
