import * as React from "react";

import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";

import AdminHeader from "./components/Header/AdminHeader";

import FooterGeneral from "./components/Footer/FooterGeneral";
import FooterTrans from "./components/Footer/FooterTrans";
import Leaderboards from "./components/Leaderboards/Leaderboards";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/SetNewPassword/ForgotPassword";
import SetNewPassword from "./components/SetNewPassword/SetNewPassword";

import Verification from "./components/SetNewPassword/Verification";
import CreateBattle from "./components/Trivia/B2B/CreateBattle";
import Gameplay from "./components/Trivia/Gameplay";

import AdminLogin from "./components/Admin/AdminLogin";
import AreaOverview from "./components/Admin/AreaOverview";
import AreaOverview2 from "./components/Admin/AreaOverview2";
import DashBoard from "./components/Admin/DashBoard";

import Authentication from "./components/Authentication/Authentication";

import Error from "./components/404/Error";

import WarRoom from "./components/Trivia/WarRoom";
import WarRoomCategory from "./components/Trivia/WarRoomCategory";

import Graphs from "./components/Admin/Graphs";
import FreeBattle from "./components/Trivia/FreeBattle";
import GameRoom from "./components/Trivia/GameRoom";
import Reconnecting from "./components/Trivia/Reconnecting";
import Register from "./components/Trivia/RegisterBattle";

import LatestBattle from "./components/Games/LatestBattle";
import Profile from "./components/Profile/Profile";
import ProfileUser from "./components/Profile/ProfileUser";

import RecentBattle from "./components/Games/RecentBattle";
import WalletLayout from "./components/Wallet/WalletLayout";
import Wallet from "./components/Wallet/Wallet";
import AddMoney from "./components/Wallet/AddMoney";
import Withdraw from "./components/Wallet/Withdraw";
import AddCard from "./components/Wallet/AddCard";

// Support
import Support from "./components/Support/Support";

import { ChakraProvider } from "@chakra-ui/react";

import { ResetPasswordProvider } from "./contexts/ResetPasswordContext";

import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/features/userDataSlice";

import { QueryClient, QueryClientProvider } from "react-query";
import { default as UserHeader } from "./components/Header/Header";
import Signup from "./components/Signup/Signup";
import Trivia from "./components/Trivia/Trivia";
import TokenService from "./services/token";
import UserService from "./services/user/user";
import Title from "./components/Title/Title";

function App() {
  const dispatch = useDispatch();

  const queryClient = new QueryClient();

  useEffect(() => {
    if (TokenService.getLocalAccessToken()) {
      const fetchUserData = async () => {
        UserService.getData()
          .then((res) => {
            dispatch(setUserData(res.data));
          })
          .catch((err) => console.log(err));
      };
      fetchUserData();
    }
  }, []);

  const Header = () => {
    return (
      <>
        <UserHeader />
        <Outlet />
      </>
    );
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ResetPasswordProvider>
          <Router>
            <Title></Title>
            <Box w="100%">
              <Reconnecting></Reconnecting>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/verification" element={<Verification />} />
                <Route path="/setnewpassword" element={<SetNewPassword />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="*" element={<Error />} />
                <Route element={<Header />}>
                  <Route exact path="/" element={<Landing />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/latestbattle" element={<LatestBattle />} />
                  <Route path="/recentbattle" element={<RecentBattle />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/battle" element={<GameRoom />} />
                  <Route path="/footergeneral" element={<FooterGeneral />} />
                  <Route path="/footertrans" element={<FooterTrans />} />
                  <Route
                    path="/trivia/"
                    element={<Navigate replace to="/trivia/daily" />}
                  />
                  <Route path="/trivia/:category" element={<Trivia />} />
                  <Route path="/registerbattle" element={<Register />} />
                  <Route path="/wallet" element={<WalletLayout />}>
                    <Route index element={<Wallet />} />
                    <Route path="addmoney" element={<AddMoney />} />
                    <Route path="cards" element={<AddCard />} />
                    <Route path="withdraw" element={<Withdraw />} />
                  </Route>

                  <Route path="/adminlogin" element={<AdminLogin />} />
                  <Route path="/dashboard" element={<DashBoard />} />
                  <Route path="/areaoverview" element={<AreaOverview />} />
                  <Route path="/createbattle" element={<CreateBattle />} />
                  <Route path="/gameroom" element={<GameRoom />} />
                  <Route path="/areaoverview2" element={<AreaOverview2 />} />

                  <Route path="/graphs" element={<Graphs />} />
                  <Route path="/adminheader" element={<AdminHeader />} />
                  <Route path="/profileuser" element={<ProfileUser />} />
                  <Route path="/gameplay" element={<Gameplay />} />
                  <Route path="/authentication" element={<Authentication />} />

                  <Route path="/war" element={<WarRoom />} />
                  <Route path="/warroom" element={<WarRoomCategory />} />
                  <Route path="/freebattles" element={<FreeBattle />} />
                  <Route path="/leaderboards" element={<Leaderboards />} />

                  <Route path="/support" element={<Support />} />
                </Route>
              </Routes>
            </Box>
          </Router>
        </ResetPasswordProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
