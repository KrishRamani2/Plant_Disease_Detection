import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = async (event) => {
    event.preventDefault(); // Prevent form submission reload

    try {
      console.log("Attempting to log in with:", { email, password });

      // Request to get user data (mocked or from actual backend)
      const response = await axios.get('http://localhost:8000/api/user/user');
      console.log("Response from server:", response);

      const users = response.data;
      console.log("Fetched users:", users);

      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      console.log("Matched user:", user);

      if (user) {
        message.success('Login Successful');
        navigate('/home');
      } else {
        message.error('Invalid username or password');
        setEmail('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error logging in:', error);

      // Detailed error message
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        // No response received from the server
        console.error('Request data:', error.request);
      } else {
        // Something else caused the error
        console.error('Error message:', error.message);
      }

      message.error('An error occurred while logging in. Please try again.');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <div className="w-full lg:w-1/2 bg-black p-8 flex items-center justify-center" style={{ 
          backgroundImage: "url('../../src/assets/logo.png')", 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>Enter your email and password to log in</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onFinish}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button className="w-full mt-4" type="submit">Sign In with Email</Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className="mt-4 text-center text-sm text-gray-500">OR CONTINUE WITH</div>
            <Button variant="outline" className="w-full mt-2">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Google SVG path */}
              </svg>
              Google
            </Button>
            <div className="mt-4 text-center text-xs text-gray-500">
              By clicking continue, you agree to our{' '}
              <a href="#" className="underline">Terms of Service</a> and{' '}
              <a href="#" className="underline">Privacy Policy</a>.
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
