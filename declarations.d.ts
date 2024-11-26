// declarations.d.ts

// Declare `.db` files as modules
declare module "*.db" {
  const value: string; // This will be the file path as a string
  export default value;
}

// Declare `.png` files as modules
declare module "*.png" {
  const value: string; // This will be the file path as a string
  export default value;
}
