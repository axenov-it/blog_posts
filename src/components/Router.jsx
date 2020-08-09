import React from "react";
import { Switch, Route } from "react-router-dom";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import About from "./pages/About";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route path="/post/:id" component={Post} />
      <Route path="/about" component={About} />
    </Switch>
  );
}
