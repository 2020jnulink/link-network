import React from "react";
import { HashRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import MyPage from "./components/MyPage";
import PasswordCheck from "./components/PasswordCheck";
import MyInform from "./components/MyInform";
import MyList from "./components/MyList";
import Shop from "./components/Shop";
import Product from "./components/Product";
import InsuranceSuggestion from "./components/InsuranceSuggestion";
import InsuranceJoin from "./components/InsuranceJoin";
import Payment from "./components/Payment";
import PaymentCompleted from "./components/PaymentCompleted";
import InsuranceList from "./components/InsuranceList";
import InsuranceRequest from "./components/InsuranceRequest";
import RequestComplete from "./components/RequestComplete";
import RequestList from "./components/RequestList";
import RequestDetail from "./components/RequestDetail";

function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route path="/mypage" exact={true} component={MyPage} />
      <Route path="/mypage/passwordcheck" component={PasswordCheck} />
      <Route path="/mypage/myinform" component={MyInform} />
      <Route path="/mypage/mylist" component={MyList} />
      <Route path="/shop" exact={true} component={Shop} />
      <Route path="/shop/product" exact={true} component={Product} />
      <Route path="/shop/product/suggestion" component={InsuranceSuggestion} />
      <Route path="/shop/product/join" component={InsuranceJoin} />
      <Route path="/shop/product/payment" component={Payment} />
      <Route
        path="/shop/product/paymentcompleted"
        component={PaymentCompleted}
      />
      <Route path="/insurance" exact={true} component={InsuranceList} />
      <Route path="/insurance/request" component={InsuranceRequest} />
      <Route path="/insurance/requestcomplete" component={RequestComplete} />
      <Route path="/mypage/request" exact={true} component={RequestList} />
      <Route path="/mypage/request/detail" component={RequestDetail} />
    </HashRouter>
  );
}

export default App;
