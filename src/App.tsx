import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider, AuthProvider } from "./shared/contexts";
import { Login } from "./shared/components/login/Login";

export const App = () => {
  return (
    <AuthProvider>
      <AppThemeProvider>
        <Login>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </Login>
      </AppThemeProvider>
    </AuthProvider>
  );
};
