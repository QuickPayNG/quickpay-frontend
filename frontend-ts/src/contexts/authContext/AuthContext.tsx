import { createContext } from "react";

type AuthContextType = {
  user: any;
  isAuthenticated: boolean;
  links: any[];
  isLoading: boolean;
  login: (email: string, password: string) => void;
  signup: (fullname: string, email: string, password: string) => void;
  logout: () => void;
  generateLink: (
    amount: number,
    description: string,
    name: string,
    email: string
  ) => void;
  updateLinkStatus: (userId: string, linkId: string, newStatus: string) => void;
  verifyPayment: (reference: string) => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  links: [],
  isAuthenticated: false,
  isLoading: false,
  login: () => {},
  signup: () => {},
  logout: () => {},
  generateLink: () => {},
  updateLinkStatus: () => {},
  verifyPayment: () => {},
});
