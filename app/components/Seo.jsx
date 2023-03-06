"use client"
import { NextSeo } from "next-seo";

export default function MainPageSeo(){
    return(<NextSeo
    title="Home: nine4"
    description="Welcome to nine4 homepage."
    canonical="https://nine4-3.vercel.app/"
    openGraph={{
      url: "https://nine4-3.vercel.app/",
    }}
  />)
}