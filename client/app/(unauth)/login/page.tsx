import LoginForm from "@/components/forms/login-form";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex h-screen max-h-screen bg-[url('/assets/images/bg-login.jpg')] bg-cover bg-no-repeat">
      <section className="container flex items-center justify-center">
        <LoginForm />
      </section>
      <Image
        src="/assets/images/login-banner.jpg"
        height={1000}
        width={1000}
        alt="patient"
        className="hidden max-w-[50%] object-cover md:block"
      />
    </div>
  );
};

export default Login;
