import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{
        headerShown:false
      }}>
        {/* Tab navigator wrapper */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Extra stack screen outside tabs */}
        <Stack.Screen name="Details" options={{ title: "Details" }} />
      </Stack>
    </Provider>
  );
}
