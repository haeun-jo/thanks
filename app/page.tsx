import Image from "next/image";

import IconKakaoLogin from "@/public/assets/images/ico-kakao-login.svg";
import IconGoogleLogin from "@/public/assets/images/ico-google-login.svg";
import IconHome from "@/public/assets/images/ico-home.png";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 bg-[#c6c86d]">
      <div className="flex w-full max-w-sm flex-col items-center gap-6">
        <p className="font-bold text-2xl italic tracking-tight">{`Please say Thank you :)`}</p>
        <Image
          src={IconHome}
          alt="로고"
          width={100}
          height={100}
          priority
          className="w-50"
        />
        <form className="w-full">
          <button
            // onClick={() => signIn("google")}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-yellow-300 text-black hover:brightness-110 transition"
          >
            <Image
              src={IconKakaoLogin}
              alt="카카오 로그인 버튼"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span>Kakao 계정으로 로그인</span>
          </button>

          <button
            // onClick={() => signIn("google")}
            className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 transition shadow-sm"
          >
            <Image
              src={IconGoogleLogin}
              alt="구글 로그인 버튼"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span>Google 계정으로 로그인</span>
          </button>

          {/* <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="#" className="underline underline-offset-4">
                  Sign up
                </a>
              </div> */}
        </form>
      </div>
    </div>
  );
}
