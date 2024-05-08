import React from "react";
import Nav from "./Nav";

export default function HomePage() {
  return (
    <>
      <header>
        <Nav />
        <section className="hero"></section>
        <section className="companies"></section>
      </header>
      <main>
        <section className="courses"></section>
        <section className="reviews"></section>
        <section className="trending"></section>
        <section className="recomendation"></section>
        <section className="categories"></section>
        <section className="featured"></section>
        <section className="udemy-business"></section>
        <section className="customer-stories"></section>
        <section className="jobs"></section>
      </main>
      <footer></footer>
    </>
  );
}
