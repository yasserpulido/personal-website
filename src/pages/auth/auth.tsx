import { useState } from "react";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
} from "../../utils/auth";

const Auth = () => {
  const [register, setRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const email = data.email as string;
    const password = data.password as string;

    if (email.trim() === "" || password.trim() === "") {
      return;
    }

    try {
      setIsLoading(true);

      if (register) {
        const result = await doCreateUserWithEmailAndPassword(email, password);

        if (result.status === "success") {
          console.log("User created successfully");
          setRegister(false);
        } else {
          console.error(result.message);
        }
      } else {
        const result = await doSignInWithEmailAndPassword(email, password);

        if (!result.error) {
          console.log(result.message);
        } else {
          console.error(result.message);
        }
      }

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <section className="border-2 border-black sm:w-2/3 w-full mx-auto my-20 p-14 flex flex-col gap-12 rounded-md">
      <header className="text-center">
        <h1 className="text-2xl font-bold">
          {register ? "Register" : "Login"}
        </h1>
      </header>
      <main>
        <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div>
              <label className="text-sm" htmlFor="email">
                Email
              </label>
              <input
                className="border-b-2 border-black w-full outline-none"
                type="email"
                name="email"
                placeholder="type your email here"
                required
              />
            </div>
            <div className="h-20">
              <label className="text-sm" htmlFor="password">
                Password
              </label>
              <input
                className="border-b-2 border-black w-full outline-none"
                type="password"
                name="password"
                required
                placeholder="type your password here"
              />
              {!register && (
                <p className="text-sm text-right">
                  <button type="button" className="underline text-blue-500">
                    Forgot password?
                  </button>
                </p>
              )}
            </div>
          </div>
          <button
            className="bg-green-500 h-10 text-white tracking-wider rounded-md"
            type="submit"
          >
            {register ? "Register" : "Login"}
          </button>
          <p className="text-center">
            {register ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setRegister((prevState) => !prevState)}
              className="underline text-blue-500"
              disabled={isLoading}
            >
              {register ? "Login" : "Register"}
            </button>
          </p>
        </form>
      </main>
    </section>
  );
};

export default Auth;
