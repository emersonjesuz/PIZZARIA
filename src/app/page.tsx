"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppDispatch } from "@/redux/hook";
import { UserRedux } from "@/redux/reducers/userReducer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaPizzaSlice } from "react-icons/fa";
import { z } from "zod";
import cookie from "js-cookie";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z
    .string()
    .min(2, { message: "username precisar de preenchido" })
    .max(50),
  password: z
    .string()
    .min(7, { message: "Senha precisa ter no minimo 7 caracteres" }),
});
export default function Home() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(UserRedux(values.username));
    cookie.set("token", values.username, { expires: 1, secure: true });
    router.push("/loja");
  }
  return (
    <main className="flex justify-between min-h-screen  items-center   bg-vermelho_3">
      <div className="flex justify-center gap-5 flex-col max-w-[600px] w-[90%]  h-screen px-3 py-5 bg-white  shadow-2xl shadow-black">
        <h1 className="font-mono text-center font-bold text-4xl mb-2 text-black/80">
          Entre e delicie-se
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col justify-between gap-5 space-y-8 px-3"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username*</FormLabel>
                  <FormControl>
                    <Input
                      data-error={!!form.formState.errors.username}
                      data-filled={!!form.watch("username")}
                      placeholder="username..."
                      className="border border-gray-500 data-[filled=true]:border-emerald-500 data-[error=true]:border-vermelho_1"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Use o seu username para este campo.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha*</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      data-error={!!form.formState.errors.password}
                      data-filled={form.watch("password").length > 6}
                      placeholder="*****"
                      className="border border-gray-500 data-[filled=true]:border-emerald-500 data-[error=true]:border-vermelho_1 "
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Preencha este campo com a senha.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full">
              <Button
                className="w-full mb-1 bg-vermelho_3 shadow-lg shadow-black/40"
                type="submit"
              >
                CONFIRMAR <FaPizzaSlice className="ml-2" />
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <div className="hidden lg:flex justify-center w-full bg-cover ">
        <div className="w-[400px]">
          <h1 className="text-5xl text-white font-bold font-mono drop-shadow-md">
            Delicie-se com a perfeição em cada fatia
            <span className="animate-pulse">...</span>
          </h1>
        </div>
      </div>
    </main>
  );
}
