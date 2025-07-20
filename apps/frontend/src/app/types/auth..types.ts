export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  name: string
}

export interface AuthResponse {
  status: string;
  accessToken: string;
  user: User;
}


export interface LoginResponse {
  response: {
    data: {
      message: [string];
    };
  };
}
