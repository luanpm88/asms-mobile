import { useState, useEffect } from 'react';
import { Redirect } from 'expo-router';

// Simulate checking login status
const checkLoginStatus = async () => {
  // Replace with actual authentication logic
  return new Promise<boolean>((resolve) => setTimeout(() => resolve(false), 1000));
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const verifyLogin = async () => {
      const status = await checkLoginStatus();
      setIsLoggedIn(status);
    };

    verifyLogin();
  }, []);

  if (isLoggedIn === null) {
    // Optionally show a loading spinner or placeholder while checking login status
    return null;  // Or return a loading spinner
  }

  return isLoggedIn ? <>{children}</> : <Redirect href="/login" />;
}