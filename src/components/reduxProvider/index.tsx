"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import ProviderGlobal from "../ProviderGlobal";

export default function ReduxProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <ProviderGlobal>{children}</ProviderGlobal>
    </Provider>
  );
}
