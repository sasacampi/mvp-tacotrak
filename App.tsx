import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "./app/context/ThemeContext";
import { AuthProvider } from "./app/context/AuthContext";
import SplashScreen from "./app/splash";
import LoginScreen from "./app/login";
import RegisterScreen from "./app/registerscreen";
import OnboardingScreen from "./app/onboardingscreen";
import DashboardScreen from "./app/(tabs)/index";
import AddFoodScreen from "./app/add-food";
import FoodDetailScreen from "./app/food-detail";
import TDEECalculatorScreen from "./app/(tabs)/tdee";
import MealDiaryScreen from "./app/(tabs)/meal-diary";
import ProfileScreen from "./app/(tabs)/profile";

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Onboarding: undefined;
  Dashboard: undefined;
  AddFood: { mealType?: string };
  FoodDetail: { food: any };
  TDEECalculator: undefined;
  MealDiary: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator
              initialRouteName="Splash"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
              <Stack.Screen name="Dashboard" component={DashboardScreen} />
              <Stack.Screen name="AddFood" component={AddFoodScreen} />
              <Stack.Screen
                name="FoodDetail"
                component={FoodDetailScreen}
                options={{ headerShown: true, title: "Food Details" }}
              />
              <Stack.Screen
                name="TDEECalculator"
                component={TDEECalculatorScreen}
              />
              <Stack.Screen name="MealDiary" component={MealDiaryScreen} />
              <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
