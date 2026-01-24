import InputField from "../../components/elements/input/input-field";

export default function Login() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <form className="flex flex-col items-center justify-center space-y-3  ">
        <h1 className="text-2xl font-bold pb-4 mb-12 w-full text-center  ">管理者用ログイン</h1>
        <label htmlFor="" className="text-left w-full text-[32px]">管理者ID</label>
        <InputField label="" type="text" id="login-id" placeholder="ログインID" />
        <label htmlFor="" className="text-left w-full text-[32px]">パスワード</label>
        <InputField label="" type="password" id="password" placeholder="パスワード" />
        <div className=" mt-[80px]">
          <button type="submit" className="w-40  bg-[#949494] h-[39px] border-2 border-black ">
            <p className="text-black">ログイン</p>
          </button>
        </div>
      </form>
    </main>
  );
}
