"use client";
import React from "react"
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  HomeIcon,
  Mail,
  Phone,
} from "lucide-react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export default function ContactUs() {
  const { setTheme } = useTheme();
  setTheme("light");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/Map"), {
        loading: () => (
          <div className="w-full h-full">
            <Skeleton className="flex flex-1 w-full h-full" />
          </div>
        ),
        ssr: false,
      }),
    []
  );
  return (
    <>
      <div className="flex justify-center">
  <h1 className="">Want to reach out to Us?</h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="col-span-1">
    <div className="flex w-full justify-center">
      <h2 className="text-center">Contact Us</h2>
    </div>
    <div>
      <p>
        Feel free to call, shoot us an Email or send us a message through the
        form at any time
      </p>
      <div className="flex space-x-2">
        <Mail />
        <p>
          <a href="mailto:joseph.awer@gmail.com">joseph.awer@gmail.com</a>
        </p>
      </div>
      <div className="flex space-x-2">
        <Phone />
        <p>
          <a href="tel:+233577210669">+233 577 210 669</a>
        </p>
      </div>
      <div className="flex space-x-2">
        <HomeIcon />
        <p>
          Fish ST 15<br />Tema Community 21 Annex<br />Ghana
        </p>
      </div>
      <div className="flex flex-col">
        <h2>Follow Our Socials</h2>
        <Socials />
      </div>
    </div>
    <div className="border mt-3 p-3">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
        <div>
          <label htmlFor="name">
            <p>Name</p>
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">
            <p>Email</p>
          </label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="message">
            <p>Message</p>
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Send
        </Button>
      </form>
    </div>
  </div>
  <div className="col-span-1 flex flex-col">
    <div className="flex w-full justify-center">
      <h2 className="text-center">Find Us</h2>
    </div>
          <div className=" h-dvh w-full  ">
    <Map  posix={[5.704745, -0.024328]} /></div>
  </div>
</div>

    </>
  );
}

