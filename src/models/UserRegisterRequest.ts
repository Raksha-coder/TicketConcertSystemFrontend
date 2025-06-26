export type UserRegisterRequest = {
  email: string;
  passwordHash: string;
  fullName: string;
  roleId: number;
};