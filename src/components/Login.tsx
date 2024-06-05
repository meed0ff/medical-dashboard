import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useParams } from "react-router-dom";

import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";

interface InFormInput {
  email: String;
  password: String;
}

interface UpFormInput {
  first_name: String;
  last_name: String;
  phone_number: Number;
  image: File;
  email: String;
  password: String;
}

export default function Login() {
  // config
  const loginUrl = "/account/login";
  const registerURL = "/account/register";

  // functions
  const page = useParams().page;

  const { register: login, handleSubmit: handleLogin } = useForm<InFormInput>();
  const onLogin: SubmitHandler<InFormInput> = (data) => submitData(data);

  const { register, handleSubmit } = useForm<UpFormInput>();
  const onSubmit: SubmitHandler<UpFormInput> = (data) => submitData(data);

  function submitData(data: any) {
    console.log(data);
    toast("", {
      description: JSON.stringify(data),
    });
  }

  // register image preview
  const [preview, setPreview] = useState("/login/image.png");

  const handleUploadedFile = (event: any) => {
    const file = event.target.files[0];

    const urlImage = URL.createObjectURL(file);

    setPreview(urlImage);
  };

  return (
    <div className="relative w-full h-screen lg:grid lg:grid-cols-2">
      <img
        src="\login\bg.webp"
        alt="Image"
        className="absolute top-0 left-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale lg:hidden"
      />
      <div className="relative h-screen p-2 bg-background/70 backdrop-blur-md flex items-center justify-center py-12 overflow-auto">
        {page == "login" && (
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to login to your account
              </p>
            </div>
            <form onSubmit={handleLogin(onLogin)} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...login("email")}
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input {...login("password")} type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to={registerURL} className="underline">
                Sign up
              </Link>
            </div>
          </div>
        )}
        {page == "register" && (
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <p className="text-balance text-muted-foreground">
                Enter your information to create an account
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="grid gap-2">
                  <Label htmlFor="first-name">Image</Label>
                  <Input
                    {...register("image")}
                    type="file"
                    required
                    onChange={handleUploadedFile}
                    className="absolute opacity-0 translate-y-5 w-[120px] h-[162px]"
                  />
                  <img
                    src={preview}
                    alt="image"
                    width={"120px"}
                    height={"160px"}
                    className="w-[120px] h-[160px] object-cover bg-secondary rounded"
                  />
                </div>
                <div className="flex flex-col justify-between gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input
                      {...register("first_name")}
                      placeholder="Max"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input
                      {...register("last_name")}
                      placeholder="Robinson"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Phone number</Label>
                <Input
                  {...register("phone_number")}
                  type="number"
                  className="appearance-none"
                  placeholder="+998 XX XXX-XX-XX"
                  min={0}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input {...register("password")} type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to={loginUrl} className="underline">
                Sign in
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="\login\bg.webp"
          alt="Image"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
