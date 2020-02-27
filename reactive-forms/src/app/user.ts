export class User {
  constructor(
    public userName: string,
    public email: string,
    public subscribe: boolean,
    public password: string,
    public confirmPassword: string,
    public city: string,
    public state: string,
    public postalCode: string
  ) {}
}

export interface Sample {
  userName: string;
  email: string;
  subscribe: boolean;
  password: string;
  confirmPassword: string;
}
