import { AuthProvider } from "@/contexts/AuthContext";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { cookies } from "next/headers";
import { Toaster } from "sonner";

const Providers = async ({ children }: { children: React.ReactNode }) => {
  const token = (await cookies()).get("token")?.value || null; // Read token from cookies
  const user = (await cookies()).get("user")?.value || null; // Read user from cookies

  return (
    <>
      <AuthProvider initialToken={token} initialUser={user}>
        <AntdRegistry>{children}</AntdRegistry>
      </AuthProvider>
      <Toaster position="top-center" duration={2000} />
    </>
  );
};

export default Providers;
