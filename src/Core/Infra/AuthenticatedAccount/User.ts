import type { UserRole } from "./UserRole";

export type User = {
   guid: string;
   username: string;
   firstName: string;
   lastName: string;
   email: string;
   emailVerified: boolean;
   userRole: UserRole;
   enabled: boolean;
}