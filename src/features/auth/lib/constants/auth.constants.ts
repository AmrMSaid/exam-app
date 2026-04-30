export const AUTH_NAVIGATION = {
  login: {
    message: "Don’t have an account?",
    linkText: "Create yours",
    href: "/register",
  },
  register: {
    message: "Already have an account?",
    linkText: "Sign in",
    href: "/login",
  },
} as const;

export type AuthMode = keyof typeof AUTH_NAVIGATION;
