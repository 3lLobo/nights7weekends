import HomeWrapper from "../components/layout";
import { useForm } from "react-hook-form";



export default function NewQuoteRoute() {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const inputClassName = `w-full rounded-xl border border-aqua px-2 py-1 text-lg text-navy outline-aqua bg-opacity-60 bg-charcoal-muted `;
    return (
        <HomeWrapper>
            {/* <div className=" flex justify-center items-center content-center bg-gradient-to-tr from-slate-900 via-charcoal to-charcoal-muted h-screen w-screen"> */}
            <div className="mx-auto my-10 md:w-2/3 lg:w-1/2 bg-gradient-to-b from-aqua to-aqua-muted px-5 py-6 rounded-xl shadow-3xl">
                <form method="post" onSubmit={handleSubmit(onSubmit)}>
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
                    {/* Add Report
                        </input> */}
                </form>
            </div>
            {/* </div> */}
        </HomeWrapper>
    )
}