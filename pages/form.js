import HomeWrapper from "../components/layout";
import { useForm } from "react-hook-form";
import { mainnetScaffoldEthProvider } from "../app/appConfig";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";



export default function NewQuoteRoute() {
    const store = useSelector((state) => state.eth);
    const dispatch = useDispatch();
    const router = useRouter()

    // // Login listener
    // useEffect(() => {
    //     if (!store.connected) {
    //         router.push('/')
    //     }
    // }, [store.connected, router])


    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const provider = mainnetScaffoldEthProvider


    const inputClassName = `w-full rounded-xl border border-aqua px-2 py-1 text-lg text-navy outline-aqua bg-opacity-60 bg-charcoal-muted `;
    return (
        <HomeWrapper>
            <div
                className="mx-auto mt-6 md:w-2/3 lg:w-1/2 bg-gradient-to-b from-aqua to-aqua-muted dark:bg-indigo-400 dark:bg-opacity-10 px-5 py-6 rounded-xl shadow-3xl"
            >
                <form
                    method="post"
                    onSubmit={handleSubmit(onSubmit)}>
                    <label className="ml-2 text-lg leading-7 text-navy">
                        Malicious IPv4:
                        <input
                            type="text"
                            className={inputClassName}
                            name="ip"
                            required
                            {...register("ip", { required: true, maxLength: 20 })}
                        />
                    </label>
                    <label className="ml-2 text-lg leading-7 text-navy">
                        Malicious Observation:
                        <textarea
                            required
                            className={`${inputClassName} resize-none `}
                            id=""
                            cols={30}
                            rows={10}
                            name="obs"
                            {...register("obs",)}
                        ></textarea>
                    </label>
                    <input
                        className="my-4 py-3 px-10 text-lime-900 uppercase shadow-2xl border-1 hover:scale-105 transition ease-in-out duration-200 rounded-xl bg-blue-300 hover:bg-blue-200"
                        type="submit"
                    />
                </form>
            </div>
        </HomeWrapper>
    )
}